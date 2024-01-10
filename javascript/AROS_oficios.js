class Oficio {
	constructor(oficio) {
		this.nombre = oficio.nombre;
		this.descripcion = oficio.descripcion;
		this.nequipo = oficio.nequipo;
		this.equipo = oficio.equipo;
		this.rasgo = oficio.rasgo;
		this.equipo = this.recuperaEquipo();
	}
	
	recuperaEquipo() {
		if ( this.nequipo == 0 )
			return this.equipo;
		var nequipo = Comun.random(this.equipo.length,0);
		var equipoaux = [];
		equipoaux.push(this.equipo[nequipo]);
		return equipoaux;
	}
}

class Oficios {
	constructor() {
		this.oficios = [
			{ "nombre": "Artista", "descripcion": "Músicos, artistas, poetas, actores y más. Los artistas son expertos en mantener la moral y distraer a las bestias de las profundidades.", "nequipo": 0, "equipo": [ "Instrumento musical" ], "rasgo": { "nombre": "Distracción", "descripcion": "Puedes gastar una Acción hacer una Salvación de INT o CAR. Si tienes éxito, la criatura objetivo está distraída y recibe [-] a su siguiente Ataque" } },
			{ "nombre": "Cocinero", "descripcion": "Conocidos por llevarlo todo y el fregadero, los conocidos son un miembro integral del pueblo. Los cocineros pueden recolectar, cazar y se sabe que algunos hasta han transmitido habilidades con los platos que preparan.", "nequipo": 0, "equipo": [ "Kit de cocinero" ], "rasgo": { "nombre": "Cocinero de campamento", "descripcion": "Puedes usar tu Kit de Cocinero para pasar tu descanso mejorando una Ración. Se convierte en Gumbo y cura 1d8[+] más tu Bono de CON" } },
			{ "nombre": "Contrabandista", "descripcion": "Algunos los ven como sinvergüenzas, otros como saqueadores útiles que bucean a las profundidades para encontrar objetos valiosos perdidos en el mar.", "nequipo": 0, "equipo": [ "Ganzúa" ], "rasgo": { "nombre": "Saqueador", "descripcion": "Durante un Descanso puede saquear en busca de equipo. Tira una vez en la tabla de Equipo de Mazmorreo" } },
			{ "nombre": "Erudito", "descripcion": "Siempre puedes descubrir a un erudito por sus llamativos sombreros altos. Desde cronistas de saber a investigadores de nuevas tecnologías. Los eruditos son bien conocidos por su eterna búsqueda de conocimiento.", "nequipo": 0, "equipo": [ "Kit de erudito" ], "rasgo": { "nombre": "Investigador", "descripcion": "Puedes pasar tu Descanso investigando un Pergamino o Babosa. Esto te permite aprender sus efectos." } },
			{ "nombre": "Guerrero", "descripcion": "Guardias, carceleros y sinvergüenzas. Los guerreros son soldados profesionales. Protegen la aldea y matan monstruos que amenazan sus costas.", "nequipo": 0, "equipo": [ "Malla de escamas de hierro" ], "rasgo": { "nombre": "Retirada táctica", "descripcion": "Tus aliados y tú no tenéis que hacer una Prueba de Moral al huir." } },
			{ "nombre": "Herrero", "descripcion": "Trabajadores del metal, madera, cuero y otros materiales inusuales. Crean obras de arte, herramientas, armas, armaduras e incluso los barcos que usa la aldea.", "nequipo": 0, "equipo": [ "Kit de Herrero" ], "rasgo": { "nombre": "Reparar", "descripcion": "Puedes usar un Kit de Herrero para pasar un Descanso reparando un objeto. Puedes mejorar la calidad del objeto en un estado de calidad" } },
			{ "nombre": "Mago", "descripcion": "Los magos controlan las fuerzas de la realidad. Específicamente inscribiendo signos arcanos en enormes perlas y encantando objetos con Arena.", "nequipo": 0, "equipo": [ "Kit de Talla", "Perla de conjuro" ], "rasgo": { "nombre": "Explosión de arena", "descripcion": "Puedes gastar 100 de Arena para golpear a una criatura con arena a alta velocidad y causarle 1d10 de Daño Contundente. La criatura puede hacer una Salvación de DES para reducir a la mitad el daño." } },
			{ "nombre": "Marinero", "descripcion": "Maestros navegantes y guías. Los marineros son los mejores evitando los peligros de las profundidades. Fácilmente identificables por su fiable Eku.", "nequipo": 0, "equipo": [ "Linterna de aceite de ballena", "Eku" ], "rasgo": { "nombre": "Ballenero", "descripcion": "Puedes pasar un Descanso destilando la grasa de Canutrias, Dólfidos y Leviachalotes para hacer Aceite de ballena, que puede usarse para lámparas y lubricación." } },
			{ "nombre": "Mercader", "descripcion": "Maestros del comercio y los negocios. Los Mercaderes son buenos comunicándose y aprovechando la Arena al máximo.", "nequipo": 1, "equipo": [ "Abrojos", "Canicas", "Caña de pescar", "Cincel",  "Clavos", "Cubo", "Fuelle", "Ganzúas", "Grasa", "Lima de metal", "Pala", "Pegamento", "Pico", "Pinzas", "Red", "Reloj de arena", "Sierra", "Taladro", "Trampa para osos", "Vejiga de aire", "Baraja de cartas", "Botella", "Campaña pequeña", "Catalejo", "Cordel", "Cuerno", "Esponja", "Incienso", "Instrumento", "Jabón", "Joyas falsas", "Juego de dados", "Lente", "Libro en blanco", "Ollas de cocina", "Perfume", "Pintura facial", "Pluma y tinta", "Silbato", "Tarro de alquitrán" ], "rasgo": { "nombre": "Lingua franca", "descripcion": "Puedes comunicarte con Ermitaños sin hablar Crustáceo." } },
			{ "nombre": "Pescador", "descripcion": "Los pescadores cubiertos de lona atraviesan las peligrosas aguas lejos de la costa. Son bien conocidos por criar Canutrias como compañeros de caza y usar grandes arpones y armas de fuego para cazar atunes, ballenas y focas.", "nequipo": 0, "equipo": [ "Arpón", "Red con pesos" ], "rasgo": { "nombre": "Ojo experimentado", "descripcion": "Una vez por turno puedes usar tu Acción para identificar un Rasgo, Característica, Debilidad o Resistencia de una criatura hallada en el Templo de la Reina de las Profundidades." } },
			{ "nombre": "Ranchero de babosas", "descripcion": "Los Rancheros de Babosas trabajan en reservas de mareas. Recogen potentes Babosas para todo tipo de propósitos. Se les identifica por sus botas de agua y sombreros.", "nequipo": 0, "equipo": [ "Babosa", "3 frascos de babosa" ], "rasgo": { "nombre": "Biólogo", "descripcion": "Puedes pasar un Descanso identificando y descubriendo usos para cualquier Babosa que tengas." } },
			{ "nombre": "Sacerdote", "descripcion": "Los líderes espirituales del pueblo. Estos místicos siguen a uno de los seis dioses continentales. Blanden el poder que corresponde a su dios.", "nequipo": 1, "equipo": [ "Reina de las Profundidades ARMA:Arpón", "Príncipe Verde ARMA:Hachuela", "Gran Señor de Elcontra ARMA:Porra","Gran Señor de Foltoran ARMA:Hoz", "Gran Señora de Frigil ARMA:Espada", "Princesa Amarilla ARMA:Honda" ], "rasgo": { "nombre": "Bendecir", "descripcion": "Puedes usar tu siguiente Acción para darle a un Aliado [+] a su siguiente Ataque y Daño." } }
		]
	}
	
	oficio() {
		var voficio = Comun.random(this.oficios.length,0);
		return new Oficio(this.oficios[voficio]);
	}
}

let oficios = new Oficios();
