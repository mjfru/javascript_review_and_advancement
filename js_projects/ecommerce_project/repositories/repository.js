const fs = require("fs");
const crypto = require("crypto");

module.exports = class Repository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename.");
    }
    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async create(attrs) {
    attrs.id = this.randomId();
    const records = await this.getAll();
    records.push(attrs);
    await this.writeAll(records);

    return attrs;
  }

  async getAll() {
    // Open the file called this.filename
    return JSON.parse(
      await fs.promises.readFile(this.filename, { encoding: "utf8" })
    );
  }

  // Write All
  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  // Generating and assigning a random ID:
  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  // Get One:
  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  // Delete One:
  async delete(id) {
    const records = await this.getAll();
    const filteredRecords = records.filter((record) => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  // Update
  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);
    if (!record) {
      throw new Error(`Record with id ${id} not found!`);
    }
    // record === {email: 'test@test.com'} attrs === {password: newpassword}
    Object.assign(record, attrs);
    // record == { email: 'test@test.com', password: 'newpassword' }
    await this.writeAll(records);
  }

  // Get One:
  async getOneBy(filters) {
    const records = await this.getAll();
    // Iterating through an array
    for (let record of records) {
      let found = true;
      // 'In' indicating we're iterating through an object
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }
      if (found) {
        return record;
      }
    }
  }
};
