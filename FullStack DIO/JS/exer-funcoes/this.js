function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const p1 = {
    nome:'Pedro',
    idade: 25
}

const p2 = {
    nome:'Maria',
    idade: 30
}

const p3 = {
    nome:'Matheus',
    idade: 24
}

const idadeP1 = calculaIdade.apply(p1, [10]);
const idadeP2 = calculaIdade.call(p2, 5);

console.log(idadeP1);
console.log(idadeP2);
