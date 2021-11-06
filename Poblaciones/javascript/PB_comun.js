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
	
	
	static desplegablePoblaciones(aPoblaciones, nbFuncSel) {
		
		var spoblaciones=" <strong>Poblacion:</strong> <select class='w3-select'  name='poblacion' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var ipoblacion=0;
		for (ipoblacion=0; ipoblacion< aPoblaciones._poblaciones.length; ipoblacion++) {
			spoblaciones += "<option>" + aPoblaciones._poblaciones[ipoblacion].tipo + "</option>";
		}
		spoblaciones += "</select>";
		return spoblaciones;
	}
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};
