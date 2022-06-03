function findMissing(name){

let miss;
let min =Math.min(...name);
let max =Math.max(...name);
let n=name.length;
let actual=(min+max)*n/2;
let sum=0;
for(let i=0;i<n;i++){
    sum=sum+name[i];
}



if(sum==actual){
    min=min-1;
    max=max+1;
    return "Missing value can start number :"+min +" or End number :"+max;
}
else{
    actual=(min+max)*(n+1)/2;
    miss=actual-sum;
    
}


    return "missing value is :"+Math.floor(miss);
}
var array = [121,120,122,123,125,124];

console.log(findMissing(array));
  

