//Selectors

// getElementById

// var list=document.getElementById("list");
// console.log(list);
// list.innerText="Fruits";
// list.textContent="Fruits1"

//var heading=document.getElementById("heading");
//console.log(heading.textContent);
//console.log(heading.innerText);

// getElementsByClassname

//var listItem = document.getElementsByClassName('list-items');
// console.log(listItem);
// console.log(listItem[2].innerHTML);
// listItem[2].innerHTML="Banana";
// listItem[0].style.color="yellow";
// listItem[2].style.color="red";

//var i;
//for(i=0;i<listItem.length;i++){
//    listItem[i].style.backgroundColor="orange";
//    listItem[i].style.fontSize="25px";
//    // listItem[i].innerHTML="Fruits";
//}

// tagsname
//var input=document.getElementsByTagName('ul');
//console.log(input);

// querySelector
// var list=document.querySelector('li');
// console.log(list);
// querySelectorAll
//var list=document.querySelectorAll('.list-items');
//console.log(list);
//var i;
//for(i=0;i<list.length;i++){
//    list[i].style.backgroundColor="red";
//    list[i].style.fontSize="20px";
//    //listItem[1].innerHTML="Fruits";
//}


// var list=document.getElementsByTagName('li');
// console.log(list);
// var li1=list[0];
// console.log(li1);
// // li1.style.color="yellow";
// li1.innerHTML="Banana";



// session2
// Traversing nodes

// var list=document.querySelector("#list");
// console.log(list.parentNode);
// console.log(list.parentElement);
//var body=document.querySelector("body");
//console.log(body.parentNode);
//console.log(body.parentElement);

// var body=document.querySelector("li");
// console.log(body.parentNode);
// console.log(body.parentElement);

//  childnode and chid element
var list=document.querySelector("#list");
//console.log(list.childNodes);
//console.log(list.children);
//console.log(list.children[1]);
//console.log(list.firstChild);
//console.log(list.firstElementChild);
//console.log(list.lastChild);
//console.log(list.lastElementChild);

// console.log(list.previousSibling);
// console.log(list.previousElementSibling.previousElementSibling);

//console.log(list.nextSibling);
//console.log(list.nextElementSibling);

//  Creating Elements
//var h1=document.createElement('h1');
//console.log(h1);
//h1.className="heading";
//h1.id="heading1";
//h1.setAttribute('title','iam heading');
//
//var headingText=document.createTextNode("this is my heading");
//h1.appendChild(headingText);

//var newElement=document.getElementById("newElement");
//newElement.innerHTML=h1;

//var body=document.querySelector("body");
//var input=document.querySelector("input");
//body.insertBefore(h1,input);

// var input=document.querySelector("input");
// input.remove();

// var body=document.querySelector("body");
// var button=document.querySelector("button");
// body.removeChild(button);

// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// console.log(para);

// var body = document.querySelector("body")
// var p = document.querySelector("p")

// body.replaceChild(para, p);