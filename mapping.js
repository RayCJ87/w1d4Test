var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function (input) {
  var ans = 0;
  for (var i in input) {
    ans += input[i]*input[i];
  }
  return Math.sqrt(ans);
}

);

console.log(result);



console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);