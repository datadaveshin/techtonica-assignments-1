//1.Minimum

    function min(num1,num2){
        return Math.min(num1,num2);
    }
    console.log(min(15,9))

//2. Bean counting
 function checkBs(string){
    let count=0;
    let array=string.split("");
    for (i=0; i<string.length;i++){
      if(array[i]==="b"){
        count++;
      }
    }
    return count;
  }
  console.log(checkBs("collBb"))


  