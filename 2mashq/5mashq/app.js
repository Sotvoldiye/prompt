const word = prompt("So'z yozing")
const splitWord = word.split(' ')
let newWord = ''

splitWord.forEach((item) => {
  const boshi = item.charAt().toLowerCase()
  const davomi = item.slice(1).toUpperCase()   

  newWord += ' ' + boshi + davomi
})

alert(newWord)