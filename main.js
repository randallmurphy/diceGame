/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}


// use to find median easier exact middle
const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

const singleDie = document.querySelector('#d6-roll')
const doubleDie1 = document.querySelector('#double-d6-roll-1')
const doubleDie2 = document.querySelector('#double-d6-roll-2')
const twelveDie = document.querySelector('#d12-roll')
const twentyDie = document.querySelector('#d20-roll')






/*******************
 * EVENT LISTENERS *
 *******************/
const rollSingleDie = () => {
// randomly generate number 
  const randomNum = getRandomNumber(6);
    console.log(randomNum);
      singleDie.src = `images/d6/${randomNum}.png`
      sixes.push(randomNum);
    console.log(sixes);
    getMedian(sixes)
    console.log(getMedian(sixes));
    document.querySelector("#d6-rolls-median").innerText = `${getMedian(sixes)}`
}



const rollDoubleDice = () => {
  const randomNum1 = getRandomNumber(6);
  const randomNum2 = getRandomNumber(6);
  console.log(randomNum1,randomNum2);
      doubleDie1.src = `images/d6/${randomNum1}.png`
      doubleDie2.src = `images/d6/${randomNum2}.png`
      doubleSixes.push(randomNum1 + randomNum2);
    console.log(doubleSixes);
    document.querySelector("#double-d6-rolls-median").innerText = `${getMedian(doubleSixes)}`
}

const rollTwelveDie = () => {
  const randomNum = getRandomNumber(12);
  console.log(randomNum);
    twelveDie.src = `images/numbers/${randomNum}.png`
    twelves.push(randomNum);
  console.log(twelves);
  getMedian(twelves)
  console.log(getMedian(twelves));
  document.querySelector("#d12-rolls-median").innerText = `${getMedian(twelves)}`
}
const rollTwentyDie = () => {
  const randomNum = getRandomNumber(20);
  console.log(randomNum);
    twentyDie.src = `images/numbers/${randomNum}.png`
    twenties.push(randomNum);
  console.log(twenties);
  getMedian(twenties)
  console.log(getMedian(twenties));
  document.querySelector("#d20-rolls-median").innerText = `${getMedian(twenties)}`
}



singleDie.addEventListener('click', rollSingleDie)
doubleDie1.addEventListener('click', rollDoubleDice)
doubleDie2.addEventListener('click', rollDoubleDice)
twelveDie.addEventListener('click', rollTwelveDie)
twentyDie.addEventListener('click', rollTwentyDie)
/******************
 * RESET FUNCTION *
 ******************/





/****************
 * MATH SECTION *
 ****************/
//median middle number 
//mode most frequent occurring number 
//mean regular average of all numbers

const getMedian = (numArr) =>{
  //first step sort the list 
  // [1,2,2,3,3,4,6] median: 3 index: 3 length: 7 // odd length
  // [1,2,3,4,5=4,5,6,6,6] median: 3 index: 4, length: 9 / 2 -.5
  // [1,2,3,4,5=4,5,6,6] median: 3 index: 3,4 length: 8 // even length
  // [1,2,2,3,3,4] median: 3 index: 2,3 length: 6 / 2
  const sortedArr = sortByNumber(numArr);
  if(sortedArr.length % 2 === 0){ // is even
    const firstNum = sortedArr[numArr.length / 2];
    const secondNum = sortedArr[numArr.length / 2 - 1];
      return (firstNum + secondNum) / 2;
  } else {
    return sortedArr[numArr.length / 2 - .5];
  }
  
  

}



const getMode = (numArr) =>{

}
const getMean = (numArr) =>{

}