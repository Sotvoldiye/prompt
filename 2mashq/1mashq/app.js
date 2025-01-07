const myArray = [[false, true], [1, 2], 99, 'yaxshi']

for(let i = 0; i < myArray.length; i++) {
  if(typeof  myArray[i] == 'string') {
    console.log(`string elementi: ${myArray[i]}`);
  }
}
