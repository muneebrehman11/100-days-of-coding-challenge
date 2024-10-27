// // Day-09
// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color == "green") {
    console.log('you earned 5 points.');
}
else if (alien_color == "red") {
    // no output.
}
// Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
// Q27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
var alien_color3 = "green";
if (alien_color2 == "green") {
    console.log("player earned 5 points");
}
else if (alien_color3 === "yellow") {
    console.log("player earned 10 points");
}
else if (alien_color3 === "red") {
    console.log("player earned 15 points");
}
// Q28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
console.log('\n\n');
var age = 10;
if (age < 2) {
    console.log("it's a baby");
}
else if (age == 2 || age < 4) {
    console.log("it's a toddler");
}
else if (age === 4 || age < 13) {
    console.log("it's is a kid");
}
else if (age === 13 || age < 20) {
    console.log("it's a teenager");
}
else if (age === 20 || age < 65) {
    console.log("it's an adult");
}
else if (age >= 65) {
    console.log("it's an elder");
}
// Q29:Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var fav_fruits = ['apple', 'banana', 'strawberry', 'watermelon', 'cherry'];
if (fav_fruits.includes("apple")) {
    console.log("such as You really like apple!");
}
if (fav_fruits.includes("banana")) {
    console.log("such as You really like banana!");
}
if (fav_fruits.includes("strawberry")) {
    console.log("such as You really like strawberry!");
}
if (fav_fruits.includes("watermelon")) {
    console.log("such as You really like watermelon!");
}
if (fav_fruits.includes("cherry")) {
    console.log("such as You really like cherry!");
}
// Q-30:Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var UserNames = ['ali', 'fahad', 'hasan', 'kashif', 'jamal', 'admin'];
for (var i = 0; i < UserNames.length; i++) {
    if (!UserNames.includes("admin")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else
        (console.log("Hello ".concat(UserNames[i], ", thank you for logging in again.")));
}
