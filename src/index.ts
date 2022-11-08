

function reverseString(str: string): string {
    let newString: string = "";
    for (let index = 0; index < str.length; index++) {
        newString = str.charAt(index)+newString;        
    }
    return newString;
}

function fibonacci(num: number): number {
    if (num < 1) return 0;
    if (num < 2) return 1;
    return fibonacci(num - 2) + fibonacci(num - 1);
}

function palindromeStr(str: string) {
    let newString: string = reverseString(str);    
    if (str === newString) {
        return "is a palindrome";
    } else {
        return "is not a palindrome";
    }
}

function palindromeInt(num: number) {
    let newNum: number = 0;
    let copyOfNum: number = num;
    while (copyOfNum > 0) {
        newNum = (newNum*10)+(copyOfNum%10);
        copyOfNum = Math.floor(copyOfNum/10);
    }
    if (newNum == num) {
        return "is a palindrome";
    } else {
        return "is not a palindrome";
    }
}

function checkLeapYear(year: number) {
    if (year % 400 == 0) 
        return "is a leap year."
    if (year % 100 == 0)
        return "is a leap year."
    if (year % 4 == 0)
        return "is a leap year."

    return "is not a leap year."
    
}

function checkPrimeNumber(num: number) {
    if (num == 1) {
        return "is not a prime number.";
    }
    if (num > 2 && num % 2 == 0) {
        return "is not a prime number.";
    }
    for (let index = 2; index < num; index++) {
       if (num%index==0) {
        return "is not a prime number.";
       }
    }
    return "is a prime number.";
}

let theString = "Hello planet";
console.log(`Reverse String of ${theString}: ` + reverseString(theString));
let num = 6;
console.log(`Fibonacci of ${num} ` + fibonacci(num));
let isStrPalindrome = "racr";
console.log(`${isStrPalindrome} ` + palindromeStr(isStrPalindrome));
let isStrPalindrome2 = "racecar";
console.log(`${isStrPalindrome2} ` + palindromeStr(isStrPalindrome2));
let isIntPalindrome = 102;
console.log(`${isIntPalindrome} ` + palindromeInt(isIntPalindrome));
let isIntPalindrome2 = 101;
console.log(`${isIntPalindrome2} ` + palindromeInt(isIntPalindrome2));
let year = 2000;
console.log(`${year} ` + checkLeapYear(year));
let year2 = 2001;
console.log(`${year2} ` + checkLeapYear(year2));
let number = 102;
console.log(`${number} ` + checkPrimeNumber(number));
let number2 = 7;
console.log(`${number2} ` + checkPrimeNumber(number2));