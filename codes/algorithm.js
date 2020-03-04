//factorial
function factorial(num){
    if(num < 0){
        return -1;
    }
    if(num == 0){
        return 1
    }
    else{
        return (num * factorial(num-1))
    }
}
console.log(factorial(5));

//string reversal
var str = "gayathri Nannapaneni", rev = ""
for(var i = str.length-1; i>=0; i--){
    rev = rev+str.charAt(i)
}
console.log(rev);

//palindrome
/*var str = "gayathri Nannapaneni", rev = ""
for(var i = str.length-1; i>=0; i--){
    rev = rev+str.charAt(i)
    if(str.equals(rev)== true){
        console.log("palindrome");
    }
    else{
        console.log("Not palindrome")
    }
}
console.log(rev);*/

//integer reversal
/*var num = 1234
var str = num.split(' ');
console.log(str);*/

//FizzBuzz
const fizzBuzz = (num) =>{
    let output = []
    for(let i =1; i<=num; i++){
        if(i%6 == 0)
            output.push("FIZZBUZZ")
        else if(i%2 == 0)
            output.push("FIZZ")
        else if(i%3 == 0)
            output.push("BUZZ")
        else
            output.push(i)
    }
    return output
}
console.log(fizzBuzz(9));

//Max Character repeated
const str1 = "Gayathri Nannapaneni"
const strs = str.split(' ').reduce((acc, cv) => {
    
})