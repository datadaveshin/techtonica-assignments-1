//1.The sum of a range
 //print all the interger from 1 to 10
 let printInt=[];
 function rang(start,end){
     
     for(i=start; i<=end; i++){
         printInt.push([i])
     }
     return printInt;
 }
console.log(rang(1,10));
// use reduce method to join all intergers  into one array
 let joinFunc=function join (init, current){
     return init.concat(current);
 }

let joinArr=printInt.reduce(joinFunc);

// use second reduce method to add all intergers.
 let result=function sum(init,current){
     return init + current;
 }

joinArr.reduce(result)




//2.Reversing an array

function reverseArr(arr){
 let result=[];
  for(let i=0; i<arr.length;i++){
      result.unshift(arr[i]);
  }
  return result;
  }
console.log(reverseArr([1,2,3]))