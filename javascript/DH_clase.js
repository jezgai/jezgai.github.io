class Clase {
	constructor(clase) {
		this._nombre = clase.nombre;
		this._energia = clase.energia;
		this._salud = clase.salud;
		this._atributo = clase.atributo;
		this._cordura = clase.cordura;
		this._competencias = clase.competencias;
		this._ventajas = clase.ventajas;
		this._habilidades = clase.habilidades;
	}
		
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get energia() {
		return this._energia;
	}	
	set energia(value) {
		this._energia = value;
	}
	
	get salud() {
		return this._salud;
	}	
	set salud(value) {
		this._salud = value;
	}	
	
	get atributo() {
		return this._atributo;
	}	
	set atributo(value) {
		this._atributo = value;
	}	

	set cordura(value) {
		this._cordura = value;
	}
	get cordura() {
		return this._cordura;
	}	
	
	get competencias() {
		return this._competencias;
	}
	
	get ventajas() {
		return this._ventajas;
	}	
	
	get habilidades() {
		return this._habilidades;
	}	

}


class Clases {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Clérigo",
			  energia : 3,
			  salud : 6,
			  atributo: [ "SAB" ],
			  competencias: [ "Puedes llevar cualquier arma roma o escudo. Además, puedes equiparte armaduras acolchadas, armaduras de cuero, armaduras de cuero tachonado, armaduras de pieles, camisotes de mallas, cotas de escamas, corazas y protecciones parciales de placas." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para evitar la parálisis o el daño causado por el veneno." ],
			  habilidades: [ "<strong>Expulsar a los muertos vivientes</strong><br/>Puedes gastar un punto de energía y emplear una acción para expulsar a los muertos vivientes a 60 pies (18 metros) cuyo nivel sea igual o inferior al tuyo.<br/>Para lograrlo, necesitas superar una tirada de Sabiduría. Un muerto viviente expulsado tiene una probabilidad de 18+ de ser destruido. De no suceder esto, debe correr lo más lejos posible de ti durante 1 intervalo (6 asaltos) o hasta que dejes de ser visible.", "<strong>Lanzamiento de conjuros<strong><br/>Puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 (57 ed. básica)." ],
			  cordura: "SAB",
			},
			{
			  nombre : "Guerrero",
			  energia : 4,
			  salud : 8,
			  atributo: [ "FUE" , "DES", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Fuerza</strong> para derribar puertas.", "<strong>Tiradas de Constitución</strong> para recuperar energía.", "<strong>Tiradas de Caza</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Sacrificar escudo</strong><br/>Cuando falles una tirada de Destreza para evitar el daño de un ataque, puedes destruir completamente un escudo que tengas en tu mano —sin importar la categoría de DU que tenga— para ignorar todo el daño de dicho ataque. Debes declarar el uso de esta habilidad en lugar de realizar la tirada de Absorción.", "<strong>Recuperación</strong><br/>Tras un combate, puedes gastar un punto de energía y emplear un intervalo descansando para recuperar 1d6 puntos de Salud.", "<strong>Rajar</strong><br/>A partir del quinto nivel, cuando hagas un ataque sobre un objetivo, puedes causar el mismo daño a un enemigo a tu alcance de un nivel igual o inferior al objetivo inicial. Desde el décimo nivel, puedes causar el mismo daño a dos enemigos a tu alcance y, desde el decimoquinto, hasta a tres enemigos. Con esta habilidad puedes causar daño al mismo enemigo varias veces." ],
			  cordura: "SAB",
			},
			{
			  nombre : "Ladrón",
			  energia : 4,
			  salud : 4,
			  atributo: [ "DES" ],
			  competencias: [ "Puedes llevar todas las armas de proyectiles, armas cuerpo a cuerpo de una mano y armaduras acolchadas, armaduras de cuero y armaduras de cuero tachonado." ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para trepar, abrir cerraduras con ganzúa y para desactivar trampas.", "<strong>Tiradas de Iniciativa</strong> del grupo en combates en los que participe activamente.", "<strong>Tiradas de Orientación</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Combate con dos armas</strong><br/>Siempre que uses en cada mano un arma ligera —por ejemplo, dos dagas—, aumentas tu eficiencia en +1.", "<strong>Ataque sorpresa</strong><br/>Cuando atacas por sorpresa a una criatura, puedes gastar un punto de energía para realizar un ataque furtivo. Este ataque se realiza con ventaja y añade 1d4 al daño. Al alcanzar el quinto nivel, su daño adicional aumenta hasta 1d6, al décimo hasta 1d8, al decimoquinto hasta 1d10 y al vigésimo hasta 1d12.<br/>El daño adicional provocado por los ataques furtivos utiliza el mismo valor de eficiencia que las armas con las que se ataque." ],
			  cordura: "CAR",
			},
			{
			  nombre : "Mago",
			  energia : 2,
			  salud : 4,
			  atributo: [ "INT" ],
			  competencias: [ "Puedes portar bastones, dagas, hondas y varitas." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para ver si conoces un idioma y para recordar información sobre una criatura o tipo de monstruo." ],
			  habilidades: [ "<strong>Lanzamiento de conjuros</strong><br/>Puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 (57 ed. básica).", "<strong>Meditación</strong><br/>Si meditas durante un intervalo y gastas un punto de energía, puedes recuperar un conjuro que hayas gastado" ],
			  cordura: "INT",
			},
			{
			  nombre : "Elfo",
			  energia : 2,
			  salud : 6,
			  atributo: [ "DES", "INT", "CAR" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Inteligencia</strong> para detectar puertas secretas.", "<strong>Tiradas de Carisma</strong> para resistir el encantamiento.", "<strong>Tiradas de Forrajeo</strong> en las Tierras Salvajes." ],
			  habilidades: [ "<strong>Linaje feérico</strong><br/>Eres inmune a los ataques paralizantes de los necrófagos. El resto de tipos de parálisis te afectan con normalidad.", "<strong>Lanzamiento de conjuros</strong><br/>También puedes lanzar conjuros. En la tabla de la página siguiente puedes encontrar el número de conjuros que eres capaz de memorizar cada día.<br/>Las reglas que deben seguirse para aprender y lanzar conjuros están descritas en la página 69 (57 ed. básica).", "<strong>Magia apresurada</strong><br/>Además, cuando realizas un ataque puedes gastar un punto de energía para lanzar al mismo tiempo un conjuro cuyo tiempo de lanzamiento sea de un asalto." ],
			  cordura: "INT",
			},
			{
			  nombre : "Enano",
			  energia : 3,
			  salud : 10,
			  atributo: [ "FUE", "CON" ],
			  competencias: [ "Puedes llevar todas las armas, armaduras y escudos que existen." ],
			  ventajas: [ "<strong>Tiradas de Constitución</strong> para evitar el daño causado por el veneno.", "<strong>Tiradas de Inteligencia</strong> para encontrar trampas y para evitar el daño de conjuros y otros efectos mágicos." ],
			  habilidades: [ "<strong>Visión en la oscuridad</strong><br/>Tu especie tiene costumbre de vivir bajo tierra, por lo que ha desarrollado la capacidad de ver en la oscuridad no mágica.", "<strong>Nacidos de la piedra</strong><br/>Obtienes +1 a la efectividad de cualquier armadura hecha de metal que portes. Además, siempre que quieras puedes emplear un punto de energía para repetir una tirada de Absorción.", "<strong>Determinación</strong><br/>Cuando luchas, eres imparable, y transmites esa sensación a tus enemigos. Todas las criaturas que hayan probado tu acero obtienen un -1 a su puntuación de Moral durante el resto del combate." ],
			  cordura: "SAB",
			},
			{
			  nombre : "Mediano",
			  energia : 3,
			  salud : 6,
			  atributo: [ "FUE", "DES", "SAB" ],
			  competencias: [ "Puedes utilizar cualquier arma no más grande que una espada corta, escudos pequeños y cualquier armadura creada expresamente para seres del tamaño de un mediano —¡Incluso las armaduras para enanos son demasiado grandes!—" ],
			  ventajas: [ "<strong>Tiradas de Destreza</strong> para esconderse, para ocultarte en las tinieblas, para escaparte y para evitar un ataque cuerpo a cuerpo de un enemigo de igual o mayor tamaño que un ser humano ordinario.", "<strong>Tiradas de Pesca</strong> en las Tierras Salvajes" ],
			  habilidades: [ "<strong>Buena fortuna</strong><br/>Gracias a tu buena fortuna, cuando al realizar una tirada de característica obtienes un 1, puedes repetir dicha tirada, pero debes quedarte con el nuevo resultado —aunque sea otra vez un 1—.", "<strong>En el último momento</strong><br/>Cuando vas a sufrir las consecuencias de una trampa o dispositivo mágico, puedes gastar un punto de energía para evitarlas, aunque ya hayas fallado la tirada." ],
			  cordura: "CAR",
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


