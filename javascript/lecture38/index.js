"use strict";

// function fun1(){
//     let name = "Anshu"

//     function fun2() {
//         console.log(name)
//     }
//     return fun2;
// }

// let result2 = fun1()
// result2()

// this represent itself
// let student0 = {
//     name : "Dipanshu",
//     printName : function(){
//         console.log(this.name)
//     }
// }
// student0.printName()
// let result = student0.printName;
// result()
// result is independent and it will give undefined
// this keyword access the left of dot eg- student.printName student === this here.
// error because they both are on same level and when function finds the name it find in global outside the object not inside it

// console.log(this)
// console.log(global === this)

// function fun1(){
//     console.log(this)
// }
// fun1()

// flexible this take reference
//  let student = {
//     name : "Dipanshu",
//     printName : function(){
//         // console.log(this.name)
//     }
// }
// student.printName()

// let student2 =  {
//     name : "Rahul",
//     printName : student.printName
// }

// student2.printName()

// arrow funtion
// give undefined
// let product = {
//   name: "Mobile",
//   printName: () => {
//     console.log(this.name);
//   },
// };
// product.printName();

// this give correct output  
// let product2 = {
//   name: "Mobile2.0",
//   printName: function () {
//     const print = () => {
//       console.log(this.name);
//     };
//     print();
//   },
// };
// product2.printName();


// let nestedFunction = {
//     name: "dipanshu",
//     fun: function () {
//         let name = "something"
//         let product = {
//             name: "iphone",
//             printName : function () {
//                 const print = () =>{
//                     console.log(this.name)
        
//                 }
//                 print()
//             }
//         }
//         product.printName()
//     }
// }
// nestedFunction.fun()
// nestedFunction === this and we give producName to product give iphone ouput


let nestedFunction = {
    name: "dipanshu",
    fun: function () {   
        let product = {
            printName : function () {
                const print = () =>{
                    console.log(this.name)
        
                }
                print()
            }
        }
        product.printName()
    }
}
nestedFunction.fun()
// give undefined because if 'this find name in itself otherwise it will not find for other this

