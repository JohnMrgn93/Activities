// create a new unordered list (ul) element
 const unorderedList = document.createElement("ul;");
// remove the paragraph element in the nav-bar
document.querySelector("nav-bar > p").remove()
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
const ListElementOne = document.createAttribute("li");
const ListElementTwo = document.createAttribute("li");
ListElementOne.textContent = "I added Text";
ListElementTwo.textContent = "I added some more text";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(ListElementOne);