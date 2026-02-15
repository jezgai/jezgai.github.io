class Comun {

	static shuffle(array) {
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

	static random(numero, desde) {
		return Math.floor(Math.random() * numero) + desde;
	}
		
	
	static desplegableClasesArray(aClases, nbFuncSel) {
		
		var sclases=" <strong>Clase:</strong> <select class='w3-select'  name='clase' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iclase=0;
		for (iclase=0; iclase< aClases.length; iclase++) {
			sclases += "<option>" + aClases[iclase] + "</option>";
		}
		sclases += "</select>";
		return sclases;
	}
	
	static desplegableClases(aClases, nbFuncSel) {
		var sclases=" <strong>Clase:</strong> <select class='w3-select'  name='clase' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iclase=0;
		for (iclase=0; iclase< aClases.clases.length; iclase++) {
			sclases += "<option>" + aClases.clases[iclase].nombre + "</option>";
		}
		sclases += "</select>";
		return sclases;
	}
	
	static botonGenera(nbFuncGenera) {
		return "<button class='w3-button w3-block w3-teal' onclick='" + nbFuncGenera + "()'>Genera</button>";
	}
	
	
	static construyeBotonAbajo(indice, nbfuncion)
	{
		return "</button><button class=\"w3-button w3-circle w3-teal w3-padding-small w3-tiny\" onclick=\"" + nbfuncion + "('" + indice + "')\">&#9660;</button>";
	}
	
	
	
	
	static tablaTalentos() {
		var itals = 0;
		var stals = "<table class='w3-table  w3-striped w3-border'><tr><th>Talentos</th></tr>";
		for (itals = 0; itals < pj.talentos.length; itals++) {
			stals += "<tr><td>" + pj.talentos[itals] + " </td></tr>";
		}
		stals += "</table>";
		return stals;
	}
	
	static cargatablas(nombrefichero, sistema) {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "json/" + nombrefichero, true);
		rawFile.onreadystatechange = function() {
			if (rawFile.readyState === 4) {
				var allText = rawFile.responseText;
				var tablas = JSON.parse(allText);
				sistema.init(tablas);
			}
		}
		rawFile.send();
	}
}

Array.prototype.clone = function() {
	return this.slice(0);
};
