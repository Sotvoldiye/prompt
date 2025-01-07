let numbers = [1, 2, 3, 4, 5]
let result = []
const reversFund = (arr) => {
  arr.forEach((num) => {
    result.push(num * -1)
  })
}

reversFund(numbers)
console.log(result)