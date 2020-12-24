function frequencyCounter(word) {
  // Insert code here;
  var obj = {}; //We create an empty object that holds key and value pairs 
  var character = word.split(""); //We split our string into individual characters
  character.forEach(element =>{ //We loop through each character in word so that we can count how many times each letter appeared in word 
    if(!(element in obj)){ //If the letter is not in the object, then it is the first time we are seeing that letter. Therefore, the letter's value is 1
      obj[element] = 1;
    }else{ //If the letter is in the object, then it is not the first time we are seeing that letter. Therefore, we count one more from however many instances of that letter we counted so far
        obj[element] += 1;
    }
  });
  return obj; //We return the resulting object
}

// Do not edit this line;
module.exports = frequencyCounter;
