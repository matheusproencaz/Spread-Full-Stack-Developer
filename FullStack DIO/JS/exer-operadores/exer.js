
function comparaNumeros(num1, num2){

    if(!num1 || !num2) return "Digite dois números!";
    if(!Number.isNaN(num1) || !Number.isNaN(num2)) return "Digite dois números!";

    let resultado = `Os números ${num1} e ${num2}`;
 
    if(num1 === num2){        
        resultado += " são iguais";
    }else{
        resultado += " não são iguais";
    }

    if((num1 + num2) <= 10){
        resultado += " e a soma deles é menor que 10 e menor que 20.";
    } else if((num1 + num2) >= 10 && (num1 + num2) < 20){
        resultado += " e a soma deles é maior que 10 e menor que 20.";
    } else {
        resultado += " e a soma deles é maior que 10 e maior que 20.";
    }

    return resultado;
}

console.log(comparaNumeros("aa",10));
console.log(comparaNumeros(5));


const meuObjeto = {
    nome: "João",
}

console.log(meuObjeto.nome);
console.log(meuObjeto[nome])