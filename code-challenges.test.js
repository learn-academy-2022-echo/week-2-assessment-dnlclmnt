// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

describe("multThree", () => {
    it("takes array of numbers and returns array with numbers multiplied by 3", () => {
        expect(multThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(multThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})


// b) Create the function that makes the test pass.


const multThree = (arr) => {
    return arr.map(num => num * 3)
}


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 =  { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisByThree", () => {
    it("takes an object as an argument and decides if the number inside it is evenly divisible by three", () => {
        expect(divisByThree(object1)).toEqual("15 is divisible by three")
        expect(divisByThree(object2)).toEqual("0 is divisible by three")
        expect(divisByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// GOOD FAIL:

// FAIL  ./jest.test.js
// divisByThree
//   ✕ takes an object as an argument and decides if the number inside it is evenly divisible by three
// ● divisByThree › takes an object as an argument and decides if the number inside it is evenly divisible by three
//   ReferenceError: divisByThree is not defined


// // b) Create the function that makes the test pass.

// Create a function that takes in an object
    // We will use destructuring to access the number of the object, but not entirely useful
// conditional statement for obj.number % 3 to strictly equal 0
    // if conditional is true, return number is divisible by three
        // else return number is not divisible by three

const divisByThree = ({number} = obj) => {
    if (number % 3 === 0) {
        return `${number} is divisible by three`
    } else {
        return `${number} is not divisible by three`
    }
}

// PASS  ./jest.test.js
// divisByThree
//   ✓ takes an object as an argument and decides if the number inside it is evenly divisible by three (2 ms)

////////////////////////////////////////////////////////////////////////////

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("capitalizeFirstLetters", () => {
    it("takes in an array of words and returns an array with all words capitalized", () => {
        expect(capitalizeFirstLetters(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizeFirstLetters(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

//GOOD FAIL: 
// FAIL  ./jest.test.js
// capitalizeFirstLetters
//   ✕ takes in an array of words and returns an array with all words capitalized (1 ms)

// ● capitalizeFirstLetters › takes in an array of words and returns an array with all words capitalized

//   ReferenceError: capitalizeFirstLetters is not defined

// b) Create the function that makes the test pass.

//create function that takes an array of strings
// either make new empty array to push into or use map method
// iterate over array
// return result
//continuing with the map method
    // use toUpperCase() method on each word at index 0 to capitalize the first letter
    // chain with slice method to add the rest of the word to the capitalized letter

const capitalizeFirstLetters = (arr) => arr.map(word => word[0].toUpperCase() + word.slice(1))

// PASS  ./jest.test.js
// capitalizeFirstLetters
//   ✓ takes in an array of words and returns an array with all words capitalized (4 ms)
///////////////////////////////////////////////////////////////////

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// // Expected output: 1
const vowelTester2 = "academy"
// // Expected output: 0
const vowelTester3 = "challenges"
// // Expected output: 2

describe("vowelIndexer", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(vowelIndexer(vowelTester1)).toEqual(1)
        expect(vowelIndexer(vowelTester2)).toEqual(0)
        expect(vowelIndexer(vowelTester3)).toEqual(2)
    })
})

//GOOD FAIL:
// FAIL  ./jest.test.js
// vowelIndexer
//   ✕ takes in a string and logs the index of the first vowel

// ● vowelIndexer › takes in a string and logs the index of the first vowel

//   ReferenceError: vowelIndexer is not defined


// b) Create the function that makes the test pass.

// create function that takes in a string
// create an array of vowels to test over
// create a for loop to iterate over the string
    // now create another for loop to iterate over the vowels
        // LOGIC: if the first item in the string is equal to the first item in the vowel array, return index of letter in string. if not, the second for loop will iterate again to check the first letter with the next letter in the vowels array. it will iterate over the whole vowels array before going on to the next letter in the passed in string to repeat the process. 
        // return i (returning the index of the letter in the string)

const vowelIndexer = (str) => {
    let vowels = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                return i
            }
        }
    }
}


// PASS  ./jest.test.js
// divisByThree
//   ✓ takes an object as an argument and decides if the number inside it is evenly divisible by three (3 ms)
// capitalizeFirstLetters
//   ✓ takes in an array of words and returns an array with all words capitalized
// vowelIndexer
//   ✓ takes in a string and logs the index of the first vowel

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.547 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.93s.
