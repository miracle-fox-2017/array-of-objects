var arr = [];

function createObj(name, phase, gender) {
	arr.push({
		name: name,
		phase: phase,
		gender: gender
	})
}

function getData(name) {
	let indexCari = 0;

	for (item in arr) {
		if (arr[item].name == name) {
			indexCari = item;
		}
	}

	return arr[indexCari];
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');

console.log(arr);
console.log(getData('Icha'));