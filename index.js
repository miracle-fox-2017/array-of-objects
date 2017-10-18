var arr = []
function createObj(name, phase, gender){
  // code here
  arr.push({
    'name': name,
    'phase': phase,
    'gender': gender,
  })
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

console.log(arr);
