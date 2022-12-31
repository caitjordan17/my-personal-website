const h2 = document.createElement("h2");
h2.textContent = "Welcome!";

document.querySelector("body").appendChild(h2);


const input = document.getElementById('button');

function clickAlert() {
  alert('Caitlin has been informed!');
}

document.addEventListener('click', clickAlert);