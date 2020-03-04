//Using Math.max() method.
/*const array = [1,5,7,10,2,4];

var max = Math.max(...array);
console.log(max);

//Alternate method using reduce
var arr = [1,2,3,4,6,7,78];

var max_arr = arr.reduce(function(x,y){
    return (x>y) ? x: y
})
console.log(max_arr);

//To test is string is a palindrome
//palindrome means 121=121
const string1 = 'level';
const string2 = 'Le, vel.';

const isPalindrome = (str) => {
  let string = str
      .replace(/[^\w]/gi, "") // replace all non-words characters
      .toLowerCase(); // make all characters lower cased
  return string == string.split('').reverse().join('');
}

isPalindrome('level');
isPalindrome('Le, vel');

const a = 5 ; // SyntaxError: Missing initializer in const declaration
console.log(a);

var num = 15;
for (var num = 0; num < 3; num++) {
  console.log(num); //0 1 2
}
console.log(num); //3

/*for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function() {
       { console.log(i); };
    }));
    document.body.appendChild(btn);
  }*/

  /*for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      // logs `10` ten times
      console.log(i)
    })
  }*/

  /*for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      // logs 0, 1, 2, 3, ...
      console.log(i)
    })
  }



  //Hoisting 
  var x = 12;
(function () {
  console.log(x);
  var x = 13;
}());*/
//undefined

//Reverse string
/*var str = "Gayathri", rev = ""
for(var i = str.length-1; i>=0; i--){
  var rev = rev + str.charAt(i);
}
console.log(rev);*/

//Reverse order of digits
var ints = 12345, revs = ""
for(var i = ints.length-1; i>=0; i--){
  var revs = revs + ints.indexOf(i)
}
console.log(revs);