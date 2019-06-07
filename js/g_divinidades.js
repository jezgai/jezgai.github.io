class Divinidades {

	constructor() {
		this._divinidades = [ 
			"Zeus",
			"Poseidon",
			"Atenea",
			"Ares",
			"Artemisa",
			"Apolo",
			"Hefesto",
			"Hermes",
			"Hera",
			"Dioniso",
			"Hades",
			"Persefone",
			"Juez"
		];
	}
	
	get divinidades() 
	{
		return this._divinidades.clone().shuffle();
	}
	
}


let divinidades = new Divinidades();
