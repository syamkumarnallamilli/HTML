//Arithmetic


let num1 = 10;
let num2 = 3;

// Addition
console.log("Addition:", num1 + num2); 

// Subtraction
console.log("Subtraction:", num1 - num2); 

// Multiplication
console.log("Multiplication:", num1 * num2); 

// 4️Division
console.log("Division:", num1 / num2); 

// Modulus (Remainder)
console.log("Modulus:", num1 % num2); 

// Exponentiation (Power)
console.log("Exponentiation:", 2 ** 3); 

// Increment
// let x = 5;
// x12++; // x = x + 1
// console.log("Increment:", x); 
// // ++x;
// // console.log("postfix:", x)
// --x
// console.log(x)

// Postfix 
// let a = 2;
// b = a++; // b = 2, a = 3

// Prefix
// let d1 = 5;
// y = ++d1; // x = 6, y = 6

// console.log(a);
// console.log(b);
// console.log(d1);
// console.log(y);



// Decrement
// let y = 5;
// y--; // y = y - 1
// console.log("Decrement:", y); 

//Assignment operator example
let balance=1000;
let credit=10000;
balance +=credit;
console.log("credit",balance)
let shopping=2000;
balance -=shopping;
console.log("shopping:",balance)
let interest=2
balance *=interest
console.log("interst:",balance)
balance /=2;
console.log("fee deduction:",balance)
//Check if balance is odd or even
console.log("Remainder when divided by 2:", balance % 2);


//comparison operator
let dbUsername="syam" //in db
let username="syam1"
if(username === dbUsername){
    console.log("username verified")
}
else{
    console.log("incorrect username")
}


//ecommerce website retrict based on age like alcohol,or cigarette
let userAge=20
const requireAge=18
if(userAge >= requireAge){
    console.log("u can buy this product")
}
else{
    console.log("u must be atleast 18years old")
}


//product discoutn based on cart value
let cartValue=400
const discount=500
if(cartValue<discount){
    console.log("add more item to get discount")

}
else{
    console.log("congrts u get a discount")
}


//A website forces users to set a new password different from the old one.

//not equal

let oldPassword="syam123"
let newPassword="syam123"
if(oldPassword !== newPassword){
    console.log("password update succesfully")
}
else{
    console.log("must be different from old one")
}

let n1=10;
let n2=20;
console.log(n1>n2);
console.log(n1<n2);
console.log(n1>=n2);
console.log(n1<=n2);
console.log(n1==n2);
console.log(n1!=n2);
console.log(n1===n2);
console.log(n1!==n2);


//logical operators
//AND (&&) - Both Conditions Must Be True
//A user can log in only if the username AND password are correct.
let dbUsernames="syam"
let dbPassword="syam123"

let enterUsername="syam"
let enterPassword="syam123"

if(enterUsername === dbUsernames && enterPassword === dbPassword){
    console.log("login successful")
}
else{
    console.log("incorrect password and uswrname")
}


let a1=5;
let a2=10;
console.log(a1>0 && a2>0);
console.log(a1>0 && a2<0);
console.log(a1<0 && a2>0);
console.log(a1<0 && a2<0);

//OR (||) - At Least One Condition Must Be True
//A customer gets a discount if they are a VIP member OR have a coupon.

let isVip=false;
let cupon=true;
if(isVip || cupon){
    console.log("u get a discount")
}
else{
    console.log("no discount")
}

let o1=5;
let o2=10;
console.log(o1>0 || o2<0);
console.log(o1>0 || o2<0);
console.log(o1<0 || o2>0);
console.log(o1<0 || o2<0);

//NOT (!) - Reverse the Boolean Value
//Example: Age Restriction on a Movie Website
//A movie streaming site denies access if the user is under 18.
let age=16;
let isAdult=age>=18
if(!isAdult){
    console.log("access denied")
}
else{
    console.log("acces granted")
}

let yes=true;
let no=false;
console.log(!yes);
console.log(!no);
//bitwise operator .....  Bitwise AND (&) Operator
let num = 4; // Binary: 0100
console.log(num & 1); // Output: 0 (Even)


//Bitwise AND with 1 can check if a number is even or odd.
function isEven(num) {
    return (num & 1) === 0; // If last bit is 0, it's even.
}

console.log(isEven(4)); // true (Even)
console.log(isEven(7)); // false (Odd)

//Basic XOR Operation
let z = 5;  // Binary:  0101
let b = 3;  // Binary:  0011
let result = z ^ b; // XOR Operation
console.log(result); // Output: 6

// ternary operator
// Checking Age for Voting Eligibility
let age1=18;
let canVote=(age1>=18)?"eligible to vote" : "not eligible to vote";
console.log(canVote)

//Checking Even or Odd
let number=7
let res=(number%2 === 0) ? "even" : "odd";
console.log(res)

let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome back!" : "Please log in.");

