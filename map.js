

Array.prototype.myMap = function(array , callback) {
    const arr = [];
    
    for (let i = 0; i < array.length; i++) {
        
        let convertedValue = callback(array[i])
        arr.push(convertedValue);
      }
      return arr;
}
 function callback(value){
     return value *2 ;
 }

 const array = [2, 4, 6, 8, 10];
 mappedArray = array.myMap(array , callback);
 console.log(mappedArray);
