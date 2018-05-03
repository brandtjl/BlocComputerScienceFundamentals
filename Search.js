var phonebook = [
    {name: 'Jeni Brandt'},
    {name: 'John Doe'},
    {name: 'Jane Doe'},
    {name: 'Harry Smith'}
    ]
var isFound = false;
var itemSearch = function(item) { phonebook.forEach(function(itemValue, index, phonebook) {
        if (itemValue.name === item) {
           isFound = true;
          return;
        }
      })
         if (isFound) {
          console.log('Item ' + item + ' was found');
         } else {
           console.log('Item ' + item + ' was not found');
         }
     };

itemSearch('Jeni Brandt');