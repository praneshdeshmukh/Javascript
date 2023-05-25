// ASYNC - AWAIT : Always returns a promise  

async function abcd() {
    return 7; // return Promise not just 7
}
console.log(abcd());

async function Weather() {

let delhi = new Promise ((resolve,reject) => {
    setTimeout(() => {
        resolve("delhi is hot")
    }, 5000);
});
let maharashtra = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("maharashtra is cool")
    },10000)
});

let dW = await delhi
let mW = await maharashtra

return [dW,mW];
}
Weather()
