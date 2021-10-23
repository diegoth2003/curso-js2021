
// Código del Cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");
const perimetroCuadrado = ladoCuadrado * 4;
console.log("EL perímetro del cuadrado mide: " + perimetroCuadrado + " cm");
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("EL área del cuadrado mide: " + areaCuadrado + " cm2");

console.groupEnd();

// Código del Triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
    );
const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + "cm.");

const perimetrotri = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("EL perímetro del triángulo mide: " + perimetrotri + " cm");

const areatri = (baseTriangulo*alturaTriangulo) /2;
console.log("El área del triángulo mide: " + areatri + " cm2");

    console.groupEnd();

// Código del círculo

console.group("Cìrculos");

const radio = 4;
const diametro = radio*2;
const pi = Math.PI;
const perimetroCirculo = diametro * pi;
const areaCirculo = (radio*radio) * pi;

console.log ("El radio del cìrculo es: " + radio + "cm");
console.log ("El diámetro del cìrculo es: " + diametro + "cm");
console.log ("El perímetro del cìrculo es: " + perimetroCirculo + "cm");
console.log ("El área del cìrculo es: " + areaCirculo + "cm2");
console.log ("Pi es:" + pi );

console.groupEnd();
