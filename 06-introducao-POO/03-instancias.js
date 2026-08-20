class Pessoa{
    
    constructor(nome, nota){
       this.nome = nome;
       this.nota = nota;
    };
    
    apresentar(){
        console.log(`${this.name} - Nota ${nota}`);
    }
}

const aluno1 = new Pessoa("Ana", 17);
const aluno2 = new Pessoa("Kauan", 17);
console.log(aluno1);
console.log(aluno2);