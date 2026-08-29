let originalPrices = [234, 455, 670, 578, 889];

// its a way to calculate some opreation on all array 

let discountedPrices = [];

for (value of originalPrices){
    discountedPrices.push(value *0.9) // 10%discount
}

console.log(originalPrices);
console.log(discountedPrices);

// map method (shorthand type of above)
const discountedprices2 = originalPrices.map((value) => {
    return value * 0.9
})

console.log(discountedprices2)

// array of objects
let students = [ 
    {
        name: "dipanshu",
        age: 23,
        marks : 60
    },
    {
        name: "ansh",
        age: 21,
        marks : 65
    },
    {
        name: "rahul",
        age: 24,
        marks : 75
    },
    {
        name: "joban",
        age: 24,
        marks : 32
    },
    {
        name: "aksh",
        age: 24,
        marks : 31
    }
]

// long method 
let studentsName = []

students.forEach((value)=> {
    studentsName.push(value.name)
})

console.log(studentsName);

// short method 
const studentsName2 = students.map((student) => {
    return student.name
})
// one line only when no return
const studentAge = students.map((student) => student.age)


const studentMarks = students.map((student) => student.marks + 10)
// OR 
const studentMarks2 = students.map((student) =>{
    return {...student, marks :student.marks + 10}
})

console.log(studentsName2, studentAge ,studentMarks, studentMarks2);

// Filter Method

// this is one method but here we use filter
let failStudent = []
students.forEach((student) => {
    if (student.marks < 35){
        failStudent.push(student)
    }
})

console.log(failStudent);

// filter (same as above)
// const failedStudent = students.filter((student) => student.marks < 35)
// chaining 
const failedStudent = students.filter((student) => student.marks < 35).map((student) => student.name)
 
console.log(failedStudent);


// reduce method 
let marks = [23,45,76,84,54,45]

let totalMarks = 0;

marks.forEach((mark) => totalMarks = totalMarks + mark)

console.log(totalMarks);

// const totalMark = marks.reduce((accumator, currentVAlue) => {}, 0 // initinal value)
const totalMark = marks.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(totalMark);

// Another example
const attendence = ["present", "absent", "present", "present", "absent"]

// with foreach 
let obj0 = {}
attendence.forEach((value)=> {
    if (obj0[value]){
        obj0[value] = obj0[value] + 1
    }else {
        obj0[value] = 1
    }
})
console.log(obj0)

// with reduce
const obj = attendence.reduce((acc, value) => {
   if (acc[value]){
        acc[value] = acc[value] + 1
    }else{
        acc[value] = 1
    }
// if-else short form 
acc[value]= (acc[value] || 0) + 1;
    return acc
}, {})

console.log(obj)