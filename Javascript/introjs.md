1. Introduction to JavaScript
🔹 What is JavaScript?
JavaScript (JS) is a high-level, interpreted programming language used to make web pages interactive.

HTML creates the structure 🏗️
CSS styles the structure 🎨
JavaScript adds interactivity 🖱️
✅ Real-World Example:
Imagine you visit an e-commerce website like Amazon:

HTML → Displays product images, text, and buttons.
CSS → Styles the buttons, images, and layout.
JavaScript → Handles button clicks, adds items to the cart, and updates prices dynamically.
🔹 Before JavaScript: Websites were static like PDFs.
🔹 After JavaScript: Websites became interactive, like apps.

🔹 Why is JavaScript Used?
✅ Client-Side (Frontend)

Update webpages without refreshing (like Google Search suggestions).
Create animations and dynamic elements.
Validate forms before sending data to the server.
✅ Server-Side (Backend with Node.js)

Handle user authentication (like logging into Facebook).
Process payments (like in PayPal).
Store and retrieve data from databases.
✅ Other Uses:

Mobile Apps (React Native, Ionic).
Desktop Apps (Electron.js → VS Code).
Game Development (Phaser.js).
🔹 How JavaScript Works in the Browser?
When a web page loads, the browser executes JavaScript line by line inside its JavaScript Engine.

✅ Real-World Example:
Think of JavaScript as a chef 👨‍🍳 in a restaurant:
1️⃣ The HTML is like the menu (structure).
2️⃣ The CSS is the food styling (presentation).
3️⃣ The JavaScript is the chef preparing food based on orders (actions).

🔹 JavaScript vs Other Languages
Feature	JavaScript	Python / Java / C++
Runs on	Browser, Server (Node.js)	Mostly on Servers
Paradigm	Event-driven, Functional	Object-Oriented
Compilation	Interpreted (No Compile)	Compiled
Speed	Fast in Browsers (V8)	Slower than JS (except C++)
Use Cases	Web Apps, UI, Backend	Data Science, AI, Desktop Apps
✅ 2. JavaScript Execution Flow
🔹 JavaScript Engine (V8, SpiderMonkey)
JavaScript engines convert JS code into machine code so browsers can execute it faster.

✅ Popular Engines:

V8 Engine (Google Chrome, Node.js) 🚀
SpiderMonkey (Firefox) 🔥
JavaScriptCore (Safari) 🍏
🔹 How JavaScript Code Runs?
1️⃣ Code is loaded into the browser.
2️⃣ JS Engine reads the code line by line.
3️⃣ Execution Context is created (explained below).
4️⃣ Call Stack executes functions in order.

✅ Real-World Example:
Think of JS Engine as a Factory Manager:

Receives an instruction (JS Code).
Assigns tasks to workers (Execution Context, Call Stack).
Ensures everything runs smoothly & efficiently.
🔹 Role of Call Stack & Execution Context
💡 Execution Context:

Global Execution Context (GEC): Runs first when JavaScript starts.
Function Execution Context (FEC): Created whenever a function is called.
💡 Call Stack:

Stores and manages function execution.
Last In, First Out (LIFO) principle.
✅ Example:


function greet() {
    console.log("Hello, World!");
}
greet();
console.log("End of script");
📌 Call Stack Execution:
1️⃣ greet() is called → A new Execution Context is created.
2️⃣ "Hello, World!" is printed → The Execution Context is removed.
3️⃣ "End of script" is printed.

✅ Real-World Example:
Think of the Call Stack as a Stack of Plates:

New plates (functions) are added on top.
Only the top plate (last function) can be removed first.