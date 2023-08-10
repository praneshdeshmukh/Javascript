// Math.random()
// Math.abs()
// Math.round()
// // let lastname = " love  "
// // console.log(lastname);
// // let firstname = new String("coder")
// // console.log(firstname);
// // String Methods -
// // trim
// // replace
// // startsWith
// // endsWith
// // toUpperCase
// // toLowercase
// // includes
// // length
// // indexOf
// // 
// // let message = 
// // `
// // Hello ${lastname}
// // Thanks
// // `
// // let message = "This is my first message"
// // let words = message.split(" ") // Array(5) [ "This", "is", "my", "first", "Message" ]
// // console.log(words);
// // 
// // console.log(message);
// // 
// Date -
// // let date = new Date('September 12 2003 05:15')
// // 
// // let date2 = new Date(2003, 8 , 12 , 5)
// // console.log(date);
// // console.log(date2);
// // 
// // date2.setFullYear(1996)
// // console.log(date2);
// // let res = date2.getFullYear()
// // console.log(res); // 1996
// // 
// // Arrays -
// // Adding new element'
// // Finding Element
// // Removing element
// // Ṣplitting element
// // combining element

// let numbers = [1,6,8,9,10]
// console.log(numbers);
// // Insertion 
// // End => numbers.push()
// // Begin => numbers.unshift()
// // Middle => numbers.splice(indexLocation , No.of el to delete, ele to insert at deleted index)
// numbers.push(11)
// console.log(numbers);
// numbers.unshift(0)
// console.log(numbers);
// numbers.splice(2,0,'a','b','c','d')
// console.log(numbers);

// // searching
// console.log(numbers);
// console.log(numbers.indexOf(9));

// // we want to check if number is present in an 
// sjdjsii
// if(numbers.indexOf(9) !== -1) {
//     console.log("present");
// }
// console.log(numbers.includes(7)) // false

// console.log(numbers.indexOf('d',4))

let courses = [
    {no:1, name : "Love"},
    {no:2,name : "Rahul"},
];
console.log(courses);

// Searching -> Primitive -> indexOf() | includes()  (Possible)
// Searching -> Objects/Refrence -> indexOf() | includes()  (NotPossible)
// Searching -> Objects/Refrence -> Callback functions (Possible)


// arrayName.find(callback function) returns an object
// let o = course.find(function(course) {
//     return course.name === "Love"
// })
let o = courses.find(course => course.name === "Love")
console.log(o); 

// Removing an element //
// end => pop()
// Begin => shift()
// Middle => splice()
let numberV2 = [1,2,3,4,5]
console.log(numberV2);
numberV2.pop()
console.log(numberV2);
numberV2.shift()
console.log(numberV2);
numberV2.splice(1,1,'b')
console.log(numberV2);

// Emptying an array
let numbersV4 = [1,2,3,45,6]
let numbersV5 = numbersV4
numbersV4.length = 0
console.log(numbersV4); // []
console.log(numbersV5); // []

let numbersV6 = [1,2,3,4,56,7]
numbersV6.splice(0,numbersV6.length)
console.log(numbersV6); // []

// let numbersV7 = [1,2,3,4,5,67,8]
// while(numbersV7.length > 0) {
    // numbersV7.pop()
    // numbersV7++;
// }
// console.log(numbersV7);
 
// Combining & Slicing array
let first = [1,2,3]
let second = [2,3,4]
let combine = first.concat(second)
console.log(combine);

let combineV2 = [...first, 'a',false, ...second,true] 
console.log(combineV2); //  [ 1, 2, 3, "a", false, 2, 3, 4, true ]

// slice(startIndex, endIndex)
let sliced = combineV2.slice(2,5)
console.log(sliced);

// Iterate an array
let arr = [100,200,300,400,500,600,700,800,900,1200]
for(let value of arr) {
    console.log(value);
}
arr.reverse().forEach(function(number) {
    console.log(number); 
})

arr.forEach(number => console.log(number))

// Joing arrays
let numbersV8 = [10,20,30,40,50]
const joined = numbersV8.join(" | ")
console.log(joined); 
// Split arrays - string method
let message = "This is my first message"
let parts = message.split(' ')
console.log(parts); // [ "This", "is", "my", "first", "message" ]
let partsJoin = parts.join('_')
console.log(partsJoin); // This_is_my_first_message

// Sorting array
let numbersV9 = [1,5,2,4,9,8,6,7]
numbersV9.sort()
console.log(numbersV9);
numbersV9.reverse()
console.log(numbersV9);

let arr2 = [
    {id : 2 , name : "Love"},
    {id : 1 , name : "pranesh"},
];
arr2.sort() 
console.log(arr2);

// Filtering arrays -
// arrayname.filter(cbF())
let numberV10 = [1,2,3,-5,-2,9]
let filtered = numberV10.filter(function(value) {
    // if(value > 0) {
    //     console.log(value)
    // }
    return value >= 0
})
console.log(filtered);
let numbersV11 = [1,2,3,-5,-2,9]
let filteredV2 = numbersV11.filter(value => value > 0)
console.log(filteredV2);

// Mapping function
let numbersV12 = [7,8,9,10,56]
let mapped = numbersV12.map(function(value) {
    return 'student_no_' + value
})
console.log(mapped);

let mappedV2 = numbersV12.map(value => 'student_no_' + value)
console.log(mappedV2);
// Mapping with objects
let numbersV13 = [1,2,3,-6,-9]
let filteredV3 = numbersV13.filter((value) => value >=0)
console.log(filteredV3);
let o2 = filteredV3.map(function(num) {
    let obj = {value : num}
    return obj
})
let o3 = filteredV3.map(num => {value : num})
console.log(o2);
console.log(o3);

let o4 = numbersV13
        .filter(value => value > 0)
        .map(num =>  {value: num});
console.log(o4);
// reducing an array
let numbersV14 = [1,2,3,4,5]
// forof = apply for iterables
let total = 0
for(let sum of numbersV14) {
    total += sum
}
console.log(total); // 15

let totalSum = numbersV14.reduce((accumulator,currentValue)=> accumulator + currentValue, 0)
console.log(totalSum); // 15
/* 
accumulator = 0
currentValue = 1
accumulator = accumulator + currentValue => 0 + 1 = 1
// ----------
accumulator = 1
currentValue = 2
accumulator = accumulator + currentValue => 1 + 2 = 3
// // ----------
accumulator = 3
currentValue = 3
accumulator = accumulator + currentValue => 3 + 3 = 6
// // ----------
accumulator = 6
currentValue = 4
accumulator = accumulator + currentValue => 6 + 4 = 10
// // ----------
accumulator = 10
currentValue = 5
accumulator = accumulator + currentValue => 10 + 5 = 15 
*/

// // accumulator = total like in previous example
// // currentValue = value like in previous example
// // 0 (not mandatory to write, default accumu starts from first value/ index) => accumulator = 0 just like total = 0 in previous example 
