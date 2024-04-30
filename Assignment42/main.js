/*
Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase
the Great to each magician’s name. Call show_magicians() to see that the list has actually
been modified.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magicians = ['Ali', 'Amir', 'Taha', 'Sami'];
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
    Magicians.splice.apply(Magicians, __spreadArray([0, Magicians.length], make_great, false));
}
call_Magicians(Magicians);
show_magicians(Magicians);
