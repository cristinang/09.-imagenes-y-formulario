/*=============================================
JD SLIDER
=============================================*/

$('.slideshow').jdSlider({

	wrap:'.slide-inner', //Especificar el slide que vamos a usar
	isAuto: true, //Inicia la animación automáticamente
	isLoop: true, //Al finalizar vuelve a comenzar
	interval: 7000, //Tiempo por cada slide
	isCursor:true //Pausar animación con el mouse

});

/*=============================================
PINTEREST GRID
=============================================*/

$('.pinterest_grid').pinterest_grid({
	no_columns: 4, //Número de columnas
	padding_x: 10, //Márgenes internas horizontal
	padding_y: 10, //Márgenes internas vertical
	margin_bottom: 50, //Márgen externa inferor
	single_column_breakpoint: 769 //Punto de quiebre para una sola columna
});

/*=============================================
EKKO LIGHTBOX
=============================================*/

$(document).on("click", "[data-toggle='lightbox']", function(e){

	e.preventDefault(); //Quitar eventos que vengan por defecto en el navegador
	$(this).ekkoLightbox(); //Activar la acción del plugin Ekko Lightbox


})

/*=============================================
VALIDAR FORMULARIO
=============================================*/
$(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  });