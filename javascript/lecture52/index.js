// function outter() {
//     const random = () => {
//         console.log(this)
//     }
//     random()
// }
// outter()

// function Product(name, price) {
//     this.name = name
//     this.price = price
//     return this
    
// }

// const p1 = new Product("iphone" , 99999)
// const p2 = new Product("samsung", 199999)
// this is called constructor function 


// console.log(p1) //without return this 'new' BY DEFAULT give new object
// console.log(p2)


// classes 

class User{
    age = 20 // default property
    constructor(name , age) {
        // console.log("hello")
        // this.name = "dipanshu" // instance property
        this.name = name
        this.age = age;

    }
    printName() { //instance method
            // console.log(this.name)
        }
}

// const u1 = User() // this will not work without new
const u1 = new User("dipanshu" , 23)
const u2 = new User("Nishant" , 23)

u1.name = "updated name"  //this will print and this is problem here

// console.log(u1)

// u1.printName()
// u2.printName()


// example 
class BankAccount {
    #balance //this is private property
    constructor(initialBalance) {
        this.#balance = initialBalance
    }
    get() {
        console.log(this.#balance)
    }


    withdraw(amount){
        if(amount > this.#balance){
            console.log("insufficient balance")
            return
        }

        this.#balance = this.#balance - amount
    }

    deposit(amount) {
        if(amount <= 0){
            console.log("handle edge cases")
            return
        }
        this.#balance= this.#balance + amount
    }

    static calculateTax(){  
        // staic method cannot access by instance/child
        console.log("calculating")
    }
}

let acc1 = new BankAccount(500)

acc1.get()
acc1.withdraw(200)
acc1.get()
acc1.deposit(-100)
acc1.get()

// balance access outside and this is problem, we private so we use '#' 
acc1.balance = 100000 // with private we cannnot update 
acc1.get()

// acc1.calculateTax() 
// where use static cannot access directly with instance
// give error (cannot access through instamce of class)
BankAccount.calculateTax()
// but access through parent 