// const bcrypt = require("bcrypt");
// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("./server/SQL/wineries.db");
// const config = require('../config');
// // require('dotenv').config();


// const crypto = require('crypto');
// const nodemailer = require('nodemailer');


// function signUp(username, email, password, firstName, lastName) {
//   return new Promise((resolve, reject) => {
//     db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
//       if (err) {
//         reject(err);
//       } else if (row) {
//         // Email already exists in database
//         reject(new Error("כתובת המייל כבר נמצאת בשימוש"));
//       } else {
//         db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
//           if (err) {
//             reject(err);
//           } else if (row) {
//             // Username already exists in database
//             reject(new Error("שם משתמש כבר נמצא בשימוש"));
//           } else {
//             bcrypt.hash(password, 10, function (err, hash) {
//               if (err) {
//                 reject(err);
//               } else {
//                 db.run(
//                   "INSERT INTO users (username, email, password, first_name, last_name) VALUES (?, ?, ?, ?, ?)",
//                   [username, email, hash, firstName, lastName],
//                   function(err) { 
//                     if (err) {
//                       reject(err);
//                     } else {
//                       const userId = this.lastID;
//                       const token = generateToken();
//                       const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
//                       const expiresAt = new Date(Date.now() + expiresIn);
                 
//                       db.run(
//                         "INSERT INTO email_verification_tokens (user_id, token, expires_at) VALUES (?, ?, ?)",
//                         [userId, token, expiresAt.toISOString()],
//                         (err) => {
//                           if (err) {
//                             reject(err);
//                           } else {
//                             // Send the email with the token
//                             sendVerificationEmail(email, token)
//                               .then(() => {
//                                 resolve({ username, email, firstName, lastName });
//                               })
//                               .catch((err) => {
//                                 reject(err);
//                               });
//                           }
//                         }
//                       );
//                     }
//                   }
//                 );
//               }
//             });
//           }
//         });
//       }
//     });
//   });
// }



// function generateToken() {
//   return crypto.randomBytes(32).toString('hex');
// }



// async function sendVerificationEmail(email, token) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'earful2357@gmail.com', 
//       // pass: 'PE5GobbpNZKHpg', 
//       pass: 'wppmlzlemkqfhmma'

//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//     // e.g. Gmail: https://nodemailer.com/usage/using-gmail/
//   });

//   const verificationLink = `${config.siteUrl}/verify-email/${token}`;
//   // http://localhost:3000/verify-email/${token}

//   const mailOptions = {
//     from: '"wineries-il" <earful2357@gmail.com>',
//     to: email,
//     subject: 'Wineries-IL - אימות כתובת דוא"ל',
//     html: `<div style="text-align: center;">
//             <a href="${verificationLink}" style="background-color: #CD5C5C; border: none; font-size: 28px; color: #FFFFFF; padding: 10px; width: 200px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-weight: bold;">אימות משתמש</a>
//           </div>
//     `,
//   };

//   return transporter.sendMail(mailOptions);
// }

// module.exports = {
//   signUp,
// };












// // NEW POSTGRESQL CODE
// const bcrypt = require("bcrypt");
// const { query } = require("../db");
// const format = require('pg-format');


// const config = require('../config');

// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

// function signUp(username, email, password, firstName, lastName) {
//   console.log('SignUp function called');

//   // return new Promise((resolve, reject) => {
//   //   const queryString = "SELECT * FROM users WHERE email = $1";
    
//   //   console.log("Executing query:", queryString, "with parameters:", [email]);


//   //   // query(queryString, [email], (err, result) => {
      
//   //     query("SELECT * FROM users WHERE email = 'daniel.mazhbits@gmail.com'", (err, result) => {

//   //     console.log('Query 1 executed');

//   return new Promise((resolve, reject) => {
//     const queryString = format("SELECT * FROM users WHERE email = %L", email);
//     console.log("Executing query:", queryString);
  
//     query(queryString, (err, result) => {
      
//       if (err) {
//         console.error('Query 1 error:', err);
//         reject(err);
//       } else {
//         const row = result.rows[0];
//         if (row) {
//           console.log('Email already exists');
//           reject(new Error("כתובת המייל כבר נמצאת בשימוש"));
//         } else {
//           const queryString2 = "SELECT * FROM users WHERE username = $1";
//           console.log("Executing query:", queryString2, "with parameters:", [username]);

//           query(queryString2, [username], (err, result) => {
//             console.log('Query 2 executed');
//             if (err) {
//               console.error('Query 2 error:', err);
//               reject(err);
//             } else {
//               const row = result.rows[0];
//               if (row) {
//                 console.log('Username already exists');
//                 reject(new Error("שם משתמש כבר נמצא בשימוש"));
//               } else {
//                 bcrypt.hash(password, 10, function (err, hash) {
//                   console.log('Password hashing');
//                   if (err) {
//                     console.error('Hashing error:', err);
//                     reject(err);
//                   } else {
//                     const queryString3 = "INSERT INTO users (username, email, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5) RETURNING id";
//                     console.log("Executing query:", queryString3, "with parameters:", [username, email, hash, firstName, lastName]);

//                     query(queryString3, [username, email, hash, firstName, lastName], (err, result) => {
//                       console.log('Query 3 executed');
//                       if (err) {
//                         console.error('Query 3 error:', err);
//                         reject(err);
//                       } else {
//                         const userId = result.rows[0].id;
//                         const token = generateToken();
//                         const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
//                         const expiresAt = new Date(Date.now() + expiresIn);

//                         const queryString4 = "INSERT INTO email_verification_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)";
//                         console.log("Executing query:", queryString4, "with parameters:", [userId, token, expiresAt.toISOString()]);

//                         query(queryString4, [userId, token, expiresAt.toISOString()], (err) => {
//                           console.log('Query 4 executed');
//                           if (err) {
//                             console.error('Query 4 error:', err);
//                             reject(err);
//                           } else {
//                             sendVerificationEmail(email, token)
//                               .then(() => {
//                                 console.log('Email sent successfully');
//                                 resolve({ username, email, firstName, lastName });
//                               })
//                               .catch((err) => {
//                                 console.error('Sending email error:', err);
//                                 reject(err);
//                               });
//                           }
//                         });
//                       }
//                     });
//                   }
//                 });
//               }
//             }
//           });
//         }
//       }
//     });
//   });
// }

// function generateToken() {
//   return crypto.randomBytes(32).toString('hex');
// }

// async function sendVerificationEmail(email, token) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'earful2357@gmail.com', 
//       pass: 'wppmlzlemkqfhmma'
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const verificationLink = `${config.siteUrl}/verify-email/${token}`;

//   const mailOptions = {
//     from: '"wineries-il" <earful2357@gmail.com>',
//     to: email,
//     subject: 'Wineries-IL - אימות כתובת דוא"ל',
//     html: `<div style="text-align: center;">
//             <a href="${verificationLink}" style="background-color: #CD5C5C; border: none; font-size: 28px; color: #FFFFFF; padding: 10px; width: 200px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-weight: bold;">אימות משתמש</a>
//           </div>
//     `,
//   };

//   return transporter.sendMail(mailOptions);
// }

// module.exports = {
//   signUp,
// };














// // NEW POSTGRESQL CODE
// const bcrypt = require("bcrypt");
// const { query } = require("../db");
// const format = require('pg-format');


// const config = require('../config');

// const crypto = require('crypto');
// const nodemailer = require('nodemailer');

// function signUp(username, email, password, firstName, lastName) {
//   console.log('SignUp function called');

//   return new Promise((resolve, reject) => {
//     const queryString = format("SELECT * FROM users WHERE email = %L", email);
//     // console.log("Executing query:", queryString);

//     query(queryString, (err, result) => {
//       if (err) {
//         console.error('Query 1 error:', err);
//         reject(err);
//       } else {
//         const row = result.rows[0];
//         if (row) {
//           console.log('Email already exists');
//           reject(new Error("כתובת המייל כבר נמצאת בשימוש"));
//         } else {
//           const queryString2 = format("SELECT * FROM users WHERE username = %L", username);
//           // console.log("Executing query:", queryString2);

//           query(queryString2, (err, result) => {
//             if (err) {
//               console.error('Query 2 error:', err);
//               reject(err);
//             } else {
//               const row = result.rows[0];
//               if (row) {
//                 console.log('Username already exists');
//                 reject(new Error("שם משתמש כבר נמצא בשימוש"));
//               } else {
//                 bcrypt.hash(password, 10, function (err, hash) {
//                   if (err) {
//                     console.error('Hashing error:', err);
//                     reject(err);
//                   } else {
//                     const queryString3 = format("INSERT INTO users (username, email, password, first_name, last_name) VALUES (%L, %L, %L, %L, %L) RETURNING id", username, email, hash, firstName, lastName);
//                     // console.log("Executing query:", queryString3);

//                     query(queryString3, (err, result) => {
//                       if (err) {
//                         console.error('Query 3 error:', err);
//                         reject(err);
//                       } else {
//                         const userId = result.rows[0].id;
//                         const token = generateToken();
//                         const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
//                         const expiresAt = new Date(Date.now() + expiresIn);

//                         const queryString4 = format("INSERT INTO email_verification_tokens (user_id, token, expires_at) VALUES (%L, %L, %L)", userId, token, expiresAt.toISOString());
//                         // console.log("Executing query:", queryString4);

//                         query(queryString4, (err) => {
//                           if (err) {
//                             console.error('Query 4 error:', err);
//                             reject(err);
//                           } else {
//                             sendVerificationEmail(email, token)
//                               .then(() => {
//                                 console.log('Email sent successfully');
//                                 resolve({ username, email, firstName, lastName });
//                               })
//                               .catch((err) => {
//                                 console.error('Sending email error:', err);
//                                 reject(err);
//                               });
//                           }
//                         });
//                       }
//                     });
//                   }
//                 });
//               }
//             }
//           });
//         }
//       }
//     });
//   });
// }


// function generateToken() {
//   return crypto.randomBytes(32).toString('hex');
// }

// async function sendVerificationEmail(email, token) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'earful2357@gmail.com', 
//       pass: 'wppmlzlemkqfhmma'
//     },
//     tls: {
//       rejectUnauthorized: false,
//     },
//   });

//   const verificationLink = `${config.siteUrl}/verify-email/${token}`;

//   const mailOptions = {
//     from: '"wineries-il" <earful2357@gmail.com>',
//     to: email,
//     subject: 'Wineries-IL - אימות כתובת דוא"ל',
//     html: `<div style="text-align: center;">
//             <a href="${verificationLink}" style="background-color: #CD5C5C; border: none; font-size: 28px; color: #FFFFFF; padding: 10px; width: 200px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-weight: bold;">אימות משתמש</a>
//           </div>
//     `,
//   };

//   return transporter.sendMail(mailOptions);
// }

// module.exports = {
//   signUp,
// };











// server\services\SignUp.js
const bcrypt = require("bcrypt");
const { query } = require("../db");
const format = require('pg-format');

require('dotenv').config();


const config = require('../config');

const crypto = require('crypto');
const nodemailer = require('nodemailer');

function signUp(username, email, password, firstName, lastName) {
  console.log('SignUp function called');

  return new Promise((resolve, reject) => {
    const queryString = format(`SELECT * FROM ${process.env.TABLE_NAME}.users WHERE email = %L`, email);
    // console.log("Executing query:", queryString);

    query(queryString, (err, result) => {
      if (err) {
        console.error('Query 1 error:', err);
        reject(err);
      } else {
        const row = result.rows[0];
        if (row) {
          console.log('Email already exists');
          reject(new Error("כתובת המייל כבר נמצאת בשימוש"));
        } else {
          const queryString2 = format(`SELECT * FROM ${process.env.TABLE_NAME}.users WHERE username = %L`, username);
          // console.log("Executing query:", queryString2);

          query(queryString2, (err, result) => {
            if (err) {
              console.error('Query 2 error:', err);
              reject(err);
            } else {
              const row = result.rows[0];
              if (row) {
                console.log('Username already exists');
                reject(new Error("שם משתמש כבר נמצא בשימוש"));
              } else {
                bcrypt.hash(password, 10, function (err, hash) {
                  if (err) {
                    console.error('Hashing error:', err);
                    reject(err);
                  } else {
                    const queryString3 = format(`INSERT INTO ${process.env.TABLE_NAME}.users (username, email, password, first_name, last_name) VALUES (%L, %L, %L, %L, %L) RETURNING id`, username, email, hash, firstName, lastName);
                    // console.log("Executing query:", queryString3);

                    query(queryString3, (err, result) => {
                      if (err) {
                        console.error('Query 3 error:', err);
                        reject(err);
                      } else {
                        const userId = result.rows[0].id;
                        const token = generateToken();
                        const expiresIn = 24 * 60 * 60 * 1000; // 24 hours
                        const expiresAt = new Date(Date.now() + expiresIn);

                        const queryString4 = format(`INSERT INTO ${process.env.TABLE_NAME}.email_verification_tokens (user_id, token, expires_at) VALUES (%L, %L, %L)`, userId, token, expiresAt.toISOString());
                        // console.log("Executing query:", queryString4);

                        query(queryString4, (err) => {
                          if (err) {
                            console.error('Query 4 error:', err);
                            reject(err);
                          } else {
                            sendVerificationEmail(email, token)
                              .then(() => {
                                console.log('Email sent successfully');
                                resolve({ username, email, firstName, lastName });
                              })
                              .catch((err) => {
                                console.error('Sending email error:', err);
                                reject(err);
                              });
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          });
        }
      }
    });
  });
}


function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

async function sendVerificationEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: `${process.env.EMAIL_USER}`, 
      pass: `${process.env.EMAIL_PASS}`
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // const verificationLink = `${config.siteUrl}/verify-email/${token}`;
  const verificationLink = `${config.siteUrl}/verify-email/${token}`;





  const mailOptions = {
    from: `"לא להשיב למייל זה" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Wineries-IL - אימות כתובת דוא"ל',
    html: `<div style="text-align: center;">
            <a href="${verificationLink}" style="background-color: #CD5C5C; border: none; font-size: 28px; color: #FFFFFF; padding: 10px; width: 200px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px; font-weight: bold;">אימות משתמש</a>
          </div>
    `,
  };
  

  return transporter.sendMail(mailOptions);
}

module.exports = {
  signUp,
};
