/*Name Cases: Store a person’s name in a variable, 
and then print that person’s name in lowercase, uppercase, and titlecase.*/

let fname = "Ali"

console.log(fname.toLowerCase());

let cname = "Usama"

console.log(cname.toUpperCase());

let dname = "ali";

console.log(dname.replace(/\b\w/g,c=>c.toUpperCase()));

