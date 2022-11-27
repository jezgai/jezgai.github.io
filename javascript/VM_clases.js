
class ClaseVM extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._ntalentos = clase.ntalentos;
		this._ene = clase.ene;
	}
	
	ene(nivel) {
		var inene = nivel - 1;
		if ( nivel > this._ene.length ) {
			inene = this._ene.length - 1;
		}
		return this._ene[inene];
	}
	

	talentos(nivel) {
		
		var intal = nivel;
		if ( nivel > this._ntalentos.length ) {
			intal = this._ntalentos.length;
		}
		
		var ttalaux = Comun.shuffle(this._talentos);
		
		var taln = [];
		var ital=0;
		var ntal = this._ntalentos[intal];
		for (ital = 0; ital < ntal ; ital++ ) {
			taln.push(this._talentos[ital]);
		}
		
		return taln;
	}


}

class ClasesVM {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Dinámico",
			  talentos : [ "Reflejos (P)", "Velocidad (A)", "Vuelo (A)", "Teletransporte (A)", "Trepamuros (P)" ],
			  ntalentos : [ 2, 2, 3, 3, 3, 4, 4, 4, 5, 5 ],
			  daguante : 6,
			  atrs : [ "DES" , "SAB" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5 ],
			  ene : [ 1, 1, 2, 3, 3, 4, 4, 5, 6, 6 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			},
			{
			  nombre : "Elemental",
			  talentos : [ "Escudo Elemental (P)", "Explosión (A)", "Golpe Elemental (A)", "Inmunidad (P)", "Rayo de Energía (A)" ],
			  ntalentos : [ 2, 2, 3, 3, 3, 4, 4, 4, 5, 5 ],
			  daguante : 6,
			  atrs : [ "FUE"  ],
			  atq : [ 0, 1, 2, 3, 3, 4, 4, 5, 5, 6 ],
			  ene : [ 2, 3, 3, 4, 4, 5, 5, 6, 6, 7 ],
			  ins : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
			},
			{
			  nombre : "Materia",
			  talentos : [ "Absorber Materia (P)", "Cambiaformas (A)", "Controlar (A)", "Crear (P)", "Transformar (A)" ],
			  ntalentos : [ 2, 2, 3, 3, 3, 4, 4, 4, 5, 5 ],
			  daguante : 6,
			  atrs : [ "DES" , "FUE" ],
			  atq : [ 0, 0, 1, 2, 2, 3, 3, 4, 4, 5 ],
			  ene : [ 2, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  ins : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
			},
			{
			  nombre : "Parásito",
			  talentos : [ "Anular poder (A)", "Cambio de aspecto (P)", "Copiar Poder (P)", "Debilitamiento (A)", "Intercambio (P)" ],
			  ntalentos : [ 2, 2, 3, 3, 3, 4, 4, 4, 5, 5 ],
			  daguante : 6,
			  atrs : [ "CAR" , "INT" ],
			  atq : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
			  ene : [ 0, 1, 2, 3, 4, 4, 5, 5, 6, 7 ],
			  ins : [ 0, 1, 1, 2, 3, 4, 4, 5, 5, 6 ],
			},
			{
			  nombre : "Psíquico",
			  talentos : [ "Ataque mental (A)", "Genio (P)", "Orden (A)", "Telepatía (P)", "Telequinesis (A)" ],
			  ntalentos : [ 2, 2, 3, 3, 3, 4, 4, 4, 5, 5 ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 2, 3, 3 ],
			  ene : [ 2, 3, 4, 5, 6, 7, 9, 10, 11, 13 ],
			  ins : [ 1, 2, 2, 3, 3, 4, 4, 5, 5, 6 ],
			},
			{
			  nombre : "Titán",
			  talentos : [ "Armadura (P)", "Arma (P)", "Fortaleza (P)", "Potencia (P)", "Regeneración (A)" ],
			  ntalentos : [ 2, 2, 3, 3, 3, 4, 4, 4, 5, 5 ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  ene : [ 0, 1, 2, 2, 3, 3, 3, 4, 4, 5 ],
			  ins : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
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
				return new ClaseVM(this._clases[iclases]);
			}
		}
		return new ClaseVM(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesVM = new ClasesVM();
