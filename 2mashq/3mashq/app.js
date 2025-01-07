const checkData = [null, 'false', 0, '0', true, false, undefined, '', NaN, '0']

const falsey = []
checkData.forEach((item) => {
  if(!item) {
    falsey.push(item)
  }
})

console.log(falsey)
