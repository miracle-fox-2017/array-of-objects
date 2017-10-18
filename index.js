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

createObj('Akbar', 1, 'male')
