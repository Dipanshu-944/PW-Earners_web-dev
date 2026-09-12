//  console.log(document) //doument contain whole html code

//  let h1 = document.getElementById("h1")

//  querySelctor
//  let h2 = document.querySelector("h1")
//  let h2 = document.querySelector(".h1")
//  let h2 = document.querySelector("#h1")


//  let h2 = document.querySelectorAll("h1") 
//  give node list != array (everything related to h1 )
//  console.log(h1)

// let p = document.querySelector("p")

// p.textContent ="helllo jhgdunjkbkfbhr"
// change the html original text (replace, not parsing)

// p.innerHTML = "<h2> hello dostoooo </h2>"
// with this we can inject the html in existing one (parsing)

// console.log(p.innerText)
// innerText do not show the hidden content but both above show 
// console.log(p)


// how to manage CSS from js?
// p.setAttribute("style", "background-color: pink; font-size: 20px")

// let btn = document.querySelector("#btn")

// btn.setAttribute("disabled")

// p.classList.add("random")

// p.classList.remove("random")

// on/off
// p.classList.toggle()

// tell boolean value if exist
// p.classList.contains("random")

// we can directly give styles like this in js 
// p.style.backgroundColor = "red"

// we can add attributes with this ghtml by js 
// p.dataset.hiHelo = "hii" // set

// console.log(p.dataset.hiHelo ) //get



// creating, appending and removing elements 
// array of object 


// let div = document.createElement("div")
// let div2 = document.createElement("div")
// div.textContent = "hello"
// div2.textContent = "hello, dipanshu"

// insert element 
let body = document.querySelector("body")

// body.appendChild(div)
// body.appendChild(div2)
// body.append(div, div2) // insert at last
// body.prepend(div) // insert at first


// let products = [
//     {
//         name: "Iphone",
//         price: 23435
//     },
//     {
//         name: "vivo",
//         price: 24656
//     },
//     {
//         name: "Samsung",
//         price: 57687
//     },
//     {
//         name: "Poco",
//         price: 12344
//     },
//     {
//         name: "Iqoo",
//         price: 86576
//     },
// ]

// let productList = document.querySelector("#product-list")

// products.forEach((product) => {
//     const card = document.createElement("p")
//     card.textContent = `${product.name} - ${product.price}`
//     productList.append(card)
// })

// let h2 = document.querySelector("h2")
// select it and then remove, select by id, class, element
// body.removeChild(h2) // have to access the parent 
// h2.remove // directly on element which you want to

// let clone = productList.cloneNode(true)
// body.append(clone)


// const items = productList.children

// productList.insertBefore(h2, items[2]) // for precise positioning
// items[3].before(h2) // same as above but short


// sir code copy 
let products2 = [
    {
        name: "Iphone 20",
        price: 12342,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Samsung 15",
        price: 62324,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "MI 23",
        price: 35354,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
    {
        name: "Poco 10",
        price: 43534,
        imgUrl : "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        name: "Lava 12",
        price: 53422,
        imgUrl : "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg"
    },
]


let productList2 = document.querySelector("#product-list")

products2.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");

    // const upperDiv = document.createElement("div")
    // const lowerDiv = document.createElement("div")

    // const img = document.createElement("img")

    // img.setAttribute("src" , "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg")

    // upperDiv.append(img)

    // card.append(upperDiv)

    // productList2.append(card)


    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
    </div>
    <div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
    </div>`

    productList2.append(card)

})