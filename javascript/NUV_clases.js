class ClaseNUV {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._atrs = clase.atrs;
		this._daguante = clase.daguante;
		this._mov = clase.mov;
		this._paga = clase.paga;
		this._equipo = clase.equipo;
		this._ins = clase.ins;
		this._plantillaPDF = clase.plantillaPDF;
		
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
	get mov() {
		return this._mov;
	}
	get paga() {
		return this._paga;
	}
	get equipo() {
		return this._equipo;
	}
	get ins() {
		return this._ins;
	}
	get plantillaPDF() {
		return this._plantillaPDF;
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
	set mov(value) {
		this._mov = value;
	}
	set paga(value) {
		this._paga = value;
	}
	set equipo(value) {
		this._equipo = value;
	}
	set ins(value) {
		this._ins = value;
	}

}

class ClasesNUV {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Bicho raro",
			  plantillaPDF : "NUVbichoraro.pdf",
			  talentos : [ "Ahorrador/a", "Caja de sorpresas", "Observador/a", "Personalidad fuerte", "Sensible a lo sobrenatural", "Talento sorprendente" ],
			  atrs : [ "SAB" ],
			  mov: 10, 
			  daguante : 6,
			  ins : 0,
			  paga: 2,
			  equipo : "Bici de carretera",
			},
			{
			  nombre : "Bromista",
			  plantillaPDF : "NUVbromista.pdf",
			  talentos : [ "Bomba de humo", "Chiste", "Compañero fiel", "Majo/a", "Michelines", "Soy todo oídos" ],
			  atrs : [ "CAR" ],
			  mov: 10, 
			  daguante : 6,
			  ins : 0,
			  paga: 2,
			  equipo : "Petardos, mechero y bici de carretera",
			},
			{
			  nombre : "Cerebrito",
			  plantillaPDF : "NUVcerebrito.pdf",
			  talentos : [ "Cachivache", "Chispas", "Cultura pop", "Fisgón/a", "Libro gordo de Petete", "Racional" ],
			  atrs : [ "INT" ],
			  mov: 10, 
			  daguante : 4,
			  ins : 0,
			  paga: 3,
			  equipo : "Mochila, libros y bici de carretera",
			},
			{
			  nombre : "Deportista",
			  plantillaPDF : "NUVdeportista.pdf",
			  talentos : [ "As del manillar", "Cachas", "Espabilado/a", "Firme", "Intimidante", "Pendenciero/a" ],
			  atrs : [ "CON" , "FUE" , "DES" ],
			  mov: 12, 
			  daguante : 8,
			  ins : 1,
			  paga: 1,
			  equipo : "Chándal o ropa deportiva, un accesorio deportivo (bate de béisbol, stick, etc.) y vehículo a elegir",
			},
			{
			  nombre : "Explorador/a",
			  plantillaPDF : "NUVexplorador.pdf",
			  talentos : [ "Amigo Félix", "Club de Exploradores", "Escurridizo/a", "MacGyver", "Ojo de halcón", "Primeros auxilios" ],
			  atrs : [ "DES" ],
			  mov: 10, 
			  daguante : 6,
			  ins : 2,
			  paga: 2,
			  equipo : "Tirachinas, linterna y bici de carretera",
			},
			{
			  nombre : "Rebelde",
			  plantillaPDF : "NUVrebelde.pdf",
			  talentos : [ "Chorizo/a", "Como la palma de mi mano", "Contactos", "Cosas de mayores", "Independiente", "Valiente" ],
			  atrs : [ "FUE" ],
			  mov: 10, 
			  daguante : 6,
			  ins : 1,
			  paga: 1,
			  equipo : "Navaja, mechero y monopatín o bici de carretera",
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
				return new ClaseNUV(this._clases[iclases]);
			}
		}
		return new ClaseNUV(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesNUV = new ClasesNUV();


