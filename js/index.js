'use strict'

$(document).ready(function() {



    $('#mover').draggable();

    $("#recibir").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("moving")
                .find("h1")
                .html("Dropped!");
        }
    });


});