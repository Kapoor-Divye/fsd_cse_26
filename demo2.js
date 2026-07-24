const a = [1, 2, 3]
const b = [4, 5]

const c = [...a, ...b]

console.log(c)

const student1 = {
    name1 : "Divye",
    age1 : 21,
    branch1 : "CSE - AIML"
}

const student2 = {
    name2 : "Kunal",
    age2 : 21,
    branch2 : "CSE"
}

const merger = {...student1, ...student2}

console.log(merger)