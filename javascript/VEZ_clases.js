
class TalentosComunes {
	static talentos() {
		return [ "Ambidextro","Chi","Emboscar","Espíritu americano","Forzudo","Inmunidad a la plaga","Luchador experto X","Mascota fiel","Meditación sanadora","Presencia influyente","Vigor","Vista aguda" ];
	}
}

class ClaseZ {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._ntalentos = clase.ntalentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._def = clase.def;
		this._ins = clase.ins;
		this._pS = clase.pS;
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
		var haytalentoscomunes = Comun.random(10,1) % 2;
		var ital = 0;
				
		var tal1 = this._talentos.clone();
		tal1 = Comun.shuffle(tal1);
		var taln = [];
		for (ital = 0; ital < this._ntalentos[intal] - haytalentoscomunes; ital++ ) {
			taln.push(tal1[ital]);
		}
		var tcomunes = TalentosComunes.talentos();
		tcomunes = Comun.shuffle(tcomunes);
		for ( ital=0; ital < haytalentoscomunes; ital++) {
			taln.push(tcomunes[ital]);
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

	defn(nivel) {
		var idef = nivel - 1;
		if ( nivel > this._def.length ) {
			idef = this._def.length - 1;
		}
		return this._def[idef];
	}
	
	
	pS(nivel) {
		var ipS = nivel - 1;
		if ( nivel > this._pS.length ) {
			ipS = this._pS.length - 1;
		}
		return this._pS[ipS];
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

}

class ClasesZ {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Héroe",
			  talentos : [ "Acción heroica", "Entereza", "Cazador de engendros", "Reflejos de combate" ],
			  ntalentos : [ 2, 2, 3, 3, 3 ],
			  daguante : 8,
			  pS : [ 1, 1, 2, 2, 3 ],
			  atrs : [ "FUE" , "CAR" ],
			  atq : [ 1, 2, 3, 4, 5 ],
			  def : [ 1, 1, 2, 2, 3 ],
			  ins : [ 1, 2, 2, 3, 3 ],
			},
			{
			  nombre : "Superviviente",
			  talentos : [ "Duro de pelar", "Resistencia natural", "Ángel de la guarda", "Rata escurridiza" ],
			  ntalentos : [ 2, 2, 3, 3, 3 ],
			  daguante : 6,
			  pS : [ 2, 2, 3, 3, 4 ],
			  atrs : [ "CON" , "DES" ],
			  atq : [ 0, 1, 1, 2, 2 ],
			  def : [ 1, 1, 2, 2, 3 ],
			  ins : [ 1, 2, 3, 4, 5 ],
			},
			{
			  nombre : "Apto",
			  talentos : [ "Trucos y recursos", "Versátil", "Pro", "Lumbreras" ],
			  ntalentos : [ 2, 2, 3, 3, 3 ],
			  daguante : 4,
			  pS : [ 3, 3, 4, 4, 5 ],
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 1, 1, 2, 2 ],
			  def : [ 0, 0, 1, 1, 2 ],
			  ins : [ 0, 1, 1, 2, 2 ],
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
				return new ClaseZ(this._clases[iclases]);
			}
		}
		return new ClaseZ(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesZ = new ClasesZ();



