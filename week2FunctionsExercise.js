// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.


// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log). 
// Underneath the function, write the line of code that runs the function. 
function logGreeting(string){
  console.log(string);
 }
 logGreeting("hello!")


// Exercise 2. Define a function called getName() that *returns* a string that is your name. 
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function. 
function getName(string){
  return string;
}
console.log(getName("Cadence Chen"))
// Exercise 3. Call a function within a function -- Write a function called logGreeting2() 
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2(). 
function logGreeting2(name){
  return "hello! My name is " + getName(name);
}
console.log(logGreeting2("cadence"));

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.
function sum(num1,num2,num3){
  return num1+num2+num3;
}
console.log(sum(1,2,3));
console.log(sum(3,4,5));
console.log(sum(5,6,7));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.
function discount (age){
  if ((age<=14) || (age>=65)){
    return true;
  }else{
     return false;
}
}
console.log(discount(70));
console.log(discount(13));
console.log(discount(50));
// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.
function print(string, num){
  let word =" ";
 for(let i=0; i<num; i++){
   word +=string;
 }
 return word;
}
console.log(print("Hello ", 4))

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
    return p1 * 2;
  }
  const y = 4;
  const z = mysteryFunction1(y);
  console.log("The value of y is " + y);
  console.log("The value of z is " + z);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction1 does 
   //  The function will run the code inside it
  // 2. What prints out for the value of y
  //It will be undefined;
  // 3. What prints out for the value of z
 // It will be undefined;
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //n No, I learn when there is two identical function it will run same code.
  
  
  // Exercise 8. Read the following code (don't run it yet)
  function mysteryFunction2(p1, p2) {
    const x = p1 - p2;
    return x;
  }
  const a = mysteryFunction2(10, 4);
  const b = mysteryFunction2(a, 1);
  console.log("The value of a is " + a);
  console.log("The value of b is " + b);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction2 does 
  // The function will run the code inside it.
  // 2. What prints out for the value of a
   // It will print out 6.
  // 3. What prints out for the value of b
  //It will print out 5.
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //  Yes, my guess is correct.
  
  // Exercise 9. This exercise is to practice reading the documentation for functions.
  // String.split() is a function in the JavaScript standard library that you can use in your code.
  // Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // Try to use it to solve the following challenges:
  
  // Here's a string I made representing my grocery list.
  // Using split() and groceryList, make an array of my grocery list items
  const groceryList = "eggs,carrots,orange juice";
   const array=groceryList.split(".");
  console.log(array);

  // Here's a string I made representing my morning schedule.
  // Using split() and mySchedule, make an array of the *first 2* things I do in the morning
  // There are multiple ways to do this, but try doing it using only the split() function.
  const mySchedule = 'wake up--->brush teeth--->eat breakfast--->go to work'
  //const re=/\s*--->/;

  let split=mySchedule.split("--->", 2);
console.log("schedule",split);
  
  
  // Congrats, you made it to the end!
  // Did you find this easy or hard? If you used references, which ones helped you? 
  // Please answer in a comment below.
  //The last one is hard, but I found a useful information on Mozilla to help me solve the problem.
  
  // Email your file to the course staff, 
  // or commit your file to GitHub and email us a link.
  