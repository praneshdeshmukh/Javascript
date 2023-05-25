// Closures
// let -> block scope
// var -> global scope

// eg -
let Mainname = "google"
function init() { 
    let a = "mozilla"
    function displayName() {
        // {
        //     let Mainname = "Opera"
        // }
        // let b  = "chrome"
        console.log(a);

        // function displayNametwo() {
        //     console.log(Mainname);
        //     console.log(a ," "+ b);
        // }

        // displayNametwo()
    } 
    return displayName()
}
let func1 = init()
func1()
