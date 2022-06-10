function validaArray(array, num){

    if(!array || !num) throw new ReferenceError;
    if(!(array instanceof Object || num instanceof Number)) throw new TypeError;
    if(array.length !== num) throw new RangeError;

    console.log(array);
}

const array = [1,5,6,23,8,3];

try {
    validaArray(6);

} catch (e){
    if(e instanceof ReferenceError) console.log("Você não digitou algum dado!");

    if(e instanceof TypeError) console.log("Você digitou algum dado incorretamente!");

    if(e instanceof RangeError) console.log("O número não é o tamanho do Array!");        
}

throw new Error