// coercion mean type conversion 

console.log("5" + 4)
console.log("2" * 5)
console.log(5 - "10")
console.log(true + 1)
console.log(true - true)

console.log("hii" - 6)
console.log(NaN === NaN)

let result = "HII" - 6
console.log(result === NaN)
// how to get proper ouput NaN true (check)
console.log(Number.isNaN(result))


console.log(Number("5") + 4)
console.log(!"") //logical NOT