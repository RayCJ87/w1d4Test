function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var times = 0;

  return function() {
    /* your code here */
    var ans = times;
    times+=1
    return list[ans];

  }
}

var rollLoadedDie = makeLoadedDie();

var countdownGenerator = function (x) {
  /* your code here */
  var counter = x;
  return function(){
        if (counter>0){
          counter--;
          return ("T-minus " + counter + "...");
        }
        else  if (counter === 0) {
          counter--;
          return ("Blast off");;
        }
        else {
          counter--;
          return ("Rockets already gone, bub!");
        }
        ;
         ;


  }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown();
countdown();
countdown();
countdown();
countdown();