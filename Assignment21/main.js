/*
They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.
*/
var Person = {
    name: "Ali",
    age: 25,
    job: "Software House",
    address: {
        city: "Karachi",
        country: "Pakistan",
        Area: "Saddar"
    }
};
console.log(Person.address.city);
Person.address.city = "Lahore";
console.log(Person.address.city);
