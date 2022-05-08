const alunos = [
    { nome: 'João', nota: 5, turma: '1B' },
    { nome: 'Sofia', nota: 9, turma: '1B' },
    { nome: 'Matheus', nota: 10, turma: '1A' },
];

function alunosAprovados(alunos, media){
    const alunosAprovados = [];

    for(let aluno of alunos){
        if(aluno.nota >= media){
            alunosAprovados.push(aluno);
        }
    }
    return alunosAprovados;
}

console.log(alunosAprovados(alunos, 7));