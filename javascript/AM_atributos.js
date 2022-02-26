
class Atributos {
	
	constructor() {
		this._dado = 6;
		this._ntiradas = 3; // Numero de dados por atributo
		this._ntiradasextras = 0; // Si se tiran dados extras por atributo (para quedarse con los resultados mejores)
		this._excesoatributos = 0; // Cuantas tiradas se lanzan de más sobre el número de atributos
		this._atributos = 
		[
			{ nbatr : "Fuerza" , nbmod : "FUE", valor : 0, modif : 0  },
			{ nbatr : "Destreza" , nbmod : "DES", valor : 0, modif : 0  },
			{ nbatr : "Constitucion" , nbmod : "CON", valor : 0, modif : 0  },
			{ nbatr : "Inteligencia" , nbmod : "INT", valor : 0, modif : 0  },
			{ nbatr : "Sabiduria" , nbmod : "SAB", valor : 0, modif : 0  },
			{ nbatr : "Carisma" , nbmod : "CAR", valor : 0, modif : 0  },
		];
		this.calculaValores();
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
	
	calculaValores() {
		var i=0;
		for (i=0; i< 6; i++) {
			this._atributos[i].valor = this.valoratr();
			this._atributos[i].modif = this.modif(this._atributos[i].valor);
		}
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
	
	
	modif(valor) {
		
		if ( valor <= 3 )
		{
			return -1;
		}
		else if ( valor <= 5 ) 
		{
			return -2;
		}
		else if ( valor <= 8 )
		{
			return -1;
		}
		else if ( valor <= 12 )
		{
			return 0;
		}
		else if ( valor <= 15 )
		{
			return 1;
		}
		else if ( valor <= 17 )
		{
			return 2;
		}
		else {
			return 3;
		}
		
	}
	
	
	
	
}


