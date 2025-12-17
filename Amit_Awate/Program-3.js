// Program-3.js
// Generate odd number series based on odd/even value of a


function generateSeries(a){
    let result = [];
    let num = 1;
    let limit = (a % 2 === 0) ? a - 1 : a;

    for (let i = 0; i < limit; i++){
        result.push(num);
        num += 2;
    }
    return result.join(", ")
}

console.log(generateSeries(6));