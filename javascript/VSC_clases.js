class Linajes {
	constructor() {
		this.linajes = 
		[
			{
				nombre: "Sangre prístina",
				poder: 2,
				nivel: 1,
				ptos: 5,
				maxptos: 1
				
			},
			{
				nombre: "Sangre cruzada",
				poder: 0,
				nivel: 0,
				ptos: 5,
				maxptos: 1
			},
			{
				nombre: "Squabble",
				poder: 0,
				nivel: 0,
				ptos: 9,
				maxptos: 5
			}
		]
	}
	
	linaje(nombre) {
		var indice=0;
		for (indice=0; indice<this.linajes.length; indice++) {
			if ( this.linajes[indice].nombre == nombre ) {
				return this.linajes[indice];
			}
		}
		return this.clases[Comun.random(this.clases.length, 0)];
	}
}

class Clases {
	
	constructor() {
		this.clases =
		[
			{
			  nombre : "Académico",
			  ventajas : [ "Magia discreta", "Varita excepcional", "Grimorio parlante", "Adivinación" ],
			  ptoshab : 2,
			  habilidades : [ "Transformar y Erudición" ],
			  daguante : 4,
			  defensa : 8,
			  ataquecc : 0,
			  ataquead : 0,
			  instintos : 2,
			  poder : 3,
			  linajes: [ "Sangre prístina", "Sangre cruzada" ]
			},
			{
			  nombre : "Comerciante",
			  ventajas : [ "Gran fortuna", "Varita excepcional", "Objeto mágico", "Contactos turbios" ],
			  ptoshab : 2,
			  habilidades : [ "Imbuir y Artesanía", "Pócimas y Saber Squabble" ],
			  daguante : 4,
			  defensa : 10,
			  ataquecc : 1,
			  ataquead : 1,
			  instintos : 4,
			  poder : 1,
			  linajes: [ "Sangre prístina", "Sangre cruzada" ]
			},
			{
			  nombre : "Estrella retirada",
			  ventajas : [ "Gran fortuna", "Mundialmente conocido", "Objeto mágico", "Líder del equipo" ],
			  ptoshab : 1,
			  habilidades : [ "Vuelo y Alerta" ],
			  daguante : 6,
			  defensa : 12,
			  ataquecc : 4,
			  ataquead : 4,
			  instintos : 4,
			  poder : 0,
			  linajes: [ "Sangre prístina", "Sangre cruzada" ]
			},
			{
			  nombre : "Exconvicto",
			  ventajas : [ "Adivinación", "Mundialmente conocido", "Voluntad indomable", "Contactos turbios" ],
			  ptoshab : 1,
			  habilidades : [ "Disciplinas sombrías y Disimulo" ],
			  daguante : 6,
			  defensa : 10,
			  ataquecc : 4,
			  ataquead : 2,
			  instintos : 6,
			  poder : 2,
			  linajes: [ "Sangre prístina", "Sangre cruzada" ]
			},
			{
			  nombre : "Ser mágico",
			  ventajas : [ "Metamorfosis", "Adivinación", "Voluntad indomable", "Magia discreta" ],
			  ptoshab : 0,
			  habilidades : [ ],
			  daguante : 8,
			  defensa : 10,
			  ataquecc : 0,
			  ataquead : 0,
			  instintos : 2,
			  poder : 3,
			  linajes: [ "Sangre prístina", "Sangre cruzada" ]
			},
			{
			  nombre : "Servidor público",
			  ventajas : [ "Gran fortuna", "Mundialmente conocido", "Objeto mágico", "Contactos turbios" ],
			  ptoshab : 2,
			  habilidades : [ "Translocar y Lex Mágica", "Mentalismo y Comunicación" ],
			  daguante : 4,
			  defensa : 10,
			  ataquecc : 0,
			  ataquead : 0,
			  instintos : 4,
			  poder : 1,
			  linajes: [ "Sangre prístina", "Sangre cruzada" ]
			},
			{
			  nombre : "Tipo duro",
			  ventajas : [ "Contactos turbios", "Compañero animal", "Objeto mágico", "Voluntad indomable" ],
			  ptoshab : 0,
			  habilidades : [  ],
			  daguante : 8,
			  defensa : 12,
			  ataquecc : 4,
			  ataquead : 4,
			  instintos : 6,
			  poder : 0,
			  linajes: [ "Sangre prístina", "Sangre cruzada", "Squabble" ]
			}
		]
	}
	
	
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this.clases.length; iclases++) {
			if ( this.clases[iclases].nombre == nombre ) {
				return this.clases[iclases];
			}
		}
		return this.clases[Comun.random(this.clases.length, 0)];
	}
}


let linajes = new Linajes();

let clases = new Clases();

let objetosMagicos = [ "Araña mecánica", "Carta blanca", "Cristal del saber", "Giroscopio emocional", "Guante de lianas mágicas", "Mapa redivivo de Enekus", "Maravilla voladora" ];
