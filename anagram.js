function checkForAnagram(string1, string2) {
    var anagram1 = string1.split('');
    var anagram2 = string2.split('');
    var isAnAnagram = true;
    for (let i = 0; i<anagram1.length; i++) {
      if (anagram2.indexOf(anagram1[i]) < 0) {
        isAnAnagram = false;
      }
    }
    if (isAnAnagram) {
      console.log(string1 + ' is an anagram of ' + string2)
    } else {
      console.log(string1 + ' is not an anagram of ' + string2)
    }
}
  checkForAnagram('feats', 'faster')