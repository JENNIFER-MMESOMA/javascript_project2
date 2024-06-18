// string manipulation
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("mmesoma jennifer")); // Output: "refinnej amosemm"

// count character
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("mmesoma jennifer")); // Output: 16

// capitalize letter
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("i'm jennifer mmesoma. a student of madonna university nigeria")); 

// Array function to fing max and min of an array element
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMax([3, 9, 6, 15])); 
console.log(findMin([3, 9, 6, 15])); 

// sum of array
function sumOfArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

console.log(sumOfArray([3, 9, 6, 15])); 

// sum of element in an array
function sumOfArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

console.log(sumOfArray([5, 19, 6, 15])); 

// filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 3, 6, 8, 9], num => num < 7)); 

// factorial
function factorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(12)); 

// prime number
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < Math.sqrt(num) + 1; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(4)); 

// fibonacci sequence
function fibonacci(n) {
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
    return fibSequence.slice(0, n);
}

console.log(fibonacci(9)); 
console.log(fibonacci(16));