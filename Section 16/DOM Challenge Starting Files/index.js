// Introduction to the DOM.
document.querySelector().innerHTML = "Good Bye";
document.querySelector().style.color = "red";
document.querySelector("input").click();

// Selecting Elements
document.getElementsByTagName("li");
document.getElementsByTagName("li").style.color = "purple"; // This does not work
document.getElementsByTagName("li")[2].style.color = "purple"; // This works
document.getElementsByTagName("li").length;

document.getElementsByClassName("btn");
document.getElementsByClassName("btn").style.color = "red"; // This does not work
document.getElementsByTagName("btn")[0].style.color = "red"; // This works

document.getElementById("title");
document.getElementById("title").innerHTML = "Good Bye";

document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list a");

document.querySelectorAll("#list .item");
document.querySelectorAll("#list .item")[2].style.color = "blue";

// Manipulating Elements
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.fontSize = "5em";
document.querySelector("button").style.backgroundColor = "yellow";

// Structuring vs Styling vs Behavior
document.querySelector("h1").classList.add("huge");

// Changing Text and Attributes
document.querySelector("h1").innerHTML = "<em>Good Bye</em>";

// Manipulating Attributes
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");
document.querySelector("a").setAttribute("href", "https://www.bing.com");
