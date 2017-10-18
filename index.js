'use strict'

var arr = []

function createObj(name, phase, gender){
let obj = arr.push({
		name:name,
		phase:phase,
		gender:gender
	})

}


createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr)


function getData(name){
	let data = []

	arr.forEach(obj =>{
		if(obj.name == name){
			data.push(obj)
		}
	})

	return data[0]
}

console.log(getData('Icha'))