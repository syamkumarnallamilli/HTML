//single line comment
let name='john' // name
console.log(name); //output john


/*
This is a multi-line comment.
It can span multiple lines.
*/
console.log("Hello, World!");

//3.Commenting Out Code for Debugging
let message="hello";
//console.log(message);
console.log("this is another message");

//4.TODO Comments (// TODO:)
//TODO: implement usr authenication
function login(){
    console.log("login feature");
}


//5.ixMe Comments (// FIXME:) indicate that a piece of code needs fixing.
// FIXME: This function does not handle negative numbers correctly
function multiply(a, b) {
    return a * b;
}


//6.Documentation Comments (/** ... * /)
/**
 * Adds two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
    return a + b;
}
console.log(add(3,2));

console.log(userName);  // 'userName' is not defined
