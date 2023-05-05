// import React from 'react';
// import NavBar from '../common/components/NavBar';

// function HomePage() {
//   const authToken = localStorage.getItem('token');
//   return (
//     <div>
//       <NavBar authToken={authToken} /><br /><br /><br />
//       <h1 style={{textAlign: 'center'}}>Wineries IL</h1>
//     </div>
//   );
// }

// export default HomePage;







// import React from 'react';
// import NavBar from '../common/components/NavBar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import wineriesLogo from '../../src/assets/logo-new.svg';
// import backgroundImage from '../assets/backrounds/test1.jpg';


// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';

// import { createTheme, ThemeProvider } from '@mui/material/styles';


// const theme = createTheme();






// function HomePage(props) {
//   const authToken = localStorage.getItem('token');

//   const styles = {
//     backgroundContainer: {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundColor: 'rgba(255, 255, 255, 0.5)', // white with 50% transparency
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       zIndex: -1,
//     },
//   };

//   return (
//     <div>
//       <div style={styles.backgroundContainer}></div>
//       <NavBar authToken={authToken} />
//       <ThemeProvider theme={theme}>
//        <Container dir='rtl' component="main" maxWidth="xs">
//          <CssBaseline />
         
//          <Box
//           sx={{
//             marginTop: '30%',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >


    
//       {/* <h1 style={{textAlign: 'center'}}>Wineries IL</h1> */}


//       <Avatar sx={{ m: 3, bgcolor: 'transparent', width: 400, height: 400, borderRadius: 0 }}>
//         <img src={wineriesLogo} alt="App Logo" width="400" height="400" />
//       </Avatar>
      

//       <Typography
//         component="h1"
//         variant="h5"
//         sx={{
//           fontWeight: 'bold',
//           fontFamily: 'Heebo, sans-serif',
//           color: 'rgba(255, 215, 0, 0.9)', // Gold color with 90% opacity for a darker shade
//           fontSize: '45px',
//           textAlign: 'center',
//           textShadow: '3px 3px 4px rgba(0, 0, 0, 1)', // Black shadow with 50% opacity
//         }}
//       >
//         {'  סיורי יין בישראל'}
//       </Typography>



 
     

//     </Box>

//         </Container>
//         </ThemeProvider>
//     </div>
//   );
// }

// export default HomePage;





// import React from 'react';
// import NavBar from '../common/components/NavBar';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import wineriesLogo from '../../src/assets/logo-new.svg';
// import backgroundImage from '../assets/backrounds/test1.jpg';

// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import useTypingEffect from '../../src/useTypingEffect';

// const theme = createTheme();

// function HomePage(props) {
//   const authToken = localStorage.getItem('token');

//   const styles = {
//     backgroundContainer: {
//       backgroundImage: `url(${backgroundImage})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       backgroundRepeat: 'no-repeat',
//       backgroundColor: 'rgba(255, 255, 255, 0.5)', // white with 50% transparency
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       zIndex: -1,
//     },
//   };

//   // Move this line inside the HomePage function
//   const aboutText = useTypingEffect('Hello and welcome, you have come to the right place!', 50);

//   return (
//     <div>
//       <div style={styles.backgroundContainer}></div>
//       <NavBar authToken={authToken} />
//       <ThemeProvider theme={theme}>
//         <Container dir='rtl' component="main" maxWidth="xs">
//           <CssBaseline />

//           <Box
//             sx={{
//               marginTop: '30%',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >

//             <Avatar sx={{ m: 3, bgcolor: 'transparent', width: 400, height: 400, borderRadius: 0 }}>
//               <img src={wineriesLogo} alt="App Logo" width="400" height="400" />
//             </Avatar>

//             <Typography
//               component="h1"
//               variant="h5"
//               sx={{
//                 fontWeight: 'bold',
//                 fontFamily: 'Heebo, sans-serif',
//                 color: 'rgba(255, 215, 0, 0.9)', // Gold color with 90% opacity for a darker shade
//                 fontSize: '45px',
//                 textAlign: 'center',
//                 textShadow: '3px 3px 4px rgba(0, 0, 0, 1)', // Black shadow with 50% opacity
//               }}
//             >
//               {'  סיורי יין בישראל'}
//             </Typography>

//             <Typography
//               component="h2"
//               variant="h6"
//               sx={{
//                 fontFamily: 'Heebo, sans-serif',
//                 color: 'rgba(255, 215, 0, 0.9)', // Gold color with 90% opacity for a darker shade
//                 fontSize: '24px',
//                 textAlign: 'center',
//                 textShadow: '2px 2px 3px rgba(0, 0, 0, 1)', // Black shadow with 50% opacity
//               }}
//             >
//               {aboutText}
//             </Typography>

//           </Box>

//         </Container>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default HomePage;








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

import useTypingEffect from '../../src/useTypingEffect';

const theme = createTheme();

function HomePage(props) {
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
    typingContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)', // white with 70% transparency
      padding: '10px 20px',
      borderRadius: '8px',
    },
  };

  const aboutText = useTypingEffect('חקור את היקבים הטובים ביותר של ישראל על פני אזורים מגוונים, ומצא את חווית טעימות היין המושלמת ללא מאמץ', 50);

  return (
    <div>
      <div style={styles.backgroundContainer}></div>
      <NavBar authToken={authToken} />
      <ThemeProvider theme={theme}>
        <Container dir='rtl' component="main" maxWidth="xs">
          <CssBaseline />

          <Box
            sx={{
              marginTop: '15%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Avatar sx={{ m: 3, bgcolor: 'transparent', width: 250, height: 250, borderRadius: 0 }}>
              <img src={wineriesLogo} alt="App Logo" width="200" height="200" />
            </Avatar>

            <Typography
            
              component="h1"
              variant="h5"
              sx={{
                fontWeight: 'bold',
                fontFamily: 'Heebo, sans-serif',
                color: 'rgba(255, 215, 0, 0.9)', // Gold color with 90% opacity for a darker shade
                fontSize: '50px',
                textAlign: 'center',
                textShadow: '3px 3px 4px rgba(0, 0, 0, 1)', // Black shadow with 50% opacity
              }}
            >
              {'  סיורי יין בישראל'}
            </Typography>

            <div style={styles.typingContainer}>
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  marginTop: '3%',
                  marginBottom: '3%',
                  fontWeight: 'bold',
                  fontFamily: 'Heebo, sans-serif',
                  color: 'rgba(255, 215, 0, 0.9)', // Gold color with 90% opacity for a darker shade
                  fontSize: '26px',
                  textAlign: 'center',
                  textShadow: '2px 2px 3px rgba(1, 1, 1, 1)', // Black shadow with 100% opacity
                }}
                >
                {aboutText}
                </Typography>
                </div>
                </Box>

</Container>
</ThemeProvider>
</div>
);
}

export default HomePage;

