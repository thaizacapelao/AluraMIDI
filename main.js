function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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


//o Console.log vai imprimir essa condição, até ela ser considerada
//falsa, ou seja, quando for > que 9 = false    
//contador++ = contador = contador +1;    

console.log(contador);

}

