// // setTimeout(() => {
// //    setTimeout(() => {
// //     setTimeout(() => {
// //        setTimeout(() => {
// //         setTimeout(() => {
// //             // callback hell
// //         }, 1000);
// //        }, 5000); 
// //     }, 3000);
// //    }, 4400); 
// // }, 10);
// --------------------------------------------
// Promsie use case = network calls
let p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log("i am a promise");
        resolve(5)
        // reject(new Error ("i am an error"))
    }, 1000);
})
console.log(p1); // Promise { <state>: "pending" }
let p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        // console.log("i am a promise");
        // resolve(true)
        reject(new Error())
    }, 1000);
})
console.log(p2); // Promise { <state>: "pending" } -> Promise { <state>: "fullfiled" }
// ------------------------------
p1.then((value) => {
    console.log(value*value); // 25
}).then(getdata)
// ------------------------
p2.then((value) => {
    console.log(value);
}).catch((error)=> {
    console.log("some error");
})
// --------------------------
function getdata() {
    console.log("i am an function");
}
// let prom = new Promise(resolve => {
//     setTimeout(() => 
//         resolve("done"),1000)
// }).then(alert).then(getdata).catch((er) => er)
// ----------------------------------------
// .then() chaining
let prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Promise 1 resolved after 2 secs");
        resolve(88)
    }, 2000);
})
prom1.then((value) => {
    console.log("we at 1st .then() :" + value);
    let prom2 = new Promise ((resolve,reject) => {
        resolve("Promise 2")
    })
    return prom2
}).then((value)=> {
    console.log("we are here : 2nd .then() :" + value);
    return 2
}).then((value) => {
    console.log("we are done",value);
    return 2
}).then((value) => {
    console.log("last",value);
})
// ---------------------------------------
let loadscript = (src) => {
    return new Promise ((resolve,reject) => {
        
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = src
    document.body.appendChild(script)
    script.onload = ()=> {
            resolve("script has been loaded")
        }
        script.onerror = ( ) => {
            reject(0)
        }
    })
}
let promise = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
// .then()
// let promise = loadscript("https://cdnd.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js") 
// if error is path = .catch() 
promise.then((value) => {
    console.log(value);
    return loadscript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value)=> {
    console.log("second script is ready");
    return value
}).then((value) => {
    console.log("third script is ready " + value);
}).catch((error) => {
    console.log("server issue....try again later");
})
