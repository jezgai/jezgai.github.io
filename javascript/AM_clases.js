class Clase {
	constructor(clase) {
		this.nombre = clase.nombre;
		this.requisitos = clase.requisitos;
		this.reqprimario = clase.reqprimario;
		this.dg = clase.dg;
		this.caracteristicas = clase.caracteristicas;
		this.ataque = clase.ataque;
		this.dano = clase.dano;
		this.barridos = clase.barridos;
		this.tsalvacion = clase.tsalvacion;
		this.pericias = clase.pericias;
		this.conjuros = clase.conjuros;
		this.ptospericia = [];
		this.movimiento = clase.movimiento;
		this.experiencia = clase.experiencia;
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
	
	
	calculapericias(atributospj) {
		this.ptospericia = [ ];
		var indice = 0;
		
		var pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Alerta";
		pericia.puntosbase = atributospj[4].modif < -1 ? 1 : 2 + atributospj[4].modif;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Arquitectura";
		pericia.puntosbase = 1;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Escalada";
		pericia.puntosbase = atributospj[2].modif < 0 ? 1 : 1 + atributospj[2].modif;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Detectar";
		pericia.puntosbase = 1;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Forzar Puertas";
		pericia.puntosbase = atributospj[0].modif < 0 ? 1 : 1 + atributospj[0].modif;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Idiomas";
		pericia.puntosbase = atributospj[3].modif < 0 ? 0 : atributospj[3].modif;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Sigilo";
		pericia.puntosbase = atributospj[1].modif < -1 ? 1 : 2 + atributospj[1].modif;
		pericia.puntos = 0;
		this.ptospericia.push(pericia);
		
		for (indice=0; indice < this.pericias.pericias.length; indice++ ) {
			var pericia = new Object();
			pericia.tipo = "Avanzada";
			pericia.pericia = this.pericias.pericias[indice].nombre;
			pericia.puntosbase = this.pericias.pericias[indice].puntos;
			pericia.puntos = 0;
			this.ptospericia.push(pericia);
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
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura", 
								 "Pueden usar armas como si su FUE fuera un punto mayor" ],
              ataque: 1,
              dano: 1,
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
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Mago",
			  requisitos: [ { atributo: "INT", valor: 9} ],
			  reqprimario: "INT",
			  dg : 4,
			  caracteristicas: [ "No pueden usar ningún tipo de armadura" ],
              ataque: 1,
              dano: 0,
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
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ "Leer Magia" ], 
						  numeroN1: 2, conjurosN1: [ "Detectar magia", "Detectar mentiras (ocultar mentiras)", "Disco flotante", "Escudo", 
													 "Hechizar persona", "Leer lenguas", "Luz/Oscuridad", "Misil mágico", "Retener portal", "Sueño", "Ventriloquía" ], 
						  numeroN2: 1, conjurosN2: [ "Apertura", "Cerradura arcana", "Detectar lo invisible", "Fuerza fantasmal", "Imágenes múltiples", "Invisibilidad",
													  "Levitar", "Localizar objeto", "Luz/Oscuridad continua", "Percepción extrasensorial", 
													  "Protección contra el mal", "Telaraña" ] },
			},
			{
			  nombre : "Especialista",
			  requisitos: [ { atributo: "DES", valor: 9} ],
			  reqprimario: "DES",
			  dg : 6,
			  caracteristicas: [ "Solo pueden usar armaduras de cuero. Escudos no.", 
                              "Dobla ataque y daño al Apuñalar por la espalda",
                              "Ventaja al escalar" ],
              ataque: 1,
              dano: 0,
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
              pericias: { puntos: 4, pericias: [ { nombre: "Apuñalar", puntos: 0}, { nombre: "Detectar Trampas", puntos: 1}, { nombre: "Juego de Manos", puntos: 0}, { nombre: "Mecanismos", puntos: 0} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Sacerdote",
			  requisitos: [ { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  dg : 4,
			  caracteristicas: [ "No pueden usar ningún tipo de armadura", 
								 "Poder Expulsar no muertos" ],
              ataque: 1,
              dano: 0,
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
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], 
						  numeroN1: -1, conjurosN1: [ "Curar/Causar heridas leves", "Detectar magia", "Detectar mal/bien", "Luz/Oscuridad", "Palabra de mando", 
													  "Protección contra el mal", "Purificar/Pudrir comida y agua", "Resistir frío", "Retirar/Causar miedo", "Santuario" ], 
						  numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Clérigo",
			  requisitos: [ { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  dg : 6,
			  caracteristicas: [ "Puede usar cualquier armadura", 
								 "Solo puede usar armas romas y cuerpo a cuerpo", 
								 "Poder Expulsar no muertos" ],
              ataque: 1,
              dano: 0,
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
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], 
						  numeroN1: -1, conjurosN1: [ "Curar/Causar heridas leves", "Detectar magia", "Detectar mal/bien", "Luz/Oscuridad", "Palabra de mando", 
													  "Protección contra el mal", "Purificar/Pudrir comida y agua", "Resistir frío", "Retirar/Causar miedo", "Santuario" ], 
						  numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Paladín",
			  requisitos: [ { atributo: "FUE", valor: 9} ],
			  reqprimario: "FUE",
			  dg : 6,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura", 
								 "Pueden usar armas como si su FUE fuera un punto mayor", 
								 "Inmunidad: Purificación",
								 "Poder mágico: Imponer manos" ],
              ataque: 1,
              dano: 1,
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
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Montaraz",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  dg : 6,
			  caracteristicas: [ "No pueden usar armaduras mejores que malla", 
								 "Pueden usar armas como si su FUE fuera un punto mayor", 
								 "Bono: Puntería",
								 "Camuflaje natural (+2 a Sigilo en entornos naturales)" ],
              ataque: 1,
              dano: 1,
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
              pericias: { puntos: 2, pericias: [ { nombre: "Supervivencia", puntos: 0} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Bardo",
			  requisitos: [ { atributo: "SAB", valor: 9} ],
			  reqprimario: "SAB",
			  dg : 6,
			  caracteristicas: [ "Solo puede usar armaduras de malla o peor", 
								 "Poderes mágicos: Música tranquilizadora" ],
              ataque: 1,
              dano: 0,
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
              pericias: { puntos: 2, pericias: [ { nombre: "Historia antigua", puntos: 1} ] },
			  conjuros: { fijos: [ ], 
						  numeroN1: 0, conjurosN1: [ ], 
						  numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Bárbaro",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  dg : 8,
			  caracteristicas: [ "Solo puede usar armaduras de malla o peor", 
								 "Pueden usar armas como si su FUE fuera un punto mayor",
								 "Ventaja al escalar",
								 "Fornido. Difícil de matar" ],
              ataque: 1,
              dano: 1,
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
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Asesino",
			  requisitos: [ { atributo: "FUE", valor: 9} ],
			  reqprimario: "FUE",
			  dg : 6,
			  caracteristicas: [ "Solo pueden usar armaduras de cuero. Escudos no.", 
								 "Pueden usar armas como si su FUE fuera un punto mayor",
								 "Dobla ataque y daño al Apuñalar por la espalda",
								 "Ventaja al escalar. Pasar desapercibido. Reflejos finos" ],
              ataque: 1,
              dano: 1,
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
              pericias: { puntos: 2, pericias: [ { nombre: "Apuñalar", puntos: 0} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Monje",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  dg : 6,
			  caracteristicas: [ "No pueden usar ningún tipo de armadura ni escudo.", 
								 "Pueden usar armas como si su FUE fuera un punto mayor",
								 "Armas naturales. Escurridizo" ],
              ataque: 1,
              dano: 1,
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
              pericias: { puntos: 2, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
		]
	}
	
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
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
