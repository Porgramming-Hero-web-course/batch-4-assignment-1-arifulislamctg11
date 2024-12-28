{
function sumArray(numbers: number[]): number {
    let sum:number = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i] ;
    }
    return sum;
    
}

// Sample Input:
console.log(sumArray([1, 1, 1, 1, 5]));

}
