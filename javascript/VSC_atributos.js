
class Atributos {
	
	constructor() {
		this._dado = 6;
		this._ntiradas = 3; // Numero de dados por atributo
		this._ntiradasextras = 0; // Si se tiran dados extras por atributo (para quedarse con los resultados mejores)
		this._excesoatributos = 1; // Cuantas tiradas se lanzan de más sobre el número de atributos
		this.atributos = 
		[
			{ nbatr : "Fuerza" , nbmod : "FUE" },
			{ nbatr : "Destreza" , nbmod : "DES" },
			{ nbatr : "Constitucion" , nbmod : "CON" },
			{ nbatr : "Inteligencia" , nbmod : "INT" },
			{ nbatr : "Sabiduria" , nbmod : "SAB" },
			{ nbatr : "Carisma" , nbmod : "CAR" },
		]
	}
	
	atributoMod(nbmod) {
		var iatr=0;
		for (iatr=0; iatr < this.atributos.length; iatr++) {
			if (this.atributos[iatr].nbmod == nbmod ) {
				return iatr;
			}
		}
		return -1;
	}
	
	atributoNombre(nbatr) {
		var iatr=0;
		for (iatr=0; iatr < this.atributos.length; iatr++) {
			if (this.atributos[iatr].nbatr == nbatr ) {
				return iatr;
			}
		}
		return -1;
	}
	
	valoresatr() {
		var ival = 0;
		var valores = [];
		for (ival=0; ival<10; ival++) {
			valores.push(Comun.dadosMultiples(3, 6, 1));
		}
		valores.sort(function(a, b){return b-a});
		
		var valatr = [];
		for (ival = 0; ival<5; ival++) {
			valatr.push(valores[ival]);
		}
		valatr.push(valores[9]);
		valatr = Comun.shuffle(valatr);
		return valatr;
	}
	
	static modif(valor) {
		if (valor <= 4 ) {
			return -2;
		}
		else if (valor <= 7) {
			return -1;
		}
		else if (valor <= 13) {
			return 0;
		}
		else if (valor <= 16) {
			return 1;
		}
		return 2;
	}
	

	
}


let atributos = new Atributos();


