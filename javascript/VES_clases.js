class PoderesVES {
	constructor(clase) {
		this._poderes = [
		{ nombre: "Debilitar mente", descripcion: "El adversario pierde el turno de combate, la dificultad es la Inteligencia del adversario." },
		{ nombre: "Instinto psiónico", descripcion: "Si te concentras puedes usar la energía mística para ayudarte en algunas acciones (con un +3), por ejemplo saltar un obstáculo, mejorar tu puntería en el próximo disparo o bien convencer a alguien." },
		{ nombre: "Telequinesis", descripcion: "Permite mover o empujar objetos que estén a menos de 24 metros. La dificultad depende del tamaño del objeto (11 pequeños, 14 medianos, 17 grandes y 20 o más enormes). Si es un ser vivo o es un objeto que agarra alguien, la dificultad es la Fuerza del adversario." },
		{ nombre: "Manipular la Mente", descripcion: "Eres capaz de dar órdenes a tu rival para que te deje pasar o para que se marche, pero nunca para que ponga en peligro su vida. La dificultad es la Sabiduría del adversario." },
		{ nombre: "Energía psíquica", descripcion: "Lanzas una ráfaga de energía psíquica a un objetivo que esté a menos de 24 metros. La dificultad es la Constitución del adversario. Si la superas haces 1D6 de daño." },
		{ nombre: "Sanar", descripcion: "Eres capaz de curar 1D6 de puntos de vida propios o de un compañero. La dificultad depende de la gravedad de las heridas." },
		{ nombre: "Escudo", descripcion: "Creas un campo energético ligado a tí que funciona a modo de escudo incrementando durante 1D6 asaltos la Defensa en 2. La dificultad depende de a cuantos personajes debe proteger, 11 si es a tí solo, 14 si incluye a otro personaje, 17 si incluye en el escudo a 2 más y 20 si protege a 3 más aparte de tí. Los personajes deben mantenerse juntos para que el escudo les proteja." },
		{ nombre: "Noquear", descripcion: "Dejas inconsciente a un número indeterminado de criaturas que se encuentren a menos de 24 metros. Los adversarios que tengas a tu alcance y tengan una Constitución inferior al resultado de tu tirada caen inconscientes." },
		{ nombre: "Parar disparos", descripcion: "Si tienes una espada fotónica puedes usarlo para parar ataques a distancia. La dificultad es la tirada de ataque del adversario." },
		]
	}
	
	
	poderes(numero) {
		var ipoderes = 0;
		var poderespj = [];
		var poderesrandom = Comun.shuffle(this._poderes.clone());
		for (ipoderes=0; ipoderes<numero; ipoderes++) {
			poderespj.push(poderesrandom[ipoderes]);
		}
		return poderespj;
	}
	
}

class TalentosVES {
	constructor(clase) {
		this._talentos = [ 
			{ nombre: "Adaptable", descripcion: "Tienes facilidad para adaptarte a cualquier ambiente y entorno. Ganas un modificador de +1 al bono de Instintos." },
			{ nombre: "Afinidad mecánica", descripcion: "Las máquinas te hablan. Ventaja en las pruebas de Tecnología para reparar y mantener maquinaria." },
			{ nombre: "Alas", descripcion: "Puedes volar. Tu Movimiento aleteando es la mitad de tu Movimiento base. Tu Movimiento planeando es el doble de tu Movimiento base." },
			{ nombre: "Anfibio/a", descripcion: "Procedes de un planeta con entorno líquido y puedes respirar bajo el agua." },
			{ nombre: "Arma integrada", descripcion: "Un arma es parte integral de tu diseño. Puede ser un arma de combate cuerpo a cuerpo o a distancia. Esta arma te da un ataque adicional con una bonificación de +1 y hace 1d6+2 de daño." },
			{ nombre: "Arma natural", descripcion: "Tu ataque natural hace 1d6 de daño. Dependiendo del arma esta puede concederte Ventaja en otras circunstancias: Garras (escalar), Cuernos (romper obstáculos), Dientes afilados (desarmar)." },
			{ nombre: "Arma tribal", descripcion: "Procedes de una cultura guerrera y posees un arma primitiva exótica. Usándola obtienes +2 al ataque y al daño." },
			{ nombre: "Armadura natural", descripcion: "Tu piel gruesa o caparazón (o tu cuerpo de acero y cromo si eres un Androide) te da una Defensa base de 14." },
			{ nombre: "Artillero/a", descripcion: "Puedes añadir tu modificador de Ataque al atacar con las armas de un vehículo. Reduces los efectos de la distancia en los ataques vehiculares en 1 rango." },
			{ nombre: "Ataque certero", descripcion: "Haces un ataque crítico al sacar un 19-20 natural." },
			{ nombre: "Ataque múltiple", descripcion: "Al abatir a un enemigo puedes realizar inmediatamente otro ataque. De esta forma puedes encadenar tantos ataques extra como nivel tengas." },
			{ nombre: "Caballero místico", descripcion: "Adquieres la etiqueta [Místico] y puedes escoger sus Talentos de Clase (excepto Maestro/a Místico/a). Dado de Aguante: D6. Puedes usar armas primitivas, espadas fotónicas y armaduras ligeras. Recibes 1 poder Místico por Nivel. No se pueden utilizar los poderes con armadura pesada. Si un personaje no Místico obtiene este talento, mantiene el Dado de Aguante y la competencia en armas y armaduras de su Clase original." },
			{ nombre: "Científico/a", descripcion: "Ventaja en pruebas de Erudición." },
			{ nombre: "Conexión mística", descripcion: "Tienes un vínculo mental con una bestia. Puedes darle órdenes simples y puedes percibir a través de sus sentidos. Si éste muere puedes establecer una nueva conexión cuando subas de nivel. La bestia tendrá el mismo nivel que el personaje. Para crear sus estadísticas usar las reglas de creación de Monstruos (pág. 51)." },
			{ nombre: "Contactos", descripcion: "Dispones de una red amplia de contactos en todo el Cosmos. Superando una prueba de Comunicación 15+ encuentras un contacto." },
			{ nombre: "Crear artefactos místicos", descripcion: "Puedes crear artefactos místicos. El procedimiento y dificultad son determinados por el Director de Juego." },
			{ nombre: "Criminal", descripcion: "Ventaja en pruebas de Subterfugio para moverte en la oscuridad o esconderte en las sombras." },
			{ nombre: "Empático/a", descripcion: "Sientes las emociones de los demás. Ventaja en pruebas de Comunicación." },
			{ nombre: "Escurridizo/a", descripcion: "Tu pequeño tamaño te permite pasar desapercibido. Ventaja en pruebas de Subterfugio para esconderte y +2 a Defensa en combate a largo alcance. Tu Movimiento base es 9." },
			{ nombre: "Especialista", descripcion: "Elige 1 poder místico. 19 y 20 serán considerados éxitos críticos. Este talento puede ser escogido varias veces por un mismo personaje." },
			{ nombre: "Especie guerrera", descripcion: "Tienes un sexto sentido para el combate. Ventaja en pruebas de Instinto en combate." },
			{ nombre: "Extremidad extra", descripcion: "Tienes un brazo, cola, tentáculo o apéndice extra que te permite llevar un objeto adicional mientras tienes las manos ocupadas. Si atacas con tres armas cuerpo a cuerpo recibes un +2 al Ataque (no acumulable con el +1 de combate con dos armas)." },
			{ nombre: "Forma alternativa", descripcion: "Usando una acción puedes transformarte en un vehículo de tamaño equivalente a tu masa, ganando todas sus habilidades y características (vuelo, velocidad, etc.)." },
			{ nombre: "Francotirador/a", descripcion: "Doblas el rango de todas las arma de largo alcance." },
			{ nombre: "Ímpetu emprendedor", descripcion: "Vives la vida con intensidad. Ganas un trasfondo adicional." },
			{ nombre: "Indómito/a", descripcion: "Tu entrenamiento te hace resistente al dolor. Reduce en 2 el daño recibido de un ataque en un asalto. Este ataque hará como mínimo 1 punto de daño. " },
			{ nombre: "Manipulación de la Realidad", descripcion: "Puedes invertir Puntos de Vida para generar poderes místicos desconocidos. (ver sección “Misticismo y tecnología avanzada” en la pág. 31)." },
			{ nombre: "Infravisión", descripcion: "Ves en la oscuridad hasta 20 metros. Tu vista se basa en el calor desprendido por los objetos y criaturas. " },
			{ nombre: "Médico", descripcion: "Puedes utilizar una acción para hacer una prueba de Erudición 11+ y curar 1d3 Puntos de Vida. Si usas botiquines estos curan el doble." },
			{ nombre: "Inspiración", descripcion: "Puedes invertir una acción para hacer una prueba de Comunicación 15+. Si la superas la siguiente acción de tus aliados será con Ventaja." },
			{ nombre: "Lingüista natural", descripcion: "Puedes comunicarte, al menos de manera rudimentaria, con la mayoría de las especies conocidas del Universo." },
			{ nombre: "Lógica", descripcion: "Tu especie ha afinado su mente para vivir largamente y prosperar. Ventaja en pruebas de Instintos de INT." },
			{ nombre: "Maestro/a del disfraz", descripcion: "Tienes varias personalidades falsas bien desarrolladas con documentación (1+1 adicional cada 2 niveles)." },
			{ nombre: "Maestro/a místico/a", descripcion: "Dado de Aguante: D4. Puedes usar armas primitivas pero no puedes usar armadura de ningún tipo. Recibes 2 poderes místicos por nivel." },
			{ nombre: "Mimetismo", descripcion: "Tu piel cambia de color ayudándote a esconderte. Ventaja en pruebas de Subterfugio para esconderte en cualquier entorno." },
			{ nombre: "Místico/a bélico/a", descripcion: "+3 a las pruebas de Poder para poderes ofensivos." },
			{ nombre: "Nano-reparadores", descripcion: "Recuperas tantos PV como tu nivel cada 8 horas de descanso." },
			{ nombre: "Pelea con X", descripcion: "Reemplaza X con: arma y escudo / arma de dos manos / dos armas / armas de largo alcance / desarmado / arma específica. Cuando peleas con ese estilo recibes un +1 al Ataque y al daño." },
			{ nombre: "Pico de oro", descripcion: "Eres muy hábil hablando, capaz de confundir o convencer a cualquiera. Ventaja en pruebas de Comunicación cuando intentas convencer a alguien." },
			{ nombre: "Piloto experto", descripcion: "Eres un as del volante. Ventaja en pruebas de Maniobrabilidad de un Vehículo." },
			{ nombre: "Rata de alcantarilla", descripcion: "Tu especie se ha adaptado a la vida en megaciudades o hacinadas estaciones espaciales. Ventaja en pruebas de Supervivencia para encontrar recursos en entornos urbanos." },
			{ nombre: "Resolutivo/a", descripcion: "Añade tu bono de Erudición o Inteligencia a pruebas de Tecnología para improvisar soluciones a problemas imprevistos." },
			{ nombre: "Resistente", descripcion: "Te has adaptado a las condiciones extremas de tu planeta. Eres inmune a los efectos de una condición adversa: calor, frío, radiación, etc." },
			{ nombre: "Sabiduría mística", descripcion: "+3 a pruebas de Poder para poderes de percepción extrasensorial." },
			{ nombre: "Sanador/a", descripcion: "+3 a las pruebas de Poder para poderes de sanación." },
			{ nombre: "Sensores", descripcion: "Detectas con exactitud toda forma de vida en un rango de 60 metros. No puedes ser sorprendido." },
			{ nombre: "Sentido agudo", descripcion: "Ventaja en pruebas de Alerta basadas en un sentido: vista, oído, tacto, gusto u olfato." },
			{ nombre: "Suerte", descripcion: "Una vez por sesión puedes repetir una tirada fallida y hacerla con Ventaja." },
			{ nombre: "Superviviente", descripcion: "Tu planeta es salvaje. Ventaja en pruebas de Supervivencia para encontrar comida, agua y abrigo en entornos salvajes." },
			{ nombre: "Tamaño descomunal", descripcion: "Ventaja en pruebas de Fuerza y Desventaja en pruebas de Subterfugio para esconderte. Tu Movimiento base es 18." },
			{ nombre: "Telepatía", descripcion: "Puedes comunicarte mentalmente con otros seres vivos en un rango de 60 metros." },
			{ nombre: "Tenaz", descripcion: "Tu especie es conocida por su tesón y vigor. +2 Puntos de Vida a tu Dado de Aguante en cada subida de nivel." },
		]
	}
	
	
	descripcion(nombre) {
		var italentos=0;
		for (italentos=0; italentos<this._talentos.length; italentos++) {
			if ( this._talentos[italentos].nombre == nombre ) {
				return this._talentos[italentos].descripcion;
			}
		}
		return "";
	}
}


class ClaseVES extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._pod = clase.pod;
		this._competencias = clase.competencias;
		this._equipo = clase.equipo;
		this._poderes = clase.poderes;
		this._trasfondos = clase.trasfondos;
	}
		
	get pod() {
		return this._pod;
	}
	get competencias() {
		return this._competencias;
	}
	
	set pod(value) {
		this._pod = value;
	}
	set competencias(value) {
		this._competencias = value;
	}

	talentos(nivel) {
		var tal = [];
		var ntal = 2;
		if ( nivel >= 8 )
			ntal = 4;
		else if ( nivel >= 4 )
			ntal = 3;
			
		var intal=0;
		
		if ( this._talentos.tlnfijo != "" ) {
			tal.push(this._talentos.tlnfijo);
			ntal--;
		}
		var talrandom = Comun.shuffle(this._talentos.tlnrandom.clone());
		for (intal=0; intal<ntal && intal<talrandom.length; intal++) {
			tal.push(talrandom[intal]);
		}
		
		return tal;
	}

	pv(nivel, modificador) {
		var ptos = this._daguante + modificador;
		var ipv=0;
		for (ipv=1; ipv<nivel; ipv++) {
			ptos += Comun.random(this._daguante, 1) + modificador;
		}
		return ptos;
	}

	atq(nivel) {
		var iatq = nivel - 1;
		if ( nivel > this._atq.length ) {
			iatq = this._atq.length - 1;
		}
		return this._atq[iatq];
	}

	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}
	
	trasfondo() {
		var numero = Comun.random(20,1);
		var itrasfondo = 0;
		for (itrasfondo = 0; itrasfondo<this._trasfondos.length; itrasfondo++) {
			if ( numero <= this._trasfondos[itrasfondo].hasta ) {
				return this._trasfondos[itrasfondo].nombre;
			}
		}
		return nombre;
	}

}

class ClasesVES {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Combatiente",
			  talentos : { tlnfijo: "", tlnrandom: [ "Artillero/a", "Ataque certero", "Ataque múltiple", "Indómito/a", "Francotirador/a", "Inspiración", "Pelea con X" ] },
			  trasfondos : [ { nombre: "Mercenaria/o", hasta: 5 }, { nombre: "Pirata", hasta: 12 }, { nombre: "Cazarrecompensas", hasta: 16 }, { nombre: "Soldado", hasta: 20 } ],
			  daguante : 8,
			  atrs : [ "FUE", "CON", "DES", "SAB", "CAR", "INT" ],
			  atq : [ 1, 1, 2, 2, 3, 3, 4, 4, 5, 5 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  poderes : 0,
			  competencias : "Pueden usar todas las armas y armaduras.",
			  equipo : { narmasAD: 1, armasAD: [ "Carabina láser", "Rifle láser" ],
						narmasCaC: 1, armasCaC: [ "Monodaga", "Hacha de plasma", "Vibrohacha", "Vibroespada" ],
						armadura: [ "Ligera", "Mediana" ],
						escudo: [ ],
						paquete: "Paquete del combatiente" },
			},
			{
			  nombre : "Mediador/a",
			  talentos : { tlnfijo: "", tlnrandom: [ "Contactos", "Criminal", "Inspiración", "Lingüista natural", "Maestro/a del disfraz", "Pico de oro", "Suerte" ] },
			  trasfondos : [ { nombre: "Embajador/a", hasta: 4 }, { nombre: "Contrabandista", hasta: 10 }, { nombre: "Tahur", hasta: 14 }, { nombre: "Comerciante", hasta: 20 } ],
			  daguante : 6,
			  atrs : [ "CAR", "DES", "SAB", "INT", "CON", "FUE" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  poderes : 0,
			  competencias : "Pueden usar armas primitivas, armas sencillas y armaduras ligeras.",
			  equipo : { narmasAD: 1, armasAD: [ "Pistola láser" ],
						narmasCaC: 1, armasCaC: [ "Bastón eléctrico" ],
						armadura: [ "Ligera" ],
						escudo: [ ],
						paquete: "Paquete del mediador" },
			},
			{
			  nombre : "Caballero/a Místico/a",
			  talentos : { tlnfijo: "Caballero místico", tlnrandom: [ "Manipulación de la Realidad", "Conexión mística", "Sanador/a", "Místico/a bélico/a", "Sabiduría mística", "Especialista", "Crear artefactos místicos" ] },
			  trasfondos : [ { nombre: "Caballera/o de la justicia", hasta: 10 }, { nombre: "Buscador/a de objetos místicos", hasta: 20 } ],
			  daguante : 6,
			  atrs : [ "DES", "INT", "FUE", "SAB", "CON", "CAR" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  pod : [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 3 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  poderes : 1,
			  competencias : "Puede usar armas primitivas, espadas fotónicas y armaduras ligeras",
			  equipo : { narmasAD: 0, armasAD: [  ],
						narmasCaC: 0, armasCaC: [ ],
						armadura: [ "Ligera" ],
						escudo: [ ],
						paquete: "Paquete del caballero" },
			},
			{
			  nombre : "Maestro/a Místico/a",
			  talentos : { tlnfijo: "Maestro/a místico/a", tlnrandom: [ "Manipulación de la Realidad", "Conexión mística", "Sanador/a", "Místico/a bélico/a", "Sabiduría mística", "Especialista", "Crear artefactos místicos" ] },
			  trasfondos : [ { nombre: "Erudita/o", hasta: 7 }, { nombre: "Ermitaña/o", hasta: 13 }, { nombre: "Estudiosa/o de linajes místicos", hasta: 20 } ],
			  daguante : 4,
			  atrs : [ "SAB", "INT", "DES", "CAR", "FUE", "CON" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  pod : [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 3 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  poderes : 2,
			  competencias : "Usa armas primitivas y no puede usar ninguna armadura",
			  equipo : { narmasAD: 0, armasAD: [  ],
						narmasCaC: 0, armasCaC: [  ],
						armadura: [ ],
						escudo: [ ],
						paquete: "Paquete del místico" },
			},
			{
			  nombre : "Técnico",
			  talentos : { tlnfijo: "", tlnrandom: [ "Afinidad mecánica", "Artillero/a", "Científico/a", "Médico", "Piloto experto", "Resolutivo/a", "Superviviente" ] },
			  trasfondos : [ { nombre: "Piloto", hasta: 7 }, { nombre: "Mecánica/o", hasta: 13 }, { nombre: "Científica/o", hasta: 20 } ],
			  daguante : 6,
			  atrs : [ "INT", "DES", "SAB", "CON", "FUE", "CAR" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  poderes : 0,
			  competencias : "Pueden usar armas primitivas, armas sencillas y armaduras ligeras.",
			  equipo : { narmasAD: 0, armasAD: [  ],
						narmasCaC: 1, armasCaC: [ "Monodaga", "Hacha de plasma" ],
						armadura: [ "Ligera" ],
						escudo: [ ],
						paquete: "Paquete del técnico" },
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
				return new ClaseVES(this._clases[iclases]);
			}
		}
		return new ClaseVES(this._clases[Comun.random(this._clases.length, 0)]);
	}
	
}



let clasesVES = new ClasesVES();
let talentosVES = new TalentosVES();
let poderesVES = new PoderesVES();
