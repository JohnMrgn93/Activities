// select all unordered list (ul) elements
console.log(document.querySelectorAll("ul"));
console.log(document.getElementsByTagName("ul"));

// select all elements with the class "class-week"
console.log(document.querySelectorAll(".my-class"));
console.log(document.getElementsByClassName("my-class"));
// select all elements with the class "nav-bar"
console.log(document.querySelector(".nav-bar"));
console.log(document.getElementsByClassName("nav-bar"));
// select the element with the id "dog-picture" and save it to a variable
let DogPic = document.querySelector("#dog-picture");
console.log(DogPic);