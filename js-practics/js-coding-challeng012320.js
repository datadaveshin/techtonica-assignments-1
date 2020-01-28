no// Basic JavaScript Practice 1/23/2020
    // 1. prompt Define a function called metersToInches that takes an input of the number of meters and outputs the result of the number of inches.
    // Hint: 1 meter equals 39.3701 inches.
            // const meterValue=[
            //     {meter:0, value: 0},
            //     {meter:1, value:39.3701},
            //     {meter:1.5, value:59.05515},
            //     {meter: 15.6, value:614.17356}
            // ]

            // function metersToInches(value){
            //     let result=[];
            //     for(let i=0; i<value.length; i++){
            //         result.push(value[i].value);

            //     }return result;
            // }

            // console.log(metersToInches(meterValue));
                function metersToInches(value){
                    let result=" ";
                    return result+=value *39.3701;
                }
                    console.log(metersToInches(1));
                    console.log(metersToInches(1.5));
                    console.log(metersToInches(0));
                    console.log(metersToInches(15.6));

    // //2.Write a function named loopThrough that takes an
     //     argument that is a number and loops through and displays a message “Hello World” that 
    //     number of times.
                function loopTrough(num){
                    let result=" ";
                    
                    for (let i=0; i<num; i++){
                            result+="hello"
                    }return result;
                }
                    console.log(loopTrough(0));
                    console.log(loopTrough(1));
                    console.log(loopTrough(3));

                function loopTrough1(num){
                    let result;
                    for(let i=0; i<num; i++){
                         result="hello".repeat(num);
                    }return result;
                }
                    console.log(loopTrough1(0));
                    console.log(loopTrough1(1));
                    console.log(loopTrough1(3));
                
    //3.Define a method called calculateSum to calculate the sum all the digits from 0 to an input number.
            // This will the sum of value because initializing let result =0;
                function calculateSum (num){
                        let result=0;
                        for( let i=0; i<=num; i++){
                            result+=i;
                        }return result;
                }

                    console.log(calculateSum(4))    
                         //10
                    


            // This will print out the individual digits because initializing let result =" ";
                function calculateSum1 (num){
                        let result=" "
                        for( let i=0; i<=num; i++){
                            result+=i
                        }return result;
                    }

                    console.log(calculateSum1(4))  
                       //01234
    
    //4. Write a function called fizzbuzz that prints each number from 1 to the input on a new line.

                    //    For each multiple of 3, print "Fizz" instead of the number.
                    //    For each multiple of 5, print "Buzz" instead of the number.
                    //    For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
                function fizzbuzz(num){
                                    let result=" "
                                for (let i=1; i<=num; i++){
                                    
                                        if(i%3===0){
                                        result+="Fizz<br>";
                                        }
                                        else if (i%5===0){
                                            result+="Buzz" + "<br>";
                                        }else if(i%5 && i%3===0){
                                            result+="FizzBuzz"+ "<br>";
                                        }else {
                                            result+=i+" <br>";
                                        }
                                 }return result;
                         }
                         console.log(fizzbuzz(0))

    //5.A factorial number is the concept in math by value of multiplying numbers by each consecutively smaller number.
         //For example, the value of 3 factorial, is 6, which can be calculated by:   
                        let result5=1;
                                for (let i=10; i>0; i--){
                                    result5*=i;
                                 } 
                        console.log(result5)    

    //7 Write a function called common(a, b) with these criteria: Given 2 arrays of ints, a and b, return True if they have the same first element or they have the same last element. Both arrays will be length 1 or more.
                    function common(a,b){
       
                                    if (a[0]=== b[0]){
                                    return true;
                                    } else if 
                                    (a.slice(-1)[0] === b.slice(-1)[0]){
                                        
                                    }
                                    else {
                                        return false;
                                    }
                                }
                            console.log(common([2, 2, 3], [7, 1, 3]));
                            
    //9. Challenge 9] Object Keys and Values
             // Create an object with two key-value pairs.
             // Log that object to the console.
            // Delete the first key-value pair in the object.
          // Log that object to the console again. The first key-value pair should be gone.
          let object ={
                name:Key, age: 18,
                name:Mike, age:20
          }
          console.log(object);
          delete object.name;
          console.log(object)
