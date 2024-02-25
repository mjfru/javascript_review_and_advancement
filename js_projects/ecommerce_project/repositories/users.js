const fs = require("fs");

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
    const contents = await fs.promises.readFile(this.filename, { encoding: 'utf8' });
    // Read its contents
    console.log(contents);
    // Parse the contents
    const data = JSON.parse(contents);
    /// Return the parsed data
    return data;
  }
}

const test = async () => {
  const repo = new UsersRepository("users.json");
  const users = await repo.getall();
  console.log(users);
}

test();