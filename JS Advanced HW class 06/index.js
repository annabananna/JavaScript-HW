// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2
// Use higher order functions to find the answers Link: https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

function students(){

    $.ajax({
        url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
        method: "GET",
        success: function(responce){
            console.log(responce);
            let resp = JSON.parse(responce)
            console.log(resp);
            // let result1 = studentsAvgGradeMoreThan3(resp)
            // console.log(result1);
            console.log("All students with an average grade higher than 3", studentsAvgGradeMoreThan3(resp));
            console.log("All female students with an average grade of 5", femaleStudAvgGradeOf5(resp));
            let result2 = femaleStudAvgGradeOf5(resp);
            result2.forEach((resp) => {
                console.log(`All female student names with an average grade of 5 are: ${resp.firstName}`)
            })
            console.log("All male students  who live in Skopje and are over 18 years old", maleStudInSkopje(resp));
            let result3 = maleStudInSkopje(resp);
            result3.forEach((resp) => {
                console.log(`All male student full names who live in Skopje and are over 18 years old: ${resp.firstName} ${resp.lastName}`)
            })
            console.log("All female students over the age of 24", avgGradeFemaleStd(resp));
            let result4 = avgGradeFemaleStd(resp);
            result4.forEach((resp) => {
                console.log(`The average grades of all female students over the age of 24: name ${resp.firstName} age ${resp.age} grade ${resp.averageGrade}`);
            })
            console.log("All male students with a name starting with B and average grade over 2", maleStudents(resp))
            },        

        error: function(error){
            console.log("Error occured, please try again later", error)
        }
    })
}

students()

let studentsAvgGradeMoreThan3 = function(student){
    let filteredStudents = student.filter(function(valueOfIteration){
        // console.log(valueOfIteration)
        return valueOfIteration.averageGrade > 3
    })
    return filteredStudents;
}

let femaleStudAvgGradeOf5 = (student) => {
    let filteredFemStudents =  student.filter(function(valueOfIteration){
        // console.log(valueOfIteration)  
        return valueOfIteration.gender === "Female" && valueOfIteration.averageGrade === 5;
    })
    return filteredFemStudents;
}

let maleStudInSkopje = (student) => {
    let maleStudentsFiltered = student.filter(function(valueOfIteration){
        return valueOfIteration.gender === "Male" && valueOfIteration.city === "Skopje" && valueOfIteration.age >= 18;
    })
    return maleStudentsFiltered;
}

let avgGradeFemaleStd = (student) => {
    let filteredAvgGradeFemaleStd = student.filter(function(valueOfIteration){
        return valueOfIteration.gender === "Female" && valueOfIteration.age >= 24;
    })
    return filteredAvgGradeFemaleStd;
}

let maleStudents = (student) => {
    let malestudentsFiltered = student.filter(function(valueOfIteration){
        return valueOfIteration.gender === "Male" && valueOfIteration.averageGrade > 2 && valueOfIteration.firstName[0] === "B";
    })
    return malestudentsFiltered;
}