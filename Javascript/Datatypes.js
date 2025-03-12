// Strings
let firstName='syam'
let lastName="kumar"
console.log(firstName+lastName)

let x=16+"volvo"
console.log(typeof x) // string
console.log(x)

//JavaScript has dynamic types. This means that the same variable can be used to hold different data types:
let y;
y=5;
y="john"
console.log(y)
console.log(typeof y)
// single quote inside double quotes
let quote1="it's alright";
console.log(quote1)

//single quotes inside double quotes
let quote2="he is a good 'boy'"
console.log(quote2)

//double quotes inside single quotes
let quote3='i am learnig "javascript"'
console.log(quote3)


//Numbers
let num=78.8
console.log(num)
console.log(typeof num)
let num2=8
console.log(num+num2)

//booleam
let nums=20>10;
console.log(nums)
console.log(typeof nums)

//undefined
let age
console.log(typeof age)

let str=""
console.log(str) //in console creates gap
console.log(typeof str)


//NUll
let number=null;
console.log(number)
console.log(typeof number)

//null is equal to undefined
console.log(undefined==null)

//objects
let person={}
console.log(person)
console.log(typeof person)

const person1={
    name:"syam",
    age:23,
    salary:100
}
console.log(person1)
person1.age=22
console.log(person1)


//arrays

const cart=["laptop","phone","bike"]
console.log(cart)
cart.push=["headphones"]
console.log(cart)
console.log(typeof cart)


//functions
function msg(){
    console.log("hi")

}
msg()
console.log(typeof msg)

//
let z
console.log(z)
console.log(typeof z)

z='java'
console.log(z)
console.log(typeof z)

z=34
console.log(z)
console.log(typeof z)

z=true
console.log(z)
console.log(typeof z)
