let str1="hello"
let str2='world'
let str3=`javascript`
console.log(str1,str2,str3)
console.log("concatention:", str1 + " " +str2 + " " + str3)
console.log("length:",str3.length)

console.log("using template literals:", `hello world ${str3}` )

//string comparison
console.log("apple" === "apple"); 
console.log("apple" > "banana");  
console.log("abc".localeCompare("abd")); 


//localecompare
let fruits = ["banana", "apple", "grape"];

fruits.sort((a, b) => a.localeCompare(b)); //banana compare apple

console.log(fruits);

let text = "This is a backslash: \\";
console.log(text);  
// ✅ Output: This is a backslash: \



//string methods

//toUpperCase()
let text1="javascript"
console.log(text1.toUpperCase())

//toLowerCase()
let text2="SYAM KUMAR"
console.log(text2.toLowerCase())

//trim() remove spaces from both ends
let email=" syam@gmail.com "
console.log(email.trim())


//slice(start,end) extract a part of a string
let phoneNumber="+91-9876543210"
console.log(phoneNumber.slice(1,3))

//replace("old", "new") → Replaces part of a string

let feedBack="this is a bad product"
console.log(feedBack.replace("bad","good"))

//include("word")--> checks if a string contained a word
let review="this laptop is amazing!"
console.log(review.includes("laptop"))

//split("delimeter")-->splits into an array
let sentence="i am a good boy"
console.log(sentence.split(" "))

