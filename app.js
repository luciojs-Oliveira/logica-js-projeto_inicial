alert('Boas vindas ao jogo do número secreto');  // exibi uma mensagem
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);                           // cria uma variável
console.log(numeroSecreto);                                          
// let chute = prompt('Escolha um número entre 1 e 10');   // cria um prompt - cria uma interação com o usuário.
let chute;

let tentativas = 1;


// enquato chute não for igual ao número secreto.
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // Se chute for igual ao número secreto.
    if (chute == numeroSecreto ) {
        break;
    } else {
        if (chute > numeroSecreto ) {
            alert(`O númeto secreto é menor que ${chute}`);                     // cria um alerta
        } else {
            alert(`O número secreto é maior que ${chute}`);                     // cria um alerta
        }
        // tentativas = tentativas + 1;                                         // faz igual ao codigo da linha de baixo.
        tentativas++;
    
    }
}

// operador ternario

let palavrastentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai ! você descobriu o númeroSecreto ${numeroSecreto} com ${tentativas} ${palavrastentativa}!`);



// Este código faz igual ao código da linha de cima.

//if (tentativas > 1) {
//    alert(`Isso ai ! você descobriu o númeroSecreto ${numeroSecreto} com ${tentativas} tentativas!`);
//} else {
//    alert(`Isso ai ! você descobriu o númeroSecreto ${numeroSecreto} com ${tentativas} tentativa!`);
//}


