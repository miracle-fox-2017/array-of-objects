var arr =[]
function createObj(name,phase,gender){
  arr.push({Name : name , Phase : phase, Gender : gender })

}
createObj('Akbar',1,'male')
createObj('Icha',2,'female')
createObj('Agung',1,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')


console.log(arr)


function getData (name){
   for (let i = 0;i<arr.length;i++){
     if (name == arr[i].Name){
       return arr[i]
     }
   }
return -1
}
console.log(getData('Rifky'))
