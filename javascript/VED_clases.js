class ClaseDj extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._pod = clase.pod;
	}
		
	get pod() {
		return this._pod;
	}
	set pod(value) {
		this._pod = value;
	}

	talentos(nivel) {
		var tal = [];
		var intal=0;
		for (intal=0; intal<this._talentos.length && nivel>=this._talentos[intal].niv; intal++) {
			var ital=0;
			for (ital=0; ital < this._talentos[intal].tln.length; ital++) {
				tal.push(this._talentos[intal].tln[ital]);
			}
		}
		return tal;
	}

	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}

}

class ClasesDj {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Jinete del Desierto",
			  talentos : [ { niv : 1, tln : ["Lucha con X", "Beduino"]}, { niv : 6, tln : ["Encontrar punto débil", "Mente clara"]} ],
			  daguante : 8,
			  atrs : [ "FUE" , "DES", "CON" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11],
			},{
			  nombre : "Mercenario Bárbaro",
			  talentos : [ { niv : 1, tln : ["Furia", "Rocoso"]}, { niv : 6, tln : ["Ataque adicional", "Sanguinario"]} ],
			  daguante : 10,
			  atrs : [ "CON", "FUE", "DES" ],
			  atq : [ 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9, 10, 10],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
			},
			{
			  nombre : "Ratón Callejero",
			  talentos : [ { niv : 1, tln : ["Escurridizo" , "Dedos Ágiles"]}, { niv : 6, tln : ["Agilidad felina", "Tirador"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "INT", "CAR" ],
			  atq : [ 0, 1, 1, 1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 8],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11],
			},
			{
			  nombre : "Cortesano de Palacio",
			  talentos : [ { niv : 1, tln : ["Zalamero" , "Chistoso"]}, { niv : 6, tln : ["Sensibilidad Magica", "Ingenioso"]} ],
			  daguante : 6,
			  atrs : [ "CAR", "DES", "INT" ],
			  atq : [ 0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6],
			  pod : [ 0, 0, 0, 0, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6],
			  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10],
			},
			{
			  nombre : "Hechicero de las Dunas",
			  talentos : [ { niv : 1, tln : ["Sensibilidad Mágica", "Agua de vida"]}, { niv : 6, tln : ["Absorción de poder", "Sirviente animal"]} ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Comedor de Escarabajos",
			  talentos : [ { niv : 1, tln : ["Sensibilidad Mágica", "Resucitar muertos"]}, { niv : 6, tln : ["Rey de los muertos", "Devorador de cadáveres"]} ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB", "DES" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			  pod : [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Portador de Bendiciones",
			  talentos : [ { niv : 1, tln : ["Sensibilidad a la fe", "Expulsar muertos"]}, { niv : 6, tln : ["Manos sanadoras", "Bendición de Fuerza" ]} ],
			  daguante : 6,
			  atrs : [ "SAB", "INT", "CON" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Nómada de los Oasis",
			  talentos : [ { niv : 1, tln : ["Transformación", "Fortaleza Animal"]}, { niv : 6, tln : ["Dominio Animal", "Nómada Salvaje"]} ],
			  daguante : 6,
			  atrs : [ "SAB", "INT" , "DES" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7],
			  pod : [ 0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11],
			},
			{
			  nombre : "Invocador de Genios",
			  talentos : [ { niv : 1, tln : ["Dedos Ágiles", "Protección del Genio"]}, { niv : 6, tln : ["Desviar Proyectiles", "Llamada al Genio"]} ],
			  daguante : 4,
			  atrs : [ "INT" , "DES", "SAB" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			  pod : [ 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
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
				return new ClaseDj(this._clases[iclases]);
			}
		}
		return new ClaseDj(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesDj = new ClasesDj();

