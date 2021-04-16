
class Proeza {
	constructor (proeza) {
		this._nombre = proeza.nombre;
		this._descripcion = proeza.descripcion;
	}
}

class Proezas {
	constructor () {
		this._proezas = 
		[ 
			{
				nombre: "Cagüen txotx!", 
				descripcion: "El canalla es terco y tenaz y no se conforma fácilmente. Puedes repetir una tirada aplicando un uso gratuito de determinación (ver más adelante).",
			},
			{
				nombre: "Como gato panza arriba", 
				descripcion: "Cuando es puesto entre la espada y la pared, el canalla se revuelve con fiereza inusitada. Recibes una acción extra actuando antes que nadie.",
			},
			{
				nombre: "Manos pesadas", 
				descripcion: "En tu próxima tirada de daño cuerpo a cuerpo provocarás el doble de daño.",
			},
			{
				nombre: "Sigo aquí", 
				descripcion: "Durante dos turnos, ignoras la penalización por herida o estado de control y obtienes una ventaja.",
			},
			{
				nombre: "Agilidad felina", 
				descripcion: "Encajas bien los golpes y esquivas en el último momento. Reduce a la mitad el daño sufrido en el último ataque dirigido contra ti.",
			},
			{
				nombre: "Belleza extraordinaria", 
				descripcion: "Cuerpo esculpido en mármol y rostro de ensueño. Tu apariencia embelesa cuando sacas a relucir tus encantos. Obtén una doble ventaja en cualquier interacción social en la que puedas aprovechar tu belleza. En combate, puedes utilizarlo para obtener una oportunidad.",
			},
			{
				nombre: "Enciclopedia andante", 
				descripcion: "Tienes memoria fotográfica o estudiaste como un poseso. Obtienes ventaja al resolver una prueba de conocimientos, y el Lehendakari puede ofrecerte una oportunidad de forma añadida si tienes éxito.",
			},
			{
				nombre: "Manitas", 
				descripcion: "Tu habilidad para solucionar problemas con lo que tienes a mano es extraordinaria. Obtienes ventaja al resolver una prueba de reparación o manipulación, y el Lehendakari puede ofrecerte una oportunidad de forma añadida si tienes éxito.",
            },
		]
		
	}
}
