/*
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age,
*/

// If the person is less than 2 years old, print a message that the person is a baby.

let person_age = "1 year "

if (person_age < "2 years") {
   console.log("Person is a baby")
}
else{
  console.log("Person is a child")
}

// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

let person_age_1 = "2 years "

if (person_age_1 < "4 years") {
    console.log("person is a toddler")
}
else{
  console.log("Person is a child")
}

 // If the person is at least 4 years old but less than 13, print a message that the person is a kid.

let person_age_3 = "4 years"

if (person_age_3 <  "13 years") {
   console.log("person is a kid")
}
else{
  console.log("Person is a child")
}

let person_age_2 = "13 years"
if (person_age_2 < "20") {
   console.log("person is a teenager.")
}
else{
  console.log("Person is a child")
}
let person_age_4 = "20 years"

if (person_age_4 < "65") {
  console.log(" person is an adult.")
}
else{
  console.log("Person is a child")
}  

let person_age_5 = "65 years"

if (person_age_5 > "65") {
  console.log("Person is an elder")
}
else{
  console.log("Person is a child")
}