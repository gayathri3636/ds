//Number 1
/*var str = "The quick brown fox jumps over the lazy dog";

var arr =  str.split(' ');
arr1=[];
for(i=0; i<arr.length; i++){
    arr1[i] = arr[i] + (i+1)
}
str1 = arr1.join(' ');
console.log(str1);

//Number2
var dwarves = "bashful doc dopey grumpy happy sleepy sneezy";

let reverse = (str) => {
  return str.split(' ').reverse().join(' ');
};
var dwarves = "bashful doc dopey grumpy happy sleepy sneezy";
console.log(reverse(dwarves));

//Number 3
const getMonth = (num) => {
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "october", "November", "December"];
  return months[num -1]
}
console.log(getMonth(12));


//Number4
const checkDigit = (str) => {
  const rExp = /\d/
  return rExp.test(str)
}
console.log(checkDigit("I am 2"));


//Number 5
const identical = (arr1, arr2) => {
  if(arr1.join('') == arr2.join('')){
    return true;
  }
  return false;
}
console.log(identical(['a', 'b', 'c', 'd'], ['a', 'b', 'c']));*/


//input =[11223313] output = [2122231113]

const arr1 = [11223313]
const arr3 = arr1.toString().split('');
var count = 1
var str = ""
var i;
var q = arr3[0]
for(i=1; i<=arr3.length; i++){
  if(q == arr3[i]){
    count++
  }
  else{
    str = str+count+q
    q = arr3[i]
    count = 1
  }
}
console.log(str);

//count repeated values in array
var arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
var map = arr.reduce((prev, cv) => {
  prev[cv] = (prev[cv] || 0) + 1;
  return prev;
}, {});
console.log(map);


//counting duplicates without reduce function
 var ae = ["a", "b", "c", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];

  ae.sort();

  var current = 0;
  var cnt = 0;
  for (var i = 0; i < ae.length; i++) {
      if (ae[i] != current) {
          if (cnt > 0) {
              console.log(current + ':' + cnt + '' );
          }
          current = ae[i];
          cnt = 1;
      } else {
          cnt++;
      }
  }
  if (cnt > 0) {
      console.log(current + ': ' + cnt + '' );
  }

//removing spaces from array
let a=["a","","","b","c","", "","d", "e", ""];
var b =[]
for(var i =0; i<a.length; i++){
  if(a[i] != ""){
    b.push(a[i]);
  }
}
console.log(b);