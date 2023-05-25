// const myPromise1 = new Promise(function (resolve, reject) {
//     // console.log("i am inside promise");
//     setTimeout(() => {
//         console.log("hello i am inside promise1");
//     }, 5000)
//     // resolve(1996);
//     reject(new Error('Bro theres an ass error'));
// })
// .then((value) => { console.log(value) })
// .catch((error) => { console.log("Received an Error")})


// Also possible :
// .then((value) => { console.log(value) } , (error) => { console.log("Received an Error")})


// const myPromise2 = new Promise(function (resolve, reject) {
//     // console.log("i am inside promise");
//     setTimeout(() => {
//         console.log("hello i am inside promise2");
//     }, 3000)
//     // reject(new Error('Bro theres an ass error'));
// });

 
// console.log("first");

//  Promise Chaining 
let promise = new Promise(function(resolve,reject) {
    setTimeout(() => {
        console.log('set timeout1 started');
    },2000)
    resolve(true);
});

let output = promise.then(() => {
      let promise2 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            console.log('set timeout2 started');
        },3000) 
        resolve('promise2 started')
    })
return promise2; // whole promise is returning
}) 
output.then((val) => console.log("this is then's -> then " + val));
