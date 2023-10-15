/* String Reversal */

// function reverseString(str) {
//     return str.split('').reverse().join('');

// }

// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(reversedString);





// function reverseString(inputString) {
//     let reversedString = '';
//     for (let i = inputString.length - 1; i >= 0; i--) {
//         reversedString += inputString[i];
//     }
//     return reversedString;
// }

// const originalString = "Purabi";
// const reversed = reverseString(originalString);
// console.log(reversed); 



/* Palindrome */

// function isPalindrome(str) { 

// str =  str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

// return str === str.split('').reverse().join('');

// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("A man a plan a canal Panama")); 
// console.log(isPalindrome("hello"))

function reverseInteger(num) {
    const reversed = parseInt(num.toString().split('').reverse().join(''));

    if (num<0) {
        return -reversed;
    }

    return reversed;
}

console.log(reverseInteger(12345));
console.log(reverseInteger(-500));