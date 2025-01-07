let word = 'samarqand'
let splitWord = word.split('')
let newWord= ''

for(let i = word.length - 1; i >= 0; i--) {
  newWord += splitWord[i]
}

console.log(newWord) 