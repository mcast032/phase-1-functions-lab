// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    const hqBlock = 42;
    return Math.abs(blockNumber - hqBlock);
  }



  function distanceFromHqInFeet(someValue) {
 const blocks = distanceFromHqInBlocks(someValue);
 const feetPerBlock = 264;
 return blocks * feetPerBlock;
  }


  function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  const distanceInBlocks = Math.abs(destination - start);
  return distanceInBlocks * feetPerBlock;
  }


  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      const feetOver400 = distanceInFeet - 400;
      return parseFloat((feetOver400 * 0.02).toFixed(2));
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }