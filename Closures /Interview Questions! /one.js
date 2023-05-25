//  Interview questions on closure 
// 01.
for (var i = 0 ; i < 3 ; i++) {
    setTimeout(function() {alert(i); } , 1000 + i)
}
/* Answer
The goal of the code above is to alert the numbers 0, 1, and 2 each after 1, 1.1, and 1.2 seconds, respectively. The problem though, is that if you run the above code in your console, you actually get the number 3 alerted 3 times after 1, 1.1, and 1.2 seconds. This is because of an issue with JavaScript closures. */

// setTimeout(function() {alert(i); } , 1000 + i)

/* uses a variable i which is declared outside of itself. The variable i is actually declared within the for loop and the inner function accesses it. So when the for loop is done running, each of the inner functions refers to the same variable i, which at the end of the loop is equal to 3. Our goal is for each inner function to maintain its reference to the variable i without the value of it being altered. We'll solve this using an IIFE, or an immediately-invoked function expression. */

// solution =>
// for (var i = 0; i < 3; i++) {
//     setTimeout(function(i_local) { 
//       return function() { alert(i_local); } 
//     }(i), 1000 + i);
//   }

// 02.
// Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

function createbase(BaseNumber) {
    return function(N) {
        return BaseNumber + N
    }
}
var addSix = createbase(6);
console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

/* Answer
You can create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber. */

// 03.
function counter() {
    let counter = 0;
    return {
        add : function(increment) {
            counter += increment;
        },
        retrieve : function() {
            return 'the counter is currently at : ' + counter;
        },
    }
}
let counts = counter()
counts.add(5)
console.log(counts.retrieve())
/*Answer
You can create a function within an outer function (a closure) that allows you to update a private variable but the variable wouldn't be accessible from outside the function without the use of a helper function.*/
