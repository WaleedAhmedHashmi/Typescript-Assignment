/*
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
 Most ordinal numbers end in th, except 1, 2, and 3.

*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i in numbers) {
    if (numbers[i] == 1) {
        console.log("".concat(numbers[i], "st"));
    }
    else if (numbers[i] == 2) {
        console.log("".concat(numbers[i], "nd"));
    }
    else if (numbers[i] == 3) {
        console.log("".concat(numbers[i], "rd"));
    }
    else {
        console.log("".concat(numbers[i], "th"));
    }
}
