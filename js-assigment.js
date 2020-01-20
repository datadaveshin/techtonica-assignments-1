// JS Practice 
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


//Writing Readable Code
// Write a function to find largest number of 3 integers.

function findMax(n1, n2, n3){
   let maxResult=Math.max(n1,n2,n3);
    return maxResult;
}
 console.log(`The max number is :  ${findMax(2,6,4)}`);

// Write a function to find if a word has at least 10 letters or not
function bigWord(string){
    if (string.length>=10){
        return true;
    }else{
        return false;
    }
}

console.log(`The string has at 10 letter is ${bigWord("Happy Holiday")}`);
console.log('The string has less 10 letter is '+ bigWord("hello"));

//Practice for Reading & Writing Documentation
//Practice using .concat(), .fill() method, and .reverse() method

//Practice on .concat() method
  const newAnimals=["cat","dog","rabbit","dragon"];
  const numbers=[1,2,3,4,5];
  const weekdays=["Monday", "Tuesday", "Wednesday","Thursday", "Friday"];
   
  let newArray=newAnimals.concat(numbers, weekdays);
  console.log(newArray)
  
//Practice on .fill() method & using same variable array in .concat practice
let modifyArray=newAnimals.fill("Snake", 1, 4);
console.log(modifyArray)
  
//Practice on .reverse() method & using same variable array in .concat practice
console.log(newAnimals.reverse());


//1. Challenge for sloving Coding Challenge topic
//create a function call squareMax and return the max of two parameters

function squareMax(n,m){
    let multiplicationOfM=m * m;
    let multiplicationOfN=n*n;
    console.log(Math.max(multiplicationOfM,multiplicationOfN));

}
squareMax(1,2)