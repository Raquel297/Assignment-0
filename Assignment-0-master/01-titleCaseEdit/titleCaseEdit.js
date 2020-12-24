function titleCaseEdit(title) {
  // Insert code here;
  var hold = title.split(" "); //We split the title string into an array of words where each value in the array contains an individual word from the title string
  for(var i = 0; i < hold.length; i++){
    hold[i] = hold[i].charAt(0).toUpperCase(); //We capitalize only the first letter of each word in the title string
  }
  var result = ""; //We initialize our resulting string that will contain the original title string but with the words capitalized
  for(var i = 0; i < hold.length; i++){
    result += hold[i]; //Here, we use string concatenation to add each word from the title string to a new string that contains our result
  }
  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;
