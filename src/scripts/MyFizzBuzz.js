
function MyFizzBuzzFunction(index){
   

    for (let index = 1; index <= 100; index++){
       let contains =  index.toString()

    if (index % 3 == 0 && index % 5 == 0) {
        console.log("FizzBuzz");
        
    }  
    if (index % 3 == 0 || contains.includes("3") ){
        console.log("Fizz");
    }
     if (index % 5 == 0 || contains.includes("5")){
    console.log("Buzz");
    }
    if(index % 5 != 0 && index % 3 != 0){
        console.log(index);
    }
    }

    
    
}

MyFizzBuzzFunction()