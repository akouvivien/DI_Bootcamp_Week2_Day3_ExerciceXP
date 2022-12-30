// ***********🌟 Exercise 1 : List Of People****************
// Instructions

// const people = ["Greg", "Mary", "Devon", "James"];
const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift()
// Write code to replace “James” to “Jason”.
people.splice(2, 1,"Jason")
// Write code to add your name to the end of the people array.
people.push('Akou')
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
people.indexOf("Mary")
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
people.slice(0,-1)

// Write code that gives the index of “Foo”. Why does it return -1 ?
people.indexOf("Foo")
//-1 if the value is not found
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let LastElement= people[people.length-1]



// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
    const element = people[i];
    console.log(element)
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let i = 0; i < people.length; i++) {
    if (people[i] == "Jason") { break; } 
        const element = people[i];
        console.log(element)
    }



// ************🌟 Exercise 2 : Your Favorite Colors***********
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
let colors = ["Bleue","Yellow","Red","Pink","Green"];
for (let i = 0; i < colors.length; i++) {
    const element = colors [i];
    console.log(`My ${i} choice is  ${colors [i]}`)
}

// ************🌟 Exercise 3 : Repeat The Question********
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

i=0
do {
  i = i + 1;
let value = prompt("entrez du texte")
typeof(value)
} while (i < 10);


// ************🌟 exercice 4********
// Review About Objects
// Copy and paste the above object to your Javascript file.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors)
// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor +building.numberOfAptByFloor.thirdFloor)
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("le nom du Deuxieme locataire est "+building.nameOfTenants[1]+" qui possede "+building.numberOfRoomsAndRent.dan[0]+"appartements")
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// ************🌟 Exercise 5 : Family********
// Instructions
// Create an object called family with a few key value pairs.

const familly = {
    men: 5,
    woman:2, 
    oncle:3,
    tante:4,
    titi:7
    }
// Using a for in loop, console.log the keys of the object.
for (const elements in familly) { 
    console.log(elements)          
}
    
    
// Using a for in loop, console.log the values of the object.
for (const element in familly) {
 
    const elements = familly[element]; 
    console.log(elements)
}

// ************🌟 Exercise 6 : Rudolf********
//Instructions
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

texte =""
    for (const i in details) {
    texte = texte + i +" " + details[i] +" "
        
    }
console.log(texte)
        
// ************🌟 Exercise 7 : Secret Group********
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
texte =""
    for (const i in names) {
        texte = texte +  names[i].charAt(0)
            
        }
console.log(texte)