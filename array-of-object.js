let arr = [];

function createObj(name,phase,gender){
  arr.push({name:name,phase:phase,gender:gender})
}

function getData(name){
  for(let i = 0; i < arr.length; i++){
    if(arr[i].name === name){
      return arr[i]
    }
  }
}

createObj('Akbar',1,'male');
createObj('Icha',1,'female');
console.log(getData('Icha'))
