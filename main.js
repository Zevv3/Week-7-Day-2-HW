//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

const person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
// for (const property in person3){
//     console.log(`${property}: ${person3[property]}`);
// }

// for (let [property, element] of Object.entries(person3)){
//     if (typeof element == 'object'){
//         for (property in person3){
//             console.log(`${property}: ${element}`);
//         }
//     }else{
//         console.log(`${property}: ${element}`);
//     }
// }

for (let i = 0; i < Object.keys(person3).length; i++){
    if (typeof Object.values(person3)[i] == 'object'){
        console.log(Object.entries(person3)[i]);
    }else{
        console.log(Object.values(person3)[i]);
    }
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`${this.name} is ${this.age} years old`);
    }

    this.increaseAge = (increase) => {
        this.age += increase;
        console.log(`${this.name} is now ${this.age} years old`);
    }
}

let jim = new Person('Jim', 56);
jim.printInfo()
jim.increaseAge(1)
jim.increaseAge(6)
// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log
    "Small Number"
*/

const checkString = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length >= 10){
            resolve(console.log("Big Word"));
        }else{
            reject(console.log("Small Number"));
        }
    })
}

checkString('jds')
checkString('asdfasfearerwerwreew')