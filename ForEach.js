Array.prototype.myForEach = function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function callback(element) {
  console.log(element *2); //insert logic
}

const array = [2, 4, 6, 8, 10];
console.log(array);
array.myForEach(array, callback);