function findWaldo(arr, found) {
  arr.forEach(function(element){
    if (element === "Waldo") {
      found(element,arr)
    }
  })
}
function actionWhenFound(name,arr) {
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === name) {
      console.log("Found " + name + " at index " + i + "!" );
    }
  }
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);