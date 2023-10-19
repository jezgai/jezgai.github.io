class Via {
	
	constructor(via) {
		this.nombre = via.nombre;
		this.pvinicial = via.pvinicial;
		this.pvnivel = via.pvnivel;
		this.atributo = via.atributo;
		this.competencias = via.competencias;
		this.rasgos = via.rasgos;
	}
	
	ptosvida(nivel) {
		var puntos = this.pvinicial.modificador;
		puntos += Comun.dados(this.pvinicial.ndados, this.pvinicial.tdado, this.pvinicial.modificador, 1);
		var indice = 1;
		for (indice = 1; indice < nivel; indice++) {
			puntos += Comun.dados(this.pvnivel.ndados, this.pvnivel.tdado, this.pvnivel.modificador, 1);
		}
		return puntos;
	}
}


class Vias {
	constructor() {
		this.vias = [
							{
								nombre: "Vía del Acero",
								pvinicial: { ndados: 1, tdado: 10, modificador: 4 },
								pvnivel: { ndados: 1, tdado: 10, modificador: 0 },
								atributo: [ "FUE" ],
								competencias: "Cualquier arma o armadura",
								rasgos: [ "Lucha sin filo", "Lancero", "Filo letal", "Rompe Cráneos" ]
							},
							{
								nombre: "Vía de la Energía",
								pvinicial: { ndados: 1, tdado: 4, modificador: 4 },
								pvnivel: { ndados: 1, tdado: 4, modificador: 0 },
								atributo: [ "INT", "SAB" ],
								competencias: "Bastones, dagas, hondas y dardos. Acceso a los círculos de prodigios.",
								rasgos: [ "Ritualista", "Velador del bosque", "Tocado por los dioses", "Guardían de Almas" ]
							},
							{
								nombre: "Vía Agreste",
								pvinicial: { ndados: 1, tdado: 8, modificador: 4 },
								pvnivel: { ndados: 1, tdado: 8, modificador: 0 },
								atributo: [ "CON", "DES" ],
								competencias: "Cualquier arma. Armadura ligera y media.",
								rasgos: [ "Tirador experto", "Rastreador incansable", "Espíritu animal", "Jinete del Yermo" ]
							},
							{
								nombre: "Vía del Subterfugio",
								pvinicial: { ndados: 1, tdado: 6, modificador: 4 },
								pvnivel: { ndados: 1, tdado: 6, modificador: 0 },
								atributo: [ "DES", "CAR" ],
								competencias: "Dagas, espadas cortas y ballestas. Armadura ligera.",
								rasgos: [ "Danzante de sombras", "Acróbata ambulante", "Ratero", "Corazón de tinta" ]
							}
						]
	}
	
	
	desplegableVias(nbFuncSel) {
		var svias=" <strong>Via:</strong> <select class='w3-select'  name='via' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var ivia=0;
		for (ivia=0; ivia< this.vias.length; ivia++) {
			svias += "<option>" + this.vias[ivia].nombre + "</option>";
		}
		svias += "</select>";
		return svias;
	}
	
	existevia(nombre) {
		var ivia=0;
		for (ivia=0; ivia<this.vias.length; ivia++) {
			if ( this.vias[ivia].nombre == nombre ) {
				return true;
			}
		}
		return false;
	}
	
	via(nombre) {
		var ivia=0;
		for ( ivia = 0; ivia < this.vias.length; ivia++ ) {
			if ( this.vias[ivia].nombre == nombre ) {
				return new Via(this.vias[ivia]);
			}
		}
		return new Via(this.vias[ Comun.random(this.vias.length, 0)]);
	}
}


let vias = new Vias();
