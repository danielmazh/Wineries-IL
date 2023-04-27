import React, { useState } from 'react';
import { setJwt } from '../../helpers/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import NavBar from '../../common/components/NavBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import wineriesLogo from '../../assets/WINERIES-LOGO.png';
// import '../../styles/LogIn.css'; // Import custom CSS file

const theme = createTheme();

function LogIn(props) {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post('/api/login', { email, password });
        const { token, first_name, last_name, username } = response.data;
        setJwt(token);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
        localStorage.setItem('username', username);
        localStorage.setItem('first_name', first_name);
        localStorage.setItem('last_name', last_name);
        props.setIsLoggedIn(true);
        navigate(`/PersonalZone/${token}`);
        console.log('Log-In Success');
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          setError(error.response.data);
        } else {
          setError('Incorrect email or password');
        }
      }
    };
  
  return (
    <div>
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
          {/* <Avatar sx={{ m: 1, bgcolor: '#922B21', width: 64, height: 64 }}>
            <LockOutlinedIcon sx={{ fontSize: 40 }} />
          </Avatar> */}

          {/* <Typography sx={{ mt: 5 }} >
          </Typography> */}


          <Avatar sx={{ m: 1, bgcolor: 'transparent', width: 100, height: 100, borderRadius: 0 }}>
            <img src={wineriesLogo} alt="App Logo" width="100" height="100" />
          </Avatar>
          

          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }} >
              {'Wineries-IL '}
          </Typography>

          <Typography sx={{ mt: 3 }} >
          </Typography>
          


            <div className="rounded-border">
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 5 }}>
             <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="דואר אלקטרוני"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמא"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" align="center">
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, fontWeight: 'bold', fontSize: 18, padding: '10px' }}
              >
              {"התחברות"}
            </Button>

            <Grid container>
              <Grid item xs>
                <Link dir='rtl' component={RouterLink} to="/" variant="body2">
                  {"שכחתם את הסיסמא?"}
                </Link>
              </Grid>
            <Grid item>
            <Link dir='rtl' component={RouterLink} to="/signup" variant="body2" >
              {"אין לכם עדיין חשבון? הירשמו כאן"}
            </Link>
            </Grid>
            </Grid>
          </Box>

            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default LogIn;
