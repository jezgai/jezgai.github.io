class Clase extends ClaseBase {

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

class Clases {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Guerrero",
			  talentos : [ { niv : 1, tln : ["Lucha con X", "Ataques Múltiples"]}, { niv : 6, tln : ["Ataque certero"]} ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON", "DES" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9, 9],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Hechicero",
			  talentos : [ { niv : 1, tln : ["Sensibilidad Mágica", "Transferir Esencia"]}, { niv : 6, tln : ["Sirviente animal"]} ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Bribon",
			  talentos : [ { niv : 1, tln : ["Emboscar" , "Dedos Ágiles"]}, { niv : 6, tln : ["Leer magia"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "INT", "CAR" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 7],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11],
			},
			{
			  nombre : "Bardo",
			  talentos : [ { niv : 1, tln : ["Leer lenguajes" , "Encantar persona/monstruo"]}, { niv : 6, tln : ["Sensibilidad Magica"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "INT", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
			  pod : [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 10, 11, 12],
			  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10],
			},
			{
			  nombre : "Clerigo",
			  talentos : [ { niv : 1, tln : ["Sensibilidad a la fe", "Expulsar muertos"]}, { niv : 6, tln : ["Manos sanadoras"]} ],
			  daguante : 6,
			  atrs : [ "INT" , "SAB", "CON" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
			  pod : [ 1, 2, 4, 5, 7, 8, 10, 12, 14, 15, 17, 19, 20, 22],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
			},
			{
			  nombre : "Multiforme",
			  talentos : [ { niv : 1, tln : ["Transformación" , "Guardabosques"]}, { niv : 6, tln : ["Habla animal"]} ],
			  daguante : 6,
			  atrs : [ "DES" , "SAB", "FUE" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 7],
			  pod : [ 1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 9, 9, 10, 10],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 11, 11, 11],
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
				return new Clase(this._clases[iclases]);
			}
		}
		return new Clase(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

class Oficios {
	constructor() {
		this.oficios = [
						{ rango: 2, profesion: "Albañil", raza: "Humano", equipo: "Paletina (1d4), ladrillo (1d6) y 1d4 mo" },
						{ rango: 4, profesion: "Alfarero", raza: "Humano", equipo: "Buril (1d4), rasquetas y 1d4 mo" },
						{ rango: 5, profesion: "Artista", raza: "Elfo", equipo: "Instrumento musical y 1d6 mo" },
						{ rango: 7, profesion: "Barbero", raza: "Humano", equipo: "Navaja (1d4) y 1d6 mo" },
						{ rango: 10, profesion: "Borracho", raza: "Enano", equipo: "Botella de cerveza y 1d4 mo" },
						{ rango: 11, profesion: "Bufón", raza: "Humano", equipo: "Trucos y 1d4 mo" },
						{ rango: 13, profesion: "Calafate", raza: "Humano", equipo: "Brocha, juego de 2 gubias (1d4) y 1d4 mo" },
						{ rango: 14, profesion: "Campanero", raza: "Humano", equipo: "Tapones y 1d6 mo" },
						{ rango: 16, profesion: "Cantero", raza: "Enano", equipo: "Cincel (1d4), mazo (1d4) y 1d4 mo" },
						{ rango: 18, profesion: "Cartógrafo", raza: "Mediano", equipo: "Kit de dibujo, mapas y 1d6 mo" },
						{ rango: 22, profesion: "Cazador", raza: "Humano", equipo: "Arco largo (1d6), hacha (1d4) y 1d6 mo" },
						{ rango: 24, profesion: "Cocinero", raza: "Mediano", equipo: "Cacerola, cuchillo (1d4) y 1d4 mo" },
						{ rango: 26, profesion: "Colchonero", raza: "Humano", equipo: "Vara (1d6), bolso con aguja e hilo y 1d6 mo" },
						{ rango: 27, profesion: "Constructor (maestro)", raza: "Humano", equipo: "Compás (1d4), planos y 1d6 mo" },
						{ rango: 28, profesion: "Correveidile", raza: "Mediano", equipo: "Mochila, viales y 1d4 mo" },
						{ rango: 30, profesion: "Curandero", raza: "Elfo", equipo: "Agua sagrada (cura 1d4), símbolo religioso (madera) y 1d6 mo" },
						{ rango: 32, profesion: "Ebanista", raza: "Mediano", equipo: "Gubias (1d4) y 1d6 mo" },
						{ rango: 33, profesion: "Enterrador", raza: "Humano", equipo: "Pico (1d6), pala (1d4) y 1d6 mo" },
						{ rango: 35, profesion: "Escriba", raza: "Mediano", equipo: "Kit de escritura, libro y 2d4 mo" },
						{ rango: 40, profesion: "Granjero", raza: "Humano", equipo: "Rastrillo (1d6) y 1d6 mo" },
						{ rango: 42, profesion: "Guardabosques", raza: "Elfo", equipo: "Arco corto (1d4) y 1d4 mo" },
						{ rango: 44, profesion: "Herrero", raza: "Enano", equipo: "Martillo (1d6) y 2d6 mo" },
						{ rango: 47, profesion: "Ladronzuelo", raza: "Mediano", equipo: "Tirachinas (1d4), daga (1d4) y 1d6 mo" },
						{ rango: 51, profesion: "Leñador", raza: "Humano", equipo: "Hacha de mano (1d6) y 1d4 mo" },
						{ rango: 53, profesion: "Losero", raza: "Humano", equipo: "Cincel (1d4), mazo (1d4) y 1d4 mo" },
						{ rango: 54, profesion: "Luthier", raza: "Humano", equipo: "Juego de 4 gubias (1d4), cuerdas (3m) y 2d4 mo" },
						{ rango: 55, profesion: "Manporrero", raza: "Humano", equipo: "Cubo y 1d6 mo" },
						{ rango: 57, profesion: "Matasanos", raza: "Humano", equipo: "Potingues (cura 1d6), gasas y 1d6 mo" },
						{ rango: 60, profesion: "Matón", raza: "Enano", equipo: "Hacha (1d6), escudo y 1d6 mo" },
						{ rango: 64, profesion: "Mendigo", raza: "Humano", equipo: "Mascota y bastón (1d6)" },
						{ rango: 66, profesion: "Minero", raza: "Enano", equipo: "Pico (1d6) y 2d4 mo" },
						{ rango: 68, profesion: "Molinero", raza: "Humano", equipo: "Saquito de grano, cantimplora y 1d4 mo" },
						{ rango: 69, profesion: "Monaguillo", raza: "Humano", equipo: "Botella de vino y 1d4 mo" },
						{ rango: 71, profesion: "Mozo de cuadra", raza: "Humano", equipo: "Látigo (1d6), cantimplora y 1d4 mo" },
						{ rango: 72, profesion: "Noble", raza: "Elfo", equipo: "Armadura ligera, espada corta (1d6) y 3d6 mo" },
						{ rango: 74, profesion: "Panadero", raza: "Mediano", equipo: "Pan, amasador (1d4) y 2d6 mo" },
						{ rango: 78, profesion: "Pastor", raza: "Humano", equipo: "Bastón (1d6) y 1d4 mo" },
						{ rango: 80, profesion: "Pescador", raza: "Mediano", equipo: "Caña de pescar, cuchillo (1d4) y 1d6 mo" },
						{ rango: 81, profesion: "Pregonero", raza: "Humano", equipo: "Bocina, cantimplora y 1d4mo" },
						{ rango: 83, profesion: "Quesero", raza: "Mediano", equipo: "Queso curado, cuajo vegetal y 1d4 mo" },
						{ rango: 84, profesion: "Remendador de redes", raza: "Humano", equipo: "Huso (30m hilo fuerte), agujas grandes (1d4+1) y 1d4 mo" },
						{ rango: 85, profesion: "Sacerdote", raza: "Humano", equipo: "Agua bendita (cura 1d4), símbolo religioso (madera) y 1d6 mo" },
						{ rango: 86, profesion: "Sereno", raza: "Humano", equipo: "Bocina, farol y 1d4 mo" },
						{ rango: 88, profesion: "Sillero", raza: "Humano", equipo: "Gubias (1d4), listones (1d6) y 1d4 mo" },
						{ rango: 90, profesion: "Soldado", raza: "Humano", equipo: "Casco, lanza (1d6) y 1d6 mo" },
						{ rango: 91, profesion: "Soplador de vidrio", raza: "Humano", equipo: "Vara de soplar (1d6), 3 viales y 1d4 mo" },
						{ rango: 94, profesion: "Tejedor", raza: "Humano", equipo: "Huso (15m hilo), agujas (1d4-1) y 1d4 mo" },
						{ rango: 96, profesion: "Tonelero", raza: "Mediano", equipo: "Aros de hierro, maza (1d4) y 1d4 mo" },
						{ rango: 99, profesion: "Tratante de ganado", raza: "Humano", equipo: "Mulo, cuerda común y 1d6 mo" },
						{ rango: 100, profesion: "Trotamundos", raza: "Elfo", equipo: "Bastón (1d6) y 1d4 mo" }
		]
	}
	
	oficio() {
		var numero = Comun.random(100,1);
		var indice=0;
		for (indice=0; indice<this.oficios.length; indice++) {
			if ( numero <= this.oficios[indice].rango ) {
				return this.oficios[indice];
			}
		}
		return this.oficios[99];
	}
}

let clases = new Clases();

let oficios = new Oficios();
