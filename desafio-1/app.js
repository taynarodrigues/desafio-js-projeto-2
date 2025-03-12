let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole(){
    console.log('O botão console foi clicado')
}

function exibirAlerta(){
    console.log('Eu amo JS');
}

function exibirPrompt(){
   let cidade = prompt('Qual o nome de uma cidade do Brasil?');
   alert(`Estive em ${cidade} e lembrei de você.`);
}

function somaDoisNumeros(){
    let primeiroNumero = parseInt(prompt('Digite o primeiro número inteiro'));
    let segundoNumero = parseInt(prompt('Digite o segundo número inteiro'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}

function verificarNumero(numero) {
    if (numero > 0) {
      console.log("O número é positivo.");
    } else if (numero < 0) {
      console.log("O número é negativo.");
    } else {
      console.log("O número é zero.");
    }
  }