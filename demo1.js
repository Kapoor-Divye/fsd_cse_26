const a = [1, 2, 3, 4, 5]
// const b = a[0]
// const c = a[1]

// console.log(b)
// console.log(c)

const [b, c] = [a[0], a[1]]

console.log("b = ", b)
console.log("c = ", c)

const student ={
    name : "Divye",
    age : 21,
    branch : "CSE - AIML"
}

// console.log("name = ", student.name)
// console.log("age = ", student.age)
// console.log("branch = ", student.branch)

const {name, age, branch} = student

console.log("name = ", name)
console.log("age = ", age)    
console.log("branch = ", branch)