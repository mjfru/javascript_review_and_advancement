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
    return JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
  }
}

const test = async () => {
  const repo = new UsersRepository("users.json");
  const users = await repo.getall();
  console.log(users);
}

test();