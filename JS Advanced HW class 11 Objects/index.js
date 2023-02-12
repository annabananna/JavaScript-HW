// Exercise 1
// Create a Person constructor function that has:

// firstName
// lastName
// age
// getFullName - method

// Create a Student constructor function that inherits from Person and has:

// academyName
// studentId
// study - method that writes in the console: The student firstName is studying in the academyName
// Create two Student objects

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = function(){
        console.log(`Student full name: ${firstName} ${lastName}`)
    }
}

function Student(firstName, lastName, age, academyName, studentId){
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));

    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
        console.log(`The student ${firstName} is studying in the ${academyName}`)
    }
}

let student1 = new Student("Bob", "Bobski", 30, "SEDC", 2);
let student2 = new Student("John", "Doe", 25, "SEDC", 7);
console.log(student1);
student1.getFullName();
student1.study();
console.log(student2);


// Exercise 2
// Create a method on the Person prototype that accepts a Student of any academy and returns the academy that that student is in.

// Create DesignStudent, CodeStudent and NetworkStudent constructor functions that inherit from Student.

// DesignStudent
// isStudentOfTheMonth - boolean
// attendAdobeExam - method that writes in console: The student firstName is doing an adobe exam!

// CodeStudent
// hasIndividualProject - boolean
// hasGroupProject - boolean
// doProject(type) - method that accepts string. If the string is individual or group it should write that the person is working
// on the project of that type and set the value to true on the property of the project

// NetworkStudent
// academyPart - number
// attendCiscoExam - method that writes in console: the student firstNAme is doing a cisco exam!
// Note: For all students, the academyName property should be auto generated based on which Student we are creating ( design, code or network )

// Create one of each students Check all students with the Student method for checking students academy


Person.prototype.printAcademy = function(student){
    return this.academyName;
}

function DesignStudent(firstName, lastName, age, academyName, studentId, isStudentOfTheMonth){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`The student ${firstName} is doing an adobe exam!`)
    }
}

let designStudent = new DesignStudent("John", "Johnski", 35, "SEDC Design Academy", 21, false);
console.log("Design student: ", designStudent);
designStudent.attendAdobeExam();
designStudent.study();
console.log(designStudent.printAcademy());


function CodeStudent(firstName, lastName, age, academyName, studentId, hasIndividualProject, hasGroupProject){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.hasIndividualProject = hasIndividualProject;
    this.hasGroupProject = hasGroupProject;
    this.doProject = function(type){
        if(typeof(type) === 'string'){
            if(type === "individual"){
                this.hasIndividualProject = true;
                console.log(`The student ${firstName} is working on individual project`)
            } else if(type === "group") {
                this.hasGroupProject = true;
                console.log(`The student ${firstName} is working on group project`)
            }
        }
        console.log("Please enter a valid type")
    }
}

let codeStudent = new CodeStudent("July", "Julski", 23, "SEDC Coding Academy", 6, false, false);
console.log("Code student: ", codeStudent);
codeStudent.study();
console.log(codeStudent.printAcademy());
codeStudent.doProject("individual");
codeStudent.doProject("group");

function NetworkStudent(firstName, lastName, age, academyName, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, academyName, studentId));

    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`The student ${firstName} is doing a cisco exam`)
    }
}

let networkStudent = new NetworkStudent("Bil", "Bilski", 40, "SEDC Network Academy", 9, 5);
console.log("Network student: ", networkStudent);
networkStudent.study();
console.log(networkStudent.printAcademy());
networkStudent.attendCiscoExam();


