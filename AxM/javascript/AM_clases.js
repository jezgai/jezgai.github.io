class SistemaMonetario {
	constructor(sistemamonetario) {
		if ( sistemamonetario == null ) {
			this.monedabaseoro = "monedas de oro";
			this.conversionbase = 1;
			this.monedas = [ "monedas de oro", "monedas de plata", "monedas de cobre" ];
		}
		else {
			this.monedabaseoro = sistemamonetario.monedabaseoro;
			this.conversionbase = sistemamonetario.conversionbase;
			this.monedas = sistemamonetario.monedas;
		}
	}
	moneda() {
		return this.monedabaseoro;
	}
}

class Clase {
	constructor(clase) {
		this.nombre = clase.nombre;
		this.requisitos = clase.requisitos;
		this.reqprimario = clase.reqprimario;
		this.dg = clase.dg;
		this.caracteristicas = clase.caracteristicas;
		this.ataque = clase.ataque;
		this.dano = clase.dano;
		this.tipobonifdano = clase.tipobonifdano;
		this.barridos = clase.barridos;
		this.tsalvacion = clase.tsalvacion;
		this.pericias = clase.pericias;
		this.conjuros = clase.conjuros;
		this.ptospericia = [];
		this.movimiento = clase.movimiento;
		this.experiencia = clase.experiencia;
		this.idiomas = clase.idiomas;
		this.boniftipoarmas = clase.boniftipoarmas;
		this.periciasespeciales = clase.periciasespeciales;
		this.ataquead = clase.ataquead;
		this.ca = clase.ca;
		this.modifadicional = clase.modifadicional;
		this.armas = clase.armas;
		this.plantilla = clase.plantilla;
		this.sistemamonetario = new SistemaMonetario(clase.sistemamonetario);
	}
	
	monedabase() {
		return this.sistemamonetario.moneda();
	}
	
	buscapericia(nombrepericia, tablapericias) {
		var indice=0;
		for (indice=0; indice<tablapericias.length; indice++) {
			if ( tablapericias[indice].pericia == nombrepericia )
				return indice;
		}
		return -1;
	}
	
	
	buscapericianombre(nombrepericia, tablapericias) {
		var indice=0;
		for (indice=0; indice<tablapericias.length; indice++) {
			if ( tablapericias[indice].nombre == nombrepericia )
				return indice;
		}
		return -1;
	}
	
	ptosbasepericia(nombrepericia) {
		var indice=this.buscapericianombre(nombrepericia, this.pericias.pericias);
		if (indice != -1)
			return this.pericias.pericias[indice].puntos;
		indice=this.buscapericianombre(nombrepericia, this.periciasespeciales.pericias);
		if (indice != -1)
			return this.periciasespeciales.pericias[indice].puntos;
		return 0;
	}
	
	pv() {
		return Comun.random(this.dg, 1);
	}
	
	magia() {
		var indice=0;
		var conjurosaux = [];
		if ( this.conjuros.fijos.length > 0 ) {
			for (indice = 0; indice < this.conjuros.fijos.length; indice++) {
				conjurosaux.push(this.conjuros.fijos[indice]);
			}
		}
		if ( this.conjuros.numeroN1 > 0 && this.conjuros.conjurosN1.length >= this.conjuros.numeroN1 ) {
			
			var conjurosN1 = Comun.shuffle(this.conjuros.conjurosN1.clone());
			for (indice = 0; indice < conjurosN1.length && indice < this.conjuros.numeroN1 ; indice++) {
				conjurosaux.push(conjurosN1[indice]);
			}
		}
		else if ( this.conjuros.numeroN1 == -1 ) {
			for (indice = 0; indice < this.conjuros.conjurosN1.length ; indice++) {
				conjurosaux.push(this.conjuros.conjurosN1[indice]);
			}
		}
		if ( this.conjuros.numeroN2 > 0 && this.conjuros.conjurosN2.length >= this.conjuros.numeroN2 ) {
			
			var conjurosN2 = Comun.shuffle(this.conjuros.conjurosN2.clone());
			for (indice = 0; indice < conjurosN2.length && indice < this.conjuros.numeroN2 ; indice++) {
				conjurosaux.push(conjurosN2[indice]);
			}
		}
		else if ( this.conjuros.numeroN2 == -1 ) {
			for (indice = 0; indice < this.conjuros.conjurosN2.length ; indice++) {
				conjurosaux.push(this.conjuros.conjurosN2[indice]);
			}
		}
		return conjurosaux;
	}
	
	buscaarmasOLD(numtipoarmas, arma, armasaux) {
		var indice=0;
		var armaspj = []
		for (indice=0; indice < armasaux[arma].length; indice++) {
			var objarma = listaarmas.arma(armasaux[arma][indice]);
			if ( objarma != null ) {
				if ( (objarma.tipo == "CaC" && objarma.danoCaC <= numtipoarmas) || (objarma.tipo == "AD" && objarma.danoAD <= numtipoarmas)) {
					armaspj.push(objarma);
				}
			}
		}
		return armaspj;
	}
	
	buscaarmas(bonifdano, arma, armasaux) {
		var indice=0;
		var armaspj = []
		for (indice=0; indice < armasaux[arma].length; indice++) {
			var objarma = listaarmas.arma(armasaux[arma][indice]);
			if ( objarma != null ) {
				if ( (objarma.tipo == "CaC" && objarma.tipodanoCaC <= bonifdano) || (objarma.tipo == "AD" && objarma.tipodanoAD <= bonifdano)) {
					armaspj.push(objarma);
				}
			}
		}
		return armaspj;
	}
	
	sorteaarmas(tipoarmas, bonifdano) {
		var armasaux = Comun.shuffle(this.armas.clone());
		var arma = 0;
		var indice = 0;
		var numtipoarmas = parseInt(tipoarmas.substring(1))
		var armaspj = [];
		for (arma=0; arma < armasaux.length; arma++) {
			armaspj = this.buscaarmas(bonifdano, arma, armasaux);
			if ( armaspj.length > 0 )
				break;
		}
		return armaspj;
	}
	
	calculapericias(atributospj) {
		this.ptospericia = pericias.basicas(atributospj, this.modifadicional);
		var indice=0;
		for (indice=0;indice<this.pericias.pericias.length; indice++ ) {
			var periciaadicional=pericias.buscapericia(this.pericias.pericias[indice].nombre);
			if ( periciaadicional != null && periciaadicional.tipo == "Avanzada" ) {
				periciaadicional.calculapuntos(atributospj, this.modifadicional);
				this.ptospericia.push(periciaadicional);
			}
		}
		
		if ( this.pericias.puntos > 0 ) {
			
			var puntos = [];
			for (indice=0; indice< this.pericias.puntos; indice++) {
				puntos.push(1);
			}
			for (;indice<this.ptospericia.length; indice++) {
				puntos.push(0);
			}
			
			puntos = Comun.shuffle(puntos);
			
			for (indice = 0; indice < this.ptospericia.length; indice++) {
				this.ptospericia[indice].puntos = puntos[indice];
			}
		}
		
		if ( this.periciasespeciales.pericias.length > 0 ) {
			for (indice=0;indice<this.periciasespeciales.pericias;indice++) {
				var indice2=0;
				for (indice2=0; indice2<this.ptospericia.length;indice2++) {
					if ( this.periciasespeciales[indice].nombre == this.ptospericia[indice2].pericia ) {
						this.ptospericia[indice2].especial = true;
						break;
					}
				}
				if ( indice2 == this.ptospericia.length ) {
					var periciaadicional=pericias.buscapericia(this.pericias.pericias[indice].nombre);
					periciaadicional.especial = true;
					periciaadicional.calculapuntos(atributospj, this.modifadicional);
					this.ptospericia.push(periciaadicional);
				}
			}
		}
		
		
		if ( this.periciasespeciales.puntos > 0 ) {			
			var ptos = this.periciasespeciales.puntos;
			var ptoinicial = 1;
			if ( this.periciasespeciales.puntos > this.periciasespeciales.pericias.length ) {
				ptos -= this.periciasespeciales.pericias.length;
				ptoinicial = 2;
			}
			var puntos = [];
			for (indice=0; indice< ptos; indice++) {
				puntos.push(ptoinicial);
			}
			for (;indice<this.periciasespeciales.pericias.length; indice++) {
				puntos.push(ptoinicial-1);
			}
			
			puntos = Comun.shuffle(puntos);
			
			indice2=0;
			for (indice = 0; indice < this.ptospericia.length; indice++) {
				if ( this.ptospericia[indice].especial == true ) {
					this.ptospericia[indice].puntosespecial = puntos[indice2];
					indice2++;
				}
			}
		}
	}
	
}


class Clases {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Guerrero",
			  requisitos: [ { atributo: "FUE", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 2000,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              bonifpericias: [],
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espada corta", "Jabalina" ], [ "Espada larga" ], [ "Daga", "Lanza" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Mago",
			  requisitos: [ { atributo: "INT", valor: 9} ],
			  reqprimario: "INT",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 4,
			  caracteristicas: [ "No pueden usar ningún tipo de armadura" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 0,
              movimiento: 40,
              experiencia: 2500,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: "Arcana", fijos: [ "Leer magia" ], 
						  numeroN1: 2, conjurosN1: [ "Detectar magia", "Detectar mentiras", "Ocultar mentiras", "Disco flotante", "Escudo", 
													 "Hechizar persona", "Leer lenguas", "Luz", "Oscuridad", "Misil mágico", "Retener portal", "Sueño", "Ventriloquía" ], 
						  numeroN2: 1, conjurosN2: [ "Apertura", "Cerradura arcana", "Detectar lo invisible", "Fuerza fantasmal", "Imágenes múltiples", "Invisibilidad",
													  "Levitar", "Localizar objeto", "Luz continua", "Oscuridad continua", "Percepción extrasensorial", 
													  "Protección contra el mal", "Telaraña" ] },
			  armas: [ [ "Bastón", "Daga" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Especialista",
			  requisitos: [ { atributo: "DES", valor: 9} ],
			  reqprimario: "DES",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Solo pueden usar armaduras de cuero. Escudos no.", 
                              "Dobla ataque y daño al Apuñalar por la espalda",
                              "Ventaja al escalar" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1400,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 14 },
				{ nombre: "Conjuros", valor: 15 },
              ],
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 4, pericias: [ { nombre: "Apuñalar", puntos: 0}, { nombre: "Detectar trampas", puntos: 1}, { nombre: "Juego de Manos", puntos: 0}, { nombre: "Mecanismos", puntos: 0} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Daga", "Ballesta ligera" ], [ "Espada ropera", "Daga"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Sacerdote",
			  requisitos: [ { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 4,
			  caracteristicas: [ "No pueden usar ningún tipo de armadura", 
								 "Poder Expulsar no muertos" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 0,
              movimiento: 40,
              experiencia: 1500,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: "Divina", fijos: [ ], 
						  numeroN1: -1, conjurosN1: [ "Curar heridas leves", "Causar heridas leves", "Detectar magia", "Detectar bien", "Detectar mal", "Luz", "Oscuridad", "Palabra de mando", 
													  "Protección contra el mal", "Purificar comida y agua", "Pudrir comida y agua", "Resistir frío", "Retirar miedo", "Causar miedo", "Santuario" ], 
						  numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Bastón" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Clérigo",
			  requisitos: [ { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Puede usar cualquier armadura", 
								 "Solo puede usar armas romas y cuerpo a cuerpo", 
								 "Poder Expulsar no muertos" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1650,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: "Divina", fijos: [ ], 
						  numeroN1: -1, conjurosN1: [ "Curar heridas leves", "Causar heridas leves", "Detectar magia", "Detectar bien", "Detectar mal", "Luz", "Oscuridad", "Palabra de mando", 
													  "Protección contra el mal", "Purificar comida y agua", "Pudrir comida y agua", "Resistir frío", "Retirar miedo", "Causar miedo", "Santuario" ], 
						  numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Martillo ligero" ], [ "Maza"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Paladín",
			  requisitos: [ { atributo: "FUE", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura", 
								 "Inmunidad: Purificación",
								 "Poder mágico: Imponer manos" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1700,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espada larga" ], [ "Espadón"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Montaraz",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "No pueden usar armaduras mejores que malla", 
								 "Bono: Puntería",
								 "Camuflaje natural (+2 a Sigilo en entornos naturales)" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1850,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Supervivencia", puntos: 0} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espada corta", "Arco corto" ], [ "Daga", "Arco corto" ], [ "Daga", "Jabalina" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Bardo",
			  requisitos: [ { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Solo puede usar armaduras de malla o peor", 
								 "Poderes mágicos: Música tranquilizadora" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1825,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Historia antigua", puntos: 1} ] },
			  conjuros: { tipo: null, fijos: [ ], 
						  numeroN1: 0, conjurosN1: [ ], 
						  numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espada ropera", "Daga"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Bárbaro",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Solo puede usar armaduras de malla o peor", 
								 "Ventaja al escalar",
								 "Fornido. Difícil de matar" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 2450,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espadón", "Hacha de mano"], [ "Gran hacha", "Hacha de mano" ], [ "Hacha de batalla", "Hacha de mano"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Asesino",
			  requisitos: [ { atributo: "FUE", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Solo pueden usar armaduras de cuero. Escudos no.", 
								 "Dobla ataque y daño al Apuñalar por la espalda",
								 "Ventaja al escalar. Pasar desapercibido. Reflejos finos" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1850,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Apuñalar", puntos: 0} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Daga" ], [ "Estoque", "Daga"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Monje",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "No pueden usar ningún tipo de armadura ni escudo.", 
								 "Armas naturales. Escurridizo" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1850,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 2, pericias: [ ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Jō (bastón)", "Sai" ], [ "Jian (espada)", "Sai"], [ "Dadao (sable)", "Sai" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Guerrero arcano elfo",
			  requisitos: [ { atributo: "INT", valor: 11} ],
			  reqprimario: "INT",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Solo puede usar armaduras de malla o peor",
								 "Camuflaje natural. Nada se le escapa. Bono: Alma liberada" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 3625,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ "Elfo", "Gnoll", "Grantrasgo", "Orco" ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ { nombre: "Señor de las bestias", puntos: 0} ] },
			  conjuros: { tipo: "Arcana", fijos: [ "Leer magia" ], 
						  numeroN1: 2, conjurosN1: [ "Detectar magia", "Detectar mentiras", "Ocultar mentiras", "Disco flotante", "Escudo", 
													 "Hechizar persona", "Leer lenguas", "Luz", "Oscuridad", "Misil mágico", "Retener portal", "Sueño", "Ventriloquía" ], 
						  numeroN2: 1, conjurosN2: [ "Apertura", "Cerradura arcana", "Detectar lo invisible", "Fuerza fantasmal", "Imágenes múltiples", "Invisibilidad",
													  "Levitar", "Localizar objeto", "Luz continua", "Oscuridad continua", "Percepción extrasensorial", 
													  "Protección contra el mal", "Telaraña" ] },
			  armas: [ [ "Espada corta", "Arco corto" ], [ "Daga", "Arco corto" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Capellán elfo",
			  requisitos: [ { atributo: "INT", valor: 9}, { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 4,
			  caracteristicas: [ "No puede usar ningún tipo de armadura", "Expulsar no muertos", 
								 "Camuflaje natural. Nada se le escapa. Bono. Alma liberada" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 0,
              movimiento: 40,
              experiencia: 1750,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ "Elfo", "Gnoll", "Grantrasgo", "Orco" ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ { nombre: "Señor de las bestias", puntos: 0} ] },
			  conjuros: { tipo: "Divina", fijos: [ ], 
						  numeroN1: -1, conjurosN1: [ "Curar heridas leves", "Causar heridas leves", "Detectar magia", "Detectar bien", "Detectar mal", "Luz", "Oscuridad", "Palabra de mando", 
													  "Protección contra el mal", "Purificar comida y agua", "Pudrir comida y agua", "Resistir frío", "Retirar miedo", "Causar miedo", "Santuario" ], 
						  numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Martillo ligero" ], [ "Maza"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Defensor enano",
			  requisitos: [ { atributo: "FUE", valor: 9}, { atributo: "CON", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Armadura natural",
								 "Sensitivo con la piedra. Piel de piedra" ],
              ca: 2,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC",
              barridos: 1,
              movimiento: 30,
              experiencia: 2650,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ "Enano", "Gnomo", "Trasgo", "Kobold" ],
              boniftipoarmas: -1,
              periciasespeciales: { puntos: 4, pericias: [ { nombre: "Arquitectura", puntos: 1}, { nombre: "Detectar trampas", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 0, pericias: [ { nombre: "Sigilo", puntos: 1} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Gran hacha", "Hacha de mano" ], [ "Hacha de batalla", "Hacha de mano"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Luchador enano",
			  requisitos: [ { atributo: "FUE", valor: 9}, { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Armadura natural. Sensitivo con la piedra" ],
              ca: 2,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 30,
              experiencia: 2400,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ "Enano", "Gnomo", "Trasgo", "Kobold" ],
              boniftipoarmas: -1,
              periciasespeciales: { puntos: 2, pericias: [ { nombre: "Arquitectura", puntos: 1}, { nombre: "Detectar trampas", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 0, pericias: [ { nombre: "Sigilo", puntos: 1} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Gran hacha", "Hacha de mano" ], [ "Hacha de batalla", "Martillo ligero"], [ "Martillo de guerra", "Hacha de mano" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Clérigo enano",
			  requisitos: [ { atributo: "SAB", valor: 9}, { atributo: "CON", valor: 9} ],
			  reqprimario: "SAB",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Armadura natural. Sensitivo con la piedra",
								 "Expulsar no muertos. Fornido",
								 "Pericia: Detectar trampas" ],
              ca: 2,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 30,
              experiencia: 2400,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 15 },
				{ nombre: "Artefactos magicos", valor: 11 },
				{ nombre: "Conjuros", valor: 12 },
              ],
              idiomas: [ "Enano", "Gnomo", "Trasgo", "Kobold" ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 4, pericias: [ { nombre: "Arquitectura", puntos: 1}, { nombre: "Detectar trampas", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { tipo: "Divina", puntos: 0, pericias: [ { nombre: "Sigilo", puntos: 1} ] },
			  conjuros: { fijos: [ ], 
						  numeroN1: -1, conjurosN1: [ "Curar heridas leves", "Detectar magia", "Detectar mal", "Luz", "Palabra de mando", 
													  "Protección contra el mal", "Purificar comida y agua", "Resistir frío", "Retirar miedo", "Santuario" ], 
						  numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Gran hacha", "Hacha de mano" ], [ "Hacha", "Hacha de mano" ], [ "Hacha de batalla", "Martillo ligero"], [ "Martillo de guerra", "Hacha de mano" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Alguacil mediano",
			  requisitos: [ { atributo: "FUE", valor: 9}, { atributo: "DES", valor: 9} ],
			  reqprimario: "DES",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Buen trato. Correr por su vida. Mal de ojo",
								 "Pasar desapercibido" ],
              ca: 1,
              ataque: 1,
              ataquead: 1,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 30,
              experiencia: 2275,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ "Mediano" ],
              boniftipoarmas: -1,
              periciasespeciales: { puntos: 4, pericias: [ { nombre: "Curar", puntos: 0}, { nombre: "Juego de Manos", puntos: 0},  { nombre: "Sigilo", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Curar", puntos: 0}, { nombre: "Juego de Manos", puntos: 0},  { nombre: "Detectar trampas", puntos: 1} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Daga", "Espada corta" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Saqueador mediano",
			  requisitos: [ { atributo: "DES", valor: 11} ],
			  reqprimario: "DES",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Buen trato. Correr por su vida. Mal de ojo",
								 "Pasar desapercibido. Puntería. Camuflaje natural" ],
              ca: 1,
              ataque: 1,
              ataquead: 1,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 30,
              experiencia: 2225,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 14 },
				{ nombre: "Conjuros", valor: 15 },
              ],
              idiomas: [ "Mediano" ],
              boniftipoarmas: -1,
              periciasespeciales: { puntos: 6, pericias: [ { nombre: "Curar", puntos: 0}, { nombre: "Juego de Manos", puntos: 0},  { nombre: "Sigilo", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 4, pericias: [ { nombre: "Apuñalar", puntos: 0}, { nombre: "Curar", puntos: 0}, { nombre: "Juego de Manos", puntos: 0},  { nombre: "Detectar trampas", puntos: 1}, { nombre: "Mecanismos", puntos: 0} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Daga", "Honda" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Mercenario semiogro",
			  requisitos: [ { atributo: "FUE", valor: 11} ],
			  reqprimario: "FUE",
			  modifadicional: [ 2, 0, 0, 0, 0, 0 ],
			  dg : 10,
			  caracteristicas: [ "Pueden usar cualquier armadura hasta malla",
								 "Armas naturales, Infravisión, Personalidad feroz",
								 "Armadura natural", "+2 a la Fuerza" ],
              ca: 1,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 50,
              experiencia: 2000,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ { nombre: "Sigilo", puntos: -1} ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espadón", "Alfanje"], [ "Gran hacha", "Cimitarra" ], [ "Hacha de batalla", "Maza"] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Ladrón semielfo",
			  requisitos: [ { atributo: "DES", valor: 9}, { atributo: "INT", valor: 9} ],
			  reqprimario: "DES",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "Solo pueden usar armaduras de cuero. Escudos no.", 
                              "Alma liberada, Camuflaje natural, Nada se le escapa",
                              "Señor de las bestias, Ventaja al escalar, Lingüista (N4), Arcanista aficionado (N10)" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 0,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 1650,
              tsalvacion: [
				{ nombre: "Captura", valor: 13 },
				{ nombre: "Aflicciones", valor: 13 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 14 },
				{ nombre: "Conjuros", valor: 15 },
              ],
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 4, pericias: [ { nombre: "Apuñalar", puntos: 0}, { nombre: "Detectar trampas", puntos: 1}, { nombre: "Juego de Manos", puntos: 0}, { nombre: "Mecanismos", puntos: 0} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Daga", "Ballesta ligera" ], [ "Espada ropera", "Daga"], [ "Espada corta", "Arco corto" ] ],
			  sistemamonetario: null,
			},
			{
			  nombre : "Guardián de la floresta élfico",
			  requisitos: [ { atributo: "CON", valor: 9}, { atributo: "INT", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "No pueden usar armaduras mejores que malla", 
								 "Bono: Puntería, Alma liberada, Camuflaje natural, Nada se le escapa",
								 "Señor de las bestias, Ventaja al escalar, Comnpañero animal (N4), Voz del bosque (N10)" ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 2100,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Supervivencia", puntos: 0} ] },
			  conjuros: { tipo: null, fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			  armas: [ [ "Espada corta", "Arco corto" ], [ "Daga", "Arco corto" ], [ "Daga", "Jabalina" ], [ "Espada corta", "Jabalina" ] ],
			  sistemamonetario: null,
			},  
			{
			nombre: "El Carroñero",
			requisitos: [
			  {
				atributo: "DES",
				valor: 9
			  }
			],
			reqprimario: "DES",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 6,
			caracteristicas: [
			  "Puede usar cualquier armadura hasta malla",
			  "Emboscar. Este trasto debería de funcionar.",
			  "Ventaja al escalar (N3), Arcanista aficionado (N10)"
			],
			ca: 0,
			ataque: 1,
			ataquead: 0,
			dano: 1,
			tipobonifdano: "AD",
			barridos: 0,
			movimiento: 40,
			experiencia: 1400,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 13
			  },
			  {
				nombre: "Aflicciones",
				valor: 13
			  },
			  {
				nombre: "Ataque de area",
				valor: 16
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 14
			  },
			  {
				nombre: "Conjuros",
				valor: 15
			  }
			],
			idiomas: [],
			boniftipoarmas: 0,
			periciasespeciales: {
			  puntos: 0,
			  pericias: []
			},
			pericias: {
			  puntos: 6,
			  pericias: [
				{
				  nombre: "Supervivencia",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (Munición)",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (Armas)",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (Armaduras)",
				  puntos: 0
				},
				{
				  nombre: "Uso de armas de fuego",
				  puntos: 0
				},
				{
				  nombre: "Detectar trampas",
				  puntos: 1
				},
				{
				  nombre: "Mecanismos",
				  puntos: 0
				}
			  ]
			},
			conjuros: {
			  tipo: null, fijos: [],
			  numeroN1: 0,
			  conjurosN1: [],
			  numeroN2: 0,
			  conjurosN2: []
			},
			armas: [  [ "Llave de rueda de repuesto", "Cuchillo" ], [ "Llave de bujías", "Machete" ] 
			],
			plantilla: "AxisMundiEN.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "El Incinerador",
			requisitos: [
			  {
				atributo: "FUE",
				valor: 9
			  }
			],
			reqprimario: "FUE",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 8,
			caracteristicas: [
			  "Solo puede usar armaduras de cuero sin escudo",
			  "Daño +1 (y +1/nivel par) en ataques con fuego",
			  "Incinerar. Especialista en fuego cruzado (N2).",
			  "¿Quieres sentir el calor? (N5). Siervo de las llamas (N8)"
			],
			ca: 0,
			ataque: 1,
			ataquead: 0,
			dano: 0,
			tipobonifdano: "CC y AD",
			barridos: 1,
			movimiento: 40,
			experiencia: 2300,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 15
			  },
			  {
				nombre: "Aflicciones",
				valor: 14
			  },
			  {
				nombre: "Ataque de area",
				valor: 16
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 16
			  },
			  {
				nombre: "Conjuros",
				valor: 17
			  }
			],
			idiomas: [],
			boniftipoarmas: 1,
			periciasespeciales: {
			  puntos: 0,
			  pericias: []
			},
			pericias: {
			  puntos: 2,
			  pericias: [
			  ]
			},
			conjuros: {
			  tipo: null, fijos: [],
			  numeroN1: 0,
			  conjurosN1: [],
			  numeroN2: 0,
			  conjurosN2: []
			},
			armas: [ [ "Lanzallamas", "Cuchillo" ], [ "Lanzallamas", "Machete" ], [ "Lanzallamas", "Hacha" ] ],
			plantilla: "AxisMundiEN.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "Tecnomago",
			requisitos: [
			  {
				atributo: "INT",
				valor: 9
			  }
			],
			reqprimario: "INT",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 4,
			caracteristicas: [
			  "No pueden usar ningún tipo de armadura",
			  "Puede memorizar y lanzar Tecnomagia"
			],
			ca: 0,
			ataque: 1,
			ataquead: 0,
			dano: 0,
			tipobonifdano: "CC y AD",
			barridos: 0,
			movimiento: 40,
			experiencia: 2100,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 13
			  },
			  {
				nombre: "Aflicciones",
				valor: 13
			  },
			  {
				nombre: "Ataque de area",
				valor: 15
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 11
			  },
			  {
				nombre: "Conjuros",
				valor: 12
			  }
			],
			idiomas: [],
			boniftipoarmas: 0,
			periciasespeciales: {
			  puntos: 0,
			  pericias: []
			},
			pericias: {
			  puntos: 2,
			  pericias: [
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Ingeniería",
				  puntos: 1
				},
				{
				  nombre: "Curar",
				  puntos: 0
				}
			  ]
			},
			conjuros: {
			  tipo: "Tecnomagia", fijos: [
			  ],
			  numeroN1: 2,
			  conjurosN1: [
				"Barrera de luz",
				"Cargar batería menor",
				"Guantes de tirador",
				"Reanimar dispositivo"
			  ],
			  numeroN2: 0,
			  conjurosN2: [
			  ]
			},
			armas: [ [ "Cuchillo" ], [ "Cuchillo", "Machete" ] 
			],
			plantilla: "AxisMundiENC.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "El Tirador Chatarrero",
			requisitos: [
			  {
				atributo: "DES",
				valor: 9
			  }
			],
			reqprimario: "DES",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 6,
			caracteristicas: [
			  "Puede usar cualquier armadura hasta malla",
			  "Emboscar. Puntería. Supervivencia (N4).",
			  "Disparo de precisión (N10)"
			],
			ca: 0,
			ataque: 1,
			ataquead: 0,
			dano: 1,
			tipobonifdano: "AD",
			barridos: 1,
			movimiento: 40,
			experiencia: 2300,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 15
			  },
			  {
				nombre: "Aflicciones",
				valor: 14
			  },
			  {
				nombre: "Ataque de area",
				valor: 16
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 16
			  },
			  {
				nombre: "Conjuros",
				valor: 17
			  }
			],
			idiomas: [],
			boniftipoarmas: 1,
			periciasespeciales: {
			  puntos: 0,
			  pericias: []
			},
			pericias: {
			  puntos: 2,
			  pericias: [
				{
				  nombre: "Reciclaje (Munición)",
				  puntos: 0
				},
				{
				  nombre: "Uso de armas de fuego",
				  puntos: 0
				},
				{
				  nombre: "Detectar trampas",
				  puntos: 1
				}
			  ]
			},
			conjuros: {
			  tipo: null, fijos: [],
			  numeroN1: 0,
			  conjurosN1: [],
			  numeroN2: 0,
			  conjurosN2: []
			},
			armas: [ [ "Subfusil", "Cuchillo" ], [ "Escopeta", "Machete" ], [ "Rifle", "Cuchillo de carnicero" ] 
			],
			plantilla: "AxisMundiEN.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "El Tocho",
			requisitos: [
			  {
				atributo: "FUE",
				valor: 9
			  },
			  {
				atributo: "CON",
				valor: 9
			  }
			],
			reqprimario: "CON",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 10,
			caracteristicas: [
			  "Puede usar cualquier armadura hasta malla",
			  "Agarre firme. Fornido. Difícil de matar."
			],
			ca: 0,
			ataque: 1,
			ataquead: 0,
			dano: 0,
			tipobonifdano: "CC y AD",
			barridos: 0,
			movimiento: 40,
			experiencia: 2000,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 15
			  },
			  {
				nombre: "Aflicciones",
				valor: 14
			  },
			  {
				nombre: "Ataque de area",
				valor: 16
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 16
			  },
			  {
				nombre: "Conjuros",
				valor: 17
			  }
			],
			idiomas: [],
			boniftipoarmas: 1,
			periciasespeciales: {
			  puntos: 0,
			  pericias: []
			},
			pericias: {
			  puntos: 2,
			  pericias: [
			  ]
			},
			conjuros: {
			  tipo: null, fijos: [],
			  numeroN1: 0,
			  conjurosN1: [],
			  numeroN2: 0,
			  conjurosN2: []
			},
			armas: [ [ "Señal de tráfico", "Machete" ], [ "Señal de tráfico", "Hacha" ], [ "Señal de tráfico", "Cuchillo de carnicero" ] 
			],
			plantilla: "AxisMundiEN.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "Tecnomago Kobold",
			requisitos: [
			  {
				atributo: "INT",
				valor: 11
			  },
			  {
				atributo: "DES",
				valor: 11
			  }
			],
			reqprimario: "INT",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 4,
			caracteristicas: [
			  "Solo puede usar armaduras de cuero sin escudo",
			  "Puede memorizar y lanzar Tecnomagia (N3)",
			  "Correr por su vida."
			],
			ca: 1,
			ataque: 1,
			ataquead: 0,
			dano: 0,
			tipobonifdano: "CC y AD",
			barridos: 0,
			movimiento: 30,
			experiencia: 2525,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 13
			  },
			  {
				nombre: "Aflicciones",
				valor: 13
			  },
			  {
				nombre: "Ataque de area",
				valor: 15
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 11
			  },
			  {
				nombre: "Conjuros",
				valor: 12
			  }
			],
			idiomas: [],
			boniftipoarmas: -1,
			periciasespeciales: {
			  puntos: 3,
			  pericias: [ 
				{
					nombre: "Sigilo",
					puntos: 1
				},
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Uso de armas de fuego",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (____)",
				  puntos: 0
				},
				{
				  nombre: "Detectar trampas",
				  puntos: 1
				} 
			  ]
			},
			pericias: {
			  puntos: 2,
			  pericias: [
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Uso de armas de fuego",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (____)",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (_____)",
				  puntos: 0
				}
			  ]
			},
			conjuros: {
			  tipo: "Tecnomagia", fijos: [
			  ],
			  numeroN1: 0,
			  conjurosN1: [
				"Barrera de luz",
				"Cargar batería menor",
				"Guantes de tirador",
				"Reanimar dispositivo"
			  ],
			  numeroN2: 0,
			  conjurosN2: [
			  ]
			},
			armas: [ [ "Revólver", "Machete" ], [ "Pistola", "Hacha" ], [ "Pistolón", "Cuchillo de carnicero" ] 
			],
			plantilla: "AxisMundiENC.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "Chamán Kobold",
			requisitos: [
			  {
				atributo: "SAB",
				valor: 11
			  },
			  {
				atributo: "DES",
				valor: 11
			  }
			],
			reqprimario: "SAB",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 6,
			caracteristicas: [
			  "No puede usar ningún tipo de armadura",
			  "Puede memorizar y lanzar magia divina",
			  "Correr por su vida. Carisma oscuro.",
			  "Arcanista aficionado (N6). Profecias (N8)"
			],
			ca: 1,
			ataque: 1,
			ataquead: 0,
			dano: 0,
			tipobonifdano: "CC y AD",
			barridos: 0,
			movimiento: 30,
			experiencia: 1650,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 13
			  },
			  {
				nombre: "Aflicciones",
				valor: 13
			  },
			  {
				nombre: "Ataque de area",
				valor: 15
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 11
			  },
			  {
				nombre: "Conjuros",
				valor: 12
			  }
			],
			idiomas: [],
			boniftipoarmas: -1,
			periciasespeciales: {
			  puntos: 3,
			  pericias: [ 
				{
					nombre: "Sigilo",
					puntos: 1
				},
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (____)",
				  puntos: 0
				},
				{
				  nombre: "Detectar trampas",
				  puntos: 1
				} 
			  ]
			},
			pericias: {
			  puntos: 6,
			  pericias: [
				{
				  nombre: "Curar",
				  puntos: 0
				},
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Uso de armas de fuego",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (____)",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (_____)",
				  puntos: 0
				}
			  ]
			},
			conjuros: {
			  tipo: "Divina", fijos: [
			  ],
			  numeroN1: -1,
			  conjurosN1: [
				"Curar heridas leves",
				"Causar heridas leves",
				"Detectar magia",
				"Detectar bien",
				"Detectar mal",
				"Luz",
				"Oscuridad",
				"Palabra de mando",
				"Protección contra el mal",
				"Purificar comida y agua",
				"Pudrir comida y agua",
				"Resistir frío",
				"Retirar miedo",
				"Causar miedo",
				"Santuario"
			  ],
			  numeroN2: 0,
			  conjurosN2: [
			  ]
			},
			armas: [ [ "Llave de bujías", "Machete" ], [ "Hacha" ], [ "Cuchillo de carnicero" ] 
			],
			plantilla: "AxisMundiENC.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		  {
			nombre: "Recuperador Kobold",
			requisitos: [
			  {
				atributo: "FUE",
				valor: 11
			  },
			  {
				atributo: "DES",
				valor: 11
			  }
			],
			reqprimario: "SAB",
			modifadicional: [
			  0,
			  0,
			  0,
			  0,
			  0,
			  0
			],
			dg: 6,
			caracteristicas: [
			  "Solo puede usar armadura de cuero sin escudo",
			  "Correr por su vida. Pasar desapercibido.",
			  "Nada se le escapa (N3). Ventaja al escalar (N6)"
			],
			ca: 1,
			ataque: 1,
			ataquead: 0,
			dano: 0,
			tipobonifdano: "CC y AD",
			barridos: 1,
			movimiento: 30,
			experiencia: 1650,
			tsalvacion: [
			  {
				nombre: "Captura",
				valor: 15
			  },
			  {
				nombre: "Aflicciones",
				valor: 14
			  },
			  {
				nombre: "Ataque de area",
				valor: 16
			  },
			  {
				nombre: "Artefactos magicos",
				valor: 16
			  },
			  {
				nombre: "Conjuros",
				valor: 17
			  }
			],
			idiomas: [],
			boniftipoarmas: 0,
			periciasespeciales: {
			  puntos: 3,
			  pericias: [ 
				{
					nombre: "Sigilo",
					puntos: 1
				},
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (____)",
				  puntos: 0
				},
				{
				  nombre: "Detectar trampas",
				  puntos: 1
				} 
			  ]
			},
			pericias: {
			  puntos: 4,
			  pericias: [
				{
				  nombre: "Apuñalar",
				  puntos: 0
				},
				{
				  nombre: "Mecanismos",
				  puntos: 0
				},
				{
				  nombre: "Uso de armas de fuego",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (____)",
				  puntos: 0
				},
				{
				  nombre: "Reciclaje (_____)",
				  puntos: 0
				},
				{
				  nombre: "Supervivencia",
				  puntos: 0
				}
			  ]
			},
			conjuros: {
			  tipo: null, fijos: [
			  ],
			  numeroN1: 0,
			  conjurosN1: [
			  ],
			  numeroN2: 0,
			  conjurosN2: [
			  ]
			},
			armas: [ [ "Llave de bujías", "Machete" ], [ "Hacha", "Honda" ], [ "Cuchillo de carnicero", "Honda" ]
			],
			plantilla: "AxisMundiEN.pdf",
			sistemamonetario: { monedabaseoro: "piezas de chatarra", conversionbase: 1, monedas: [ "piezas de chatarra", "componentes de chatarra", "chatarra recuperable" ] }
		  },
		]
	}
	
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}
	
	existeclase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return true;
			}
		}
		return false;
	}
	
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return new Clase(this._clases[iclases]);
			}
		}
		return new Clase(this._clases[Comun.random(this._clases.length, 0)]);
	}
}
