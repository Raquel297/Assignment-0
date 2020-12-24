function fizzBuzz(start, end) {
  // Insert code here;
  var array = []; //We create an empty output array where the fizz buzz or number values will be stored 
  for(var i = start; i <= end; i++){
    if(i % 3 == 0 && i % 5 == 0){
       array.push("FizzBuzz");
    }else if(i % 3 == 0){
      array.push("Fizz");
    }else if(i % 5 == 0){
      array.push("Buzz");
    }else{
      array.push(i);
    }
  }
  return array; //We return the resulting array 
}

// Do not edit this line;
module.exports = fizzBuzz;
