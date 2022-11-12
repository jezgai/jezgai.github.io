class YS_Comun {

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

}

Array.prototype.clone = function() {
	return this.slice(0);
};



class YS_atributo {
	constructor(nombre, valor, nombrepdf) {
		this.nombre = nombre;
		this.valor = valor;
		this.nombrepdf = nombrepdf;
	}
	
	static atributos() {
		var valores = YS_Comun.shuffle([ 0, 1, 2, 4, 6]);
		
		var atribs = [];
		atribs.push(new YS_atributo("Carisma", valores[0], "carisma"));
		atribs.push(new YS_atributo("Destreza", valores[1], "destreza"));
		atribs.push(new YS_atributo("Fuerza", valores[2], "fuerza"));
		atribs.push(new YS_atributo("Inteligencia", valores[3], "inteligencia"));
		atribs.push(new YS_atributo("Percepción", valores[4], "percepcion"));
		return atribs;
	}
	
}

class YS_habilidad {
	constructor(nombre, valor, nombrepdf, atributo) {
		this.nombre = nombre;
		this.valor = valor;
		this.nombrepdf = nombrepdf;
		this.atributo = atributo;
	}
	
	static habilidades() {
		var valores = YS_Comun.shuffle([ 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]);
		var habs = [];
		habs.push(new YS_habilidad("Atletismo", valores[0], "atletismo", "DES"));
		habs.push(new YS_habilidad("Auxilio", valores[1], "auxilio", "INT"));
		habs.push(new YS_habilidad("Conducir", valores[2], "conducir", "DES"));
		habs.push(new YS_habilidad("Conversación", valores[3], "conversacion", "CAR"));
		habs.push(new YS_habilidad("Cultura", valores[4], "cultura", "INT"));
		habs.push(new YS_habilidad("Entorno", valores[5], "entorno", "PER"));
		habs.push(new YS_habilidad("Fuerza Bruta", valores[6], "fuerzabruta", "FUE"));
		habs.push(new YS_habilidad("Idioma extranjero 1", valores[7], "idiomaext1", "INT"));
		habs.push(new YS_habilidad("Idioma extranjero 2", valores[8], "idiomaext2", "INT"));
		habs.push(new YS_habilidad("Información", valores[9], "informacion", "INT"));
		habs.push(new YS_habilidad("Intimidación", valores[10], "intimidacion", "CAR"));
		habs.push(new YS_habilidad("Lucha", valores[11], "lucha", "DES"));
		habs.push(new YS_habilidad("Mecánica", valores[12], "mecanica", "INT"));
		habs.push(new YS_habilidad("Memoria", valores[13], "memoria", "INT"));
		habs.push(new YS_habilidad("Observación", valores[14], "observacion", "PER"));
		habs.push(new YS_habilidad("Ocultación", valores[15], "ocultacion", "DES"));
		habs.push(new YS_habilidad("Oído", valores[16], "oido", "PER"));
		habs.push(new YS_habilidad("Psicología", valores[17], "psicologia", "PER"));
		habs.push(new YS_habilidad("Puntería", valores[18], "punteria", "DES"));
		habs.push(new YS_habilidad("Rastreo", valores[19], "rastreo", "DES"));
		habs.push(new YS_habilidad("Seducción", valores[20], "seduccion", "CAR"));
		habs.push(new YS_habilidad("Sigilo", valores[21], "sigilo", "DES"));
		habs.push(new YS_habilidad("Simulación", valores[22], "simulacion", "CAR"));
		habs.push(new YS_habilidad("Supervivencia", valores[23], "supervivencia", "PER"));
		return habs;
	}
}


class YS_PJ {
	
	constructor() {
		this.nombre = "";
	}
	
	plantillaPDF() {
		return "pdf/Ysystem.pdf";
	}
	
	construyeBotonesAtributo(idesde) {
		var isiguiente = (idesde+1)%this.atributos.length;
		var ianterior = idesde-1;
		if ( ianterior<0) 
			ianterior = this.atributos.length - 1;
		return "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"transfiereAtributos(" + idesde + "," + isiguiente + ")\">&#9660;</button> ";
	}
	
	construyeBotonesHabilidad(idesde) {
		var isiguiente = (idesde+1)%this.habilidades.length;
		var ianterior = idesde-1;
		if ( ianterior<0) 
			ianterior = this.habilidades.length - 1;
		return "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"transfiereHabilidades(" + idesde + "," + isiguiente + ")\">&#9660;</button> ";
	}
	
	transfiereHabilidades(idesde, ihasta) {
		var diferencia = this.habilidades[idesde].valor - this.habilidades[ihasta].valor;
		if ( diferencia != 0 ) {
			if ( idesde == 0 ) {
				this.agilidad -= (3*diferencia);
			}
			else if (ihasta == 0) {
				this.agilidad += (3*diferencia);
			}
			
			var valordesde = this.habilidades[idesde].valor;
			var valorhasta = this.habilidades[ihasta].valor;
			this.habilidades[idesde].valor = valorhasta;
			this.habilidades[ihasta].valor = valordesde;
		}
	}
	
	transfiereAtributos(idesde, ihasta) {
		
		var diferencia = this.atributos[idesde].valor - this.atributos[ihasta].valor;
		if ( diferencia != 0 ) {
			if ( idesde == 0 ) { // de 0 a 1
				this.estabilidad -= diferencia;
				this.aplomo -= diferencia;
				
				this.agilidad += diferencia;
				this.iniciativa += diferencia;
				
			}
			else if ( idesde == 1 ) { // de 1 a 2
				this.agilidad -= diferencia;
				this.iniciativa -= diferencia;
				
				this.proezas_total = 3 + Math.trunc((this.atributos[2].valor + diferencia + this.atributos[3].valor)/2);
				this.proezas_actual = this.proezas_total;
				
				this.salud += (2 * diferencia);
				this.resfisica -= diferencia;
			} 
			else if ( idesde == 2 ) { // de 2 a 3
				this.estabilidad += diferencia;
				this.aplomo += diferencia;
				
				this.salud -= (2 * diferencia);
				this.resfisica += diferencia;
				
				this.iniciativa += diferencia;
			}
			else if ( idesde == 3 ) { // de 3 a 4
				this.aplomo -= diferencia;
				this.estabilidad -= diferencia;
			}
			else if ( idesde == 4 ) {  // de 4 a 0
				this.perspicacia -= diferencia;
				this.aplomo += diferencia;
				this.estabilidad += diferencia;
			}
			
			var valordesde = this.atributos[idesde].valor;
			var valorhasta = this.atributos[ihasta].valor;
			this.atributos[idesde].valor = valorhasta;
			this.atributos[ihasta].valor = valordesde;
		}		
		
	}
	
	tablaAtributos() {
		
		var indice = 0;
		
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Atributo</strong></th><th><strong>Valor</strong></th><th></th></tr>";
		for (indice=0; indice<this.atributos.length; indice++) {
			stabla += "<tr><td>" + this.atributos[indice].nombre + "</td><td>" + this.atributos[indice].valor + "</td><td>" + this.construyeBotonesAtributo(indice) + "</td></tr>";
		}
		stabla += "</tabla>";
		return stabla;
	}
	
	
	tablaRasgos() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Rasgo derivado</strong></th><th><strong>Valor</strong></th></tr>";
		stabla += "<tr><td>Agilidad</td><td>" + this.agilidad + "</td></tr>";
		stabla += "<tr><td>Aplomo</td><td>" + this.aplomo + "</td></tr>";
		stabla += "<tr><td>Perspicacia</td><td>" + this.perspicacia + "</td></tr>";
		stabla += "<tr><td>Salud</td><td>" + this.salud + "</td></tr>";
		stabla += "<tr><td>Proezas</td><td>" + this.proezas_total + "</td></tr>";
		stabla += "<tr><td>Resistencia física</td><td>" + this.resfisica + "</td></tr>";
		stabla += "<tr><td>Estabilidad</td><td>" + this.estabilidad + "</td></tr>";
		stabla += "<tr><td>Resistencia mental</td><td>" + this.resmental + "</td></tr>";
		stabla += "<tr><td>Iniciativa</td><td>" + this.iniciativa + "</td></tr>";
		
		stabla += "</tabla>";
		return stabla;
	}
	
	tablaHabilidades() {
		
		var indice = 0;
		
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Atributo</strong></th><th><strong>Valor</strong></th><th></th></tr>";
		for (indice=0; indice<this.habilidades.length; indice++) {
			stabla += "<tr><td>" + this.habilidades[indice].nombre +  " (" + this.habilidades[indice].atributo + ")</td><td>" + this.habilidades[indice].valor + "</td><td>" + this.construyeBotonesHabilidad(indice) + "</td></tr>";
		}
		stabla += "</tabla>";
		return stabla;
	}
	
	
	genera() {
		this.atributos = YS_atributo.atributos();
		this.habilidades = YS_habilidad.habilidades();
		this.agilidad = this.atributos[1].valor + (this.habilidades[0].valor * 3);
		this.aplomo = this.atributos[0].valor + this.atributos[3].valor + 5;
		this.perspicacia = this.atributos[3].valor + this.atributos[4].valor + 5;
		this.proezas_total = 3 + Math.trunc((this.atributos[2].valor + this.atributos[3].valor)/2);
		this.proezas_actual = this.proezas_total;
		this.salud = 10 + (2 * this.atributos[2].valor) + YS_Comun.random(6,1);
		this.resfisica = 12 - this.atributos[2].valor;
		this.estabilidad = 5 + this.aplomo + YS_Comun.random(6,1);
		this.resmental = 12 - this.atributos[0].valor;
		this.iniciativa = this.atributos[1].valor + this.atributos[3].valor;
	}

	rellenaPDF() {
			  var fields = {
					'nombrepj' : [ "" ],
					'aplomo' : [ this.aplomo ],
					'agilidad' : [ this.agilidad ],
					'perspicacia' : [ this.perspicacia ],
					'resfisica' : [ this.resfisica ],
					'resmental' : [ this.resmental ],
					'proezas_total' : [ this.proezas_total ],
					'proezas_actual' : [ this.proezas_actual ],
					'iniciativa' : [ this.iniciativa ],
				};
				
				fields[ 'salud' + this.salud ] = [ true ];
				fields[ 'estabilidad' + this.estabilidad ] = [ true ];
				
				var indice;
				
				for (indice = 0; indice< this.atributos.length; indice++) {
					fields[ this.atributos[indice].nombrepdf ] = [ this.atributos[indice].valor ];
				}
				
				
				for (indice = 0; indice< this.habilidades.length; indice++) {
					fields[ this.habilidades[indice].nombrepdf + (this.habilidades[indice].valor - 1) ] = [ true ];
				}
				
				return fields;
	}	
}
