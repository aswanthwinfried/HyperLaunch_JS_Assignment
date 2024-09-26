// 7. Write a JavaScript function that takes a number from 1 to 7 and prints the corresponding 
// day of the week using a switch statement (e.g., 1 = "Monday", 7 = "Sunday"). 

function daysofWeek(number){
    let day;
    switch(number){
        case 1:
            day="Monday";
            console.log(day)
            break;
        case 2:
            day="Tuesday";
            console.log(day)
            break;
        case 3:
            day="Wednesday";
            console.log(day)
            break;
        case 4:
            day="Thursday";
            console.log(day)
            break;
        case 5:
            day="Friday";
            console.log(day)
            break;
        case 6:
            day="Saturday";
            console.log(day)
            break;
        case 7:
            day="Sunday";
            console.log(day)
            break;
        default:
            console.log("Invalid Day Number")
    }
}

daysofWeek(7)