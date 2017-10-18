var arr=[]
function createObj(nama,fase,jenisKelamin){
  var student ={
    name:nama,
    phase:fase,
    gender:jenisKelamin,
  }


arr.push(student);


}

createObj('Doel', 1, 'Male')
createObj('Atun',2,'Female')
createObj('Zaenab',2,'Female')
createObj('Mandra',3,'Male')

console.log(arr)
