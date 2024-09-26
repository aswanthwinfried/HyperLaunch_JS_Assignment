// 4. Write a JavaScript function that accepts a person's age as input. Use conditional 
// statements to check: 
// o If the person is under 18, print "Minor". 
// o If the person is 18 or older but under 60, print "Adult". 
// o If the person is 60 or older, print "Senior". 

function Person(age){
    if(age<18){
        console.log("Minor");
    }
    else if(age>=18 && age<60){
        console.log("Adult");
    }
    else {
        console.log("Senior");
    }
}

Person(18)