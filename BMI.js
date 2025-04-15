let weight = 39
const feet = 5.10;
const inche = feet * 12;
const meter = inche * 0.0204;
const bmiProg = weight / (meter * meter);
const BMI = bmiProg;

if (BMI < 18.5) {
    console.log('UnderWeight')
}
else if (BMI > 18.5 && BMI <= 24.9) {
    console.log('Normal Weight')
}
else if (BMI > 25 && BMI <= 29.9) {
    console.log('Overweight')
}
else {
    console.log('Obesity');
}
console.log(BMI)