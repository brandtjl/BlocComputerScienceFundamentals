var linearSearch = function(collection, target) {
    var result
    for(var i = 0; i < collection.length; i++) {
      if(collection[i] === target){
        result = i;
      }
    }
    return result;
  };
