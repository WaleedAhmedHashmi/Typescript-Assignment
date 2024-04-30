/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.

*/

let guest = ["Omais","Ali","Mustafa"];

console.log(`Hello ${guest} you all are invited to my dinner party.`);

for(let names of guest){
     console.log(names)
}

let Mustafa1 = guest.indexOf("Mustafa")
guest[Mustafa1] = "Yasir";

console.log("Mustafa couldn't come send new list")

for(let names of guest){
     console.log(names)
}