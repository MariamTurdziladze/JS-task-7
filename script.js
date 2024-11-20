// Takes a string of words separated by spaces (e.g., "I love learning JavaScript").

const arrayText = "I love learning JavaScript, but very deep in my heart that I can't reach it yet"
console.log(arrayText.split(" "));

// Splits the string into individual words using a method (split()).

const arrayText2 = "Does JavaScript love me?"
console.log(arrayText2.split(" "));

// Use a for loop to check the length of each word:

// If the word is 5 characters or longer, replace it with "LongWord".


const forloop = "Does JavaScript love me"
const words = forloop.split(" ");

for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        words[i] = "LongWord"
    }
}

console.log(words.join(" "));


// If the word is shorter, replace it with "ShortWord".

const forloop2 = "Does JavaScript love me"
const words2 = forloop2.split(" ");

for (let i = 0; i < words2.length; i++) {
    if (words2[i].length <= 5) {
        words2[i] = "ShortWord"
    }
}

console.log(words2.join(" "));


// Use a while loop to count how many words in the original string contain the letter "a". Display this count.

const whileloop = "Does JavaScript love me"
const words3 = whileloop.split(" ");
let count = 0; 
let i = 0;

while ( i < words3.length) {
    if (words3[i].includes("a")) {
        count++
    }
    i++;
}

console.log(`count words.${count}`);

// Use a do/while loop to print each word from the final modified string one by one, stopping when there are no more words left.

const dowhile = "Does JavaScript love me"
const words4 = dowhile.split(" ");
let count3 = 0; 

do {
    console.log(`count is ${count3}`);
    count3++;
} while (count3 < words4.length);