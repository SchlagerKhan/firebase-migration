const fs = require("fs");
const path = require("path");
const sha = require("sha1");

const { user, SALT } = require("./opts.js");
const { email, password } = user;

const passwordHash = sha(`${SALT}${password}`); // password <=> aa2cc735aa01f661a39d6a03214d2e551eb0d8ad
const passwordHashBase64 = Buffer.from(passwordHash, 'hex').toString("base64"); // password <=> /CLsqgJy/ghq+WzN2jXG0iAWZJY=
const saltBase64 = Buffer.from(SALT).toString("base64"); // 123456789 <=> MTIzNDU2Nzg5

const users = [
  {
    localId: 1,
    email,
    passwordHash: passwordHashBase64,
    salt: saltBase64
  }
];

fs.writeFileSync(
  // prettier-ignore
  path.join(__dirname, 'users.json'),
  JSON.stringify({ users }, null, 4)
);
