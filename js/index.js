 // Función para inicializar el mapa de Google
 function initMap() {
    // Coordenadas del centro del mapa
    var center = { lat: 13.708007191952781, lng: -89.20259193830188 };  
    // Crear un mapa centrado en 'center'
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center
    });
    // Añadir un marcador en 'center'
    var marker = new google.maps.Marker({
      position: center,
      map: map
    });
  }