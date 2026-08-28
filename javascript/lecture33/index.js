// array and object comparison

// array-----
let product1 = ["phone", 34999, "iphone", 76, 10];
console.log(product1[0]);

// object----
let product2 = {
    price: 99999,
    rating: 4.5,
    totalReviews: 75,
    discount: 10,
    name: "Iphone",
    "first-name": "dipanshu",
    221: 32546,
    "#": "key is always a string",
    
    // method (we also called them function just inside the object)
    printProductName: function () {
          console.log(this.name);
        console.log(this.discount);
    },
    printDiscount() {
        console.log("10%");
    },
};

console.log(product2);
console.log(product2.price);
console.log(product2['221']);
console.log(product2["first-name"]);
console.log(product2.printProductName());
console.log(product2.printDiscount());

// to access the key values
console.log(Object.keys(product2));
console.log(Object.value(product2));
console.log(Object.entries(product2));
// all of them return the arrays of values

// for of loop

for (value of product1){
    console.log(value);
}
// for of is just like for loop
for(i = 0; i < product1.length; i++){
    console.log(product1);
}
    

// for each loop/method, it take callback function
// product1.forEach(function(keys, index){
//     console.log(keys, index);
// })
   
// foreach ((argument => function (parameters))----
function a() {
    console.log("a")
}
a()
function b(num) {
    console.log(num)
    num()
    console.log("b")
}
b(function a() {
    console.log("a")
})

// for in loop, returns u keys
for(value in product2){
    console.log(value);
    console.log(product2[value]);
}
// in array you got index value
for (value in product1){
    console.log(value);
}


// Destructuring 
// array 
let product3 = ["anything",12,34,45,"string"]
const [a,b,c,d] = ["anything",12,34,45,"string"]
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
// object
let product4 = {
    name : "dipanshu",
    age : 25,
    degree : "web-dev",
    sport : "football",
    printmarks: function(){
        console.log(this.degree)
    }
}
// let {name, age, degree, sport, printmarks} = product4
console.log(name, sport, printmarks());

// how to get object in loop because objects is not irritable
for (value of Object.values(product4)){
    console.log(value)
}
for (value of Object.keys(product4)){
    console.log(value)
}
for (value of Object.entries(product4)){
    console.log(value)
}
// that how use destructuring, that's how we got key and value
for ([key , value] of Object.entries(product4)){
    console.log(key , value)
}


// spread operator (...) 
// const [a,b] = ["anything",12,34,45,"string"]
let arr = [24,45,45,46,63,366,4,55,26]

// console.log(Math.min(4,7,467));
// console.log(Math.min([4,7,467]));
// Math.max

// unbox array
// console.log(arr);

// console.log(...arr);
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// array merging by spread operator
let aa = [1,2]
let bb = [3,4]

let c2 = [aa , bb]
console.log(c2)
let cc = [...aa , ...bb]
console.log(c);
// final unboxing
console.log(...c); 


// Rest Operator (...)
const [a,b, ...rest] = ["anything",12,34,45,"string"]
// combine rest of items and return in array
// console.log(rest);

// example 
function add (num1, ...numbers){
    console.log(num1)
    console.log(numbers)
}
console.log(add(23,54,7,55,47,36))

// addition 
function add (...numbers){
    let total = 0;
    for(value of numbers){
        total += value
    }
    return total;
}
console.log(add(23,54,7,55,47,36))

let {age, name, ...remaining} = product4
console.log(age, name , remaining)




// let math2 = {
//   abs() {},
//   ceil() {},
//   floor() {},
// };
