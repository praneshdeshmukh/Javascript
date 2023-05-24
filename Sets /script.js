// Set operations
const emptySet = new Set();
console.log(emptySet.size)

emptySet.add('pranesh')
console.log(emptySet.size)
emptySet.add(9)
console.log(emptySet)

emptySet.add(9) // duplicate elements are not allowed in sets
emptySet.add(8)
emptySet.add(7)
emptySet.add(4)
emptySet.add(5)
emptySet.add(2)
emptySet.add(6)
emptySet.add(3)
emptySet.add(1)
emptySet.add("is")
emptySet.add("a")
emptySet.add("valid")
emptySet.add("number")
console.log(emptySet)

console.log(emptySet.has(9)) //true
console.log(emptySet.has("valid")) //true
console.log(emptySet.has(0)) //false

emptySet.delete(1)
emptySet.delete("pranesh")
console.log(emptySet)

console.log(emptySet.has(Math.sqrt(25))); //true

// 
let myArray = [1,2,3,4,5]
let newArray = new Set(myArray)
console.log(newArray);
newArray.clear()
console.log(newArray);


// Set difference

let setA = new Set([1,2,3,4,11,10,6,5])
let setB = new Set([5,6,7,8,9,10])

function setDifference(setA,setB){
    return new Set([...setA].filter(ele => !setB.has(ele))); // returns unique elements in setA from setB
    // return new Set([...setA].filter(ele => setB.has(ele))); // returns common elements from setA and setB
}
const result = setDifference(setA,setB)
console.log(result);

// Map
let map = new Map()
console.log(map.size);

let arr = new Map([
    [1,"Mithun"]
    [2,"alka"]
    [3,"prashant"]
    [4,"sike"]
]);

const result2 = arr.map((arrayItem) => arr.set(arrayItem[0],arrayItem[1]))
console.log(result2);
