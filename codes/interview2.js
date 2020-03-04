const arrays = []
    for(var i=0; i<100; i+=2){
        arrays.push(i)
    }
console.log(arrays);

const _listA = [
    {dob: '1/1/90', fn: 'a'},
    {dob: '1/2/90', fn: 'b'},
    {dob: '1/3/90', fn: 'c'},
    {dob: '1/4/90', fn: 'd'}];

const _listB = [
    {dob: '1/1/90', fn: 'e'},
    {dob: '1/2/90', fn: 'f'},
    {dob: '1/3/90', fn: 'a'},
    {dob: '1/5/90', fn: 'b'},
    {dob: '1/6/90', fn: 'c'},
    {dob: '1/7/90', fn: 'd'}];

const _listC = [..._listA, ..._listB];
//console.log(_listC);
const _listD = _listC.reduce((acc,cv) => {

})