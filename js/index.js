import { sumar, restar, multiplicar, dividir } from './calculadora.js'

let number1 = document.getElementById("numberOne");
let number2 = document.getElementById("numberTwo");
let button = document.querySelector("#btn-calculate");

function calcular() {
    if (number1.value != "" && number2.value != "") {
        let numberOne = parseInt(number1.value);
        let numberTwo = parseInt(number2.value);

        //valiadaciones negativos
        const absNumberOne = (numberOne < 0 ? -1 * (numberOne) : number1)
        const absNumberTwo = (numberTwo < 0 ? -1 * (numberTwo) : numberTwo)

        let multiplicacion = multiplicar(numberOne, absNumberTwo);
        multiplicacion = (numberTwo < 0 ? -1 * (multiplicacion) : multiplicacion);

        let division = dividir(numberOne, numberTwo);

        return `La suma es ${sumar(numberOne, numberTwo)} \n
            La resta es ${restar(numberOne, numberTwo)} \n
            La multiplicacion es ${multiplicacion} \n
            La division es ${division}`
    }
    return "Debes ingresar 2 numeros"
}

button.addEventListener("click", () => {
    alert(calcular())
})