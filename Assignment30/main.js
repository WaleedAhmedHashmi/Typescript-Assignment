/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:

*/
var users = ["Bilal", "Tausif", "Hamza", "Ali", "Admin"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var i = users_1[_i];
    if (i == "Admin") {
        console.log("Hello ".concat(i, "  Would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(i, " thank you for logging in again"));
    }
}
