export default class Perimetro{
    constructor(){}

    cuadrado(lado): number{
        return parseInt(lado) * 4;
    }

    rectangulo(b, h): number {
        return (parseInt(b) * 2) + (parseInt(h) * 2);
    }

    circulo(r): number {
        const PI: number = Math.PI;
        return (2 * PI * parseInt(r))
    }
}