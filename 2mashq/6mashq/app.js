const numbers= [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
let naturalNumber = 0

numbers.forEach((num) => {
  if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
    naturalNumber += num
  }
})

alert(naturalNumber)