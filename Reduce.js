Array.prototype.myReduce = function(array , callback) {
    let result = array[0];
    
    for (let i = 1; i < array.length; i++) {
        result = callback(result,array[i])
        
      }
      return result;
}
 function maximumOfArray(max,value){
    if(max > value){
        return max;
    } else
        return value;
 }

 const array = [2, 4, 6, 8, 10];
 mappedArray = array.myReduce(array , maximumOfArray);
 console.log(mappedArray); 
 