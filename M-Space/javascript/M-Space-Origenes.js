
  function loadFile() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Por favor seleccione un fichero antes de cargarlo");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      let lines = e.target.result;
      origenes = JSON.parse(lines); 
      cargaorigenes();
      cargaprofesiones();
      cargado();
    }
  }
  
  
  function cargaorigenes() {
		var sOrigenes="<strong>Origen:</strong> <select class='w3-select'  name='origen' onchange='seleccionaOrigen(this)'><option>--Aleatorio--</option>";
		var iorigen=0;
		for (iorigen=0; iorigen< origenes.origenes.length; iorigen++) {
			sOrigenes += "<option>" + origenes.origenes[iorigen].nombre + "</option>";
		}
		sOrigenes += "</select>";		
		document.getElementById("listaorigenes").innerHTML = sOrigenes;
  }
  
  function cargaprofesiones() {
	  var sProfesiones="<strong>Profesión:</strong> <select class='w3-select'  name='origen' onchange='seleccionaProfesion(this)'><option>--Aleatorio--</option>";
		var iprofesion=0;
		for (iprofesion=0; iprofesion< origenes.profesiones.length; iprofesion++) {
			sProfesiones += "<option>" + origenes.profesiones[iprofesion].nombre + "</option>";
		}
		sProfesiones += "</select>";
		document.getElementById("listaprofesiones").innerHTML = sProfesiones;
  }
  
  function seleccionaOrigen(thelist) {
		var idx = thelist.selectedIndex;
		var seleccionado = thelist.options[idx].innerHTML;
		if ( idx < 1 ) {
			seleccionado = 'random';
		}
		nombreorigen = seleccionado;
		pintaOrigen(seleccionado);
  }
  
  function seleccionaProfesion(thelist) {
		var idx = thelist.selectedIndex;
		var seleccionado = thelist.options[idx].innerHTML;
		if ( idx < 1 ) {
			seleccionado = 'random';
		}
		nombreprofesion = seleccionado;
  }
  
  function seleccionaIncremento(thelist) {
		var idx = thelist.selectedIndex;
		var seleccionado = thelist.options[idx].innerHTML;
		if ( idx < 1 ) {
			seleccionado = '10%';
		}
		incrementohabilidades = seleccionado;
  }
  function inicial() {
	  
	  	document.getElementById("cargajson").innerHTML="<form id=\"jsonFile\" name=\"jsonFile\" enctype=\"multipart/form-data\" method=\"post\">" +
			  "<fieldset>" +
				"<h2>Tablas de orígenes (json)</h2>" +
				 "<input type='file' id='fileinput'>" +
				 "<input type='button' id='btnLoad' value='Cargar' onclick='loadFile();'>" +
			  "</fieldset>" +
			"</form> <a href=\"json/M-Space-Origenes-ejemplo.json\">Ejemplo de json</a>";
	  
		document.getElementById("habilidades").innerHTML = "";
		document.getElementById("habilidadesprofesionales").innerHTML = "";
		document.getElementById("eventos").innerHTML = "";
	  
		document.getElementById("cargajson").style.visibility="visible";
		document.getElementById("listaorigenes").style.visibility="hidden";
		document.getElementById("listaprofesiones").style.visibility="hidden";
		document.getElementById("incrementohabilidades").style.visibility="hidden";
		document.getElementById("btncalcular").style.visibility="hidden";
		document.getElementById("btnrecargar").style.visibility="hidden";
		document.getElementById("origen").style.visibility="hidden";
		document.getElementById("descorigen").style.visibility="hidden";
		document.getElementById("profesion").style.visibility="hidden";
		document.getElementById("habilidades").style.visibility="hidden";
		document.getElementById("habilidadesprofesionales").style.visibility="hidden";
		document.getElementById("eventos").style.visibility="hidden";
		
  }
  function cargado() {
	    document.getElementById("cargajson").innerHTML=="";
		document.getElementById("cargajson").style.visibility="hidden";
		document.getElementById("listaorigenes").style.visibility="visible";
		document.getElementById("listaprofesiones").style.visibility="visible";
		document.getElementById("incrementohabilidades").style.visibility="visible";
		document.getElementById("btncalcular").style.visibility="visible";
		document.getElementById("btnrecargar").style.visibility="visible";
  }
  
  function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;
  }
  
  function pintaOrigen(nborig) {
	  var norig;
	  for (norig = 0; norig<origenes.origenes.length; norig++) {
		  if ( origenes.origenes[norig].nombre == nborig ) {
			  break;
		  }
	  }
	  
	  if (norig < origenes.origenes.length ) {
		document.getElementById("origen").innerHTML = "<center><strong>Origen</strong><br/>" + origenes.origenes[norig].nombre + " - " + origenes.origenes[norig].cultura  + "</center>";
		document.getElementById("origen").style.visibility="visible";
		document.getElementById("descorigen").innerHTML = "<hr/><strong>" + origenes.origenes[norig].descripcion + "</strong><br/>";
		document.getElementById("descorigen").style.visibility="visible";
	  }
	  else {
	    document.getElementById("origen").innerHTML = "";
	    document.getElementById("origen").style.visibility="hidden";
	    document.getElementById("descorigen").innerHTML = "";
	    document.getElementById("descorigen").style.visibility="hidden";
	    
	  }
	  return norig;
  }
  
  function pintaProfesion(nbprof) {
	  var nprof;
	  for (nprof = 0; nprof<origenes.profesiones.length; nprof++) {
		  if ( origenes.profesiones[nprof].nombre == nbprof ) {
			  break;
		  }
	  }
	  
	  if (nprof < origenes.profesiones.length ) {
	    if ( origenes.profesiones[nprof].hasOwnProperty("nota") == true ) {
    		document.getElementById("descorigen").innerHTML = document.getElementById("descorigen").innerHTML + "<strong>Profesión " + origenes.profesiones[nprof].nombre + "</strong>: " +  origenes.profesiones[nprof].nota;
	    }
	  }
	  document.getElementById("descorigen").innerHTML = document.getElementById("descorigen").innerHTML + "<hr/>"
	  return nprof;
  }
  
  function calcular() {

	  var nborig = nombreorigen;
	  if ( nborig == "random" ) {
			nborig = origenes.origenes[Math.floor(Math.random() * origenes.origenes.length)].nombre;
	  }
	  var nbprof = nombreprofesion;
	  if ( nbprof == "random" ) {
			nbprof = origenes.profesiones[Math.floor(Math.random() * origenes.profesiones.length)].nombre;
	  }
	  
	  /*document.getElementById("origen").innerHTML = "<center><strong>Origen</strong><br/>" + nborig + "</center>";
	  document.getElementById("origen").style.visibility="visible";*/
	  
	  document.getElementById("profesion").innerHTML = "<center><strong>Profesión</strong></br>" + nbprof + "</center>";
	  document.getElementById("profesion").style.visibility="visible";
	  
	  var norig = pintaOrigen(nborig);
	  /*var norig;
	  for (norig = 0; norig<origenes.origenes.length; norig++) {
		  if ( origenes.origenes[norig].nombre == nborig ) {
			  break;
		  }
	  }
	  document.getElementById("origen").innerHTML = "<center><strong>Origen</strong><br/>" + origenes.origenes[norig].nombre + " - " + origenes.origenes[norig].cultura  + "</center>";
	  */
	  var nprof;
	  for (nprof = 0; nprof<origenes.profesiones.length; nprof++) {
		  if ( origenes.profesiones[nprof].nombre == nbprof ) {
			  break;
		  }
	  }
	  
	  pintaProfesion(nbprof);
	  
	  
	  var i;
	  var shabilidades="<strong>Habilidades básicas Origen</strong>"; //<table class='w3-table  w3-striped  w3-border'>";
	  shabilidades+="<div class='w3-responsive'>  <table class='w3-table-all'>"
	  for (i=0;i<origenes.origenes[norig].habilidades.basicas.length; i++) {
		  shabilidades += "<tr><td>" + origenes.origenes[norig].habilidades.basicas[i] + "</td></tr>";
	  }
	  
	  /*if ( origenes.profesiones[nprof].hasOwnProperty('habilidades') == true && origenes.profesiones[nprof].habilidades.hasOwnProperty('basicas') == true ) {
		  for (i=0;i<origenes.profesiones[nprof].habilidades.basicas.length; i++) {
			  shabilidades += "<tr><td>" + origenes.profesiones[nprof].habilidades.basicas[i] + "</td></tr>";
		  }
		  
		  for (i=0;i<origenes.profesiones[nprof].habilidades.basicas.length; i++) {
			  var j=0;
			  for (j=0;j<origenes.origenes[norig].habilidades.basicas.length; j++) {
				  if (origenes.origenes[norig].habilidades.basicas[j] == origenes.profesiones[nprof].habilidades.basicas[i])
					break;
			  }
			  if (j>=origenes.origenes[norig].habilidades.basicas.length)
				shabilidades += "<tr><td>" + origenes.profesiones[nprof].habilidades.basicas[i] + "</td></tr>";
		  }
	  }*/
	  	  
	  shabilidades+="</table>";
	  shabilidades+="</div>";
	  
	  if ( origenes.profesiones[nprof].hasOwnProperty('habilidades') == true && origenes.profesiones[nprof].habilidades.hasOwnProperty('basicas') == true ) {
	      shabilidades+="<strong>Habilidades básicas Profesión</strong>"; //<table class='w3-table  w3-striped  w3-border'>";
	      shabilidades+="<div class='w3-responsive'>  <table class='w3-table-all'>"
		  for (i=0;i<origenes.profesiones[nprof].habilidades.basicas.length; i++) {
			  shabilidades += "<tr><td>" + origenes.profesiones[nprof].habilidades.basicas[i] + "</td></tr>";
		  }
	      shabilidades+="</table>";
	      shabilidades+="</div>";
	  }
	  	  	  
	  
	  
	  document.getElementById("habilidades").innerHTML = shabilidades;
	  document.getElementById("habilidades").style.visibility="visible";
	  
	  var nhabprofesionales = 3;
	  if ( origenes.origenes[norig].hasOwnProperty('nhabprofesionales') == true ) {
	    nhabprofesionales = origenes.origenes[norig].nhabprofesionales;
	  }
	  shabilidades="<strong>Habilidades profesionales Origen (" + nhabprofesionales + ")</strong>"; //<table class='w3-table  w3-striped  w3-border'>";
	  shabilidades+="<div class='w3-responsive'>  <table class='w3-table-all'>"
	  
	  for (i=0;i<origenes.origenes[norig].habilidades.profesionales.length; i++) {
		  shabilidades += "<tr><td>" + origenes.origenes[norig].habilidades.profesionales[i] + "</td></tr>";
	  }
	  
	  shabilidades+="</table>";
	      shabilidades+="</div>";
	  
	  if ( origenes.profesiones[nprof].hasOwnProperty('habilidades') == true && origenes.profesiones[nprof].habilidades.hasOwnProperty('profesionales') == true ) {
	      shabilidades+="<strong>Habilidades profesionales Profesión</strong>"; //<table class='w3-table  w3-striped  w3-border'>";
	      shabilidades+="<div class='w3-responsive'>  <table class='w3-table-all'>"
		  for (i=0;i<origenes.profesiones[nprof].habilidades.profesionales.length; i++) {
			  /*var j=0;
			  for (j=0;j<origenes.origenes[norig].habilidades.profesionales.length; j++) {
				  if (origenes.origenes[norig].habilidades.profesionales[j] == origenes.profesiones[nprof].habilidades.profesionales[i])
					break;
			  }
			  if (j>=origenes.origenes[norig].habilidades.profesionales.length)*/
				shabilidades += "<tr><td>" + origenes.profesiones[nprof].habilidades.profesionales[i] + "</td></tr>";
		  }
	      shabilidades+="</table>";
	      shabilidades+="</div>";
	  }
	  
	  
	  document.getElementById("habilidadesprofesionales").innerHTML = shabilidades;
	  document.getElementById("habilidadesprofesionales").style.visibility="visible";
	  
	  
	  var numero = 6;
	  if ( incrementohabilidades == "10%" ) {
		  numero = 9;
	  }
	  
	  ciennumeros = shuffle(ciennumeros);
	  
	  var eventos = "<strong>Eventos vitales</strong>"; //<table class='w3-table  w3-striped  w3-border'>";
	  eventos+="<div class='w3-responsive'>  <table class='w3-table-all'>"
	  for (i=0; i< numero; i++ ){
		  if ( ciennumeros[i]<=50 ) {
			  var j;
			  var n=0;
			  for (j=0; j<origenes.origenes[norig].eventos.length; j++) {
				  n+=origenes.origenes[norig].eventos[j].peso;
				  if ( n >= ciennumeros[i] ) {
					  eventos+="<tr><td>" + origenes.origenes[norig].eventos[j].evento + "</td></tr>";
					  break;
				  }
			  }
		  }
		  else {
			  var j;
			  var n=0;
			  for (j=0; j<origenes.profesiones[nprof].eventos.length; j++) {
				  n+=origenes.profesiones[nprof].eventos[j].peso;
				  if ( n >= ciennumeros[i]-50 ) {
					  eventos+="<tr><td>" + origenes.profesiones[nprof].eventos[j].evento + "</td></tr>";
					  break;
				  }
			  }
		  }
	  }
	  eventos+="</table>";
	  eventos+="</div>";
	  
	  document.getElementById("eventos").innerHTML = eventos;
	  document.getElementById("eventos").style.visibility="visible";
	  
	  
	  
  }
