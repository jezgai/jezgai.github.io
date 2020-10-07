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
	
	static atributo() {
		var numero = Comun.random(6,1) + Comun.random(6,1) + Comun.random(6,1);
		return numero;
	}
	
	static atributo6() {
		var numero = Comun.random(6,1) + Comun.random(6,1) + 6;
		return numero;
	}
	
	static atributo3() {
		var numero = Comun.atributo() + 3;
		return numero;
	}
	
	static desplegableProfesiones(aProfesiones, nbFuncSel) {
		
		var sprofesiones=" <strong>Profesion:</strong> <select class='w3-select'  name='profesion' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iprofesion=0;
		for (iprofesion=0; iprofesion< aProfesiones.profesiones.length; iprofesion++) {
			sprofesiones += "<option>" + aProfesiones.profesiones[iprofesion].nombre + "</option>";
		}
		sprofesiones += "</select>";
		return sprofesiones;
	}
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};
