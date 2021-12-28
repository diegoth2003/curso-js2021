
// Código del Cuadrado

function perimetroCuadrado (lado) {
return lado*4;
}

console.log("EL perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado (lado) {
return lado*lado;
}

console.log("EL área del cuadrado mide: " + areaCuadrado + " cm2");


// Código del Triángulo isóceles

function perimetroTriangulo (lado1,lado2,base) {

return lado1+lado2+base;



};

function trianguloisoceles(){



}  


function areatri (base,altura) {
 return (base*altura)/2;
};



// Código del círculo


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


//FUNCIONES PARA EL HTML//

function CalcularPerimetroCuadrado() {

const input = document.getElementById ("InputCuadrado");
const value = input.value;
const perimetro = perimetroCuadrado(value);
alert(perimetro);
}

function CalcularAreaCuadrado() {
    const input = document.getElementById ("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
 
}

