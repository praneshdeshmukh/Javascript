let pattern = 'pw';
let regExOne = new RegExp (pattern);
let flag = 'gi';
let regExTwo = new RegExp(pattern,flag);

// Shortcut method
let regExthree = /pw/gi
const stringToCheck = "pw is growing at rapid speed and recently they are working on pwskills pW to create skills PW based products Pw content";
const result = regExthree.test(stringToCheck);
console.log(result);

        // Method 2
// Match
const anotherResult = stringToCheck.match(regExthree)
console.log(anotherResult);
