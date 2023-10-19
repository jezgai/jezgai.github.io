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
	
	static dados(numerodados, tipodado, modificador, valorinicialtirada) {
		var resultado = modificador;
		var indice=0;
		for (indice = 0; indice<numerodados; indice++) {
			resultado += Comun.random(tipodado, valorinicialtirada);
		}
		return resultado;
	}

}

Array.prototype.clone = function() {
	return this.slice(0);
};
