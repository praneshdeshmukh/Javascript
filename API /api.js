// FETCH API : output is always a promise
// can send or receive data from network

// json - javascript object notation
/* eg - object formatted output
let obj = {
    heading : "header"
}
*/

// GET / Retrieve call
// async function utility() {
    // let fetchApi = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    // let result = await fetchApi.json();
    // console.log(result);
// }
 
// POST / Send call 

async function helper() {
let options = {
    method : 'POST',
    // JSON.stringify - converts json object format to string
    body: JSON.stringify({
        title: 'Pranesh',
        body: 'Strong Body',
        userId: 1996,
        weight : 50,
    }),
    headers: {
        'Content-type' : 'application/json; charset=UTF-8',
    },
};

    let content = await fetch('https://jsonplaceholder.typicode.com/posts' , options);
    let response = content.json();
    return response;
}

async function utilitytwo() {
    let ans = await helper();
    console.log(ans);
}
utilitytwo()
