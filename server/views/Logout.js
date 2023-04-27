function logoutUser(req, res) {
    res.clearCookie('jwt');
    res.send('התנתקות בוצעה בהצלחה');
  }
  
  module.exports = {
    logoutUser,
  };
  