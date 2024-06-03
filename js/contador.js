$(document).ready(function() {
    // Verificar si hay un contador guardado en localStorage
    if (localStorage.getItem('visitCount')) {
        // Obtener el contador y convertirlo a número
        var visitCount = parseInt(localStorage.getItem('visitCount'));
    } else {
        // Si no existe, inicializar el contador en 0
        var visitCount = 0;
    }

    // Incrementar el contador en 1
    visitCount += 1;

    // Guardar el nuevo contador en localStorage
    localStorage.setItem('visitCount', visitCount);

    // Mostrar el contador en el elemento con id "visit-count"
    $('#visit-count').text(visitCount);
});
