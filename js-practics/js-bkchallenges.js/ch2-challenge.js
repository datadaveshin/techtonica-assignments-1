// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let symbol="";
for(let i=0; i<5; i++){
    symbol+="#"
   console.log(symbol)
}

// 2.FizzBuzz

for (let i=1; i<101; i++){
    if((i%3===0) && (i%5===0)){
      console.log("FizzBuzz")
    }
      else if (i%3===0){
        console.log("Fizz");
      }else if(i%5 ===0){
        console.log("Buzz")
      }else {
        console.log(i)
      }
  }

  //3.chessboard

  let a;
for (i=0; i<8;i++){
    if(i%2 ===0){
      a=" # # # #";
      console.log(a)
    }else if(i%2 !=0){
      a="# # # # ";
      console.log(a)
    }
}

