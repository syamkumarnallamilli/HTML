let person={
    name:"syam",
    lname:"kumar",
    desg:"java developer",
    isEmployee:true,
    salary:100
}
console.log(person)
console.log(person.salary)  //dot notation==>it must be fixed,property name is valid js identifier(no space,special character,number at the begining)
for(let i in person){
  console.log(i, ":",person[i])
}

//bracket notation
//the property name has space or special character
//the property name is a number
//the property name is stored in a variable

let key="age1"
let person1= {
    "first name":"syam",
    lastName:"kumar",
    3:"b.tech",
    age1:22
}  
console.log(person1)
console.log(person1[3])
console.log(person1[key])
console.log(person1["first name"])
console.log(person1.lastName)


console.log( "lastName" in person1)


//using new
const Person123 =new Object()
Person123.name = "syam..."
Person123.age= 23
console.log(Person123)

//using function as a constructor
function Person12(name,empid,desg,salary){
  // let obj=Object.create(null)
  // obj.Name=name;
  // obj.EmployeeId=empid;
  // return obj;
  this.Name=name;
  this.EmployeeId=empid;

}
let User1=new Person12("syam.....",1234)
console.log(User1.Name)
console.log(JSON.stringify(User1))                 //output:Person12 { Name: 'syam', EmployeeId: 1234 }  to overcome this  we can create an object instead this keyword because its old version
                            // this old version we can update this constructior by using class and constructor(recommended)
                            //JavaScript object into a JSON (JavaScript Object Notation) string.
// ..............................................




const person2 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person3 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}

console.log(person2.firstName);
console.log(person3.firstName);

person2.sayHello();
person2.eat();
person3.sayHello();
person3.eat();


let ob ={
    name1:"java",
    name2:"jscript",
    fun:function(){
        console.log(`this ia a ${this.name2} language.`)
    }

}
ob.fun()

const person4 = {
    name: "syam",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}
person4.sayHello()
person4.eat()

console.log(this)


//empty object
const people={}

//add propereties
people.firstNmae="syam"
people.lastname="kumar"
people.age=22
console.log(people)
console.log(`${people.firstNmae} is a ${people.age} years old`)




//Create an Object
const persons = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = persons;

// Change Age in both
x.age = 10;
console.log(x)



///adding
const person5 = {
firstname: "John",
lastname: "Doe",
age: 50,
eyecolor: "blue"
};

person5.nationality = "English";
console.log(person5)
delete person5.age
console.log(person5)



//nested objects
const myObj = {
    name: "John",
    age: 30,
    myCars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }
  
console.log(myObj.myCars.car1)

  let p1 = "myCars";
  let p2 = "car2";
  console.log(myObj[p1][p2])


  //method objexcts
  const person6 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;  //this.firstName means the firstName property of person.

      //this.lastName means the lastName property of person.
    }
  };
  

  //Adding a Method
  person6.desg=function(){
    console.log(`${this.lastName} is  a webDeveloper`)

  }
  person6.desg()
  console.log(person6.fullName())

  //touppercase
  person6.desg=function(){
    console.log(`${this.lastName} is  a webDeveloper`.toUpperCase())

  }
  person6.desg();




  //object methods

  //object.keys(obj) ==> it exrtracts the propert names(Returns keys (property names))  array  of keys
  const person7 = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

console.log(Object.keys(person7));


//object.values(obj)==>Returns  array of values
console.log("arrays of values",Object.values(person7))

//object.entries(obj)==>Returns  array of key-value pairs
console.log("arrays of key-value",Object.entries(person7))


//Object.assign(target, source)==>It copies properties from one or more objects (source) into another object (target).

const person8 = { firstName: "John", lastName: "Doe" };
const additionalInfo = { age: 30, city: "New York" };
Object.assign(person8, additionalInfo);
console.log(person8)
//merging two objects without affection original object
const merged=Object.assign({},person8,additionalInfo)
console.log("merging object",merged)


//hasOwnProperty(prop) ==>Checks whether an object directly owns a given property.,Returns true if the property exists in the object, otherwise false.

console.log(person8.hasOwnProperty("age"))
console.log(person8.hasOwnProperty("salary"))
console.log(typeof person8)



//Object Constructor Functions


function Person9(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  //Constructor Function Methods
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

// Create object
const myFather = new Person9("John", "Doe", 50, "blue");
const myMother = new Person9("sally", "rally", 30, "puprle");
const myBrother = new Person9("Johnny", "rally", 25, "white");
//add property
myFather.Weight=60
console.log(myFather.eyeColor)
console.log(myFather)

//adding a Property to a Constructor
Person9.prototype.salary=1200
console.log(myBrother.salary)

console.log(myFather.fullName())


//Adding a Method to an Object

myMother.changeName = function (name) {
  this.lastName = name;
}
// Change Name
myMother.changeName("superWomen");
console.log(myMother.lastName)

