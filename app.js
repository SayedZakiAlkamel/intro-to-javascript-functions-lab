/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

/*
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
/*


Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

/*
function isAdult( age ) {
    if (age && age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(1));
console.log('Exercise 2 Result:', isAdult());
*/

//------------------------------------------------------------

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
/*
function isCharAVowel(char) {
    if (char === null || char.length !== 1) {
        return false; // Handle null or non-single-character input
    }
    const lowerChar = char.toLowerCase(); // Case-insensitive check
    return "aeiou".includes(lowerChar); // More efficient vowel check
}


console.log('Exercise 3 Result:', isCharAVowel("a")); // true
console.log('Exercise 3 Result:', isCharAVowel("A")); // true
console.log('Exercise 3 Result:', isCharAVowel("b")); // false
console.log('Exercise 3 Result:', isCharAVowel("y")); // false
console.log('Exercise 3 Result:', isCharAVowel("E")); // true
console.log('Exercise 3 Result:', isCharAVowel("")); //false (empty string)
console.log('Exercise 3 Result:', isCharAVowel("ab")); //false (multiple characters)
console.log('Exercise 3 Result:', isCharAVowel(null)); //false (null input)

*/

/*
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
//function generateEmail()

function generateEmail(name, domain) {
  return name + "@" + domain;
}


console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
console.log('Exercise 4 Result:', generateEmail("rebortocarlos", "company.net")); // Added test case
console.log('Exercise 4 Result:', generateEmail("zakialkamel", "hotmail.com")); // Added test case


//console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/





// function maxOfThree(numOne, numTwo, numThree){
//   if(numOne > numTwo && numOne > numThree) {
//     return numOne;
//   } else if (numTwo > numOne && numTwo > numThree) {
//     return numTwo;
//   } else {
//     return numThree;
//   }
// }

// console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
// console.log('Exercise 6 Result:', maxOfThree(17, 4, 9));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

// function calculateTip( amount, percentage) {
   
//   var amountTip = amount*(percentage/100) 
//   console.log(amountTip)

// }

//  calculateTip(50, 20)


//console.log('Exercise 7 Result:', calculateTip(50, 20));


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/



/*console.log('Exercise 8 Result:', convertTemperature(32, "C")); */


// function convertTemperature(temperature, scale) {
//   if (scale === 'C') {
//     return temperature * 9 / 5 + 32;
//   } else if (scale === 'F') {
//     return (temperature - 32) * 5 / 9;
//   } else {
//     return "Invalid scale. Please use 'C' or 'F'."; // Handle invalid input
//   }
// }

// console.log('Exercise 8 Result:', convertTemperature(32, "C")); // Output: 89.6
// console.log('Exercise 8 Result:', convertTemperature(32, "F")); // Output: 0
// console.log('Exercise 8 Result:', convertTemperature(100, "C")); // Output: 212
// console.log('Exercise 8 Result:', convertTemperature(212, "F")); // Output: 100
// console.log('Exercise 8 Result:', convertTemperature(25, "K")); // Output: Invalid scale. Please use 'C' or 'F'.


/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/


// function basicCalculator(num1, num2, operation) {
//   switch (operation) {
//     case 'add':
//       return num1 + num2;
//     case 'subtract':
//       return num1 - num2;
//     case 'multiply':
//       return num1 * num2;
//     case 'divide':
//       if (num2 === 0) {
//         return "Cannot divide by zero."; // Handle division by zero
//       }
//       return num1 / num2;
//     default:
//       return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
//   }
// }

// console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract")); // Output: 5
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "add"));      // Output: 15
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));   // Output: 50
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "divide"));     // Output: 2
// console.log('Exercise 9 Result:', basicCalculator(10, 0, "divide"));     // Output: Cannot divide by zero.
// console.log('Exercise 9 Result:', basicCalculator(10, 5, "power"));      // Output: Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.
