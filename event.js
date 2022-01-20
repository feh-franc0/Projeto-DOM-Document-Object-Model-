// function myFunction(){
//     console.log("I AM CLICKED")
// }

//new method
// var button=document.querySelector("button");
// button.addEventListener("click",function(){
//     console.log("Jacascript")
// })

// var button=document.querySelector("button");
// button.addEventListener("click",myFunction);

// function myFunction(){
//     var listItems=document.getElementsByClassName("list-items");
//     console.log(listItems);
//     for(var i=0;i<listItems.length;i++){

//     listItems[i].style.backgroundColor="orange";
//     listItems[i].style.margin="2px";
//     listItems[i].innerHTML="Vegetables";
//     };
// }


// Event argument

// var button=document.querySelector("button");
// button.addEventListener("click",myFunction);

// function myFunction(e){
//     console.log(e);
// }

// var h1=document.createElement("h1");
// var text=document.createTextNode("This us new heading");
// h1.id="title";
// h1.appendChild(text);
// console.log(h1);
// var body=document.querySelector("body");
// body.appendChild(h1);
// var button=document.querySelector("button");
// button.addEventListener("click",myFunction);
// function myFunction(e){
//     var title=document.getElementById("title");
//     title.innerHTML=e.shiftKey;
//     console.log(e.altKey);
// }


// mouse events

// var newElement=document.getElementById("newElement");
// newElement.addEventListener("mouseleave",myFunction);

// function myFunction(e){
//     var body=document.querySelector("body");
//     body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",23)";
//     console.log(e.offsetX);
//     console.log(e.offsetY);    
// }


// // input event
// var input=document.querySelector('input[type="text"]');
// // console.log(input);
// input.addEventListener("keypress",myFunction);

// function myFunction(e){
//     console.log(e.type);
//     var p=document.querySelector('p');
//     p.innerHTML=e.target.value;
// }

// blur and focus eventfunction

// var input=document.querySelector('input[type="text"]');
// // console.log(input);
// input.addEventListener("blur",myFunction);
// function myFunction(e){
//     console.log(e.type);

// }

//  select event functions

// var select=document.querySelector("select");
// select.addEventListener("change",myFunction);
// function myFunction(e){
//     console.log(e.type);
//
// }

// submit event function
var form=document.querySelector("form");
form.addEventListener("submit",myFunction);
function myFunction(e){
    e.preventDefault();
    console.log(e.type);
}