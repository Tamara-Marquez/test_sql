//Operaciones básicas de matemática

let suma = function (a, b){
    let resultado = a + b;
    console.log ("El resultado de la suma es :" + resultado);
}

let resta = function (a, b){
    let resultado = a - b;
    console.log ("El resultado de la resta es :" + resultado);
}

let multiplicacion = function (a,b){
    if (isNaN(a) || isNaN(b)) {
    console.error("Uno o ambos valores no son números.");
    }
  if (a === 0 || b === 0) {
    console.warn("Uno de los valores es 0, el resultado será 0");
  } else {
    const resultado = a * b;
    console.log("El resultado de la multiplicación es: " + resultado);
  }
}

let division = function (a,b){
    if (isNaN(a) || isNaN(b)) {
    console.error("Uno o ambos valores no son números.");
    }
  if ( b === 0) {
    console.error("No se puede dividir por cero, intente con otro número");
  } else {
    const resultado = a / b;
    console.log("El resultado de la division es: " + resultado);
  }
}

let info = () => "Con este código simulamos una calculadora, con ella podrán realizar ejercicios básicos de mátematica como sumar, restar, dividir o multiplicar "

//Exportando las operaciones. 

export {suma, resta, division, multiplicacion}
export default info