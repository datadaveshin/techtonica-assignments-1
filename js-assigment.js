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


//Practice for Testing Mindset Topic
//1.writing a function to testing two numbers if the first number larger than the second number.
function testingTheLargestNum (num1, num2){
    if(num1>num2){
        return true;
    }else {
        return false;
    }
}
 console.log(testingTheLargestNum(1,2));
 console.log(testingTheLargestNum(3,2));
//2.A function that takes in an array of numbers, and returns the third number in the array.
let numsArray=[1,2,3,4,5];

function returnTheThirdArray(array){
    return array[2];
}

console.log(returnTheThirdArray(numsArray));

//3.A function that takes 3 numbers as parameters. The 3 parameters are called min, max, and target. Return whether target number is between the min and the max (inclusive).

function testingTheTargetNum(min,max,target){
    if((min<target)&&(target<max)){
        return true;
    }else{
        return false;
    }
}

console.log(testingTheTargetNum(1,5,4));
console.log(testingTheTargetNum(4,5,2));

//4.A function that takes in a number, and prints the word "Hello" that many times.

function printHello(num){
    let result=" ";
    for(let i=0; i<3; i++){
       
        result+="hello";
    }
    return result;
}

console.log(printHello(3));

//JS 3 Challenge
    //Challenge 1

        function getGrade(score) {
            let grade;
            if(25<score&& score<=30){
                grade ="A";
            }else if(20<score&& score<=25){
                grade ="B";
            }else if(15<score&& score<=20){
                grade ="C";
            }else if(10<score&& score<=15){
                grade ="D";
            }else if(5<score&& score<=10){
                grade ="E"
            }else{
                grade ="F"
            }
            
            return grade;
        }
        console.log(getGrade(14));

    //challenge 2 Part 1
            2 == "2";  //true;
            2 === 2;   //true;
            10 % 3;    //1
            10 % 3 === 1;
            true && false;  //false
            false || true;  //true
            true || false;  //true
    //Challenge 2 Part 2
            
            var isLearning = true;
            if(isLearning){
                console.log("Keep it up!");
            } else {
                console.log("Pretty sure you are learning....");
            }

            // 1.What should the above code console.log?
                //  The console.log will print out "Keep it up!".
            // 2.Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?
                //We don't need to specify the islearning ===true and it does know how to work, because at the ine 225, isLearning is define.
                var firstVariable;
                var secondVariable = "";
                var thirdVariable = 1;
                var secretMessage = "Shh!";
            //Part 2 second question   
                if(firstVariable){
                    console.log("first");
                } else if(firstVariable || secondVariable){
                    console.log("second");
                } else if(firstVariable || thirdVariable){
                    console.log("third");
                } else {
                    console.log("fourth");
                }
            //1. What should the above code console.log? Why?
                // It will print out the word "third" because either firstVariable or thirdVariable is true;
            //2. What is the value of firstVariable when it is initialized?
                // The firstVariable doesn't have a value yet;
                // Is the value of firstVariable a "truthy" value? Why?
                // No, the system just initialize the variable, but it didn't assign a value to it;
                // Is the value of secondVariable a "truthy" value? Why?
                // Yes because it is a empty string;
                // // Is the value of thirdVariable a "truthy" value? Why?
                // Yes it assigns the number 1 to the thirdVariable;
            //part 3 
               //Research Math.random here and write an if statement that console.log's "Over 0.5" if Math.random returns a number greater than 0.5. Otherwise console.log "Under 0.5".
                
                num=Math.random();
                if(num>0.5){
                    console.log(num +"is greater than 0.5");
                }else{
                    console.log(num +" is under 0.5")
                }

               //What is a falsey value? List all the falsey values in JavaScript.
                //  False value happes when JavaScipt is expecting a Boolean but it is given to value below: zeor, "", '', ``, undfine, null, false, and null. 

//Practices for JS4