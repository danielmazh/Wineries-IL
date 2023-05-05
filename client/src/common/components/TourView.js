// client\src\common\components\TourView.js

import React, { useState, useEffect } from 'react';
import '../../styles/DisplayTourResults.css';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import { Button, Tooltip } from '@mui/material';

// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import WineBarIcon from '@mui/icons-material/WineBar';

import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AssistantDirectionIcon from '@mui/icons-material/AssistantDirection';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

import Stack from '@mui/material/Stack';
import { Box } from '@mui/material'



function DisplayTourResults() {
  const [queryResults, setQueryResults] = useState([]);
  const [tableIndex, setTableIndex] = useState(0);
  const storedData = JSON.parse(localStorage.getItem('formData'));
  const tourCount = storedData.TourCount;
  const [logoUrls, setLogoUrls] = useState({});
  
  // const logger = require('../../clientLogger');


  

  const supportedExtensions = ['png', 'jpg', 'jpeg', 'gif', 'svg'];

  useEffect(() => {
    console.log('START  fetch api.getUserdata  ----  components.TourView');

    fetch('/api/getUserdata')
      .then((res) => {
        console.log('Received response from api.getUserdata', res);
        return res.json();
      })

      .then(async (data) => {
        console.log('Received data from api.getUserdata:', data);
        const sortedTables = sortTablesByAverageScore(data, tourCount);
        console.log('Sorted tables:', sortedTables);
        setQueryResults(sortedTables);

        const urls = await Promise.all(
          sortedTables.flatMap((table) =>
            table.wineries.map(async (winery) => {
              const id = winery.winery_id;
              const logoUrl = `https://wineries-il-uploads.s3.eu-central-1.amazonaws.com/WineryLogo/winery-${id}.png`;

              console.log(logoUrl)

              console.log('components.TourView logoUrl:',id, logoUrl);

              return { id, url: logoUrl }; // Return the logo URL
            })
          )
        );

        console.log('Received all logo URLs:', urls);
        setLogoUrls(Object.fromEntries(urls.map(({ id, url }) => [id, url])));
      })


      .catch((err) => {
        console.error('Error occurred during fetch api.getUserdata:', err);
      });
  }, [tourCount]);


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

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
    scrollToTop();
  }

  function handlePrevious() {
    setTableIndex((prevIndex) => (prevIndex - 1 + queryResults.length) % queryResults.length);
  }

  const currentTable = queryResults[tableIndex];

  // console.log('components\TourView currentTable:', currentTable)


  return (
    <div style={{ textAlign: 'center' }} dir="rtl">
        <br/><br/><br/><br/><br/>
      <h2 style={{ textAlign: 'center' }}> </h2>
      {queryResults.length > 0 && currentTable ? (
        <>



<h2>יקבים לסיור באיזור {currentTable.area}</h2>
          <p> 
            {" "}
            {(calculateAverage(currentTable.wineries, tourCount) * 100).toFixed(0)}%
            התאמה
          </p>


          <div className="card-container">
          {currentTable.wineries.slice(0, tourCount).map((result, index) => (
            <div className="card" key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <a href={result.website} target="_blank" rel="noopener noreferrer">
                  <img
                    className="card-img"
                    src={logoUrls[result.winery_id]}
                    alt={result.winery_name}
                  />
                </a>
                <div className="card-content">
                  <h4>{result.winery_name}</h4>
                  <br/><br/>
                  {/* <p>{result.weightedScore ? result.weightedScore.toFixed(2) : 'N/A'}</p> */}
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                padding: '2% 0',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>חיוג</span>
                  <a href={`tel:${result.phone}`} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.2s',
                  }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <PhoneForwardedIcon style={{ fontSize: '45px' }} />
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>ניווט</span>
                  <a href={`https://waze.com/ul?navigate=yes&q=${encodeURIComponent(result.address)}`} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.2s',
                  }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <AssistantDirectionIcon style={{ fontSize: '45px' }} />
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <span>הזמן</span>
                  <a href={result.website} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    transition: 'background-color 0.2s',
                  }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                    <DomainVerificationIcon style={{ fontSize: '45px' }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


          
          <br/>
          {/* <button onClick={handlePrevious}>הקודם</button> */}
          {/* <button onClick={handleNext}>סיור אחר</button> */}

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@900&display=swap" rel="stylesheet"></link>

          <Stack spacing={2} direction='row' sx={{justifyContent: 'center'}}>
          <Tooltip title="מצא סיור אחר">
            <Button 
              onClick={handleNext}
              variant="contained" 
              sx={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: 'rgba(203, 67, 53)',
                  '&:hover': { backgroundColor: 'rgba(231, 76, 60)' },
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: '5px' // add margin to the left of the button
              }}
          >
              <TravelExploreIcon sx={{ fontSize: '45px', marginLeft: '0px' }} />
          </Button>
          </Tooltip>
        </Stack>
        <br/>
        <br/>



        </>
      ) : (
        <p dir="rtl" style={{ textAlign: 'center' }}>
          {queryResults.length === 0 ? 'לא נמצאו תוצאות במערכת' : 'טוען...'}
        </p>
      )}
    </div>
  );
}

export default DisplayTourResults;
