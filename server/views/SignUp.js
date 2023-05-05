// server\views\SignUp.js
const signUpService = require("../services/SignUp");

function signUp(req, res, next) {
  console.log('SignUp route called'); // Add this line
  const { username, email, password, firstName, lastName } = req.body;

  signUpService.signUp(username, email, password, firstName, lastName)
    .then((user) => {
      res.send(`User ${user.username} signed up successfully`);
      console.log('22'); // Add this line

    })
    .catch((err) => {
      if (err.message === "כתובת המייל כבר נמצאת בשימוש" || err.message === "שם משתמש כבר נמצא בשימוש") {
        res.status(400).send(err.message);
        console.log('23'); // Add this line

      } else {
        next(err);
        console.log('24'); // Add this line

      }
    });
}

module.exports = {
  signUp,
};
