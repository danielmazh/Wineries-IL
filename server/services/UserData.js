// // server\services\UserData.js

// const format = require('pg-format');
// const { query } = require("../db");

// const { calculateScore } = require('./calculateScore');
// const groupAndSortByArea = require('./groupByArea').groupAndSortByArea;

// require('dotenv').config();


// async function userData(storedData) {

//   console.log(' log1 \services\UserData.js:', storedData);


//   const queryParams = [];
//   // let sqlQuery = `SELECT * FROM ${process.env.TABLE_NAME}.wineries WHERE main_area = %L AND average_cost_per_person < %L`;
//   let sqlQuery = `SELECT * FROM ${process.env.TABLE_NAME}.wineries WHERE main_area = $1 AND average_cost_per_person < $2`;

//   queryParams.push(storedData.TourArea, storedData.BudgetRange);

//   const selectedDate = new Date(storedData.selectedDate);
//   const day = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

//   const timeRanges = [
//     { name: 'TourTimeMorning', range: ['10:00', '12:00'] },
//     { name: 'TourTimeAfternoon', range: ['12:00', '14:00'] },
//     { name: 'TourTimeEvening', range: ['14:00', '16:00'] },
//   ];
  
//   // Generate conditions for time ranges and the selected day
//   const conditions = [];
//   for (const timeRange of timeRanges) {
//     if (storedData[timeRange.name]) {
//       conditions.push(`(%L BETWEEN substring(oh_${day} from 1 for 5) AND substring(oh_${day} from 7 for 5))`);
//       queryParams.push(timeRange.range[0]);
//     }
//   }

//   if (conditions.length > 0) {
//     sqlQuery += ` AND (${conditions.join(' OR ')})`;
//   }

//   console.log('queryParams:', queryParams);
//   console.log('sqlQuery:', sqlQuery);

//   return new Promise((resolve, reject) => {

//     console.log('SQL Query:', sqlQuery); // Add this line
//     console.log('Query Params:', queryParams); // Add this line

//     query(sqlQuery, queryParams, (err, res) => {

//     // query(format(sqlQuery, ...queryParams), (err, res) => {

//       if (err) {

//         console.error(err);
//         console.log(err);

//         reject(err);
//       } else {
//         const rows = res.rows;

//         console.log('Raw Rows:', rows); // Add this line

//         // Apply scoring and sorting
//         const scoredRows = rows.map(row => {
//           const scores = calculateScore(row, storedData);
//           return { ...row, scores, weightedScore: scores.weightedScore };
//         });

//         const sortedRows = scoredRows.sort((a, b) => b.weightedScore - a.weightedScore);

//         // Group the sorted rows by secondary area
//         const groupedWineries = groupAndSortByArea(sortedRows);

//         // Convert the groupedWineries object to an array of tables
//         const tables = Object.entries(groupedWineries).map(([area, wineries]) => {
//           return {
//             area,
//             wineries,
//           };
//         });

//         console.log(' log2 \services\UserData.js:', tables);


//         // Return the tables array with grouped and sorted wineries
//         resolve(tables);
//       }
//     });
//   });
// }

// module.exports = {
//   userData
// };











// server\services\UserData.js
const format = require('pg-format');
const { query } = require("../db");
const { calculateScore } = require('./calculateScore');
const groupAndSortByArea = require('./groupByArea').groupAndSortByArea;

require('dotenv').config();


async function userData(storedData) {
  console.log('Start userData function services.UserData');
  console.log('StoredData services.UserData:', storedData);

  const queryParams = [];
  let sqlQuery = `SELECT * FROM ${process.env.TABLE_NAME}.wineries WHERE main_area = $1 AND average_cost_per_person < $2`;
  
  queryParams.push(storedData.TourArea, storedData.BudgetRange);

  const selectedDate = new Date(storedData.selectedDate);
  const day = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

  const timeRanges = [
    { name: 'TourTimeMorning', range: ['10:00', '12:00'] },
    { name: 'TourTimeAfternoon', range: ['12:00', '14:00'] },
    { name: 'TourTimeEvening', range: ['14:00', '16:00'] },
  ];
  
  // // Generate conditions for time ranges and the selected day
  // const conditions = [];
  // for (const timeRange of timeRanges) {
  //   if (storedData[timeRange.name]) {
  //     conditions.push(`($3 BETWEEN substring(oh_${day} from 1 for 5) AND substring(oh_${day} from 7 for 5))`);
  //     queryParams.push(timeRange.range[0]);
  //   }
  // }

    const conditions = timeRanges
    .filter(timeRange => storedData[timeRange.name])
    .map(timeRange => {
      queryParams.push(timeRange.range[0], timeRange.range[1]);
      return `($${queryParams.length - 1} >= substring(oh_${day} from 1 for 5) AND $${queryParams.length} <= substring(oh_${day} from 7 for 5))`;
    });

    if (conditions.length > 0) {
      sqlQuery += ` AND (${conditions.join(' OR ')})`;
    }



  console.log('queryParams:', queryParams);
  console.log('sqlQuery:', sqlQuery);

  return new Promise((resolve, reject) => {
    console.log('Before executing query');

    query(sqlQuery, queryParams, (err, res) => {
      console.log('Inside query callback');


    // query(format(sqlQuery, ...queryParams), (err, res) => {

      if (err) {
        console.error(err);
        reject(err);

      } else {
        console.log('Query successful');
        const rows = res.rows;
        console.log('Rows:', rows);

        // Apply scoring and sorting
        const scoredRows = rows.map(row => {
          const scores = calculateScore(row, storedData);
          return { ...row, scores, weightedScore: scores.weightedScore };
        });

        const sortedRows = scoredRows.sort((a, b) => b.weightedScore - a.weightedScore);

        // Group the sorted rows by secondary area
        const groupedWineries = groupAndSortByArea(sortedRows);

        // Convert the groupedWineries object to an array of tables
        const tables = Object.entries(groupedWineries).map(([area, wineries]) => {
          return {
            area,
            wineries,
          };
        });

        // Return the tables array with grouped and sorted wineries
        resolve(tables);
      }

      console.log('Raw Rows:', rows);
      console.log('tables:', tables);

    });
    console.log('After executing query');
  });
}

module.exports = {
  userData
};
