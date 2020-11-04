
class ClaseVES extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._pod = clase.pod;
		this._competencias = clase.competencias;
	}
		
	get pod() {
		return this._pod;
	}
	get competencias() {
		return this._competencias;
	}
	
	set pod(value) {
		this._pod = value;
	}
	set competencias(value) {
		this._competencias = value;
	}

	talentos(nivel) {
		var tal = [];
		var ntal = 2;
		if ( nivel >= 8 )
			ntal = 4;
		else if ( nivel >= 4 )
			ntal = 3;
			
		var intal=0;
		
		if ( this._talentos.tlnfijo != "" ) {
			tal.push(this._talentos.tlnfijo);
			ntal--;
		}
		var talrandom = Comun.shuffle(this._talentos.tlnrandom.clone());
		for (intal=0; intal<ntal && intal<talrandom.length; intal++) {
			tal.push(talrandom[intal]);
		}
		
		return tal;
	}

	pv(nivel, modificador) {
		var ptos = this._daguante + modificador;
		var ipv=0;
		for (ipv=1; ipv<nivel; ipv++) {
			ptos += Comun.random(this._daguante, 1) + modificador;
		}
		return ptos;
	}

	atq(nivel) {
		var iatq = nivel - 1;
		if ( nivel > this._atq.length ) {
			iatq = this._atq.length - 1;
		}
		return this._atq[iatq];
	}

	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}

}

class ClasesVES {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Combatiente",
			  talentos : { tlnfijo: "", tlnrandom: [ "Artillero/a", "Ataque certero", "Ataque múltiple", "Indómito/a", "Francotirador/a", "Inspiración", "Pelea con X" ] },
			  daguante : 8,
			  atrs : [ "FUE", "CON", "DES", "SAB", "CAR", "INT" ],
			  atq : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  poderes : 0,
			  competencias : "Pueden usar todas las armas y armaduras.",
			},
			{
			  nombre : "Mediador/a",
			  talentos : { tlnfijo: "", tlnrandom: [ "Contactos", "Criminal", "Inspiración", "Lingüista natural", "Maestro/a del disfraz", "Pico de oro", "Suerte" ] },
			  daguante : 6,
			  atrs : [ "CAR", "DES", "SAB", "INT", "CON", "FUE" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  poderes : 0,
			  competencias : "Pueden usar armas primitivas, armas sencillas y armaduras ligeras.",
			},
			{
			  nombre : "Caballero/a Místico/a",
			  talentos : { tlnfijo: "Caballero místico", tlnrandom: [ "Manipulación de la Realidad", "Conexión mística", "Sanador/a", "Místico/a bélico/a", "Sabiduría mística", "Especialista", "Crear artefactos místicos" ] },
			  daguante : 6,
			  atrs : [ "DES", "INT", "FUE", "SAB", "CON", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  pod : [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 3 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  poderes : 1,
			  competencias : "Puede usar armas primitivas, espadas fotónicas y armaduras ligeras",
			},
			{
			  nombre : "Maestro/a Místico/a",
			  talentos : { tlnfijo: "Maestro místico", tlnrandom: [ "Manipulación de la Realidad", "Conexión mística", "Sanador/a", "Místico/a bélico/a", "Sabiduría mística", "Especialista", "Crear artefactos místicos" ] },
			  daguante : 4,
			  atrs : [ "SAB", "INT", "DES", "CAR", "FUE", "CON" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  pod : [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 3 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  poderes : 2,
			  competencias : "Usa armas primitivas y no puede usar ninguna armadura",
			},
			{
			  nombre : "Técnico",
			  talentos : { tlnfijo: "", tlnrandom: [ "Afinidad mecánica", "Artillero/a", "Científico/a", "Médico", "Piloto experto", "Resolutivo/a", "Superviviente" ] },
			  daguante : 6,
			  atrs : [ "INT", "DES", "SAB", "CON", "FUE", "CAR" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  poderes : 0,
			  competencias : "Pueden usar armas primitivas, armas sencillas y armaduras ligeras.",
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
				return new ClaseVES(this._clases[iclases]);
			}
		}
		return new ClaseVES(this._clases[Comun.random(this._clases.length, 0)]);
	}
}



let clasesVES = new ClasesVES();
