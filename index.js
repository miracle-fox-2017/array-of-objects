var arr = []

function createObj(name, phase, gender) {
    var nilaiObj = {
        Name: name,
        Phase: phase,
        Gender: gender
    }
    arr.push(nilaiObj);
}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')

console.log(arr);