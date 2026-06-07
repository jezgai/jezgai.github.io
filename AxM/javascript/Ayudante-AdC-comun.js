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
