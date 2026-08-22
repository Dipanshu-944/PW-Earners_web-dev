// let anshu = 45 + 45 + 76;

// function totalmarks(name ,math , science , english){
//     console.log(`this, ${name}`, math + science + english)
// }

// totalmarks("anshu marks:",45 , 45, 76);
// totalmarks("ansh marks:",45 , 76, 76);
// totalmarks("dipanshu marks:",65 , 47, 76);
// totalmarks("aniii marks:",75 , 55, 76);

// function calculator(num1, num2, operator){
//     switch (operator){
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);
//         case "/":
//             console.log(`${num1} ${operator} ${num2} =`, num1 / num2);
//         case "*":
//             console.log(`${num1} ${operator} ${num2} =`, num1 * num2);
//     }
// }
// calculator(4 , 5, "*")
// calculator(4 , 2, "/")
// calculator(4 , 5, "+")
// calculator(4 , 1, "-")

// Return function-------
// function totalmarks(math , science , english){
//     return math + science + english;
// }

// totalmarks("anshu marks:",45 , 45, 76);

// function calPercnetage(name, math, science, english){
// let total = totalmarks(math, science, english);
// console.log(total);
// let percentage = total / 300 * 100;
// console.log(`${name}`,"percentage",percentage);
// return percentage
// }
// calPercnetage("anshu", 45, 67, 78)

// let reponse = calPercnetage("anshu", 45, 67, 78)
// console.log(percentage); it return percentage

// let reponse = calPercnetage("anshu", 45, 67, 78)
// console.log(reponse);
// it gives undefined because it did not return any function (value)

// function expression -------
// cannot used before initization, it gives error

// let add = function(num1, num2){
//     return num1 +num2
// }
// console.log(add(5, 6));

// hoisting-----
// used before declaration
// fun1()
// function fun1(){
//     console.log("function declaraion")
// }

// arrow function -------

// syntax 1
let sum = num1 => num1 + 4;

// syntax 2 by default return
let adda = (num1 ,num2) => num1 + num2;

// syntax 3 here you have to give return values
let add = (num1, num2) => {
    // somethings anythings
  return num1 + num2;
};
console.log(add(5, 6));
