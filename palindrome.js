function palindrome(str) {
 
 var desired = str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '') 
 var strToFind=desired.split(" ").join("").toLowerCase()
 // console.log(strToFind[strToFind.length / 2]);
 // console.log(strToFind[(strToFind.length / 2)-1]);
 for (let i = strToFind.length; i >= 0; i--) {
  if (strToFind[strToFind.length - i] == strToFind[i - 1] && strToFind[strToFind.length / 2] == strToFind[(strToFind.length / 2) - 1]) {
   return true
  }
 
 
  return false
 }
   
}


palindrome("eye");
