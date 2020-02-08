// Write a recursive function isPalindrome(aString) that returns true if aString is a palindrome.
//  A palindrome is any string that is the same read forwards or backwards:
function isPalindrome(str){
    if(str.length===1){
      return true;
    }
    else if(str[0] !== str[str.length-1]){
      return false
    }
    return isPalindrome(str.slice(1,-1))
  }
  
  console.log(isPalindrome('racecar')) // true
  console.log(isPalindrome('step on no pets')) // true
  console.log(isPalindrome('a')) //true
  console.log(isPalindrome('goat')) //false

//   challenges

    // 1.Write a recursive function isPalindrome(aString) that returns true if aString is a palindrome. 
    // A palindrome is any string that is the same read forwards or backwards:
    function factorial(str){
        if(str ===1){
          return true
        }
        return str* factorial(str-1)
      }
      
      console.log (factorial(3))   //6.