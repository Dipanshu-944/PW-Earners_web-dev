let user1 = {
  name: "anshu",
  age: 23,
  // printName(){
  //     console.log(`hii, i am ${this.name}`)
  // }
};

let user2 = {
  name: "himanshu",
  age: 23,
};

let user3 = {
  name: "ronit",
  age: 23,
};

function printName(country) {
  console.log(this);
  console.log(`hii, i am ${this.name} from ${country}`);
}

// user1.printName();
// call method
// user1.printName.call(user1);

// user1.printName.call(user2);
// user1.printName.call(user3);
//bracket have the new "this" now chnage through call method

// printName.call(user1, "India");
// printName.call(user2, "China");
// printName.call(user3, "Nepal");


// printName.apply(user3, ["Nepal"]);

// bind return new function for later
const newFun = printName.bind(user1, "india")
console.log(newFun)

newFun()