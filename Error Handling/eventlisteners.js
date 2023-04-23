// JAVASCRIPT :
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
// index.html
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Event listeners - 27/03/2023</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body>
//     <div class="wrapper">
//       <div class="btn">
//         <button class="btn btn1" id="clk">Clickkk me</button>
//         <button class="btn btn2" id="dbclickbtn">Double Click</button>
//         <button class="btn btn3" id="mouseovr">Hover Me</button>
//         <button class="btn btn4" id="mouseot">Mouse Out</button>
//       </div>
//     </div>
//     <div class="keypressbtn">
//       <h1 id="display">hello</h1>
//       <input type="text" id="inputbox" placeholder="type something..." />
//     </div>
//     <div id="press_key">
//       <div id="displaythis">Press any key</div>
//     </div>

//     <script src="eventListener.js"></script>
//   </body>
// </html>
// CSS
// body {
//   background-color: rgb(41, 128, 146);
// }
// .wrapper {
//   border: 2px solid black;
//   background-color: rgb(16, 145, 185);
// }
// .btn {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: #000;
//   padding: 0.8em 0.5em;
//   border: 1px solid black;
//   font-size: 0.9rem;
//   font-weight: 500;
// }
// #display {
//   color: blanchedalmond;
//   text-align: center;
// }

// #inputbox {
//   margin: 0 0 0.5em 7em;
//   font-style: oblique;
//   padding: 0.5em 1em;
//   font-size: 1.5rem;
// }
// #displaythis {
//   font-size: 2rem;
//   text-align: center;
// }
