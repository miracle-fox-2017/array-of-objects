var arr = [];
function createObj(name, phase, gender){
    var person = {
        name : name,
        phase : phase,
        gender : gender,
        }
    
    arr.push(person);





}



function getData(name){
    for(let i = 0; i < arr.length;i++){
        if(arr[i].name == name){
            return arr[i]
        }
    }
}
console.log(getData('Icha'))
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');



