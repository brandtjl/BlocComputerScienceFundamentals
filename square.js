function findDuplicate(numbers) {
    var sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }   
    squareRoot = Math.sqrt(sum);
    if (sum % squareRoot ===0) {
        console.log('Square root is ' + squareRoot);
    } else {
        console.log('Sum is ' + sum);
    }
}
  
  determineSquare([1,8,4,3,7])