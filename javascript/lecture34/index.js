let student ={ 
    name : "Dipanshu", 
    rollno : 23, 
    marks : "82%" ,
    subjects : ["science", "math"]
}
// rename key (existname : new name)
// let {subjects : subject, totalMarks = 400 ,...hello}= student
// console.log(hello);
// console.log(subject);
// default value ->
// console.log(totalMarks);

// merge objects 
// let obj1 = {
//     name : "dipanshu",
//     phone : 978797786
// }
// let obj2 = {
//     address : "india",
//     email : "punjab@gmail.com"
// }

// let obj3 = {...obj1, ...obj2}
// console.log(obj3);

// array and object update 
// const arr = [12,24,"string1", "hello"]
// console.log("original arr:",arr)
// arr[1]= "Updated"
// console.log(arr);

// const obj = {
//     name : "anshu",
//     age : 23,
//     address : null
// }
// obj.name = "rahul"
// delete obj.age
// console.log(obj)
// console.log(obj.address?.street);

// splice method 
// let arr2 = [1,2,3,4,5,6]

// arr2.splice(2,1)
// arr2.splice(4,0,"hello") //add
// arr2.splice(3,1,["replace"]) //replace
// console.log(arr2)

// slice method 
// let arr3 = [1,2,3,4,5,6]
// let trimArr = arr3.slice(1, 4)
// console.log(trimArr)

// indexOf() 
// console.log(arr3.indexOf(2))

// find() 
// let res = arr3.find((value) => {
//     return value === 3
// })

// console.log(res)

// find index 
// let resIndex = arr3.findIndex((value) => {
//     return value === 3
// })

// console.log(resIndex)

// flat ()
let arr4 = [1,2,[3,4]] 
let arr5 = [1,[2,[3,4]]]

console.log(arr4.flat())
// Infinity is like levels 
console.log(arr5.flat(Infinity))
