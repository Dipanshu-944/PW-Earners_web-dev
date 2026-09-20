// let startTime = Date.now();

// while (date.now() - startTime < 10000) {}

// console.log("task 1");

// setTimeout(function () {
//   console.log("task 2");
//   let startTime = Date.now();

//   while (Date.now() - startTime < 10000) {

//   }
// }, 0);

// console.log("task 3");

// console.log("a") // this is sync tassk

// setTimeout(() => {
//     console.log("hii")
// },0);   // this is async tassk

// console.log("b") // this is sync tassk
// sync call first and async call after all sync

// time matter less time execute first but entry also matter(less time go into queue first from web api)
// console.log("a")

// setTimeout(() => {
//     console.log("d")
// },2000);
// setTimeout(() => {
//     console.log("c")
// },3000);
// setTimeout(() => {
//     console.log("e")
// },1000);

// console.log("b")

// set interval
// setInterval(() => {
//     console.log("hii")
// },2000);

// run once
// let id =setInterval(function (){
//     console.log("hello")
//     clearInterval(id)
// }, 1000)

// run but very fast no output print
// let id =setInterval(function (){
//     clearInterval(id)
//     console.log("hello")
// }, 1000)

// let count = 0;

// let id = setInterval(function () {
//     count++;
//   console.log("hello");
// if (count >= 5) {
//     clearInterval(id);
// }
//   console.log("hello");
// }, 0);

const body = document.querySelector("body")

// let color = "63f3a3"
// body.style.backgroundColor = `#${color}`

let colorStr = "0123456789abcdef"

// let color = ""
// it work on refresh page 
// for (i = 0; i < 6; i++){
//     let randomValue = Math.floor(Math.random() * colorStr.length)
//     color = color + colorStr[randomValue]
// }
// console.log(color)
// body.style.backgroundColor = `#${color}`

// now with set interval 
setInterval(() => {
    let color = ""
    for (i = 0; i < 6; i++){
    let randomValue = Math.floor(Math.random() * colorStr.length)
    color = color + colorStr[randomValue]
}

body.style.backgroundColor = `#${color}`

}, 500)

