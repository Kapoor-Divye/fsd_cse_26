const student = {
    name: 'Hamza Ali Mazari',
    age: 20,
    gender: 'Male',
    address: {
        city: 'Karachi',
        country: 'Pakistan'
    }
}

const { name, age, gender, address: { city, country } } = student

console.log(`The name of the student is ${name}, he is a ${age} year old ${gender} and lives in ${city}, ${country}`)