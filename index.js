const fs = require('fs')

// gets the arguments
const args = process.argv.slice(2)

// the regex for testing for banned letters
const bannedLetters = new RegExp(args[0] || '[gkmqvwxz]')

// read in the words (\s+ refers to new-line characters)
let words = fs.readFileSync('words_alpha.txt').toString().split(/\s+/)

// filter out the banned letters, and then sort by length in descending order (this will allow you to print out the top 10 longest words and such)
let allowedWords = words.filter(word=>!bannedLetters.test(word)).sort((a,b) => b.length - a.length)

console.log('Longest Words:')

// prints out the longest words.
allowedWords.some(word =>
{
    if(allowedWords[0].length === word.length) console.log(word)        
    else return true  
})

// export all the words into a text file, sorted
fs.writeFileSync('words_out.txt', allowedWords.sort().join('\r\n'))