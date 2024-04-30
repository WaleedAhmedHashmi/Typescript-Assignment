/*
Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store
it in a separate array. Call show_magicians() with each array to show that you
have one array of the original names and one array with the Great added to each magician’s name.
*/
var Magicians = ['Amir', 'Ali', 'Raza', 'Sami'];
function call_Magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var i = Magicians_1[_i];
        console.log(i);
    }
}
function show_magicians(Magicians) {
    var make_great = [];
    for (var _i = 0, Magicians_2 = Magicians; _i < Magicians_2.length; _i++) {
        var j = Magicians_2[_i];
        make_great.push("".concat(j, " is Great"));
    }
    return make_great;
}
var copy = [Magicians];
var modification = show_magicians(Magicians);
console.log(copy);
console.log(modification);
