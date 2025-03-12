let fruits=["apple","banana","mango"]
console.log(fruits)

//accessing array elements
console.log(fruits[0])
console.log(fruits[2])
console.log(fruits.length)

//modifying array elements
let colors=["red","blue","green"]
colors[1]="yellow" //change blue to yellow
console.log(colors)

//array methods
//adding and removing elements
let number=[1,2,3,4];
number.push(5)
console.log(number)
number.pop()
console.log(number)
number.unshift(0)
console.log(number)
number.shift()
console.log(number)


//iterating over arrays
let cars=["bmw","audi","ferrari"]
for(let i=0;i<cars.length;i++){
    console.log(cars[i])
}
//using for each
cars.forEach(car=> console.log(car))

//serching and filtering
//indexOf()- find index of an elmemnt
let names=["bob","syam","alice"]
console.log(names.indexOf("syam"))

console.log("check is an element exists", names.includes("bob"))

//filter() it extracting tje based on conditions
let numbers=[10,20,30,40,]
let filtered=numbers.filter(num=>num>20)
console.log(filtered)
//filtering premium products
let products=[
    { name:"laptop",price:3000},
    { name: "phone", price: 1000 },
  { name: "Tablet", price: 700 },
  { name: "Smartwatch", price: 200 }
];
let premium=products.filter(product=>product.price>500)
console.log(premium)

//filtering available cars
let cars1 = [
    { model: "Tesla", available: true },
    { model: "BMW", available: false },
    { model: "Audi", available: true }
  ];
  
  let availableCars = cars1.filter(car => car.available);
  console.log(availableCars);

//transforming arrays
  //map()
  let numbers12 = [10, 20, 30, 40];

let doubled = numbers12.map(num => num * 2);

console.log(doubled);

//Imagine an e-commerce website that stores product prices without currency symbols. We can use .map() to add a currency symbol ($).
let prices=[300,400,500]
let formatedPrices=prices.map(price=>`$${price}`)
console.log(formatedPrices)



//Imagine a social media app where usernames need to be displayed in uppercase.


let usernames = ["john_doe", "alice99", "charlie123"];

let upperCaseUsernames = usernames.map(user => user.toUpperCase());

console.log(upperCaseUsernames);


//Imagine an e-commerce site where we have a cart containing multiple products with their prices. We can use .reduce() to calculate the total cost.

let cart = [
    { name: "Phone", price: 300 },
    { name: "Laptop", price: 1000 },
    { name: "Tablet", price: 700 }
  ];
  
  let totalPrice = cart.reduce((total, product) => total + product.price, 0);
  
  console.log("Total Price:", totalPrice);  



  //sorting reversing

  let names12 = ["John", "Alice", "Bob"];
console.log(names12.sort()); 

//reverse
console.log(names12.reverse()); 

//converting arrays
//join()==>convert to string
let words = ["Hello", "World"];
console.log(words.join(" "));  

//split()==<convert string to array
let sentence = "Hello World";
console.log(sentence.split(" "));  



//split()
let str="syam,kumr,bob";
console.log(str.split(","))
//converting string into array of characters
let arr=Array.from(str);
console.log(arr)
//both are same
let arr2=[...str]
console.log(arr2)

//JSON.parse converts a stringified array back to a original array

let str1='["apple","banana","bread"]'
let arr3=JSON.parse(str1)
console.log(arr3)

//spread operators

//Copying an Array
let  arr4=[1,2,3,4,5,6]
let newArr=[...arr4]

console.log(newArr)

//meging two objects
let user={
  username:"syam",
  age:23,

};
let address={
  city:"newyork",
  country:"usa"
};
let profile={...user, ...address};
console.log(profile)

//Overriding Object Properties
profile={...address, pincode:334}
console.log(profile)

// Removing Duplicates from an Array

let number1=[1,2,3,4,5,6,5,4,]
let removeNumber=[...new Set(number1)]
console.log(removeNumber)
  
//Passing an Array to a Function
let digits=[1,2,3,4,]
function sum(a,b,c){
  return a+b+c;
}
console.log(sum(...digits))

sum=(a,b,c)=>a+b+c;
console.log(sum(...number))

//converts to number

let num= "10,34,34,55"
let numberr=num.split(",").map(Number)
console.log(numberr)


//destructuring
let arr5=["syam","kumar","bob"]
let[one,two,three]=arr5

console.log(one)

console.log(age)
let name="syam"
var age=23
const salary=100

let str12="apple"
let arr6= str12.split("-")
console.log(arr6)
console.log(str12.slice(-1,))



console.log(arr5.toString().replace(","," "))


