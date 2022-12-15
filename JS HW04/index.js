// STUDENT EXERCISE - #1
// FIND NUMBERS IN ARRAY
// How many times is a number contained in an array

// Write a function named findNumber that:
// Takes 2 arguments: number, array
// Calculates how many times the number is contained in an array with numbers
// Outputs the result to the screen like so: "There is 4 occurrences of number 5 in the array"
// Call the function three times with different arrays.

function findNumbers(number, array){
    let occurencies = 0;
    for (i=0; i < array.length; i++){
        if(array[i] === number)
        occurencies++;
    }
    return occurencies
}
let inputNumber = 10;
let testArray = [10, 2, 3, 5, 10, 59, 7, 100];

console.log(`There are ${findNumbers(inputNumber,testArray)} occurencies of number ${inputNumber} in the array`);


// FILTER ODD/EVEN NUMBERS FUNCTION  
// Write a function named findNumber that:
// Takes 2 arguments: array, type
// The person that calls the function should provide an array of numbers and string odd / even
// If the type is even the function should find all the even numbers and return them as result
// If the type is odd the function should find all the odd numbers and return them as result

function findNumber2(array){

  let myType = ""

    // if(type === even){
      for(let i=0; i < array.length; i++){
        if(array[i] % 2 === 0){
          myType += `the number ${array[i]} is even `;
        }
        else if(array[i] % 2 !== 0){
          myType += `the number ${array[i]} is odd `;
        }
      }
      return myType
    // }
}

let testArray2 = [10, 2, 3, 5, 10, 59, 7, 100];
let output = findNumber2(testArray2)

console.log(output)


function findNumber3(array, type){

    result = [];
    if(type === 'even'){
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 === 0){
                result +=  `the number ${array[i]} is even `;
            }
        }
        return result;

    }else if(type === 'odd'){
        for(let i = 0; i < array.length; i++){
            if(array[i] % 2 !== 0){
                result +=  `the number ${array[i]} is odd `;
            }
         }
        }
        return result;
    }

    let inputArray3 = [3, 5, 6, 8, 7, 10, 11]
    let inputType = "odd";
    let outputFunction = findNumber3(inputArray3, inputType);
    console.log(outputFunction);


// HOMEWORK #1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert

function tellStory(arrayOfStrings){

  let bigString = "";

  for(let i = 0; i < arrayOfStrings.length; i++){
    bigString = `This is ${arrayOfStrings[0]}. ${arrayOfStrings[0]} is a nice person. Today he is ${arrayOfStrings[1]}. They are ${arrayOfStrings[2]} all day. The end.`
  }
  return bigString;
}

let myStory = ["Bob", "happy", "watching movies"]
console.log(tellStory(myStory))


// HOMEWORK #2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number.
// If one of the numbers of the array is invalid show an error message instead of a result.


function returnSum(arrayOfNumbers){
sum = 0;
  for(let i = 0; i < arrayOfNumbers.length; i++){
      sum += arrayOfNumbers[i];
  }
  return sum;
}

let inputNumberArray = [10, 20, 30, 40, 50];
let totalSum = returnSum(inputNumberArray);
console.log("Sum is: ",totalSum)

//BONUS

// function validateNumber(arrayOfNumbers){
//   sum = 0;
//     for(let i = 0; i < arrayOfNumbers.length; i++){
//       if( isNaN(arrayOfNumbers[i]) == false){
//         sum += arrayOfNumbers[i];
//         return sum;
//       }else if (isNaN(arrayOfNumbers[i]) == true){
//         return `Error`
//       }
//     }
//   }
  
//   let inputNumberArray2 = [10, ana, 30, 40, 50];
//   let totalSum2 = validateNumber(inputNumberArray2);
//   console.log("Sum is: ",totalSum2)


function validateNumber(arrayOfNumbers){
  sum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
      if( typeof(arrayOfNumbers[i]) === 'number'){
        sum += arrayOfNumbers[i];
        return sum;
      }else if (typeOf(arrayOfNumbers[i]) !== 'number'){
        return `Error`
      }
    }
  }
  
  let inputNumberArray2 = [10, 20, 30, 40, 50];
  let totalSum2 = validateNumber(inputNumberArray2);
  console.log("Sum is: ",totalSum2)



// HOMEWORK #3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"


function helloStudents(studentsArray){

  let concString = "";

  for(let i = 0; i < studentsArray.length; i++){
    concString += String(`${studentsArray[i]}`);
  }
  return concString
}

let inputArray = ["Hello ","there ", "students ", "of ", "SEDC!", ];
console.log(helloStudents(inputArray));


// HOMEWORK #4
// Title: Looping structures

// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, 
// and will add the "\n" new line after every even number otherwise it will add " " empty space.


function printNumbers(){
  let i = 1;
  while(i <= 20){
    if(i % 2 === 0){
      console.log(`${i}\n`);
    }
    else if(i % 2 !== 0){
      console.log(`${i} `)
    }
    i++
  }
} 
printNumbers()



// HOMEWORK #5
// Title: Looping structures

// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it

function minMax(array){
  let min = array[0];
  let max = array[0];
  for(let i = 1; i < array.length; i++){
    if(array[i] > max){
      max = parseFloat(array[i]);
    } else if(array[i] < min){
      min = parseFloat(array[i]);
    }
    sum = min + max;
  }
  return `Min: ${min}, Max: ${max}, Sum: ${sum}`;
}

let numArray = [3, 5, 11, 8, 6, 12, "1+ana", "true"];
let minMaxSum = minMax(numArray)
console.log(minMaxSum)




// HOMEWORK #6
// Title: Looping structures

// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

function firstLastName(firstArray, secondArray){
fullName = [];
  for(let i = 0; i < firstArray.length; i++){
    fullName[i] = `${i + 1}.` + (firstArray[i] + secondArray[i])
  }
  return fullName;
}
let firstNameArray = ["Bob", "Jill", "John"];
let secondNameArray = ["Gregory", "Wurtz", "Wick"];
let concName = firstLastName(firstNameArray, secondNameArray);
console.log(concName);