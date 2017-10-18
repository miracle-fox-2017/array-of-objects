let arr =[]
function createObject(name, phase, gender) {
  arr.push({
    name: name,
    phase: phase,
    gender: gender
  });
}
createObject('Akbar', 1, 'male');
createObject('Icha', 1, 'female');
createObject('Adit', 2, 'male');
createObject('Tama', 2, 'male');
createObject('Rifky', 3, 'male');


//console.log(arr.name);

function getData(name) {

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i].name)
    if (arr[i].name === name) {
      return arr[i];
    }
  }
}
console.log(getData('Icha'));
