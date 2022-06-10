// Generic Types

function adicionaApendiceALista<T>(array: any, value: T){
    return array.map(item => item + value);
}


adicionaApendiceALista(['A','B','C'], 1);
