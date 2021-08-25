// print odd number given range
/* 
let start = 7;
let end = 19
while (start <= end) {
  if (start % 2 == 1) {
    console.log(start);
  }
  start++;
}
 */
// greater than 80 print from an array
/* let arr = [10, 50, 80, 100, 200];
for (const array of arr) {
  if (array > 80) {
    console.log(array);
  }
} */
/* 
// 1. feetToInchi Conversion using Function
function feetToInchi(feetNumber){
    const inchi = feetNumber*12;
    return inchi;
}
const feetToInchiResuls = feetToInchi(5);
console.log(feetToInchiResuls,"″"); 
*/

/* 
// 2. centimeterToMeter conversion using function

function centimeterToMeter(cmNumber) {
  const cm = cmNumber / 100;
  return cm;
}
const centimeterToMeterResult = centimeterToMeter(100);
console.log(centimeterToMeterResult, "m"); 
*/

/* // 3. paperRequirements Problem 
function paperRequirements(firstBookPage, secondBookPage, thirdBookPage) {
  const firstBook = firstBookPage * 100;

  const secondBook = secondBookPage * 200;

  const thirdBook = thirdBookPage * 300;

  return firstBook + secondBook + thirdBook;
}
const booksPagesTotal = paperRequirements(1,1,1);
 console.log(booksPagesTotal); */
//  4. Best Frined Calculation which name length is big he/she is my best friend
const friendList = ['Joy Mondal', 'Milton Howlader', 'Jewel Halder', 'Amit Ghosh CPTU BD', 'Rakib Ul Haque'];
function bestFriend(array) {
    var friendBig = "";
    for(let i=0; i<array.length; i++) {
        let bigLength= array[i];
      if(bigLength.length > friendBig.length) {
        friendBig = bigLength;
      }
    }
    return friendBig;
  }
 const bestFriendName = bestFriend(friendList);
 console.log(bestFriendName);

//5 posititive number count 

const numbersList = [1, 3, 5, 65, -2, 100, -4, 0, 10];
let sum=0;
for(let i=0; i<numbersList.length;i++){
    if(numbersList[i]>0 ){ 
        
        sum = sum+ numbersList[i];
    }
    else{
        continue;
    }
}
console.log(sum);
