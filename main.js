// Exercice 1 XP



const people = ["Greg", "Mary", "Devon", "James"];
//1
people.shift()
//2
people.splice(2, 1,"Jason");
//3
people.push('Akou')
//4
people.indexOf("Mary")
//5
people.slice(0,-1)

let LastElement= people[people.length-1]

// Partie II - Boucles
for (let i = 0; i < people.length; i++) {
        const element = people[i];
        console.log(element)
    }
// À l'aide d'une boucle, parcourez le people tableau et console.log chaque personne.
for (let i = 0; i < people.length; i++) {
    if (people[i] == "Jason") { break; } 
        const element = people[i];
        console.log(element)
    }

// Exercice 2

let colors = ["Bleue","Yellow","Red","Pink","Green"];
for (let i = 0; i < colors.length; i++) {
    const element = colors [i];
    console.log(`mon ${i} choix est  ${colors [i]}`)
}

//exercice 3

// do {
// let donne = prompt("entrez du texte")
// typeof(donne)
    


// let value = '';
// let i = 0;
i=0
do {
  i = i + 1;
let value = prompt("entrez du texte")
typeof(value)
} while (i < 10);


// exercice 4
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

console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor +building.numberOfAptByFloor.thirdFloor)
console.log("le nom du Deuxieme locataire est "+building.nameOfTenants[1]+" qui possede "+building.numberOfRoomsAndRent.dan[0]+"appartements")
// console.log(bui) somme loyer demain



//exercice 5
const familly = {
    men: 5,
    woman:2, 
    oncle:3,
    tante:4,
    titi:7
    }

    for (const x in familly) {
 
            const element = Object.keys(familly);
            console.log(element)
        
    }

    for (const y in familly) { 
            const element = Object.values(familly);
            console.log(element)
            
        
    }



//Exercise 6 : Rudolf
//Instructions
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
        

// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”



// Exercise 7 : Secret Group
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