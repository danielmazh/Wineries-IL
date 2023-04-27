// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { clearJwt } from '../../helpers/auth';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';

// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import HomeIcon from '@mui/icons-material/Home';
// import LiquorIcon from '@mui/icons-material/Liquor';
// import TourIcon from '@mui/icons-material/Tour';
// import Stack from '@mui/material/Stack';

// import UserProfileIcon from './UserProfileIcon';
// import wineriesLogo from '../../assets/WINERIES-LOGO.png';

// import axios from 'axios';

// function NavBar(props) {

//   const navigate = useNavigate();
//   const [profilePictureUrl, setProfilePictureUrl] = useState(null);
//   const first_name = localStorage.getItem('first_name');
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const [settingsMenuAnchorEl, setSettingsMenuAnchorEl] = useState(null);

//   const handleOpenSettingsMenu = (event) => {
//     setSettingsMenuAnchorEl(event.currentTarget);
//   };

//   const handleCloseSettingsMenu = () => {
//     setSettingsMenuAnchorEl(null);
//   };

//   useEffect(() => {
//     const fetchProfilePictureUrl = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/getProfilePictureUrl', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProfilePictureUrl(response.data.url);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProfilePictureUrl();
//   }, []);

//   const handleLogout = () => {
//     clearJwt();
//     navigate('/');
//     window.location.reload();
//   };

//   const pages = props.authToken
//     ? [
//         { name: 'תיכנון סיור', path: `/PersonalZone/${props.authToken}`, icon: <TourIcon /> },
//         { name: 'הוספת יקב', path: '/addwinery', icon: <LiquorIcon /> },
//       ]
//     : [
//         { name: 'רישום', path: '/signup', icon: <PersonAddIcon /> },
//         { name: 'כניסה', path: '/Login', icon: <LoginIcon /> },
//         { name: 'בית', path: '/', icon: <HomeIcon /> },
//       ];

//     const settings = [
//     { name: 'פרופיל', path: '/profile' },
//     { name: 'התנתקות', action: handleLogout },
//   ];

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         background: 'linear-gradient(90deg, rgba(103,0,20,1) 0%, rgba(178,34,34,1) 100%)',
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>

//         {props.authToken && (
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="logo"
//           component={Link}
//           to="/"
//           sx={{
//             display: { xs: 'none', md: 'flex' },
//             mr: 2,
//           }}
//         >
//           <img
//             src={wineriesLogo}
//             alt="Logo"
//             style={{
//               width: '45px',
//               height: '45px',
//               borderRadius: '50%',
//               border: '2px solid #ffffff',
//             }}
//           />
//         </IconButton>
//         )}


//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
//             {pages.map((page) => (
//               <Button
//   key={page.name}
//   onClick={(e) => {
//     e.preventDefault();
//     handleCloseNavMenu();
//     window.location.href = page.path;
//   }}
//   sx={{
//     my: 1,
//     mx: 1,
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontWeight: 'bold',
//     fontSize: '1.1rem',
//     minWidth: '160px',
//     border: '1px solid transparent',
//     borderRadius: '4px',
//   }}
//   component={Link}
//   to={page.path}
//   startIcon={page.icon}
// >
//   {page.name}
// </Button>


//             ))}
//           </Box>

//         {props.authToken && (
//         <Tooltip title="הגדרות" >
//           <IconButton
//             edge="end"
//             color="inherit"
//             aria-label="menu"
//             onClick={handleOpenSettingsMenu}
//           >
//             <UserProfileIcon
//             profilePictureUrl={profilePictureUrl}
//           />

//           </IconButton>
//         </Tooltip>
//         )}
//         <Menu 
//           anchorEl={settingsMenuAnchorEl}
//           open={Boolean(settingsMenuAnchorEl)}
//           onClose={handleCloseSettingsMenu}
//           onClick={handleCloseSettingsMenu}
//           PaperProps={{
//             elevation: 0,
//             sx: {
//               overflow: 'visible',
//               filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
//               mt: 1.5,
//               '& .MuiAvatar-root': {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               '&:before': {
//                 content: '""',
//                 display: 'block',
//                 position: 'absolute',
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: 'background.paper',
//                 transform: 'translateY(-50%) rotate(45deg)',
//                 zIndex: 0,
//               },
//             },
//           }}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//         >
//           <Stack direction="column" spacing={1}>
//             {settings.map((item, index) => (
//               <Button
//                 key={index}
//                 color="secondary"
//                 component={item.path ? Link : 'button'}
//                 to={item.path}
//                 onClick={item.action}
//               >
//                 {item.name}
//               </Button>
//             ))}
//           </Stack>
//         </Menu>
//       </Toolbar>
//     </Container>
//   </AppBar>

//   );
// }

// export default NavBar;

















import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearJwt } from '../../helpers/auth';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import LiquorIcon from '@mui/icons-material/Liquor';
import TourIcon from '@mui/icons-material/Tour';
import Stack from '@mui/material/Stack';

import UserProfileIcon from './UserProfileIcon';
import wineriesLogo from '../../assets/WINERIES-LOGO.png';

import axios from 'axios';

import PollIcon from '@mui/icons-material/Poll';


function NavBar(props) {

  const navigate = useNavigate();
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const first_name = localStorage.getItem('first_name');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [settingsMenuAnchorEl, setSettingsMenuAnchorEl] = useState(null);

  const handleOpenSettingsMenu = (event) => {
    setSettingsMenuAnchorEl(event.currentTarget);
  };

  const handleCloseSettingsMenu = () => {
    setSettingsMenuAnchorEl(null);
  };

  useEffect(() => {
    const fetchProfilePictureUrl = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/getProfilePictureUrl', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfilePictureUrl(response.data.url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfilePictureUrl();
  }, []);

  const handleLogout = () => {
    clearJwt();
    navigate('/');
    window.location.reload();
  };

  const pages = props.authToken
  ? [
      { name: 'תיכנון סיור', path: `/PersonalZone/${props.authToken}`, icon: <TourIcon /> },
      { name: 'משוב', path: '/survey', icon: <PollIcon /> }, // Add this line
      { name: 'הוספת יקב', path: '/addwinery', icon: <LiquorIcon /> },
    ]
  : [
    { name: 'משוב', path: '/survey', icon: <PollIcon /> }, // Add this line
      { name: 'רישום', path: '/signup', icon: <PersonAddIcon /> },
      { name: 'כניסה', path: '/Login', icon: <LoginIcon /> },
      { name: 'בית', path: '/', icon: <HomeIcon /> },
    ];


    const settings = [
    { name: 'פרופיל', path: '/profile' },
    { name: 'התנתקות', action: handleLogout },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'linear-gradient(90deg, rgba(103,0,20,1) 0%, rgba(178,34,34,1) 100%)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

        {props.authToken && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          component={Link}
          to="/"
          sx={{
            display: { xs: 'none', md: 'flex' },
            mr: 2,
          }}
        >
          <img
            src={wineriesLogo}
            alt="Logo"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: '2px solid #ffffff',
            }}
          />
        </IconButton>
        )}


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
  key={page.name}
  onClick={(e) => {
    e.preventDefault();
    handleCloseNavMenu();
    window.location.href = page.path;
  }}
  sx={{
    my: 1,
    mx: 1,
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    minWidth: '160px',
    border: '1px solid transparent',
    borderRadius: '4px',
  }}
  component={Link}
  to={page.path}
  startIcon={page.icon}
>
  {page.name}
</Button>


            ))}
          </Box>

        {props.authToken && (
        <Tooltip title="הגדרות" >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleOpenSettingsMenu}
          >
            <UserProfileIcon
            profilePictureUrl={profilePictureUrl}
          />

          </IconButton>
        </Tooltip>
        )}
        <Menu 
          anchorEl={settingsMenuAnchorEl}
          open={Boolean(settingsMenuAnchorEl)}
          onClose={handleCloseSettingsMenu}
          onClick={handleCloseSettingsMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Stack direction="column" spacing={1}>
            {settings.map((item, index) => (
              <Button
                key={index}
                color="secondary"
                component={item.path ? Link : 'button'}
                to={item.path}
                onClick={item.action}
              >
                {item.name}
              </Button>
            ))}
          </Stack>
        </Menu>
      </Toolbar>
    </Container>
  </AppBar>

  );
}

export default NavBar;