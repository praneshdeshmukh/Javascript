// Event Listeners :-
// 01. click
let cbtn = document.getElementById("clk");
cbtn.addEventListener("click",singleclick);
function singleclick() {
    alert("you just pressed me!");
}
// 02. double click
let dbbtn = document.getElementById("dbclickbtn");
dbbtn.addEventListener("dblclick", doubleclick);
function doubleclick () {
    alert ('you just pressed me twice');
}
// 03. mouse over
let mor = document.getElementById("mouseovr");
mor.addEventListener("mouseover", mouseclick);
function mouseclick () {
    alert ('you just hovered me with your mouse');
}
// 04. mouse out
let mo = document.getElementById("mouseot");
mo.addEventListener("mouseout", mouseoutclick);
function mouseoutclick () {
    alert ('you just stopped hovering me with your mouse');
}
// 05. Key press
let inputbox = document.getElementById('inputbox')
let display = document.getElementById('display')
inputbox.addEventListener('keypress', function(e){
    display.innerText = "You just pressed this key :- " + e.key;
})
// 06. Key down & Key up
let press_key = document.getElementById('press_key')
let displaythis = document.getElementById('displaythis')
document.addEventListener("keydown", function(e){
    displaythis.style.color = "red";
    displaythis.innerText = e.key + "is pressed by you!";
})
document.addEventListener("keyup",function(e){
    displaythis.style.color = "purple";
    displaythis.innerText = e.key + " : is pressed by you!"
})
