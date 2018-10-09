const fs = require('fs')

// the regex for testing for banned letters
const bannedLetters = /[gkmqvwxz]/

// read in the words (\s+ refers to new-line characters)
let words = fs.readFileSync('words_alpha.txt').toString().split(/\s+/)

// filter out the banned letters, and then sort by length in descending order
let allowedWords = words.filter(word=>!bannedLetters.test(word)).sort((a,b) => b.length - a.length)

// output the longest word.
console.log(`Longest Word: ${allowedWords[0]}`)

// export all the words into a text file
fs.writeFileSync('words_out.txt', allowedWords.join('\r\n'))