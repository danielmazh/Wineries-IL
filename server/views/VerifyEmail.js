// // server\views\VerifyEmail.js
// const { query } = require('../db'); // Assuming you have a db.js file that exports the 'query' function
// const format = require('pg-format');

// require('dotenv').config();


// function verifyEmail(req, res, next) {
//   console.log('verifyEmail function called');
//   const token = req.params.token;
//   const queryString = format(`SELECT * FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L AND expires_at > %L`, token, new Date().toISOString());

//   query(queryString, (err, result) => {
//     if (err) {
//       next(err);
//     } else if (!result.rows[0]) {
//       // res.status(400).send("האימות נכשל, נסו שוב");
//       res.status(400).send(`
//       <p>המייל אומת בהצלחה, <a href="https://www.wineries-il.co.il/">חזרה להתחברות</a></p>
//     `);


//     } else {
//       const row = result.rows[0];
//       const queryString2 = format(`UPDATE ${process.env.TABLE_NAME}.users SET email_verified = 1 WHERE id = %L`, row.user_id);

//       query(queryString2, (err) => {
//         if (err) {
//           next(err);
//         } else {
//           // Delete the used token from the email_verification_tokens table
//           const queryString3 = format(`DELETE FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L`, token);

//           query(queryString3, (err) => {
//             if (err) {
//               next(err);
//             } else {
//               // res.send("המייל אומת בהצלחה, ניתן לסגור חלון זה");
//               res.send(`
//                 <p>המייל אומת בהצלחה, <a href="https://www.wineries-il.co.il/">חזרה להתחברות</a></p>
//               `);

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






// // server\views\VerifyEmail.js
// const { query } = require('../db'); // Assuming you have a db.js file that exports the 'query' function
// const format = require('pg-format');

// require('dotenv').config();
// function verifyEmail(req, res, next) {
//   console.log('verifyEmail function called');
//   const token = req.params.token;
//   const queryString = format(`SELECT * FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L AND expires_at > %L`, token, new Date().toISOString());

//   query(queryString, async (err, result) => {
//     if (err) {
//       next(err);
//     } else if (!result.rows[0]) {

//       res.status(400).send(`
//         <p>האימות נכשל, נסו שוב. <a href="https://www.wineries-il.co.il/Login/">חזרה להתחברות</a></p>
//       `);
//     } else {
//       const row = result.rows[0];
//       const queryString2 = format(`SELECT email_verified FROM ${process.env.TABLE_NAME}.users WHERE id = %L`, row.user_id);

//       const userEmailVerificationStatus = await query(queryString2);
//       if (userEmailVerificationStatus.rows[0].email_verified) {

//         //<p>המייל כבר אומת בעבר, <a href="https://www.wineries-il.co.il/Login/">חזרה להתחברות</a></p>

//         res.send(`
//           <p>המייל כבר אומת בעבר, <a href="https://www.wineries-il.co.il/Login/">חזרה להתחברות</a></p>
//         `);
//       } else {
//         const queryString3 = format(`UPDATE ${process.env.TABLE_NAME}.users SET email_verified = 1 WHERE id = %L`, row.user_id);
//         query(queryString3, (err) => {
//           if (err) {
//             next(err);
//           } else {
//             // Delete the used token from the email_verification_tokens table
//             const queryString4 = format(`DELETE FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L`, token);

//             query(queryString4, (err) => {
//               if (err) {
//                 next(err);
//               } else {
//                 res.send(`
//                   <p>המייל אומת בהצלחה, <a href="https://www.wineries-il.co.il/Login/">חזרה להתחברות</a></p>
//                 `);
//               }
//             });
//           }
//         });
//       }
//     }
//   });
// }


// module.exports = {
//   verifyEmail,
// };












// server\views\VerifyEmail.js
const { query } = require('../db'); // Assuming you have a db.js file that exports the 'query' function
const format = require('pg-format');

require('dotenv').config();

// Add this to the top of your VerifyEmail.js file
const rateLimiter = {};

function verifyEmail(req, res, next) {
  console.log('verifyEmail function called');
  const token = req.params.token;

  // Check if the token was used in the last 3 seconds
  const currentTime = Date.now();
  if (rateLimiter[token] && currentTime - rateLimiter[token] < 3000) {
    console.log('log1')
    res.send(`
      <p>המייל אומת בהצלחה, <a href="https://www.wineries-il.co.il/">חזרה להתחברות</a></p>
    `);
    return;
  }
  rateLimiter[token] = currentTime;

  const queryString = format(`SELECT * FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L AND expires_at > %L`, token, new Date().toISOString());

  query(queryString, async (err, result) => {
    if (err) {
      next(err);
    } else if (!result.rows[0]) {
      console.log('log2')
      res.status(400).send(`
        <p>האימות נכשל, נסו שוב. <a href="https://www.wineries-il.co.il/">חזרה להתחברות</a></p>
      `);
    } else {
      const row = result.rows[0];
      const queryString2 = format(`SELECT email_verified FROM ${process.env.TABLE_NAME}.users WHERE id = %L`, row.user_id);

      const userEmailVerificationStatus = await query(queryString2);
      if (userEmailVerificationStatus.rows[0].email_verified) {
        console.log('log3')
        res.send(`
          <p>המייל כבר אומת בעבר, <a href="https://www.wineries-il.co.il/">חזרה להתחברות</a></p>
        `);
      } else {
        const queryString3 = format(`UPDATE ${process.env.TABLE_NAME}.users SET email_verified = 1 WHERE id = %L`, row.user_id);
        query(queryString3, (err) => {
          if (err) {
            next(err);
          } else {
            // Delete the used token from the email_verification_tokens table
            const queryString4 = format(`DELETE FROM ${process.env.TABLE_NAME}.email_verification_tokens WHERE token = %L`, token);

            query(queryString4, (err) => {
              if (err) {
                next(err);
              } else {
                console.log('log4')
                res.send(`
                  <p>המייל אומת בהצלחה, <a href="https://www.wineries-il.co.il/">חזרה להתחברות</a></p>
                `);
              }
            });
          }
        });
      }
    }
  });
}



module.exports = {
  verifyEmail,
};
