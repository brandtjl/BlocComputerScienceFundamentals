var ridersInLine = ['Vivian', 'Ava', 'Josh', 'Patrick', 'Mike'];

ridersInLine.push('Mary');

var josh = ridersInLine.indexOf('Josh');

var findRiderName = function(name) {
    return ridersInLine.indexOf(name)
}

var findRiderIndex = function(name) {
    var riderIndex = ridersInLine.indexOf(name);
    return (riderIndex >= 0) ? riderIndex: 'Rider not found'
  
  }

  var findInsertPoint = function(name1, name2) {
    var insertPoint = ridersInLine.indexOf(name1);
    ridersInLine.splice(insertPoint, 0, name2);
    return ridersInLine;
  }

  var removeFromLine = function(name) {
    var findIndex = ridersInLine.indexOf(name);
    console.log(findIndex);
    if (findIndex >= 0) {
        ridersInLine.splice(findIndex,1);
      return ridersInLine;
       }
  }