class YS_Comun {

	static shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	  }

	  return array;
	}

	static random(numero, desde) {
		return Math.floor(Math.random() * numero) + desde;
	}

}

Array.prototype.clone = function() {
	return this.slice(0);
};



class YS_atributo {
	constructor(nombre, valor, nombrepdf) {
		this.nombre = nombre;
		this.valor = valor;
		this.nombrepdf = nombrepdf;
	}
	
	static atributos() {
		var valores = YS_Comun.shuffle([ 0, 1, 2, 4, 6]);
		
		var atribs = [];
		atribs.push(new YS_atributo("Carisma", valores[0], "carisma"));
		atribs.push(new YS_atributo("Destreza", valores[1], "destreza"));
		atribs.push(new YS_atributo("Fuerza", valores[2], "fuerza"));
		atribs.push(new YS_atributo("Inteligencia", valores[3], "inteligencia"));
		atribs.push(new YS_atributo("Percepción", valores[4], "percepcion"));
		return atribs;
	}
	
}

class YS_habilidad {
	constructor(nombre, valor, nombrepdf, atributo) {
		this.nombre = nombre;
		this.valor = valor;
		this.nombrepdf = nombrepdf;
		this.atributo = atributo;
	}
	
	static habilidades() {
		var valores = YS_Comun.shuffle([ 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]);
		var habs = [];
		habs.push(new YS_habilidad("Atletismo", valores[0], "atletismo", "DES"));
		habs.push(new YS_habilidad("Auxilio", valores[1], "auxilio", "INT"));
		habs.push(new YS_habilidad("Conducir", valores[2], "conducir", "DES"));
		habs.push(new YS_habilidad("Conversación", valores[3], "conversacion", "CAR"));
		habs.push(new YS_habilidad("Cultura", valores[4], "cultura", "INT"));
		habs.push(new YS_habilidad("Entorno", valores[5], "entorno", "PER"));
		habs.push(new YS_habilidad("Fuerza Bruta", valores[6], "fuerzabruta", "FUE"));
		habs.push(new YS_habilidad("Idioma extranjero 1", valores[7], "idiomaext1", "INT"));
		habs.push(new YS_habilidad("Idioma extranjero 2", valores[8], "idiomaext2", "INT"));
		habs.push(new YS_habilidad("Información", valores[9], "informacion", "INT"));
		habs.push(new YS_habilidad("Intimidación", valores[10], "intimidacion", "CAR"));
		habs.push(new YS_habilidad("Lucha", valores[11], "lucha", "DES"));
		habs.push(new YS_habilidad("Mecánica", valores[12], "mecanica", "INT"));
		habs.push(new YS_habilidad("Memoria", valores[13], "memoria", "INT"));
		habs.push(new YS_habilidad("Observación", valores[14], "observacion", "PER"));
		habs.push(new YS_habilidad("Ocultación", valores[15], "ocultacion", "DES"));
		habs.push(new YS_habilidad("Oído", valores[16], "oido", "PER"));
		habs.push(new YS_habilidad("Psicología", valores[17], "psicologia", "PER"));
		habs.push(new YS_habilidad("Puntería", valores[18], "punteria", "DES"));
		habs.push(new YS_habilidad("Rastreo", valores[19], "rastreo", "DES"));
		habs.push(new YS_habilidad("Seducción", valores[20], "seduccion", "CAR"));
		habs.push(new YS_habilidad("Sigilo", valores[21], "sigilo", "DES"));
		habs.push(new YS_habilidad("Simulación", valores[22], "simulacion", "CAR"));
		habs.push(new YS_habilidad("Supervivencia", valores[23], "supervivencia", "PER"));
		return habs;
	}
}

class YS_talentos {
	static talento() {
		var talentos = YS_Comun.shuffle([
						 { "nombre": "«¡Es mi familia!»", "descripcion": "Puedes ceder tus propias proezas a cualquier miembro de tu familia. Afortunado Una vez por sesión, recuperas una proeza gastada. NOTA: No puedes sobrepasar tu número máximo de proezas con este talento." },
						 { "nombre": "«Al saber le llaman suerte»", "descripcion": "Cuando empleas una proeza para añadir 1D a la tirada, si la sacas y obtienes al menos un 6, recuperas la proeza (acumulable a la que se recibe cuando se obtiene un crítico)." },
						 { "nombre": "Capacidad de superación", "descripcion": "Puedes repetir dos tiradas por sesión sin necesidad de gastar proezas." },
						 { "nombre": "«Dejadme hacerlo a mí»", "descripcion": "Tiendes a tener éxito en lo que realmente importa: cuando gastas una proeza en cualquier tirada de habilidad añades + 2 al resultado final." },
						 { "nombre": "Duro de pelar", "descripcion": "Puedes gastar una proeza en cualquier momento para tirar por Resistencia Física o Resistencia Mental con 1D adicional. También puedes gastar otra proeza para repetir la tirada." },
						 { "nombre": "En su cabeza era espectacular", "descripcion": "El DJ te recompensará con una proeza si haces una acción cualquiera de la forma más espectacular o rimbombante posible (lo cual podría aumentar su dificultad)." },
						 { "nombre": "Hermano mayor", "descripcion": "Puedes compartir tus propias proezas con tus hermanos pequeños. Por cada proeza que compartas, ganas un + 1 que puedes usar en la tirada que desees." },
						 { "nombre": "Ojo clínico", "descripcion": "Cuando gastas una proeza para tirar más dados en las habilidades de Información u Observación, obtienes dos dados en lugar de uno." },
						 { "nombre": "Seguro de sí mismo", "descripcion": "Cada vez que sacas un crítico ganas dos proezas en lugar de una." },
						 { "nombre": "Un poco de todo", "descripcion": "Una vez por sesión, puedes gastar una proeza para añadirte, de forma permanente, una nueva profesión. NOTA: En una tirada, solamente podrás disfrutar del + 3 de una sola profesión." },
						 { "nombre": "Afinidad con las armas", "descripcion": "Eres letal con un arma de fuego en las manos y siempre aplicas un nivel superior de daño al usarlas: 10 con armas de fuego cortas, 15 con armas de fuego largas y 20 con armas de fuego mortíferas." },
						 { "nombre": "Damisela en apuros", "descripcion": "Tienes facilidad para despertar ese estúpido «instinto protector» de los hombres. Siempre que vayas a recibir un ataque, puedes gastar una proeza para hacer dudar a un adversario masculino y hacerle malgastar su turno." },
						 { "nombre": "Dispara primero, pregunta después", "descripcion": "En el primer turno de cada combate, si actúas antes que tu enemigo y le impactas, le haces 1D de daño adicional." },
						 { "nombre": "Donde pone el ojo... cava la tumba", "descripcion": "Por cada dado que inviertes al apuntar en tu ataque a distancia, aumentas el daño en tres dados." },
						 { "nombre": "Escudo humano", "descripcion": "Si superas una tirada de Atletismo adicional a tu acción en el turno de combate, puedes elegir a cualquier personaje cercano para que sufra un ataque en tu lugar una vez se haya realizado este. La dificultad de la tirada es la Agilidad de la víctima." },
						 { "nombre": "Fuerza ciclópea; golpe mortal", "descripcion": "Cuando gastas proezas para aumentar el daño de tus golpes, los dados explotan con 4, 5 o 6 en lugar de solo 6." },
						 { "nombre": "Huida eficaz", "descripcion": "Puedes evitar ataques extra de oportunidad de cualesquiera oponentes cuando abandonas el combate." },
						 { "nombre": "La dialéctica de los puños y las pistolas", "descripcion": "Haces 1D de daño adicional cada vez que impactas con tus puños o con armas de fuego." },
						 { "nombre": "Protector", "descripcion": "Una vez por turno de combate, puedes elegir a un compañero que tengas muy cerca para otorgarle un + 3 a su Agilidad (y además puedes realizar tu acción de forma normal)." },
						 { "nombre": "Puntería mortífera", "descripcion": "Aplicas + 3 al resultado de las tiradas de cualquier ataque apuntado." },
						 { "nombre": "Rápido y mortal", "descripcion": "Cuando tiras por Iniciativa para usar tu revólver, lanzas 2D en lugar de 1D y escoges el mejor resultado. Además, no sufres penalizaciones por desenfundar y disparar en un mismo asalto." },
						 { "nombre": "«Retroceder nunca, rendirse jamás»", "descripcion": "Puedes gastar una proeza para ignorar los penalizadores acumulados debido a la pérdida de puntos de Salud durante un combate entero." },
						 { "nombre": "Sexto sentido", "descripcion": "A la hora de determinar la Iniciativa, tú y un aliado cercano a tu elección tiraréis dos dados en lugar de uno y os quedaréis con el resultado más alto." },
						 { "nombre": "El último en caer", "descripcion": "No tiras por Resistencia Física de forma normal ni sufres penalizaciones tras perder puntos de Salud. Cuando estos llegan a 0, en lugar de morir tiras por Resistencia Física en cada turno (ahora sí) con un penalizador acumulativo a la tirada de – 1. Mientras saques estas tiradas seguirás estando activo, pero en cuanto falles o termine el combate, lo que suceda antes, caerás fulminantemente muerto." },
						 { "nombre": "Buen compañero", "descripcion": "Tu participación en acciones combinadas otorga + 4 puntos a la tirada, hasta un máximo de + 12 (en lugar de + 2 y + 10 respectivamente)." },
						 { "nombre": "Cinturón de herramientas", "descripcion": "Puedes gastar una proeza para tener la herramienta que necesitas en uno de tus bolsillos. El DJ tiene la última palabra; en su lugar podría decirte dónde puedes encontrarla." },
						 { "nombre": "Leer entre líneas", "descripcion": "Siempre que leas y comprendas un texto escrito por otra persona, puedes intentar una tirada de Psicología contra una dificultad de 10 para que el DJ te proporcione alguna información sobre el autor." },
						 { "nombre": "Manitas", "descripcion": "Puedes repetir todas tus tiradas de Mecánica sin gastar proezas para ello." },
						 { "nombre": "Mano de santo", "descripcion": "Cada vez que sacas una tirada de Auxilio para tratar la herida de otro personaje, este recupera 3 puntos de Salud en lugar de 2. Además, el crítico permite que recupere 5 puntos, mientras que la pifia hace que solo pierda 1." },
						 { "nombre": "Nacido en la malla", "descripcion": "Cuando uses la habilidad Información en un medio electrónico, gastar una proeza te permitirá añadir dos dados a la habilidad en lugar de uno." },
						 { "nombre": "Siempre dispuesto a echar una mano", "descripcion": "Cuando ayudas a otro PJ cediendo uno de tus dados de habilidad, el beneficiado recibe 2D en lugar de 1D extra." },
						 { "nombre": "«Solo tengo que conectar este cable con este otro y entonces...»   Cuando quieres repetir uno o más dados de cualquier tirada de habilidad que tenga que ver con la informática, los dispositivos electrónicos o los sistemas de seguridad, lo haces sin pagar ninguna proeza por ello (solo una vez por tirada)." },
						 { "nombre": "Actuación estelar", "descripcion": "Te haces pasar por otras personas con suma facilidad. Puedes repetir todos los dados que quieras en tus tiradas de Simulación sin gastar proezas una vez por escena." },
						 { "nombre": "Amigos en las altas esferas", "descripcion": "Una vez por sesión, puedes inventarte un contacto en la alta sociedad de tu ciudad. Este contacto puede ayudar a solventar una situación concreta hasta cierto punto (a discreción del DJ)." },
						 { "nombre": "Bajos fondos", "descripcion": "Dispones de un contacto gratuito por sesión de juego." },
						 { "nombre": "«Bien, y ahora escúchame atentamente...»", "descripcion": "Cuando otro PJ sigue tus órdenes al pie de la letra y, para ello, debe realizar una o varias tiradas de habilidad, en la primera de ellas los dos obtenéis una proeza si se saca la tirada y, además, sale un 6 en alguno de los dados. NOTA: Para el PJ que obedece, esta proeza es acumulable a la que pueda obtener si además obtiene un éxito crítico." },
						 { "nombre": "Camaleón social", "descripcion": "Una vez por sesión, puedes engañar al PNJ que desees o hacerte pasar con éxito por quien no eres sin necesidad de realizar tirada alguna. No obstante, como jugador debes narrar y justificar adecuadamente el modo en el que tu PJ lo logra." },
						 { "nombre": "Charlatán pragmático", "descripcion": "En caso de fallo puedes repetir de forma gratuita todos los dados que desees en cualquier tirada en la que pretendas agradar o complacer." },
						 { "nombre": "Competitivo    Sumas 1D extra a cualquier tirada de habilidad si la acción que tratas de llevar a cabo se realiza en competencia expresa y declarada con otro u otros personajes." },
						 { "nombre": "Discurso memorable", "descripcion": "Una vez por sesión, puedes motivar a tus compañeros con un discurso acompañado de una tirada de Conversación contra su Aplomo. Si superas la tirada contra al menos uno de ellos, tú y todos los que hayáis sido «motivados» ganaréis una proeza." },
						 { "nombre": "Guapo como el demonio", "descripcion": "Multiplicas x 2 el bonificador de CAR en todas tus tiradas de Conversación y Seducción." },
						 { "nombre": "Sonrisa cautivadora", "descripcion": "Una vez por sesión, puedes decidir que una tirada fallada de cualquier habilidad que dependa de CAR se convierta en un éxito automático (con la única excepción de Intimidación)." },
						 { "nombre": "«¡Eso sale en mi libro!»", "descripcion": "Una vez por sesión, obtienes un éxito automático en la habilidad que desees siempre y cuando se justifique con algún pasaje que hayas podido leer en tu libro favorito." },
						 { "nombre": "«¡Soy invisible!»", "descripcion": "Tienes una facilidad extraordinaria para esconderte y no ser descubierto: puedes repetir una vez de forma gratuita los dados que desees en las tiradas de Ocultación sin necesidad de usar proezas." },
						 { "nombre": "Adaptabilidad", "descripcion": "Puedes intercambiar los valores de dos de tus atributos hasta en tres ocasiones en cada sesión de juego." },
						 { "nombre": "Adicto al gimnasio", "descripcion": "Realizas todas tus tiradas de Fuerza bruta y de Resistencia Física con 1D adicional sin necesidad de gastar proezas." },
						 { "nombre": "Amigo de las sombras", "descripcion": "Cuando estás inmerso en la oscuridad, añades 1D a las tiradas o sumas + 3 de forma automática a cualquiera de tus valores fijos." },
						 { "nombre": "Concentración", "descripcion": "Puedes añadir 1D adicional a la tirada de cualquier habilidad dos veces por sesión siempre y cuando antes hayas dedicado unos instantes a concentrarte y reflexionar sobre lo que quieres conseguir exactamente." },
						 { "nombre": "Contención", "descripcion": "Eres capaz de neutralizar la activación de cualquiera de tus defectos por parte del DJ si superas una tirada de Resistencia Mental. Si lo que evitas es la activación del defecto grave, obtienes la proeza de todas formas." },
						 { "nombre": "Curado de espanto", "descripcion": "En las tiradas de pánico no se te suma el dado de mayor valor." },
						 { "nombre": "El encuadre perfecto", "descripcion": "Puedes gastar una proeza para añadir dos dados a tus tiradas de Observación en lugar de uno solo." },
						 { "nombre": "Espíritu gatuno", "descripcion": "Obtienes críticos en Atletismo sacando un solo 6." },
						 { "nombre": "La experiencia es un grado", "descripcion": "Si obtienes un éxito al tirar los dados tras activar tu Recuerdo cuando... conservas el recurso para poder usarlo una segunda vez." },
						 { "nombre": "Meditación", "descripcion": "Mediante el gasto de una proeza puedes pedirle al DJ que te revele algo importante sobre la tarea que tienes entre manos, ya sea para resolver un problema, hallar el punto débil de un enemigo o encontrar una pista en la que puedas no haber reparado." },
						 { "nombre": "Memoria prodigiosa", "descripcion": "Gracias a tu memoria fotográfica, recuerdas casi cualquier tipo de información que hayas podido ver, escuchar, leer, oler o sentir. Además, consigues críticos en tus tiradas de Memoria sacando un solo 6." },
						 { "nombre": "Nada que perder", "descripcion": "Siempre que te encuentres en una situación realmente desesperada puedes volver a lanzar cualquiera de los dados de la tirada que acabas de realizar para quedarte con el nuevo valor." },
						 { "nombre": "Nadie se lo espera de ti", "descripcion": "Consigues críticos inverosímiles en tus tiradas sacando un solo 6." },
						 { "nombre": "«No se me escapa una»", "descripcion": "Haces críticos en Observación u Oído sacando un solo 6." },
						 { "nombre": "Sangre fría", "descripcion": "Realizas todas tus tiradas de Resistencia Mental con 1D adicional." },
						 { "nombre": "Sutil como una rata y valiente como una gallina", "descripcion": "Sumas 1D a cualquier tirada que hagas para salvar tu pellejo y alejarte de posibles peligros." },
						 { "nombre": "«Tiene que tener una explicación racional»", "descripcion": "Eres capaz de comprender y racionalizar los eventos más traumáticos y sobrenaturales. Una vez al día, puedes exponer tus teorías a todo el que quiera escucharte, permitiéndoles recuperar 1 punto de Estabilidad (y tú recuperas 2 puntos)." },
						 { "nombre": "Vidas pasadas", "descripcion": "Puedes usar el Recuerdo cuando... tres veces por aventura en lugar de una sola. Para ello, echas mano de los recuerdos de las reencarnaciones previas de tu alma, aunque esto a veces tiene sus riesgos (a discreción del DJ)." }
						]);
		return talentos[0];
	}
}


class YS_PJ {
	
	constructor() {
		this.nombre = "";
		this.talento = null;
	}
	
	plantillaPDF() {
		return "pdf/Ysystem.pdf";
	}
	
	construyeBotonesAtributo(idesde) {
		var isiguiente = (idesde+1)%this.atributos.length;
		var ianterior = idesde-1;
		if ( ianterior<0) 
			ianterior = this.atributos.length - 1;
		return "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"transfiereAtributos(" + idesde + "," + isiguiente + ")\">&#9660;</button> ";
	}
	
	construyeBotonesHabilidad(idesde) {
		var isiguiente = (idesde+1)%this.habilidades.length;
		var ianterior = idesde-1;
		if ( ianterior<0) 
			ianterior = this.habilidades.length - 1;
		return "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"transfiereHabilidades(" + idesde + "," + isiguiente + ")\">&#9660;</button> ";
	}
	
	transfiereHabilidades(idesde, ihasta) {
		var diferencia = this.habilidades[idesde].valor - this.habilidades[ihasta].valor;
		if ( diferencia != 0 ) {
			if ( idesde == 0 ) {
				this.agilidad -= (3*diferencia);
			}
			else if (ihasta == 0) {
				this.agilidad += (3*diferencia);
			}
			
			var valordesde = this.habilidades[idesde].valor;
			var valorhasta = this.habilidades[ihasta].valor;
			this.habilidades[idesde].valor = valorhasta;
			this.habilidades[ihasta].valor = valordesde;
		}
	}
	
	transfiereAtributos(idesde, ihasta) {
		
		var diferencia = this.atributos[idesde].valor - this.atributos[ihasta].valor;
		if ( diferencia != 0 ) {
			if ( idesde == 0 ) { // de 0 a 1
				this.estabilidad -= diferencia;
				this.aplomo -= diferencia;
				
				this.agilidad += diferencia;
				this.iniciativa += diferencia;
				
				this.resmental += diferencia;
				
			}
			else if ( idesde == 1 ) { // de 1 a 2
				this.agilidad -= diferencia;
				this.iniciativa -= diferencia;
				
				this.proezas_total = 3 + Math.trunc((this.atributos[2].valor + diferencia + this.atributos[3].valor)/2);
				this.proezas_actual = this.proezas_total;
				
				this.salud += (2 * diferencia);
				this.resfisica -= diferencia;
			} 
			else if ( idesde == 2 ) { // de 2 a 3
				this.estabilidad += diferencia;
				this.aplomo += diferencia;
				
				this.salud -= (2 * diferencia);
				this.resfisica += diferencia;
				
				this.iniciativa += diferencia;
				this.perspicacia += diferencia;
				
			}
			else if ( idesde == 3 ) { // de 3 a 4
				this.aplomo -= diferencia;
				this.estabilidad -= diferencia;
				
				this.proezas_total = 3 + Math.trunc((this.atributos[2].valor - diferencia + this.atributos[3].valor)/2);
			}
			else if ( idesde == 4 ) {  // de 4 a 0
				this.perspicacia -= diferencia;
				this.aplomo += diferencia;
				this.estabilidad += diferencia;
				this.resmental -= diferencia;
			}
			
			var valordesde = this.atributos[idesde].valor;
			var valorhasta = this.atributos[ihasta].valor;
			this.atributos[idesde].valor = valorhasta;
			this.atributos[ihasta].valor = valordesde;
		}		
		
	}
	
	tablaAtributos() {
		
		var indice = 0;
		
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Atributo</strong></th><th><strong>Valor</strong></th><th></th></tr>";
		for (indice=0; indice<this.atributos.length; indice++) {
			stabla += "<tr><td>" + this.atributos[indice].nombre + "</td><td>" + this.atributos[indice].valor + "</td><td>" + this.construyeBotonesAtributo(indice) + "</td></tr>";
		}
		stabla += "</tabla>";
		return stabla;
	}
	
	
	tablaRasgos() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Rasgo derivado</strong></th><th><strong>Valor</strong></th></tr>";
		stabla += "<tr><td>Agilidad</td><td>" + this.agilidad + "</td></tr>";
		stabla += "<tr><td>Aplomo</td><td>" + this.aplomo + "</td></tr>";
		stabla += "<tr><td>Perspicacia</td><td>" + this.perspicacia + "</td></tr>";
		stabla += "<tr><td>Salud</td><td>" + this.salud + "</td></tr>";
		stabla += "<tr><td>Proezas</td><td>" + this.proezas_total + "</td></tr>";
		stabla += "<tr><td>Resistencia física</td><td>" + this.resfisica + "</td></tr>";
		stabla += "<tr><td>Estabilidad</td><td>" + this.estabilidad + "</td></tr>";
		stabla += "<tr><td>Resistencia mental</td><td>" + this.resmental + "</td></tr>";
		stabla += "<tr><td>Iniciativa</td><td>" + this.iniciativa + "</td></tr>";
		
		stabla += "</tabla>";
		return stabla;
	}
	
	tablaHabilidades() {
		
		var indice = 0;
		
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Atributo</strong></th><th><strong>Valor</strong></th><th></th></tr>";
		for (indice=0; indice<this.habilidades.length; indice++) {
			stabla += "<tr><td>" + this.habilidades[indice].nombre +  " (" + this.habilidades[indice].atributo + ")</td><td>" + this.habilidades[indice].valor + "</td><td>" + this.construyeBotonesHabilidad(indice) + "</td></tr>";
		}
		stabla += "</tabla>";
		return stabla;
	}
	
	nombreTalento() {
		return "<strong>" + this.talento.nombre + "</strong>";
	}
	
	
	descripcionTalento() {
		return this.talento.descripcion;
	} 
	
	calculaTalento() {
		this.talento = YS_talentos.talento();
	}
	
	genera() {
		this.atributos = YS_atributo.atributos();
		this.habilidades = YS_habilidad.habilidades();
		this.agilidad = this.atributos[1].valor + (this.habilidades[0].valor * 3);
		this.aplomo = this.atributos[0].valor + this.atributos[3].valor + 5;
		this.perspicacia = this.atributos[3].valor + this.atributos[4].valor + 5;
		this.proezas_total = 3 + Math.trunc((this.atributos[2].valor + this.atributos[3].valor)/2);
		this.proezas_actual = this.proezas_total;
		this.salud = 10 + (2 * this.atributos[2].valor) + YS_Comun.random(6,1);
		this.resfisica = 12 - this.atributos[2].valor;
		this.estabilidad = 5 + this.aplomo + YS_Comun.random(6,1);
		this.resmental = 12 - this.atributos[0].valor;
		this.iniciativa = this.atributos[1].valor + this.atributos[3].valor;
		this.calculaTalento();
	}

	rellenaPDF() {
			  var fields = {
					'nombrepj' : [ "" ],
					'aplomo' : [ this.aplomo ],
					'agilidad' : [ this.agilidad ],
					'perspicacia' : [ this.perspicacia ],
					'resfisica' : [ this.resfisica ],
					'resmental' : [ this.resmental ],
					'proezas_total' : [ this.proezas_total ],
					'proezas_actual' : [ this.proezas_actual ],
					'iniciativa' : [ this.iniciativa ],
				};
				
				if ( this.talento != null ) {
					fields[ 'talento' ] = [ this.talento.nombre ];
					fields[ 'dTalento' ] = [ this.talento.descripcion ];
				}
				
				fields[ 'salud' + this.salud ] = [ true ];
				fields[ 'estabilidad' + this.estabilidad ] = [ true ];
				
				var indice;
				
				for (indice = 0; indice< this.atributos.length; indice++) {
					fields[ this.atributos[indice].nombrepdf ] = [ this.atributos[indice].valor ];
				}
				
				
				for (indice = 0; indice< this.habilidades.length; indice++) {
					fields[ this.habilidades[indice].nombrepdf + (this.habilidades[indice].valor - 1) ] = [ true ];
				}
				
				return fields;
	}	
}
