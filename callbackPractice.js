/* In this repo your job is to write functions to make each function call work properly.
Below is a sample problem

  //code here for sayHi

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay);
   });

and what you should write is the sayHi function that makes the code above work,

   var sayHi = function(str, cb){
    cb(str);
   }

   sayHi('Hi Katie', function(thingToSay){
      alert(thingToSay); //should alert ('Hi Katie')'
   });

*/


// 1. Write a function called first that returns the first item of the array using a callback function

// Code Here

function first(arr, cb) {
  return cb(arr[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName) {
  console.log('The first name in names is ' + firstName)
});



// 2. Write a function called last which returns the last item of the array using a callback function.

//Code Here

function last(arr, cb) {
  return cb(arr[arr.length - 1]);
}


last(names, function(lastName) {
  console.log('The last name in names is ' + lastName);
});



// 3. Write a function called multiply that multiplies two numbers using a callback function.

//Code Here

function multiply(x, y, cb) {
  return cb(x * y);
}

multiply(4, 3, function(answer) {
  console.log('The answer is ' + answer); //should console.log 12
})



// 4. Write a function called contains that checks if a name exists in an array.
// If it does, return true using the callback, if not return false.

//Code Here

function contains(arr, checkFor, cb) {
  var contained = false;
  arr.forEach(function(cur, i, arr) {
    if (cur == checkFor) {
      contained = true;
    }
  });
  return cb(contained);
}

contains(names, 'Colt', function(result) {
  if (result === true) {} else {
    console.log('Colt is not in the array');
  }
});



// 5. Write a function called uniq that takes the names array and removes all duplicates and returns
// the callback function with the array of unique names.

//Code Here

function uniq(arr, cb) {
  var toRet = [];
  for (var i = 0; i < arr.length; i++) {
    var unique = true;
    for (var j = 0; j < toRet.length && unique; j++) {
      if (arr[i] == toRet[j]) {
        unique = false;
      }
    }
    if (unique) {
      toRet.push(arr[i]);
    }
  }
  return cb(toRet);
}


uniq(names, function(uniqArr) {
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});


// 6. Write a function called each that takes in an array of names. For each item, use a callback
// function to return the indices and item.

function each(arr,cb){
  for(var i=0; i<arr.length; i++){
    cb(arr[i],i);
  }
}

//Code Here

each(names, function(item, indice) {
  console.log('The item in the ' + indice + ' position is ' + item)
});



// 7. Write a function called getUserById that looks at the array of user objects (users) and searches for a user by ID
// and returns that user.

//Code Here

function getUserById(arr,id, cb){
  arr.forEach(function(cur,i,arr){
    if(cur.id==id){
      cb(cur);
    }
  })
}




var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

getUserById(users, '16t', function(user) {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
