const express = require("express");
const appRoutes = require("./routers/AppRoutes");
const config = require("./config");
const jwt = require('jsonwebtoken');
const path = require('path');
const getProfilePictureUrl = require('./services/getProfilePictureUrl');
const multer = require('multer'); // ADDED: import multer

const { addWinery, uploadWineryLogo } = require('./views/WineryAdd'); // ADDED: import addWinery and uploadWineryLogo
const { verifyEmail } = require('./views/VerifyEmail');


const PORT = process.env.PORT || 3001;

const app = express();

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.use(express.json());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use('/userProfile', express.static(path.join(__dirname, '../client/src/assets/profile/userProfile')));


// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/verify-email/:token', verifyEmail);


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});



// app.use("/api", getProfilePictureUrl);
// app.use("/api", appRoutes);


app.get("/api/getProfilePictureUrl", getProfilePictureUrl); // Add this line before app.use("/api", appRoutes)
app.use("/api", appRoutes);



// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../client/src/assets/winery-logo'));
  },
  filename: (req, file, cb) => {
    const wineryID = req.params.wineryID;
    cb(null, `${wineryID}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage }); 

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
