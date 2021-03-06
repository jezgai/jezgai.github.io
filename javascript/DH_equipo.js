class Escudos {
	constructor() {
		
		this.escudos = 
		[
			{
				nombre: "Escudo pequeño",
				absorcion: "+1", 
				du: "d6",
				precio: 5,
			},
			{
				nombre: "Escudo mediano",
				absorcion: "+1", 
				du: "d8",
				precio: 10,
			},
			{
				nombre: "Escudo grande",
				absorcion: "+1", 
				du: "d10",
				precio: 20,
			},
		];
	}
	
	
	escudo(nombre) {
		var indice=0;
		for (indice=0; indice<this.escudos.length; indice++) {
			if ( this.escudos[indice].nombre == nombre ) {
				return this.escudos[indice];
			}
		}
		return null;
	}
}


class Armaduras {
	constructor() {
		
		this.armaduras = 
		[
			{
				nombre: "Acolchada",
				absorcion: "d4", 
				du: "d4",
				precio: 5,
			},
			{
				nombre: "Cuero",
				absorcion: "d6", 
				du: "d6",
				precio: 10,
			},
			{
				nombre: "Piel",
				absorcion: "d6", 
				du: "d6",
				precio: 10,
			},
			{
				nombre: "Cuero tachonado",
				absorcion: "d6", 
				du: "d8",
				precio: 45,
			},
			{
				nombre: "Cota de anillas",
				absorcion: "d8", 
				du: "d6",
				precio: 30,
			},
			{
				nombre: "Camisote de mallas",
				absorcion: "d8", 
				du: "d8",
				precio: 50,
			},
			{
				nombre: "Cota de escamas",
				absorcion: "d8", 
				du: "d10",
				precio: 70,
			},
			{
				nombre: "Coraza",
				absorcion: "d8", 
				du: "d12",
				precio: 100,
			},
			{
				nombre: "Cota de mallas",
				absorcion: "d10", 
				du: "d8",
				precio: 75,
			},
		];
	}
	
	
	armadura(nombre) {
		var indice=0;
		for (indice=0; indice<this.armaduras.length; indice++) {
			if ( this.armaduras[indice].nombre == nombre ) {
				return this.armaduras[indice];
			}
		}
		return null;
	}
}


class Armas {
	constructor() {
		this.armas = 
		[
			{
				nombre: "Dao (sable)",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6+1",
				du: "",
				municion: "",
				precio: 15,
				penetracion: 1,
			},
			{
				nombre: "Cimitarra",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 25,
				penetracion: 1,
			},
			{
				nombre: "Clava",
				tipo: "CaC", 
				alcance: "",
				dano: "1d4",
				du: "",
				municion: "",
				precio: 0.1,
				penetracion: 0,
			},
			{
				nombre: "Daga",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d4",
				du: "",
				municion: "",
				precio: 2,
				penetracion: 1,
			},
			{
				nombre: "Sai (2)",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d4",
				du: "",
				municion: "",
				precio: 5,
				penetracion: 1,
			},
			{
				nombre: "Espada corta",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 10,
				penetracion: 1,
			},
			{
				nombre: "Hoz",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 1,
				penetracion: 1,
			},
			{
				nombre: "Hacha de mano",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 5,
				penetracion: 1,
			},
			{
				nombre: "Martillo ligero",
				tipo: "CaC", 
				alcance: "",
				dano: "1d4",
				du: "",
				municion: "",
				precio: 2,
				penetracion: 2,
			},
			{
				nombre: "Bastón",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 0.2,
				penetracion: 0,
			},
			{
				nombre: "Jō (bastón)",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 0.2,
				penetracion: 0,
			},
			{
				nombre: "Jian (espada)",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 15,
				penetracion: 1,
			},
			{
				nombre: "Espada larga",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 15,
				penetracion: 1,
			},
			{
				nombre: "Espada ropera",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 25,
				penetracion: 2,
			},
			{
				nombre: "Hacha de batalla",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 10,
				penetracion: 1,
			},
			{
				nombre: "Jabalina",
				tipo: "CaC", 
				alcance: "40",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 0.5,
				penetracion: 2,
			},
			{
				nombre: "Lanza",
				tipo: "CaC", 
				alcance: "40",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 1,
				penetracion: 2,
			},
			{
				nombre: "Pudao (lanza)",
				tipo: "CaC", 
				alcance: "40",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 1,
				penetracion: 2,
			},
			{
				nombre: "Látigo",
				tipo: "CaC", 
				alcance: "10",
				dano: "1d4",
				du: "",
				municion: "",
				precio: 2,
				penetracion: 1,
			},
			{
				nombre: "Lucero del alba",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 15,
				penetracion: 2,
			},
			{
				nombre: "Martillo de guerra",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 15,
				penetracion: 2,
			},
			{
				nombre: "Mayal",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 10,
				penetracion: 3,
			},
			{
				nombre: "Maza",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 5,
				penetracion: 2,
			},
			{
				nombre: "Alabarda",
				tipo: "CaC", 
				alcance: "",
				dano: "1d10",
				du: "",
				municion: "",
				precio: 20,
				penetracion: 1,
			},
			{
				nombre: "Dadao (sable)",
				tipo: "CaC", 
				alcance: "",
				dano: "1d10",
				du: "",
				municion: "",
				precio: 45,
				penetracion: 1,
			},
			{
				nombre: "Espadón",
				tipo: "CaC", 
				alcance: "",
				dano: "1d12",
				du: "",
				municion: "",
				precio: 50,
				penetracion: 1,
			},
			{
				nombre: "Gran clava",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 0.2,
				penetracion: 1,
			},
			{
				nombre: "Gran hacha",
				tipo: "CaC", 
				alcance: "",
				dano: "1d12",
				du: "",
				municion: "",
				precio: 30,
				penetracion: 1,
			},
			{
				nombre: "Guadaña",
				tipo: "CaC", 
				alcance: "",
				dano: "1d10",
				du: "",
				municion: "",
				precio: 10,
				penetracion: 1,
			},
			{
				nombre: "Guja",
				tipo: "CaC", 
				alcance: "",
				dano: "1d10",
				du: "",
				municion: "",
				precio: 20,
				penetracion: 2,
			},
			{
				nombre: "Tridente",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 5,
				penetracion: 2,
			},
			{
				nombre: "Arco corto",
				tipo: "AD", 
				alcance: "160 pies",
				dano: "1d6",
				du: "d8",
				municion: "Flechas",
				precio: 27,
				penetracion: 1,
			},
			{
				nombre: "Arco largo",
				tipo: "AD", 
				alcance: "300 pies",
				dano: "1d8",
				du: "d8",
				municion: "Flechas",
				precio: 52,
				penetracion: 1,
			},
			{
				nombre: "Ballesta de mano",
				tipo: "AD", 
				alcance: "60 pies",
				dano: "1d6",
				du: "d8",
				municion: "Virotes",
				precio: 77,
				penetracion: 0,
			},
			{
				nombre: "Ballesta ligera",
				tipo: "AD", 
				alcance: "160 pies",
				dano: "1d8",
				du: "d8",
				municion: "Virotes",
				precio: 42,
				penetracion: 1,
			},
			{
				nombre: "Ballesta pesada",
				tipo: "AD", 
				alcance: "200 pies",
				dano: "1d10",
				du: "d8",
				municion: "Virotes",
				precio: 102,
				penetracion: 2,
			},
			{
				nombre: "Cerbatana",
				tipo: "AD", 
				alcance: "50 pies",
				dano: "1d3",
				du: "d4",
				municion: "Dardos",
				precio: 1.2,
				penetracion: 0,
			},
			{
				nombre: "Dardo",
				tipo: "AD", 
				alcance: "30 pies",
				dano: "1d4",
				du: "d4",
				municion: "Dardos",
				precio: 0.2,
				penetracion: 0,
			},
			{
				nombre: "Honda",
				tipo: "AD", 
				alcance: "60 pies",
				dano: "1d4",
				du: "d10",
				municion: "Balines",
				precio: 0.2,
				penetracion: 1,
			},
			{
				nombre: "Arcabuz",
				tipo: "AD", 
				alcance: "160 pies",
				dano: "1d10+2",
				du: "d8",
				municion: "Bolas de plomo",
				precio: 80,
				penetracion: 2,
			},
			{
				nombre: "Mosquete",
				tipo: "AD", 
				alcance: "200 pies",
				dano: "1d12+2",
				du: "d8",
				municion: "Cartuchos",
				precio: 125,
				penetracion: 3,
			},
			{
				nombre: "Pistola",
				tipo: "AD", 
				alcance: "60 pies",
				dano: "1d8+2",
				du: "d6",
				municion: "Balas",
				precio: 50,
				penetracion: 2,
			},
			{
				nombre: "Trabuco",
				tipo: "AD", 
				alcance: "90 pies",
				dano: "1d8+2",
				du: "d6",
				municion: "Balas",
				precio: 70,
				penetracion: 2,
			},
			{
				nombre: "Cuchillo",
				tipo: "CaC", 
				alcance: "",
				dano: "1d3",
				du: "",
				municion: "",
				precio: 0.5,
				penetracion: 0,
			},
			{
				nombre: "Navaja",
				tipo: "CaC", 
				alcance: "30",
				dano: "1d3",
				du: "",
				municion: "",
				precio: 0.5,
				penetracion: 0,
			},
			{
				nombre: "Arpón",
				tipo: "CaC", 
				alcance: "40",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 1,
				penetracion: 1,
			},
			{
				nombre: "Estoque",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 20,
				penetracion: 1,
			},
			{
				nombre: "Alfanje",
				tipo: "CaC", 
				alcance: "",
				dano: "1d6",
				du: "",
				municion: "",
				precio: 25,
				penetracion: 1,
			},
			{
				nombre: "Sable",
				tipo: "CaC", 
				alcance: "",
				dano: "1d8",
				du: "",
				municion: "",
				precio: 25,
				penetracion: 2,
			},
		];
	}

	arma(nombre) {
		var indice=0;
		for (indice=0; indice<this.armas.length; indice++) {
			if ( this.armas[indice].nombre == nombre ) {
				return this.armas[indice];
			}
		}
		return null;
	}
}

class Paquetes {
	constructor() {
		this.paquetes = 
		[
            {
                nombre: "Paquete de mazmorras",
                precio: 5,
                componentes: ["Mochila", "Odre", "Antorcha", "Pértiga", "3 raciones de comida", "Trozo de tiza", "Ropa de viaje", "Manta", "Yesquero"],
            },
            {
                nombre: "Paquete de exploración",
                precio: 8,
                componentes: ["Mochila", "Odre", "Antorcha", "Pértiga", "7 raciones de comida", "Kit de cocina", "Ropa de viaje", "Tienda de campaña", "Yesquero"],
            },
            {
                nombre: "Paquete de hechicería",
                precio: 20,
                componentes: ["Mochila", "Odre", "Antorcha", "Pértiga", "3 raciones de comida", "Túnica", "Saco de dormir", "Yesquero", "Libro de conjuros"],
            },
            {
                nombre: "Paquete del pío",
                precio: 8,
                componentes: ["Mochila", "Odre", "Antorcha", "Pértiga", "7 raciones de comida", "Túnica", "Saco de dormir", "Yesquero", "Símbolo sagrado"],
            },
            {
                nombre: "Paquete del ladrón",
                precio: 20,
                componentes: ["Mochila", "Odre", "Antorcha", "Pértiga", "7 raciones de comida", "Ropas comunes", "Saco de dormir", "Yesquero", "Herramientas de ladrón"],
            },
            {
                nombre: "Paquete del artista",
                precio: 8,
                componentes: ["Mochila", "Odre", "Antorcha", "Pértiga", "5 raciones de comida", "Flauta", "Ropa de viaje", "Saco de dormir", "Yesquero"],
            },
            {
                nombre: "Paquete del filibustero",
                precio: 8,
                componentes: ["Mochila", "Pellejo de agua", "Farol de aceite", "Cuerda", "7 raciones de comida", "Botella de ron", "Bandana", "Petate", "Manta", "Yesquero"],
            },
            {
                nombre: "Paquete del matasanos",
                precio: 10,
                componentes: ["Mochila", "Pellejo de agua", "Farol de aceite", "Maletín de médico", "3 raciones de comida", "Botella de ron", "Sombrero emplumado", "Petate", "Manta", "Yesquero"],
            },
            {
                nombre: "Paquete del militar",
                precio: 8,
                componentes: ["Mochila", "Pellejo de agua", "Farol de aceite", "Cuerda", "7 raciones de comida", "Botella de vino", "Sombrero emplumado", "Petate", "Manta", "Yesquero"],
            },
            {
                nombre: "Paquete del inquisidor",
                precio: 8,
                componentes: ["Mochila", "Pellejo de agua", "Farol de aceite", "Cuerda", "7 raciones de comida", "Ropa negra", "Petate", "Manta", "Yesquero", "Biblia"],
            },
            {
                nombre: "Paquete del cortabolsas",
                precio: 20,
                componentes: ["Mochila", "Pellejo de agua", "Farol de aceite", "Cuerda", "7 raciones de comida", "Bandana", "Petate", "Manta", "Yesquero", "Herramientas de ladrón" ],
            },
            {
                nombre: "Paquete del cazador",
                precio: 8,
                componentes: ["Mochila", "Pellejo de agua", "Antorcha", "Cuerda", "7 raciones de comida", "Ropa de pieles", "Petate", "Manta", "Pipa y tabaco", "Yesquero" ],
            },
		];
	}

	paquete(nombre) {
		var indice=0;
		for (indice=0; indice<this.paquetes.length; indice++) {
			if ( this.paquetes[indice].nombre == nombre ) {
				return this.paquetes[indice];
			}
		}
		return null;
	}
}


