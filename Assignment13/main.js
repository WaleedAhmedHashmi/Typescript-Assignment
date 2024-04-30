/*
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
 Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var favourite = ["Honda", "Audi", "Mercedez"];
for (var _i = 0, favourite_1 = favourite; _i < favourite_1.length; _i++) {
    var names = favourite_1[_i];
    console.log("I would like to own a ".concat(names));
}
