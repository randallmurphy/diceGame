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
//<img class="d6 roll" id="d6-roll">
const singleDie = document.querySelector('#d6-roll')
  singleDie.src = 'images/start/d6.png'
  
 // <img class="double d6 roll" id="double-d6-roll-1">
 // <img class="double d6 roll" id="double-d6-roll-2"> 
const doubleDie1 = document.querySelector('#double-d6-roll-1') 
   doubleDie1.src = 'images/start/d6.png';
const doubleDie2 = document.querySelector('#double-d6-roll-2')
   doubleDie2.src = 'images/start/d6.png';
//const doubleDie = document.querySelectorAll(".double");
  // doubleDie.src = 'images/start/d6.png';
  


document.querySelector('#d12-roll').src = 'images/start/d12.jpeg';
document.querySelector('#d20-roll').src = 'images/start/d20.jpg';






/*******************
 * EVENT LISTENERS *
 *******************/
singleDie.addEventListener('click', ()=> {
  // randomly generate number 
  const randomNum = getRandomNumber(6);
    console.log(randomNum);
      singleDie.src = `images/d6/${randomNum}.png`
      sixes.push(randomNum);
    console.log(sixes);
    getMedian(sixes)
    console.log(getMedian(sixes));
    document.querySelector("#d6-rolls-median").innerText = `${getMedian(sixes)}`
});


//add both sums together then push to array
// doubleDie1.addEventListener('click', ()=>{
//   const randomNum = getRandomNumber(6);
//     console.log(randomNum);
//     doubleDie1.src = `images/d6/${randomNum}.png`;
    
// })
// doubleDie2.addEventListener('click', ()=>{
//   const randomNum = getRandomNumber(6);
//     console.log(randomNum);
//     doubleDie2.src = `images/d6/${randomNum}.png`;
    
// })

//   doubleDie.forEach((img)=>{
//     img.addEventListener('click', ()=>{
//     const randomNum = getRandomNumber(6);
//     console.log(randomNum);
//     doubleDie.src = `images/d6/${randomNum}.png`;
//   })
// }); 
  




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