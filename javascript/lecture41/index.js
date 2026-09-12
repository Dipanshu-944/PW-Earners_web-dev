
const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#name") 
// define outside and do both get value and eventlistener together
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkBox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#pass-hint")
const password = document.querySelector("#password")
const errorMessage = document.querySelector("#error-message")


const LIMIT = 150
charCount.textContent = `${LIMIT} character remaining`

function isValidUserName(username){
    if(username.value.trim().length === 0){
        return false
    }else{
        return true
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    // const password = document.querySelector("#password").value


    // validation part 
    if(username.value.trim().length === 0){
        console.log("Enter your name")
        // alert("Please enter your name")
        errorMessage.textContent = "Please Enter name"
        return; // early return
    }
    console.log({username : username.value, email, password : password.value})
})

// print every time when you press key (keystroke)
username.addEventListener("input", (e) => {
    console.log(username.value)
})

bio.addEventListener("input", (e) => {
    const remaining = LIMIT - bio.value.length
    charCount.textContent = `${remaining} character remaining`
})

// change event type 
username.addEventListener("change", (e) => {
    console.log("change event", username.value)
})
username.addEventListener("input", (e) => {
    console.log("input event", username.value)
})

checkBox.addEventListener("change" , (e) => {
    console.log(checkBox.checked)
})

country.addEventListener("change", (e) => {
    console.log(country.value)
})

password.addEventListener("focus", (e) => {
    passwordHint.classList.remove("hidden")
})

password.addEventListener("blur", (e) => {
    passwordHint.classList.add("hidden")
})