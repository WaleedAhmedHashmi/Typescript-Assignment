/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
You’ll have to think of someone else to invite.

*/
var guest = ["Omais", "Ali", "Mustafa"];
console.log("Hello ".concat(guest, " you all are invited to my dinner party."));
for (var _i = 0, guest_1 = guest; _i < guest_1.length; _i++) {
    var names = guest_1[_i];
    console.log(names);
}
var Mustafa1 = guest.indexOf("Mustafa");
guest[Mustafa1] = "Yasir";
console.log("Mustafa couldn't come send new list");
for (var _a = 0, guest_2 = guest; _a < guest_2.length; _a++) {
    var names = guest_2[_a];
    console.log(names);
}
