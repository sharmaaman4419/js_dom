//Select the section with an id of container without using querySelector.
 var section = document.getElementById("container");

//Select the section with an id of container using querySelector.
var section1 = document.querySelector("#container");

//Select all of the list items with a class of "second".
var section2 = document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.

var file = document.querySelector("ol");
console.log(file)

//Give the section with an id of container the text "Hello!".



//Add the class main to the div with a class of footer.

var section3 = document.querySelector(".footer");
section3.classList.add("main");

//Remove the class main on the div with a class of footer.
section3.classList.remove("main");

//Create a new li element.

var section4 = document.createElement("li");

//Give the li the text "four".

section4.textContent = "four";


//Append the li to the ul element.

var ul1 = document.querySelector("ul");
ul1.appendChild(section4);

//Loop over all of the list inside the ol tag and give them a background color of "green".
var ol1 = document.querySelector("ol");
ol1 = document.querySelectorAll("li");
ol1.forEach(value => value.style.backgroundcolor = "red")

//Remove the div with a class of footer.
var doctt = document.querySelector(".footer");
doctt.style.display = "none";
