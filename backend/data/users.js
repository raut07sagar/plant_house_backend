const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sagar",
    email: "Sagar@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
