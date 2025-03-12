//automatically
x=4;
y=5;
console.log(z=x+y);

//using var
var x=8;
var y=4;
var z=x+y;
console.log(z)


//using let
let p1=10;
let p2=30;
let t=p1+p2;
let person="john",carName="volvo",price=200;
console.log(t);
let age;
console.log(age)
console.log(person,carName);

//mixed
const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total)

var car='bmw';
var car   //car='ford' it update latest value
console.log(car)

let n1="john" + " " + "doe";
console.log(n1)
let n2=2+3+"5"
console.log(n2)
// javascript dollar
let $="syam"
let $$$=23;
let $salary=100;
console.log($,$$$,$salary)

//unserscore
const _name="syam";
const _x=45
const _100=55
console.log(_name+_x+_100)

//block scope
{
    let coffee="cappuccino";
    console.log(coffee);
}
//console.log(coffee) //coffee is not defined

let num=10;
if(num>5){
    let y1=20;
    console.log(y1);
}
//console.log(y1) //yi is not defined

//hoisting automatically moves variable and functions declaration to the top before code execution
//to use function and variable before declaring them,making the code more flexible


//1.function hoisting(call afunction befeorer declaring it)

// sayHello();
// function sayHello(){
//     console.log("hello syam")
// }

//above code in js internallymoves the function to the top
function sayHello(){
    console.log("hello")

}
sayHello();


//2️⃣ Variable Hoisting with var (Avoid Errors)
console.log(user)
var user="syam"
console.log(user)
