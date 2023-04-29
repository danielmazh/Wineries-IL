// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database('./server/SQL/wineries.db');
// const { calculateScore } = require('./calculateScore');
// const groupAndSortByArea = require('./groupByArea').groupAndSortByArea; // Import the groupAndSortByArea function


// async function userData(storedData) {
//   console.log('FormData received on server:', storedData);

//   // Base query
//   let query = `SELECT * FROM wineries WHERE main_area = ? AND average_cost_per_person < ?`;
//   const queryParams = [storedData.TourArea, storedData.BudgetRange];
//   console.log('storedData.BudgetRange:', storedData.BudgetRange);

//   const selectedDate = new Date(storedData.selectedDate);
//   const day = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
//   console.log('day recieved:', day);

//   const timeRanges = [
//     { name: 'TourTimeMorning', range: ['10:00', '12:00'] },
//     { name: 'TourTimeAfternoon', range: ['12:00', '14:00'] },
//     { name: 'TourTimeEvening', range: ['14:00', '16:00'] },
//   ];

//   // Generate conditions for time ranges and the selected day
//   const conditions = [];
//   for (const timeRange of timeRanges) {
//     if (storedData[timeRange.name]) {
//       console.log('timeRange.name:', timeRange.name);
//       conditions.push(`(time(?) >= time(substr(oh_${day}, 1, 5)) AND time(?) <= time(substr(oh_${day}, 7, 5)))`);
//       queryParams.push(...timeRange.range);
//     }
//   }

//   if (conditions.length > 0) {
//     query += ` AND (${conditions.join(' OR ')})`;
//   }
//   console.log('query:', query);
//   console.log('conditions:', conditions);
//   console.log('queryParams:', queryParams);

//   return new Promise((resolve, reject) => {
//     db.serialize(() => {
//       db.all(query, queryParams, (err, rows) => {
//         if (err) {
//           console.error(err);
//           reject(err);
//         } else {
//           // Apply scoring and sorting
//           const scoredRows = rows.map(row => {
//             const scores = calculateScore(row, storedData);
//             return { ...row, scores, weightedScore: scores.weightedScore };
//           });

//           const sortedRows = scoredRows.sort((a, b) => b.weightedScore - a.weightedScore);

//           // Group the sorted rows by secondary area
//           const groupedWineries = groupAndSortByArea(sortedRows);

//           // Convert the groupedWineries object to an array of tables
//           const tables = Object.entries(groupedWineries).map(([area, wineries]) => {
//             return {
//               area,
//               wineries,
//             };
//           });

//           // Return the tables array with grouped and sorted wineries
//           resolve(tables);
//         }
//       });
//     });
//   });
//   }

//   module.exports = {
//   userData
//   };





// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************
// *********************************************************************************************************************



// const format = require('pg-format');
// const { query } = require("../db");

// const { calculateScore } = require('./calculateScore');
// const groupAndSortByArea = require('./groupByArea').groupAndSortByArea; // Import the groupAndSortByArea function

// async function userData(storedData) {
//   // console.log('FormData received on server:', storedData);

//   const queryParams = [];
//   let sqlQuery = `SELECT * FROM wineries WHERE main_area = %L AND average_cost_per_person < %L`;
//   queryParams.push(storedData.TourArea, storedData.BudgetRange);
//   // console.log('storedData.BudgetRange:', storedData.BudgetRange);

//   const selectedDate = new Date(storedData.selectedDate);
//   const day = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
//   // console.log('day received:', day);

//   const timeRanges = [
//     { name: 'TourTimeMorning', range: ['10:00', '12:00'] },
//     { name: 'TourTimeAfternoon', range: ['12:00', '14:00'] },
//     { name: 'TourTimeEvening', range: ['14:00', '16:00'] },
//   ];
  
//   // Generate conditions for time ranges and the selected day
//   const conditions = [];
//   for (const timeRange of timeRanges) {
//     if (storedData[timeRange.name]) {
//       // console.log('timeRange.name:', timeRange.name);
//       // Use the correct substring syntax for PostgreSQL
//       conditions.push(`(time %L::time >= time(substring(oh_${day} from 1 for 5)) AND time %L::time <= time(substring(oh_${day} from 7 for 5)))`);
//       queryParams.push(...timeRange.range);

//       // console.log('timeRange.range:', timeRange.range);
//     }
//   }

//   if (conditions.length > 0) {
//     sqlQuery += ` AND (${conditions.join(' OR ')})`;
//   }

//   console.log('sqlQuery:', sqlQuery);
//   console.log('queryParams:', queryParams);


//   // console.log('conditions:', conditions);


//   return new Promise((resolve, reject) => {
//     query(format(sqlQuery, ...queryParams), (err, res) => {
//       if (err) {
//         console.error(err);
//         reject(err);
//       } else {
//         const rows = res.rows;
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
  const queryParams = [];
  let sqlQuery = `SELECT * FROM ${process.env.TABLE_NAME}.wineries WHERE main_area = %L AND average_cost_per_person < %L`;
  queryParams.push(storedData.TourArea, storedData.BudgetRange);

  const selectedDate = new Date(storedData.selectedDate);
  const day = selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();

  const timeRanges = [
    { name: 'TourTimeMorning', range: ['10:00', '12:00'] },
    { name: 'TourTimeAfternoon', range: ['12:00', '14:00'] },
    { name: 'TourTimeEvening', range: ['14:00', '16:00'] },
  ];
  
  // Generate conditions for time ranges and the selected day
  const conditions = [];
  for (const timeRange of timeRanges) {
    if (storedData[timeRange.name]) {
      conditions.push(`(%L BETWEEN substring(oh_${day} from 1 for 5) AND substring(oh_${day} from 7 for 5))`);
      queryParams.push(timeRange.range[0]);
    }
  }

  if (conditions.length > 0) {
    sqlQuery += ` AND (${conditions.join(' OR ')})`;
  }

  console.log('queryParams:', queryParams);
  console.log('sqlQuery:', sqlQuery);

  return new Promise((resolve, reject) => {
    query(format(sqlQuery, ...queryParams), (err, res) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        const rows = res.rows;
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
    });
  });
}

module.exports = {
  userData
};

