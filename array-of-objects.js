let arr = []
function createObj(name, phase, gender){
  arr.push({
    name : name,
    phase : phase,
    gender : gender
  })
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')
console.log(arr);
console.log('\n');

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if(name == arr[i].name){
      return arr[i]
    }
  }
}

// dibuang sayang
function getDataByRandom(input){
  let result = []
  for (var i = 0; i < arr.length; i++) {
    let keys = Object.keys(arr[i]);
    for (var j = 0; j < keys.length; j++) {
      if(input == arr[i][keys[j]]){
        result.push(arr[i])
      }
    }
  }
  return result
}

console.log('Get data\n',getData('Icha'));
console.log('\n');
console.log('Get data by random\n',getDataByRandom('2'));
