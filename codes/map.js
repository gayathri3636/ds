//Map--A new array is returned from an existing array.
const array = [2,3,4,6,7];
const doubled = array.map(item => item * 2)
console.log(doubled);


var officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];
var ids = officers.map(officer => officer.id)
var names = officers.map(officer => officer.name)
console.log(ids);
console.log(names);


let arr = [1,2,3,4];
let plus5 = arr.map(val => val + 5);
console.log(plus5);

//Doubling the even numbers in the array
let arrs = [1,2,3,4];
let evendouble = arr.map((v, i, a)=>{
  return v%2 ===0? v*2 : v
})
console.log(evendouble);//Even values are doubled and odds are same.