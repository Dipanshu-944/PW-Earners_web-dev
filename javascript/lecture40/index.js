// let body = document.querySelector("body");

// let btnn = document.querySelector("#btnn");

// addEventListener('click', function(){
//     console.log("hello from js")
// })

// let h1 = document.querySelector("#gift")

// function revealGift(event) {
// h1.classList.remove("hidden")
// h1.classList.toggle("hidden")
// h1.classList.add("visible")

// console.log(event);
// console.log(event.type);
// console.log(event.target);
// target is jis element par click kiya ho

// console.log(event.currentTarget);
// currentTarget is jis par addEventListener lga hua hai
// }
// btnn.addEventListener('click', revealGift)

// function fun1(e) {
//     console.log(e)
// }

// btnn.addEventListener('click', fun1)
// btnn.removeEventListener('click', fun1)

// third argument in event listener
// btnn.addEventListener('click', fun1, {once: true})

// we can custom select how many times it can clicked
// let btnn2 = document.querySelector("#btnn2");
// let counter = 1;

// function fun2(e){
//     if (counter < 3){
//         console.log(e)
//         counter++;
//     }else{
//         btnn2.addEventListener('click', fun2)
//     }
// }

// btnn2.addEventListener('click', fun2)

// bubbel vs capture
// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn = document.querySelector("#btn")

// outter.addEventListener('click', (e) => {
//     console.log("outter")
//     e.stopPropagation()
// })
// inner.addEventListener('click', (e) => {
//     console.log("inner")
//     e.stopPropagation()
// })
// btn.addEventListener('click', (e) => {
//     console.log("btn")
//     e.stopPropagation()
// })
// btn call both inner, outter and inner call outter with them its because they all have same event pass if we cahnge the event name then i will not (event is click)

// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn = document.querySelector("#btn")

// outter.addEventListener('click', (e) => {
//     console.log("outter")
// }, {capture: true})
// inner.addEventListener('click', (e) => {
//     console.log("inner")
// })
// btn.addEventListener('keydown', (e) => {
//     console.log("btn")
// })

// lecture39 code
let products = [
  {
    name: "Iphone 20",
    price: 12342,
    imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
  },
  {
    name: "Samsung 15",
    price: 62324,
    imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
  },
  {
    name: "MI 23",
    price: 35354,
    imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
  },
  {
    name: "Poco 10",
    price: 43534,
    imgUrl:
      "https://m.media-amazon.com/images/I/41D9TUZxXwL._SY300_SX300_QL70_FMwebp_.jpg",
  },
  {
    name: "Lava 12",
    price: 53422,
    imgUrl: "https://m.media-amazon.com/images/I/61knPJtYRpL._SX679_.jpg",
  },
];

let productList = document.querySelector("#product-list");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("singleProduct");

  const dltBtn = document.createElement("button");
  const addBtn = document.createElement("button");
  dltBtn.textContent = "Remove product";
  addBtn.textContent = "Add to cart";

//   dltBtn.addEventListener("click", (e) => {
//     card.remove();
//   });

  card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
</div>
<div class="productDetail">
        <p>${product.name}</p>
        <p>${product.price}</p>
</div>`;

  card.append(dltBtn);
  card.append(addBtn);

  productList.append(card);
});

// event delegation--like above jitne products utne listeners but we use eventlistener on parent 
productList.addEventListener("click", (e) => {
    e.stopPropagation()

    // console.log(e.target.parentElement) 
    // it will work but when we click on card it will remove every product so we use tagname to remove specific product

    console.log(e.target.textContent)
    // console.log(e.target.tagName === "BUTTON")

    // if (e.target.tagName === "BUTTON") {
    // e.target.parentElement.remove()
    // }
    // if we have more than one button then we use specific button name like that working same as above
    if (e.target.textContent === "Remove product" && e.target.tagName === "BUTTON") {
    // e.target.parentElement.remove()
    e.target.closest(".singleProduct").remove() //work same as above, closest use specific elment with selector
    }

    // console.log(e.target.closest(".singleProduct"))
})

// instead of using e.anythingethod we can actually use it as 
// let dltbtn = e.target
// console.log(dltbtn.textContent)