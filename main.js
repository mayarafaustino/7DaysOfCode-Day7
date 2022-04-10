const primeiroInput = document.getElementById("primeiroNumero");
const segundoInput = document.getElementById("segundoNumero");
const divResultado = document.getElementById("resultado");
let valorInput1;
let valorInput2;

function pegarInputs() {
    valorInput1 = parseFloat(primeiroInput.value);
    valorInput2 = parseFloat(segundoInput.value);
    return valorInput1, valorInput2;
}

function somar() {
    pegarInputs();
    const resultado = valorInput1 + valorInput2;
    divResultado.innerHTML = resultado;
}

function subtrair() {
    pegarInputs();
    const resultado = valorInput1 - valorInput2;
    divResultado.innerHTML = resultado;
}

function multiplicar() {
    pegarInputs();
    const resultado = valorInput1 * valorInput2;
    divResultado.innerHTML = resultado;
}

function dividir() {
    pegarInputs();
    const resultado = valorInput1 / valorInput2;
    divResultado.innerHTML = resultado;
}