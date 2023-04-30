// server\views\UserData.js

// const UserDataService = require("../services/UserData");

// async function userData(req, res) {
//   const storedData = req.body;
//   // console.log(storedData);

//   try {
//     UserDataService.storedFormData = storedData; // Store the form data in UserDataService
//     // console.log(UserDataService.storedFormData);
//     res.send(UserDataService.storedFormData);

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error confirming FormData");
//   }
// }


// async function getUserData(req, res) {
//   try {
//     const storedData = UserDataService.storedFormData; // Get the stored form data
//     const results = await UserDataService.userData(storedData); // Use the form data to fetch query results
//     console.log('Results from DB:', results);

//     res.send(JSON.stringify(results));

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error confirming FormData");
//   }
// }

// module.exports = {
//   userData , getUserData
// };






// server\views\UserData.js

const UserDataService = require("../services/UserData");
const logger = require('../logger');

async function userData(req, res) {
  const storedData = req.body;

  try {
    UserDataService.storedFormData = storedData; // Store the form data in UserDataService
    res.send(UserDataService.storedFormData);

  } catch (err) {
    logger.error('Error confirming FormData:', err);
    res.status(500).send("Error confirming FormData");
  }
}

async function getUserData(req, res) {
  try {
    const storedData = UserDataService.storedFormData; // Get the stored form data
    const results = await UserDataService.userData(storedData); // Use the form data to fetch query results

    res.send(JSON.stringify(results));

    logger.info('Results from DB:', results);

  } catch (err) {
    logger.error('Error confirming FormData:', err);
    res.status(500).send("Error confirming FormData");
  }
}

module.exports = {
  userData , getUserData
};
