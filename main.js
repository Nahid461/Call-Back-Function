//call back function

//problem

function add(numValue1, numValue2){
    let result= numValue1 +numValue2;
    return result *12;
}

function sub(numValue1, numValue2){
     let result =numValue1 - numValue2;
     return result *12;
}

function mul(numValue1, numValue2){
    let result =numValue1 * numValue2;
    return result *12;
}

 console.log(add(2,2));
 console.log(sub(5,2));
 console.log(mul(10,10));


 //call back function

 function calculation(numValue1, numValue2, funcOperation){
     let result =funcOperation(numValue1, numValue2);//calling function
     return result * 12;
}

let result = 
calculation(2,2,function(funNumValue1,funNumValue2) {
    return funNumValue1 + funNumValue2;
}); 
console.log(result);

result=calculation(10,5,function(funNumValue1,funNumValue2){
    return funNumValue1 - funNumValue2;
});
console.log(result);

let dec= function(numValue1,numValue2){
    return numValue1 + numValue2;
}

dec();


