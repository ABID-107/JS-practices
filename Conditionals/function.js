function discount(age, price) {
    if (age <= 10) {
        console.log('this is baby for free')
        return 0
    }
    else if (age > 10 && age < 26) {
        const student = price * 50 / 100
        const stuDiscount = price - student
        return stuDiscount;
    }
    else if (age > 60) {
        const senior = price * 60 / 100
        const senDiscount = price - senior
        return senDiscount
    }
    else {
        return price
    }


}
const descount = discount(55, 300)
console.log(descount);