const data = [[1, 2, 3], 'qizil', [4, 5, 6], true , false]
const newData = []

data.forEach((item) => {
  const res = Array.isArray(item)
  if(res) {
    item.forEach((num) => {
      newData.push(num)
    })
  }
})

console.log(newData)