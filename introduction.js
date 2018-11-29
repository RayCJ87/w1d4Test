function findWaldo(arr, found) {
  arr.forEach(function(element){
    if (element === "Waldo") {
      found()
    }
  })
  console.log("hah");

}



function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);