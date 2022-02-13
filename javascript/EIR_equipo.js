class Escudos {
	constructor() {
		
		this.escudos = 
		[
			{
				nombre: "Escudo pequeño",
				ca: "1", 
				claves: [ "[Escudo 9]" ],
				precio: 500,
				peso: 2000,
			},
			{
				nombre: "Escudo mediano",
				ca: "2", 
				claves: [ "[Escudo 12]" ],
				precio: 1000,
				peso: 3000,
			},
			{
				nombre: "Escudo grande",
				ca: "3", 
				claves: [ "[Escudo 15]", "[Estorbo]" ],
				precio: 2000,
				peso: 4000,
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
				ca: "11", 
				claves: [ "[Armadura Ligera]", "[Estorbo]" ],
				precio: 500,
				peso: 3500,
			},
			{
				nombre: "Cuero",
				ca: "11", 
				claves: [ "[Armadura Ligera]" ],
				precio: 1000,
				peso: 5000,
			},
			{
				nombre: "Pieles",
				ca: "12", 
				claves: [ "[Armadura Mediana]" ],
				precio: 1000,
				peso: 6000,
			},
			{
				nombre: "Cuero tachonado",
				ca: "12", 
				claves: [ "[Armadura Ligera]" ],
				precio: 4500,
				peso: 6000,
			},
			{
				nombre: "Camisote de mallas",
				ca: "13", 
				claves: [ "[Armadura Mediana]" ],
				precio: 5000,
				peso: 9000,
			},
			{
				nombre: "Cota de escamas",
				ca: "14", 
				claves: [ "[Armadura Mediana]" ],
				precio: 5000,
				peso: 20000,
			},
			{
				nombre: "Coraza",
				ca: "14", 
				claves: [ "[Armadura Mediana]" ],
				precio: 40000,
				peso: 10000,
			},
			{
				nombre: "Armadura de semiplacas",
				ca: "15", 
				claves: [ "[Armadura Mediana]", "[Estorbo]" ],
				precio: 80000,
				peso: 18000,
			},
			{
				nombre: "Cota de anillas",
				ca: "14", 
				claves: [ "[Armadura Pesada 11]", "[Estorbo]" ],
				precio: 3000,
				peso: 18000,
			},
			{
				nombre: "Cota de mallas",
				ca: "16", 
				claves: [ "[Armadura Pesada 13]", "[Estorbo]" ],
				precio: 7500,
				peso: 25000,
			},
			{
				nombre: "Armadura de bandas",
				ca: "17", 
				claves: [ "[Armadura Pesada 15]", "[Estorbo]" ],
				precio: 20000,
				peso: 27000,
			},
			{
				nombre: "Armadura de placas",
				ca: "18", 
				claves: [ "[Armadura Pesada 15]", "[Estorbo]" ],
				precio: 150000,
				peso: 29000,
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
				nombre: "Bastón",
				tipo: "CaC", 
				dano: "1d6 G",
				peso: 1800,
				precio: 20,
				claves: [ "[Versátil 2d4]" ],
				equipo: [ ],
			},
			{
				nombre: "Clava",
				tipo: "CaC", 
				dano: "1d4 G",
				peso: 1000,
				precio: 10,
				claves: [ "[Ligera]" ],
				equipo: [ ],
			},
			{
				nombre: "Daga",
				tipo: "CaC", 
				dano: "1d4 P",
				peso: 500,
				precio: 200,
				claves: [ "[Arrojadiza 8/24]", "[Ligera]", "[Sutil]" ],
				equipo: [ ],
			},
			{
				nombre: "Gran clava",
				tipo: "CaC", 
				dano: "2d4 G",
				peso: 5000,
				precio: 20,
				claves: [ "[A Dos Manos]" ],
				equipo: [ ],
			},
			{
				nombre: "Hacha de mano",
				tipo: "CaC", 
				dano: "1d6 C",
				peso: 1000,
				precio: 500,
				claves: [ "[Arrojadiza 8/24]", "[Ligera]" ],
				equipo: [ ],
			},
			{
				nombre: "Hoz",
				tipo: "CaC", 
				dano: "1d6 C",
				peso: 1000,
				precio: 100,
				claves: [ "[Ligera]" ],
				equipo: [ ],
			},
			{
				nombre: "Jabalina",
				tipo: "CaC", 
				dano: "1d6 P",
				peso: 1000,
				precio: 50,
				claves: [ "[Arrojadiza 12/48]" ],
				equipo: [ ],
			},
			{
				nombre: "Lanza",
				tipo: "CaC", 
				dano: "1d6 P",
				peso: 1500,
				precio: 100,
				claves: [ "[Arrojadiza 8/24]", "[Versátil]" ],
				equipo: [ ],
			},
			{
				nombre: "Martillo ligero",
				tipo: "CaC", 
				dano: "1d4 G",
				peso: 1000,
				precio: 200,
				claves: [ "[Arrojadiza 8/24]", "[Ligera]" ],
				equipo: [ ],
			},
			{
				nombre: "Maza",
				tipo: "CaC", 
				dano: "1d6 G",
				peso: 2000,
				precio: 500,
				claves: [ ],
				equipo: [ ],
			},
			{
				nombre: "Arco corto",
				tipo: "AD", 
				dano: "1d6 P",
				peso: 1000,
				precio: 2500,
				claves: [ "[A Dos Manos]", "[Munición 32/128]" ],
				equipo: [ "Carcaj", "20 flechas" ],
			},
			{
				nombre: "Ballesta ligera",
				tipo: "AD", 
				dano: "1d8 P",
				peso: 2500,
				precio: 2500,
				claves: [ "[A Dos Manos]", "[Munición 32/128]", "[Recarga]" ],
				equipo: [ "Estuche de virotes", "20 virotes" ],
			},
			{
				nombre: "Dardo",
				tipo: "AD", 
				dano: "1d4 P",
				peso: 100,
				precio: 5,
				claves: [ "[Arrojadiza 8/24]" ],
				equipo: [ ],
			},
			{
				nombre: "Honda",
				tipo: "AD", 
				dano: "1d4 G",
				peso: 0,
				precio: 10,
				claves: [ "[Munición 12/24]" ],
				equipo: [ "20 balines" ],
			},
			{
				nombre: "Alabarda",
				tipo: "CaC", 
				dano: "1d10 C",
				peso: 3000,
				precio: 2000,
				claves: [ "[A Dos Manos]", "[Alcance]", "[Pesada]" ],
				equipo: [ ],
			},
			{
				nombre: "Cimitarra",
				tipo: "CaC", 
				dano: "1d6 G",
				peso: 3000,
				precio: 2500,
				claves: [ "[Ligera]", "[Sutil]" ],
				equipo: [ ],
			},
			{
				nombre: "Espada corta",
				tipo: "CaC", 
				dano: "1d6 C",
				peso: 1000,
				precio: 1000,
				claves: [ "[Ligera]", "[Sutil]" ],
				equipo: [ ],
			},
			{
				nombre: "Espada larga",
				tipo: "CaC", 
				dano: "1d8 C",
				peso: 1500,
				precio: 1500,
				claves: [ "[Versátil 1d10]" ],
				equipo: [ ],
			},
			{
				nombre: "Espada ropera",
				tipo: "CaC", 
				dano: "1d8 P",
				peso: 1000,
				precio: 2500,
				claves: [ "[Sutil]" ],
				equipo: [ ],
			},
			{
				nombre: "Espadón",
				tipo: "CaC", 
				dano: "2d6 C",
				peso: 3000,
				precio: 5000,
				claves: [ "[A Dos Manos]", "[Pesada]" ],
				equipo: [ ],
			},
			{
				nombre: "Filo otoñal",
				tipo: "CaC", 
				dano: "1d6 C",
				peso: 2000,
				precio: 8000,
				claves: [ "[Arrojadiza 8/24]", "[Ligera]", "[Sutil]" ],
				equipo: [ ],
			},
			{
				nombre: "Gran hacha",
				tipo: "CaC", 
				dano: "1d12 C",
				peso: 3500,
				precio: 3000,
				claves: [ "[A Dos Manos]", "[Pesada]" ],
				equipo: [ ],
			},
			{
				nombre: "Hacha de batalla",
				tipo: "CaC", 
				dano: "1d8 C",
				peso: 3000,
				precio: 1000,
				claves: [ "[Versátil 1d10]" ],
				equipo: [ ],
			},
			{
				nombre: "Martillo de guerra",
				tipo: "CaC", 
				dano: "1d8 G",
				peso: 1000,
				precio: 1500,
				claves: [ "[Versátil 1d10]" ],
				equipo: [ ],
			},
			{
				nombre: "Mayal",
				tipo: "CaC", 
				dano: "2d4 G",
				peso: 1000,
				precio: 1000,
				claves: [ ],
				equipo: [ ],
			},
			{
				nombre: "Arco largo",
				tipo: "AD", 
				dano: "1d8 P",
				peso: 1000,
				precio: 5000,
				claves: [ "[A Dos Manos]", "[Munición 60/240]", "[Pesada]" ],
				equipo: [ "Carcaj", "20 flechas" ],
			},
			{
				nombre: "Ballesta de mano",
				tipo: "AD", 
				dano: "1d6 P",
				peso: 1500,
				precio: 7500,
				claves: [ "[Ligera]", "[Munición 12/48]", "[Recarga]" ],
				equipo: [ "Estuche de virotes", "20 virotes" ],
			},
			{
				nombre: "Ballesta pesada",
				tipo: "AD", 
				dano: "1d10 P",
				peso: 8000,
				precio: 5000,
				claves: [ "[A Dos Manos]", "[Munición 40/160]", "[Pesada]", "[Recarga]" ],
				equipo: [ "Estuche de virotes", "20 virotes" ],
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


