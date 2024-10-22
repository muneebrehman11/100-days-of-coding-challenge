// Day-07

// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.

// Explain & TIP: Arrays have a length property that tells you how many items are in the list. Use this to inform your guests how big the party will be.

let guests:string[]=['tom','waseem','john','lewis','rudolf','henry','jeorj']
console.log(`i'm inviting ${guests.length} persons for the dinner`);

// Question 20: Think of something you could store in an array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

// Explain & TIP: Arrays are perfect for keeping a collection of similar items. Choose a theme you like and list several examples.

console.log('\n\n');

let cities:string[]= ['kashmeer', 'london', 'paris', 'dubai', 'instanbual']
console.log(`cities i'd like to travel ${cities}`);


// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Explain & TIP: Objects in TypeScript can store various related data about a single entity. Think of an object as a container for characteristics of something, like a book or a car.
console.log('\n\n');


let book:{
    name:String,
    author:string,
    PublishedIn:number
} = {
    name:"To Kill a Mockingbird",
    author:"Harper Lee",
    PublishedIn:1960
}

console.log(`famous book: name: ${book.name}, author:${book.author}, published in:${book.PublishedIn}`);



