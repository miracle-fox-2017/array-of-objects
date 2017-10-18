
let arr = []
function createObj(name, phase, gender){

  arr.push(
    {
      name: name,
      phase: phase,
      gender: gender
    }
  )

}

function getData (name){

  for (let i =0; i < arr.length; i++){
    if(name == arr[i].name){
      return arr[i]
    }
  }
}
createObj('AKbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Ami', 3, 'male')
createObj('Shita', 2, 'female')
console.log(getData('Icha'))
console.log(getData('Ami'));
console.log(arr);
