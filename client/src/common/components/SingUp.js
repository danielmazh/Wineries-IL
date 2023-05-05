// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import wineriesLogo from '../../assets/WINERIES-LOGO.png';
// // import '../../styles/LogIn.css'; // Import custom CSS file


// const theme = createTheme();

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState(''); // add password confirm state
//   const [firstName, setFirstName] = useState(''); // add first name state
//   const [lastName, setLastName] = useState(''); // add last name state
//   const [message, setMessage] = useState(''); // add message state
//   const [firstNameError, setFirstNameError] = useState(false);
//   const [lastNameError, setLastNameError] = useState(false);
//   const [usernameError, setUsernameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [passwordConfirmError, setPasswordConfirmError] = useState(false);

//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handlePasswordConfirmChange = (e) => {
//     setPasswordConfirm(e.target.value);
//   };

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };


//   const validateEmail = (email) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     return emailRegex.test(email);
//   };
  

//   const errorStyle = {
//     borderColor: "red",
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setFirstNameError(!firstName);
//     setLastNameError(!lastName);
//     setUsernameError(!username);
//     setEmailError(!email);
//     setPasswordError(!password);
//     setPasswordConfirmError(!passwordConfirm);

//     if (!username || !email || !password || !firstName || !lastName) {
//       setMessage("יש למלא את כל השדות");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setMessage("כתובת הדואר אלקטרוני לא חוקית");
//       setEmailError(true);
//       return;
//     }

//     if (password !== passwordConfirm) {
//       setMessage('הסיסמא לא תואמת');
//       return;
//     }

//     try {
//       const response = await axios.post('/api/signup', {
//         username,
//         email,
//         password,
//         firstName,
//         lastName,
//       });
//       console.log('user-name', username);
//       console.log(response.data);
//       setMessage('SUCCESS!');
//       navigate('/login');
//     } catch (error) {
//       console.log("Error:", error.response.data);
//       setMessage(error.response.data);
//       if (error.response && error.response.data) {
//         // Update the conditions based on the error message format
//         if (error.response.data.includes("מייל")) {
//           setEmailError(true);
//         }
//         if (error.response.data.includes("משתמש")) {
//           setUsernameError(true);
//         }
//       }
//       setMessage(error.response.data);
//     }
    

    
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container dir='rtl' component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 10,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar> */}

//       {/* <Typography sx={{ mt: 5 }} >
//           </Typography> */}

//           <Avatar sx={{ m: 1, bgcolor: 'transparent', width: 100, height: 100, borderRadius: 0 }}>
//             <img src={wineriesLogo} alt="App Logo" width="100" height="100" />
//           </Avatar>

//           <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
//               {'Wineries-IL'}
//           </Typography>

//           <div className="rounded-border">
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
//             <Grid container spacing={1.5}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="שם פרטי"
//                   autoFocus
//                   value={firstName}
//                   onChange={handleFirstNameChange}
//                   error={firstNameError}
//                   sx={firstNameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: firstNameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="שם משפחה"
//                   name="lastName"
//                   autoComplete="family-name"
//                   value={lastName}
//                   onChange={handleLastNameChange}
//                   error={lastNameError}
//                   sx={lastNameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: lastNameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="username"
//                   label="שם משתמש"
//                   name="username"
//                   autoComplete="username"
//                   value={username}
//                   onChange={handleUsernameChange}
//                   error={usernameError}
//                   sx={usernameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: usernameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="כתובת דואר אלקטרוני"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   error={emailError}
//                   sx={emailError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: emailError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="סיסמא"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   error={passwordError}
//                   sx={passwordError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: passwordError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="passwordConfirm"
//                   label="אימות סיסמא"
//                   type="password"
//                   id="passwordConfirm"
//                   autoComplete="new-password"
//                   value={passwordConfirm}
//                   onChange={handlePasswordConfirmChange}
//                   error={passwordConfirmError}
//                   sx={passwordConfirmError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: passwordConfirmError ? errorStyle : {} }}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, fontWeight: 'bold', fontSize: 18, padding: '10px' }}
//               >
//               {"הרשמה"}
//             </Button>
//           </Box>

          
//           {message && (
//             <Typography color="error" align="center" sx={{ mt: 0 }}>
//               <p className={message.includes('SUCCESS') ? 'success' : 'error'}>{message}</p>
//             </Typography>

            

//             )}
//             </div>
//           </Box>
//         </Container>
//       </ThemeProvider>
//   );
// };

// export default SignUp;






// working code before change:
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import wineriesLogo from '../../assets/WINERIES-LOGO.png';

// import PasswordStrengthBar from '../components/inner-component/PassStrength';

// // import '../../styles/LogIn.css'; // Import custom CSS file


// const theme = createTheme();

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState(''); // add password confirm state
//   const [firstName, setFirstName] = useState(''); // add first name state
//   const [lastName, setLastName] = useState(''); // add last name state
//   const [message, setMessage] = useState(''); // add message state
//   const [firstNameError, setFirstNameError] = useState(false);
//   const [lastNameError, setLastNameError] = useState(false);
//   const [usernameError, setUsernameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [passwordConfirmError, setPasswordConfirmError] = useState(false);

//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handlePasswordConfirmChange = (e) => {
//     setPasswordConfirm(e.target.value);
//   };

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };


//   const validateEmail = (email) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     return emailRegex.test(email);
//   };
  

//   const errorStyle = {
//     borderColor: "red",
//   };


//   const isUsernameValid = (username) => {
//     const usernameRegex = /^[a-zA-Z]+$/;
//     return usernameRegex.test(username);
//   };
  
//   const isPasswordValid = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
//     return passwordRegex.test(password);
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted"); // Add this line


//     setFirstNameError(!firstName);
//     setLastNameError(!lastName);
//     setUsernameError(!username);
//     setEmailError(!email);
//     setPasswordError(!password);
//     setPasswordConfirmError(!passwordConfirm);

//     if (!username || !email || !password || !firstName || !lastName) {
//       setMessage("יש למלא את כל השדות");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setMessage("כתובת הדואר אלקטרוני לא חוקית");
//       setEmailError(true);
//       return;
//     }

//     if (password !== passwordConfirm) {
//       setMessage('הסיסמא לא תואמת');
//       return;
//     }

//     if (!isUsernameValid(username)) {
//       setMessage("שם המשתמש צריך לכלול רק אותיות באנגלית");
//       setUsernameError(true);
//       return;
//     }
  
//     if (!isPasswordValid(password)) {
//       setMessage("סיסמא חייבת לכלול אותיות קטנות וגדולות ולפחות 6 תווים");
//       setPasswordError(true);
//       return;
//     }

//     try {
//       console.log("API call started");
//       const response = await axios.post('/api/signup', {
//         username,
//         email,
//         password,
//         firstName,
//         lastName,
//       }, { timeout: 10000 });
  
//       console.log("API call finished");
//       console.log("Response data:", response.data);
  
//       console.log('user-name', username);
//       console.log(response.data);
//       setMessage('SUCCESS!');
//       console.log('SUCCESS!');
//       navigate('/login');
//     } catch (error) {
//       console.error("API call error:", error);
  
//       console.log("Error:", error);
//       console.log("Error:", error.response.data);
//       setMessage(error.response.data);
//       if (error.response && error.response.data) {
//         // Update the conditions based on the error message format
//         if (error.response.data.includes("מייל")) {
//           setEmailError(true);
//         }
//         if (error.response.data.includes("משתמש")) {
//           setUsernameError(true);
//         }
//       }
//       setMessage(error.response.data);
//     }
//   };
    


//   return (
//     <ThemeProvider theme={theme}>
//       <Container dir='rtl' component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 10,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar> */}

//       {/* <Typography sx={{ mt: 5 }} >
//           </Typography> */}

//           <Avatar sx={{ m: 1, bgcolor: 'transparent', width: 100, height: 100, borderRadius: 0 }}>
//             <img src={wineriesLogo} alt="App Logo" width="100" height="100" />
//           </Avatar>

//           <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
//               {'Wineries-IL'}
//           </Typography>

//           <div className="rounded-border">
//           {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}> */}
//           <Box sx={{ mt: 4 }}>
//             <form noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={1.5}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="שם פרטי"
//                   autoFocus
//                   value={firstName}
//                   onChange={handleFirstNameChange}
//                   error={firstNameError}
//                   sx={firstNameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: firstNameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="שם משפחה"
//                   name="lastName"
//                   autoComplete="family-name"
//                   value={lastName}
//                   onChange={handleLastNameChange}
//                   error={lastNameError}
//                   sx={lastNameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: lastNameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="username"
//                   label="שם משתמש"
//                   name="username"
//                   autoComplete="username"
//                   value={username}
//                   onChange={handleUsernameChange}
//                   error={usernameError}
//                   sx={usernameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: usernameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="כתובת דואר אלקטרוני"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   error={emailError}
//                   sx={emailError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: emailError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="סיסמא"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   error={passwordError}
//                   sx={passwordError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: passwordError ? errorStyle : {} }}
//                 />
//                 <PasswordStrengthBar password={password} />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="passwordConfirm"
//                   label="אימות סיסמא"
//                   type="password"
//                   id="passwordConfirm"
//                   autoComplete="new-password"
//                   value={passwordConfirm}
//                   onChange={handlePasswordConfirmChange}
//                   error={passwordConfirmError}
//                   sx={passwordConfirmError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: passwordConfirmError ? errorStyle : {} }}
//                 />
//                 <PasswordStrengthBar password={password} />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, fontWeight: 'bold', fontSize: 18, padding: '10px' }}
//               >
//               {"הרשמה"}
//             </Button>
//             </form>
//           </Box>

          
//           {message && (
//             <Typography color="error" align="center" sx={{ mt: 0 }}>
//               <p className={message.includes('SUCCESS') ? 'success' : 'error'}>{message}</p>
//             </Typography>

            

//             )}
//             </div>
//           </Box>
//         </Container>
//       </ThemeProvider>
//   );
// };

// export default SignUp;



















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import wineriesLogo from '../../assets/WINERIES-LOGO.png';

// import PasswordStrengthBar from '../components/inner-component/PassStrength';
// import Tooltip from '@mui/material/Tooltip';

// import { GoogleLogin } from 'react-google-login';


// // import '../../styles/LogIn.css'; // Import custom CSS file


// const theme = createTheme();

// const SignUp = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState(''); // add password confirm state
//   const [firstName, setFirstName] = useState(''); // add first name state
//   const [lastName, setLastName] = useState(''); // add last name state
//   const [message, setMessage] = useState(''); // add message state
//   const [firstNameError, setFirstNameError] = useState(false);
//   const [lastNameError, setLastNameError] = useState(false);
//   const [usernameError, setUsernameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [passwordError, setPasswordError] = useState(false);
//   const [passwordConfirmError, setPasswordConfirmError] = useState(false);
//   const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


//   const navigate = useNavigate();

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handlePasswordConfirmChange = (e) => {
//     setPasswordConfirm(e.target.value);
//   };

//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };


//   const validateEmail = (email) => {
//     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     return emailRegex.test(email);
//   };
  

//   const errorStyle = {
//     borderColor: "red",
//   };


//   const isUsernameValid = (username) => {
//     const usernameRegex = /^[a-zA-Z0-9]+$/;
//     return usernameRegex.test(username);
//   };
  
  
//   const isPasswordValid = (password) => {
//     return password.length >= 6;
//   };
  


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted");
  
//     setFirstNameError(!firstName);
//     setLastNameError(!lastName);
//     setUsernameError(!username);
//     setEmailError(!email);
//     setPasswordError(!password);
//     setPasswordConfirmError(!passwordConfirm);
  
//     if (!username || !email || !password || !firstName || !lastName) {
//       setMessage("יש למלא את כל השדות");
//       return;
//     }
  
//     if (!validateEmail(email)) {
//       setMessage("כתובת הדואר אלקטרוני לא חוקית");
//       setEmailError(true);
//       return;
//     }
  
//     if (password !== passwordConfirm) {
//       setMessage('הסיסמא לא תואמת');
//       return;
//     }
  
//     if (!isUsernameValid(username)) {
//       setMessage("שם המשתמש צריך לכלול אותיות באנגלית ומספרים בלבד");
//       setUsernameError(true);
//       return;
//     }
  
//     if (!isPasswordValid(password)) {
//       setMessage("סיסמא חייבת לכלול לפחות 6 תווים");
//       setPasswordError(true);
//       return;
//     }
  
//     if (
//       !validateEmail(email) ||
//       password !== passwordConfirm ||
//       !isUsernameValid(username) ||
//       !isPasswordValid(password)
//     ) {
//       return;
//     }
  
//     try {
//       console.log("API call started");
//       const response = await axios.post('/api/signup', {
//         username,
//         email,
//         password,
//         firstName,
//         lastName,
//       }, { timeout: 10000 });
  
//       console.log("API call finished");
//       console.log("Response data:", response.data);
  
//       console.log('user-name', username);
//       console.log(response.data);
//       setMessage('SUCCESS!');
//       console.log('SUCCESS!');
//       alert('💌 יש לאמת את המשתמש במייל שנשלח אליכם 💌'); 
//       navigate('/login');
//     } catch (error) {
//       console.error("API call error:", error);
  
//       console.log("Error:", error);
//       console.log("Error:", error.response.data);
//       setMessage(error.response.data);
//       if (error.response && error.response.data) {
//         // Update the conditions based on the error message format
//         if (error.response.data.includes("מייל")) {
//           setEmailError(true);
//         }
//         if (error.response.data.includes("משתמש")) {
//           setUsernameError(true);
//         }
//       }
//       setMessage(error.response.data);
//     }
//   };
  

//   return (
//     <ThemeProvider theme={theme}>
//       <Container dir='rtl' component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 10,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar> */}

//       {/* <Typography sx={{ mt: 5 }} >
//           </Typography> */}

//           <Avatar sx={{ m: 1, bgcolor: 'transparent', width: 100, height: 100, borderRadius: 0 }}>
//             <img src={wineriesLogo} alt="App Logo" width="100" height="100" />
//           </Avatar>

//           <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
//               {'Wineries-IL'}
//           </Typography>

//           <div className="rounded-border">
//           {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}> */}
//           <Box sx={{ mt: 4 }}>
//             <form noValidate onSubmit={handleSubmit}>
//             <Grid container spacing={1.5}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="שם פרטי"
//                   autoFocus
//                   value={firstName}
//                   onChange={handleFirstNameChange}
//                   error={firstNameError}
//                   sx={firstNameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: firstNameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="שם משפחה"
//                   name="lastName"
//                   autoComplete="family-name"
//                   value={lastName}
//                   onChange={handleLastNameChange}
//                   error={lastNameError}
//                   sx={lastNameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: lastNameError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//               <Tooltip dir='rtl' title="אותיות ומספרים באנגלית" enterTouchDelay={0} leaveTouchDelay={2000}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="username"
//                   label="שם משתמש"
//                   name="username"
//                   autoComplete="username"
//                   value={username}
//                   onChange={handleUsernameChange}
//                   error={usernameError}
//                   sx={usernameError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: usernameError ? errorStyle : {} }}
//                 />
//                 </Tooltip>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="כתובת דואר אלקטרוני"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={handleEmailChange}
//                   error={emailError}
//                   sx={emailError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: emailError ? errorStyle : {} }}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//               <Tooltip dir='rtl' title="6 תווים לפחות" enterTouchDelay={0} leaveTouchDelay={2000}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="סיסמא"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                   value={password}
//                   onChange={handlePasswordChange}
//                   error={passwordError}
//                   sx={passwordError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: passwordError ? errorStyle : {} }}
//                 />
//                 </Tooltip>
//                 <PasswordStrengthBar password={password} />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="passwordConfirm"
//                   label="אימות סיסמא"
//                   type="password"
//                   id="passwordConfirm"
//                   autoComplete="new-password"
//                   value={passwordConfirm}
//                   onChange={handlePasswordConfirmChange}
//                   error={passwordConfirmError}
//                   sx={passwordConfirmError ? { borderColor: "error.main" } : {}}
//                   InputProps={{ style: passwordConfirmError ? errorStyle : {} }}
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2, fontWeight: 'bold', fontSize: 18, padding: '10px' }}
//               >
//               {"הרשמה"}
//             </Button>
//             </form>
//           </Box>

                    
//           {message && (
//             <Typography color="error" align="center" sx={{ mt: 0 }}>
//               <p className={message.includes('SUCCESS') ? 'success' : 'error'}>{message}</p>
//             </Typography>

            

//             )}
//             </div>
//           </Box>
//         </Container>
//       </ThemeProvider>
//   );
// };

// export default SignUp;











// ^^^^^^^^^^^^^^^^^^^^^   coerrunt working code ^^^^^^

// now the Google change:





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import wineriesLogo from '../../assets/WINERIES-LOGO.png';

import PasswordStrengthBar from '../components/inner-component/PassStrength';
import Tooltip from '@mui/material/Tooltip';

import { GoogleLogin } from 'react-google-login';


// import '../../styles/LogIn.css'; // Import custom CSS file


const theme = createTheme();

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState(''); // add password confirm state
  const [firstName, setFirstName] = useState(''); // add first name state
  const [lastName, setLastName] = useState(''); // add last name state
  const [message, setMessage] = useState(''); // add message state
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordConfirmError, setPasswordConfirmError] = useState(false);
  const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;


  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };


  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };
  

  const errorStyle = {
    borderColor: "red",
  };


  const isUsernameValid = (username) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(username);
  };
  
  
  const isPasswordValid = (password) => {
    return password.length >= 6;
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
  
    setFirstNameError(!firstName);
    setLastNameError(!lastName);
    setUsernameError(!username);
    setEmailError(!email);
    setPasswordError(!password);
    setPasswordConfirmError(!passwordConfirm);
  
    if (!username || !email || !password || !firstName || !lastName) {
      setMessage("יש למלא את כל השדות");
      return;
    }
  
    if (!validateEmail(email)) {
      setMessage("כתובת הדואר אלקטרוני לא חוקית");
      setEmailError(true);
      return;
    }
  
    if (password !== passwordConfirm) {
      setMessage('הסיסמא לא תואמת');
      return;
    }
  
    if (!isUsernameValid(username)) {
      setMessage("שם המשתמש צריך לכלול אותיות באנגלית ומספרים בלבד");
      setUsernameError(true);
      return;
    }
  
    if (!isPasswordValid(password)) {
      setMessage("סיסמא חייבת לכלול לפחות 6 תווים");
      setPasswordError(true);
      return;
    }
  
    if (
      !validateEmail(email) ||
      password !== passwordConfirm ||
      !isUsernameValid(username) ||
      !isPasswordValid(password)
    ) {
      return;
    }
  
    try {
      console.log("API call started");
      const response = await axios.post('/api/signup', {
        username,
        email,
        password,
        firstName,
        lastName,
      }, { timeout: 10000 });
  
      console.log("API call finished");
      console.log("Response data:", response.data);
  
      console.log('user-name', username);
      console.log(response.data);
      setMessage('SUCCESS!');
      console.log('SUCCESS!');
      alert('💌 יש לאמת את המשתמש במייל שנשלח אליכם 💌'); 
      navigate('/login');
    } catch (error) {
      console.error("API call error:", error);
  
      console.log("Error:", error);
      console.log("Error:", error.response.data);
      setMessage(error.response.data);
      if (error.response && error.response.data) {
        // Update the conditions based on the error message format
        if (error.response.data.includes("מייל")) {
          setEmailError(true);
        }
        if (error.response.data.includes("משתמש")) {
          setUsernameError(true);
        }
      }
      setMessage(error.response.data);
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <Container dir='rtl' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar> */}

      {/* <Typography sx={{ mt: 5 }} >
          </Typography> */}

          <Avatar sx={{ m: 1, bgcolor: 'transparent', width: 100, height: 100, borderRadius: 0 }}>
            <img src={wineriesLogo} alt="App Logo" width="100" height="100" />
          </Avatar>

          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>
              {'Wineries-IL'}
          </Typography>

          <div className="rounded-border">
          {/* <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}> */}
          <Box sx={{ mt: 4 }}>
            <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={1.5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="שם פרטי"
                  autoFocus
                  value={firstName}
                  onChange={handleFirstNameChange}
                  error={firstNameError}
                  sx={firstNameError ? { borderColor: "error.main" } : {}}
                  InputProps={{ style: firstNameError ? errorStyle : {} }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="שם משפחה"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  error={lastNameError}
                  sx={lastNameError ? { borderColor: "error.main" } : {}}
                  InputProps={{ style: lastNameError ? errorStyle : {} }}
                />
              </Grid>
              <Grid item xs={12}>
              <Tooltip dir='rtl' title="אותיות ומספרים באנגלית" enterTouchDelay={0} leaveTouchDelay={2000}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="שם משתמש"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={handleUsernameChange}
                  error={usernameError}
                  sx={usernameError ? { borderColor: "error.main" } : {}}
                  InputProps={{ style: usernameError ? errorStyle : {} }}
                />
                </Tooltip>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="כתובת דואר אלקטרוני"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  error={emailError}
                  sx={emailError ? { borderColor: "error.main" } : {}}
                  InputProps={{ style: emailError ? errorStyle : {} }}
                />
              </Grid>
              <Grid item xs={12}>
              <Tooltip dir='rtl' title="6 תווים לפחות" enterTouchDelay={0} leaveTouchDelay={2000}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="סיסמא"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={passwordError}
                  sx={passwordError ? { borderColor: "error.main" } : {}}
                  InputProps={{ style: passwordError ? errorStyle : {} }}
                />
                </Tooltip>
                <PasswordStrengthBar password={password} />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordConfirm"
                  label="אימות סיסמא"
                  type="password"
                  id="passwordConfirm"
                  autoComplete="new-password"
                  value={passwordConfirm}
                  onChange={handlePasswordConfirmChange}
                  error={passwordConfirmError}
                  sx={passwordConfirmError ? { borderColor: "error.main" } : {}}
                  InputProps={{ style: passwordConfirmError ? errorStyle : {} }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight: 'bold', fontSize: 18, padding: '10px' }}
              >
              {"הרשמה"}
            </Button>
            </form>
          </Box>

                    
          {message && (
            <Typography color="error" align="center" sx={{ mt: 0 }}>
              <p className={message.includes('SUCCESS') ? 'success' : 'error'}>{message}</p>
            </Typography>

            

            )}
            </div>
          </Box>
        </Container>
      </ThemeProvider>
  );
};

export default SignUp;



