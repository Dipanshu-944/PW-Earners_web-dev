

// localStorage.setItem("num1", 1);
// localStorage.setItem("num2", 2);
// localStorage.setItem("num3", 3);

// let result = localStorage.getItem("num");
// console.log(result);

// let res = localStorage.key(0);
// console.log(res);

// let res2 = localStorage.removeItem("num")

// document.querySelector("#clear-local").addEventListener('click', () => {
//     localStorage.clear()
// })


// fetch("https://api.github.com/users/nishantsaini2331")
//    .then(data => data.json())
//    .then(data => console.log(data))


async function getUser(userName = "nishantsaini2331") {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
 
    console.log(data)
}

getUser()