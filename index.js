const arr = [];

const createObj = (name, phase, gender) => {
  const obj = {
    name,
    phase,
    gender
  }

  arr.push(obj)
  return arr;
}

createObj('Yofri', 1, 'male');

const getData = (name) => {
  for (i in arr) {
    if (arr[i]['name'] === name) {
      return arr[i];
    }
  }
}

console.log(getData('Yofri'));
