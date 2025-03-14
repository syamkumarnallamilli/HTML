Closures in JavaScript
🔹 What is a Closure?
A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

➡️ Closures allow functions to access variables that were in scope when they were created.
function outerFunction() {
    let count = 0; // Variable inside the outer function

    function innerFunction() {
        count++; // Inner function accesses the outer function's variable
        console.log(count);
    }

    return innerFunction; // Returning inner function (closure)
}

const counter = outerFunction(); // counter now holds the inner function

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

➡️ Why does it work?
Even though outerFunction() has finished executing, innerFunction() still remembers the count variable, because it forms a closure over count.

🛠 Real-World Example: Private Data (Encapsulation)
Closures are useful for hiding data (private variables).

🔹 Example: Creating a Private Counter

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function () {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
console.log(counter.getCount()); // Output: 1
 Here, count is private and cannot be modified directly from outside.


