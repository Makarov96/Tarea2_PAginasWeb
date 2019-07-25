'use strict'
window.addEventListener('load', () => {

    //Eventos
    var button = document.querySelector('#button');
    var button_dos = document.querySelector('#button_dos');
    var h1 = document.createElement('h1');
    var info = document.querySelector('#info');




    //Evento click con varios divs
    button.addEventListener('click', () => {
        info.innerHTML = "";
        let divs = document.getElementsByTagName('div');
        for (var x = 0; x < divs.length; x++) {
            info.append(divs[x].innerHTML + document.createElement('br'));

        }
    });

    button_dos.addEventListener('mouseover', () => {
        info.innerHTML = "";
        let divs2 = document.querySelector('#recibir').innerHTML;
        info.append(divs2);

    });





});