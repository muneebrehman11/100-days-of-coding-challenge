// Day-06
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
// Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.
// continued from Q-15
var guests1 = ['fahad', 'hasan', 'danish'];
console.log("dear freinds i've found a bigger dinner table, so i'm inviting more guests for dinner");
guests1.unshift('adam'); //adding guest at the beginning of the list
guests1.splice(2, 0, 'umar'); //adding guest at the middle of the list
guests1.push('rehan'); //adding guest at the end of the list
guests1.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", I'm, inviting you for dinner tonight"));
});
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.
console.log("\n\nUnfortunately, the new table won't arrive in time, so i can invite only two guests");
while (guests1.length > 2) {
    var removed_guests = guests1.pop();
    console.log("sorry dear ".concat(removed_guests, ", i can't invite you for the dinner!"));
}
guests1.forEach(function (guests) {
    console.log("dear ".concat(guests, ", you're still invited for the dinner!"));
});
// Question 18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('\n\n'); // for creating gape between the questions
var fav_places = ['makkah', 'madina', 'paris', 'london', 'switzerland', 'japan'];
console.log('original order:', fav_places);
console.log('Alphabetical order:', __spreadArray([], fav_places, true).sort());
console.log('original order:', fav_places);
console.log('reverse alphabetical order:', __spreadArray([], fav_places, true).reverse());
console.log('original order:', fav_places);
fav_places.reverse();
console.log('reversed order:', fav_places);
fav_places.reverse();
console.log('reversed and back to the original order', fav_places);
fav_places.sort();
console.log('stored in alphabetical order', fav_places);
fav_places.reverse();
console.log(fav_places);
