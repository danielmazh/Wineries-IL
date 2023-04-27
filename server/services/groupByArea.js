// function groupAndSortByArea(sortedRows) {
//   const areaGroups = {};

//   for (const winery of sortedRows) {
//     const area = winery.secondary_area;

//     if (!areaGroups[area]) {
//       areaGroups[area] = [];
//     }

//     areaGroups[area].push(winery);
//     // Uncomment the following line if you want to sort the wineries by their score within each group again
//     // areaGroups[area].sort((a, b) => b.weightedScore - a.weightedScore);
//   }

//   return areaGroups;
// }

// module.exports = {
//   groupAndSortByArea,
// };



function groupAndSortByArea(sortedRows) {
    const areaGroups = {};
  
    for (const winery of sortedRows) {
      const area = winery.secondary_area;
  
      if (!areaGroups[area]) {
        areaGroups[area] = [];
      }
  
      areaGroups[area].push(winery);
      // Uncomment the following line if you want to sort the wineries by their score within each group again
      // areaGroups[area].sort((a, b) => b.weightedScore - a.weightedScore);
    }
  
    return areaGroups;
  }
  
  module.exports.groupAndSortByArea = groupAndSortByArea;
  