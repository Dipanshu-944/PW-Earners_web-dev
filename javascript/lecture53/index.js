
let user = {
    name: "dipanshu",
    age: 23,
}
let arr = [1,2,3]

Object.prototype.allInOne = function () {
    console.log("parent pe proto lga diya")
}

// console.log(arr.__proto__.__proto__ === user.__proto__) 
//access karne ke lyi (proto is inbuild obj)
// all methods are provided by prototye connected to object 
// parent of all the objects 

// to add new property to proto 
// custom method add to js object
Array.prototype.printItems = function () {
    for(let i = 0; i < arr.length; i++ ){
        console.log(this[i])
    }
}

console.log(arr.__proto__)

// arr.printItems(arr)
arr.printItems()

let colors = ["red", "yellow", "blue"]
colors.printItems()  
// use this then it call without argument

// colors.printItems(colors)
// use anywhere like inbuild methods


String.prototype.anything = function () {
    console.log("anything you can create")
}

"hjgdas".anything()

// proto chain 
"svjhjkvs".allInOne()
arr.allInOne()
user.allInOne()
Number(1).allInOne()


//shadowing 
let user2 = {
    name: "rahul",
    toString() {
        console.log("ye apna method hai")
    }
}

console.log(user2)
user2.toString()


// inheritance here
let animal = {
    eat() {
    }
}

let person = Object.create(animal)

person.walk = function() {}

let student  = Object.create(person)

student.study = function() {}

console.log(person)
console.log(student)

student.eat()