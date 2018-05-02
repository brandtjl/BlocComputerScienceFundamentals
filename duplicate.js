function findDuplicate(numbers) {
    var sortedNumbers = numbers.slice().sort();
    for(let i = 0; i<sortedNumbers.length; i++) {
      if (sortedNumbers[i] === sortedNumbers[i+1]) {
        var isDuplicate = true;
      }
    }
    if (isDuplicate) {
      console.log('true');
    } else {
      console.log('false');
    }
  
}
  
  findDuplicate([1,4,12,12,3,7,8])