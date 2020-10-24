
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
		this._trasfondos = clase.trasfondos;
	}
		
	get trasfondos() {
		return this._trasfondos;
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
				tal.push(this._talentos[intal].tln[ital]);
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
			  dtalentos: [ "<strong>Superviviente</strong><br/>Tienes ventaja en las pruebas de Supervivencia cuando te encuentras en un entorno familiar, relacionado con uno de tus trasfondos.", 
							"<strong>Viajero/a</strong><br/>Has visitado casi todos los países del mundo. Gastando 1 P! obtendrás éxito automático en Erudición (conocimiento geográfico o social del país) o en Comunicación (conocimiento del mercado negro, conseguir contactos o informantes)" ],
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
			  dtalentos: [ "<strong>Contactos</strong><br/>Otorgas un +1 a cualquier prueba de Manipulación o Erudición que realice el PJ con el que mantengas un lazo emocional, siempre que estés cerca suyo en el momento de realizar la acción. También permite hacer extensible esta bonificación a otros PJs canjeando 1 P!.", 
							"<strong>Herencia</strong><br/>Tienes mucho, mucho dinero. Cuando desees adquirir cualquier objeto o equipo debes superar una prueba de Comunicación y dependiendo de la petición el DJ determinará la dificultad. Si se supera la prueba tienes el objeto a tu disposición." ],
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
			  dtalentos: [ "<strong>Con un par</strong><br/>En situaciones de máximo riesgo en que debas realizar una prueba de Instinto, obtienes ventaja para superar la prueba.", 
							"<strong>Resistente</strong><br/>Demasiados golpes, demasiadas heridas, han curtido tu cuerpo hasta hacerlo duro como la piedra. Ganas un +1 a la característica de Defensa en combate cuerpo a cuerpo y cualquier daño sufrido por una caída se reduce a la mitad." ],
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
			  dtalentos: [ "<strong>Ideas frescas</strong><br/>Tienes ventaja en cualquier prueba de Manipulación para realizar chapuzas o pequeños inventos que puedan resolver una situación compleja o peligrosa.", 
							"<strong>Sonrisa angelical</strong><br/>Tienes ventaja en cualquier prueba de Comunicación cuando la intención sea embaucar o confundir al sujeto." ],
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
			  dtalentos: [ "<strong>Camaleón social</strong><br/>Tienes ventaja en cualquier prueba de Comunicación para realizar primeros contactos con nuevos pueblos y sociedades.", 
							"<strong>Lo leí en un libro</strong><br/>Canjea 1 P! para obtener un éxito automático en una prueba de Erudición sobre cualquier materia." ],
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
			  dtalentos: [ "<strong>Compañero/a fiel</strong><br/>Otorgas un +1 a cualquier prueba de Manipulación o Erudición que realice el PJ con el que mantengas un lazo emocional, siempre que estés cerca suyo en el momento de realizar la acción. También permite hacer extensible esta bonificación a otros PJs canjeando 1 P!.", 
							"<strong>Suerte</strong><br/>La diosa fortuna te sonríe. Una vez por sesión puedes repetir cualquier prueba y realizarla de nuevo con ventaja." ],
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



