"use strict";
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Sample Input:
console.log(sumArray([1, 2, 3, 4, 5]));
function removeDuplicates(numbers) {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
