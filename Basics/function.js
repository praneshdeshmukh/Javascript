// Functions - It is a block of code to fulfill a specific task

// Hoisting - It is a process of moving function declaration to the top of file and this is done automatically by JS engine
run() // will it run now? Yes (Hoisting)

// function declaration
function run() {
    console.log("i ran");
}
// run() // it will run but,


// Named function assignment - 
// assign() // Won't work for this
let assign = function walk() {
    console.log("walking");
}
assign()

let jump = assign
jump()

// Anonymous function assignment -
let Anonymous = function() {
    console.log("sleeping");
};
Anonymous()

// Default Parameters
function sum(a,b='ish') {
    console.log("Sum :"+a+b); 
}
sum(3)

function interest(p,r=5,n=2) {
    return p*r*n/100
}
console.log( interest(1000, 10, 5) )

// Arguments Object [its not an Array!!!]
function multiply(a,b) {
    console.log(arguments);
    let total = 0;
    for(let value of arguments) {
        total = total + value
    }
    console.log(total);
    console.log("Multiplication :"+a*b);
}
multiply(2,3,6,9,6,8,5,16) // what about arguments from  3to16 => is accessible through arguments object

// Rest Operator [...] [returns an Array!]
function sqaure(num,...args) {
    console.log(args); // Array(8) [ 2, 6, 58, 9, 79, 46, 469, 4 ]
    console.log(num); //1
}
sqaure(1,2,6,58,9,79,46,469,4)
// function sqaure(num,...args,num2) {} NOT ALlOWED Parameters after rest operator

// getter => access properties
// setter => change or mutate properties
let person = {
    fName : "Love",
    lName : "Babbar",
};
// console.log(person);
function fullName(prsn) {
    return `${prsn.fName} ${prsn.lName}`
}
// issue => read only [can't update]
console.log(fullName(person));

let personV2 = {
    // solution => go inside object => create getter&setter
    fName : "Pranesh",
    lName : "Deshmukh",
    get fullName() {
        return `${personV2.fName} ${personV2.lName}`
    },
    set fullName(value) {
        // if(typeof value !== String) {
        //     throw new Error("You have not sent a string!")
        // }
        let parts = value.split(' ')
        // returns an array
        this.fName = parts[0]
        this.lName = parts[1]
    },
};
personV2.fullName = "rahul kumar"
console.log(personV2.fullName);

// Try and catch
/* try {

} catch() {
     throw //custom error message
 } */

 /* try {
     personV2.fullName = 'rahul tripathi'
    // personV2.fullName = true 
}
catch(e) {
    // alert('You have sent a number in fullName')
    alert(e)
}
console.log(personV2.fullName);
*/

// block -
// let - scope is till its nearest code block
// var - scope is in which function its defined ,
      // if its not defined in a function ,
      // its scope will be entire fill, and can be accesed anywhere.
// -------------------------------------
// {
//     let a = 5;
// }
// console.log(a); a is not defined
// ---------------------------------------
// {
//     var a = 5;
// }
// console.log(a); // 5
// --------------------------------
// function Hoisting() {
    // var z = 60
// }
// console.log(z); z is not defined
// ------------------------------
// for (var i = 0; i < array.length; i++) {
    // const element = array[i];
// }
// console.log(i); // possible
// -------------------------------
// for (let i = 0; i < array.length; i++) {
    // const element = array[i];
// }
// console.log(i); // not possible
// ---------------------------------------------
/* function a(){
    const ab = 5
}
// No error 
function b() {
    const ab = 5
} */
// ----------------------------------
// const a = 5
// function myz () {
//     const a = 5
// } // No error
