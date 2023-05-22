// // monitorEvents() - to track all events on screen
// // unmonitorEvents() - to untrack
// function print () {
//     console.log('i have clicked on document');
// }
// document.addEventListener('click', print)
// document.removeEventListener('click', print)

let links = document.querySelectorAll('a');

let thirdLink = links[1];

thirdLink.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("maza aya accha laga");
})

// let myDiv = document.createElement('div')

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p')
//     newElement.textContent = "i am para number " + i;
//     newElement.addEventListener('click',function () {
//         console.log('i have cliked on para');
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// More optimized code - taking function to log a message out rather than running it on 100 different objects everytime
// let myDiv = document.createElement('div')
// function mypara () {
//     console.log('i have clicked on para');
// }
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p')
//     newElement.textContent = "i am para number " + i;
//     newElement.addEventListener('click', mypara);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

/* MORE OPTIMIZED CODE - adding event listener on single div itself rather than adding it on 100 different elements/objects each time to minimize time
but by adding it on div we lost our paragraph specificness 
 now , clicking anywhere on div it will log the message even on the other elements in that div except the paragraphs also. 
 */
// let myDiv = document.createElement('div');
// function mypara() {
//     console.log("i have clicked on a para");
// }
// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p')
//     newElement.textContent = "This is para number " + i;
//     myDiv.addEventListener('click', mypara);
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// to correct this - event.target()
let myDiv = document.createElement('div');
function mypara(event) {
    if(event.target.nodeName === 'P') {
    console.log("Para" + event.target.textContent);
    }
}
myDiv.addEventListener('click', mypara);

for(let i=1; i<=100; i++) {
    let newElement = document.createElement('p')
    newElement.textContent = "This is para number " + i;
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
