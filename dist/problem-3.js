"use strict";
{
    function countWordOccurrences(sentence, word) {
        const sentenceArray = sentence.split(" ");
        let count = 0;
        for (let i = 0; i < sentenceArray.length; i++) {
            if (sentenceArray[i] === word) {
                count++;
            }
        }
        console.log(count);
        return count;
    }
    countWordOccurrences("I love typescript", "typescript");
}