// 6. Create an object student that has properties for the student's name, age, and subjects 
// (where subjects is an array of subject names). Write a function that prints the student's 
// name and the list of subjects.

let student = {
    student_name : "Aswanthwin_Fried S",
    age : 19,
    subjects : ["CN","CD","CCS","DC","CC","STA","DRM"]
}

function student_Detail(){
    console.log(student.student_name);
    console.log(student.subjects);
}

student_Detail()
