const jwt = require('jsonwebtoken');
const { query } = require('../db'); // Assuming you have a db.js file that exports the 'query' function
const bcrypt = require('bcrypt');
const format = require('pg-format');

function loginUser(email, password) {
  const queryString = format("SELECT * FROM users WHERE email ILIKE %L", email);

  return new Promise((resolve, reject) => {
    query(queryString, async (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      const row = result.rows[0];

      if (!row) {
        console.log(`No user found with email ${email}`);
        resolve(null);
        return;
      }

      if (row.email_verified === false) {
        console.log(`Email not verified for user ${row.id}`);
        resolve({ emailNotVerified: true });
        return;
      }

      const isPasswordMatch = await bcrypt.compare(password, row.password);

      if (!isPasswordMatch) {
        console.log(`Password does not match for user ${row.id}`);
        resolve(null);
        return;
      }

      console.log(`Logged in user ${row.id}. Email: ${row.email} Username: ${row.username}`);
      const user = {
        id: row.id,
        email: row.email,
        first_name: row.first_name,
        last_name: row.last_name,
      };
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
      resolve({ token, first_name: row.first_name, last_name: row.last_name, username: row.username });
    });
  });
}

module.exports = {
  loginUser,
};

