console.log(document);
let x = document.getElementById("one");
console.log(x)
console.log(x.className)
x.className = "chocolate";
document.getElementById('two').className = "green";
document.getElementById('three').className = "red"
let MyElement = document.querySelectorAll('.green');
console.log(MyElement);
for (let i = 0; i < MyElement.length; i++) {
    const  element = MyElement[i];
    element.className = "red"
}
let nodelist = document.querySelectorAll('.item');
let htmlCollection = document.getElementsByClassName("item");
const newDiv = document.createElement('div');
newDiv.className = 'item';
newDiv.textContent = "4";
document.body.appendChild(newDiv);
console.log(nodelist);
console.log(htmlCollection);
x.classList.add("box");
x.classList.add("box");
const spendit = document.getElementsByClassName('green');
spendit[0].classList.add('box');


const spend = document.querySelector(".green");
spend.classList.add("box");

let el = document.querySelector('#two');
el.classList.add('double');
console.log(el);
el.innerHTML= "Billionier"

let main = document.getElementById('main-wrapper');
console.log(main)

function color () {
    main.style.backgroundColor= "yellow";
    main.style.Color= "brown";
}
let el = document.getElementById('three');
let elmy = document.getElementById('two');
el.addEventListener("click", backgroundchange);
elmy.onmouseover = background;
function backgroundchange() {
    document.body.style.backgroundColor = "black"
}
function background() {
    document.body.style.backgroundColor = ""
}
let evanlink = document.getElementById("evan");
function Event(event) {
event.preventDefault();
evanlink.textContent = "SitDown";
}
evanlink.addEventListener("click", Event); 
let myForm = document.getElementById("formID");

function pap(e) {
    e.preventDefault();
    console.log("submission Form");

    let myInput = document.querySelectorAll("#formID input");

    // Reset background colors
    myInput[0].style.backgroundColor = "";
    myInput[1].style.backgroundColor = "";

    // Check first name
    if (myInput[0].value.length === 0) {
        alert("Please Enter First Name");
        myInput[0].style.backgroundColor = "pink";
        return;
    }

    // Check last name
    if (myInput[1].value.length === 0) {
        alert("Please Enter Last Name");
        myInput[1].style.backgroundColor = "pink";
        return;
    }

    // Show output
    let result = document.getElementById("result");
    result.textContent = `${myInput[0].value} ${myInput[1].value}`;
    }

myForm.addEventListener("submit", pap);
let myForm = document.getElementById("formID");
function pack(e) {
    e.preventDefault();
    let myInput = document.querySelectorAll("#formID input");

    myInput[0].value.length === 0;
    myInput[1].value.length === 0;

    if (myInput[0].value.length === 0) {
        alert("Please Enter first name");
        myInput[0].style.backgroundColor = "pink";
    }
    if (myInput[1].value.length === 0) {
        alert("Please Enter last name");
        myInput[1].style.backgroundColor = "pink";
    }
    let output = `${myInput[0].value} ${myInput[1].value}`;
    let result = document.getElementById("result");
    result.textContent = output;
}
myForm.addEventListener('submit', pack)

