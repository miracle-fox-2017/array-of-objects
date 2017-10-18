var arr = [];

function createObj(a, b, c) {
  var objek = {
    nama : a,
    phase : b,
    gender : c
  }

    arr.push(objek);
}
createObj('Akbar', 1, 'Male');
createObj('Icha', 1, 'Female');
// console.log(arr);


function getData(name) {

  for(var i = 0; i < arr.length ; i++) {
    if(arr[i].nama === name) {
      return arr[i];
    }
  }
}

console.log(getData('Icha'));
