const student = {
    name : "Divye",
    age : 21,
    branch : "CSE - AIML"
}

const copyStudent = {...student, 
    address : {
        street1 : "123",
        street2 : "abc",
        city : "Ghaziabad",
        pincode : 201001
}
}

console.log(copyStudent)