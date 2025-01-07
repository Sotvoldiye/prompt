const types = [21.1, "Roziya", "array", ["I am array"], null, true, 214]
const newTypes = []

types.forEach((type) => {
  newTypes.push(typeof type)
 })

console.log(newTypes)