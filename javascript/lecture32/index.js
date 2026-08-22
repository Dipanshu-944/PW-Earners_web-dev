// math fucntion 

// function convertToPositive(num){
//     return num * -1 ;
// }

// let positiveNum = convertToPositive(-4)
// console.log(positiveNum);

// // math build-in function
// let positiveNum2 = Math.abs(-10);
// console.log(positiveNum2);

// console.log(Math.PI);
// console.log(Math.pow(6, 2));
// console.log(Math.sqrt(4));
// console.log(Math.min(4,4,5,7,2,67,45,-4));
// console.log(Math.round(4.5));
// console.log(Math.round(3.3));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.7));


// console.log(Math.random() + 1);

// let result = Math.floor(Math.random() + 2);
// console.log(result);

// genrate random number between any range 
// let min = 3;
// let max = 8;
// let results = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(results);

// Number function --------

// console.log(Number.isFinite(76));
// console.log(Number.parseInt("76"));

// let num1 = "45";
// let num2 = "40";
// console.log(num1 + num2);
// console.log(parseInt(num1) + parseInt(num2)); 
// convert to number from string 

// let num = 343.454554;
// console.log(num.toFixed(5));

// console.log(num.toPrecision(4));

// string methods -------

// console.log("dipanshu".toUpperCase());
// let str = "hello dosto";
// console.log(str.includes("dosto"));
// console.log(str.includes("@"));

// let fileName = "image.png";
// console.log(fileName.endsWith(".png" || fileName.endsWith(".jpg")))

// let greet = "hi am dipanshu";
// console.log(greet.replace("hi","hello"));


// date methods --------

// console.log(Date.now());

let date = new Date();

console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.toLocaleDateString()); //show full date
