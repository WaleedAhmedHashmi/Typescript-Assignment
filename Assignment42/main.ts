/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase
the Great to each magician’s name. Call show_magicians() to see that the list has actually 
been modified.
*/

const Magicians = ['Ali' , 'Amir' , 'Taha' , 'Sami']

function call_Magicians(Magicians:string[]) {
    for(let i of Magicians){
      console.log(i)
    }
}
  function show_magicians(Magicians:string[]) {
    let make_great = [] 
    for(let j of Magicians){
       make_great.push(`${j} is Great`)
    }
    Magicians.splice(0 , Magicians.length , ... make_great)
  }
call_Magicians(Magicians);
show_magicians(Magicians);