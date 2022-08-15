function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  // and = &&
  // != null, não é necessário pois o if ja entende como 'se' 'elemento' existe ele vai dar play
    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    }
    else {
        // alert('Elemento não encontrado') -> também é uma opção
    console.log('Elemento não encontrado ou seletor inválido');
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom;
//se fosse somente para uma tecla, usariamos esse código;

const listaDeTeclas = document.querySelectorAll('.tecla');

//let = variavel
//enquanto = while (loop) + uma condição que tenha fim
//length = quantidade da lista = 9 (temos 9 teclas)
//for = para

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string = `#xxx_${xxxxxxx}`
    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

//quando a tecla estiver abaixada    
    tecla.onkeydown = function (evento) {

        //se (dada condição for verdadeira) execute esse código
        // || = ou (operador de alternância)
    if (evento.code === "Enter" || evento.code === "Space") { 
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

//o Console.log vai imprimir essa condição, até ela ser considerada
//falsa, ou seja, quando for > que 9 = false    
//contador++ = contador = contador +1;    

console.log(contador);

}

