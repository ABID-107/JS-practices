let age = Math.floor(Math.random() * 100);
let ticket = Math.floor(Math.random() * 800);

// let age = 65
// let ticket = 200

if (age <= 10) {
    console.log('this is baby for free')
}
else if (age > 10 && age < 26) {
    const student = ticket * 50 / 100
    const stuPrice = ticket - student
    console.log('he/she is Student they have 50% discount =', price)
}
else if (age > 60) {
    const senior = ticket * 60 / 100
    const senPrice = ticket - senior
    console.log('he/she is  citizen they have 60% discount = ', senPrice)
}
else {
    console.log('you have to pay full money')
}
console.log(age, '\n', ticket)