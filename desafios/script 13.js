// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

numero = prompt('Digite um numero para ver se ele é positivo ou negativo : ');
if (numero > 0) {
    alert('número potivo !')
} else {
    alert('número negativo !')
}


// Pergunta ao usuário para digitar um número
var numero = parseFloat(prompt("Digite um número:"));

// Verifica o sinal do número usando Math.sign()
var sinal = Math.sign(numero);

// Exibe um alerta com base no sinal
if (sinal === 1) {
    alert("O número é positivo.");
} else if (sinal === -1) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}

