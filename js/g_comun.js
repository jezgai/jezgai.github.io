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

	static tirada(ndados, numero, desde) {
		var resultado = 0;
		var itir = 0;
		for (itir = 0; itir < ndados; itir++) {
			resultado += Comun.random(numero, desde);
		}
		return resultado
	}
	
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};

Array.prototype.shuffle = function() {
	return Comun.shuffle(this);
}
