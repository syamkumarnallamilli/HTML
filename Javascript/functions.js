function happyBirthday(age,name="kumar"){
    console.log("happy birthday to you")
    console.log("happy birthday to you")
    console.log(`happy birthday dear ${name}`)
    console.log("happy birthday to you")
    console.log(`you r ${age} years old`)
}
happyBirthday(23)

function add(x,y){
    return x+y
}
function sub(x,y){
    return x-y
}
console.log(add(2,3),sub(4,4))


function mult(x1,x2=4){
     x1=3
    return x1*x2
}
console.log(mult())


//iseven
function isEven(number){
    if(number%2===0){
        return true;
    }
    else{
        return false;
    }

}
console.log(isEven(3))

//isvalid email
function isemailValid(email){
    return email.includes("@") ? true : false;
}
console.log(isemailValid("syam@12.com"))
console.log(isemailValid("syam12.com"))


//function declaration
const numbers=[1,2,3,4,5,6]
function square(num){
    return num*num
}
const squaredNumber=numbers.map(square)
console.log(squaredNumber)
// /.............../ 
function squares(element){
    return Math.pow(element,2)
}
const number=[1,2,3,4,5,6]
const squared=number.map(squares)
console.log(squared)
//function expression(anonymous)

const squared1=number.map(function(element){
    return Math.pow(element,2)
})
console.log(squared1)

//settimeout,function expression as a call back
setTimeout(function(){
    console.log("hello! message apperars after 3 second")
},3000)


//fuction declaration by using filter
function isEven(num){
    return num % 2 === 0
}
const n=[1,2,3,4,5,6,8,9]
const even=n.filter(isEven)
console.log(even)

//functiin expression
const even1=n.filter(function(num){
    return num%2===0
})
console.log(even1)


//finction declaration --reduce()
function sum(total, num) {
    return total + num; // total is initial value and store updated value, num is array of element
                // 0+1=1(total) --->1
                //1+2=3(total)--->2
  }
  
  const n1 = [1, 2, 3, 4, 5];
  const totalSum = n1.reduce(sum, 0);
  
  console.log(totalSum);  

  /// anonymous function
  const total1= n1.reduce(function(total,num){
    return total+num
  },0)
  console.log(total1)
 ///function declaration 
setTimeout(hello1, 3000)
  function hello1(){
    console.log("hello syam")
  }
  hello1()

  //functioin expression
  setTimeout(function(){
    console.log("function expression")
  },3000)

  //arrow function
  setTimeout(()=>console.log("arrow function"),5000)
  


  //arrow function ====> (parameter)=>some code
  const values=[1,2,3,4,5,6,7,8]
  let square1=values.map((element) => Math.pow(element,2))
  console.log(square1)

  let cube=values.map((element)=>Math.pow(element,3))
  console.log(cube)

  let eve=values.filter((element)=>element%2===0)
  console.log(eve)

  let add1=values.reduce((sum,element)=>element+sum,0)
  console.log("reduce:",add1)




  //regular function
  function regular(){
    var n11="hello regualr"
    console.log(n11)
    
  }
//   regular()
  //iife
  (function(){
    var n22="iife"
    console.log(n22);
  }) ();

  //without iife
  let count=10 //global scope
  function increment(){
    count++
    console.log(count)
  }
//   increment()

  //iife
  (function(){
    let count1=5;
    count1++
    console.log(count1)
  }) ()
  console.log(typeof count1)


  //with parameters iife
 ; (function(name12){
    console.log(`my name is ${name12}.`);
})("syam");


//diffrent team working on the same project
//team A's code)
(function(){
    let user="syam"
    console.log(`${user} is a developer`)
}) ();

// team b's code

(function(){
    let user="kumar"
    console.log(`${user} is a developer`)
}) ();


//degfault parameter
//regulr
function reg(fname){
    console.log(`hi ${fname} !`)
}
reg()
reg("syam")

//defasult
function reg1(fname="syam"){
    console.log(`this is ${fname}`)
}
reg1()
reg1("kumar")

///rest parameters= > to accept any number of arguments as an array
//without rest
function add123(a,b){
    return a+b
}
console.log(add123(2,3))
console.log(add123(3))
console.log(add123(1,2,3))


//with rest
function add1234(...numbers) {
    let sum = 0; // Initialize sum
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum;
}

console.log(add1234(2, 3));      
console.log(add1234(3));         
console.log(add1234(1, 2, 3)); 
console.log(add1234());  


//callback function ==> a callback function is a function that is passed as an argument to another function amd is executed after some operation and is executed
function greet12(lname,callback){
    console.log(`lastname: ${lname}`)
    callback()
}

function goodBye(){
    console.log("good bye freiend")
}

greet12("kumar",goodBye)
// goodBye()

//without callback using for loop
const numbers123=[2,3,4,8,3,4]
const squared123=[]
for(let i=0;i<numbers123.length;i++){
    squared123.push(square(numbers123[i]))
}
console.log(squared123)

//anonymous callback function
const suared1234=numbers123.map(function(num){
    return num*num
})
console.log(squared123)

//arrow function
const squared1234=numbers123.map((num)=>num*num)
console.log(squared1234)


//high order function

function buyProduct(product){
    return function(quantity){
        
        
        return `your order ${quantity} ${product}s`
    }

}
const ordershoe=buyProduct("shoes")
console.log(ordershoe(2))
console.log(ordershoe(3))

