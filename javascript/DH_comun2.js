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
		var n1 = Comun.random(6,1);
		var n2 = Comun.random(6,1);
		var n3 = Comun.random(6,1);
		if ( n1 < n2 && n1 < n3 )
		{
			if ( n2 < n3 )
				return 10 + n2;
			else
				return 10 + n3;
		}
		else if (n1 < n2 ) // n1 es el medio porque es mayor o igual que n3
			return 10 + n1;
		else if (n1 < n3 ) // n1 es el medio porque es mayor o igual que n2
			return 10 + n1;
		else if (n2 < n3 ) // n3 es el medio porque n3 ya era menor o igual que n1
			return 10 + n3;
		else
			return 10 + n2;
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
		
	static desplegableEspecies(aEspecies, nbFuncSel) {
		
		var sespecies=" <strong>Especie:</strong> <select class='w3-select'  name='especie' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iespecie=0;
		for (iespecie=0; iespecie< aEspecies.especies.length; iespecie++) {
			sespecies += "<option>" + aEspecies.especies[iespecie].nombre + "</option>";
		}
		sespecies += "</select>";
		return sespecies;
	}
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};
