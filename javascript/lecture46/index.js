// let p = new Promise(function(){})
// console.log(p);

// let p2 = new Promise(function (resolve, reject) {
  // resolve("hi")
//   reject("NO server found");
// });

// console.log(p2);

// p2.then(
//   function onFulfilled(val) {
//     console.log(val); // when call resolve
//   },
//   function onRejected(val) {
//     console.log(val); //when call reject
//   },
// );

// const res = p2.then(
//   function (val) {
//     console.log(val);
//   },
//   function (val) {
//     console.log(val);
//   },
// );

// console.log("res", res);

// const res = p2
//   .then(function (val) {
//     console.log(val);
//   })
//   .then()
//   .then()
//   .catch(function (val) {
//     console.log(val);
//   }).finally(() => {
//     console.log("always run finally ")
//   });

// can run alone 
//   Promise.resolve().then(function f1() {
//     console.log("inside resolve promise")
//   })


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

function addToCart(price){
    return new Promise(function fun2(res, rej) {
        console.log("add book to your cart")
    setTimeout(function () {
        console.log("book added to cart")
        res(price)
    }, 1000)
    })
}

function payment(price){
     return new Promise(function fun3(res, rej){
        console.log(`Payment process, Amount : ${price}`)
    setTimeout(function() {

        let isPaymentDone = true

        if(isPaymentDone) {
            console.log(`Payment recieved, Amount : ${price}`)
        res()
        }else {
            rej("payment failed")
        }
        
    }, 2000)
     })  
}

searchBook().then(function(price){

    return addToCart(price)
}).then(function(price){
    return payment(price)
}).then(function() {
    console.log("bss mil hi gai book")
}).catch(function(err){
    console.log(err)
})