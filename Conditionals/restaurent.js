// const price = 3000

// if (price >= 2000) {
//     const discount = price * 5 / 100
//     const payment = discount - price;
//     console.log(payment);
// }
// else {
//     console.log('paba na kichui')
// }

let ageRandom = Math.floor(Math.random() * 100 + 1);
let priceRandom = Math.floor(Math.random() * 10000 + 1);

if (ageRandom < 18) {
    console.log('you can eat free')
}
else if (ageRandom > 50) {
    const discount = priceRandom * 20 / 100
    const payment = priceRandom - discount;
    console.log(payment + ' you get 20% off Thank U')
}
else if (ageRandom > 18 && ageRandom < 70) {
    console.log('please pay your full payment')
}
else {
    console.log('you are alien');
}
console.log(ageRandom, priceRandom)