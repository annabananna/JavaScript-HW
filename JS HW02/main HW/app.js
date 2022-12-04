let birthYear = prompt("Enter the birth year");
let remainder = ((birthYear - 4) % 12);

if(remainder === 0){
    console.log(`Your Chinese Zodiac Sign is: Rat`)
} else if(remainder === 1){
    console.log(`Your Chinese Zodiac Sign is: Ox`)
} else if(remainder === 2){
    console.log(`Your Chinese Zodiac Sign is: Tiger`)
} else if(remainder === 3){
    console.log(`Your Chinese Zodiac Sign is: Rabbit`)
} else if(remainder === 4){
    console.log(`Your Chinese Zodiac Sign is: Dragon`)
} else if(remainder === 5){
    console.log(`Your Chinese Zodiac Sign is: Snake`)
} else if(remainder === 6){
    console.log(`Your Chinese Zodiac Sign is: Horse`)
} else if(remainder === 7){
    console.log(`Your Chinese Zodiac Sign is: Goat`)
} else if(remainder === 8){
    console.log(`Your Chinese Zodiac Sign is: Monkey`)
} else if(remainder === 9){
    console.log(`Your Chinese Zodiac Sign is: Rooster`)
} else if(remainder === 10){
    console.log(`Your Chinese Zodiac Sign is: Dog`)
} else if(remainder === 11){
    console.log(`Your Chinese Zodiac Sign is: Pig`)
}