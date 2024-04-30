/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default 
with a message that reads I love TypeScript. Make a large shirt and a medium shirt 
with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size:string = 'large' , message: string = ' I love TypeScript'){
 console.log(`The size of the shirt is ${size} and the printed logo will be ${message}`)
     }
    
     let size_1 = 'small';
    
     let message_1 = 'This is a shirt'
    
    make_shirt(size_1,message_1);
    
     
     make_shirt('medium' , 'This is a great shirt');
