let arr = [];
let createObj = (name,phase,gender) =>{
	arr.push({
		name : name,
		phase : phase,
		gender : gender
	})
};

let getData = name =>{
	let index;
	for (let i = 0 ; i<arr.length ; i++){
		if(arr[i].name === name){
			return arr[i];
		}
	}
	return false;
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Tama', 2, 'male');
createObj('Rifky', 2, 'male');
console.log(arr)
console.log("------------------------------------------------------------------------------------------------------")
console.log(getData('Icha'));
