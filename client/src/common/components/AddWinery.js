// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';


// function AddWinery() {
//   const navigate = useNavigate();
//   const [wineryID, setWineryID] = useState(null);
//   const [wineryLogoFile, setWineryLogoFile] = useState(null);
//   const [summaryData, setSummaryData] = useState(null);

//   const [wineryData, setWineryData] = useState({
//     winery_name,
//     website: '',
//     phone: '',
//     main_area: '',
//     secondary_area: '',
//     address: '',
//     kosher_type: '',
//     oh_sunday: '',
//     oh_monday: '',
//     oh_tuesday: '',
//     oh_wednesday: '',
//     oh_friday: '',
//     oh_saturday: '',
//     accessibility: '',
//     people_max_amount: '',
//     winery_style: '',
//     stay_time: '',
//     average_cost_per_person: '',
//     tour_style: '',
//     tour_attractions: '',
//     wines_types: '',
//     tour_restaurant: '',
//     additional_information: '', 
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setWineryData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const [showUploadForm, setShowUploadForm] = useState(false);

//   const handlePhotoSubmit = async (event) => {
//     event.preventDefault();
  
//     if (wineryID && wineryLogoFile) {
//       await uploadWineryLogo(wineryLogoFile, wineryID, navigate);
//       setSummaryData((prevData) => ({
//         ...prevData,
//         ...wineryData, // Add wineryData properties
//         wineryLogoFile: wineryLogoFile,
//       }));
//     } else {
//       alert('Error: winery ID or logo file is missing.');
//     }
//   };

//   const renderSummary = () => (
//     <div>
//       <h1 style={{textAlign: 'center'}}>היקב התקבל למאגר!</h1>
//       {summaryData.wineryLogoFile && (
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//           <img
//             src={URL.createObjectURL(summaryData.wineryLogoFile)}
//             alt="Winery Logo"
//             style={{ maxWidth: '100px', maxHeight: '100px' }}
//           />
//         </div>      
//       )}
//     </div>
//   );

//   const renderWineryForm = () => (
//   <form onSubmit={handleSubmit}>    
//     <h1 style={{ textAlign: 'center' }}>הוסיפו את היקב שלכם:</h1>
//         <div>
//           <label htmlFor="winery_name">שם היקב: </label>
//           <input
//             type="text"
//             name="winery_name"
//             value={wineryData.winery_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="website">אתר: </label>
//           <input
//             type="text"
//             name="website"
//             value={wineryData.website}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="phone">טלפון: </label>
//           <input
//             type="text"
//             name="phone"
//             value={wineryData.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="main_area">איזור ראשי: </label>
//           <input
//             type="text"
//             name="main_area"
//             value={wineryData.main_area}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="secondary_area">איזור משני: </label>
//           <input
//             type="text"
//             name="secondary_area"
//             value={wineryData.secondary_area}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="address">כתובת: </label>
//           <input
//             type="text"
//             name="address"
//             value={wineryData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="kosher_type">כשרות: </label>
//           <input
//             type="text"
//             name="kosher_type"
//             value={wineryData.kosher_type}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_sunday">שעות פתיחה יום ראשון: </label>
//           <input
//             type="text"
//             name="oh_sunday"
//             value={wineryData.oh_sunday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_monday">שעות פתיחה יום שני:</label>
//           <input
//             type="text"
//             name="oh_monday"
//             value={wineryData.oh_monday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_tuesday">שעות פתיחה יום שלישי:</label>
//           <input
//             type="text"
//             name="oh_tuesday"
//             value={wineryData.oh_tuesday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_wednesday">שעות פתיחה יום רביעי:</label>
//           <input
//             type="text"
//             name="oh_wednesday"
//             value={wineryData.oh_wednesday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_thursday">שעות פתיחה יום חמישי:</label>
//           <input
//             type="text"
//             name="oh_thursday"
//             value={wineryData.oh_thursday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_friday">שעות פתיחה יום שישי:</label>
//           <input
//             type="text"
//             name="oh_friday"
//             value={wineryData.oh_friday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="oh_saturday">שעות פתיחה יום שבת:</label>
//           <input
//             type="text"
//             name="oh_saturday"
//             value={wineryData.oh_saturday}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="accessibility">נגישות:</label>
//           <input
//             type="text"
//             name="accessibility"
//             value={wineryData.accessibility}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="people_max_amount">כמות אנשים מקסימלית:</label>
//           <input
//             type="text"
//             name="people_max_amount"
//             value={wineryData.people_max_amount}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="winery_style">סגנון יקב:</label>
//           <input
//             type="text"
//             name="winery_style"
//             value={wineryData.winery_style}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="stay_time">זמן שהייה ממוצע:</label>
//           <input
//             type="text"
//             name="stay_time"
//             value={wineryData.stay_time}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="average_cost_per_person">עלות ממוצעת לאדם:</label>
//           <input
//             type="text"
//             name="average_cost_per_person"
//             value={wineryData.average_cost_per_person}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="tour_style">סגנון הסיור:</label>
//           <input
//             type="text"
//             name="tour_style"
//             value={wineryData.tour_style}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="tour_attractions">אטרקציות מוצעות:</label>
//           <input
//             type="text"
//             name="tour_attractions"
//             value={wineryData.tour_attractions}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="wines_types">סוגי יינות מוצעים:</label>
//           <input
//             type="text"
//             name="wines_types"
//             value={wineryData.wines_types}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="tour_restaurant">מסעדה ביקב:</label>
//           <input
//             type="text"
//             name="tour_restaurant"
//             value={wineryData.tour_restaurant}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="additional_information">מידע נוסף:</label>
//           <input
//             type="text"
//             name="additional_information"
//             value={wineryData.additional_information}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );

//     const renderPhotoUploadForm = () => (
//       <form onSubmit={handlePhotoSubmit}>
//         <div>
//           <h1 style={{ textAlign: 'center' }}>הוסיפו תמונה עבור היקב שלכם:</h1>
//           <label htmlFor="photo"></label>
//           <input
//             type="file"
//             name="photo"
//             accept="image/*"
//             onChange={(event) => setWineryLogoFile(event.target.files[0])}
//           />
//         </div>
//         <button type="submit">העלאה</button>
//       </form>
//     );
    
  
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('/api/addWinery', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(wineryData),
//       });

//       if (response.ok) {

//         const result = await response.json(); // parse the JSON response
//         const wineryID = result.winery_ID; // get the winery_ID from the response
//         console.log('result', result);

//         // alert(`Winery ${wineryID} added successfully!`);

//         setShowUploadForm(true);
//         setWineryID(wineryID); 

//         setWineryData({
//           winery_name,
//           website: '',
//           phone: '',
//           main_area: '',
//           secondary_area: '',
//           address: '',
//           kosher_type: '',
//           oh_sunday: '',
//           oh_monday: '',
//           oh_tuesday: '',
//           oh_wednesday: '',
//           oh_friday: '',
//           oh_saturday: '',
//           accessibility: '',
//           people_max_amount: '',
//           winery_style: '',
//           stay_time: '',
//           average_cost_per_person: '',
//           tour_style: '',
//           tour_attractions: '',
//           wines_types: '',
//           tour_restaurant: '',
//           additional_information: '',
//         });
//       } else {
//         alert('שגיאה1 בהעלאת הנתונים. נסו שנית');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('שגיאה2 בהעלאת הנתונים. נסו שנית');
//     }
//   };


  

//   return (
//     <div dir="rtl">
//     <br />
//     <br />

//     {!showUploadForm && !summaryData && renderWineryForm()}
//     {showUploadForm && !summaryData && renderPhotoUploadForm()}
//     {summaryData && renderSummary()}
//   </div>
//   );
// }

// async function uploadWineryLogo(file, wineryID, navigate) {
//   const formData = new FormData();
//   formData.append('wineryLogo', file);

//   try {
//     const response = await fetch(`/api/addWinery/${wineryID}`, {
//       method: 'POST',
//       body: formData,
//     });

//     if (response.ok) {

//       // alert('התקבל! תודה רבה על ההעלאה!');
//       // navigate('/');
//     } else {
//       alert('שגיאה1 בהעלאת התמונה. נסו שנית');
//     }
//   } catch (error) {
//     console.error(error);
//     alert('שגיאה2 בהעלאת התמונה. נסו שנית');
//   }
// }


// export { AddWinery, uploadWineryLogo };






































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';


import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';

import Slider from '@mui/material/Slider';

import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';





function AddWinery() {
  const navigate = useNavigate();
  const [wineryID, setWineryID] = useState(null);
  const [wineryLogoFile, setWineryLogoFile] = useState(null);
  const [summaryData, setSummaryData] = useState(null);

  const [phonePrefix, setPhonePrefix] = useState('');

  const [openingTimeSunday, setOpeningTimeSunday] = useState('');
  const [closingTimeSunday, setClosingTimeSunday] = useState('');

  const [openingTimeMonday, setOpeningTimeMonday] = useState('');
  const [closingTimeMonday, setClosingTimeMonday] = useState('');

  const [openingTimeTuesday, setOpeningTimeTuesday] = useState('');
  const [closingTimeTuesday, setClosingTimeTuesday] = useState('');

  const [openingTimeWednesday, setOpeningTimeWednesday] = useState('');
  const [closingTimeWednesday, setClosingTimeWednesday] = useState('');

  const [openingTimeThursday, setOpeningTimeThursday] = useState('');
  const [closingTimeThursday, setClosingTimeThursday] = useState('');

  const [openingTimeFriday, setOpeningTimeFriday] = useState('');
  const [closingTimeFriday, setClosingTimeFriday] = useState('');

  const [openingTimeSaturday, setOpeningTimeSaturday] = useState('');
  const [closingTimeSaturday, setClosingTimeSaturday] = useState('');
  


  const [wineryData, setWineryData] = useState({
    winery_name: '',
    website: '',
    phone: '',
    main_area: '',
    secondary_area: '',
    address: '',
    kosher_type: '',
    oh_sunday: '',
    oh_monday: '',
    oh_tuesday: '',
    oh_wednesday: '',
    oh_thursday: '',
    oh_friday: '',
    oh_saturday: '',
    accessibility: '',
    people_max_amount: '',
    winery_style: '',
    stay_time: '',
    average_cost_per_person: '50',
    tour_style: '',
    tour_attractions: '',
    wines_types: '',
    tour_restaurant: '',
    additional_information: '', 
  });




  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  
  //   setWineryData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
  
    setWineryData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
  };


  const handleOpeningTimeChangeSunday = (event) => {
    setOpeningTimeSunday(event.target.value);
    handleChange({
      target: {
        name: 'oh_sunday',
        value: `${event.target.value}-${closingTimeSunday}`,
      },
    });
  };
  
  const handleClosingTimeChangeSunday = (event) => {
    setClosingTimeSunday(event.target.value);
    handleChange({
      target: {
        name: 'oh_sunday',
        value: `${openingTimeSunday}-${event.target.value}`,
      },
    });
  };

  const handleOpeningTimeChangeMonday = (event) => {
    setOpeningTimeMonday(event.target.value);
    handleChange({
      target: {
        name: 'oh_monday',
        value: `${event.target.value}-${closingTimeMonday}`,
      },
    });
  };
  
  const handleClosingTimeChangeMonday = (event) => {
    setClosingTimeMonday(event.target.value);
    handleChange({
      target: {
        name: 'oh_monday',
        value: `${openingTimeMonday}-${event.target.value}`,
      },
    });
  };


  const handleOpeningTimeChangeTuesday = (event) => {
    setOpeningTimeTuesday(event.target.value);
    handleChange({
      target: {
        name: 'oh_tuesday',
        value: `${event.target.value}-${closingTimeTuesday}`,
      },
    });
  };
  
  const handleClosingTimeChangeTuesday = (event) => {
    setClosingTimeTuesday(event.target.value);
    handleChange({
      target: {
        name: 'oh_tuesday',
        value: `${openingTimeTuesday}-${event.target.value}`,
      },
    });
  };
  
  const handleOpeningTimeChangeWednesday = (event) => {
    setOpeningTimeWednesday(event.target.value);
    handleChange({
      target: {
        name: 'oh_wednesday',
        value: `${event.target.value}-${closingTimeWednesday}`,
      },
    });
  };
  
  const handleClosingTimeChangeWednesday = (event) => {
    setClosingTimeWednesday(event.target.value);
    handleChange({
      target: {
        name: 'oh_wednesday',
        value: `${openingTimeWednesday}-${event.target.value}`,
      },
    });
  };
  
  const handleOpeningTimeChangeThursday = (event) => {
    setOpeningTimeThursday(event.target.value);
    handleChange({
      target: {
        name: 'oh_thursday',
        value: `${event.target.value}-${closingTimeThursday}`,
      },
    });
  };
  
  const handleClosingTimeChangeThursday = (event) => {
    setClosingTimeThursday(event.target.value);
    handleChange({
      target: {
        name: 'oh_thursday',
        value: `${openingTimeThursday}-${event.target.value}`,
      },
    });
  };
  
  const handleOpeningTimeChangeFriday = (event) => {
    setOpeningTimeFriday(event.target.value);
    handleChange({
      target: {
        name: 'oh_friday',
        value: `${event.target.value}-${closingTimeFriday}`,
      },
    });
  };
  
  const handleClosingTimeChangeFriday = (event) => {
    setClosingTimeFriday(event.target.value);
    handleChange({
      target: {
        name: 'oh_friday',
        value: `${openingTimeFriday}-${event.target.value}`,
      },
    });
  };
  
  const handleOpeningTimeChangeSaturday = (event) => {
    setOpeningTimeSaturday(event.target.value);
    handleChange({
      target: {
        name: 'oh_saturday',
        value: `${event.target.value}-${closingTimeSaturday}`,
      },
    });
  };
  
  const handleClosingTimeChangeSaturday = (event) => {
    setClosingTimeSaturday(event.target.value);
    handleChange({
      target: {
        name: 'oh_saturday',
        value: `${openingTimeSaturday}-${event.target.value}`,
      },
    });
  };
  
  



  const [showUploadForm, setShowUploadForm] = useState(false);

  const handlePhotoSubmit = async (event) => {
    event.preventDefault();
  
    if (wineryID && wineryLogoFile) {
      await uploadWineryLogo(wineryLogoFile, wineryID, navigate);
      setSummaryData((prevData) => ({
        ...prevData,
        ...wineryData, // Add wineryData properties
        wineryLogoFile: wineryLogoFile,
      }));
    } else {
      alert('Error: winery ID or logo file is missing.');
    }
  };

  const renderSummary = () => (
    <div>
      <h1 style={{textAlign: 'center'}}>היקב התקבל למאגר!</h1>
      {summaryData.wineryLogoFile && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={URL.createObjectURL(summaryData.wineryLogoFile)}
            alt="Winery Logo"
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>      
      )}
    </div>
  );

  const wineryStyles = [
    { label: "עירוני", value: "עירוני" },
    { label: "ביתי", value: "ביתי" },
    { label: "טבעי", value: "טבעי" },
    { label: "כפרי", value: "כפרי" },
    { label: "היסטורי", value: "היסטורי" },
    { label: "מסחרי", value: "מסחרי" },
  ];


  const tour_style = [
    { label: "זוגי", value: "זוגי" },
    { label: "משפחתי", value: "משפחתי" },
    { label: "חברתי", value: "חברתי" },

  ];


const tour_attractions = [
  { label: "ליקוט צמחי בר אכילים", value: "ליקוט צמחי בר אכילים" },
  { label: "סדנת הכנת יין", value: "סדנת הכנת יין" },
  { label: "אירועים פרטיים", value: "אירועים פרטיים" },
  { label: "סיור כרמים", value: "סיור כרמים" },
  { label: "סיור ממונע באמצעות טרקטורונים", value: "סיור ממונע באמצעות טרקטורונים" },
];



const wines_types = [
  { label: "קברנה סוביניון אדום", value: "קברנה סוביניון אדום" },
  { label: "מרלו אדום", value: "מרלו אדום" },
  { label: "פינו נואר אדום", value: "פינו נואר אדום" },
  { label: "שיראז אדום", value: "שיראז אדום" },
  { label: "רוזה", value: "רוזה" },
  { label: "צרפתי לבן", value: "צרפתי לבן" },
  { label: "חצי מתוק לבן", value: "חצי מתוק לבן" },
  { label: "חצי יבש לבן", value: "חצי יבש לבן" },
  { label: "מתוק פורט", value: "מתוק פורט" },
  { label: "נייפר", value: "נייפר" },
  { label: "פרוסקו", value: "פרוסקו" },
  { label: "זינפנדל אדום", value: "זינפנדל אדום" },
  { label: "פינו גריג'יו לבן", value: "פינו גריג'יו לבן" },
  { label: "פינו נואר לבן", value: "פינו נואר לבן" },
  { label: "קנין חרדון אדום", value: "קנין חרדון אדום" },
  { label: "קריניאן אדום", value: "קריניאן אדום" },
  { label: "טמפרניו אדום", value: "טמפרניו אדום" },
  { label: "מלבק אדום", value: "מלבק אדום" },
  { label: "נרו ד'אבולה אדום", value: "נרו ד'אבולה אדום" },
  { label: "מונטפולציאנו אדום", value: "מונטפולציאנו אדום" },
  { label: "סנסו אדום", value: "סנסו אדום" },
  { label: "ברברה אדום", value: "ברברה אדום" },
  { label: "ניו זילנד סוביניון בלאן", value: "ניו זילנד סוביניון בלאן" },
  { label: "סוביניון בלאן", value: "סוביניון בלאן" },
  { label: "רייסלינג לבן", value: "רייסלינג לבן" }
  
];



const tour_restaurant = [
  { label: "בשרי", value: "בשרי" },
  { label: "חלבי", value: "חלבי" },
  { label: "דגים", value: "דגים" },
  { label: "טבעוני", value: "טבעוני" },


];


  const renderWineryForm = () => (
  <form onSubmit={handleSubmit}>    
    <h1 style={{ textAlign: 'center' }}>הוסיפו את היקב שלכם:</h1>




{/* ********************************************************** */}

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
        <Box
          sx={{
            width: '500px',
            border: '1px solid gray',
            padding: '10px',
            borderRadius: '5px',
            position: 'relative',
            overflow: 'auto',
          }}
        >

{/* ********************************************************** */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} htmlFor="winery_name">שם היקב</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
            <TextField
              id="winery_name"
              type="text"
              name="winery_name"
              value={wineryData.winery_name}
              onChange={handleChange}
              variant="outlined"
              label="שם היקב"
              style={{ width: '85%', right: 60 }}
            />
              <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="שם בית העסק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
        </Box>


        {/* ********************************************************** */}

        <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
          <InputLabel style={{fontSize: "25px",}} htmlFor="website">אתר</InputLabel>
        </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
            <TextField
              id="website"
              type="text"
              name="website"
              value={wineryData.website}
              onChange={handleChange}
              variant="outlined"
              label="אתר"
              style={{ width: '85%', right: 60 }}
            />
              <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="אתר לביצוע הזמנות סיורים">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
        </Box>

        {/* ********************************************************** */}


        <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
          <InputLabel style={{ fontSize: "25px" }} htmlFor="phone">טלפון</InputLabel>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>

        <Box display="flex" alignItems="center">
          <TextField
            id="phone"
            type="text"
            name="phone"
            value={wineryData.phone}
            onChange={handleChange}
            variant="outlined"
            label="טלפון"
            style={{ width: '60%', right: '12%' }}
          />
          <Box mx={1} />

          <InputLabel htmlFor="area" style={{ left: '2%' }}>קידומת</InputLabel>
          <InputAdornment position="end" style={{ width: '30%' }}>
            
            <Select
              name="area"
              id="area"
              value={phonePrefix}
              onChange={(e) => setPhonePrefix(e.target.value)}
              displayEmpty
              style={{ width: '80%', right: '32%' }}
            >
              <MenuItem value={null}>
                <em>בחר</em>
              </MenuItem>
              <MenuItem value="054">054</MenuItem>
              <MenuItem value="050">050</MenuItem>
              <MenuItem value="052">052</MenuItem>
              <MenuItem value="053">053</MenuItem>
              <MenuItem value="055">055</MenuItem>
              <MenuItem value="058">058</MenuItem>
              <MenuItem value="072">072</MenuItem>
              <MenuItem value="073">073</MenuItem>
              <MenuItem value="074">074</MenuItem>
              <MenuItem value="076">076</MenuItem>
              <MenuItem value="077">077</MenuItem>
              <MenuItem value="079">079</MenuItem>
              <MenuItem value="02">02</MenuItem>
              <MenuItem value="03">03</MenuItem>
              <MenuItem value="04">04</MenuItem>
              <MenuItem value="08">08</MenuItem>
              <MenuItem value="09">09</MenuItem>
            </Select>
          </InputAdornment>
        </Box>
        <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
          <Tooltip title="במידה ויש טלפון נוסף ניתן לרשום בהערות הנוספות בתחתית העמוד">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </FormControl>
        </Box>



{/* ********************************************************** */}


        <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
          <InputLabel style={{ fontSize: "25px" }} htmlFor="main_area">איזור ראשי</InputLabel>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
            <Box display="flex" alignItems="center">
              <InputLabel htmlFor="main_area" style={{  left: '2%' }}>איזור ראשי</InputLabel>
              <Select
                id="main_area"
                name="main_area"
                value={wineryData.main_area}
                onChange={handleChange}
                style={{ width: '85%', right: 60 }}
                >
                <MenuItem value="">
                  <em>יש לבחור מהרשימה</em>
                </MenuItem>
                <MenuItem value="ירושלים">ירושלים</MenuItem>

                {/* <MenuItem value="הצפון">הצפון</MenuItem>
                <MenuItem value="השרון">השרון</MenuItem>
                <MenuItem value="המרכז">המרכז</MenuItem>
                <MenuItem value="השפלה">השפלה</MenuItem>
                <MenuItem value="הדרום">הדרום</MenuItem>
                <MenuItem value="הנגב">הנגב</MenuItem>
                <MenuItem value="החוף המזרחי">החוף המזרחי</MenuItem>
                <MenuItem value="הערבה">הערבה</MenuItem>
                <MenuItem value="הגולן">הגולן</MenuItem>
                <MenuItem value="הכרמל">הכרמל</MenuItem> */}
              </Select>
              <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="יש לבחור מהרשימה">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </FormControl>
        </Box>


{/* ********************************************************** */}


        <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
            <InputLabel style={{ fontSize: "25px" }} htmlFor="secondary_area">איזור משני</InputLabel>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
            <Box display="flex" alignItems="center">
              <InputLabel htmlFor="secondary_area" style={{  left: '2%' }}>איזור משני</InputLabel>
              <Select
                id="secondary_area"
                name="secondary_area"
                value={wineryData.secondary_area}
                onChange={handleChange}
                style={{ width: '85%', right: 60 }}
                >
                <MenuItem value="">
                  <em>יש לבחור מהרשימה</em>
                </MenuItem>
                <MenuItem value="ירושלים">הרי ירושלים</MenuItem>
                <MenuItem value="הדרום">צור הדסה</MenuItem>
                <MenuItem value="הנגב">עמק האלה</MenuItem>
                <MenuItem value="החוף המזרחי">לטרון</MenuItem>
                <MenuItem value="הערבה">גוש עציון</MenuItem>
                <MenuItem value="הגולן">בית שמש</MenuItem>
              </Select>
              <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="יש לבחור מהרשימה">
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </FormControl>
        </Box>


{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px", left: 10}} htmlFor="address">כתובת היקב</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
            <TextField
              id="address"
              type="text"
              name="address"
              value={wineryData.address}
              onChange={handleChange}
              variant="outlined"
              label="כתובת היקב"
              style={{ width: '85%', right: 60 }}
            />
              <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="כתובת מדוייקת לניווט">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>

        



{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px", left: 10}} htmlFor="address">כשרות היקב</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Checkbox
          name="kosher_type"
          checked={wineryData.kosher_type}
          onChange={(event) => setWineryData(prevState => ({...prevState, kosher_type: event.target.checked}))}
          style={{ fontSize: "45px" }}
        />
      </Box>
      <Box position="absolute" right={10} transform="translateY(-50%)">
                <Tooltip title="אם היקב כשר עם תעודה יש לסמן">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>
      



{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} >שעות יום ראשון</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">

          <TextField
            id="oh_sunday_opening"
            type="time"
            value={openingTimeSunday}
            onChange={handleOpeningTimeChangeSunday}
            variant="outlined"
            label="פתיחה"
            style={{ width: '100%', marginRight: '12%' }}
            InputLabelProps={{
              shrink: true,
              style: { textAlign: 'center' },
            }}
          />

            <Box mx={1} />

            <TextField
              id="oh_sunday_closing"
              type="time"
              value={closingTimeSunday}
              onChange={handleClosingTimeChangeSunday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>

{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} >שעות יום שני</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">

          <TextField
            id="oh_monday_opening"
            type="time"
            value={openingTimeMonday}
            onChange={handleOpeningTimeChangeMonday}
            variant="outlined"
            label="פתיחה"
            style={{ width: '100%', marginRight: '12%' }}
            InputLabelProps={{
              shrink: true,
              style: { textAlign: 'center' },
            }}
          />

            <Box mx={1} />

            <TextField
              id="oh_monday_closing"
              type="time"
              value={closingTimeMonday}
              onChange={handleClosingTimeChangeMonday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>



{/* ************************************************************************ */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}}>שעות יום שלישי</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">
            <TextField
              id="oh_tuesday_opening"
              type="time"
              value={openingTimeTuesday}
              onChange={handleOpeningTimeChangeTuesday}
              variant="outlined"
              label="פתיחה"
              style={{ width: '100%', marginRight: '12%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box mx={1} />
            <TextField
              id="oh_tuesday_closing"
              type="time"
              value={closingTimeTuesday}
              onChange={handleClosingTimeChangeTuesday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>


{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}}>שעות יום רביעי</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">
            <TextField
              id="oh_wednesday_opening"
              type="time"
              value={openingTimeWednesday}
              onChange={handleOpeningTimeChangeWednesday}
              variant="outlined"
              label="פתיחה"
              style={{ width: '100%', marginRight: '12%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box mx={1} />
            <TextField
              id="oh_wednesday_closing"
              type="time"
              value={closingTimeWednesday}
              onChange={handleClosingTimeChangeWednesday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>




{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}}>שעות יום חמישי</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">
            <TextField
              id="oh_thursday_opening"
              type="time"
              value={openingTimeThursday}
              onChange={handleOpeningTimeChangeThursday}
              variant="outlined"
              label="פתיחה"
              style={{ width: '100%', marginRight: '12%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box mx={1} />
            <TextField
              id="oh_thursday_closing"
              type="time"
              value={closingTimeThursday}
              onChange={handleClosingTimeChangeThursday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>



{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}}>שעות יום שישי</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">
            <TextField
              id="oh_friday_opening"
              type="time"
              value={openingTimeFriday}
              onChange={handleOpeningTimeChangeFriday}
              variant="outlined"
              label="פתיחה"
              style={{ width: '100%', marginRight: '12%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box mx={1} />
            <TextField
              id="oh_friday_closing"
              type="time"
              value={closingTimeFriday}
              onChange={handleClosingTimeChangeFriday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>


{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}}>שעות יום שבת</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Box display="flex" alignItems="center">
            <TextField
              id="oh_saturday_opening"
              type="time"
              value={openingTimeSaturday}
              onChange={handleOpeningTimeChangeSaturday}
              variant="outlined"
              label="פתיחה"
              style={{ width: '100%', marginRight: '12%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box mx={1} />
            <TextField
              id="oh_saturday_closing"
              type="time"
              value={closingTimeSaturday}
              onChange={handleClosingTimeChangeSaturday}
              variant="outlined"
              label="סגירה"
              style={{ width: '100%', marginLeft: '3%' }}
              InputLabelProps={{
                shrink: true,
                style: { textAlign: 'center' },
              }}
            />
            <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
              <Tooltip title="שעות פעילות, אם סגור יש להשאיר ריק">
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </FormControl>
      </Box>


{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px", left: 10}} htmlFor="address">האם היקב נגיש?</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Checkbox
          name="accessibility"
          checked={wineryData.accessibility}
          onChange={(event) => setWineryData(prevState => ({...prevState, accessibility: event.target.checked}))}
          style={{ fontSize: "45px" }}
        />
      </Box>
      <Box position="absolute" right={10} transform="translateY(-50%)">
                <Tooltip title="אם היקב  נגיש לבעלי מוגבלויות יש לסמן">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>
      
{/* ************************************************************* */}


      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px", left: 10}} htmlFor="address">כמות אנשים מקסימלית</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
        <TextField
          id="people_max_amount"
          name="people_max_amount"
          type="number"
          value={wineryData.people_max_amount}
          onChange={handleChange}  
          variant="outlined"
          label="כמות אנשים" 
          style={{ width: '85%', right: 60 }}       
          InputLabelProps={{
            shrink: false,
          }}
          inputProps={{
            min: 0,
          }}
          />
          <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="כמות אנשים מקסימלית אותה היקב יכול להכיל">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>

{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel htmlFor="winery_style" style={{ fontSize: "25px" }}>סגנון יקב</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Autocomplete
            multiple
            id="winery-style-options"
            options={wineryStyles}
            getOptionLabel={(option) => option.label}
            value={
              wineryData.winery_style
                ? wineryData.winery_style.split(",").map(value => wineryStyles.find(option => option.value === value))
                : []
            }
                  filterSelectedOptions
            disableCloseOnSelect
            onChange={(event, selectedOptions) => {
              handleChange({
                target: {
                  name: "winery_style",
                  value: selectedOptions.map((option) => option.value).join(","),
                },
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="סגנון יקב"
                placeholder="יש לבחור מהרשימה"
                style={{ width: "85%", right: 60 }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.label}
                  {...getTagProps({ index })}
                  style={{
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                />
              ))
            }
          />
        </FormControl>
      </Box>
      <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="מהו סגנון היקב?">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>



{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px", left: 10}} htmlFor="stay_time">זמן סיור ממוצע</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
        <TextField
          id="stay_time"
          name="stay_time"
          type="number"
          value={wineryData.stay_time}
          onChange={handleChange}  
          variant="outlined"
          label="זמן סיור בשעות" 
          style={{ width: '85%', right: 60 }}       
          InputLabelProps={{
            shrink: false,
          }}
          inputProps={{
            min: 0,
          }}
          />
          <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="זמן הסיור בשעות">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>


{/* ************************************************************* */}

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{ fontSize: "25px", left: 10 }} htmlFor="stay_time">עלות ממוצעת לאדם</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
  <FormControl fullWidth>
    <Box
      component="span"
      sx={{
        display: 'block',
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
        border: '1px solid',
        borderColor: (theme) => theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: '30%',
        margin: '0 auto',
        textAlign: 'center'
      }}
    >
      {wineryData.average_cost_per_person} ₪
    </Box>

    <Box display="flex" justifyContent="center" width="100%">
      <Box width="80%">
        <Slider
          name="average_cost_per_person"
          min={50}
          max={300}
          step={25}
          value={wineryData.average_cost_per_person}
          onChange={(event, newValue) =>
            handleChange({ target: { name: 'average_cost_per_person', value: newValue } })
          }
          valueLabelDisplay="auto"
          marks
        />
      </Box>
    </Box>

    <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
      <Tooltip title="עלות ממוצעת לאורח">
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
    </Box>
  </FormControl>
</Box>



{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel htmlFor="tour_style" style={{ fontSize: "25px" }}>סגנון הסיורים</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Autocomplete
            multiple
            id="tour-style-options"
            options={tour_style}
            getOptionLabel={(option) => option.label}
            value={
              wineryData.tour_style
                ? wineryData.tour_style.split(",").map(value => tour_style.find(option => option.value === value))
                : []
            }
                  filterSelectedOptions
            disableCloseOnSelect
            onChange={(event, selectedOptions) => {
              handleChange({
                target: {
                  name: "tour_style",
                  value: selectedOptions.map((option) => option.value).join(","),
                },
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="סגנון סיורים"
                placeholder="יש לבחור מהרשימה"
                style={{ width: "85%", right: 60 }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.label}
                  {...getTagProps({ index })}
                  style={{
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                />
              ))
            }
          />
        </FormControl>
      </Box>
      <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="למי מתאימים הסיורים ביקב">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
      </Box>

{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel htmlFor="tour_attractions" style={{ fontSize: "25px" }}>אטרקציות ביקב</InputLabel>
      </Box>



      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Autocomplete
            multiple
            id="tour-attractions-options"
            options={tour_attractions}
            getOptionLabel={(option) => option.label}
            value={
              wineryData.tour_attractions
                ? wineryData.tour_attractions.split(",").map(value => tour_attractions.find(option => option.value === value))
                : []
            }
                  filterSelectedOptions
            disableCloseOnSelect
            onChange={(event, selectedOptions) => {
              handleChange({
                target: {
                  name: "tour_attractions",
                  value: selectedOptions.map((option) => option.value).join(","),
                },
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="סוגי אטרקציות"
                placeholder="יש לבחור מהרשימה"
                style={{ width: "85%", right: 60 }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.label}
                  {...getTagProps({ index })}
                  style={{
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                />
              ))
            }
          />
          <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="אילו פעיליות קיימות ביקב">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
        </FormControl>
      </Box>

{/* ************************************************************* */}



      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel htmlFor="wines_types" style={{ fontSize: "25px" }}>סוגיי יינות</InputLabel>
      </Box>


      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Autocomplete
            multiple
            id="tour-attractions-options"
            options={wines_types}
            getOptionLabel={(option) => option.label}
            value={
              wineryData.wines_types
                ? wineryData.wines_types.split(",").map(value => wines_types.find(option => option.value === value))
                : []
            }
                  filterSelectedOptions
            disableCloseOnSelect
            onChange={(event, selectedOptions) => {
              handleChange({
                target: {
                  name: "wines_types",
                  value: selectedOptions.map((option) => option.value).join(","),
                },
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="סוגי יינות"
                style={{ width: "85%", right: 60 }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.label}
                  {...getTagProps({ index })}
                  style={{
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                />
              ))
            }
          />
          <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="סוגים נוספים ניתן לציין  בהערות הנוספות">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
        </FormControl>
      </Box>
      


{/* ************************************************************* */}



<Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel htmlFor="tour_restaurant" style={{ fontSize: "25px" }}>מסעדה ביקב</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <FormControl fullWidth>
          <Autocomplete
            multiple
            id="tour-attractions-options"
            options={tour_restaurant}
            getOptionLabel={(option) => option.label}
            value={
              wineryData.tour_restaurant
                ? wineryData.tour_restaurant.split(",").map(value => tour_restaurant.find(option => option.value === value))
                : []
            }
                  filterSelectedOptions
            disableCloseOnSelect
            onChange={(event, selectedOptions) => {
              handleChange({
                target: {
                  name: "tour_restaurant",
                  value: selectedOptions.map((option) => option.value).join(","),
                },
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="מסעדה"
                placeholder="מסעדות"
                style={{ width: "85%", right: 60 }}
              />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option.label}
                  {...getTagProps({ index })}
                  style={{
                    marginTop: "4px",
                    marginBottom: "4px",
                    marginRight: "0px",
                    marginLeft: "0px",
                  }}
                />
              ))
            }
          />
          <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="מסעדות קיימות ביקב">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
        </FormControl>
      </Box>


{/* ************************************************************* */}

<Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} htmlFor="additional_information">מידע נוסף?</InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
          <FormControl fullWidth>
            <TextField
              id="additional_information"
              type="text"
              name="additional_information"
              value={wineryData.additional_information}
              onChange={handleChange}
              variant="outlined"
              label="הערות נוספות"
              style={{ width: '85%', right: 60 }}
            />
              <Box position="absolute" right={10} top="10%" transform="translateY(-50%)">
                <Tooltip title="כל מה שעולה על הדעת:)">
                <IconButton>
                  <InfoIcon />
                </IconButton>
                </Tooltip>
              </Box>
          </FormControl>
        </Box>

{/* ************************************************************* */}

    </Box>
  </div>




          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap" rel="stylesheet"></link>

          <Stack spacing={2} direction='row' sx={{justifyContent: 'center', marginBottom: '20px', marginTop: '20px'}}>
            <Button 
              type="submit"
              variant="contained" 
              startIcon={<CheckCircleIcon sx={{marginLeft: '0px'}} />}
              sx={{
                width: '20%',
                height: '60',
                backgroundColor: 'rgba(203, 67, 53)',
                '&:hover': { backgroundColor: 'rgba(212, 172, 13)' },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: '5px' // add margin to the right of the button
              }}
            >
              <span style={{margin: '0 auto', fontSize: '22px', fontFamily: 'Heebo, sans-serif', fontWeight: 900}}>סיימתי!</span>
            </Button>
          </Stack>
      </form>
    );

{/* ************************************************************* */}



    const renderPhotoUploadForm = () => (
      <form onSubmit={handlePhotoSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            mt: '10%',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>הוסיפו לוגו עבור היקב</h1>
          <label htmlFor="photo"></label>
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton color="primary" aria-label="upload picture" component="label">
              <input
                hidden
                type="file"
                name="photo"
                accept="image/*"
                onChange={(event) => setWineryLogoFile(event.target.files[0])}
              />
              <PhotoCamera />
            </IconButton>
          </Stack>
          {wineryLogoFile && (
            <Box sx={{ width: '150px', height: '150px', overflow: 'hidden', borderRadius: '50%' }}>
              <img
                src={URL.createObjectURL(wineryLogoFile)}
                alt="Preview"
                style={{ width: '100%', height: 'auto' }}
              />
            </Box>
          )}
          <Button variant="contained" type="submit">
            העלאה
          </Button>
        </Box>
      </form>
    );
    
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const fullWineryData = {
          ...wineryData,
          phone: phonePrefix + wineryData.phone,
        };
    
        const response = await fetch('/api/addWinery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(fullWineryData), // Pass fullWineryData here
        });

      if (response.ok) {

        const result = await response.json(); // parse the JSON response
        const wineryID = result.winery_ID; // get the winery_ID from the response
        console.log('result', result);

        // alert(`Winery ${wineryID} added successfully!`);

        setShowUploadForm(true);
        setWineryID(wineryID); 

        setWineryData({
          winery_name: '',
          website: '',
          phone: '',
          main_area: '',
          secondary_area: '',
          address: '',
          kosher_type: '',
          oh_sunday: '',
          oh_monday: '',
          oh_tuesday: '',
          oh_wednesday: '',
          oh_thursday: '',
          oh_friday: '',
          oh_saturday: '',
          accessibility: '',
          people_max_amount: '',
          winery_style: '',
          stay_time: '',
          average_cost_per_person: '',
          tour_style: '',
          tour_attractions: '',
          wines_types: '',
          tour_restaurant: '',
          additional_information: '',
        });
      } else {
        alert('שגיאה10 בהעלאת הנתונים. נסו שנית');
      }
    } catch (error) {
      console.error(error);
      alert('שגיאה20 בהעלאת הנתונים. נסו שנית');
    }
  };


  

  return (
    <div dir="rtl">
    <br />
    <br />

    {!showUploadForm && !summaryData && renderWineryForm()}
    {showUploadForm && !summaryData && renderPhotoUploadForm()}
    {summaryData && renderSummary()}
  </div>
  );
}

async function uploadWineryLogo(file, wineryID, navigate) {
  const formData = new FormData();
  formData.append('wineryLogo', file);

  try {
    const response = await fetch(`/api/addWinery/${wineryID}`, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {

      // alert('התקבל! תודה רבה על ההעלאה!');
      // navigate('/');
    } else {
      alert('שגיאה1 בהעלאת התמונה. נסו שנית');
    }
  } catch (error) {
    console.error(error);
    alert('שגיאה2 בהעלאת התמונה. נסו שנית');
  }
}


export { AddWinery, uploadWineryLogo };





