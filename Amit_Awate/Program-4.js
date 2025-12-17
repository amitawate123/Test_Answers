// Program-4.js
// Count how many numbers are multiples of 1 to 9


function countMultiples(arr){
    let result = {};

    for (i = 1; i <= 9; i++){
        let count = 0;

        for(let num of arr){
            if (num % i == 0){
                count++;
            }
        }
        result[i] = count;
    }
    return result;
}

const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log(countMultiples(input))