class Rasgo {
	constructor(rasgo) {
		this.nombre = rasgo.nombre;
		this.atributo = rasgo.atributo;
		this.generico = rasgo.generico;
		this.descripcion = rasgo.descripcion;
	}
}

class Rasgos {

	constructor() {
		this.rasgos = [
						{ nombre: "Lucha sin filo", atributo: "FUE", generico: "N", descripcion: "Experto en el uso de mazas y bastones. Apuesta por la contusión y la fractura. Ventaja en las pruebas de atributo al utilizar armas sin filo." },
						{ nombre: "Lancero", atributo: "FUE", generico: "N", descripcion: "Especialista en el uso de lanzas y armas de asta. Ventaja en las pruebas de atributo si se usan este tipo de armas." },
						{ nombre: "Filo letal", atributo: "FUE", generico: "N", descripcion: "Entrenado en el uso de todo tipo de armas de filo. Ventaja en las pruebas de atributo al utilizar armas cortantes." },
						{ nombre: "Rompe Cráneos", atributo: "FUE", generico: "N", descripcion: "El que no necesita nada más que sus manos para ser letal. Adiestrado en la lucha sin armas. Ventaja en pruebas de atributo al luchar con las manos desnudas (1d4 de daño)." },
						{ nombre: "Ritualista", atributo: "INT", generico: "N", descripcion: "Versado tanto en hechizos arcanos como en rituales ancestrales. Ventaja en las pruebas de atributo contra los efectos de hechizos o artefactos mágicos." },
						{ nombre: "Velador del bosque", atributo: "INT", generico: "N", descripcion: "Profundo conocimiento de las plantas y sus efectos tanto para curar como para dañar. Ventaja en las pruebas de atributo para evitar los efectos de venenos o causar daño con ellos." },
						{ nombre: "Tocado por los dioses", atributo: "SAB", generico: "N", descripcion: "Capaz de canalizar prodigios. A partir de nivel dos (2) podrá expulsar 1d4 no-muertos por nivel superando una prueba de atributo de SAB añadiendo el DG de la criatura a la tirada." },
						{ nombre: "Guardían de Almas", atributo: "SAB", generico: "N", descripcion: "Obtiene su poder de las almas de los caídos mediante extraños rituales de corrupción. Podrá levantar tantos no‐muertos de una pila de huesos como su nivel menos uno (-1) durante 1d6 horas añadiendo el DG deseado a la tirada (sin llegar a superar el nivel del Guardián). Usar el rasgo con éxito conlleva ganar una marca de pesadumbre (1 MP)." },
						{ nombre: "Tirador experto", atributo: "DES", generico: "N", descripcion: "Excelente tirador, especialista en el uso de arcos, ballestas y hondas. Ventaja en las pruebas de atributo al utilizar armas a distancia." },
						{ nombre: "Rastreador incansable", atributo: "CON", generico: "N", descripcion: "Desenvuelto en el páramo. Capaz de encontrar pistas donde otros solo ven barro y ramas partidas. Ventaja en las pruebas de atributo para hallar y seguir el rastro de objetivos siempre que se sea por entornos naturales." },
						{ nombre: "Espíritu animal", atributo: "CON", generico: "N", descripcion: "Criado en comunión con la naturaleza, gran conocedor de la fauna. Obtiene directamente el rasgo adicional familiar." },
						{ nombre: "Jinete del Yermo", atributo: "DES", generico: "N", descripcion: "Adiestrado en la monta de caballos y otras criaturas. Conocedor de las rutas de comercio. Ventaja en las pruebas de atributo de situaciones que impliquen persecuciones, cabalgar, etc." },
						{ nombre: "Danzante de sombras", atributo: "DES", generico: "N", descripcion: "El que no es visto. Entrenado para el asesinato silencioso. Añade 2d4 al daño del arma tras un ataque por la espalda exitoso." },
						{ nombre: "Acróbata ambulante", atributo: "DES", generico: "N", descripcion: "Gran control y percepción de su cuerpo, sin miedo a las alturas. Ventaja en acciones de riesgo como pueden ser la escalada, funambulismo, contorsionismo, etc." },
						{ nombre: "Ratero", atributo: "DES", generico: "N", descripcion: "Adiestrado en las artes del pillaje y el hurto. Ventaja al intentar abrir cerraduras, robar o escuchar sin ser detectado." },
						{ nombre: "Corazón de tinta", atributo: "CAR", generico: "N", descripcion: "Don de la palabra, ya sea a través de poemas, canciones o historias. Ventaja en las pruebas de atributo de CAR. Talento innato para las lenguas, las historias, los cuentos y las profecías locales." },
						{ nombre: "Alquimista", atributo: "", generico: "S", descripcion: "Diestro en la creación e identificación de pociones de todo tipo." },
						{ nombre: "Aprendiz Arcano", atributo: "", generico: "S", descripcion: "Escala por nivel, INT o SAB (máximo 4). Capacidad para leer pergaminos mágicos y realizar prodigios como un seguidor de la vía de la energía de nivel uno (1)." },
						{ nombre: "Artesano", atributo: "", generico: "S", descripcion: "Diestro en algún oficio como por ejemplo herrero, forjador, hojalatero, peletero, fabricante de arcos, etc." },
						{ nombre: "Ataque masivo", atributo: "", generico: "S", descripcion: "Escala por nivel, FUE. Una vez por combate podrá añadir dos (2) al daño de un ataque cuerpo a cuerpo." },
						{ nombre: "Ataques Múltiples", atributo: "", generico: "S", descripcion: "Puede realizar un ataque (no mágico) extra tras abatir a un enemigo pudiendo encadenar tantos como su nivel." },
						{ nombre: "Atleta", atributo: "", generico: "S", descripcion: "Cada hora, estando en combate (en confrontaciones reales, no entrenamientos, etc), podrá recuperar d6 puntos de vida." },
						{ nombre: "Buenaventura", atributo: "", generico: "S", descripcion: "Tras obtener un veinte (20) en una prueba de atributo (pifia) podrá repetir la tirada y usar el nuevo resultado." },
						{ nombre: "CambiaFormas", atributo: "", generico: "S", descripcion: "Como seguidor de la vía agreste y teniendo el rasgo espíritu animal se obtiene la habilidad de cambiar a formas básicas de animal, por ejemplo, halcón, hurón, pantera..." },
						{ nombre: "Disparo certero", atributo: "", generico: "S", descripcion: "Escala por nivel, DES. Una vez por combate podrá añadir dos (2) al daño de un ataque a distancia (no mágico). " },
						{ nombre: "Duro como la piedra", atributo: "", generico: "S", descripcion: "Escala por nivel, CON. Reduce en dos (2) todo el daño que se le inflija." },
						{ nombre: "Enemigo Juramentado", atributo: "", generico: "S", descripcion: "Escala por nivel, ATR principal. Tras elegir un tipo de enemigo podrá añadir dos (2) puntos al daño siempre que se enfrente a él." },
						{ nombre: "Familiar", atributo: "", generico: "S", descripcion: "Un pequeño animal como compañero, como por ejemplo un gato / perro / hurón, adiestrado y que conoce algunos trucos sencillos." },
						{ nombre: "Lenguaraz", atributo: "", generico: "S", descripcion: "Escala por nivel, CAR. Una vez al día podrá desmoralizar a un (1) adversario durante 1d4 turnos (ventaja en pruebas de atributo para el grupo contra dicho adversario)." },
						{ nombre: "Mago de Guerra", atributo: "", generico: "S", descripcion: "Da la posibilidad al caminante de la vía de la energía de vestir armadura ligera y media." },
						{ nombre: "Mago de Hielo", atributo: "", generico: "S", descripcion: "Gana ventaja en todos los prodigios relacionados con el agua." },
						{ nombre: "Mago de Trueno", atributo: "", generico: "S", descripcion: "Gana ventaja en todos los prodigios de carácter eléctrico." },
						{ nombre: "Mago de Sangre", atributo: "", generico: "S", descripcion: "Podrá cambiar puntos de vida (PV) para potenciar el efecto de los prodigios (1d4 por cada 2 puntos de vida)." },
						{ nombre: "Montaraz", atributo: "", generico: "S", descripcion: "Gana ventaja en encontrar provisiones en el páramo y en el conocimiento de criaturas y bestias." },
						{ nombre: "Ojo Avizor", atributo: "", generico: "S", descripcion: "Siempre alerta, nada te pilla de improviso. Siempre actuará primero a no ser que se obtenga un veinte (20) en la prueba de iniciativa." },
						{ nombre: "Letalidad", atributo: "", generico: "S", descripcion: "Se consideran crítico tanto el uno (1) como el dos (2) en las pruebas de atributo ofensivas." },
						{ nombre: "Piromante", atributo: "", generico: "S", descripcion: "Gana ventaja en todos los prodigios relacionados con el fuego." },
						{ nombre: "Seguidor", atributo: "", generico: "S", descripcion: "Una persona que ayuda en el día a día, carga con el equipo, porta antorchas, etc." },
						{ nombre: "Yo soy el escudo", atributo: "", generico: "S", descripcion: "Una vez por cada enfrentamiento podrá utilizar su escudo para absorber todo el daño realizado en un ataque a sí mismo o a cualquier compañero. Tras esto el escudo se considerará inservible hasta ser reparado." }
										   
		]
	}
	
	genericos() {
		var rasgosgenericos = [];
		var indice = 0;
		for (indice=0; indice<this.rasgos.length; indice++) {
			if ( this.rasgos[indice].generico == "S" ) {
				rasgosgenericos.push(this.rasgos[indice]);
			}
		}
		return rasgosgenericos;
	}
	
	rasgo(nombre) {
		var irasgo=0;
		for ( irasgo = 0; irasgo < this.rasgos.length; irasgo++ ) {
			if ( this.rasgos[irasgo].nombre == nombre ) {
				return new Rasgo(this.rasgos[irasgo]);
			}
		}
		return new Rasgo(this.rasgos[ Comun.random(this.rasgos.length, 0) ]);
	}
}

let lrasgos = new Rasgos();
