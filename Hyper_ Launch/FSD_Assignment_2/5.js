// 5. Create an array of 4 colors (e.g., ["Red", "Green", "Blue", "Yellow"]). Add another color to 
// the end of the array using push() and then remove the last color using pop(). Print the 
// updated array after each operation. 

let colors = ["Red", "Green", "Blue", "Yellow"];
console.log("Initial_Array : ",colors);

colors.push("Orange");

console.log("Pushed",colors);

colors.pop();

console.log("Popped Array : ",colors)