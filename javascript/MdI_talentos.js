
class Talento {
	constructor (talento) {
		this._nombre = talento.nombre;
		this._descripcion = talento.descripcion;
	}
}

class Talentos {
	constructor () {
		this._talentos = 
		[ 
			{
				nombre: "Acróbata", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Picaresca (Acrobacias). Además, el personaje reduce el daño sufrido por una caída en 3 puntos de daño.",
			},
			{
				nombre: "Afortunado", 
				descripcion: "puedes gastar 1 punto de Fortuna para añadir +2 a una tirada después de hacerla.",
			},
			{
				nombre: "Alquimista", 
				descripcion: "el personaje puede elaborar pociones y compuestos químicos de extrañas propiedades (consulta la sección Alquimia).",
			},
			{
				nombre: "Alumbrado", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Erudición relacionadas con la religión. Además, el personaje puede reforzar su convicción mediante la oración, la flagelación y el ayuno. Este proceso lleva una hora y, tras él, el personaje sufre 2 de daño y recupera 1 Punto de Fortuna.",
			},
			{
				nombre: "Ambidiestro", 
				descripcion: "cuando el personaje esgrime un arma en cada mano, no necesitará consumir una acción de combate para intentar parar un ataque.",
			},
			{
				nombre: "Artes marciales", 
				descripcion: "el daño desarmado aumenta en 2. Además, el personaje puede usar Brío (Combate sin armas) para parar un ataque con armas, aunque sufrirá 1 de daño cada vez que lo haga.",
			},
			{
				nombre: "Autodestrucción", 
				descripcion: "los artilugios fabricados por el personaje tienen incorporado un mecanismo de autodestrucción. Puedes gastar 1 Punto de Fortuna para utilizar el artilugio como si de una bomba de mano se tratara, arrojándolo mediante Brío (Atletismo) contra Defensa. El artilugio tiene una puntuación de daño de 7 y queda reducido a cenizas tras ser lanzado. Es necesario poseer el talento Inventor para poder escoger este.",
			},
			{
				nombre: "Belleza sobrenatural", 
				descripcion: "el personaje puede parar ataques durante un combate usando Galantería (Seducción). Esta estratagema solo funcionará cuando te enfrentes a seres humanos inteligentes que sean capaces de verte.",
			},
			{
				nombre: "Bendición", 
				descripcion: "puedes entregar tus Puntos de Fortuna a otros jugadores, siempre que hacer esto no les permita superar su máximo de Puntos de Fortuna permitido. Además, recuperas un PF cada vez que consigues un éxito crítico (siempre que hacer esto no haga que superes tu máximo de PF).",
			},
			{
				nombre: "Camaleón", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Picaresca (Engañar) cuando intentes disfrazarte o suplantar a alguien.",
			},
			{
				nombre: "Capitán", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Erudición (Navegación). Además, cuando capitanees un barco, puedes gastar tus puntos de Fortuna para modificar las tiradas de tu tripulación relacionadas con el gobierno del barco y las batallas navales, siempre y cuando los miembros de la tripulación sean Secundarios.",
			},
			{
				nombre: "Como la centella", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de iniciativa. Además, el personaje logra esquivar o parar un ataque si iguala el resultado del atacante, no necesita superarlo.",
			},
			{
				nombre: "Compañero animal", 
				descripcion: "tienes una mascota mucho más inteligente y fiel que cualquier otro miembro de su especie, un caballo, un perro o un ave de cetrería (o también un mono o un loro si has llevado una vida marinera). Puedes gastar tus puntos de Fortuna en las tiradas de tu mascota. Este talento se puede adquirir varias veces.",
			},
			{
				nombre: "Conocimiento prohibido", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Erudición relacionadas con lo sobrenatural y las lenguas muertas. Además, si te encuentras presente en el momento en el que se ejecuta un hechizo, ritual o maldición, podrás gastar 1 Punto de Fortuna para intentar frustrarlo superando una tirada enfrentada de Erudición contra el hechicero.",
			},
			{
				nombre: " Cuanto más grande, mejor", 
				descripcion: "ignora la penalización a la iniciativa por esgrimir un arma a dos manos. Además, tira dos dados y quédate con el mejor resultado en las tiradas de Brío (Atletismo) para levantar objetos pesados.",
			},
			{
				nombre: "Depredador", 
				descripcion: "tira dos dados y quédate el mejor resultado en las tiradas de Brío (Supervivencia) destinadas a rastrear a una presa. Además, el personaje suma 2 al daño en el primer ataque con éxito contra un oponente al que haya emboscado.",
			},
			{
				nombre: "Derechazo", 
				descripcion: "el daño desarmado aumenta en 3.",
			},
			{
				nombre: "Detective", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Erudición y Picaresca destinadas a examinar la escena de un crimen, detectar falsificaciones o perseguir a un criminal.",
			},
			{
				nombre: "Discípulo de Paracelso", 
				descripcion: "puedes gastar 1 Punto de Fortuna para improvisar un nuevo compuesto alquímico a partir de dos de tus compuestos actuales, en unos minutos y sin necesidad de contar con un laboratorio. Deberás superar la tirada de Erudito (Ciencias) correspondiente. Es necesario poseer el talento Alquimista para poder escoger este.",
			},
			{
				nombre: "Disparo preciso", 
				descripcion: "cuando lleves a cabo un ataque a distancia reduce a 0 la Defensa obtenida por el objetivo gracias a la cobertura.",
			},
			{
				nombre: "Domador", 
				descripcion: "tira dos dados y quédate el mejor resultado en las tiradas de Brío (Equitación) y Galantería (Trato con animales).",
			},
			{
				nombre: "Donde más duele", 
				descripcion: "tus ataques ignoran 2 puntos de la armadura del objetivo.",
			},
			{
				nombre: "Ejército de un solo hombre", 
				descripcion: "puedes gastar 1 Punto de Fortuna para hacer un ataque adicional durante tu turno de combate, pero solo si dicho ataque no está dirigido a un adversario al que ya atacaste ese asalto. El único límite al número de ataques que se pueden hacer de esta forma es la cantidad de adversarios que rodean al personaje.",
			},
			{
				nombre: "Exorcista", 
				descripcion: "puedes utilizar Brío (Intimidar) sobre criaturas sobrenaturales y, además, tirar dos dados y elegir el mejor resultado.",
			},
			{
				nombre: "Experimentado", 
				descripcion: "el personaje ha dedicado su vida entera a formar su cuerpo y su mente hasta llevarlos a límites casi sobrehumanos. Tienes 2 pericias más.",
			},
			{
				nombre: "Experto en la Destreza", 
				descripcion: "tira dos dados y quédate el mejor resultado en las tiradas de Brío (Combate cuerpo a cuerpo) cuando combatas con un estoque. Además, suma 1 a las tiradas de Iniciativa si tu espada ya está desenvainada al inicio del combate.",
			},
			{
				nombre: "Guante blanco", 
				descripcion: "tira dos dados y quédate el mejor resultado en las tiradas de Picaresca (Latrocinio).",
			},
			{
				nombre: "Inspirar miedo", 
				descripcion: "al comienzo de un encuentro de combate, como única acción del primer asalto, puedes intentar inspirar miedo en tus adversarios superando una tirada enfrentada de Brío (Intimidar). Si tienes éxito, tus oponentes tirarán dos dados en sus tiradas de ataque y deberán quedarse con el peor resultado. Esta penalización desaparecerá en cuanto tus adversarios comprueben que eres de carne y hueso (al menos uno de ellos logre atacarte con éxito).",
			},
			{
				nombre: "Inventor", 
				descripcion: "el personaje puede diseñar, construir y reparar artilugios mecánicos de un nivel tecnológico mucho más avanzado al que corresponde a su época (consulta la sección Artilugios).",
			},
			{
				nombre: "Lacayo", 
				descripcion: "tienes un guardaespaldas, criado, lacayo, sirviente, mayordomo o ama de llaves de total confianza. Se trata de un personaje con una puntuación de 2 en todos los atributos y una pericia a tu elección. Además, puedes gastar tus Puntos de Fortuna en las tiradas de tu lacayo. Este talento se puede adquirir varias veces.",
			},
			{
				nombre: "Lucha a ciegas", 
				descripcion: "tu penalización por ceguera, oscuridad o escasa visibilidad se reduce en 2 (de -6 pasa a -4, de -4 a -2 y de -2 a 0). Consulta la sección Ocultarse y cobertura.",
			},
			{
				nombre: "Maestro del escudo", 
				descripcion: "parar con el escudo no consume una acción en combate. Además, el personaje puede lanzar el escudo utilizando la habilidad Brío (Atletismo), con un alcance máximo de 10 metros y un daño igual a la bonificación que otorga.",
			},
			{
				nombre: "Oídos en todas partes", 
				descripcion: "tira dos dados y quédate con el mejor resultado en las tiradas de Galantería (Bajos fondos o Diplomacia) relacionadas con la recopilación de información.",
			},
			{
				nombre: "Ordenado", 
				descripcion: "el personaje pertenece a la jerarquía eclesiástica, con sus ventajas y sus obligaciones. Tira dos dados y quédate con el mejor resultado en las tiradas de Brío (Intimidar) destinadas a atemorizar a sus fieles recurriendo a los tormentos del infierno. Además, el personaje añade 1 a su Defensa cuando se enfrente a adversarios que profesen su mismo credo.",
			},
			{
				nombre: "Piel de bronce", 
				descripcion: "la piel del personaje es dura como el cuero; obtiene una puntuación de armadura de 3 cuando no lleva puesta ninguna armadura.",
			},
			{
				nombre: "Poderoso caballero...", 
				descripcion: "puedes gastar 1 Punto de Fortuna para sobornar a un Secundario durante un combate. Esto requiere utilizar una acción y superar una tirada enfrentada de Galantería (Diplomacia o Bajos fondos, dependiendo de las circunstancias). Si tienes éxito, puedes controlarlo y considerarlo un aliado hasta el final del encuentro, momento en el que deberás pagarle y dejarlo marchar libremente. El Valido puede determinar que ciertos adversarios no pueden ser sobornados, aunque deberá informarte de ello antes de que utilices tu acción para usar este talento.",
			},
			{
				nombre: "Predestinado", 
				descripcion: "tu puntuación máxima de Puntos de Fortuna aumenta en 1.",
			},
			{
				nombre: "Recarga rápida", 
				descripcion: "reduce en 1 acción el tiempo de recarga de un arma de fuego (el personaje necesitará solo 1 acción para recargar un arcabuz, no necesitará acciones para recargar una pistola, etc.).",
			},
			{
				nombre: "Reflejos felinos", 
				descripcion: "puedes intentar esquivar ataques a distancia, siempre y cuando seas consciente de ellos, sin tener que consumir una acción en combate para ello.",
			},
			{
				nombre: "Reliquia", 
				descripcion: "posees una reliquia, ya sea un arma, armadura, joya, amuleto, grimorio, etc... Elige un talento. Mientras el artefacto se encuentre en tu poder podrás utilizar ese talento como si fuera tuyo. Además, tu destino y el de la reliquia están entrelazados, de tal forma que obtienes 1 PF adicional y tus Puntos de Fortuna máximos aumentan en 1. Si alguna vez la reliquia deja de estar en tu poder, tus Puntos de Fortuna máximos se reducirán a la mitad (redondeando hacia abajo) hasta que la recuperes, algo para lo que probablemente sea necesaria toda una aventura, como poco.",
			},
			{
				nombre: "Sentido del peligro", 
				descripcion: "puedes hacer una tirada de Picaresca (Perspicacia) con ND 7 para actuar con normalidad aunque hayas sido emboscado o sorprendido. También puedes gastar 1 Punto de Fortuna para actuar el primero en el orden de iniciativa. Este gasto se puede hacer después de ver el resultado de la tirada de iniciativa.",
			},
			{
				nombre: "Sombra nocturna", 
				descripcion: "tira dos dados y quédate el mejor resultado en las tiradas de Picaresca (Sigilo). Además, la Defensa del personaje aumenta en 1 cuando se encuentra sumido en la oscuridad o inmerso en las sombras.",
			},
			{
				nombre: "Superviviente", 
				descripcion: "suma tus Puntos de Fortuna actuales a las tiradas de Brío (Supervivencia) y Erudito (Navegación), y a las tiradas de Brío para resistir los efectos de enfermedades o temperaturas extremas.",
			},
			{
				nombre: "Titiritero", 
				descripcion: "puedes gastar tus Puntos de Fortuna para mejorar las tiradas de tus autómatas, que recibirán un +3 en lugar de un +2 a sus tiradas. Es necesario poseer el talento Inventor para poder escoger este.",
			},
			{
				nombre: "Vista de águila", 
				descripcion: "el personaje no sufre penalizaciones por largo alcance en sus ataques a distancia. Además, tira dos dados y quédate el mejor resultado en las tiradas de Picaresca (Perspicacia) que dependan de la vista.",
			},
		]
		
	}
}
