let name="syam"
console.log(`hello,${name}!`)

//multiline strings(noo need /n)
//template literals allow writing multi-line strings directly:

let message=`this
is
a
multi-line
string!`
console.log(message)

//String interpolation(dynamic values)

//without literals
let price=5000
let item="laptop"
console.log("the " + item + " cost RS." + price + ".")

//with template literals(cleaer&readable)
console.log(`the ${item} costs rs.${price}.`)

//calling fiunction inside template literals
function greet(names){
    return `hello,${names}!`

}
console.log(`${greet("syam")}`)

//Expression Evaluation in Template Literals
console.log(`5 + 10 = ${5 + 10}`);

let user = "Alice";
let age = 25;
let profile = `
  <div>
    <h2>${user}</h2>
    <p>Age: ${age}</p>
  </div>
`;
console.log(profile);
