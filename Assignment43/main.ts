/*
Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store 
it in a separate array. Call show_magicians() with each array to show that you 
have one array of the original names and one array with the Great added to each magician’s name.
*/

const Magicians = ['Amir','Ali','Raza','Sami']

function call_Magicians(Magicians:string[]) {
   for(let i of Magicians) {
    console.log(i)
   }
}

function show_magicians(Magicians:string[]) {
   let make_great = [] 
   for(let j of Magicians) {
     make_great.push(`${j} is Great`)
   }
   return make_great
  
     }
   const copy = [Magicians]
   
   const modification = show_magicians(Magicians)


console.log(copy);
console.log(modification);

