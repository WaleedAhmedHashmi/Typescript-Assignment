/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least
three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner

*/
var guest_list = ["Hamza", "Tausif", "Omais"];
for (var _i = 0, guest_list_1 = guest_list; _i < guest_list_1.length; _i++) {
    var names = guest_list_1[_i];
    console.log("I would like to invite ".concat(names));
}
