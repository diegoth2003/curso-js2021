
// Código del Cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
return lado*4;
}

console.log("EL perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
return lado*lado;
}

console.log("EL área del cuadrado mide: " + areaCuadrado + " cm2");

console.groupEnd();

// Código del Triángulo

console.group("Triángulo");

function perimetroTriangulo (lado1,lado2,base) {

return lado1 + lado2 + base;

};

function areatri (base,altura) {
 return (base*altura)/2;
};


    console.groupEnd();

// Código del círculo

console.group("Cìrculos");

function diametroCirculo (radio) {
return radio * 2;

};
const pi = Math.PI; 

function perimetroCirculo (radio) {
const diametro = diametroCirculo(radio);
return diametro * pi;  
};

function areaCirculo (radio) {
    return (radio*radio) * pi;
};



console.groupEnd();
