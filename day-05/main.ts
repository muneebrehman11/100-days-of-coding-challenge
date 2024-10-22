// Day-05

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Explain & TIP: Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.

let fav_mode_of_transportation: string[]= ['car','bike','bicycle']
fav_mode_of_transportation.forEach((items)=>{
    console.log(`I would like to own a ${items}`);
    
})


// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Explain & TIP: Just like with transportation, you can use an array to manage a list of guests. Loop through the list to send each one a personal invitation.

let guests:string[] =['fahad','hasan','danish'];
for(let i= 0; i < guests.length; i++){
    console.log(`Dear ${guests[i]}, I'm, inviting you for dinner tonight`);
    
}


// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

// Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations.

let guests1:string[] =['fahad','hasan','danish'];
console.log("hasan can't make it to the dinner");

guests1.splice(1,1,'noman') // replacing hasan's name with danish


for(let i= 0; i < guests1.length; i++){
    console.log(`Dear ${guests1[i]}, I'm, inviting you for dinner tonight`);
    
    
}



