// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Echo 2022"
console.log(cohort.split(""))

// a) Your answer: The split method called on the cohort string will result in an array of characters from that string. It will output like:
// ['E', 'c', 'h', 'o', ' ', '2', '0', '2', '2']
// b) Verify and explain: In the MDN documentation and from my own personal experience using the split method several times to solve leetcode problems, I know that the split method returns a new array if called on a string. because "" was used as the separator, the string will be split on every character.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: There is no return keyword inside of the greeter function. Due to there being no return value, greeter will return undefined. 
// b) Verify and explain: Though the function's logic is sound, if we don't give a value to be returned, logging it into the console shows nothing, as there is no actual value to be returned. 


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map(number => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The map method is being called on the array of [4,5,6,7,8]. This will return a new array with whatever argument we want to pass into the method. The word 'number' is being used as the keyword for each value in the array (remembering the parameter syntax for higher order functions is generally (element, index, array)). The new array being returned will be each number in the passed in array multiplied by two. 


// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter(number => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Remembering our parameter syntax for higher order functions is (element, index, array), we can see that 'number' is the keyword being used to represent each element in the new array that will be returned. The filter method returns to us a new array that meets the criteria of the argument being passed in (giving a 'true' value). Because 11, 13, and 15 would return true to being odd numbers, they are the only values returned inside of the new array. The 'even' values are filtered out.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript" will be returned.
// b) Verify and explain: Objects can be accessed using dot notation, so the languages property on the myCodingSkills object is the first item being accessed. Due to the languages property containing an array within it, we can access the first value within the array by calling the array on [0]. This returns "JavaScript". To make this easier to read and create a step-by-step process, we could create our own set of variables as such:


// let codingLanguages = myCodingSkills.languages;  // this gives us our array of languages, accessing the languages property on myCodingSkills
// let jsLanguage = codingLanguages[0];  // this accesses the first item in the array

// console.log(jsLanguage)


// Breaking it down like this can make accessing properties much easier to understand and decipher.



// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Echo",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: learnStudent is creating a new instance of the Learn class. We are giving "George" as the argument for "name" in the constructor method and that will be used as the value for the student property. The console will log our new object with the student property being "George". All other properties are already declared as "Echo" and 2022 respectively. It will look like :

// Learn {
  // student: "George",
  // cohort: "Echo",
  // year: 2022
// }

// b) Verify and explain: We are logging the learnStudent object that was created with the Learn class. Classes allow us to create templates or "blueprints" for new objects to be created with.