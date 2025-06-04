var a = 18;
var b = 19;
var c = 20;


// var ans = a > b && a > c ? ("A is gretter") : (b > c && b > a ? "B is greater" : "C is greater");

// var ans = a > b ? (a > c ? a : c ):( b > c ? b : c);
// console.log(ans);












// let x = a > b ? "A is bigger" : "B is bigger";
// console.log(x);

// a > b ? console.log("A is gretter") : console.log("B is greater");

// let ans = a > b ? a : b;
// console.log(ans + " is gretter");

// if(a > b && a > c)
// {
//     console.log("A is greater");
// }
// else if(b > a && b > c)
// {
//     console.log("B is greater");
// }
// else
// {
//     console.log("C is greater");
// }

// if(a > b)
// {
//     if(a > c)
//     {
//         console.log("A is greater");
//     }
//     else{
//         console.log("C is greater");
//     }
// }
// else{
//     if(b > c){
//         console.log("B is greater");
//     }
//     else{
//         console.log("C is greater")
//     }
// }


var a = parseInt(prompt("Enter first number :- "));
var b = parseInt(prompt("Enter second number :- "));
var c = parseInt(prompt("Enter third number :- "));

var sum = 0;

if(a > 35)
{
    sum += a;
}
if(b > 35){
    sum += b;
}
if(c > 35){
    sum += c;
}
console.log(sum);
