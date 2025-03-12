// 1️⃣ Syntax Error
// Occurs when the JavaScript engine encounters incorrect syntax.
// console.log("Hello World"  // Missing closing parenthesis

    // 2️⃣ Reference Error
    // Occurs when trying to access an undefined variable or function.
    // console.log(userName);
      // 'userName' is not defined

//     3️⃣ Type Error
// Occurs when an operation is performed on a value of the wrong type.

// let num = 5;
// num(); 
 // Trying to call a number as a function


// 4️⃣ Range Error
// Occurs when a value is out of an allowable range.

// let arr = new Array(-5); 
 // Array size cannot be negative

//  7️⃣ Logical Error (Bug in Code)
//  Occurs when there is no syntax or runtime error, but the program gives the wrong result.
//A Logical Error (Bug) occurs when the program runs without syntax errors but produces incorrect results due to a flaw in the logic.
function calculateDiscount(price){
    let discount=10;
    return price-discount;

}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(10));

x=6;
y=6;
z=x+y;
