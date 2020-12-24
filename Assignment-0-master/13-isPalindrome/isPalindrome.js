function isPalindrome(word) {
  // Insert code here;
  if(word.length === 1 || (word.length === 2 && word.charAt(0) === word.charAt(1))){
    console.log(true);
    return true;
  }else if(word.charAt(0) !== word.charAt(word.length - 1)){
    console.log(false);
    return false;
  }
  word = word.substring(1, word.length - 1);
  console.log(word);
  isPalindrome(word);
}

// Do not edit this line;
module.exports = isPalindrome;
