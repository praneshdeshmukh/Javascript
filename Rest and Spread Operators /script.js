let oneArr = [1, 2, 3, 4];
let twoArr = [5, 6, 7, 8, 9, 10]

// Ways to merge two arrays

// 01
let threeArr = [oneArr, twoArr]
console.log(threeArr);

// 02
const newArr = oneArr.concat(twoArr)
console.log(newArr);  //Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// 03 - SPREAD
const fourArr =  [...oneArr,...twoArr];
console.log(fourArr);   //Array(10) [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// SPREAD - transforms a given array into seperate single elements

let arr = ['data', 'structures']
let arr2 = ['and','algorithm'] 
let arr3 = [...arr,...arr2]
console.log(arr3); //Array(4) [ "data", "structures", "and", "algorithm" ]

// Arguments - Reserved keyword in javascript
function testOne() {
    console.log(arguments);
}
console.log(testOne(1,2,3))
console.log(testOne(1,2,3,4,5,6,7,8,9)) //arguments { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, … }

function testTwo() {
    console.log(typeof arguments); //object
}
testTwo(1,2)

// // Arrays
// let newArray = [1,2,3,4] // Method 1 to create an array
// let Array = new Array(1,2,3,4) // Method 2 to create an array

// Convert an object to an array

// SPREAD
function manyArguments() {
    let args = Array.from(arguments)
    let finalArr = args.map(el => el*2)
    console.log(finalArr);
}
manyArguments(1,2,3,4,5)

// REST
function manyArguments2(...arguments) {
    let args2 = arguments.map(e => e*2);
    console.log(args2);
}
manyArguments2(5,10,15,20)

// SPREAD eg-
const DC = ["superman","batman"]
const Marvel = ["Thor",...DC, "Ironman"] //SPREAD Operator is being used here
console.log(Marvel);

// REST eg-
function restOp (...arg){
    return arg
}
console.log(restOp("superman","flash")) // it will return an array

