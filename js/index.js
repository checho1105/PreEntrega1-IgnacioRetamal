let calcular = confirm("deseas realizar calculos con iva integrado?")
function calculadora() {
    while(calcular) {
    let nro1 = parseFloat(prompt("Ingresa el primer numero:"))
    let operacion = prompt("Elige la operacion aritmetica: (+, -, *, /").trim()
    let nro2 = parseFloat(prompt("Ingresa el segundo numero:"))
    const IVA = 1.21
    switch (operacion) {
        case "+":
            return (nro1 + nro2) * IVA;
        case "-":
            return (nro1 - nro2) * IVA;
        case "*":
            return (nro1 * nro2) * IVA;
        case "/":
            return (nro1 / nro2) * IVA;
        default:
            console.error("No pudimos realizar la operacion");
            const respuesta = confirm("Deseas intentar nuevamente?");
            if (respuesta) {
                calculadora();
            } else {
                return "Erro en el calculo";
            }
        }       
    }
}
if (calcular === true){
    const resultadoConIVA = calculadora()
    console.log("el resultado con IVA es:" , resultadoConIVA)
} else {
    console.error("No se pudo realizar la operacion")
}
