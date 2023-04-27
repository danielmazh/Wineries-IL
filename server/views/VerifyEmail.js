// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("./server/SQL/wineries.db");

// function verifyEmail(req, res, next) {
//   const token = req.params.token;

//   db.get("SELECT * FROM email_verification_tokens WHERE token = ? AND expires_at > ?", [token, new Date().toISOString()], (err, row) => {
//     if (err) {
//       next(err);
//     } else if (!row) {
//       res.status(400).send("האימות נכשל, נסו שוב");
//     } else {
//       db.run("UPDATE users SET email_verified = 1 WHERE id = ?", [row.user_id], (err) => {
//         if (err) {
//           next(err);
//         } else {
//           // Delete the used token from the email_verification_tokens table
//           db.run("DELETE FROM email_verification_tokens WHERE token = ?", [token], (err) => {
//             if (err) {
//               next(err);
//             } else {
//               res.send("המייל אומת בהצלחה, ניתן לסגור חלון זה");
//             }
//           });
//         }
//       });
//     }
//   });
// }

// module.exports = {
//   verifyEmail,
// };



const { query } = require('../db'); // Assuming you have a db.js file that exports the 'query' function
const format = require('pg-format');

require('dotenv').config();


function verifyEmail(req, res, next) {
  console.log('verifyEmail function called');
  const token = req.params.token;
  const queryString = format(`SELECT * FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L AND expires_at > %L`, token, new Date().toISOString());

  query(queryString, (err, result) => {
    if (err) {
      next(err);
    } else if (!result.rows[0]) {
      res.status(400).send("האימות נכשל, נסו שוב");
    } else {
      const row = result.rows[0];
      const queryString2 = format(`UPDATE ${process.env.TABLE_NAME}.users SET email_verified = 1 WHERE id = %L`, row.user_id);

      query(queryString2, (err) => {
        if (err) {
          next(err);
        } else {
          // Delete the used token from the email_verification_tokens table
          const queryString3 = format(`DELETE FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L`, token);

          query(queryString3, (err) => {
            if (err) {
              next(err);
            } else {
              res.send("המייל אומת בהצלחה, ניתן לסגור חלון זה");
            }
          });
        }
      });
    }
  });
}

module.exports = {
  verifyEmail,
};
