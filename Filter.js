Array.prototype.myFilter = function(array , checkCondition) {
    const arr = [];
    
    for (let i = 0; i < array.length; i++) {
        
        if(checkCondition(array[i]))
        arr.push(array[i]);
      }
      return arr;
}
 function checkCondition(value){
     return value > 25 ;
 }

 const array = [2,30, 25, 8, 60];
 filteredArray = array.myFilter(array , checkCondition);
 console.log(filteredArray);