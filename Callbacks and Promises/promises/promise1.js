// 01
let p = new Promise((resolve,reject) => {
    let a = 1 + 3
    if(a == 2) {
        resolve('Success')
    }
    else {
        reject('Failure');
    }
})
p.then((value) => {
    console.log("this is then : " + value);
}).catch ((message)=> {
    console.log("this is catch : " + message);
})

// 02
const userleft = false;
const userWatchingmemes = false;


function callbacks() {
    return new Promise((resolve,reject) => {
        if (userleft) {
            reject({
                name : 'user left',
                message : ' :{'
            })
        }else if (userWatchingmemes) {
            reject({
                name : 'user watching memes',
                message :':)'
            })
        } else {
            resolve("GOOD MORNING !");
        }
    })
}
callbacks().then((message) => {
    console.log("message is " + message);
    return message
}).then((message) => {
    console.log("again, message is " + message);
}).catch((error)=> {
    console.log(error.name + " " + error.message );
})
// 03 Parallel execution
const once = new Promise((resolve,reject) => {
    resolve('once upon a time...')
})
const twice = new Promise((resolve,reject) => {
    resolve('Twice upon a time...')
})
const thrice = new Promise((resolve,reject) => {
    resolve('thrice upon a time...')
})
Promise.all([
    once,
    twice,
    thrice
]).then((message) => {
    console.log(message); // waits for all to run
})
// Promise.race([
//     once,
//     twice,
//     thrice
// ]).then((message) => {
//     console.log(message); // only prints the first which ran before others
// })
