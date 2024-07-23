// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o
// valor do saldo.

saldo = 1.000

var saldoConta = prompt("Digite o saldo da sua conta : ");
console.log(`O saldo da sua conta é ${saldoConta}`);
if (saldoConta < 1000) {
    console.log(`O valor do seu saldo é ${saldoConta}`);
} else {
    console.log(`O seu Saldo esta abaixo de R$ 1000,00`);
}


let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);