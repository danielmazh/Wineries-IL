// import React from 'react';
// import backgroundImage from '../../../assets/backrounds/vineyard.png';


// const Page0 = ({ first_name, last_name }) => {

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
//       <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------</h1>
//       <h1 style={{textAlign: 'center'}}>ברוכים הבאים</h1> 
      
//       {/* <h2 style={{textAlign: 'center'}}>{username}</h2> */}
//       <h2 style={{textAlign: 'center'}}>{first_name} {last_name}</h2>
//       {/* <p>{JSON.stringify(localStorage)}</p> */}


//       <br />
//     </div>
//   );
// };

// export default Page0;



import React, { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/backrounds/vineyard.png';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Logo from '../../../assets/logo-new.svg';


const Page0 = ({ first_name, last_name }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 10);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const styles = {
    logo: {
      width: '70px',
      height: '70px',
    },
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
      <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------</h1>
      <h1 style={{textAlign: 'center'}}>ברוכים הבאים</h1> 
      
      {/* <h2 style={{textAlign: 'center'}}>{username}</h2> */}
      <h2 style={{textAlign: 'center'}}>{first_name} {last_name}</h2>
      {/* <p>{JSON.stringify(localStorage)}</p> */}


      <Dialog
        open={open}
        aria-labelledby="age-confirmation-dialog-title"
        aria-describedby="age-confirmation-dialog-description"
        disableBackdropClick
        disableEscapeKeyDown
        PaperProps={{
          style: {
            borderRadius: '3%',
          },
        }}
      >

      <DialogTitle id="age-confirmation-dialog-title" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Logo} alt="Logo" style={styles.logo} />
      </DialogTitle>
      <DialogContent>
        <p style={{ fontWeight: 'bold', fontSize: '100%' }}>עליכם להיות מעל גיל 18 כדי להיכנס לאתר זה</p>
      </DialogContent>

        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleClose} variant="outlined" style={{ width: '50%', height: '50px' }}>
          אני מאשר
        </Button>
      </DialogActions>


      </Dialog>


    </div>
  );
};

export default Page0;