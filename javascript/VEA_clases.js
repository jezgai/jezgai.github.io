class ClaseArr extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._pod = clase.pod;
	}
		
	
	
	get pod() {
		return this._pod;
	}
	set pod(value) {
		this._pod = value;
	}

	talentos(nivel) {
		var tal = [];
		var intal=0;
		
		var tls = Comun.shuffle(this._talentos.clone());
		tal.push(tls[0]);
		tal.push(tls[1]);
		if ( nivel >= 4 )
			tal.push(tls[2]);
		if ( nivel >= 8 )
			tal.push(tls[3]);
		
		return tal;
	}


	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}


}



class ClasesArr {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Brujo/a",
			  talentos : [ "Coraje", "Sensibilidad mágica", "Sexto sentido", "Transferir esencia" ],
			  daguante : 4,
			  atrs : [ "SAB" , "INT" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  pod : [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			},
			{
			  nombre : "Bribón/a",
			  talentos : [ "Compañero animal", "Emboscar", "Lengua afilada", "Red de contactos" ],
			  daguante : 6,
			  atrs : [ "DES" , "FUE" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			},
			{
			  nombre : "Erudito/a",
			  talentos : [ "Buena reputación", "Cirujano", "Instruido", "Manitas" ],
			  daguante : 6,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 0, 1, 1, 2, 2, 3, 3, 3 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			},
			{
			  nombre : "Luchador/a",
			  talentos : [ "Ataque certero", "Ataques múltiples", "Brazo poderoso", "Lucha con X" ],
			  daguante : 8,
			  atrs : [ "FUE" , "CON" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  pod : [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			},
		]
		
		this._dtalentos = [ { nombre: "Afortunado", descripcion: "Al inicio de cada sesión puedes gastar 1 Doblón para realizar tres tiradas con el d20. Anota las dos que quieras en un papel. Durante la sesión puedes cambiar el resultado de una tirada por uno de los resultados anotados. Cada valor solo puede usarse una vez y los no usados se pierden al final de la sesión." },
                        { nombre: "Ataque certero", descripcion: "Tus ataques se consideran críticos con un 19-20."},
                        { nombre: "Ataques múltiples", descripcion: "Cuando derrotas a un enemigo puedes realizar inmediatamente un ataque adicional contra otro que esté a tu alcance, hasta un número máximo de ataques igual a tu nivel." }, 
                        { nombre: "Brazo poderoso", descripcion: "Aumentas en +1 el daño en combate cuerpo a cuerpo y con armas arrojadizas. Además, doblas el alcance de las armas arrojadas, permitiendo atacar a grandes distancias sin Desventaja." },
                        { nombre: "Buena reputación", descripcion: "Una combinación de personalidad atractiva y buena suerte hacen que tus acciones siempre se vean con los mejores ojos posibles. Una vez por sesión puedes tener éxito automático en una prueba de Comunicación gracias a tu renombre. Además, puedes gastar 1 Doblón para detener un conflicto armado o social, otorgándote una segunda oportunidad de aclarar la situación."} , 
                        { nombre: "Cirujano", descripcion: "Ventaja en Erudición con asuntos médicos, como identificar venenos, destilar antídotos, etc. En las pruebas para aplicar vendajes en combate a un compañero incapacitado puedes usar Erudición en vez de Supervivencia." },
                        { nombre: "Compañero animal", descripcion: "Tienes un mono amaestrado, un loro inteligente, un caimán enano con correa o algún otro tipo de animal leal a ti. Acuerda con el Comodoro una capacidad para tu animal y podrás usarlo como si fuera un Trasfondo adicional. Sin embargo, tu compañero está expuesto a la muerte y al daño. Por ejemplo, un loro podría dar Ventaja a tiradas de Alerta contra emboscadas, un mono puede usarse para colarse por sitios estrechos y agenciarse un objeto pequeño y brillante y un caimán enano te dará Ventaja en tus intentos de intimidar a alguien." }, 
                        { nombre: "Coraje", descripcion: "Tienes una gran fuerza mental ante el horror. Ventaja en INS +SAB para resistir las pruebas de Miedo." },
                        { nombre: "Elegante", descripcion: "Sabes cómo arreglarte con las mejores casacas y llevar un tricornio con estilo. Ventaja en Comunicación en ambientes de corte y nobleza."}, 
                        { nombre: "Emboscar", descripcion: "Ventaja en Subterfugio para moverte en silencio y acechar a un objetivo. Si tienes éxito al acercarte en silencio tu ataque inflige +1d4 de daño." },
                        { nombre: "Hígado de acero", descripcion: "Ventaja en INS +CON para resistir borracheras y venenos. Gastando 1 Doblón eliminas la Desventaja o cualquier otra penalización por estar ebrio o embotado por alguna sustancia durante un número de asaltos igual a tu nivel." }, 
						{ nombre: "Ímpetu emprendedor", descripcion: "No has desperdiciado ni un día de tu vida. Ganas un Trasfondo adicional." } ,
						{ nombre: "Instruido",  descripcion: "Escoge una materia: geografía del Caribe, diplomacia europea, historia centroamericana, piratas legendarios, cartografía naval... Tienes Ventaja cada vez que haces una prueba de Erudición relacionada con ese asunto." },
						{ nombre: "Lengua afilada", descripcion: "Has aprendido más insultos en tu vida que doblones has tenido en el bolsillo. Además te basta con mirar a una persona para saber qué palabras le harán más daño, haciéndole bajar la guardia. En un Duelo de cualquier tipo, tienes Ventaja en la prueba enfrentada de Evaluación del contrincante. Si tienes éxito ¡no olvides proferir un insulto o comentario agudo cuando uses la tirada con Ventaja en el duelo!. Adicionalmente, tienes Ventaja en la prueba de Comunicación cuando en una conversación quieras enfadar a alguien, humillarlo o hacerle perder la compostura."},
						{ nombre: "Lobo de mar", descripcion: "Ventaja en las pruebas de Manipulación y Supervivencia que tengan que ver con el manejo de embarcaciones o conocimientos de altamar." },
						{ nombre: "Lucha con X",  descripcion: "Escoge un arma. Ganas un +1 al ATQ y Daño con ella. Si luchas con dos armas y el arma principal es de ese tipo, anula las penalizaciones por Lucha con dos armas." },
						{ nombre: "Manitas",  descripcion: "Ventaja en reparaciones y en manipulación de mecanismos en general." },
						{ nombre: "Red de contactos",  descripcion: "Conoces a mucha gente y alguna hasta te debe un favor. Con una prueba de Comunicación contra CD14 encontrarás un contacto en algún ámbito, como la Hermandad de la Costa, la corte francesa, etc. Gastando 1 Doblón tendrás éxito automáticamente." },
						{ nombre: "Sensibilidad mágica", descripcion: "Puedes gastar puntos de Poder (POD) para realizar conjuros." },
						{ nombre: "Sexto sentido",  descripcion: "Percibes cuándo el peligro se cierne sobre ti y los tuyos. Ventaja en Alerta o INS para evitar peligros. Si gastas un Doblón, puedes pedir al Comodoro que te indique si algo es peligroso sin necesidad de tirar." },
						{ nombre: "Transferir esencia",  descripcion: "Puedes convertir 3 puntos de Vida (PV) en 1 punto de Poder (POD)." },
						{ nombre: "Volver de entre los muertos",  descripcion: "Una vez por aventura, cuando una única fuente de daño fuese a reducir tus Puntos de Vida a 0, puedes gastar 1 Doblón e ignorar ese daño." },
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
				return new ClaseArr(this._clases[iclases]);
			}
		}
		return new ClaseArr(this._clases[Comun.random(this._clases.length, 0)]);
	}
	
    dTalentos(talento) 
    {
        var italento = 0;
        for (italento = 0; italento< this._dtalentos.length; italento++) {
            if ( this._dtalentos[italento].nombre == talento )
                return "<strong>" + this._dtalentos[italento].nombre + "</strong><br/>" + this._dtalentos[italento].descripcion;
        }
        
        return "<strong>" + talento + "</strong><br/>";
    }

	
	
}

let clasesArr = new ClasesArr();
