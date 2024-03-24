// Code your solution in this file!
//function that returns the no. of blocks from scubeer HQ
function distanceFromHqInBlocks(street){
    const hq=42;
    if (street>=42){
      return street-hq;
    }else{
        return hq-street;
    }
   
}
//function that returns the number of feet from scuber HQ
function distanceFromHqInFeet(street){
return distanceFromHqInBlocks(street)*264;

}

//function that returns the number of feet travelled 
function distanceTravelledInFeet(start,destination){
    let distance = null;
    if(start <= destination){
        distance=(destination-start)*264;
    }else{
        distance=(start-destination)*264;
    }return distance;

}

//function that calculates fare for customer
function calculatesFarePrice(start,destination){
    const distance=distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return 0;
    }else if (distance>400 && distance<=2000){
    return (distance-400)*0.02;
    }else if(distance>200 && distance<=2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}
