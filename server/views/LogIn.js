// const logInService = require("../services/LogIn");

// async function loginUser(req, res, next) {
//   const { email, password } = req.body;

//   try {
//     const result = await logInService.loginUser(email, password);
//     if (!result) {
//       res.status(401).send("כתובת מייל או סיסמא שגויים");
//       return;
//     }
    
    

//     if (result.emailNotVerified) {
//       res.status(401).send("יש לאמת את המייל תחילה");
//       return;
//     }

//     res.cookie("jwt", result.token, { httpOnly: true });
//     res.send({ token: result.token, first_name: result.first_name, last_name: result.last_name, username: result.username });
//   } catch (err) {
//     next(err);
//   }
// }


// module.exports = {
//   loginUser,
// };




const logInService = require("../services/LogIn");

async function loginUser(req, res, next) {
  const { email, password } = req.body;

  try {
    const result = await logInService.loginUser(email, password);
    if (!result) {
      res.status(401).send("כתובת מייל או סיסמא שגויים");
      return;
    }

    if (result.emailNotVerified) {
      res.status(401).send("יש לאמת את המייל תחילה");
      return;
    }

    res.cookie("jwt", result.token, { httpOnly: true });
    res.send({ token: result.token, first_name: result.first_name, last_name: result.last_name, username: result.username });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  loginUser,
};
