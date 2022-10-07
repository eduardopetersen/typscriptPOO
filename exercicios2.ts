// EX 02
// Crie uma classe chamada carro com os seguintes atributos: marca, quantidade de rodas, quantidade de portas e velocidade
// Crie uma segunda classe chamada moto com os seguintes atributos: marca, quantidade de rodas e velocidade
// Note que alguns atributos podem ser separados em uma classe mãe, como ficaria essa separação?

type VeiculoProps = {
    marcaRecebida: string;
    quantidadeRodasRecebido: number;
  };
  
  class Veiculo {
    marca: string;
    quantidadeRodas: number;
    velocidade: number;
  
    constructor({ marcaRecebida, quantidadeRodasRecebido }: VeiculoProps) {
      this.marca = marcaRecebida;
      this.quantidadeRodas = quantidadeRodasRecebido;
      this.velocidade = 0;
    }
  }
  
  class Car extends Veiculo {
    quantidadePortas: number;
  
    constructor(quantidadePortasRecebido: number, marcaRecebida: string) {
      super({ marcaRecebida, quantidadeRodasRecebido: 4 });
      this.quantidadePortas = quantidadePortasRecebido;
    }
  }
  
  class Moto extends Veiculo {
    constructor(marcaRecebida: string) {
      super({ marcaRecebida, quantidadeRodasRecebido: 2 });
    }
  }
  
  const uno = new Car(4, "fiat");
  const shadow = new Moto("honda");
  
  console.log(uno);
  console.log(shadow);
