// // HOF - passing a function as argument
function g(n,exec) {
    console.log(n*n);
    exec(n)
}
g(10,h)
function h(n) {
    console.log( "The value of square is : " + n);
}
// // execution : g() --> 100 --> h() --> "The value of..."
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Callbacks
console.log("start");
setTimeout(function n() {
    console.log("1");
},20)
setTimeout(function j() {
    console.log("2");
},0)
console.log("end");
// execution : start --> end --> n() & j() goes to callStack through a queue
// op- start --> end --> 2 --> 1
// js first runs it standard globalized concepts then it allows to run code of its runtime environment
// jsRunTimeEnvi - browser,etc

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
let datas = [
    {name : "person1", city : "Aurangabad"},
    {name : "person2" , city : "Jabalpur"}
];
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This code will not work if the getdata() function has timeout set lesser than the createdata() function
// because as the getdata() executes having timeout lesser than createdata(), it refreshes the page cz of which it does not runs
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getdata() {
//     setTimeout(() => {
//         let output = "" ;// empty variable
//         datas.forEach((dat,index) => {
//             output+= `<ul><li>${dat.name}</li></ul>`;
//         })
//         document.body.innerHTML = output
//     }, 1000); // on 5000 will work 
// }
// function createdata(newdata) {
//     setTimeout(() => {
//         datas.push(newdata)   
//     },2000);
// }
// createdata({name : "barista" , city : "Aurangabad"})
// getdata()
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// To fix this - Use CALLBACKS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getdata() {
//     setTimeout(() => {
//         let output = "" ;// empty variable
//         datas.forEach((dat,index) => {
//             output+= `<ul><li>${dat.name}</li></ul>`;
//         })
//         document.body.innerHTML = output
//     }, 1000);
// }
// function createdata(newdata,getdata) {
//     setTimeout(() => {
//         datas.push(newdata)
//         getdata()   
//     },2000);
// }
// createdata({name : "barista" , city : "Aurangabad"},getdata);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// OR this ,
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function createdata(getdata) {
//     setTimeout(() => {
//         datas.push({name : "barista" , city : "Aurangabad"})
//         getdata()
//     },2000);
// }
// createdata(getdata)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Promise - return new Promise((resolve,reject) {});
//                               resolve  = everything good
//                                       reject = if error spot
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let newdatas = [ 
    {name : "spiderman" , place : "Marvel"},
    {name : "superman" , place : "DC"},
];
function gdata() {
    setTimeout(() => {
        let result = "" ;// empty variable
        newdatas.forEach((data,index) => {
            result+= `<ul><li>${data.name}</li></ul>`;
        })
        document.body.innerHTML = result
    }, 1000);
}
function cdata(ndata) {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            newdatas.push(ndata)
            let someBug = false
            // let someBug = true
            if (!someBug) {
                resolve()
            }
            else {
                reject("There is an error");
            }
        },2000);
    });
}
// cdata({name : "movies" , city : "Aurangabad"}).then(gdata).catch((err) => console.log(err));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Async & await - only works on asynchronous functions
// await = only valid if function is asynchronous
// tells the next function to wait until the executing functions is over
// so there is no dependancy
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function start() {
  await cdata({name : "movies" , city : "Aurangabad"});
  gdata()
  console.log("geeeeeeeeeeeeeeeerafh");
};
start()
