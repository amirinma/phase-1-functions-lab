// Code your solution in this file!
const distanceFromHqInBlocks = function(stNumber){
    return Math.abs(42-stNumber);
}


function distanceFromHqInFeet(ftDistance){
    return Math.abs((ftDistance-42)*264)
}

function distanceTravelledInFeet(ftDistance, distination){
   
        return Math.abs((ftDistance-distination)*264)
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function calculatesFarePrice(start, destination){
    const feet = Math.abs((start-destination)*264)
    if (feet < 400){
        return 0
    }else if(feet >400 && feet < 2000){
        return (feet -400)*0.02
    }else if(feet > 2000 && feet < 2500){
        return 25
    }else{
        return "cannot travel that far"
    }
}