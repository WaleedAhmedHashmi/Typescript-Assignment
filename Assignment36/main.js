/*

T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

*/
function make_shirt(size, message) {
    console.log("The size of the shirt is ".concat(size, " and the printed logo is ").concat(message, " "));
}
var size = 36;
var message = 'This is a great shirt';
make_shirt(size, message);
