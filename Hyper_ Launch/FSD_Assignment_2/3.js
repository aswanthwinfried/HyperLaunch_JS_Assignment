// 3. Create an array of numbers from 1 to 10. Use for loop to calculate and print the sum of all 
// the numbers in the array. 

let arr = [1,2,3,4,5,6,7,8,9,10];
let arrSum = 0;
for(let i=0;i<arr.length;i++){
    arrSum = arrSum + arr[i];
}
console.log(arrSum);