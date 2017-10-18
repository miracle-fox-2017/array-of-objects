let arr = [];
let createObj = (name,phase,gender)=>{
  arr.push({name:name,phase:phase,gender:gender})
  //return arr
}
createObj('Akbar',1,'male')
createObj('Icha',1,'female')

console.log(arr)

let getData = (name) => {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].name === name){
      return arr[i]
    }
  }
}
console.log(getData('Akbar'))
