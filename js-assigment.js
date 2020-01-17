function calculation(first, operator, second){
    let result;
    let sqrt=Math.sqrt();
    let max=Math.max();
    let min=Math.min();
    let exponent=Math.pow();
    let pi=Math.pi;
    
    switch(operator){
        case "+":
            result=first + second;
            break;
        case "-":
            result=first - second;;
            break;
        case "*":
            result=first * second;;
            break;
        case "/":
            result=first / second;;
            break;
        case "sqrt":
        case "SquareRoot":
        case "SQRT":
            result=Math.sqrt(first);
            break;
        case "max" :
            result=Math.max(first,second);
            break;
        case "min":
            result=Math.min(first,second);
            break;
        case "exponent" :
            result=Math.pow(first,second);
            break;
        case "pi":
            result=Math.pi;
            break;
        default: 
            result = "Invalid operation or operators";

    }
    return result;
}

console.log(`The difference between two numbers is: ${calculation(4,"-",1)}`);
console.log(`The calculation of squart root is :${calculation(8, "sqrt")}` );
console.log(`The calculation of squart root is :${calculation(8, 8, 9)}`);
console.log(`The Max number is ${calculation(8,"max")}`);
console.log(`The Min number is ${calculation(8,"min",3)}`);
console.log(`The exponent result is: ${calculation(6,"exponent",7)}`);
 //challenge

//  function multiplyByTwo(n){
//    let result;
//    result=n*2;
//    return result;
// }

// console.log(multiplyByTwo(4)); */

// /* 
// function isEven(n){

// while(n<=10){
//      result+=n+ " ";
//   }return result;
//   }
// for (let i=0; i<=10; i++){
//   if(i%2===0){
//      console.log(i)
//   }
  
// }

//JS 2 exercise

function printCuteAnimals(array){
       console.log(`The length of array is : ${array.length}`);
       console.log("The length of array is : " + array.length);
       console.log(array.pop());
       console.log(`The current array is ${array}`);
        
        console.log(array.concat(newAnimal));
      
}

let animals=["cat", "dog", "rabbit"];
let newAnimal=["bird","squirl","kangroo"];
console.log(printCuteAnimals(animals));
