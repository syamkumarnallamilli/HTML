Step-by-Step Explanation of reduce() in JavaScript
The reduce() method in JavaScript is used to reduce an array to a single value by applying a function to accumulate values. Let's break down how the following code works:

📌 Code:
javascript
Copy
Edit
function sum(total, num) {
  return total + num;
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = numbers.reduce(sum, 0);

console.log(totalSum);  
// ✅ Output: 15
🔹 Step 1: Understanding reduce() Syntax
javascript
Copy
Edit
array.reduce(callbackFunction, initialValue);
callbackFunction → A function that runs for each element in the array.
It takes two parameters:
total (accumulator) → Stores the running total.
num (current value) → The current element in the array.
initialValue → The starting value for total.
🔹 Step 2: Breaking Down Execution
The reduce() method starts with initialValue = 0 and iterates through the numbers array:

Iteration	Current num	Previous total	New total (total + num)
1st	1	0	0 + 1 = 1
2nd	2	1	1 + 2 = 3
3rd	3	3	3 + 3 = 6
4th	4	6	6 + 4 = 10
5th	5	10	10 + 5 = 15
🔹 Final Result: totalSum = 15

🔹 Step 3: How sum Function Works

function sum(total, num) {
  return total + num;
}
Takes two arguments:
total (accumulator) → Keeps the sum of previous values.
num → The current element of the array.
Returns the updated total, which will be passed to the next iteration.
🔹 Step 4: Equivalent for Loop (Without reduce())
If we were to manually implement reduce(), it would look like this:

javascript
Copy
Edit
const numbers = [1, 2, 3, 4, 5];
let totalSum = 0;

for (let i = 0; i < numbers.length; i++) {
  totalSum += numbers[i];
}

console.log(totalSum);  
// ✅ Output: 15
✅ reduce() replaces this loop in a more readable and functional way.

💡 Why Use reduce() Instead of a Loop?
✅ Concise & Readable → No need for a loop, works in one line.
✅ Functional Approach → Preferred in modern JavaScript for cleaner code.
✅ More Powerful → Can be used for multiplication, finding max/min, grouping data, etc.

