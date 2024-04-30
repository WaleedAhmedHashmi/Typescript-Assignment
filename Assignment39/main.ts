/*
City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
*/

function city_country(city:string , country: string){
        return(`${city} , ${country}`) 
    }
    
         let c1 = city_country('Lahore','Pakistan');
    
         let c2 = city_country('Perth','Australia');
    
         let c3 = city_country('Dhaka','Bangladesh')
    
    
    console.log(c1);
    console.log(c2);
    console.log(c3);