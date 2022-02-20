const array= [45,14,24,68,25];
console.log(array.length);
array[2]=5412;
array.pop(25);
console.log(array);

if(array.indexOf(14)!= 0){
    console.log(array[3]);
};



 for(let arr of array){
     arr=[];
    console.log(array);
 };


 function fullName(first,last='Bhuiyan'){
    const name = first+' '+last;
    return name;
 }
 const names= fullName('shamim','chowdury');
 console.log(names);

// spread of three dots 

 function maxNumber(array=[]){
     const max =Math.max(...array);
     return max;
     
 }
 const biggest =maxNumber();
 console.log(biggest);

 