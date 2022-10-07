// Vamos criar uma classe para criar um carro, essa classe deve ter os seguintes atributos: 
// modelo
// marca
// quantidade de portas
// cor
// velocidade

// Adicione os métodos: buzinar, acelerar e parar. 
// Ao buzinar, uma mensagem deve ser informada no console.
// Ao acelerar, a velocidade atual deve ser acrescida em 10.
// Ao parar, a velocidade deve retornar a zero.

// Crie uma instância de carro e utilize seus métodos.

  type CarroProps = { // //boa pratica criar Props, pois a ordem não vai importar quando instanciar um novo objeto
   modelo: string;
   marca: string;
   quantidadeDePortas: number;
   cor: string;
   velocidade: number;
  };


class Carro {
  modelo: string;
  marca: string;
  quantidadeDePortas: number;
  cor: string;
  velocidade: number;


  //Construtor determina que ações devem ser executadas quando da criação de um objeto.
  constructor({modelo, marca, quantidadeDePortas, cor, velocidade}: CarroProps) { //se criar Props a ordem não vai importar quando instanciar um novo objeto
  this.modelo = modelo;
  this.marca = marca;
  this.quantidadeDePortas = quantidadeDePortas;
  this.cor = cor;
  this.velocidade = velocidade; 
  }

  buzinar(){
    console.log(`O carro ${this.modelo} buzinou!`);
  };

  acelerar(){
    this.velocidade = this.velocidade + 10
    console.log(`A velocidade atual do carro acrescida de 10 km/h é de ${this.velocidade}`)
  };

  parar(){
    this.velocidade = 0
    console.log(`O carro parou, retornando a velocidade inicial de ${this.velocidade} km/h `)
  }
}

const cayenne = new Carro({
  modelo: "Cayenne", 
  marca: "Porsche", 
  quantidadeDePortas: 4,
  cor: "Cinza", 
  velocidade: 50 
});

const ferrari = new Carro({marca: "Ferrari", quantidadeDePortas: 2, cor: "Branco", velocidade: 50, modelo: "Ferrari"  });

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


