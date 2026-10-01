// function fun1() {
// console.log("hello")
// return 10
// return Promise.resolve(10)
// this what async include in it by default
// }
// async always return a promise and fulfilled
// async function fun2() {
//     console.log("hi")
//     return 11
// }

// fun2()
// fun1()
// console.log(fun1())
// console.log(fun2())

// fun2().then((data) => {
//     console.log(data)
// })

// async function a() {
//   return "fun a";
// }
// async function b() {
//   return Promise.reject("error hai");
// }

// a().then(data => {
//     console.log(data)
// })

// async function c() {
//   a().then((data) => {
//     console.log(data);
//   });
// OR
//   let data = await a();
//   let data2 = await b();
//   console.log(data, data2);
// }

// c();

// async function c() {
//   try {
//     let data = await a();
//     let data2 = await b();
//     console.log(data, data2);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("always run");
//   }
// }

// c();


// solution for this from last lecture 
function searchBook(){
    return new Promise(function fun1(res, rej){
        console.log("searching book....")
    setTimeout(() => {
        console.log("There are some books find yours.")
        let price = 500
        res(price) // stop inversion of control
    }, 1000);
    })
}

function addToCart(){
    return new Promise(function fun2(res, rej) {
        console.log("add book to your cart")
    setTimeout(function () {
        console.log("book added to cart")
        res()
    }, 1000)
    })
}

function payment(price){
     return new Promise(function fun3(res, rej){
        console.log(`Payment process, Amount : ${price}`)
    setTimeout(function() {

        // let isPaymentDone = true
        let isPaymentDone = false

        if(isPaymentDone) {
            console.log(`Payment recieved, Amount : ${price}`)
        res()
        }else {
            rej("payment failed")
        }
        
    }, 2000)
     })  
}

async function buyBook(){
  try {
    let price = await searchBook()
    await addToCart()
    await payment(price)
    console.log("bss mil hi gai book")
  } catch (error) {
    console.log(error)
  }
}

buyBook()