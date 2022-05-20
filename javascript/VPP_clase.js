class ClaseVPP {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._ntalentos = clase.ntalentos;
		this._daguante = clase.daguante;
		this._competencia = clase.competencia;
        this._rama = clase.rama;
        this._pep = clase.pep;
        this._objRama = ramas.rama(this._rama);
	}
	
	get nombre() {
		return this._nombre;
	}
	set nombre(value) {
		this._nombre = value;
	}
	
	get talentos() {
		return this._talentos;
	}
	set talentos(value) {
		this._talentos = value;
	}
	
	get daguante() {
		return this._daguante;
	}
	set daguante(value) {
		this._daguante = value;
	}
		
	get competencia() {
		return this._competencia;
	}
	set competencia(value) {
		this._competencia = value;
	}

	get rama() {
		return this._rama;
	}
	set rama(value) {
		this._rama = value;
	}

	get pep() {
		return this._pep;
	}
	set pep(value) {
		this._pep = value;
	}

    pep(nivel, modificador) {
        var valor = (nivel * this._pep) + modificador;
        if ( valor < 1 )
            valor = 1;
        return valor;
    }

    pv(nivel, modificador) {
        var valor = 4 + this._daguante + modificador;
        var indice = 0;
        for (indice = 1; indice < nivel; indice++) {
            var incremento = Comun.random(this._daguante,1) + modificador;
            if ( incremento < 1 )
                incremento = 1;
            valor += incremento;
        }
        return valor;
    }


}

class ClasesVPP {
	
	constructor() {
		this._clasesVPP =
		[
			{
			  nombre : "Amazona",
			  talentos : { nfijos: 2, fijos: [ "Tradición amazónica", "Orgullo femenino" ], elegibles: [ "Ligera/o de cascos", "Firmeza", "Ataque encadenado", "Temible" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
			{
			  nombre : "Aristócrata",
			  talentos : { nfijos: 2, fijos: [ "Suspicacias", "Recursos e influencias" ], elegibles: [ "Partidarios", "Orador", "Aristócrata guerrero", "Compañero de aventuras" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 4,
			  competencia : "No puedes llevar protecciones. Puedes usar dagas, bastones y arcos",
			  rama : "Heros Felix",
              pep : 1,
			},
			{
			  nombre : "Asesino",
			  talentos : { nfijos: 2, fijos: [ "Discreción profesional", "Letalidad" ], elegibles: [ "Ligera/o de cascos", "Sutileza", "El camino de X", "Lucha sucia" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 6,
			  competencia : "Puedes llevar armas y armaduras y armas ligeras pero no cascos ni escudos",
			  rama : "Heros Habilis",
              pep : 1,
			},
			{
			  nombre : "Aventurero",
			  talentos : { nfijos: 2, fijos: [ "Intrépido", "Diestro con X" ], elegibles: [ "Sutileza", "Ligero de cascos", "Avezado en lo suyo", "Firmeza" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 6,
			  competencia : "Puedes llevar cualquier arma y protección, mientras ninguna de las dos sea pesada",
			  rama : "Heros Habilis",
              pep : 1,
			},
			{
			  nombre : "Bárbaro",
			  talentos : { nfijos: 2, fijos: [ "Coraje", "Instrucción bárbara de X" ], elegibles: [ "Más que piel", "Pertrechado para la guerra", "Destructor", "Furia salvaje" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
			{
			  nombre : "Bardo",
			  talentos : { nfijos: 2, fijos: [ "Inspirar", "Orador" ], elegibles: [ "Bardo de batalla", "Ligero de cascos", "Música divina", "Suspicacias" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 4,
			  competencia : "No puedes llevar protecciones salvo cascos parciales. Solo puedes usar bastones, dagas y hondas",
			  rama : "Heros Felix",
              pep : 1,
			},
			{
			  nombre : "Gladiador",
			  talentos : { nfijos: 2, fijos: [ "Luchador de la arena", "Diestro con X" ], elegibles: [ "Ataque encadenado", "Firmeza", "Curtido en la batalla", "Temible" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
			{
			  nombre : "Héroe divino",
			  talentos : { nfijos: 1, fijos: [ "Físico Hercúleo", "Diseñado por Ares", "Héroe Clásico" ], elegibles: [ "Invulnerable", "Favor de X", "Firmeza", "Compañero de aventuras", "Ataque encadenado", "Temible", "Artefacto divino" ] },
              ntalentos : [ 2, 2, 3, 3, 3 ],
			  daguante : 10,
			  competencia : "Puedes llevar cualquier arma o armadura",
			  rama : "Heros Fortis",
              pep : 2,
			},
			{
			  nombre : "Místico",
			  talentos : { nfijos: 2, fijos: [ "Fe", "Trucos y milagros" ], elegibles: [ "Partidarios", "Orador", "Favor de X", "Compañero de aventuras" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 4,
			  competencia : "No puedes llevar protecciones. Solo puedes usar bastones, dagas y hondas",
			  rama : "Heros Felix",
              pep : 1,
			},
			{
			  nombre : "Pícaro",
			  talentos : { nfijos: 2, fijos: [ "Lucha sucia", "Ligera/o de cascos" ], elegibles: [ "Sutileza", "Ligero de cascos", "Avezado en lo suyo", "Firmeza" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 6,
			  competencia : "Solo puedes llevar protecciones y armas ligeras",
			  rama : "Heros Habilis",
              pep : 1,
			},
			{
			  nombre : "Protector",
			  talentos : { nfijos: 2, fijos: [ "Firmeza", "Guardaespaldas" ], elegibles: [ "Curtido en la batalla", "Tanque andante", "Suspicacias", "Temible" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
			{
			  nombre : "Soldado",
			  talentos : { nfijos: 2, fijos: [ "Firmeza", "Instrucción de X" ], elegibles: [ "Curtido en la batalla", "Pertrechado para la guerra", "Ataque encadenado", "Temible" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
			{
			  nombre : "Legionario",
			  talentos : { nfijos: 2, fijos: [ "Firmeza", "Instrucción legionaria" ], elegibles: [ "Curtido en la batalla", "Tanque andante", "Temible", "Toma y daca" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
			{
			  nombre : "Hechicero",
			  talentos : { nfijos: 2, fijos: [ "Escuela mágica", "Esencia interna" ], elegibles: [ "Artefacto divino", "Compañero de aventuras", "Orador", "Suspicacias" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 4,
			  competencia : "No puedes llevar protecciones. Solo puedes usar bastones, dagas y hondas",
			  rama : "Heros Felix",
              pep : 1,
			},
			{
			  nombre : "Espartano",
			  talentos : { nfijos: 2, fijos: [ "Coraje", "Instrucción espartana" ], elegibles: [ "Adrenalina curativa", "Curtido en la batalla", "Defensa hoplita", "Ira espartana" ] },
              ntalentos : [ 3, 3, 4, 4, 4 ],
			  daguante : 8,
			  competencia : "Puedes llevar cualquier arma o protección",
			  rama : "Heros Fortis",
              pep : 1,
			},
		]
	}
	
	get clasesVPP() {
		return this._clasesVPP;
	}

	set clasesVPP(value) {
		this._clasesVPP = value;
	}
	
	get clases() {
		return this._clasesVPP;
	}

	clase(nombre) {
		var iclasesVPP=0;
		for (iclasesVPP=0; iclasesVPP<this._clasesVPP.length; iclasesVPP++) {
			if ( this._clasesVPP[iclasesVPP].nombre == nombre ) {
				return new ClaseVPP(this._clasesVPP[iclasesVPP]);
			}
		}
		return new ClaseVPP(this._clasesVPP[Comun.random(this._clasesVPP.length, 0)]);
	}
	
	
}

let clasesVPP = new ClasesVPP();
