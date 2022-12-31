const h2 = document.createElement("h2");
h2.textContent = "Welcome!";

document.querySelector("body").appendChild(h2);

document.addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("input").innerHTML = "Thanks for interacting!";
}