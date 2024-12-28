"use strict";
{
    function removeDuplicates(numbers) {
        let uniqueArray = new Set(numbers);
        console.log(uniqueArray);
        return Array.from(uniqueArray);
    }
    removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]);
}
