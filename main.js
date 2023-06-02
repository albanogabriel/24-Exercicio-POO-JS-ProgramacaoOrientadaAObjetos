function Pessoa(nome, idade, sexo, cpf) {
    this.nome = nome
    this.idade = idade
    this.sexo = sexo
    
    let _cpf = cpf

    // getters e setters
    this.getCpf = function() {
        return _cpf
    }

    this.setCpf = function(valor) {
        _cpf = valor
    }
}

function PessoaEndereco(nome, idade, sexo, rua, numero, cep, bairro, cidade) {
    this.rua = rua
    this.numero = numero
    this.cep = cep
    this.bairro = bairro
    this.cidade = cidade

    Pessoa.call(this, nome, idade, sexo)
}

function Gabriel() {
    PessoaEndereco.call(this, 'gabriel', '25 anos', 'Masculino', 'jorge lacerda', 1907, 88047001, 'costeira', 'floripa')
    
}
function Jessica() {
    PessoaEndereco.call(this, 'jéssica', '39 anos', 'Feminino', 'jorge Joao Piu', 113, 88047001, 'corrego', 'floripa')
}
function Luiza() {
    PessoaEndereco.call(this, 'luiza', '22 anos', 'Feminino', 'Quincas Borba', 1201, 88047001, 'Jurere', 'floripa')
}


const gabriel = new Gabriel
console.log(gabriel)

const jessica = new Jessica
console.log(jessica)

const luiza = new Luiza
console.log(luiza)

gabriel.setCpf('02577465');
console.log(gabriel.getCpf()); 

jessica.setCpf('65774265');
console.log(jessica.getCpf()); 

luiza.setCpf('36577465');
console.log(luiza.getCpf());

console.log(gabriel.nome, gabriel.getCpf());
console.log(jessica.nome, jessica.getCpf());
console.log(luiza.nome, luiza.getCpf());