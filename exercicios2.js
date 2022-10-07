// EX 02
// Crie uma classe chamada carro com os seguintes atributos: marca, quantidade de rodas, quantidade de portas e velocidade
// Crie uma segunda classe chamada moto com os seguintes atributos: marca, quantidade de rodas e velocidade
// Note que alguns atributos podem ser separados em uma classe mãe, como ficaria essa separação?
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veiculo = /** @class */ (function () {
    function Veiculo(_a) {
        var marcaRecebida = _a.marcaRecebida, quantidadeRodasRecebido = _a.quantidadeRodasRecebido;
        this.marca = marcaRecebida;
        this.quantidadeRodas = quantidadeRodasRecebido;
        this.velocidade = 0;
    }
    return Veiculo;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(quantidadePortasRecebido, marcaRecebida) {
        var _this = _super.call(this, { marcaRecebida: marcaRecebida, quantidadeRodasRecebido: 4 }) || this;
        _this.quantidadePortas = quantidadePortasRecebido;
        return _this;
    }
    return Car;
}(Veiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marcaRecebida) {
        return _super.call(this, { marcaRecebida: marcaRecebida, quantidadeRodasRecebido: 2 }) || this;
    }
    return Moto;
}(Veiculo));
var uno = new Car(4, "fiat");
var shadow = new Moto("honda");
console.log(uno);
console.log(shadow);
