'use strict'
window.addEventListener('load', () => {

    //Eventos
    var button = document.querySelector('#button');
    var button_dos = document.querySelector('#button_dos');
    var button_tres = document.querySelector('#button_tres');
    var h1 = document.createElement('h1');
    var info = document.querySelector('#info');
    var geolocation = document.querySelector('#geo');
    var x = document.getElementById("demo");
    var loading = document.querySelector('#loading');
    var tridy = document.querySelector('#tridy');
    var local = document.querySelector('#local');
    var contador = 10;
    var his = document.querySelector('#his');


    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");



    //Evento click con varios divs
    button.addEventListener('click', () => {
        info.innerHTML = "";
        let divs = document.getElementsByTagName('div');
        for (var x = 0; x < divs.length; x++) {
            info.append(divs[x].innerHTML + document.createElement('br'));

        }
    });

    //Evento click con un solo div
    button_dos.addEventListener('mouseover', () => {
        info.innerHTML = "";
        let divs2 = document.querySelector('#recibir').innerHTML;

        info.append(divs2);

    });
    //Evento click con doble click
    button_tres.addEventListener('dblclick', () => {
        info.innerHTML = "";
        var random = Math.floor(Math.random() * 2);
        let divs2 = document.getElementsByClassName('cuadrado')[random].innerHTML;
        info.append(divs2);
    });

    //canvas
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();

    //Geolocation
    geolocation.addEventListener('click', () => {


        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }


        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
        }
    });

    //Termina el boton geolocation
    //LocalStorage
    local.addEventListener('click', () => {

        for (var x = 0; x <= contador; x++) {
            localStorage.setItem(x, 'Miguel Antonio');
        }
        //Sesson Storage
        sessionStorage.setItem(x, 'Miguel Antonio');

    })




    //Web Workers
    var myFunction = threadify(function(param1, param2) {
        // The code of this function will be executed inside a web worker
        return console.log(param1 + param2);
    });

    tridy.addEventListener('click', () => {
        myFunction(1, 2);

    });


    //history
    his.addEventListener('click', () => {

        window.history.back();
        console.log(window.history.back());

        var stateObj = { foo: "bar" };
        history.pushState(stateObj, "page 2", "bar.html");

    });




});