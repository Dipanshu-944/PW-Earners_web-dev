class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    logIn(){"login"}
    logOut(){"logout"}
}

class Customer extends User {
    cart = []
    constructor (name, email, password = "12345"){
        super(name, email)
        this.password = password
        
    }
    buyProducts(){console.log("buy products")}
    addToCart(item){this.cart.push(item)}
    showCartItems(){console.log(this.cart)}
}

class Seller extends User {
    // constructor (){
    // }
    addProducts(){}
    removeProducts(){}
}

class Admin extends User {
    // constructor (){
    // }
    manageProducts(){}
}

const c1 = new Customer("dipanshu" , "dipanshu@gmail.com")
const s1 = new Seller("anshu" , "anshu@gmail.com")
const a1 = new Admin("rikit" , "rikit@gmail.com")
// console.log(c1)
// console.log(s1)
console.log(a1)
c1.addToCart("HP-Laptop-victus")
c1.showCartItems()


class premiumCustomer extends Customer {
    constructor(name, email){
        super(name, email)
    }
}

let pc1 = new premiumCustomer("Anshu", "email@gmail.com")
console.log(pc1)