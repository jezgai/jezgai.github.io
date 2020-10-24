
class ClaseP {

	constructor(clase) {
		this._nombre = clase.nombre;
		this._talentos = clase.talentos;
		this._daguante = clase.daguante;
		this._atrs = clase.atrs;
		this._atq = clase.atq;
		this._pP = clase.pP;
		this._ins = clase.ins;
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
	get pP() {
		return this._pP;
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
	set pP(value) {
		this._pP = value;
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

	pP(nivel) {
		var ipP = nivel - 1;
		if ( nivel > this._pP.length ) {
			ipP = this._pP.length - 1;
		}
		return this._pP[ipP];
	}

	ins(nivel) {
		var iins = nivel - 1;
		if ( nivel > this._ins.length ) {
			iins = this._ins.length - 1;
		}
		return this._ins[iins];
	}

}

class ClasesP {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Ayudante",
			  talentos : [ { niv : 1,num : 0,tln : [ "Compañero/a fiel", "Suerte" ]} ],
			  daguante : 4,
			  atrs : [ "SAB" , "CON" ],
			  atq : [ 0, 0, 1, 2, 3],
			  pP : [ 0, 0, 1, 2, 3],
			  ins : [ 2, 3, 4, 5, 6],
			  competencia: "No sabe usar armas de fuego",
			  trasfondos: [ "Estudiante", "Becario/a", "Chófer" ],
			  dtalentos: [ "<strong>Compañero/a fiel</strong><br/>Otorgas un +1 a cualquier prueba de Manipulación o Erudición que realice el PJ con el que mantengas un lazo emocional, siempre que estés cerca suyo en el momento de realizar la acción. También permite hacer extensible esta bonificación a otros PJs canjeando 1 P!.", 
							"<strong>Suerte</strong><br/>La diosa fortuna te sonríe. Una vez por sesión puedes repetir cualquier prueba y realizarla de nuevo con ventaja." ],
			},
			{
			  nombre : "Buscavidas",
			  talentos : [ { niv : 1,num : 0,tln : [ "Ideas frescas", "Sonrisa angelical" ]} ],
			  daguante : 6,
			  atrs : [ "DES" , "FUE" ],
			  atq : [ 1, 2, 3, 4, 5],
			  pP : [ 0, 1, 2, 3, 4],
			  ins : [ 1, 2, 3, 4, 5],
			  competencia: "Sabe usar pistolas y revólveres",
			  trasfondos: [ "Ladrón/a", "Cazatesoros", "Periodista" ],
			  dtalentos: [ "<strong>Ideas frescas</strong><br/>Tienes ventaja en cualquier prueba de Manipulación para realizar chapuzas o pequeños inventos que puedan resolver una situación compleja o peligrosa.", 
							"<strong>Sonrisa angelical</strong><br/>Tienes ventaja en cualquier prueba de Comunicación cuando la intención sea embaucar o confundir al sujeto." ],
			},
			{
			  nombre : "Investigador/a",
			  talentos : [ { niv : 1,num : 0,tln : [ "Camaleón social", "Lo leí en un libro" ]} ],
			  daguante : 6,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 1, 2, 2],
			  pP : [ 1, 3, 5, 7, 9],
			  ins : [ 0, 0, 1, 2, 3],
			  competencia: "No sabe usar armas de fuego",
			  trasfondos: [ "Médico/a", "Profesor/a", "Anticuario/a", "Científico/a" ],
			  dtalentos: [ "<strong>Camaleón social</strong><br/>Tienes ventaja en cualquier prueba de Comunicación para realizar primeros contactos con nuevos pueblos y sociedades.", 
							"<strong>Lo leí en un libro</strong><br/>Canjea 1 P! para obtener un éxito automático en una prueba de Erudición sobre cualquier materia." ],
			},
			{
			  nombre : "Mecenas",
			  talentos : [ { niv : 1,num : 0,tln : [ "Contactos", "Herencia" ]} ],
			  daguante : 4,
			  atrs : [ "CAR" , "INT" ],
			  atq : [ 1, 2, 3, 4, 5],
			  pP : [ 1, 2, 3, 4, 5],
			  ins : [ 0, 1, 2, 3, 4],
			  trasfondos: [ "Diletante", "Empresario/a", "Actor/Actriz", "Heredero/a" ],
			  competencia: "Sabe usar rifles y escopetas",
			  dtalentos: [ "<strong>Contactos</strong><br/>Otorgas un +1 a cualquier prueba de Manipulación o Erudición que realice el PJ con el que mantengas un lazo emocional, siempre que estés cerca suyo en el momento de realizar la acción. También permite hacer extensible esta bonificación a otros PJs canjeando 1 P!.", 
							"<strong>Herencia</strong><br/>Tienes mucho, mucho dinero. Cuando desees adquirir cualquier objeto o equipo debes superar una prueba de Comunicación y dependiendo de la petición el DJ determinará la dificultad. Si se supera la prueba tienes el objeto a tu disposición." ],
			},
			{
			  nombre : "Tipo/a duro/a",
			  talentos : [ { niv : 1,num : 0,tln : ["Con un par", "Resistente"]} ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 2, 3, 4, 5, 6],
			  pP : [ 0, 0, 1, 2, 3],
			  ins : [ 0, 1, 2, 3, 4],
			  competencia: "Sabe usar todo tipo de armas de fuego",
			  trasfondos: [ "Policía", "Detective", "Guardaespaldas", "Vigilante" ],
			  dtalentos: [ "<strong>Con un par</strong><br/>En situaciones de máximo riesgo en que debas realizar una prueba de Instinto, obtienes ventaja para superar la prueba.", 
							"<strong>Resistente</strong><br/>Demasiados golpes, demasiadas heridas, han curtido tu cuerpo hasta hacerlo duro como la piedra. Ganas un +1 a la característica de Defensa en combate cuerpo a cuerpo y cualquier daño sufrido por una caída se reduce a la mitad." ],
			},
			{
			  nombre : "Trotamundos",
			  talentos : [ { niv : 1,num : 0,tln : ["Superviviente", "Viajero/a" ]} ],
			  daguante : 6,
			  atrs : [ "CON" , "CAR" ],
			  atq : [ 1, 2, 3, 4, 5 ],
			  pP : [ 1, 2, 3, 4, 5 ],
			  ins : [ 0, 1, 2, 3, 4 ],
			  competencias : "Sabe usar armas de fuego",
			  trasfondos: [ "Reportero/a", "Escritor/a", "Explorador/a", "Fotógrafo/a" ],
			  dtalentos: [ "<strong>Superviviente</strong><br/>Tienes ventaja en las pruebas de Supervivencia cuando te encuentras en un entorno familiar, relacionado con uno de tus trasfondos.", 
							"<strong>Viajero/a</strong><br/>Has visitado casi todos los países del mundo. Gastando 1 P! obtendrás éxito automático en Erudición (conocimiento geográfico o social del país) o en Comunicación (conocimiento del mercado negro, conseguir contactos o informantes)" ],
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
				return new ClaseP(this._clases[iclases]);
			}
		}
		return new ClaseP(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesP = new ClasesP();



