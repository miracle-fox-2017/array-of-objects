let list=[];
const createObj=(name,phase,gender)=>{
    list.push({
        name:name,
        phase:phase,
        gender:gender
    });
}

createObj("Alpha","0","Male");
createObj("Bravo","1","Female");
createObj("Charlie","2","Male");
createObj("Delta","3","Female");

createObj("Echo","0","Male");
createObj("Foxtrot","1","Female");
createObj("Charlie","2","Male");
createObj("Delta","3","Female");
console.log(list);
console.log("********************");

const getData=(name)=>{
    let counter=0;
    let check=false;
    while(!check){
        if(list[counter].name === name){
            return list[counter];
        }else if(counter === list.length - 1 && list[counter].name !== name){
            return "Data tidak ditemukan!";
        }
        counter++;
    }
}

console.log(getData("Delta"));
