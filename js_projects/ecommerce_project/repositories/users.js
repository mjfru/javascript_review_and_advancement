const fs = require("fs");
const crypto = require("crypto");
const util = require("util");
const Repository = require('./repository');
const scrypt = util.promisify(crypto.scrypt);

// Make the Repository methods available in UsersRepository:
class UsersRepository extends Repository {
  // Check and see if there's already a file created to store information:
    // Create
    async create(attributes) {
      // Remember, attributes has email: 'string', password: 'string'
      attributes.id = this.randomId();
  
      // A random series of numbers and letters for our salt:
      const salt = crypto.randomBytes(8).toString("hex");
      
      // Creating the hash:
      const buf = await scrypt(attributes.password, salt, 64);
  
      const records = await this.getAll(); // Getting all the users array
      // Add the new user to the array
      const record = {
        // Take all the properties from attributes
        ...attributes,
        // But replace the default password with this:
        password: `${buf.toString("hex")}.${salt}`,
      };
      records.push(record);
  
      await this.writeAll(records);
      return record;
    }
  
    // Compare passwords:
    async comparePasswords(saved, supplied) {
      // Saved = password saved in our DB. 'hashed.salt'
      // Supplied = password given to us by a user.
      const [hashed, salt] = saved.split('.');
      const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

      return hashed === hashedSuppliedBuf.toString('hex');
    }
}

module.exports = new UsersRepository("users.json");
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
