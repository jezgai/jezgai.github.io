class EscudosVES {
	constructor() {
		
		this.escudos = 
		[
			{
				nombre: "Escudo físico",
				defensa: 1, 
				precio: 10,
			},
			{
				nombre: "Escudo de energía",
				defensa: 2, 
				precio: 30,
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


class ArmadurasVES {
	constructor() {
		
		this.armaduras = 
		[
			{
				nombre: "Ligera",
				defensa: 2, 
				precio: 20,
			},
			{
				nombre: "Mediana",
				defensa: 4, 
				precio: 60,
			},
			{
				nombre: "Pesada",
				defensa: 6, 
				precio: 100,
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


class ArmasVES {
	constructor() {
		this.armas = 
		[
			{
				nombre: "Daga",
				tipo: "CaC", 
				dano: "1d3+1",
				alcance: "",
				precio: 2,
			},
			{
				nombre: "Espada",
				tipo: "CaC", 
				dano: "1d6",
				alcance: "",
				precio: 5,
			},
			{
				nombre: "Vara",
				tipo: "CaC", 
				dano: "1d4",
				alcance: "",
				precio: 1,
			},
			{
				nombre: "Monodaga",
				tipo: "CaC", 
				dano: "1d3+1",
				alcance: "",
				precio: 20,
			},
			{
				nombre: "Bastón eléctrico",
				tipo: "CaC",
				dano: "1d6",
				alcance: "",
				precio: 40,
			},
			{
				nombre: "Vibroespada",
				tipo: "CaC", 
				dano: "1d6+1",
				alcance: "",
				precio: 30,
			},
			{
				nombre: "Hacha de plasma",
				tipo: "CaC", 
				dano: "1d6+1",
				alcance: "",
				precio: 30,
			},
			{
				nombre: "Vibrohacha",
				tipo: "CaC", 
				dano: "1d6",
				alcance: "",
				precio: 25,
			},
			{
				nombre: "Espada fotónica",
				tipo: "CaC", 
				dano: "1d8",
				alcance: "",
				precio: 100,
			},
			{
				nombre: "Ballesta sónica",
				tipo: "AD", 
				dano: "1d6+2",
				alcance: "40",
				precio: 60,
			},
			{
				nombre: "Pistola láser",
				tipo: "AD", 
				dano: "1d6",
				alcance: "20",
				precio: 50,
			},
			{
				nombre: "Blaster pesado",
				tipo: "AD", 
				dano: "1d6+2",
				alcance: "15",
				precio: 50,
			},
			{
				nombre: "Blaster de bolsillo",
				tipo: "AD", 
				dano: "1d4+1",
				alcance: "10",
				precio: 60,
			},
			{
				nombre: "Carabina láser",
				tipo: "AD", 
				dano: "1d8",
				alcance: "50",
				precio: 100,
			},
			{
				nombre: "Rifle láser",
				tipo: "AD", 
				dano: "1d10",
				alcance: "100",
				precio: 150,
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

class PaquetesVES {
	constructor() {
		this.paquetes = 
		[
            {
                nombre: "Paquete del combatiente",
                precio: 30,
                arma: "Blaster pesado",
                componentes: [ "Mochila", "4 barras de proteínas", "Binoculares", "Garfio mecánico", "Cartucho de energía", "Granadas de humo" ],
            },
            {
                nombre: "Paquete del técnico",
                precio: 25,
                arma: "Pistola laser",
                componentes: [ "Mochila", "4 barras de proteínas", "Herramientas", "Linterna" ],
            },
            {
                nombre: "Paquete del caballero",
                precio: 35,
                arma: "Espada fotónica",
                componentes: [ "Mochila", "2 barras de proteínas", "Binoculares" ],
            },
            {
                nombre: "Paquete del místico",
                precio: 15,
                arma: "Vara",
                componentes: [ "Mochila", "4 barras de proteínas", "Botiquín", "Respiradores" ],
            },
            {
                nombre: "Paquete del mediador",
                precio: 30,
                arma: "Blaster de bolsillo",
                componentes: ["Mochila", "2 barras de proteínas", "Comunicadores audio", "Linterna", "Binoculares", "Traje térmico"],
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


let escudosVES = new EscudosVES();
let armadurasVES = new ArmadurasVES();
let armasVES = new ArmasVES();
let paquetesVES = new PaquetesVES();

