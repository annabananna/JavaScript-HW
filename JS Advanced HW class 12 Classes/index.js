// Create a class Animal that has:
// name
// type - carnivore/herbivore/omnivore
// age
// size
// eat - a method that checks if the input is an Animal.

// If the input is an Animal and If this object animal is herbivore write in the console: 
// The animal ( this animal name ) is a herbivore and does not eat other animals

// If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: 
// The animal (this animal name) ate the (the input animal name).

// If the animal is twice as large or larger than this animal than just log in the console:
//  The animal (this animal name) tried to eat the (the input animal name) but it was too large.

// If the input is not an animal just write: The animal (this animal name) is eating (the input).
// isEaten = default false


class Animal {
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }

    eat(input){
        if(input instanceof Animal){
            if(this.type === "herbivore"){
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
            }
            else if(this.type !== "herbivore"){
                this.isEaten = true;
                console.log(`The animal ${this.name} ate the ${input.name}`);
            }
            if(input.size >= 2 * this.size){
                console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large`)
            }
        }else
        console.log(`The animal ${this.name} is eating`, input)
    }
}

const bear = new Animal ("Boo Boo", "omnivore", 20, 600);
const elephant = new Animal ("Ella", "herbivore", 15, 2000);
const lion = new Animal ("Simba", "carnivore", 5, 180);


console.log(bear);
console.log(elephant);
console.log(lion);
elephant.eat(bear);  // The animal Ella is a herbivore and does not eat other animals
bear.eat(elephant); // The animal Boo Boo ate the Ella
                    // The animal Boo Boo tried to eat the Ella but it was too large

lion.eat(bear);    // The animal Simba ate the Boo Boo
                   // The animal Simba tried to eat the Boo Boo but it was too large
                   
class Dog {
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
    }
}     

const dog = new Dog ("Maks", "German Shepherd", 8, 30);

lion.eat(dog); // The animal Simba is eating Dog {name: 'Maks', type: 'German Shepherd', age: 8, size: 30}






