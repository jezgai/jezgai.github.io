
class TalentosComunesCP {
	static talentos() {
		return [ "Afortunado","Ataque certero","Buena reputación","Coraje","Elegante","Empatía mecánica","Ímpetu emprendedor","Red de contactos","Sentido agudo" ];
	}
	/*static implantes() {
		return [ "Amplificador sensorial Neusko","AutoRCP","Bladetech","Brazos reforzados","Camuflaje óptico","Chip emocional","CogniCard","CogniPort","CogniPort Dual","Dopplegänger","Esqueleto sintético","Filtros nasales","HoloBloqueadores","Implante de memoria","Implante de monitorización","Implante neuronal","Modulador de voz","Ojos protésicos","Piernas sintéticas","Potenciador de reflejos","Síntoma de radiofrecuencia","Sistema de Puntería Inteligente","ToolHand","Visión mejorada" ];
	} */
}

class ClaseCP {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._talentos2 = clase.talentos2;
		this._ntalentos = clase.ntalentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._ins = clase.ins;
		this._pU = clase.pU;
		this._equipoinicial = clase.equipoinicial;
		this._apodos = clase.apodos;
	}
		
	get apodos() {
		return this._apodos;
	}
	get nombre() {
		return this._nombre;
	}
	get talentos() {
		return this._talentos;
	}
	get daguante() {
		return this._daguante;
	}
	get atrs() {
		return this._atrs;
	}
	get atq() {
		return this._atq;
	}
	get ins() {
		return this._ins;
	}
	
	set nombre(value) {
		this._nombre = value;
	}
	set talentos(value) {
		this._talentos = value;
	}
	set daguante(value) {
		this._daguante = value;
	}
	set atrs(value) {
		this._atrs = value;
	}
	set atq(value) {
		this._atq = value;
	}
	set ins(value) {
		this._ins = value;
	}

	talentos(nivel) {
		var intal = nivel - 1;
		if ( nivel > this._ntalentos.length ) {
			intal = this._ntalentos.length - 1;
		}
		
		var taln = [];
		var ital=0;
		for (ital = 0; ital < this._talentos.length ; ital++ ) {
			taln.push(this._talentos[ital]);
		}
		if ( this._talentos2.length > 1 && ital < 2) {
			var tal2 = this._talentos2.clone();
			tal2 = Comun.shuffle(tal2);
			var ital2 = ital;
			for (ital2 = ital; ital2 < 2; ital2++) {
				taln.push(tal2[ital2-ital]);
			}
			ital = ital2;
		}
		
		var italc = ital;
		var tcomunes = TalentosComunesCP.talentos();
		tcomunes = Comun.shuffle(tcomunes);
		
		for (italc = ital; italc < this._ntalentos[intal]; italc++) {
			taln.push(tcomunes[italc-ital]);
		}
		
		return taln;
	}

	pv(nivel) {
		var ptos = this._daguante;
		var ipv=0;
		for (ipv=1; ipv<nivel; ipv++) {
			ptos += Comun.random(this._daguante, 1);
		}
		return ptos;
	}

	
	get pU() {
		return this._pU;
	}
	
	atq(nivel) {
		var iatq = nivel - 1;
		if ( nivel > this._atq.length ) {
			iatq = this._atq.length - 1;
		}
		return this._atq[iatq];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}
	
	equipo() {
		return this._equipoinicial[Comun.random(this._equipoinicial.length,0)];
	}

}

class ClasesCP {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Backup",
			  talentos : [ "Sexto sentido" ],
			  talentos2 : [ "Lucha con X", "Músculos de acero" ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 4 ],
			  apodos : [ "Tanque", "Ejecutor", "Finalizador", "Fulminador", "Misil", "Magnum" ],
			  daguante : 8,
			  pU : 4,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  equipoinicial : [ { dinero : { inicial : 500, aleatorio: 4 }, equipo : []}, 
								{ dinero : { inicial : 0, aleatorio: 1 }, equipo : [ "Subfusil", "3 cargadores", "Chaleco antibalas", "Ropa paramilitar" ] },
								{ dinero : { inicial : 0, aleatorio: 1 }, equipo : [ "Pistola con puntero láser", "3 cargadores", "Katana o arma blanca media", "Ropa blindada" ]} ],
			},
			{
			  nombre : "Data",
			  talentos : [ "Mente férrea", "Plugin" ],
			  talentos2 : [ ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 4 ],
			  apodos : [ "Virus", "RAM", "USB", "Motherboard", "Monitor", "Troyano" ],
			  daguante : 6,
			  pU : 4,
			  atrs : [ "INT" , "DES" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 500, aleatorio: 4 }, equipo : []}, 
								{ dinero : { inicial : 0, aleatorio: 4 }, equipo : [ "Pistola", "3 cargadores", "Ropa urbana", "Monopatín" ] },
								{ dinero : { inicial : 0, aleatorio: 4 }, equipo : [ "Terminal de hacking Ryotatsu Neo-2054", "Traje de oficinista" ]} ],
			},
			{
			  nombre : "Link",
			  talentos : [ "Contactos", "Pico de oro" ],
			  talentos2 : [ ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 4 ],
			  apodos : [ "Susurro", "Secretos", "Confidencial", "Seductor", "Fisgón", "Chismoso" ],
			  nimplantes : 0,
			  daguante : 4,
			  pU : 4,
			  atrs : [ "CAR" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 500, aleatorio: 4 }, equipo : []}, 
								{ dinero : { inicial : 0, aleatorio: 2 }, equipo : [ "Pistola", "2 cargadores", "Maletín Security 3", "traje de ejecutivo" ] },
								{ dinero : { inicial : 0, aleatorio: 3 }, equipo : [ "Revólver", "2 cargadores", "bate o arma mediana", "chaleco antibalas", "chupa de cuero" ]} ],
			},
			{
			  nombre : "Microchip",
			  talentos : [ "Biomecánica", "Manitas" ],
			  talentos2 : [ ],
			  ntalentos : [ 2, 2, 2, 2, 3, 3, 3, 3, 3, 4 ],
			  apodos : [ "Cables", "Chismes", "Artilugios", "Circuitos", "Cachivache" ],
			  daguante : 4,
			  pU : 4,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 500, aleatorio: 4 }, equipo : []}, 
								{ dinero : { inicial : 0, aleatorio: 2 }, equipo : [ "Pistola", "2 cargadores", "Chaleco antibalas", "Mono de trabajo", "Kit de herramientas", "Llave electrónica" ] },
								{ dinero : { inicial : 0, aleatorio: 1 }, equipo : [ "Implante de visión mejorada", "Kit de herramientas para vehículos", "Medpack", "Casco", "Mono de piloto (ropa blindada)" ]} ],
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
				return new ClaseCP(this._clases[iclases]);
			}
		}
		return new ClaseCP(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesCP = new ClasesCP();



