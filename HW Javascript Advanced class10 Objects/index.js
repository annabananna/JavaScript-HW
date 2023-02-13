// Create 3 object templates. Academy, Student and Subject. The structure should be: 
//Academy

// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject

// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student

// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only 
// if the student has an Academy object in the Academy property and that subject exists in the academy. 
// If not, give error in console and do not set the CurrentSubject property

function Academy(name, students, subjects, start, end){
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.nbOfClasses = function(subjects){
        let number = 0;
        for(let i = 0; i < subjects.length; i++){
            number = i * 10;
        }
        return number;
    };
    this.printStudents = function(){
        console.log(Student)
    }
    this.printSubjects = function(){
        console.log(Subject)
    }
}

function Subject(title, isElective, academy, students){
    this.title = title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.nbOfClasses1 = 10;
    this.overrideClasses = function(number){
        if(number < 3){
            console.log("Please enter number bigger than 3")
        }
        this.numberOfClasses1 = number;
    }
}

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academyObject){
        this.academy = academyObject;
    }
    this.startSubject = function(subjectObject){
        if(this.academy !== {} &&  this.academy.subjects.includes(subjectObject.title)){
            this.currentSubject = subjectObject;
        }
        console.log("error");
    };
}



let academy = new Academy("SEDC", [this.student1, this.student2], [this.subject1, this.subject2], "17.10.2022", "15.10.2023");

console.log(academy);
// console.log(academy.printStudents());
// console.log(academy.printSubjects());

let subject1 = new Subject("HTML&CSS", false, academy, [this.student1, this.student2]);
let subject2 = new Subject("Javascript", false, academy, [this.student1, this.student2]);
let subject3 = new Subject("Javascript Advanced", false, academy, [this.student1, this.student2]);

console.log(subject1);
console.log(subject2);
console.log(subject3);
// console.log(subject2.overrideClasses(15));

let student1 = new Student("John", "Doe", 30);
let student2 = new Student("Bob", "Bobski", 25);

console.log(student1);
console.log(student2);









