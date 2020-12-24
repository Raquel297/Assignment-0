function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var union = new Set();
  args.forEach(element => { //For each set 
    element.forEach(value => { //For each element in each set 
        if(!(value in union)){ //If the value does not already exist in the set...
          union.add(value); //Add that value to the set
        }
    });
  });
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
