/*
    
    Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
    The text of each message should be the same, but each message should be personalized with the person’s name.


*/
var fry = ["nayab", "tausif", "bilal"];
var message = "Ali welcome back !!!";
for (var _i = 0, fry_1 = fry; _i < fry_1.length; _i++) {
    var fname = fry_1[_i];
    console.log("".concat(fry, ",").concat(message));
}
