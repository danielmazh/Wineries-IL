function calculateScore(row, formData) {
    let totalScore = 0;
    let maxScore = 0;
  
    // function similarityScore(matchingElements, totalElements) {
    //   return Math.round((matchingElements / totalElements) * 4) + 1;
    // }

    console.log('');
    console.log('************************' ,row.winery_name, '************************');

    console.log('');
    // KosherType  ************************************************************
    if (formData.KosherType_GRADE !== 0) {
        console.log('KosherType:',formData.KosherType_GRADE ,'*************');

        const kosherScore = formData.KosherType ? (
        row.kosher_type.toLowerCase() === 'true') === formData.KosherType ? 5 : 1 
        : 1;

        console.log('kosherScore ? 5 : 1 ==>', kosherScore);

        totalScore += kosherScore * formData.KosherType_GRADE;
        console.log('totalScore =',kosherScore, '*', formData.KosherType_GRADE, '==> current totalScore:',totalScore);

        maxScore += 5 * formData.KosherType_GRADE;
        console.log('maxScore =', '5 *', formData.KosherType_GRADE, '==>', maxScore);
    }


    console.log('');
    // TourStyle ************************************************************
    if (formData.TourStyle_GRADE !== 0) {
        console.log('TourStyle:',formData.TourStyle_GRADE,'*************')

        const tourStyleScore = row.tour_style.includes(formData.TourStyle) ? 5 : 1;
        console.log('tourStyleScore ? 5 : 1 ==>', tourStyleScore)

        totalScore += tourStyleScore * formData.TourStyle_GRADE;
        console.log('totalScore =',tourStyleScore, '*', formData.TourStyle_GRADE, '==> current totalScore:',totalScore);

        maxScore += 5 * formData.TourStyle_GRADE;
        console.log('maxScore =', '5 *', formData.TourStyle_GRADE, '==>', maxScore);
    }

    console.log('');
    // WineryStyle  ************************************************************
    if (formData.WineryStyle_GRADE !== 0) {
        console.log('WineryStyle:',formData.WineryStyle_GRADE,'*************');

        const wineryStyle = row.winery_style.split(',');
        // console.log('wineryStyle from winery',row.winery_name, 'is:', wineryStyle)

        const matchingStyles_wineryStyle = formData.selectedWineryStyleOptions.filter(option => wineryStyle.includes(option));
        // console.log('matching Styles', matchingStyles_wineryStyle)

        const matchPercentage_wineryStyle = (matchingStyles_wineryStyle.length / formData.selectedWineryStyleOptions.length) * 100;
        console.log('matchPercentage_wineryStyle', matchPercentage_wineryStyle,'%')

        let wineryStyleScore;

            if (matchPercentage_wineryStyle >= 80 && matchPercentage_wineryStyle <= 100) {
                wineryStyleScore = 5; // between 80-100 get 5
            } else if (matchPercentage_wineryStyle >= 60 && matchPercentage_wineryStyle < 80) {
                wineryStyleScore = 4; // between 60-80 get 4
            } else if (matchPercentage_wineryStyle >= 40 && matchPercentage_wineryStyle < 60) {
                wineryStyleScore = 3; // between 40-60 get 3
            } else if (matchPercentage_wineryStyle >= 20 && matchPercentage_wineryStyle < 40) {
                wineryStyleScore = 2; // between 20-40 get 2
            } else if (matchPercentage_wineryStyle >= 0 && matchPercentage_wineryStyle < 20) {
                wineryStyleScore = 1; // between 0-20 get 1
            }

        console.log('wineryStyleScore ? 5 : 1 ==>', wineryStyleScore);

        totalScore += wineryStyleScore * formData.WineryStyle_GRADE;
        console.log('totalScore =', wineryStyleScore, '*', formData.WineryStyle_GRADE, '==> current totalScore:', totalScore);

        maxScore += 5 * formData.WineryStyle_GRADE;
        console.log('maxScore =', '5 *', formData.WineryStyle_GRADE, '==>', maxScore);
    }


    console.log('');
    // TourAttractions  ************************************************************    
    if (formData.TourAttractions_GRADE !== 0) {
        console.log('TourAttractions:',formData.TourAttractions_GRADE,'*************');

        const tourAttractions = row.tour_attractions.split(',');

        const matchingStyles_tourAttractions = formData.selectedAttractionsOptions.filter(option => tourAttractions.includes(option));

        const matchPercentage_tourAttractions = (matchingStyles_tourAttractions.length / formData.selectedAttractionsOptions.length) * 100;
        console.log('matchPercentage_tourAttractions', matchPercentage_tourAttractions,'%')

        let tourAttractionsScore;

            if (matchPercentage_tourAttractions >= 80 && matchPercentage_tourAttractions <= 100) {
                tourAttractionsScore = 5; // between 80-100 get 5
            } else if (matchPercentage_tourAttractions >= 60 && matchPercentage_tourAttractions < 80) {
                tourAttractionsScore = 4; // between 60-80 get 4
            } else if (matchPercentage_tourAttractions >= 40 && matchPercentage_tourAttractions < 60) {
                tourAttractionsScore = 3; // between 40-60 get 3
            } else if (matchPercentage_tourAttractions >= 20 && matchPercentage_tourAttractions < 40) {
                tourAttractionsScore = 2; // between 20-40 get 2
            } else if (matchPercentage_tourAttractions >= 0 && matchPercentage_tourAttractions < 20) {
                tourAttractionsScore = 1; // between 0-20 get 1
            }

        console.log('tourAttractionsScore ? 5 : 1 ==>', tourAttractionsScore);

        totalScore += tourAttractionsScore * formData.TourAttractions_GRADE;
        console.log('totalScore =', tourAttractionsScore, '*', formData.TourAttractions_GRADE, '==> current totalScore:', totalScore);

        maxScore += 5 * formData.TourAttractions_GRADE;
        console.log('maxScore =', '5 *', formData.TourAttractions_GRADE, '==>', maxScore);
    }

  
    console.log('');
    // TourRestaurant  ************************************************************    

    if (formData.TourRestaurant_GRADE !== 0) {
        console.log('TourRestaurant:',formData.TourRestaurant_GRADE,'*************');

        const tourRestaurant = row.tour_restaurant.split(',');

        const matchingStyles_tourRestaurant = formData.selectedRestaurantOptions.filter(option => tourRestaurant.includes(option));

        const matchPercentage_tourRestaurant = (matchingStyles_tourRestaurant.length / formData.selectedRestaurantOptions.length) * 100;
        console.log('matchPercentage_tourRestaurant', matchPercentage_tourRestaurant,'%')

        let tourRestaurantScore;

            if (matchPercentage_tourRestaurant >= 80 && matchPercentage_tourRestaurant <= 100) {
                tourRestaurantScore = 5; // between 80-100 get 5
            } else if (matchPercentage_tourRestaurant >= 60 && matchPercentage_tourRestaurant < 80) {
                tourRestaurantScore = 4; // between 60-80 get 4
            } else if (matchPercentage_tourRestaurant >= 40 && matchPercentage_tourRestaurant < 60) {
                tourRestaurantScore = 3; // between 40-60 get 3
            } else if (matchPercentage_tourRestaurant >= 20 && matchPercentage_tourRestaurant < 40) {
                tourRestaurantScore = 2; // between 20-40 get 2
            } else if (matchPercentage_tourRestaurant >= 0 && matchPercentage_tourRestaurant < 20) {
                tourRestaurantScore = 1; // between 0-20 get 1
            }

        console.log('tourRestaurantScore ? 5 : 1 ==>', tourRestaurantScore);

        totalScore += tourRestaurantScore * formData.TourRestaurant_GRADE;
        console.log('totalScore =', tourRestaurantScore, '*', formData.TourRestaurant_GRADE, '==> current totalScore:', totalScore);

        maxScore += 5 * formData.TourRestaurant_GRADE;
        console.log('maxScore =', '5 *', formData.TourRestaurant_GRADE, '==>', maxScore);
    }

  
    console.log('');
    // WinesTypes  ************************************************************ 

    if (formData.WinesTypes_GRADE !== 0) {
        console.log('winesTypes:',formData.WinesTypes_GRADE,'*************');

        const winesTypes = row.wines_types.split(',');

        const matchingStyles_winesTypes = formData.selectedWinesTypesOptions.filter(option => winesTypes.includes(option));

        const matchPercentage_winesTypes = (matchingStyles_winesTypes.length / formData.selectedWinesTypesOptions.length) * 100;
        console.log('matchPercentage_winesTypes', matchPercentage_winesTypes,'%')

        let winesTypesScore;

            if (matchPercentage_winesTypes >= 80 && matchPercentage_winesTypes <= 100) {
                winesTypesScore = 5; // between 80-100 get 5
            } else if (matchPercentage_winesTypes >= 60 && matchPercentage_winesTypes < 80) {
                winesTypesScore = 4; // between 60-80 get 4
            } else if (matchPercentage_winesTypes >= 40 && matchPercentage_winesTypes < 60) {
                winesTypesScore = 3; // between 40-60 get 3
            } else if (matchPercentage_winesTypes >= 20 && matchPercentage_winesTypes < 40) {
                winesTypesScore = 2; // between 20-40 get 2
            } else if (matchPercentage_winesTypes >= 0 && matchPercentage_winesTypes < 20) {
                winesTypesScore = 1; // between 0-20 get 1
            }

        console.log('winesTypesScore ? 5 : 1 ==>', winesTypesScore);

        totalScore += winesTypesScore * formData.WinesTypes_GRADE;
        console.log('totalScore =', winesTypesScore, '*', formData.WinesTypes_GRADE, '==> current totalScore:', totalScore);

        maxScore += 5 * formData.WinesTypes_GRADE;
        console.log('maxScore =', '5 *', formData.WinesTypes_GRADE, '==>', maxScore);
    }
  
    
    // Calculate the weighted score
    console.log('');
    let weightedScore;
    if (maxScore === 0) {
        console.log('None of the preferences were selected.');
        weightedScore = 0;
    } else {
        weightedScore = totalScore / maxScore;
    }
    console.log('weightedScore = totalScore / maxScore;');
    console.log('totalScore:', totalScore);
    console.log('maxScore:', maxScore);
    console.log('weightedScore:', weightedScore);
    


  
    // Return the calculated scores
    return {
      totalScore,
      maxScore,
      weightedScore,
    };
  }
  

  module.exports = {
    calculateScore
  };
  