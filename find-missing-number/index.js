function findMinimum(name,start_number,length){

    let miss;
let min =Math.min(...name);
let max =Math.max(...name);
if(min!=start_number){
    miss=start_number;
}
else if(max!=start_number+length){
    miss=start_number+length;
}
else{
    for(let i=min;i<=max;i++){
       
        if(name.indexOf(i)<0){
           miss=i; 
        }
    } 
}

    return miss;
}
var array = [121,120,124,123,125];
//console.log(sayHello(array));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question('Enter Lenght of the sequence ?', name => {
    //console.log(`Hi ${name}!`);
    let k=parseInt(name);
    
    let answer=findMinimum(array,120,k);
    console.log(answer);
    readline.close();
  });
  

