let arr = []

function createObj(name, phase, gender){
  let obj = {
    Name : name,
    Phase : phase,
    Gender : gender
  }

  arr.push(obj)
  return arr
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr)

function getData(name){
  for(let i=0; i<arr.length; i++){
    if(arr[i]['Name'] == 'Icha'){
      return arr[i]
    }
  }
}

console.log(getData('Icha'));
