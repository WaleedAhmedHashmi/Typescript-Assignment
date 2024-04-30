/*Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase, and titlecase.*/
var fname = "Ali";
console.log(fname.toLowerCase());
var cname = "Usama";
console.log(cname.toUpperCase());
var dname = "ali";
console.log(dname.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
