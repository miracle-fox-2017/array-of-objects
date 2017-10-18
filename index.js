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

function getData(name){
for(var i = 0; i < arr.length;i++){
    if (arr[i].Name === name){
        return arr[i];    
    }
}
    return 0;
}

console.log(getData('Icha'));
console.log(getData('Akbar'));