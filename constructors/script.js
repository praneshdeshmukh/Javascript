class className {
    movie;
    timing;
    ticketprice;

    itsafunction(...args){
        console.log("displaying",args[0]+args[1]);
    }
}
const newclass = new className();
newclass.movie = "intersteller";
newclass.timing = 12.00;
newclass.ticketprice = 1000;
console.log(newclass);
newclass.itsafunction(5,10)

// ------------------------------------------------------------------------------------
//  .this refers to the context from where we call it

// user defined constructor
class myClass {
    constructor(prod,desc,price) {
        this.product = prod;
        this.description = desc;
        this.price = price;
    }
}
let myClass2 = new myClass("washing machine".toLocaleUpperCase(),"it is used to wash cloths",23000)
console.log(myClass2);

// -------------------------------------------------------------------------------------

// functional constructor
function construc(p,o){
    x : "concates"
    this.price = p;
    this.fruit = o;
}

let newcons = new construc(1000,"orange")
console.log(newcons);

// ---------------------------------------------------------------------------------------

// arrow functions cannot be used with functional constructor
// means, this keyword does not supports for arrow functions
// eg - 
// let arrow = (sportt,yearr,playerr) => {
//     this.sport = sportt;
//     this.year = yearr;
//     this.player = playerr;
// }
// let newarrow = new arrow("Hockey",1969,"kabir singh")
// console.log(newarrow);
// error

// ---------------------------------------------------------------------------------------
 
// try and catch
// try {} block is used to put risky code that might have some error
// catch {} block runs if error is identified in try{} block
// finally {} block always execute irrespective of error found or not
// syntax -
            /* try {
                // code
            }
            catch(errType) {
                // code 
            }
            finally {
                // code
            } */
try {
    let arrow = (sportt,yearr,playerr) => {
        this.sport = sportt;
        this.year = yearr;
        this.player = playerr;
    }
    let newarrow = new arrow("Hockey",1969,"kabir singh")
    console.log(newarrow);
}
catch (err) {
    console.log("sorry for inconvenience of this error :",err);
}
finally {
    console.log("In case you might like");
}
