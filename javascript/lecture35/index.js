let username = "nishant"

{

    let city = "delhi"
    // console.log(username);
    var country = "India"

}

// console.log(country); //var variable can access out of block
// console.log(city); // let and const cannot access out of block

for(let i = 0 ; i < 5 ; i++) {

    // console.log(i);
}
// console.log(i); // not access out of for block


if(true){
    var mobile = 92059437034

}

// console.log(mobile); // var accessed outside block


function hello(){
    let state = "Uttar Pradesh"
    // console.log(state);
    var productName = "Iphone 1000 pro ulta max"
    // console.log(productName);
}

// console.log(productName); 
// in function var also not accessed outside,  that's why we have seperate function scope
hello()

let count = 2

function counter(){
    // let count = 0
    count = count + 2
    console.log(count);
}

counter()
counter()