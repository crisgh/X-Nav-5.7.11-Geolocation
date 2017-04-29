var element =  document.getElementById("modernizr_geo");
if(Modernizr.geolocation){

  var contenido = "<p>Funciona la geolocalizacion en tu navegador !</p>"

}else{
  var contenido = "<p>Tu navegador no soporta geolocalizacion , usamos un pollyfill</p>"
}

element.innerHTML = contenido;
