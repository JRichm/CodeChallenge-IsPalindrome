// return true if this word is palindrome. flase if it is not. a palindrome is a word that is speleed the same backwards and forwards

// examples
// -isPalindrome('a') returns true
// -isPalindrome('noon') returns true
// -isPalindrome('hello') returns false

word1 = 'noon';
word2 = 'hannah';

// function that checks if input word is a palindrome
function isPalindrome(wordToCheck) {

    // split word into char array
    let wordForwards = wordToCheck.split('');

    // loop through array
    for (let i = 0; i < wordForwards.length; i++) {

        // checks if opposite letter in word is a different letter
        if (wordForwards[i] !== wordForwards[wordForwards.length - i - 1]) {

            // if letters are not equal, return false
            console.log(`${wordToCheck} is not a palindrome`);
            return false;
        }
    }

    // if letters are the same, return true
    console.log(`${wordToCheck} is a palindrome`);
    return true;
}

isPalindrome(word2);