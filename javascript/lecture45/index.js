function fun1(callback){
    console.log("hi")
    callback()
}

function cb(){
    console.log("this is call back function")

}

fun1(cb)

// high order function
function a() {
    function b(){

    }
    return b()
}


function searchBook(cb1){
    console.log("searching book....")
    setTimeout(() => {
        console.log("There are some book find yours.")
        let price = 500
        cb1(price)
        
        
    }, 500);
}

function addToCart(cb2){
    console.log("add book to your cart")
    setTimeout(function () {
        console.log("book added to cart")
        cb2()
    }, 1000)
}

function payment(price){
    console.log(`Payment process, Amount : ${price}`)
    setTimeout(function() {
        console.log(`Payment recieved, Amount : ${price}`)
    }, 2000)
}

searchBook(function(price) {
    addToCart(function () {
        payment(price, function () {

        })
    })
})
// this above is callback hell nexted callback function
// this crete a problem inversion of control means give control of one function to other function which controls it and this is not good practice in web dev instead we use promises 


