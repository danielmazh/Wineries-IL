// import React from 'react';
// import Select from 'react-select';

// const Page2 = ({
//   formData,
//   handleInputChange,
//   validation,
//   setFormData,
//   totalPages

// }) => {
//     // *************************   בחירות משתמש   **************************
// // **********************************************************************


//   const selectedWineryStyleOptions = [
//     { value: 'עירוני', label: ' עירוני' },
//     { value: 'ביתי', label: ' ביתי' },
//     { value: 'טבעי', label: ' טבעי' },
//     { value: 'כפרי', label: ' כפרי' },
//     { value: 'היסטורי', label: ' היסטורי' },
//     { value: 'מסחרי', label: ' מסחרי' },
//   ];
//   const handleselectedWineryStyleOptions = (selectedOptions) => {
//     const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
//     setFormData({
//       ...formData,
//       selectedWineryStyleOptions: selectedValues,
//     });
//   };

//   const selectedAttractionsOptions = [
//     { value: 'טעימות יין', label: 'טעימות יין' },        
//     { value: 'סיור כרמים', label: 'סיור כרמים' },        
//     { value: 'סדנת הכנת יין', label: 'סדנת הכנת יין' },        
//     { value: 'סיור ממונע באמצעות טרקטורונים', label: 'סיור ממונע באמצעות טרקטורונים' },        
//     { value: 'אירועים פרטיים', label: 'אירועים פרטיים' },        
//     { value: 'ליקוט צמחי בר אכילים', label: 'ליקוט צמחי בר אכילים' },
//   ];
//   const handleselectedAttractionsOptions = (selectedOptions) => {
//     const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
//     setFormData({
//       ...formData,
//       selectedAttractionsOptions: selectedValues,
//     });
//   };

//   const selectedRestaurantOptions = [
//     { value: 'חלבי', label: 'מסעדה חלבית' },        
//     { value: 'בשרי', label: 'מסעדה בשרית' },        
//     { value: 'דגים', label: 'מסעדת דגים' },        
//     { value: 'טבעוני', label: 'מסעדה טבעונית' },  
//   ];
// const handleselectedRestaurantOptions = (selectedOptions) => {
//   const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
//   setFormData({
//     ...formData,
//     selectedRestaurantOptions: selectedValues,
//   });
//   };

// const selectedWinesTypesOptions = [
//   { value: 'יין אדום כבד', label: 'יין אדום כבד' },        
//   { value: 'יין אדום בינוני', label: 'יין אדום בינוני' },        
//   { value: 'יין אדום קליל', label: 'יין אדום קליל' },  
//   { value: 'יין רוזה', label: 'יין רוזה' },        
//   { value: 'יין לבן עשיר', label: 'יין לבן עשיר' },        
//   { value: 'יין לבן מרענן', label: 'יין לבן מרענן' },  
//   { value: 'יין לבן חצי יבש', label: 'יין לבן חצי יבש' },        
//   { value: 'יין קינוח', label: 'יין קינוח' },        
//   { value: 'יין מבעבע', label: 'יין מבעבע ' },  
//   ];
// const handleselectedWinesTypesOptions = (selectedOptions) => {
//   const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
//   setFormData({
//     ...formData,
//     selectedWinesTypesOptions: selectedValues,
//   });
//   };
//   return (
//     <div >
//       <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------</h1>
//       <h4 style={{textAlign: 'center'}}>עמוד 2 מתוך {totalPages}</h4>


//       <label>
//         כשרות היקב<input
//           type="checkbox"
//           name="KosherType"
//           checked={formData.KosherType}
//           onChange={handleInputChange}
//         />
//       </label>
//       {formData.KosherType && (
//           <div>
//             <label>
//               עד כמה הכשרות חשובה לכם??
//               <input
//               type="range"
//               name="KosherType_GRADE"
//               min="1"
//               max="3"
//               value={formData.KosherType_GRADE}
//               onChange={handleInputChange}
//               />
//             </label>
//             <span>
//               {formData.KosherType_GRADE === '1' ? 'לא קריטי'
//                 : formData.KosherType_GRADE === '2' ? 'חשובה'
//                 : formData.KosherType_GRADE === '3' ? 'חשובה מאוד'
//                 : 'יש לבחור ערך'}
//             </span>
//             {validation.KosherType_GRADE && <div className="error">{validation.KosherType_GRADE}</div>}

//           </div>
//       )}      

//         <br />
//         <br />

//       <label>
//         :סגנון הסיור הרצוי
//         <br /><select 
//           name="TourStyle"
//           value={formData.TourStyle}
//           onChange={handleInputChange}
//         >
//           <option value="">יש לבחור מהרשימה</option>
//           <option value="זוגי">זוגי</option>
//           <option value="משפחתי">משפחתי</option>
//           <option value="חברתי">חברתי</option>
//         </select>
//       </label>
//       {formData.TourStyle && (
//           <div>
//             <label>
//               עד כמה סגנון האירוח חשוב לכם??
//               <input
//               type="range"
//               name="TourStyle_GRADE"
//               min="1"
//               max="3"
//               value={formData.TourStyle_GRADE}
//               onChange={handleInputChange}
//               />
//             </label>
//             <span>
//               {formData.TourStyle_GRADE === '1' ? 'לא קריטי'
//                 : formData.TourStyle_GRADE === '2' ? 'חשוב'
//                 : formData.TourStyle_GRADE === '3' ? 'חשוב מאוד'
//                 : 'יש לבחור ערך'}
//             </span>
//             {validation.TourStyle_GRADE && <div className="error">{validation.TourStyle_GRADE}</div>}

//           </div>
//       )}      

//       <br />
//       <br />


//       <label>
//         סגנון היקב
//           <input 
//             className="form-checkbox-input"
//             type="checkbox"
//             name="WineryStyle"
//             checked={formData.WineryStyle}
//             onChange={handleInputChange}
//           />
//       </label>
//       {formData.WineryStyle && (
//         <div>
//           <label>איזה סגנונות מתאימים לכם??</label>
//           <Select
//             isMulti
//             options={selectedWineryStyleOptions}
//             onChange={handleselectedWineryStyleOptions}
//             value={formData.selectedWineryStyleOptions.map(value => selectedWineryStyleOptions.find(option => option.value === value))}
            
//           />
//         </div>
//       )}
//       {formData.selectedWineryStyleOptions.length > 0 && (
//         <div>
//           <label>
//           עד כמה הסגנון חשוב לכם??
//             <input
//             type="range"
//             name="WineryStyle_GRADE"
//             min="1"
//             max="3"
//             value={formData.WineryStyle_GRADE}
//             onChange={handleInputChange}
//             />
//           </label>
//           <span>
//             {formData.WineryStyle_GRADE === '1' ? 'לא קריטי'
//               : formData.WineryStyle_GRADE === '2' ? 'חשוב'
//               : formData.WineryStyle_GRADE === '3' ? 'חשוב מאוד'
//               : 'יש לבחור ערך'}
//           </span>
//           {validation.WineryStyle_GRADE && <div className="error">{validation.WineryStyle_GRADE}</div>}
//         </div>
//     )}
     
//       <br />
//       <br />

//       <label>
//         אטרקציות ובילויים
//         <input 
//           className="form-checkbox-input"
//           type="checkbox"
//           name="TourAttractions"
//           checked={formData.TourAttractions}
//           onChange={handleInputChange}
//         />
//       </label>
//       {formData.TourAttractions && (
//         <div>
//           <label>:יש לבחור לפחות אחת מהאפשרויות</label>
//           <Select
//             isMulti
//             options={selectedAttractionsOptions}
//             onChange={handleselectedAttractionsOptions}
//             value={formData.selectedAttractionsOptions.map(value => selectedAttractionsOptions.find(option => option.value === value))}
            
//           />
//         </div>
//       )}
//       {formData.selectedAttractionsOptions.length > 0 && (
//         <div>
//           <label>
//             עד כמה האטרקציות חשובות לכם??
//             <input
//             type="range"
//             name="TourAttractions_GRADE"
//             min="1"
//             max="3"
//             value={formData.TourAttractions_GRADE}
//             onChange={handleInputChange}
//             />
//           </label>
//           <span>
//             {formData.TourAttractions_GRADE === '1' ? 'לא קריטי'
//               : formData.TourAttractions_GRADE === '2' ? 'חשוב'
//               : formData.TourAttractions_GRADE === '3' ? 'חשוב מאוד'
//               : 'יש לבחור ערך'}
//           </span>
//           {validation.TourAttractions_GRADE && <div className="error">{validation.TourAttractions_GRADE}</div>}
//         </div>
//     )}

//       <br />
//       <br />

//       <label>
//         מסעדה במקום
//         <input 
//           className="form-checkbox-input"
//           type="checkbox"
//           name="TourRestaurant"
//           checked={formData.TourRestaurant}
//           onChange={handleInputChange}
//         />
//       </label>
//       {formData.TourRestaurant && (
//         <div>
//         <label>:יש לבחור לפחות אחת מהאפשרויות</label>
//         <Select
//             isMulti
//             options={selectedRestaurantOptions}
//             onChange={handleselectedRestaurantOptions}
//             value={formData.selectedRestaurantOptions.map(value => selectedRestaurantOptions.find(option => option.value === value))}
//           />
//         </div>
//       )}
//       {formData.selectedRestaurantOptions.length > 0 && (
//         <div>
//           <label>
//             עד כמה מסעדה חשובה לכם??
//             <input
//             type="range"
//             name="TourRestaurant_GRADE"
//             min="1"
//             max="3"
//             value={formData.TourRestaurant_GRADE}
//             onChange={handleInputChange}
//             />
//           </label>
//           <span>
//             {formData.TourRestaurant_GRADE === '1' ? 'לא קריטי'
//               : formData.TourRestaurant_GRADE === '2' ? 'חשוב'
//               : formData.TourRestaurant_GRADE === '3' ? 'חשוב מאוד'
//               : 'יש לבחור ערך'}
//           </span>
//           {validation.TourRestaurant_GRADE && <div className="error">{validation.TourRestaurant_GRADE}</div>}
//         </div>
//     )} 

//     <br />
//     <br />


//     <label>
//         סוגיי יינות לבחירה
//         <input 
//           className="form-checkbox-input"
//           type="checkbox"
//           name="WinesTypes"
//           checked={formData.WinesTypes}
//           onChange={handleInputChange}
//         />
//       </label>
//       {formData.WinesTypes && (
//         <div>
//           <label>:יש לבחור לפחות אחת מהאפשרויות</label>
//           <Select
//             isMulti
//             options={selectedWinesTypesOptions}
//             onChange={handleselectedWinesTypesOptions}
//             value={formData.selectedWinesTypesOptions.map(value => selectedWinesTypesOptions.find(option => option.value === value))}
            
//           />
//         </div>
//       )}
//       {formData.selectedWinesTypesOptions.length > 0 && (
//         <div>
//           <label>
//             עד כמה סוגיי היינות חשובים לכם??
//             <input
//             type="range"
//             name="WinesTypes_GRADE"
//             min="1"
//             max="3"
//             value={formData.WinesTypes_GRADE}
//             onChange={handleInputChange}
//             />
//           </label>
//           <span>
//             {formData.WinesTypes_GRADE === '1' ? 'לא קריטי'
//               : formData.WinesTypes_GRADE === '2' ? 'חשוב'
//               : formData.WinesTypes_GRADE === '3' ? 'חשוב מאוד'
//               : 'יש לבחור ערך'}
//           </span>
//           {validation.WinesTypes_GRADE && <div className="error">{validation.WinesTypes_GRADE}</div>}
//         </div>
//     )}

//       <br />
//       <br />

//     </div>
//   );
// };

// export default Page2;




























import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import heLocale from 'date-fns/locale/he';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';



import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';

import LightModeIcon from '@mui/icons-material/LightMode'; 
import WbTwilightIcon from '@mui/icons-material/WbTwilight'; 
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AccessibleIcon from '@mui/icons-material/Accessible';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import AttractionsIcon from '@mui/icons-material/Attractions';
import ParkIcon from '@mui/icons-material/Park';
import LiquorIcon from '@mui/icons-material/Liquor';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';



 



import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import hebrewLocale from 'date-fns/locale/he';


import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



const Page2 = ({
  formData,
  handleOtherInputChange,
  validation,
  setFormData,
  totalPages

}) => {

  const selectedWineryStyleOptions = [
    { value: 'עירוני', label: ' עירוני' },
    { value: 'ביתי', label: ' ביתי' },
    { value: 'טבעי', label: ' טבעי' },
    { value: 'כפרי', label: ' כפרי' },
    { value: 'היסטורי', label: ' היסטורי' },
    { value: 'מסחרי', label: ' מסחרי' },
  ];
  const handleselectedWineryStyleOptions = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData({
      ...formData,
      selectedWineryStyleOptions: selectedValues,
    });
  };

  const selectedAttractionsOptions = [
    { value: 'טעימות יין', label: 'טעימות יין' },        
    { value: 'סיור כרמים', label: 'סיור כרמים' },        
    { value: 'סדנת הכנת יין', label: 'סדנת הכנת יין' },        
    { value: 'סיור ממונע באמצעות טרקטורונים', label: 'סיור ממונע באמצעות טרקטורונים' },        
    { value: 'אירועים פרטיים', label: 'אירועים פרטיים' },        
    { value: 'ליקוט צמחי בר אכילים', label: 'ליקוט צמחי בר אכילים' },
  ];
  const handleselectedAttractionsOptions = (selectedOptions) => {
    const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setFormData({
      ...formData,
      selectedAttractionsOptions: selectedValues,
    });
  };

  const selectedRestaurantOptions = [
    { value: 'חלבי', label: 'מסעדה חלבית' },        
    { value: 'בשרי', label: 'מסעדה בשרית' },        
    { value: 'דגים', label: 'מסעדת דגים' },        
    { value: 'טבעוני', label: 'מסעדה טבעונית' },  
  ];
const handleselectedRestaurantOptions = (selectedOptions) => {
  const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
  setFormData({
    ...formData,
    selectedRestaurantOptions: selectedValues,
  });
  };

const selectedWinesTypesOptions = [
  { value: 'יין אדום כבד', label: 'יין אדום כבד' },        
  { value: 'יין אדום בינוני', label: 'יין אדום בינוני' },        
  { value: 'יין אדום קליל', label: 'יין אדום קליל' },  
  { value: 'יין רוזה', label: 'יין רוזה' },        
  { value: 'יין לבן עשיר', label: 'יין לבן עשיר' },        
  { value: 'יין לבן מרענן', label: 'יין לבן מרענן' },  
  { value: 'יין לבן חצי יבש', label: 'יין לבן חצי יבש' },        
  { value: 'יין קינוח', label: 'יין קינוח' },        
  { value: 'יין מבעבע', label: 'יין מבעבע ' },  
  ];
const handleselectedWinesTypesOptions = (selectedOptions) => {
  const selectedValues = selectedOptions ? selectedOptions.map(option => option.value) : [];
  setFormData({
    ...formData,
    selectedWinesTypesOptions: selectedValues,
  });
  };



  return (
    <div >
      <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------</h1>
      <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>

      <h4 style={{textAlign: 'center'}}>עמוד 2 מתוך {totalPages}</h4>

{/* כשרות *************************************************************************************************** */}
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>


      <div style={{ backgroundColor: 'lightgray', borderRadius: '25%', position: 'absolute', right: 35, top: '50%', transform: 'translate(50%, -50%)', padding: '10px' }}>
        <ReceiptLongIcon />
      </div>


      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box style={{ display: "flex", alignItems: "center", margin: "0 50px" }}>

          <label style={{ display: "flex", alignItems: "center", fontSize: "20px" }}>
            מעוניינים שהיקב יהיה כשר??
            <Checkbox 
              name="KosherType"
              checked={formData.KosherType}
              onChange={handleOtherInputChange}
              style={{ fontSize: "45px" }}
            />
          </label>

        </Box>
      </div>
      {formData.KosherType && (
        <div>
          <Box
            sx={{'& > legend': { mt: 2 },}}
          >
            <Typography component="legend" style={{alignItems: "center", fontSize: "20px", textAlign: "center", width: "100%",}}>
              עד כמה הכשרות חשובה לכם??
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Rating
                name="KosherType_GRADE"
                value={formData.KosherType_GRADE}
                max={3}
                sx={{fontSize: '45px',justifyContent: 'center',mt: 2,transform: 'scaleX(-1)',}}
                onChange={(event, newValue) => {
                  handleOtherInputChange({
                    target: { name: 'KosherType_GRADE', value: newValue },
                  });
                }}
              />
              <span>
                {formData.KosherType_GRADE === 1
                  ? 'לא חייב, עדיף'
                  : formData.KosherType_GRADE === 2
                  ? 'חשובה'
                  : formData.KosherType_GRADE === 3
                  ? 'חשובה מאוד'
                  : 'יש לבחור ערך'}
              </span>
            </div>
          </Box>
          {validation.KosherType_GRADE && (
            <div className="error" style={{ textAlign: 'center' }}>
              {validation.KosherType_GRADE}
            </div>
          )}
        </div>
      )}
  </div>



        <br />
        <br />



{/* סגנון הסיור *************************************************************************************************** */}
  <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
    <div>
    <Box
      style={{ backgroundColor: 'lightgray', borderRadius: '25%', position: 'absolute', right: 35, top: '65%', transform: 'translate(50%, -50%)', padding: '10px' }}>
      <Diversity1Icon />
    </Box>
    </div>

    <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
      <InputLabel style={{fontSize: "25px",}} htmlFor="TourStyle">סגנון הסיור </InputLabel>
    </Box>

    <Box display="flex" justifyContent="center" alignItems="center">
      
    <FormControl fullWidth>
      <InputLabel htmlFor="TourStyle">סגנון הסיור הרצוי</InputLabel>

      <Select 
        // fullWidth
        id="TourStyle"
        name="TourStyle"
        value={formData.TourStyle}
        onChange={handleOtherInputChange}
        placeholder="יש לבחור מהרשימה"
        variant="outlined"
        label="סגנון הסיור הרצוי"

        style={{ width: '85%', right: 60,  }}
      >
        <MenuItem value=''>יש לבחור מהרשימה</MenuItem>
        <MenuItem value="זוגי">זוגי</MenuItem>
        <MenuItem value="משפחתי">משפחתי</MenuItem>
        <MenuItem value="חברתי">חברתי</MenuItem>
      </Select>

      </FormControl>
    </Box>

        {formData.TourStyle && (
          <div>
            <Box
              sx={{'& > legend': { mt: 2 },}}
            >
            <Typography component="legend" style={{alignItems: "center", fontSize: "20px", textAlign: "center", width: "100%",}}>
            עד כמה סגנון הסיור חשוב לכם??
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Rating
                name="TourStyle_GRADE"
                value={formData.TourStyle_GRADE}
                max={3}
                sx={{fontSize: '45px',justifyContent: 'center',mt: 2,transform: 'scaleX(-1)',}}
                onChange={(event, newValue) => {
                  handleOtherInputChange({
                    target: { name: 'TourStyle_GRADE', value: newValue },
                  });
                }}
              />
                <span>
                  {formData.TourStyle_GRADE === 1
                    ? 'לא חייב, עדיף'
                    : formData.TourStyle_GRADE === 2
                    ? 'חשוב'
                    : formData.TourStyle_GRADE === 3
                    ? 'חשוב מאוד'
                    : 'יש לבחור ערך'}
                </span>
              </div>
            </Box>
            {validation.TourStyle_GRADE && (
              <div className="error" style={{ textAlign: 'center' }}>
                {validation.TourStyle_GRADE}
              </div>
            )}
          </div>
        )}
    </div>



    <br />
    <br />



{/* סגנון יקב *************************************************************************************************** */}
      <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
      <div>
      <Box
        style={{ backgroundColor: 'lightgray', borderRadius: '25%', position: 'absolute', right: 35, top: '65%', transform: 'translate(50%, -50%)', padding: '10px' }}>
        <ParkIcon />
      </Box>
      </div>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} htmlFor="TourStyle">סגנון היקב </InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        
      <FormControl fullWidth>
        {/* <InputLabel htmlFor="WineryStyle">סגנון היקב הרצוי</InputLabel> */}

      <Autocomplete
        multiple
        id="winery-style-options"
        options={selectedWineryStyleOptions.filter(option => !formData.selectedWineryStyleOptions.includes(option.value))}
        getOptionLabel={(option) => option.label}
        defaultValue={formData.selectedWineryStyleOptions.map(value => selectedWineryStyleOptions.find(option => option.value === value))}
        filterSelectedOptions
        disableCloseOnSelect
        onChange={(event, selectedOptions) => {
          handleselectedWineryStyleOptions(selectedOptions);
          
        // If all selections are cleared, set WineryStyle_GRADE to 0
          if (selectedOptions.length === 0) {
            handleOtherInputChange({
              target: { name: 'WineryStyle_GRADE', value: 0 },
            });
          }
        }}

        renderInput={(params) => (
          <TextField
        {...params}
        variant="outlined"
        label="סגנון היקב"
        placeholder="יש לבחור מהרשימה"
        style={{ width: '85%', right: 60,  }}
      />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
              style={{ marginTop: '4px', marginBottom: '4px', marginRight: '0px', marginLeft: '0px', }}
            />
          ))
        }
      />

        </FormControl>
      </Box>
         
        {formData.selectedWineryStyleOptions.length > 0 && (
          <div>
            <Box
              sx={{'& > legend': { mt: 2 },}}
            >
            <Typography component="legend" style={{alignItems: "center", fontSize: "20px", textAlign: "center", width: "100%",}}>
            עד כמה סגנון היקב חשוב לכם??
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Rating
                name="WineryStyle_GRADE"
                value={formData.WineryStyle_GRADE}
                max={3}
                sx={{fontSize: '45px',justifyContent: 'center',mt: 2,transform: 'scaleX(-1)',}}
                onChange={(event, newValue) => {
                  handleOtherInputChange({
                    target: { name: 'WineryStyle_GRADE', value: newValue },
                  });
                }}
              />
                <span>
                  {formData.WineryStyle_GRADE === 1
                    ? 'לא חייב, עדיף'
                    : formData.WineryStyle_GRADE === 2
                    ? 'חשוב'
                    : formData.WineryStyle_GRADE === 3
                    ? 'חשוב מאוד'
                    : 'יש לבחור ערך'}
                </span>
              </div>
            </Box>

            {validation.WineryStyle_GRADE && (
              <div className="error" style={{ textAlign: 'center' }}>
                {validation.WineryStyle_GRADE}
              </div>
            )}
          </div>
        )}
    </div>



    <br />
    <br />



{/* אטרקציות *************************************************************************************************** */}
<div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
      <div>
      <Box
        style={{ backgroundColor: 'lightgray', borderRadius: '25%', position: 'absolute', right: 35, top: '65%', transform: 'translate(50%, -50%)', padding: '10px' }}>
        <AttractionsIcon />
      </Box>
      </div>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} htmlFor="TourStyle">אטרקציות ביקב </InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        
      <FormControl fullWidth>

      <Autocomplete
        multiple
        id="tour-attractions-options"
        options={selectedAttractionsOptions.filter(option => !formData.selectedAttractionsOptions.includes(option.value))}
        getOptionLabel={(option) => option.label}
        defaultValue={formData.selectedAttractionsOptions.map(value => selectedAttractionsOptions.find(option => option.value === value))}
        filterSelectedOptions
        disableCloseOnSelect
        onChange={(event, selectedOptions) => {
          handleselectedAttractionsOptions(selectedOptions);
          
        // If all selections are cleared, set TourAttractions_GRADE to 0
          if (selectedOptions.length === 0) {
            handleOtherInputChange({
              target: { name: 'TourAttractions_GRADE', value: 0 },
            });
          }
        }}

        renderInput={(params) => (
          <TextField
        {...params}
        variant="outlined"
        label="אטרקציות ביקב"
        placeholder="יש לבחור מהרשימה"
        style={{ width: '85%', right: 60,  }}
      />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
              style={{ marginTop: '4px', marginBottom: '4px', marginRight: '0px', marginLeft: '0px', }}
            />
          ))
        }
      />

        </FormControl>
      </Box>
         
        {formData.selectedAttractionsOptions.length > 0 && (
          <div>
            <Box
              sx={{'& > legend': { mt: 2 },}}
            >
            <Typography component="legend" style={{alignItems: "center", fontSize: "20px", textAlign: "center", width: "100%",}}>
            עד כמה אטרקציות היקב חשובות לכם??
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Rating
                name="TourAttractions_GRADE"
                value={formData.TourAttractions_GRADE}
                max={3}
                sx={{fontSize: '45px',justifyContent: 'center',mt: 2,transform: 'scaleX(-1)',}}
                onChange={(event, newValue) => {
                  handleOtherInputChange({
                    target: { name: 'TourAttractions_GRADE', value: newValue },
                  });
                }}
              />
                <span>
                  {formData.TourAttractions_GRADE === 1
                    ? 'לא חייב, עדיף'
                    : formData.TourAttractions_GRADE === 2
                    ? 'חשוב'
                    : formData.TourAttractions_GRADE === 3
                    ? 'חשוב מאוד'
                    : 'יש לבחור ערך'}
                </span>
              </div>
            </Box>

            {validation.TourAttractions_GRADE && (
              <div className="error" style={{ textAlign: 'center' }}>
                {validation.TourAttractions_GRADE}
              </div>
            )}
          </div>
        )}
    </div>



    <br />
    <br />




{/* מסעדות *************************************************************************************************** */}


<div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
      <div>
      <Box
        style={{ backgroundColor: 'lightgray', borderRadius: '25%', position: 'absolute', right: 35, top: '65%', transform: 'translate(50%, -50%)', padding: '10px' }}>
        <RestaurantIcon />
      </Box>
      </div>

      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} htmlFor="TourStyle">מסעדה ביקב </InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        
      <FormControl fullWidth>
      
      <Autocomplete
        multiple
        id="tour-restaurant-options"
        options={selectedRestaurantOptions.filter(option => !formData.selectedRestaurantOptions.includes(option.value))}
        getOptionLabel={(option) => option.label}
        defaultValue={formData.selectedRestaurantOptions.map(value => selectedRestaurantOptions.find(option => option.value === value))}
        filterSelectedOptions
        disableCloseOnSelect
        onChange={(event, selectedOptions) => {
          handleselectedRestaurantOptions(selectedOptions);
          
        // If all selections are cleared, set TourRestaurant_GRADE to 0
          if (selectedOptions.length === 0) {
            handleOtherInputChange({
              target: { name: 'TourRestaurant_GRADE', value: 0 },
            });
          }
        }}

        renderInput={(params) => (
          <TextField
        {...params}
        variant="outlined"
        label="מסעדות ביקב"
        placeholder="יש לבחור מהרשימה"
        style={{ width: '85%', right: 60,  }}
      />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
              style={{ marginTop: '4px', marginBottom: '4px', marginRight: '0px', marginLeft: '0px', }}
            />
          ))
        }
      />

        </FormControl>
      </Box>
         
        {formData.selectedRestaurantOptions.length > 0 && (
          <div>
            <Box
              sx={{'& > legend': { mt: 2 },}}
            >
            <Typography component="legend" style={{alignItems: "center", fontSize: "20px", textAlign: "center", width: "100%",}}>
            עד כמה המסעדה ביקב חשובה לכם??
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Rating
                name="TourRestaurant_GRADE"
                value={formData.TourRestaurant_GRADE}
                max={3}
                sx={{fontSize: '45px',justifyContent: 'center',mt: 2,transform: 'scaleX(-1)',}}
                onChange={(event, newValue) => {
                  handleOtherInputChange({
                    target: { name: 'TourRestaurant_GRADE', value: newValue },
                  });
                }}
              />
                <span>
                  {formData.TourRestaurant_GRADE === 1
                    ? 'לא חייב, עדיף'
                    : formData.TourRestaurant_GRADE === 2
                    ? 'חשוב'
                    : formData.TourRestaurant_GRADE === 3
                    ? 'חשוב מאוד'
                    : 'יש לבחור ערך'}
                </span>
              </div>
            </Box>

            {validation.TourRestaurant_GRADE && (
              <div className="error" style={{ textAlign: 'center' }}>
                {validation.TourRestaurant_GRADE}
              </div>
            )}
          </div>
        )}
    </div>

    <br />
    <br />


{/* יינות *************************************************************************************************** */}
<div style={{ border: "1px solid gray", padding: "10px", borderRadius: "5px", position: 'relative' }}>
      <div>
      <Box
        style={{ backgroundColor: 'lightgray', borderRadius: '25%', position: 'absolute', right: 35, top: '65%', transform: 'translate(50%, -50%)', padding: '10px' }}>
        <LiquorIcon />
      </Box>
      </div>
      <Box textAlign="center" display="flex" justifyContent="center" alignItems="center">
        <InputLabel style={{fontSize: "25px",}} htmlFor="TourStyle">סוגי יינות  </InputLabel>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        
      <FormControl fullWidth>
      
      <Autocomplete
        multiple
        id="tour-restaurant-options"
        options={selectedWinesTypesOptions.filter(option => !formData.selectedWinesTypesOptions.includes(option.value))}
        getOptionLabel={(option) => option.label}
        defaultValue={formData.selectedWinesTypesOptions.map(value => selectedWinesTypesOptions.find(option => option.value === value))}
        filterSelectedOptions
        disableCloseOnSelect
        onChange={(event, selectedOptions) => {
          handleselectedWinesTypesOptions(selectedOptions);
          
        // If all selections are cleared, set WinesTypes_GRADE to 0
          if (selectedOptions.length === 0) {
            handleOtherInputChange({
              target: { name: 'WinesTypes_GRADE', value: 0 },
            });
          }
        }}

        renderInput={(params) => (
          <TextField
        {...params}
        variant="outlined"
        label="סוגי יינות ביקב"
        placeholder="יש לבחור מהרשימה"
        style={{ width: '85%', right: 60,  }}
      />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              variant="outlined"
              label={option.label}
              {...getTagProps({ index })}
              style={{ marginTop: '4px', marginBottom: '4px', marginRight: '0px', marginLeft: '0px', }}
            />
          ))
        }
      />

        </FormControl>
      </Box>
         
        {formData.selectedWinesTypesOptions.length > 0 && (
          <div>
            <Box
              sx={{'& > legend': { mt: 2 },}}
            >
            <Typography component="legend" style={{alignItems: "center", fontSize: "20px", textAlign: "center", width: "100%",}}>
            עד כמה המסעדה ביקב חשובה לכם??
            </Typography>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Rating
                name="WinesTypes_GRADE"
                value={formData.WinesTypes_GRADE}
                max={3}
                sx={{fontSize: '45px',justifyContent: 'center',mt: 2,transform: 'scaleX(-1)',}}
                onChange={(event, newValue) => {
                  handleOtherInputChange({
                    target: { name: 'WinesTypes_GRADE', value: newValue },
                  });
                }}
              />
                <span>
                  {formData.WinesTypes_GRADE === 1
                    ? 'לא חייב, עדיף'
                    : formData.WinesTypes_GRADE === 2
                    ? 'חשוב'
                    : formData.WinesTypes_GRADE === 3
                    ? 'חשוב מאוד'
                    : 'יש לבחור ערך'}
                </span>
              </div>
            </Box>

            {validation.WinesTypes_GRADE && (
              <div className="error" style={{ textAlign: 'center' }}>
                {validation.WinesTypes_GRADE}
              </div>
            )}
          </div>
        )}
    </div>


  
  
  
  </div>

  
  <br />


  </div>
  

  );
};

export default Page2;