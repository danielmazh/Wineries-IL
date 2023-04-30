// server\views\UserData.js

const UserDataService = require("../services/UserData");

async function userData(req, res) {
  const storedData = req.body;
  // console.log(storedData);

  try {
    UserDataService.storedFormData = storedData; // Store the form data in UserDataService
    // console.log(UserDataService.storedFormData);

    console.log('send \views\UserData.js:', UserDataService.storedFormData);
    res.send(UserDataService.storedFormData);

  } catch (err) {
    console.error(err);
    console.log('ERROR1 \views\UserData.js:', err);

    res.status(500).send("Error confirming FormData");
  }
}


// async function getUserData(req, res) {
//   try {
//     const storedData = UserDataService.storedFormData; // Get the stored form data
//     const results = await UserDataService.userData(storedData); // Use the form data to fetch query results

//     console.log('storedData/Results \views\UserData.js:', results, storedData);
//     res.send(JSON.stringify(results));

//   } catch (err) {
//     console.error(err);
//     console.log('ERROR2 \views\UserData.js:', err);
//     res.status(500).send("Error confirming FormData");
//   }
// }

async function getUserData(req, res) {
  try {
    const storedData = UserDataService.storedFormData; // Get the stored form data
    const results = await UserDataService.userData(storedData); // Use the form data to fetch query results

    console.log('storedData/Results \views\UserData.js:', results, storedData);
    res.json(results); // Change this line from res.send() to res.json()

  } catch (err) {
    console.error(err);
    console.log('ERROR2 \views\UserData.js:', err);
    res.status(500).send("Error confirming FormData");
  }
}





module.exports = {
  userData , getUserData
};
