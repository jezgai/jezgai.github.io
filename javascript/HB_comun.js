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
		var numero = Comun.random(100,1);
		if ( numero <= 25 ) {
			numero += 25;
		}
		else if ( numero <= 50 ) {
			numero += 15;
		}
		else if (numero <= 70 ) {
			numero += 10;
		}
		else if (numero <= 80 ) {
			numero += 5;
		}
		return numero;
	}
	
	static suerte() {
		var numero = Comun.random(100,1);
		numero/=2;
		return Math.trunc(numero);
	}
	
	static habilidadprimaria() {
		var numero = Comun.random(100,1);
		if ( numero <= 25 ) {
			numero+=45; 
		}		
		else if ( numero <= 50 ) {
			numero += 30;
		}
		else if (numero <= 70 ) {
			numero += 15;
		}
		return numero;
	}
	
	static habilidadsecundaria() {
		var numero = Comun.random(100,1);
		if ( numero <= 25 ) {
			numero+=20; 
		}		
		else if ( numero <= 50 ) {
			numero += 10;
		}
		else if (numero > 70 && numero <= 90 ) {
			numero -= 10;
		}
		else if (numero > 90) {
			numero -= 20;
		}
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
	
	
	static habilidadesPJ(lhabilidades, numerohab) {
		var sHabilidades = lhabilidades.replaceAll(" y ", ", ").replaceAll(", ", ",");
		var aHabilidades = sHabilidades.split(",");
		var habilidadespj = new Habilidades();
		habilidadespj._habilidades = sHabilidades.split(",");
		habilidadespj._pdfhabilidades = [];
		var ihab=0;
		var nhab = numerohab;
		if ( habilidadespj._habilidades.length < numerohab )
			nhab = habilidadespj._habilidades.length;
		
		for ( ihab = 0; ihab<nhab; ihab++) {
			habilidadespj._pdfhabilidades.push(listaHabilidades.campopdf(habilidadespj._habilidades[ihab]));
		}
		return habilidadespj;
	}
		
	/*static clone(ar) {
		return ar.slice(0);
	}*/

}

Array.prototype.clone = function() {
	return this.slice(0);
};
