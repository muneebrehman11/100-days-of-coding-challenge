// Day-08

// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.

// Explain & TIP: Array index errors happen when you try to access a position in the array that doesn’t exist. Experimenting with this helps you understand array boundaries.

let array: string[]=['a', 'b', 'c', 'd']
console.log(array[4]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
console.log(array[3]); // Correcting the error by accessing a valid index.

// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

// Explain & TIP: Conditional tests check if something is true or false. Writing different tests helps you understand how conditions work in programming.
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // True

console.log("Is car == 'toyota'? I predict False.");
console.log(car == 'toyota'); // False

// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Example Test
let car1 = 'subaru';
console.log("Is car == subaru? I predict True");
console.log(car == 'subaru');

//Test #01:
let israel= 'terrorist';
console.log("Israel === terrorist state");
console.log(israel === "terrorist"); //true

//Test #02:
let imranKhan='Unbeatable';
console.log('is imranKhan == Unbeatable? Absolutely true');
console.log(imranKhan == 'Unbeatable'); //true

//Test #03:
let favouritePlace='Makkah';
console.log('is your favPlace == Makkah? True');
console.log(favouritePlace == "Makkah"); //true

// Test #04:
let pakistan='beautifull';
console.log("is pakistan == beautifull country?");
console.log(pakistan == "beautifull"); // true

//Test #05:
let srilanka = "Defaulted"
console.log("is srilanks == Defaulted country?");
console.log(srilanka == "Defaulted");

// Test #06:
let ali= 'Rs 50';
let hassan= 'Rs 20';
console.log('hassan has more rupees than ali?');
console.log(ali < hassan); //false

// Test #07:
let apples= 100;
let oranges= 50;
console.log('is aaples price is same as oranges prices?its False');
console.log(apples==oranges);  // False

// Test #08:
let biryani = "favourite"
console.log("biryani is != favourite dish?");
console.log(biryani != "favourite"); //false

// Test #09:
let kamran = "10 Rs";
let zubair = "20 Rs";
console.log("kamran has more rupees than zubair?");
console.log(kamran > zubair); //False

// test #10:
let irtaza= 19
let zakir= 21
console.log("Are Irtza == Zakir the same age?"); 
console.log(irtaza == irtaza);  //false



// 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

console.log('\n\n • Tests for equality and inequality with strings');
console.log('apple' === 'apple'); // true
console.log('Apple' !== 'Apple'); // false

console.log("\n\n • Tests using the lower case function");
console.log("LAPTOP".toLowerCase() === "laptop"); // true
console.log("laptop".toUpperCase() === "laptop"); // false


console.log("\n\n • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");

// Numerical tests
console.log(10 > 5); // True
console.log(2 < 1); // False

// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true , false); // True

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True

// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True











