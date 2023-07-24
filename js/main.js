$(document).ready(function() {
    
    $("#processButton").on("click", function() {
        const inputText = $("#inputText").val();
        const vocales = [];
        const digitos = [];
        const consonantes = [];

        for (let i = 0; i < inputText.length; i++) {
            const char = inputText.charAt(i).toLowerCase();
            if (/[aeiouáéíóú]/.test(char)) {
                vocales.push(char);
            } else if (/[a-zñ]/i.test(char)) {
                consonantes.push(char);
            } else if (/[0-9]/.test(char)) {
                digitos.push(char);
            }
        }

        $("#vocalesList").html("<li>" + vocales.join("</li><li>") + "</li>");
        $("#digitosList").html("<li>" + digitos.join("</li><li>") + "</li>");
        $("#consonantesList").html("<li>" + consonantes.join("</li><li>") + "</li>");
    });
});
