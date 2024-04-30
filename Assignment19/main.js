/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 print a message indicating the number of people you are inviting to dinner.
*/
var guest_list = ["Ali", "Zia", "Raza"];
var members = 0;
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var names = guest_list_1[_i];
    members = members + 1;
}
console.log("Total of ".concat(members, " , peoples are invited "));
