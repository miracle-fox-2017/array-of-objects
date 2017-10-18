let arr = [];
function createObj(name, phase, gender) {
  let obj =
  {
    name: name,
    phase: phase,
    gender: gender
  }
  arr.push(obj)
}
createObj('Akbar', 1, 'male')
createObj('Icha', 2, 'female')

console.log(arr);

function getData(name) {
  let hasil=''
  arr.forEach(cariData=>{
    // console.log(cariData.name+'++'+name);
    if(cariData.name === name){
      // console.log(cariData);
      hasil = cariData
    }
  })
  return hasil
}
console.log(getData('Icha'));
