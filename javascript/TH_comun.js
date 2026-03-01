
function muestraConjuro(nombre) {
    var hechizo = objsistema.hechizos.Hechizos[nombre];
    var texto = "<h2>Conjuro: " + nombre + "</h2>";
    var i=0;
    var aNiveles = Object.keys(hechizo.Nivel);
    var niveles = "";
    for (i=0;i<aNiveles.length;i++) {
        niveles += aNiveles[i] + " (" + hechizo.Nivel[aNiveles[i]] + "). ";
    }
    texto += "<ul><li><b>Nivel</b>: " + niveles + "</li>";
    texto += "<li><b>Alcance</b>: " + hechizo.Alcance + "</li>";
    texto += "<li><b>Duración</b>: " + hechizo.Duración + "</li>";
    texto += "<li><b>Descripción</b>: "+ hechizo.Descripción + "</li>";
    texto += "<li><b>Categoría</b>: " + hechizo.Categoria + "</li>";
    texto += "<li><b>Resistencia</b>: " + hechizo.Resistencia + "</li></ul>";
    innerHtml = texto;
    document.getElementById("detalleConjuro").innerHTML = texto;
    document.getElementById("Conjuro").style.display = "block";
}

function ocultaconjuro() {
    document.getElementById("Conjuro").style.display = "none";
}

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
