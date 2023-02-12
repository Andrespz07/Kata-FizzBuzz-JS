
export function FizzBuzzFunction(index){

       let contains =  index.toString()

    if (index % 3 == 0 && index % 5 == 0) {
        return "FizzBuzz";
        
    }  
    if (index % 3 == 0 || contains.includes("3") ){
        return "Fizz";
    }
     if (index % 5 == 0 || contains.includes("5")){
    return "Buzz";
    }
    if(index % 5 != 0 && index % 3 != 0){
        return contains;
    }
    }

    
