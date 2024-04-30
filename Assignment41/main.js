/*
Magicians: Make a array of magician’s names.
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
var Magicians = ['Danish', 'Ahsan', 'Ali'];
function show_magicians(Magicians) {
    for (var _i = 0, Magicians_1 = Magicians; _i < Magicians_1.length; _i++) {
        var i = Magicians_1[_i];
        console.log(i);
    }
}
show_magicians(Magicians);
