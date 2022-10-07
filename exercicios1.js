// EX 01
// Crie uma classe de calculadora que contenha os seguintes métodos: somar, subtrair, multiplicar e dividir
// Os métodos devem retornar o valor
// Em seguida crie uma instância da sua calculadora e execute as operações
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (valorA, valorB) {
        return valorA + valorB;
    };
    Calculadora.prototype.subtrair = function (valorA, valorB) {
        return valorA - valorB;
    };
    Calculadora.prototype.multiplicar = function (valorA, valorB) {
        return valorA * valorB;
    };
    Calculadora.prototype.dividir = function (valorA, valorB) {
        return valorA / valorB;
    };
    return Calculadora;
}());
var minhaCalculadora = new Calculadora();
console.log("somar: ", minhaCalculadora.somar(1, 2));
console.log("subtrair: ", minhaCalculadora.subtrair(1, 2));
console.log("multiplicar: ", minhaCalculadora.multiplicar(1, 2));
console.log("dividir: ", minhaCalculadora.dividir(1, 2));
// interface AcaoRespirar {
//     respirar(): string;
// }
// class Peixe {
//     tipo: string = "Peixe";
// }
// class Ave implements AcaoRespirar{
//     tipo: string = "Ave";
//     respirar(){
//         return "respirou";
//     }
// }
// class Mamifero {
//     tipo: string = "Mamífero";
//     respirar(){
//         return "respirou";
//     }
// }
// class Cao extends Mamifero { // vai extender o método e o tipo da classe "animal"
//     familia: string = "Canídeos";
// }
// class Gato extends Mamifero {
//     familia: string = "Felídeos";
// }
// const costelinha = new Cao();
// const mingau = new Gato();
// console.log(costelinha.respirar());
// console.log(mingau);
