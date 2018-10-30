
class Atributos {
	
	constructor() {
		this._dado = 6;
		this._ntiradas = 3; // Numero de dados por atributo
		this._ntiradasextras = 0; // Si se tiran dados extras por atributo (para quedarse con los resultados mejores)
		this._excesoatributos = 1; // Cuantas tiradas se lanzan de más sobre el número de atributos
		this._atributos = 
		[
			{ nbatr : "Fuerza" , nbmod : "FUE" },
			{ nbatr : "Destreza" , nbmod : "DES" },
			{ nbatr : "Constitucion" , nbmod : "CON" },
			{ nbatr : "Inteligencia" , nbmod : "INT" },
			{ nbatr : "Sabiduria" , nbmod : "SAB" },
			{ nbatr : "Carisma" , nbmod : "CAR" },
		]
	}
	
	get dado() {
		return this._dado;
	}
	set dado(value) {
		this._dado = value;
	}
	
	get ntiradas() {
		return this._ntiradas;
	}
	set ntiradas(value) {
		this._ntiradas = value;
	}
	
	get ntiradasextras() {
		return this._ntiradasextras;
	}
	set ntiradasextras(value) {
		this._ntiradasextras = value;
	}
	
	get excesoatributos() {
		return this._excesoatributos;
	}
	set excesoatributos(value) {
		this._excesoatributos = value;
	}
	
	get atributos() {
		return this._atributos;
	}
	
	atributoMod(nbmod) {
		var iatr=0;
		for (iatr=0; iatr < this._atributos.length; iatr++) {
			if (this._atributos[iatr].nbmod == nbmod ) {
				return iatr;
			}
		}
		return -1;
	}
	
	atributoNombre(nbatr) {
		var iatr=0;
		for (iatr=0; iatr < this._atributos.length; iatr++) {
			if (this._atributos[iatr].nbatr == nbatr ) {
				return iatr;
			}
		}
		return -1;
	}
	
	valoratr() {
		var ivalatr = 0;
		var valatr = [];
		for (ivalatr=0; ivalatr<this._ntiradas + this._ntiradasextras; ivalatr++ ) {
			valatr.push(Comun.random(this._dado, 1));
		}
		valatr.sort(function(a, b){return b-a});
		var res = 0;
		for (ivalatr=0; ivalatr<this._ntiradas ; ivalatr++ ) {
			res += valatr[ivalatr];
		}
		return res;
	}
	
	mezclaatrs(atrsclase) {
		
		var iatr=0;
		var atrs = [];
		for (iatr=0;iatr<atrsclase.length; iatr++) {
			atrs.push(this.atributoMod(atrsclase[iatr]));
		}
		var resto = [];
		for (iatr=0; iatr < this._atributos.length; iatr++) {
			var iatrsclase = 0;
			for (iatrsclase = 0; iatrsclase < atrsclase.length; iatrsclase++) {
				if ( this._atributos[iatr].nbmod == atrsclase[iatrsclase] ) {
					break;
				}
			}
			if ( iatrsclase >= atrsclase.length) {
				resto.push(iatr);
			}
		}
		resto = Comun.shuffle(resto);
		for (iatr=0; iatr< resto.length; iatr++) {
			atrs.push(resto[iatr]);
		}
		return atrs;
		
	}
	
	valores(atrsclase) {
		var ival=0;
		var atrs = this.mezclaatrs(atrsclase);
		var vatrs = [];
		var vals = [];
		
		
		for (ival=0; ival < this._atributos.length; ival++) {
			vatrs.push(this.valoratr());
			vals.push(0);
		}
		for (ival=0; ival < this._excesoatributos; ival++) {
			vatrs.push(this.valoratr());
		}
		vatrs.sort(function(a, b){return b-a});
		
		for (ival=0; ival <atrs.length; ival++) {
			vals[atrs[ival]] = vatrs[ival];
		}
		return vals;
	}
	
	static modif(valor) {
		if (valor <= 3 ) {
			return -2;
		}
		else if (valor <= 6) {
			return -1;
		}
		else if (valor <= 14) {
			return 0;
		}
		else if (valor <= 17) {
			return 1;
		}
		return 2;
	}
	
}


let atributos = new Atributos();


