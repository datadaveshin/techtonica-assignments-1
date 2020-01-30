const userInput=document.querySelector(".input");
const userSubmit=document.querySelector(".submit");
const userPrevGuess=document.querySelector(".prevGuess");
const returnResult=document.querySelector(".result");
const hint=document.querySelector(".moreHint");
const userTries=document.querySelector(".tries");
let userMax=document.querySelector(".max");

const userSubmit1=document.querySelector(".submit1");
// let answer=Math.floor(Math.random()*100)+1;
let count=1;
let tries=1;
let userMaxValue;
let answer;
function numberRange(){
    let userMaxValue=Number(userMax.value);
     answer=Math.floor(Math.random()*userMaxValue+1);
     return answer;
}

// // userSubmit1.addEventListener("click", ());


function checkMyGuess(){
    
    let userGuess=Number(userInput.value);
    let num=tries++;
    if(count===1){
        userPrevGuess.textContent="Previous Guess:";
    }
    if(userGuess===answer){
        returnResult.textContent="Bingle! You guess right";
        hint.textContent=" ";
       
        
    }else if(userGuess<answer){
        returnResult.textContent="Sorry! You are wrong";
                hint.textContent="Your guess is less than the actual number!";
                
                userTries.textContent="Your have tried " +num + " wrong";

    } else if(userGuess>answer){
        returnResult.textContent="Sorry! You are wrong";
        hint.textContent="Your guess is higher than the actual number" ;
        userTries.textContent="Your have tried " +num + "wrong";
    }
        userPrevGuess.textContent+=userGuess+" ,";
   
  
   count++;
}
 hint.style.fontWeight="bold";
userSubmit.addEventListener("click", checkMyGuess);



