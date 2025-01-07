const words = prompt('So`z kiriting')
let splitWords = words.split('')
let counter = 0
splitWords.forEach((word) =>{
  if(word == 'a' || word == 'A'){
    counter++
  }
})

alert(`So'ralyotgan harf ${counter}ta`)
