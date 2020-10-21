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
		snivel += "</select>"; // <button class='w3-button w3-block w3-teal' onclick='" + nbFuncGenera + "()'>Genera</button>";
		return snivel;
	}
	
	static botonGenera(nbFuncGenera) {
		return "<button class='w3-button w3-block w3-teal' onclick='" + nbFuncGenera + "()'>Genera</button>";
	}
	
	
	static construyeBotonAbajo(indice, nbfuncion)
	{
		return "</button><button class=\"w3-button w3-circle w3-teal w3-padding-small w3-tiny\" onclick=\"" + nbfuncion + "('" + indice + "')\">&#9660;</button>";
	}
	
	
	static tablaAtributos() {
		var iatrb = 0;
		var satrs = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Valor (mod)</th></tr>";
		for (iatrb = 0; iatrb < pj.atributos.length; iatrb++) {
			satrs += "<tr><td>" + atributos.atributos[iatrb].nbatr + " (" + atributos.atributos[iatrb].nbmod + ")</td><td align='center'>" + pj.atributos[iatrb] + " (" + pj.modifAtributo(pj.atributos[iatrb]) + ")</td><td>" + Comun.construyeBotonAbajo(iatrb, "abajoatr") + "</td></tr>";
		}
		satrs += "</table>";
		return satrs;
	}
	
	static tablaHabilidades() {
		var ihabs = 0;
		var shabs = "<table class='w3-table  w3-striped w3-border'><tr><th>Habilidad</th><th>Valor</th></tr>";
		for (ihabs = 0; ihabs < pj.habilidades.length; ihabs++) {
			shabs += "<tr><td>" + habilidades.habilidades[ihabs] + " </td><td align='center'>" + pj.habilidades[ihabs] + " </td><td>" + Comun.construyeBotonAbajo(ihabs, "abajohab") + "</td></tr>";
		}
		shabs += "</table>";
		return shabs;
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
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};
