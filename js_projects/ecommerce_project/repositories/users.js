const fs = require("fs");
const crypto = require('crypto');

class UsersRepository {
  // Check and see if there's already a file created to store information:
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
  async getall() {
    // Open the file called this.filename
    return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
  }

  // Create
  async create(attributes) {
    attributes.id = this.randomId();
    // { email: '...@emailcom.', password: '...' };
    const records = await this.getall(); // Getting all the users array
    records.push(attributes); // Add the new user to the array
    
    await this.writeAll(records);
    return attributes;
  }

  // Write All
  async writeAll(records) {
    await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
  };
  
  // Generating and assigning a random ID:
  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }

  // Get One:
  async getOne(id) {
    const records = await this.getall();
    return records.find(record => record.id === id);
  }

  // Delete One:
  async delete(id) {
    const records = await this.getall();
    const filteredRecords = records.filter(record => record.id !== id);
    await this.writeAll(filteredRecords);
  }

  // Update
  async update(id, attributes) {
    const records = await this.getall();
    const record = records.find(record => record.id === id);
    if (!record) {
      throw new Error(`Record with id ${id} not found!`);
    }
    // record === {email: 'test@test.com'} attributes === {password: newpassword}
    Object.assign(record, attributes);
    // record == { email: 'test@test.com', password: 'newpassword' }
    await this.writeAll(records);
  }

  // Get One:
  async getOneBy(filters) {
    const records = await this.getall();
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

module.exports = new UsersRepository('users.json');
//? When we import from this file, we're going to receive an instance of UserRepository and begin to use it immediately.

/* 
! Tests
const test = async () => {
  const repo = new UsersRepository("users.json");
  
  await repo.create({ email: 'test2@test.com', password: 'password' });
  
  const users = await repo.getall();
  const user = await repo.getOne("aa9f1a04");
  console.log(user);

  await repo.delete("5f8db82d");

  await repo.update('64d2567e', { password: 'mynewpassword' })

  const user = await repo.getOneBy({ email: "test@test.com", password: "password" });
  console.log(user);
}

test();
*/