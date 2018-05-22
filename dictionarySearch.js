var binarySearch = function(collection, value) {
  var low = 0;
  var high = collection.length - 1;
  var mid
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    console.log(collection[low] + ' ' + collection[high])
    if (collection[mid] > value) {
      console.log(mid + ' ' + value)
      high = mid -1
    } else if (collection[mid] < value) {
      low = mid + 1
    } else {
      return mid
    }
  } 
  return 'Not Found'
}