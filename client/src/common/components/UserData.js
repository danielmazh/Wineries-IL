import React, { useState, useEffect } from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FindReplaceIcon from '@mui/icons-material/FindReplace';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import { Box } from '@mui/material'


function DisplayQueryResults() {
  const [queryResults, setQueryResults] = useState([]);
  const [tableIndex, setTableIndex] = useState(0);
  const storedData = JSON.parse(localStorage.getItem('formData'));
  const tourCount = storedData.TourCount;
  const [logoUrls, setLogoUrls] = useState({});

  

  const supportedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

useEffect(() => {
  fetch('/api/getUserdata')
    .then((res) => res.json())
    .then(async (data) => {
      const sortedTables = sortTablesByAverageScore(data, tourCount);
      setQueryResults(sortedTables);

      const urls = await Promise.all(
        sortedTables.flatMap((table) =>
          table.wineries.map(async (winery) => {
            const id = winery.winery_ID;
            let logoUrl = '';

            for (const ext of supportedExtensions) {
              try {
                const logo = await import(`../../assets/winery-logo/winery-${id}.${ext}`);
                logoUrl = logo.default;
                break;
              } catch (error) {
                console.debug(`No logo found for winery-${id} with extension .${ext}`);
              }
            }

            if (!logoUrl) {
              console.error(`Error loading logo for winery-${id}`);
            }

            return { id, url: logoUrl }; // Return the found logo URL or an empty string if no logo was found
          })
        )
      );

      setLogoUrls(Object.fromEntries(urls.map(({ id, url }) => [id, url])));
    })
    .catch((err) => {
      console.error(err);
    });
}, [tourCount]);


  function calculateAverage(wineries, tourCount) {
    const totalScore = wineries.slice(0, tourCount).reduce((sum, winery) => sum + winery.weightedScore, 0);
    return totalScore / tourCount;
  }

  function sortTablesByAverageScore(tables, tourCount) {
    return tables.slice().sort((a, b) => {
      const averageA = calculateAverage(a.wineries, tourCount);
      const averageB = calculateAverage(b.wineries, tourCount);
      return averageB - averageA;
    });
  }

  function handleNext() {
    setTableIndex((prevIndex) => (prevIndex + 1) % queryResults.length);
  }

  function handlePrevious() {
    setTableIndex((prevIndex) => (prevIndex - 1 + queryResults.length) % queryResults.length);
  }

  const currentTable = queryResults[tableIndex];

  return (
    <div style={{ textAlign: 'center' }} dir="rtl">
      <h2 style={{ textAlign: 'center' }}>רשימת יקבים:</h2>
      {queryResults.length > 0 && currentTable ? (
        <>
          <h3>{currentTable.area}</h3>
          <p>
          ממוצע ניקוד:{" "}
          {calculateAverage(currentTable.wineries, tourCount).toFixed(2)}
          </p>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>שם היקב</th>
                <th>איזור ראשי</th>
                <th>איזור משני</th>
                <th>ניקוד</th>
                <th>לוגו</th>
              </tr>
            </thead>
            <tbody>
              {currentTable.wineries.slice(0, tourCount).map((result, index) => (
                <tr key={index}>
                  <td>{result.winery_ID}</td>
                  <td>{result.winery_name}</td>
                  <td>{result.main_area}</td>
                  <td>{result.secondary_area}</td>
                  <td>{result.weightedScore ? result.weightedScore.toFixed(2) : 'N/A'}</td>
                  <img
                      src={logoUrls[result.winery_ID]}
                      alt={result.winery_name}
                      style={{ width: '50px', height: '50px' }}
                    />
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={handlePrevious}>הקודם</button>
          <button onClick={handleNext}>הבא</button>

        </>
      ) : (
        <p dir="rtl" style={{ textAlign: 'center' }}>
          {queryResults.length === 0 ? 'לא נמצאו תוצאות במערכת' : 'טוען...'}
        </p>
      )}
   </div>
   );
  }
  
  export default DisplayQueryResults;