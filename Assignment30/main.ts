/*
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.
 Loop through the array, and print a greeting to each user:

*/

const users = ["Bilal","Tausif","Hamza","Ali","Admin"]

for(let i of users){
     if (i == "Admin") {
      console.log(`Hello ${i}  Would you like to see a status report?`)
     }
  else{
      console.log(`Hello ${i} thank you for logging in again`)
  }
    }