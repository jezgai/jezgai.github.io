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
	
	static desplegableRazas(aRazas, nbFuncSel) {
		
		var srazas="<strong>Raza:</strong> <select class='w3-select'  name='raza' onChange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iraza=0;
		for (iraza=0; iraza< aRazas.razas.length; iraza++) {
			srazas += "<option>" + aRazas.razas[iraza].nombre + "</option>";
		}
		srazas += "</select>";
		return srazas;
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
	
	static desplegableNivel(nivelMax, nbFuncSel, nbFuncGenera) {
		var snivel=" <strong>Nivel:</strong> <select class='w3-select'  name='nivel' onchange='" + nbFuncSel + "(this)'><option>1</option>";
		var inivel=0;
		for (inivel=2; inivel<= nivelMax; inivel++) {
			snivel += "<option>" + inivel + "</option>";
		}
		snivel += "</select> <button class='w3-button w3-block w3-teal' onclick='" + nbFuncGenera + "()'>Genera</button>";
		return snivel;
	}
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};