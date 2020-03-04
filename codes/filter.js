//filter method---takes each element in array and applies conditional statement against each of it. If true element gets 
//pushed to output array. If false it is not pushed. Creates new array.

let arr = [2,3,4,98,25,78];
let filter = arr.filter(arrs => arrs > 20);
console.log(filter);

const numbersa = [1,2,3,4];
const double = numbersa.filter(number => number %2 ===0);
console.log(double);

/*const numbers = [1,2,1,2,3,4,5,5,6,6,6,7]
const number = [];
for(var i = 0; i >= numbers.length; i++){
    if(numbers[i] != numbers[i+1]){
        number.push(numbers[i])
    }
}
console.log(number);*/

//getting unique values from array using indexOf()
function getUnique(array){
    const unique = [];
    for(i=0; i<array.length; i++){
        if(unique.indexOf(array[i]) === -1){
            unique.push(array[i])
        }
    }
    return unique;
}
var names = [1,2,3,2,2,1,1,1,4,4]
var uniquenumbers = getUnique(names);
console.log(uniquenumbers);


//getting unique values using filter
var test = [
    {
      id: 1,
      PlaceRef: "*00011",
      Component: "BATH",
      SubLocCode: "BAT",
      BarCode: ""
    },
    {
      id: 2,
      PlaceRef: "*00022",
      Component: "BAXI10R",
      SubLocCode: "KIT",
      BarCode: ""
    },
    {
      id: 1,
      PlaceRef: "*00011",
      Component: "BATH",
      SubLocCode: "BAT",
      BarCode: ""
    },
    {
      id: 3,
      PlaceRef: "*00011",
      Component: "ANR190",
      SubLocCode: "B1",
      BarCode: ""
    }
  ];

  var uniq = test.filter(function({id}){
      var p = !this[id]
      var q = (this[id] = id)
      return p && q;
      //return !this[id] && (this[id] = id)
  },{});
  console.log(uniq);