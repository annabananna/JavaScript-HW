// Create a student registry form. The form should have:

// First Name
// Last Name
// Age

// The form should have a save button which will create a student object and add it to an array (students).
// Log the array after every save to see the results in the console.
// Bonus: Make the students appear in an unordered list in the page.

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let age = document.getElementById("age")
let saveBtn = document.getElementById("saveBtn")
let result2 = document.getElementById("result2")

//Step 1 - Create a function constructor for object Student
let studentsArray = [];

function Student(firstNameInput, lastNameInput, ageInput){
    this.firstNameInput = firstNameInput;
    this.lastNameInput = lastNameInput;
    this.ageInput = ageInput;
}

// Step 2 -  Create a function print Students

function printStudents(listOfStudents){
    result2.innerHTML = "";
    for(let i = 0; i < listOfStudents.length; i++){
        result2.innerHTML += `<li> Name: ${listOfStudents[i].firstNameInput} Last Name: ${listOfStudents[i].lastNameInput}
         Age: ${listOfStudents[i].ageInput} </li>`
    }
}

saveBtn.addEventListener("click", function(event){
    event.preventDefault();
    let firstNameIn = firstName.value;
    let lastNameIn = lastName.value;
    let ageIn = age.value;

    // firstNameIn = ""
    // lastNameIn = ""
    // ageIn = ""

    let student = new Student(firstNameIn, lastNameIn,  ageIn)
    studentsArray.push(student)
    console.log(studentsArray)
    printStudents(studentsArray)
    firstName.value = ""
    lastName.value = ""
    age.value = ""
}
)



// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let dogSpeak = document.getElementById("dogSpeak");
let dogName = document.getElementById("dogName");
let dogKind = document.getElementById("dogKind");
let dogBtn = document.getElementById("dogBtn");

function Animal(name, kind){
    this.name = name;
    this.kind = kind;
    this.sayHey = function(speak){
        return `Dog ${name} says ${speak}`
    }
}
// let createdAnimal = new Animal("Jacky", "pom")
// console.log(createdAnimal)
// console.log(createdAnimal.sayHey("Hey Bro!"))

dogBtn.addEventListener("click", function(){
    let dogSpeakIn = dogSpeak.value;
    let dogNameIn = dogName.value;
    let dogKindIn = dogKind.value;
    let createdAnimal = new Animal(dogNameIn, dogKindIn)
    // let output = createdAnimal.sayHey()
    console.log(createdAnimal.sayHey(dogSpeakIn))
    dogSpeak.value = ""
    dogName.value = ""
    dogKind.value = ""
})





// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, 
//readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let bookTitle = document.getElementById("bookTitle")
let bookAuthor = document.getElementById("bookAuthor")
let readingStatus = document.getElementById("readingStatus")
let bookBtn = document.getElementById("bookBtn")



function Book(title, author){
    this.title = title;
    this.author = author;
    // this.status = status;
    this.isTheBookRead = function(status){
        if(status === "true"){
            return `Already read ${this.title} by ${this.author}`
        }else if(status === "false")
        return `You still need to read ${this.title} by ${this.author} `
    }
}

// let bookOne = new Book ("naslov", "avtor")
// console.log(bookOne.isTheBookRead("false"))
bookBtn.addEventListener("click", function(){
    let bookTitleIn = bookTitle.value;
    let bookAuthorIn = bookAuthor.value;
    let readingStatusIn = readingStatus.value;
    let bookStatus = new Book(bookTitleIn, bookAuthorIn)
    let output = bookStatus.isTheBookRead(readingStatusIn)
   console.log(output)
   bookTitle.value = ""
   bookAuthor.value = ""
   readingStatus.value = ""
})


