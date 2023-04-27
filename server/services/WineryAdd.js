// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("./server/SQL/wineries.db");


// const insertQuery = `
//   INSERT INTO "wineries" (winery_name, website, phone, main_area, secondary_area, address, kosher_type, oh_sunday, oh_monday, oh_tuesday, oh_wednesday, oh_thursday, oh_friday, oh_saturday, accessibility, people_max_amount, winery_style, stay_time, average_cost_per_person, tour_style, tour_attractions, wines_types, tour_restaurant, additional_information)
//   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )
// `;

// function addWinery(wineryData) {
//   const {
//     winery_name,
//     website,
//     phone,
//     main_area,
//     secondary_area,
//     address,
//     kosher_type,
//     oh_sunday,
//     oh_monday,
//     oh_tuesday,
//     oh_wednesday,
//     oh_thursday,
//     oh_friday,
//     oh_saturday,
//     accessibility,
//     people_max_amount,
//     winery_style,
//     stay_time,
//     average_cost_per_person,
//     tour_style,
//     tour_attractions,
//     wines_types,
//     tour_restaurant,
//     additional_information,
//   } = wineryData;

//   // Execute the query to insert the row
//   return new Promise((resolve, reject) => {
//     db.run(insertQuery, [    
//       winery_name,
//       website,
//       phone,
//       main_area,
//       secondary_area,
//       address,
//       kosher_type,
//       oh_sunday,
//       oh_monday,
//       oh_tuesday,
//       oh_wednesday,
//       oh_thursday,
//       oh_friday,
//       oh_saturday,
//       accessibility,
//       people_max_amount,
//       winery_style,
//       stay_time,
//       average_cost_per_person,
//       tour_style,
//       tour_attractions,
//       wines_types,
//       tour_restaurant,
//       additional_information,
//     ], function(err) { // replace the arrow function with a regular function
//       if (err) {
//         console.error(err);
//         reject(err);
//         return;
//       }

//       resolve(this.lastID); // return the generated winery_ID
//     });
//   });
// }

// module.exports = {
//   addWinery,
// };








const { query } = require('../db'); // Assuming you have a db.js file that exports the 'query' function
const format = require('pg-format');

require('dotenv').config();


const insertQuery = `
  INSERT INTO ${process.env.TABLE_NAME}.wineries (winery_name, website, phone, main_area, secondary_area, address, kosher_type, oh_sunday, oh_monday, oh_tuesday, oh_wednesday, oh_thursday, oh_friday, oh_saturday, accessibility, people_max_amount, winery_style, stay_time, average_cost_per_person, tour_style, tour_attractions, wines_types, tour_restaurant, additional_information)
  VALUES (%L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L, %L)
  RETURNING winery_id
`;

function addWinery(wineryData) {
  const {
    winery_name,
    website,
    phone,
    main_area,
    secondary_area,
    address,
    kosher_type,
    oh_sunday,
    oh_monday,
    oh_tuesday,
    oh_wednesday,
    oh_thursday,
    oh_friday,
    oh_saturday,
    accessibility,
    people_max_amount,
    winery_style,
    stay_time,
    average_cost_per_person,
    tour_style,
    tour_attractions,
    wines_types,
    tour_restaurant,
    additional_information,
  } = wineryData;

  // Execute the query to insert the row
  return new Promise((resolve, reject) => {
    query(format(insertQuery, winery_name, website, phone, main_area, secondary_area, address, kosher_type, oh_sunday, oh_monday, oh_tuesday, oh_wednesday, oh_thursday, oh_friday, oh_saturday, accessibility, people_max_amount, winery_style, stay_time, average_cost_per_person, tour_style, tour_attractions, wines_types, tour_restaurant, additional_information), (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      resolve(result.rows[0].winery_id); // return the generated winery_ID
    });
  });
}

module.exports = {
  addWinery,
};











