// server\views\UserData.js

const UserDataService = require("../services/UserData");

async function userData(req, res) {
  const storedData = req.body;
  // console.log(storedData);

  try {
    UserDataService.storedFormData = storedData; // Store the form data in UserDataService
    // console.log(UserDataService.storedFormData);

    console.log('send views.UserData.js:', UserDataService.storedFormData);
    res.send(UserDataService.storedFormData);

  } catch (err) {
    console.error(err);
    console.log('ERROR1 views.UserData.js:', err);

    res.status(500).send("Error confirming FormData");
  }
}

async function getUserData(req, res) {
  try {
    const storedData = UserDataService.storedFormData; // Get the stored form data
    const results = await UserDataService.userData(storedData); // Use the form data to fetch query results

    res.setHeader('Content-Type', 'application.json');

    console.log('This is the result from views.UserData:' ,results)
    
    // res.send(JSON.stringify(results));
    res.json(results); 

  } catch (err) {
    console.error('Error in getUserData  ------  views.UserData:', err);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  userData, getUserData
};

