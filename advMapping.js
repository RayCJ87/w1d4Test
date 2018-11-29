var words = ["ground", "control", "to", "major", "tom"];

// var tempNumbers = words.map( function(word) {return word.length;})
// console.log(tempNumbers);
// var ansNum = tempNumbers.map(tempNumbers, function(a, b) { return (a-b)});
// console.log(ansNum);

function map (words, callback){
  var mapping = [];
  words.forEach(function(element){
    mapping.push(callback(element));
  });

  return mapping;
}



var lengthCalculation = function (element){
  return element.length;
}

console.log(map(words, lengthCalculation));


// map(words, function(word) {
//   return word.toUpperCase();
// });


var upperCaseChange = function(element){
  return element.toUpperCase();
}

console.log(map(words, upperCaseChange));

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });


var revJoin = function(element) {
  return element.split('').reverse().join('');
}

console.log(map(words, revJoin));