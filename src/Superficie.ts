export default class Superficie{
    constructor(){}

    cuadrado(lado): number{
        return Math.pow(parseInt(lado), 2);
    }

    rectangulo(b, h): number {
        return parseInt(b) * parseInt(h);
    }

    circulo(r): number {
        const PI: number = Math.PI;
        return (PI * (Math.pow(parseInt(r), 2)))
    }
}