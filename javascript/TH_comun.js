
class Comun {
    
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
