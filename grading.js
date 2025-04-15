let resultsRandom = Math.floor(Math.random() * 100 + 1);

if (resultsRandom <= 100 && resultsRandom >= 90) {
    console.log(resultsRandom, 'you get golden A+')
}
else if (resultsRandom <= 90 && resultsRandom >= 80) {
    console.log(resultsRandom, 'you get A+')
}
else if (resultsRandom <= 80 && resultsRandom >= 70) {
    console.log(resultsRandom, 'you get A')
}
else if (resultsRandom <= 70 && resultsRandom >= 60) {
    console.log(resultsRandom, 'you get A-')
}
else if (resultsRandom <= 60 && resultsRandom >= 50) {
    console.log(resultsRandom, 'you get B')
}
else if (resultsRandom <= 50 && resultsRandom >= 40) {
    console.log(resultsRandom, 'you get C')
}
else if (resultsRandom <= 40 && resultsRandom >= 33) {
    console.log(resultsRandom, 'you get D')
}
else {
    console.log(resultsRandom, 'you are fail')
}
