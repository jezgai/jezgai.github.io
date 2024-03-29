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
		pericia.puntosbase = (atributospj[4].modif + this.modifadicional[4]) < -1 ? 1 : 2 + atributospj[4].modif + this.modifadicional[4];
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Arquitectura";
		pericia.puntosbase = 1;
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Escalada";
		pericia.puntosbase = (atributospj[2].modif + this.modifadicional[2]) < 0 ? 1 : 1 + atributospj[2].modif + this.modifadicional[2];
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Detectar";
		pericia.puntosbase = 1;
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Forzar Puertas";
		pericia.puntosbase = (atributospj[0].modif + this.modifadicional[0]) < 0 ? 1 : 1 + atributospj[0].modif + this.modifadicional[0];
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Idiomas";
		pericia.puntosbase = (atributospj[3].modif + this.modifadicional[3]) < 0 ? 0 : atributospj[3].modif + this.modifadicional[3];
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		pericia = new Object();
		pericia.tipo = "Básica";
		pericia.pericia = "Sigilo";
		pericia.puntosbase = (atributospj[1].modif + this.modifadicional[1]) < -1 ? 1 : 2 + atributospj[1].modif + this.modifadicional[1];
		pericia.puntos = 0;
		pericia.especial = false;
		pericia.puntosespecial = 0;
		this.ptospericia.push(pericia);
		
		for (indice=0; indice < this.pericias.pericias.length; indice++ ) {
			var pericia = new Object();
			pericia.tipo = "Avanzada";
			pericia.pericia = this.pericias.pericias[indice].nombre;
			pericia.puntosbase = this.pericias.pericias[indice].puntos;
			pericia.puntos = 0;
			pericia.especial = false;
			pericia.puntosespecial = 0;
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
		
		if ( this.periciasespeciales.puntos > 0 ) {
			var indice2=0;
			for (indice=0; indice < this.periciasespeciales.pericias.length; indice++ ) {
				for (indice2=0; indice2 < this.ptospericia.length; indice2++) {
					if ( this.ptospericia[indice2].pericia == this.periciasespeciales.pericias[indice].nombre ) {
						this.ptospericia[indice2].especial = true;
						break;
					}
				}
				if ( indice2 == this.ptospericia.length ) {
					var pericia = new Object();
					pericia.tipo = "Avanzada";
					pericia.pericia = this.periciasespeciales.pericias[indice].nombre;
					pericia.puntosbase = this.periciasespeciales.pericias[indice].puntos;
					pericia.puntos = 0;
					pericia.especial = true;
					pericia.puntosespecial = 0;
					this.ptospericia.push(pericia);
				}
			}
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
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
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
              pericias: { puntos: 4, pericias: [ { nombre: "Apuñalar", puntos: 0}, { nombre: "Detectar Trampas", puntos: 1}, { nombre: "Juego de Manos", puntos: 0}, { nombre: "Mecanismos", puntos: 0} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Explorador",
			  requisitos: [ { atributo: "CON", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "No pueden usar armaduras mejores que malla", 
								 "Bono: Puntería",
								 "Rastreador (+2 a Supervivencia cuando sigue rastros" ],
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
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
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
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
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
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
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
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Defensor enano",
			  requisitos: [ { atributo: "FUE", valor: 9}, { atributo: "CON", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Sensitivo con la piedra. Piel de piedra" ],
              ca: 0,
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
              idiomas: [ "Khuzdul", "Sindarin", "Orco" ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 4, pericias: [ { nombre: "Arquitectura", puntos: 1}, { nombre: "Mecanismos", puntos: 0},  { nombre: "Detectar trampas", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Luchador enano",
			  requisitos: [ { atributo: "FUE", valor: 9}, { atributo: "CON", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Armadura natural. Sensitivo con la piedra" ],
              ca: 1,
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
              idiomas: [ "Khuzdul", "Sindarin", "Orco" ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 2, pericias: [ { nombre: "Arquitectura", puntos: 1}, { nombre: "Mecanismos", puntos: 0},  { nombre: "Detectar trampas", puntos: 1},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 0, pericias: [ ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
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
              ca: 0,
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
              idiomas: [ ],
              boniftipoarmas: 0,
              periciasespeciales: { puntos: 2, pericias: [ { nombre: "Curar", puntos: 0}, { nombre: "Juego de manos", puntos: 0},  { nombre: "Sigilo", puntos: 0},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Curar", puntos: 0}, { nombre: "Juego de manos", puntos: 0},  { nombre: "Detectar trampas", puntos: 1} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
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
              idiomas: [ ],
              boniftipoarmas: -1,
              periciasespeciales: { puntos: 6, pericias: [ { nombre: "Curar", puntos: 0}, { nombre: "Juego de manos", puntos: 0},  { nombre: "Sigilo", puntos: 0},  { nombre: "Detectar", puntos: 1} ] },
              pericias: { puntos: 4, pericias: [ { nombre: "Apuñalar", puntos: 0}, { nombre: "Curar", puntos: 0}, { nombre: "Juego de manos", puntos: 0},  { nombre: "Detectar trampas", puntos: 1}, { nombre: "Mecanismos", puntos: 0} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Explorador Quendi",
			  requisitos: [ { atributo: "CON", valor: 9}, { atributo: "SAB", valor: 9} ],
			  reqprimario: "CON",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 6,
			  caracteristicas: [ "No pueden usar armaduras mejores que malla", 
								 "Nada se le escapa. Bono: Puntería",
								 "Rastreador (+2 a Supervivencia cuando sigue rastros",
								 "Sensibilidad natural. +2 a Sigilo y Alerta en entornos naturales a los que esté habituado." ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 2050,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ "Sindarin", "Quenya", "Adunaico", "Orco" ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 2, pericias: [ { nombre: "Supervivencia", puntos: 0}, { nombre: "Historia antigua", puntos: 1} ] },
			  conjuros: { fijos: [ ], numeroN1: 0, conjurosN1: [ ], numeroN2: 0, conjurosN2: [ ] },
			},
			{
			  nombre : "Guerrero Quendi",
			  requisitos: [ { atributo: "FUE", valor: 9}, { atributo: "SAB", valor: 9} ],
			  reqprimario: "FUE",
			  modifadicional: [ 0, 0, 0, 0, 0, 0 ],
			  dg : 8,
			  caracteristicas: [ "Pueden usar cualquier tipo de armadura",
								 "Nada se le escapa",
								 "Sensibilidad natural. +2 a Sigilo y Alerta en entornos naturales a los que esté habituado."  ],
              ca: 0,
              ataque: 1,
              ataquead: 0,
              dano: 1,
              tipobonifdano: "CC y AD",
              barridos: 1,
              movimiento: 40,
              experiencia: 2200,
              tsalvacion: [
				{ nombre: "Captura", valor: 15 },
				{ nombre: "Aflicciones", valor: 14 },
				{ nombre: "Ataque de area", valor: 16 },
				{ nombre: "Artefactos magicos", valor: 16 },
				{ nombre: "Conjuros", valor: 17 },
              ],
              idiomas: [ "Sindarin", "Quenya", "Adunaico", "Orco" ],
              boniftipoarmas: 1,
              periciasespeciales: { puntos: 0, pericias: [ ] },
              pericias: { puntos: 0, pericias: [ { nombre: "Historia antigua", puntos: 1} ] },
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
