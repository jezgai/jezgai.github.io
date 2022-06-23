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
	
	static dadosMultiples(numero, caras, inicial) {
		var idados=0;
		var resultado = 0;
		for (idados=0; idados<numero; idados++) {
			resultado += Comun.random(caras, inicial);
		}
		return resultado;
	}
	
	static construyeBotonAbajo(indice, nbfuncion)
	{
		return "</button><button class=\"w3-button w3-circle w3-teal w3-padding-small w3-tiny\" onclick=\"" + nbfuncion + "('" + indice + "')\">&#9660;</button>";
	}
}

Array.prototype.clone = function() {
	return this.slice(0);
};
