function calculadora() {
    let nro1 = parseFloat(prompt("Ingresa el primer numero:"))
    let operacion = prompt("Elige la operacion aritmetica: (+, -, *, /").trim()
    let nro2 = parseFloat(prompt("Ingresa el segundo numero:"))
    const IVA = 1.21
    let resultado

    switch (operacion) {
        case "+":
            resultado = (nro1 + nro2) * IVA
            break
        case "-":
            resultado = (nro1 - nro2) * IVA
            break
        case "*":
            resultado = (nro1 * nro2) * IVA
            break
        case "/":
            resultado = (nro1 / nro2) * IVA
            break
        default:
            console.error("No pudimos realizar la operacion")
            return
    }       
    console.log("El resultado con IVA es:" , resultado)
}

let calcular = confirm("Deseas realizar calculos con iva integrado?")

while (calcular) {
    calculadora()
    calcular = confirm("Deseas intentar nuevamente?")
}