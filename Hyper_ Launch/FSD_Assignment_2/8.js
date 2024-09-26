// 8. Create an array of numbers from 1 to 5. Write code to: 
// • Add the number 6 to the end of the array. 
// • Remove the first number from the array. 
// • Print the final array after each operation.

let num = [1,2,3,4,5];
console.log("Initial_Array : ",num);

num.push(6);
num.shift();

console.log("Final_Array : ",num);