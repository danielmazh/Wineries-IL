// import React, { useState, useEffect } from 'react';
// import DatePicker from 'react-datepicker';
// import Select, { components } from 'react-select';
// import { Navigate, useNavigate } from 'react-router-dom';
// import '../../styles//QuestionnaireForm.css';
// import './inner-component/react-datepicker'


// function MultiPageForm() {
//   const [formData, setFormData] = useState({

//     // Variables Page 1 **************************************************
//     TourArea: 'ירושלים',
//     selectedDate: null,
//     TourCount: '',
//     TourTimeMorning: false,
//     TourTimeAfternoon: false,
//     TourTimeEvening: false,
//     TourPeopleCount: '',
//     Accesibility: false,
//     BudgetRange: 50,

//     // Variables Page 2 **************************************************
//     KosherType: false,
//     KosherType_GRADE: 0,

//     TourStyle: false,
//     TourStyle_GRADE: 0,

//     WineryStyle: false,
//     selectedWineryStyleOptions: [],
//     WineryStyle_GRADE: 0,

//     TourAttractions: false,
//     selectedAttractionsOptions: [],
//     TourAttractions_GRADE: 0,

//     TourRestaurant: false,
//     selectedRestaurantOptions: [],
//     TourRestaurant_GRADE: 0,

//     WinesTypes: false,
//     selectedWinesTypesOptions: [],
//     WinesTypes_GRADE: 0,

//   });

//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(3);

//   const storedData = JSON.parse(localStorage.getItem('formData'));
//   const email = localStorage.getItem('email');
//   const username = localStorage.getItem('username');
//   const first_name = localStorage.getItem('first_name');
//   const last_name = localStorage.getItem('last_name');
  

//   const selectedDay = formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) : '';
//   const selectedDayText = `היום שנבחר הוא ${selectedDay}`;

//   const [showOptions, setShowOptions] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const { Option } = components;

//   const navigate = useNavigate();

//   const [validation, setValidation] = useState({});

//   const validateForm = () => {
//     const errors = {};
    

//       if (!formData.TourArea) {
//         errors.TourArea = 'בחרו איזור';
//       }
//       if (!formData.selectedDate) {
//         errors.selectedDate = 'בחרו תאריך';
//       }
//       if (!formData.TourCount) {
//         errors.TourCount = 'בחרו מס יקבים ';
//       }
//       if (!formData.TourTimeMorning && !formData.TourTimeAfternoon && !formData.TourTimeEvening) {
//         errors.TourTime = 'בחרו לפחות שעת סיור אחת';
//       }
//       if (!formData.TourPeopleCount) {
//         errors.TourPeopleCount = 'בחרו מס אנשים ';
//       }
//       if (!formData.BudgetRange) {
//         errors.BudgetRange = 'בחרו תקציב ';
//       } 
//       // GRADES ******************************************************

//       if (formData.KosherType && !formData.KosherType_GRADE) {
//         errors.KosherType_GRADE = 'בחרו ציון לכשרות ';
//       }
//       if (formData.TourStyle && !formData.TourStyle_GRADE) {
//         errors.TourStyle_GRADE = 'בחרו ציון לסגנון הסיור ';
//       }
//       if (formData.WineryStyle && !formData.WineryStyle_GRADE) {
//         errors.WineryStyle_GRADE = 'בחרו ציון לסגנון המקום ';
//       }
//       if (formData.TourAttractions && !formData.TourAttractions_GRADE) {
//         errors.TourAttractions_GRADE = 'בחרו ציון לאטרקציות ';
//       }
//       if (formData.TourRestaurant && !formData.TourRestaurant_GRADE) {
//         errors.TourRestaurant_GRADE = 'בחרו ציון למסעדה ';
//       }
//       if (formData.WinesTypes && !formData.WinesTypes_GRADE) {
//         errors.WinesTypes_GRADE = 'בחרו ציון לסוגי יין ';
//       }        

//       setValidation(errors);

//       return errors;
//     };



//     const handleInputChange = (event, date) => {
//       if (date) {
//         setFormData({ ...formData, selectedDate: date });
    
//         // Update validation state
//         setValidation((prevValidation) => {
//           const updatedValidation = { ...prevValidation };
    
//           // Remove error message if a date is picked
//           if (date) {
//             delete updatedValidation.selectedDate;
//           }
    
//           return updatedValidation;
//         });
//         return;
//       }
    
//       const { name, value, type, checked } = event.target;
//       const newValue = type === 'checkbox' ? checked : value;
    
//       setFormData({
//         ...formData,
//         [name]: newValue,
//       });
    
//       // Update validation state
//       setValidation((prevValidation) => {
//         const updatedValidation = { ...prevValidation };
    
//         // Remove error message if the input value is correct
//         if ((type === 'checkbox' && checked) || (type !== 'checkbox' && newValue)) {
//           delete updatedValidation[name];
//         }
    
//         // Special case for TourTime checkboxes
//         if (
//           name === 'TourTimeMorning' ||
//           name === 'TourTimeAfternoon' ||
//           name === 'TourTimeEvening'
//         ) {
//           const hasCheckedTourTime =
//             formData.TourTimeMorning ||
//             formData.TourTimeAfternoon ||
//             formData.TourTimeEvening ||
//             checked;
//           if (hasCheckedTourTime) {
//             delete updatedValidation.TourTime;
//           }
//         }
    
//         return updatedValidation;
//       });
    
//       // Existing code for handling specific fields
//       if (name === 'selectedDate') {
//         localStorage.setItem('formData', JSON.stringify({ ...formData, [name]: newValue }));
//         document.querySelector('.react-datepicker__close-icon').click();
//       }
//     };
    
  

//   useEffect(() => {
//     // Save form data to local storage whenever formData changes
//     localStorage.setItem('formData', JSON.stringify(formData));
//     }, [formData, showOptions, selectedOption]);
    


//   useEffect(() => {
//     // Load form data from local storage when component mounts
//     const storedData = localStorage.getItem('formData');
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//   }, []);
  
  

// async function handleFormSubmit  (event)  {
//   event.preventDefault();
//   console.log('currentPage', currentPage);
//   console.log(storedData)
//   console.log(formData)

//     // ******************************


//     const errors = validateForm();

//     if (Object.keys(errors).length > 0) {
//       const unfilledFields = Object.values(errors).join('\n')
//       alert(`${unfilledFields}`);

//       return;
//     }

//     // ******************************


//   try {
//     const response = await fetch("/api/userdata", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(storedData)
//     });
//     console.log('Response from server:', response);

//     if (response.ok) {
//       console.log('FormData received successfully');
      
//       navigate('/userdata');
//     } else {
//       console.error('Error receiving FormData');
//     }
//   } catch (error) {
//     console.error('Error submitting FormData:', error);
//     console.error('Response from server:', error.response);
//   }
// };

// // *************************   בחירות משתמש   **************************
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
  
  
  
//   // ********** Page0 **********
//   const renderPage0 = () => (
//     <div>
//       <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------</h1>
//       <h1 style={{textAlign: 'center'}}>ברוכים הבאים</h1> 
//       {/* <h2 style={{textAlign: 'center'}}>{username}</h2> */}
//       <h2 style={{textAlign: 'center'}}>{first_name} {last_name}</h2>
//       {/* <p>{JSON.stringify(localStorage)}</p> */}

//       <br />
//       <br />

//     </div>

//   );


// // ********** Page1 **********
//   const renderPage1 = () => (
//     <div>
//       <h1 style={{textAlign: 'center', color: 'rgba(0, 0, 0, 0)'}}>-------------------------------------</h1>
//       <h4 style={{textAlign: 'center'}}>עמוד 1 מתוך {totalPages}</h4>

//       <label>
//         :בחרו איזור לסיור היין שלכם
//         <br /><select 
//           name="TourArea"
//           value={formData.TourArea}
//           onChange={handleInputChange}          
//         >
//           {/* <option value="">יש לבחור מהרשימה</option> */}
//           <option value="ירושלים">ירושלים</option>
//           {/* <option value="הרי יהודה">הרי יהודה</option>
//           <option value="חבל לכיש">חבל לכיש</option>
//           <option value="בית שמש">בית שמש</option>
//           <option value="TEST">TEST</option> */}

          
//         </select>
//         {validation.TourArea && <div className="error">{validation.TourArea}</div>}
//       </label>

//       <br />
//       <br />

//       <label>
//         :בחרו תאריך לסיור היין שלכם
//         <br />

//         <DatePicker
//           selected={formData.selectedDate}
//           onChange={(date) => handleInputChange(null, date)}
//           placeholderText="יש לבחור תאריך"
//           dateFormat="dd/MM/yyyy"
//         />
//           {formData.selectedDate && (
//           <p>{`היום שנבחר הוא ${selectedDay}`}</p>
//           )}
//       </label>
//       {validation.selectedDate && <div className="error">{validation.selectedDate}</div>}

//       <br />
//       <br />

//       <label>
//         :בכמה יקבים תרצו לסייר בסיור היין שלכם
//         <br /><select 
//           name="TourCount"
//           value={formData.TourCount}
//           onChange={handleInputChange}
//         >
//           <option value="">יש לבחור מהרשימה</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//         </select>
//       </label>
//       {validation.TourCount && <div className="error">{validation.TourCount}</div>}

//       <br />
//       <br />

//       <label  class="form-data-list">:מהן שעות הסיור הרצויות עבורכם
//         <br />
//         <br />

//         <>בוקר<input
//           className="form-checkbox-input"
//           type="checkbox"
//           name="TourTimeMorning"
//           checked={formData.TourTimeMorning}
//           onChange={handleInputChange}
//         />
//         </>
        
//         <br /><br />

//         <>צהריים<input
//           className="form-checkbox-input"
//           type="checkbox"
//           name="TourTimeAfternoon"
//           checked={formData.TourTimeAfternoon}
//           onChange={handleInputChange}
//         />
//         </>

//         <br /><br />

//         <>ערב<input
//           className="form-checkbox-input"
//           type="checkbox"
//           name="TourTimeEvening"
//           checked={formData.TourTimeEvening}
//           onChange={handleInputChange}
//         />
//         </>
//       </label>
//       {validation.TourTime && <div className="error">{validation.TourTime}</div>}


//       <br /><br />

//       <label>
//         :מספר אנשים בסיור
//         <br /><select 
//           name="TourPeopleCount"
//           value={formData.TourPeopleCount}
//           onChange={handleInputChange}
//         >
//           <option value="">יש לבחור מהרשימה</option>
//           <option value="1-2">1-2</option>
//           <option value="3-5">3-5</option>
//           <option value="5+">5+</option>
//         </select>
//       </label>
//       {validation.TourPeopleCount && <div className="error">{validation.TourPeopleCount}</div>}


//       <br />
//       <br />

//       <label>   
//         <span>תקציב רצוי לאדם: {formData.BudgetRange}
//         </span><br />       
//         <input
//           type="range"
//           name="BudgetRange"
//           min="50"
//           max="300"
//           value={formData.BudgetRange}
//           onChange={handleInputChange}
//         />   
//       </label>
//       {validation.BudgetRange && <div className="error">{validation.BudgetRange}</div>}


//       <br />
//       <br />

//       <label>
//         האם יש צורך בנגישות??<input
//           type="checkbox"
//           name="Accessibility"
//           checked={formData.Accessibility}
//           onChange={handleInputChange}
//         />
//       </label>

      
//       <br />
//       <br />


//     </div>
//   );


//   // ********** Page2 **********
//   const renderPage2 = () => (
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


//   // ********** Page3 **********
//   const renderPage3 = () => (
//     <div>
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


//   // ********** Buttons **********
//   const handlePreviousClick = () => {
//     console.log('currentPage', currentPage);
//     setCurrentPage(currentPage - 1);
//   };

//   const handleNextClick = () => {
//     console.log('currentPage', currentPage);
//     setCurrentPage(currentPage + 1);
//   };


//   // ********** Form **********
//   return (
//     <div dir="rtl"><br /><br /><br />
//     <div className='Question-form-container'>
//       <form className='Question-form' onSubmit={handleFormSubmit}>
//         {currentPage === 0 && renderPage0()}
//         {currentPage === 1 && renderPage1()}
//         {currentPage === 2 && renderPage2()}
//         {currentPage === 3 && renderPage3()}

//           {currentPage == 0 && (
//           <>
//           <button className="Question-buttons-main-001" type="button" onClick={handleNextClick}>החלו לתכנן!</button>
//           </>
//           )}

//           {currentPage == 1 && (
//           <>
//           <button className="Question-buttons-main-001" type="button" onClick={handleNextClick}>הבא</button>
//           </>
//           )}

//           {currentPage == 2 && (
//           <>
//           <button className="Question-buttons-main-001" type="button" onClick={handlePreviousClick}>הקודם</button>
//           <button className="Question-buttons-main-001" type="button" onClick={handleNextClick}>הבא</button>
//           </> 
//           )}


//           {currentPage == 3  && (
//           <>
//           <button className="Question-buttons-main-001" type="button" onClick={handlePreviousClick}>הקודם</button>
//           <button className="Question-buttons-main-001" type="submit">סיימתי!</button>
//           </>
//           )}

//         <br />
//         <br />

//       </form>
//     </div>
//     </div>
//   );
// }

// export default MultiPageForm;























































































































import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Select, { components } from 'react-select';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../styles//QuestionnaireForm.css';
import './inner-component/react-datepicker'

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import { Box } from '@mui/material'


import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WineBarIcon from '@mui/icons-material/WineBar';


import Stack from '@mui/material/Stack';



import Page0 from './QuestionnairePages/Page0';
import Page1 from './QuestionnairePages/Page1';
import Page2 from './QuestionnairePages/Page2';
import Page3 from './QuestionnairePages/Page3';







function MultiPageForm() {
  const [formData, setFormData] = useState({

    // Variables Page 1 **************************************************
    TourArea: '',
    selectedDate: null,
    TourCount: '',
    TourTimeMorning: false,
    TourTimeAfternoon: false,
    TourTimeEvening: false,
    TourPeopleCount: '',
    Accesibility: false,
    BudgetRange: 50,

    // Variables Page 2 **************************************************
    KosherType: false,
    KosherType_GRADE: 0,

    TourStyle: false,
    TourStyle_GRADE: 0,

    WineryStyle: false,
    selectedWineryStyleOptions: [],
    WineryStyle_GRADE: 0,

    TourAttractions: false,
    selectedAttractionsOptions: [],
    TourAttractions_GRADE: 0,

    TourRestaurant: false,
    selectedRestaurantOptions: [],
    TourRestaurant_GRADE: 0,

    WinesTypes: false,
    selectedWinesTypesOptions: [],
    WinesTypes_GRADE: 0,

  });

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(3);

  const storedData = JSON.parse(localStorage.getItem('formData'));
  const email = localStorage.getItem('email');
  const username = localStorage.getItem('username');
  const first_name = localStorage.getItem('first_name');
  const last_name = localStorage.getItem('last_name');
  

  // const selectedDay = formData.selectedDate ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) : '';

  const selectedDay = formData.selectedDate instanceof Date ? formData.selectedDate.toLocaleDateString('he-IL', { weekday: 'long' }) : '';
  const selectedDayText = `היום שנבחר הוא ${selectedDay}`;

  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { Option } = components;

  const navigate = useNavigate();

  const [validation, setValidation] = useState({});

  const validateForm = () => {
    const errors = {};
    

      if (!formData.TourArea) {
        errors.TourArea = 'בחרו איזור';
      }
      if (!formData.selectedDate) {
        errors.selectedDate = 'בחרו תאריך';
      }
      if (!formData.TourCount) {
        errors.TourCount = 'בחרו מס יקבים ';
      }
      if (!formData.TourTimeMorning && !formData.TourTimeAfternoon && !formData.TourTimeEvening) {
        errors.TourTime = 'בחרו לפחות שעת סיור אחת';
      }
      if (!formData.TourPeopleCount) {
        errors.TourPeopleCount = 'בחרו מס אנשים ';
      }
      if (!formData.BudgetRange) {
        errors.BudgetRange = 'בחרו תקציב ';
      } 
      // GRADES ******************************************************

      if (formData.KosherType && !formData.KosherType_GRADE) {
        errors.KosherType_GRADE = 'בחרו ציון לכשרות ';
      }
      if (formData.TourStyle && !formData.TourStyle_GRADE) {
        errors.TourStyle_GRADE = 'בחרו ציון לסגנון הסיור ';
      }
      if (formData.WineryStyle && !formData.WineryStyle_GRADE) {
        errors.WineryStyle_GRADE = 'בחרו ציון לסגנון המקום ';
      }
      if (formData.TourAttractions && !formData.TourAttractions_GRADE) {
        errors.TourAttractions_GRADE = 'בחרו ציון לאטרקציות ';
      }
      if (formData.TourRestaurant && !formData.TourRestaurant_GRADE) {
        errors.TourRestaurant_GRADE = 'בחרו ציון למסעדה ';
      }
      if (formData.WinesTypes && !formData.WinesTypes_GRADE) {
        errors.WinesTypes_GRADE = 'בחרו ציון לסוגי יין ';
      }        

      setValidation(errors);

      return errors;
    };


// Part 1: Handle date input
const handleDateInputChange = (date) => {
  setFormData({ ...formData, selectedDate: new Date(date) });
  console.log('date1: ', date);

  // Update validation state
  setValidation((prevValidation) => {
    const updatedValidation = { ...prevValidation };

    // Remove error message if a date is picked
    if (date) {
      delete updatedValidation.selectedDate;
    }

    return updatedValidation;
  });

  // Existing code for handling specific fields
  localStorage.setItem('formData', JSON.stringify({ ...formData, selectedDate: new Date(date) }));
  const closeButton = document.querySelector('.react-datepicker__close-icon');
  if (closeButton) {
    closeButton.click();
  }
};


// Part 2: Handle all other input types
const handleOtherInputChange = (event) => {
  const { name, value, type, checked } = event.target;
  const newValue = type === 'checkbox' ? checked : value;

  setFormData((prevFormData) => {
    const updatedFormData = { ...prevFormData, [name]: newValue };

    // If the KosherType checkbox is unchecked, set KosherType_GRADE to 0
    if (name === 'KosherType' && !newValue) {
      updatedFormData.KosherType_GRADE = 0;
    }

    // If the TourStyle select value is "יש לבחור מהרשימה", set TourStyle_GRADE to 0
    if (name === 'TourStyle' && value === '') {
      updatedFormData.TourStyle_GRADE = 0;
    }

    return updatedFormData;
  });

  // Update validation state
  setValidation((prevValidation) => {
    const updatedValidation = { ...prevValidation };

    // Remove error message if the input value is correct
    if ((type === 'checkbox' && checked) || (type !== 'checkbox' && newValue)) {
      delete updatedValidation[name];
    }

    // Special case for TourTime checkboxes
    if (
      name === 'TourTimeMorning' ||
      name === 'TourTimeAfternoon' ||
      name === 'TourTimeEvening'
    ) {
      const hasCheckedTourTime =
        formData.TourTimeMorning ||
        formData.TourTimeAfternoon ||
        formData.TourTimeEvening ||
        checked;
      if (hasCheckedTourTime) {
        delete updatedValidation.TourTime;
      }
    }

    return updatedValidation;
  });
};



    // ******************************************************************
    
  

  useEffect(() => {
    // Save form data to local storage whenever formData changes
    localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData, showOptions, selectedOption]);
    


  useEffect(() => {
    // Load form data from local storage when component mounts
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  
  

async function handleFormSubmit  (event)  {
  event.preventDefault();
  console.log('currentPage', currentPage);
  // console.log(storedData)
  // console.log(formData)

    // ******************************


    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      const unfilledFields = Object.values(errors).join('\n')
      alert(`${unfilledFields}`);

      return;
    }

    // ******************************


  try {
    const response = await fetch("/api/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(storedData)
    });
    console.log('Response from server:', response);

    if (response.ok) {
      console.log('FormData received successfully');
      
      navigate('/userdata');
    } else {
      console.error('Error receiving FormData');
    }
  } catch (error) {
    console.error('Error submitting FormData:', error);
    console.error('Response from server:', error.response);
  }
};


  // ********** Buttons **********
  const handlePreviousClick = () => {
    console.log('currentPage', currentPage);
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    console.log('currentPage', currentPage);
    setCurrentPage(currentPage + 1);
  };


  // ********** Form **********
  return (
    <div dir="rtl"><br /><br /><br />
      <div className='Question-form-container'>
        <form className='Question-form' onSubmit={handleFormSubmit}>

          {currentPage === 0 && 
          <Page0 first_name={first_name} last_name={last_name} 
          />
        }


          {currentPage === 1 && (
          <Page1
            formData={formData}
            handleOtherInputChange={handleOtherInputChange}
            validation={validation}
            handleDateInputChange={handleDateInputChange}
            totalPages={totalPages}
          />
        )}


          {currentPage === 2 && (
          <Page2
            formData={formData}
            handleOtherInputChange={handleOtherInputChange}
            validation={validation}
            totalPages={totalPages}
            setFormData={setFormData}

          />
        )}


        {currentPage === 3 && 
        <Page3 formData={formData} totalPages={totalPages} 
          />
        }



          {currentPage == 0 && (
          <>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap" rel="stylesheet"></link>

          <Stack spacing={2} direction="row">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '40vh'}}>
              <Button 
                onClick={handleNextClick}
                variant="contained" 
                endIcon={<WineBarIcon sx={{marginLeft: '0px'}} />}
                sx={{
                  width: '250px',
                  height: '70px',
                  backgroundColor: 'rgba(203, 67, 53)',
                  '&:hover': { backgroundColor: 'rgba(231, 76, 60)' },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{margin: '0 auto', fontSize: '22px', fontFamily: 'Heebo, sans-serif', fontWeight: 900}}>החלו לתכנן</span>
              </Button>
            </div>
          </Stack>
          </>
          )}



          {currentPage == 1 && (
          <>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap" rel="stylesheet"></link>

          <Stack spacing={2} direction="row">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '0vh'}}>
              <Button 
                onClick={handleNextClick}
                variant="contained" 
                startIcon={<ArrowForwardIosIcon sx={{marginLeft: '0px'}} />}
                sx={{
                  width: '40%',
                  height: '60px',
                  backgroundColor: 'rgba(203, 67, 53)',
                  '&:hover': { backgroundColor: 'rgba(231, 76, 60)' },
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span style={{margin: '0 auto', fontSize: '22px', fontFamily: 'Heebo, sans-serif', fontWeight: 900}}>הבא</span>
              </Button>
            </div>
          </Stack>
          </>
          )}

          {currentPage == 2 && (
          <>


          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap" rel="stylesheet"></link>

          <Stack spacing={2} direction='row' sx={{justifyContent: 'center'}}>
            <Button 
              onClick={handleNextClick}
              variant="contained" 
              startIcon={<ArrowForwardIosIcon sx={{marginLeft: '0px'}} />}
              sx={{
                width: '40%',
                height: '60px',
                backgroundColor: 'rgba(203, 67, 53)',
                '&:hover': { backgroundColor: 'rgba(231, 76, 60)' },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginRight: '5px' // add margin to the right of the button
              }}
            >
              <span style={{margin: '0 auto', fontSize: '22px', fontFamily: 'Heebo, sans-serif', fontWeight: 900}}>הבא</span>
            </Button>

            <Button 
              onClick={handlePreviousClick}
              variant="contained" 
              endIcon={<ArrowBackIosNewIcon sx={{marginLeft: '0px'}} />}
              sx={{
                width: '40%',
                height: '60px',
                backgroundColor: 'rgba(203, 67, 53)',
                '&:hover': { backgroundColor: 'rgba(231, 76, 60)' },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '5px' // add margin to the left of the button
              }}
            >
              <span style={{margin: '0 auto', fontSize: '22px', fontFamily: 'Heebo, sans-serif', fontWeight: 900}}>הקודם</span>
            </Button>
          </Stack>
          </> 
          )}


          {currentPage == 3  && (
          <>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap" rel="stylesheet"></link>

          <Stack spacing={2} direction='row' sx={{justifyContent: 'center'}}>
            <Button 
              type="submit"
              variant="contained" 
              startIcon={<CheckCircleIcon sx={{marginLeft: '0px'}} />}
              sx={{
                width: '40%',
                height: '60px',
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

            <Button 
              onClick={handlePreviousClick}
              variant="contained" 
              endIcon={<ArrowBackIosNewIcon sx={{marginLeft: '0px'}} />}
              sx={{
                width: '40%',
                height: '60px',
                backgroundColor: 'rgba(203, 67, 53)',
                '&:hover': { backgroundColor: 'rgba(231, 76, 60)' },
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '5px' // add margin to the left of the button
              }}
            >
              <span style={{margin: '0 auto', fontSize: '22px', fontFamily: 'Heebo, sans-serif', fontWeight: 900}}>הקודם</span>
            </Button>
          </Stack>

          </>
          )}






        


        <br />
        <br />

      </form>
    </div>
    </div>
  );
}

export default MultiPageForm;



