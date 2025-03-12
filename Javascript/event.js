// const button=document.getElementById("btns")
// button.addEventListener("click",dosomething)
// function dosomething(){
//     alert("hiii")
// }


//Method 1: Inline Event Handling
//<button onclick="alert('Button Clicked!')">Click Me</button>




//Using onclick Property

document.getElementById("btn1").onclick=function(){
    alert("button clicked")
}


////addEventListener()
document.getElementById("eventlistener").addEventListener("click",function(){
    alert("eventlistener")
})


// let user = document.getElementById("username")
//     user.onchange=(e)=>console.log(e.target.value)


//      user = document.getElementById("card")
//     user.onchange=(e)=>console.log(e.target.value)


//onmouseover
// function mouseover(){
//     document.getElementById("").style.width="400px";
//     // document.getElementById("image").src="image.png"
// }
// //onmouseout
// function mouseout(){
//      document.getElementById("image").style.width="250px"
//     // document.getElementById("image").src="aiImage.png"
// }


// var inputField = document.getElementById("data");
// var btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     alert("Value is: " + inputField.value);
// });


const ints = document.getElementById("btn");
ints.onchange = (e) => console.log(e.target.value);