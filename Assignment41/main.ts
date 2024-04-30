/*
Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let Magicians = ['Danish','Ahsan','Ali']

function show_magicians(Magicians:string[]){
     for(let i of Magicians){
      console.log(i)
     }
}
show_magicians(Magicians);