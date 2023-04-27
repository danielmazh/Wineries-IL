// import React from 'react';

// const Page3 = ({ formData, totalPages }) => {
//   return (
// <div>
//       <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------------------</h1>
//       <h4 style={{textAlign: 'center'}}>עמוד 3 מתוך {totalPages}</h4>

//       <ul class="form-data-list">
//       <h4>סיכום הנתונים:</h4>

//         <li>איזור הסיור המבוקש: {formData.TourArea}</li>
//         <li>תאריך של הסיור: {formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) + ' ' + formData.selectedDate.toLocaleDateString('he-IL') : 'לא נבחר תאריך!'}</li>
//         <li>מספר יקבים לסיור: {formData.TourCount}</li>
//         <li>שעות הבוקר?: {formData.TourTimeMorning ? 'כן' : 'לא'}</li>
//         <li>שעות הצהריים?: {formData.TourTimeAfternoon ? 'כן' : 'לא'}</li>
//         <li>שעות הערב?: {formData.TourTimeEvening ? 'כן' : 'לא'}</li>
//         <li>מספר משתתפים בסיור: {formData.TourPeopleCount}</li>
//         <li>תקציב לאדם: {formData.BudgetRange}</li>
//         <li>נגישות: {formData.Accessibility ? 'כן' : 'לא'}</li>

//         <h4>העדפות אישיות - כולל ציונים:</h4>

//         <li>כשרות מבוקשת: {formData.KosherType ? 'כן' : 'לא'}</li>
//         <li>ציון: {formData.KosherType_GRADE}/3</li>

//         <li>סגנון הסיור: {formData.TourStyle}</li>
//         <li>ציון: {formData.TourStyle_GRADE}/3</li>

//         <li>סגנון היקב: {formData.WineryStyle}</li>
//         <li>סגנונות רצויים: {formData.selectedWineryStyleOptions.join(', ')}</li>
//         <li>ציון: {formData.WineryStyle_GRADE}/3</li>

      
//         <li>אטרקציות מבוקשות? {formData.TourAttractions ? 'כן' : 'לא'}</li>
//         <li>אטרקציות מבוקשות: {formData.selectedAttractionsOptions.join(', ')}</li>
//         <li>ציון: {formData.TourAttractions_GRADE}/3</li>

//         <li>מסעדה מבוקשת? {formData.TourRestaurant ? 'כן' : 'לא'}</li>
//         <li>מסעדות: {formData.selectedRestaurantOptions.join(', ')}</li>
//         <li>ציון: {formData.TourRestaurant_GRADE}/3</li>

//         <li>סוגי יינות מבוקשים? {formData.WinesTypes ? 'כן' : 'לא'}</li>
//         <li>סוגי יינות: {formData.selectedWinesTypesOptions.join(', ')}</li>
//         <li>ציון: {formData.WinesTypes_GRADE}/3</li>




//       </ul>
//     </div>
//   );
// };

// export default Page3;










































// import React from 'react';
// import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

// const Page3 = ({ formData, totalPages }) => {
//   return (
    
//     <Container maxWidth="sm">
//       <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-----------------------</h1>


//       <Typography variant="h4" align="center" sx={{ mb: 2 }}>עמוד 3 מתוך {totalPages}</Typography>
//         <List sx={{ mb: 4 }}>
//       <Typography variant="h6" sx={{ mb: 2 }}>סיכום הנתונים:</Typography>

//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">איזור הסיור המבוקש:</Typography>} secondary={formData.TourArea} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">תאריך של הסיור:</Typography>} secondary={formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) + ' ' + formData.selectedDate.toLocaleDateString('he-IL') : 'לא נבחר תאריך!'} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">מספר יקבים לסיור:</Typography>} secondary={formData.TourCount} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">שעות הבוקר?:</Typography>} secondary={formData.TourTimeMorning ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">שעות הצהריים?:</Typography>} secondary={formData.TourTimeAfternoon ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">שעות הערב?:</Typography>} secondary={formData.TourTimeEvening ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
//         </ListItem>



//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">מספר משתתפים בסיור:</Typography>} secondary={formData.TourPeopleCount} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">תקציב לאדם:</Typography>} secondary={formData.BudgetRange} sx={{ textAlign: 'right' }} />
//         </ListItem>
//         <ListItem>
//           <ListItemText primary={<Typography fontWeight="bold">נגישות:</Typography>} secondary={formData.Accessibility ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
//         </ListItem>



//         <Typography variant="h6" sx={{ mb: 2, mt: 4 }}>העדפות אישיות - כולל ציונים:</Typography>



//         <ListItem>
//       <ListItemText primary={<Typography fontWeight="bold">כשרות מבוקשת:</Typography>} secondary={formData.KosherType ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">ציון:</Typography>} secondary={`${formData.KosherType_GRADE}/3`} sx={{ textAlign: 'right' }} />
//     </ListItem>
//     <ListItem>
//       <ListItemText primary={<Typography fontWeight="bold">סגנון הסיור:</Typography>} secondary={formData.TourStyle} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">ציון:</Typography>} secondary={`${formData.TourStyle_GRADE}/3`} sx={{ textAlign: 'right' }} />
//     </ListItem>
//     <ListItem>



//       <ListItemText primary={<Typography fontWeight="bold">סגנון היקב:</Typography>} secondary={formData.WineryStyle} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">סגנונות רצויים:</Typography>} secondary={formData.selectedWineryStyleOptions.join(', ')} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">ציון:</Typography>} secondary={`${formData.WineryStyle_GRADE}/3`} sx={{ textAlign: 'right' }} />
//     </ListItem>
//     <ListItem>
//       {/* <ListItemText primary={<Typography fontWeight="bold">אטרקציות מבוקשות?</Typography>} secondary={formData.TourAttractions ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} /> */}
//       <ListItemText primary={<Typography fontWeight="bold">אטרקציות מבוקשות:</Typography>} secondary={formData.selectedAttractionsOptions.join(', ')} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">ציון:</Typography>} secondary={`${formData.TourAttractions_GRADE}/3`} sx={{ textAlign: 'right' }} />
//     </ListItem>



//     <ListItem>
//       {/* <ListItemText primary={<Typography fontWeight="bold">מסעדה מבוקשת?</Typography>} secondary={formData.TourRestaurant ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} /> */}
//       <ListItemText primary={<Typography fontWeight="bold">מסעדות:</Typography>} secondary={formData.selectedRestaurantOptions.join(', ')} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">ציון:</Typography>} secondary={`${formData.TourRestaurant_GRADE}/3`} sx={{ textAlign: 'right' }} />
//     </ListItem>
//     <ListItem>
//       {/* <ListItemText primary={<Typography fontWeight="bold">סוגי יינות מבוקשים?</Typography>} secondary={formData.WinesTypes ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} /> */}
//       <ListItemText primary={<Typography fontWeight="bold">סוגי יינות:</Typography>} secondary={formData.selectedWinesTypesOptions.join(', ')} sx={{ textAlign: 'right' }} />
//       <ListItemText primary={<Typography fontWeight="bold">ציון:</Typography>} secondary={`${formData.WinesTypes_GRADE}/3`} sx={{ textAlign: 'right' }} />
//     </ListItem>
//     </List>
//     </Container>
//   );
// };



// export default Page3;

















import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';


import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';




import PlaceIcon from '@mui/icons-material/Place';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import Groups2Icon from '@mui/icons-material/Groups2';
import PaymentIcon from '@mui/icons-material/Payment';
import AccessibleIcon from '@mui/icons-material/Accessible';


import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import ParkIcon from '@mui/icons-material/Park';
import AttractionsIcon from '@mui/icons-material/Attractions';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LiquorIcon from '@mui/icons-material/Liquor';




const Page3 = ({ formData, totalPages }) => {
  return (
    
    <Container maxWidth="sm">

      <Typography align="center" sx={{ mb: 2 }}>עמוד 3 מתוך {totalPages}</Typography>

    <List 
    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"




    // fontWeight= 'bold'
    // fontFamily= 'Heebo, sans-serif'
    //   color= 'rgba(255, 215, 0, 0.9)' 
    //   fontSize= '45px'
    //   textAlign= 'center'
    //   textShadow= '3px 3px 4px rgba(0, 0, 0, 1)' 

      
    subheader={


      <ListSubheader>
        <Typography 
        // variant="h6"
        sx={{ mb: 2, mt: 4 }}
        component="div" id="nested-list-subheader"
        fontFamily= 'Heebo, sans-serif'
        textAlign= 'center'
        fontSize= '45px'
        >
          סיכום הנתונים
          </Typography>
      </ListSubheader>
      }
      >


<div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>

      <ListItemButton>
        <ListItemIcon>
          <PlaceIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">איזור הסיור המבוקש</Typography>}secondary={formData.TourArea} sx={{ textAlign: 'right' }}/>
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <CalendarMonthIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography        
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px' 
                fontWeight="bold">תאריך של הסיור:</Typography>} secondary={formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) + ' ' + formData.selectedDate.toLocaleDateString('he-IL') : 'לא נבחר תאריך!'} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <FlagCircleIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">מספר יקבים לסיור</Typography>} secondary={formData.TourCount} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <LightModeIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">שעות הבוקר?</Typography>} secondary={formData.TourTimeMorning ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <WbTwilightIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">שעות הצהריים?</Typography>} secondary={formData.TourTimeAfternoon ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <NightsStayIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">שעות הערב?</Typography>} secondary={formData.TourTimeEvening ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <Groups2Icon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">מספר משתתפים בסיור</Typography>} secondary={formData.TourPeopleCount} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <PaymentIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">תקציב לאדם</Typography>} secondary={formData.BudgetRange} sx={{ textAlign: 'right' }} />
        </ListItemButton>


        <ListItemButton>
        <ListItemIcon>
          <AccessibleIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">נגישות</Typography>} secondary={formData.Accessibility ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton>

</div>

        <ListSubheader>
  <Typography 
    // variant="h6" 
    component="div" id="nested-list-subheader"
    fontFamily='Heebo, sans-serif'
    fontSize='25px'
    textDecoration='underline'
    sx={{ mb: 2, mt: 4 }}>
      העדפות אישיות
  </Typography>
</ListSubheader>




<div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>


        <ListItemButton>
        <ListItemIcon>
          <ReceiptLongIcon  />
        </ListItemIcon>
        <ListItemText primary={
        <Typography
        fontFamily= 'Heebo, sans-serif'
        fontSize= '20px'>כשרות מבוקשת</Typography>} secondary={formData.KosherType ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />

        <ListItemText primary={
        <Typography
        fontFamily= 'Heebo, sans-serif'
        fontSize= '15px'>
        </Typography>} secondary={`${formData.KosherType_GRADE}/3`} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        <ListItemButton>
        <ListItemIcon>
          <Diversity1Icon  />
        </ListItemIcon>
        <ListItemText primary={
        <Typography 
        fontFamily= 'Heebo, sans-serif'
        fontSize= '20px'>סגנון הסיור</Typography>} secondary={formData.TourStyle} sx={{ textAlign: 'right' }} />

        <ListItemText primary={
        <Typography 
        fontFamily= 'Heebo, sans-serif'
        fontSize= '15px'>
        </Typography>} secondary={`${formData.TourStyle_GRADE}/3`} sx={{ textAlign: 'right' }} />
        </ListItemButton>



        {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography fontWeight="bold">סגנון היקב:</Typography>} secondary={formData.WineryStyle} sx={{ textAlign: 'right' }} />
        </ListItemButton> */}

        <ListItemButton>
        <ListItemIcon>
        <ParkIcon  />
        </ListItemIcon >
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">סגנונות היקב</Typography>} secondary={formData.selectedWineryStyleOptions.join(', ')} sx={{ textAlign: 'right' }} />
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '15px'
                fontWeight="bold">
                </Typography>} secondary={`${formData.WineryStyle_GRADE}/3`} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography fontWeight="bold">אטרקציות מבוקשות?</Typography>} secondary={formData.TourAttractions ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton> */}

        <ListItemButton>
        <ListItemIcon>
          <AttractionsIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">אטרקציות מבוקשות</Typography>} secondary={formData.selectedAttractionsOptions.join(', ')} sx={{ textAlign: 'right' }} />
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '15px'
                fontWeight="bold">
                </Typography>} secondary={`${formData.TourAttractions_GRADE}/3`} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        {/* <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary={<Typography fontWeight="bold">מסעדה מבוקשת?</Typography>} secondary={formData.TourRestaurant ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton> */}

        <ListItemButton>
        <ListItemIcon>
          <RestaurantIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">מסעדות</Typography>} secondary={formData.selectedRestaurantOptions.join(', ')} sx={{ textAlign: 'right' }} />
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '15px'
                fontWeight="bold">
                </Typography>} secondary={`${formData.TourRestaurant_GRADE}/3`} sx={{ textAlign: 'right' }} />
        </ListItemButton>


        {/* <ListItemButton>
        <ListItemIcon>
          <LiquorIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography fontWeight="bold">סוגי יינות מבוקשים?</Typography>} secondary={formData.WinesTypes ? 'כן' : 'לא'} sx={{ textAlign: 'right' }} />
        </ListItemButton> */}

        <ListItemButton>
        <ListItemIcon>
        <LiquorIcon  />
        </ListItemIcon>
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '20px'
                fontWeight="bold">סוגי יינות</Typography>} secondary={formData.selectedWinesTypesOptions.join(', ')} sx={{ textAlign: 'right' }} />
        <ListItemText primary={<Typography 
                fontFamily= 'Heebo, sans-serif'
                fontSize= '15px'
                fontWeight="bold">

                </Typography>} secondary={`${formData.WinesTypes_GRADE}/3`} sx={{ textAlign: 'right' }} />
        </ListItemButton>

        

        </div>

        <Typography 
      // variant="h6"
        style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}} 
      >
        ----------
        
        </Typography>

    </List>
    </Container>
    
  );
};



export default Page3;
