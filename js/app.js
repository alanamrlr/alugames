let jogosAlugados = 0;

function contarEExibirJogosAlugados(){
    console.log(`Foram alugados um total de ${jogosAlugados} ${jogosAlugados === 1 ? 'jogo' : 'jogos'}.`);
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Tem certeza que quer devolver o jogo ${nomeJogo}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        if (confirm(`Tem certeza que quer alugar o jogo ${nomeJogo}?`)) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            botao.textContent = 'Devolver';
            jogosAlugados++;
        }
    }
    contarEExibirJogosAlugados();
}

// Inicializa a contagem considerando que os jogos já começam alugados. no nosso caso o terceiro jogo já começa alugado então ele deve entrar na lista de alugados desde o inicio
document.addEventListener('DOMContentLoaded', function() { //depois que toda a pagina ja foi carregada esse evento começa
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length; //ele passa por todos os elementos do documento procurando um que tenha aquela classe. ele pega o tamanho e a constante jogosAlugados não começa como 0 e sim como o tamanho do length
    contarEExibirJogosAlugados();
});




/* TEM COMO FAZER COM SO UM IF ELSE
if (imagem.classList.contains('dashboard__item__img--rented')){
    imagem.classList.remove('dashboard__item__img--rented');
} else {
    imagem.classList.add('dashboard__item__img--rented');
}


if (botao.classList.contains('dashboard__item__button--return')){
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent = 'Alugar';
} else {
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
}*/


//exercício3 ver se a palavra é um palíndromo
/*essaPalavraEUmPalindormo("rever");

function essaPalavraEUmPalindormo(palavra){
    var separandoAsLetrasDaPalavra = palavra.split("");
    var palavraInvertida = separandoAsLetrasDaPalavra.reverse();
    palavraInvertida =palavraInvertida.join("");
    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palíndromo`);
    } else{
        console.log(`A palavra ${palavra} não é um palíndromo`);
    }
}
*/

/*exercicio4 Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.*/

/*numerosEmOrdemCrescente(300,1,22);

function numerosEmOrdemCrescente(num1,num2,num3){
    const numerosOrdenados =[num1,num2,num3].sort((x,y) => x-y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}*/

/*se x-y for maior que 0 o y fica na frente do x*/