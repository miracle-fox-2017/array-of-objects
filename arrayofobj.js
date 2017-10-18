//release0
var arr = [];
function createObj(name , phase, gender){
	let objek = {
		name : name,
		phase : phase,
		gender : gender
	};
	arr.push(objek)
}
createObj('ilham',1, 'male');
createObj('zuhri',2, 'male');
createObj('azari',3, 'male');
//console.log(arr);

//release1
function release1(data){

  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (data === arr[i].name) {
      return arr[i]
    }
  }
  return 'data kosong'
}

console.log(release1('ilham'));
console.log(release1('zuhri'));
console.log(release1('xxx'));
console.log(release1('azari'));
