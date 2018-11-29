function findWaldo(arr, found) {
  arr.forEach(function(element){
    if (element === "Waldo") {
      found()
    }
  })


}



function actionWhenFound() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);