// Program-2.js
// Generate first 'a' odd numbers


function generateOddNumbers(a){
    let result = [];
    let num = 1;

    for(let i = 0; i < a; i++){
        result.push(num);
        num += 2;
    }
    return result.join(", ");
}

console.log(generateOddNumbers(10));