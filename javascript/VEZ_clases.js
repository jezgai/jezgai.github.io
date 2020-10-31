
class TalentosComunes {
	static talentos() {
		return [ "Ambidextro","Chi","Emboscar","Espíritu americano","Forzudo","Inmunidad a la plaga","Luchador experto X","Mascota fiel","Meditación sanadora","Presencia influyente","Vigor","Vista aguda" ];
	}
}

class ClaseZ extends ClaseBase {

	constructor(clase) {
		super(clase);
		
		this._ntalentos = clase.ntalentos;
		this._pS = clase.pS;
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
