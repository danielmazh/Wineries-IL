import React from 'react';
import NavBar from '../common/components/NavBar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import wineriesLogo from '../../src/assets/logo-new.svg';
import backgroundImage from '../assets/backrounds/test1.jpg';


import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();






function SurveyPage(props) {
  const authToken = localStorage.getItem('token');

  const styles = {
    backgroundContainer: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // white with 50% transparency
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
  };

  return (
    <div>
      <div style={styles.backgroundContainer}></div>
      <NavBar authToken={authToken} />
      <ThemeProvider theme={theme}>
        <Container dir="rtl" component="main" maxWidth="lg"> {/* Change maxWidth to 'lg' or 'xl' */}
          <CssBaseline />
  
          {/* <Box
            sx={{
              marginTop: '8%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '5px solid #000000',
              borderRadius: '10px',
            }}
          >
            <iframe
              src="https://survey.zohopublic.com/zs/QuB3Ij"
              frameborder="0"
              style={{ height: '600px', width: '100%' }}
              marginwidth="0"
              marginheight="0"
              scrolling="auto"
              allow="geolocation"
              title="Survey"
            ></iframe>
          </Box> */}


<Box
      sx={{
        marginTop: '7%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #b8860b',
        borderRadius: '10px',
        boxShadow: '5px 5px 10px #888888',
        overflow: 'auto', /* Add overflow to enable scrolling */
        scrollbarWidth: 'thin', /* Set the scrollbar width */
        scrollbarColor: '#b8860b #f0e68c', /* Set the scrollbar color */
      }}
    >
      <iframe
        src="https://survey.zohopublic.com/zs/QuB3Ij"
        frameborder="0"
        style={{ height: '630px', width: '100%' }}
        marginwidth="0"
        marginheight="0"
        scrolling="yes" /* Set scrolling to "yes" to enable mouse wheel scrolling */
        allow="geolocation"
        title="Survey"
      ></iframe>
    </Box>


        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SurveyPage;