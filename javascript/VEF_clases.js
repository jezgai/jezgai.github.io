
class ClaseF {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._pS = clase.pS;
		this._ins = clase.ins;
		this._equipoinicial = clase.equipoinicial;
		this._competencia = clase.competencia;
		this._dtalentos = clase.dtalentos;
		this._descripcion = clase.descripcion;
	}
		
	get descripcion() {
		return this._descripcion;
	}
	
	get dtalentos() {
		return this._dtalentos;
	}
	
	get competencia() {
		return this._competencia;
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
	get atq() {
		return this._atq;
	}
	get pS() {
		return this._pS;
	}
	get ins() {
		return this._ins;
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
	set atq(value) {
		this._atq = value;
	}
	set pS(value) {
		this._pS = value;
	}
	set ins(value) {
		this._ins = value;
	}

	talentos(nivel) {
		var tal = [];
		var intal=0;
		for (intal=0; intal<this._talentos.length && nivel>=this._talentos[intal].niv; intal++) {
			var ital=0;
			var tls = this._talentos[intal].tln.clone();
			var num = this._talentos[intal].num ;
			if ( num == 0 || num > this._talentos[intal].tln.length) {
				num = this._talentos[intal].tln.length;
			}
			else {
				tls = Comun.shuffle(tls);
			}
			for (ital=0; ital < num; ital++) {
				tal.push(tls[ital]);
			}
		}
		return tal;
	}

	pv(nivel) {
		var ptos = this._daguante;
		var ipv=0;
		for (ipv=1; ipv<nivel; ipv++) {
			ptos += Comun.random(this._daguante, 1);
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

	pS(nivel) {
		var ipS = nivel - 1;
		if ( nivel > this._pS.length ) {
			ipS = this._pS.length - 1;
		}
		return this._pS[ipS];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}

	equipo() {
		return this._equipoinicial[Comun.random(this._equipoinicial.length,0)];
	}
}

class ClasesF {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Astuto",
			  descripcion : "Personajes que gustan de moverse en la sombra para resolver problemas",
			  talentos : [ { niv : 1,num : 2,tln : ["Certero", "Dedos Ágiles", "Escurridizo", "Invisible", "Emboscar" ]} ],
			  daguante : 6,
			  atrs : [ "DES" , "CAR" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 3, 4, 4, 5 ],
			  pS : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 9 ],
			  ins : [ 2, 2, 3, 3, 4, 4, 5, 5, 6, 7 ],
			  equipoinicial : [ { dinero : { inicial : 100, aleatorio: 3, dado: 10 }, equipo : [ ]} ],
			  dtalentos : [ "<strong>Certero</strong><br/>Tienes un bono adicional de +2 en todos los ataques de proyectiles.", 
							"<strong>Dedos Ágiles</strong><br/>Tienes ventaja en las pruebas de Manipulación que requieran precisión (por ejemplo abrir cerraduras o sustraer las posesiones de otra persona).", 
							"<strong>Emboscar</strong><br/>Tienes ventaja en las pruebas de Subterfugio basadas en moverse en silencio y en ocultarse en las sombras. Añade 1d6 al daño cuando ataques a un blanco desprevenido.", 
							"<strong>Escurridizo</strong><br/>Tienes ventaja en las pruebas de Subterfugio relacionadas con moverse en silencio.", 
							"<strong>Invisible</strong><br/>Nadie repara en alguien como tú. Ganas un +2 a las tiradas de Subterfugio cuando tratas de pasar desapercibido." ],
			},
			{
			  nombre : "Líder",
			  descripcion : "Personajes muy carismáticos, bien sea por su dinero o por su profesión (tahur, charlatanes, políticos)", 
			  talentos : [ { niv : 1,num : 2,tln : [ "Adinerado", "Camaleón social", "Discurso inspirador", "Elegante", "Influencia" ]} ],
			  daguante : 4,
			  atrs : [ "CAR" , "INT" ],
			  atq : [ 1, 1, 2, 3, 4, 5, 6, 6, 7, 8 ],
			  pS : [ 2, 3, 3, 3, 4, 4, 4, 5, 5, 5 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 500, aleatorio: 3, dado: 10 }, equipo : [ ]} ],
			  dtalentos: [ "<strong>Adinerado</strong><br/>Tienes mucho dinero. Cuando quieras conseguir cualquier objeto o equipo debes superar una prueba de Comunicación cuya dificultad determina el DJ según la petición.",
							"<strong>Camaleón social</strong><br/>Tienes ventaja en cualquier prueba de Comunicación para realizar primeros contactos con desconocidos.", 
							"<strong>Discurso inspirador</strong><br/>Das un +2 a cualquier prueba que realice el PJ al que pretendas inspirar, siempre que estés cerca y le hayas arengado adecuadamente. Por cada pS que entregues puedes extender esa bonificación a otro PJ adicional.", 
							"<strong>Elegante</strong><br/>El estilo es tu marca. Tu vestuario y tu distinción te ayudan en las interacciones sociales. Todas las pruebas de comunicación en reuniones, eventos y fiestas son realizadas con ventaja.",
							"<strong>Influencia</strong><br/>Perteneces a una familia o grupo muy poderoso, +2 en las tiradas de Comunicación cuando intentas influir sobre alguien." ],
			},
			{
			  nombre : "Luchador/a",
			  descripcion : "Personajes de acción, dispuestos a usar la fuerza para resolver conflictos", 
			  talentos : [ { niv : 1,num : 2,tln : ["Ataque certero", "Ataques Múltiples", "Con un par", "Lucha con X", "Músculos de acero"]} ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 10 ],
			  pS : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 1, 2, 2, 3, 3, 4, 4, 5, 5, 6 ],
			  equipoinicial : [ { dinero : { inicial : 0, aleatorio: 4, dado: 6 }, equipo : [ "1 arma de fuego" ]} ],
			  dtalentos: [ "<strong>Ataque certero<strong><br/>Tus ataques se convierten en crítico con un resultado de 19-20.", 
							"<strong>Ataques Múltiples<strong><br/>Al abatir a un rival puedes realizar inmediatamente otro ataque. De esta forma puedes encadenar tantos ataques EXTRA como nivel tengas.", 
							"<strong>Con un par<strong><br/>En situaciones de máximo riesgo en que debas realizar una prueba de Instinto, obtienes ventaja para superar la prueba.", 
							"<strong>Lucha con X<strong><br/>Sustituye X por: arma de mano y escudo o dos armas de mano o armas a dos manos o de proyectiles o de fuego. Peleando de esa forma ganas +1 al ataque y al daño.", 
							"<strong>Músculos de acero<strong><br/>El personaje tiene una musculatura envidiable. Aumenta en +1 el daño en combate C/C" ],
			},
			{
			  nombre : "Observador",
			  descripcion : "Personajes cuyo fuerte es descubrir pistas (periodistas, investigadores, ...)", 
			  talentos : [ { niv : 1,num : 2,tln : [ "Buenos sentidos", "Buena reputación", "Contactos", "Esponja", "Mañoso" ]} ],
			  daguante : 6,
			  atrs : [ "SAB" , "INT" ],
			  atq : [ 1, 2, 3, 3, 4, 4, 5, 6, 6, 6 ],
			  pS : [ 0, 0, 1, 2, 2, 3, 4, 4, 5, 6 ],
			  ins : [ 2, 3, 3, 4, 5, 6, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 100, aleatorio: 3, dado: 8 }, equipo : [ "1 cámara fotográfica" ]} ],
			  dtalentos : [ "<strong>Buena reputación</strong><br/>Una personalidad arrolladora junto a buena suerte hacen que tus acciones siempre se vean de la mejor forma. Una vez por sesión puedes tener una ventaja en una prueba de Comunicación y gastando 1 pS puedes evitar un conflicto armado o social de forma directa, porque reconocen tu reputación.", 
							"<strong>Buenos sentidos</strong><br/>Tienes ventaja en las pruebas basadas en la percepción sensorial.", 
							"<strong>Contactos</strong><br/>Conoces a mucha gente, la mayoría gente poderosa. Gastando 1 pS puedes pedirles un favor.", 
							"<strong>Esponja</strong><br/>Estás acostumbrado a asimilar todo lo que encuentras a tu alrededor. Ganas un +2 en las tiradas de Alerta cuando puedes percartarte de algún detalle extraño", 
							"<strong>Mañoso</strong><br/>Estás acostumbrado a manipular las cosas por tí mismo, ya sea para arreglarlas o entender como funcionan. Ganas un +2 a las tiradas de Manipulación cuando intentas arreglar o estropear algún mecanismo." ],
			},
			{
			  nombre : "Pensador/a",
			  descripcion : "Personajes de grandes conocimientos que usan fundamentalmente la razón", 
			  talentos : [ { niv : 1,num : 2,tln : [ "Afortunado", "Ideas frescas", "Ingenioso", "Lo leí en un libro", "Memoria prodigiosa" ]} ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 3 ],
			  pS : [ 2, 3, 3, 4, 5, 6, 7, 8, 8, 9 ],
			  ins : [ 1, 2, 3, 4, 5, 5, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 200, aleatorio: 3, dado: 8 }, equipo : [ "Botiquín" ]} ],
			  dtalentos : [ "<strong>Afortunado</strong><br/>La diosa fortuna te sonríe. Una vez por sesión puedes repetir cualquier prueba y realizarla de nuevo con Ventaja o bien en cada inicio de sesión de juego puedes gastar 1 pS y realizar tres tiradas con el d20, anota los dos resultados mayores y durante el juego podrás cambiar el resultado de una tirada por uno de los anotados. Dicho valor no es reutilizable.", 
							"<strong>Ideas frescas</strong><br/>Tienes ventaja en cualquier prueba de Manipulación para realizar chapuzas o pequeños inventos que puedan resolver una situación compleja o peligrosa.", 
							"<strong>Ingenioso</strong><br/> Tiras con ventaja una prueba de Instintos siempre que ofrezcas una posible solución ingeniosa al problema.",
							"<strong>Lo leí en un libro</strong><br/>Canjea 1 pS para obtener un éxito automático en una prueba de Erudición sobre cualquier materia.",
							"<strong>Memoria prodigiosa</strong><br/>Tienes ventaja en las pruebas de Erudición en las que la memoria sea fundamental." ],
			},
			{
			  nombre : "Tenaz",
			  descripcion : "Personajes con gran fuerza de voluntad y capacidad de soportar sufrimiento ya sea físico o mental", 
			  talentos : [ { niv : 1,num : 2,tln : [ "Coraje", "Mente Férrea", "Resistente", "Superviviente nato", "Voluntad de hierro" ]} ],
			  daguante : 4,
			  atrs : [ "CON" , "SAB" ],
			  atq : [ 1, 2, 2, 2, 3, 3, 4, 4, 5, 6 ],
			  pS : [ 1, 1, 2, 3, 3, 4, 4, 5, 5, 6 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 9 ],
			  equipoinicial : [ { dinero : { inicial : 0, aleatorio: 3, dado: 8 }, equipo : [ "1 chupa de cuero" ]} ],
			  dtalentos: [ "<strong>Coraje</strong><br/>Tienes una considerable fuerza de voluntad que te hace afrontar con estoicismo el peligro y ciertas situaciones que podrían dañar tu salud mental. Obtienes un +2 a la tirada de SAB para resistir situaciones que afectan a la salud mental.", 
							"<strong>Mente Férrea</strong><br/>Tienes la mente preparada para resistir cualquier ataque. Los intentos de interrogarte, intimidarte, convencerte o confundirte siempre se realizan con desventaja.", 
							"<strong>Resistente</strong><br/>Demasiados golpes, demasiadas heridas han curtido tu cuerpo hasta hacerlo duro como la piedra. Ganas un +1 a la característica de Defensa en combate cuerpo a cuerpo y cualquier daño sufrido por una caída se reduce a la mitad.", 
							"<strong>Superviviente nato</strong><br/>Estás acostumbrado a sortear dificultades, a encontrar soluciones más allá de tus posibilidades. Ganas un +2 a tiradas de INT cuando te encuentras en un aprieto y buscas salidas o soluciones.", 
							"<strong>Voluntad de hierro</strong><br/>Una vez por sesión, puedes repetir una tirada de tu elección." ],
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
				return new ClaseF(this._clases[iclases]);
			}
		}
		return new ClaseF(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesF = new ClasesF();



