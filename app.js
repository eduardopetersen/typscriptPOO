// Vamos criar uma classe para criar um carro, essa classe deve ter os seguintes atributos: 
// modelo
// marca
// quantidade de portas
// cor
// velocidade
var Carro = /** @class */ (function () {
    //Construtor determina que ações devem ser executadas quando da criação de um objeto.
    function Carro(_a) {
        var modelo = _a.modelo, marca = _a.marca, quantidadeDePortas = _a.quantidadeDePortas, cor = _a.cor, velocidade = _a.velocidade;
        this.modelo = modelo;
        this.marca = marca;
        this.quantidadeDePortas = quantidadeDePortas;
        this.cor = cor;
        this.velocidade = velocidade;
    }
    Carro.prototype.buzinar = function () {
        console.log("O carro ".concat(this.modelo, " buzinou!"));
    };
    ;
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
        console.log("A velocidade atual do carro acrescida de 10 km/h \u00E9 de ".concat(this.velocidade));
    };
    ;
    Carro.prototype.parar = function () {
        this.velocidade = 0;
        console.log("O carro parou, retornando a velocidade inicial de ".concat(this.velocidade, " km/h "));
    };
    return Carro;
}());
var cayenne = new Carro({
    modelo: "Cayenne",
    marca: "Porsche",
    quantidadeDePortas: 4,
    cor: "Cinza",
    velocidade: 50
});
var ferrari = new Carro({ marca: "Ferrari", quantidadeDePortas: 2, cor: "Branco", velocidade: 50, modelo: "Ferrari" });
console.log(cayenne);
cayenne.buzinar();
cayenne.acelerar();
cayenne.parar();
// ferrari.buzinar();
// ferrari.acelerar();
// ferrari.parar();
// class Pessoa {
//   nome: string;
//   idade: number;  // as variaveis nome,idade,emprego são atributos
//   emprego: string;
//   constructor(nome: string, idade: number, emprego: string) { //passar a tipagem pois o TS deixa passar outro tipo se não estiver especificado
//     this.nome = nome;
//     this.idade = idade;
//     this.emprego = emprego;
//   }
//   apresentar() { //função = método
//     console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos de idade e trabalho como ${this.emprego}`);
//  }
// }
// const pessoa = new Pessoa("Eduardo", 12, "dev");
// const pessoa1 = new Pessoa("Paulo", 33, "UX");
// pessoa.apresentar();
// pessoa1.apresentar();
// console.log(pessoa1);
//console.log(pessoa);
// type PessoaProps = {
//   nome: string;
//   idade: number;
//   emprego: string;
// }
// function apresentar(pessoa: PessoaProps) { //esse objeto é do tipo PessoaProps
//   console.log(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos de idade e trabalho como ${pessoa.emprego}`);
// }
// const pessoa = {
//   nome: "Bruno",
//   idade: 28,
//   emprego: "dev"
// }
// const pessoa1 = {
//   nome: "Eduardo",
//   idade: 20,
//   emprego: "UX"
// }
// apresentar(pessoa);
// apresentar(pessoa1);
