class Moneda {
	constructor() {
		this.po = 0;
		this.pp = 0;
		this.pc = 0;
	}
	
	conviertepc() {
		return ( (100*this.po) + (10*this.pp) + this.pc);
	}
	
	cargapc(dinero) {
		this.po = Math.trunc(dinero/100);
		this.pp = Math.trunc((dinero-(100*this.po))/10);
		this.pc = dinero - (100*this.po) - (10*this.pp);
	}
	carga(_po, _pp, _pc) {
		this.po = _po;
		this.pp = _pp;
		this.pc = _pc;
	}
	gasta(dinero) {
		var actual = this.conviertepc();
		actual -= dinero;
		this.cargapc(actual);
	}
}

class Armadura {
	constructor(armadura) {
		this.nombre = armadura.nombre;
		this.abs = armadura.abs;
		this.du = armadura.du;
		this.precio = armadura.precio;
	}
}

class Armaduras
{
	constructor() {
		this.armaduras = [
						{
							nombre: "Ropa",
							abs: 0,
							du: "-",
							precio: 50
						},
						{
							nombre: "Jubón acolchado",
							abs: 1,
							du: "d4",
							precio: 100
						},
						{
							nombre: "Cuero",
							abs: 2,
							du: "d6",
							precio: 250
						},
						{
							nombre: "Cuero tachonado",
							abs: 3,
							du: "d8",
							precio: 450
						},
						{
							nombre: "Malla/Anillas",
							abs: 4,
							du: "d10",
							precio: 700
						},
						{
							nombre: "Placas",
							abs: 5,
							du: "d12",
							precio: 900
						},
						{
							nombre: "Escudo pequeño",
							abs: 1,
							du: "d4",
							precio: 100
						},
						{
							nombre: "Escudo grande",
							abs: 2,
							du: "d4",
							precio: 150
						}
		]
	}
	
	
	
	armadura(nombre) {
		var iarmadura=0;
		for ( iarmadura = 0; iarmadura < this.armaduras.length; iarmadura++ ) {
			if ( this.armaduras[iarmadura].nombre == nombre ) {
				return new Armadura(this.armaduras[iarmadura]);
			}
		}
		return new Armadura(this.armaduras[ Comun.random(this.armaduras.length, 0)]);
	}
}

class Arma {
	constructor(arma) {
		this.nombre = arma.nombre;
		this.daño = arma.daño;
		this.precio = arma.precio;
	}
}

class Armas
{
	constructor() {
		this.armas = [
						{
							nombre: "Arma de asta",
							daño: { ndados: 1, tdado: 6, modificador: 0 },
							precio: 100
						},
						{
							nombre: "Bastón",
							daño: { ndados: 1, tdado: 3, modificador: 0 },
							precio: 20
						},
						{
							nombre: "Daga",
							daño: { ndados: 1, tdado: 3, modificador: 0 },
							precio: 30
						},
						{
							nombre: "Espada corta",
							daño: { ndados: 1, tdado: 4, modificador: 1 },
							precio: 40
						},
						{
							nombre: "Espada",
							daño: { ndados: 1, tdado: 6, modificador: 0 },
							precio: 50
						},
						{
							nombre: "Espadón",
							daño: { ndados: 1, tdado: 6, modificador: 2 },
							precio: 100
						},
						{
							nombre: "Hacha",
							daño: { ndados: 1, tdado: 6, modificador: 0 },
							precio: 50
						},
						{
							nombre: "Hacha de guerra",
							daño: { ndados: 1, tdado: 6, modificador: 2 },
							precio: 100
						},
						{
							nombre: "Martillo",
							daño: { ndados: 1, tdado: 6, modificador: 0 },
							precio: 50
						},
						{
							nombre: "Martillo de guerra",
							daño: { ndados: 1, tdado: 6, modificador: 2 },
							precio: 100
						},
						{
							nombre: "Mayal",
							daño: { ndados: 1, tdado: 6, modificador: 0 },
							precio: 50
						},
						{
							nombre: "Arco",
							daño: { ndados: 1, tdado: 6, modificador: 0 },
							precio: 100
						},
						{
							nombre: "Arco compuesto",
							daño: { ndados: 1, tdado: 6, modificador: 2 },
							precio: 150
						},
						{
							nombre: "Ballesta",
							daño: { ndados: 1, tdado: 6, modificador: 2 },
							precio: 200
						},
						{
							nombre: "Dardo",
							daño: { ndados: 1, tdado: 3, modificador: 1 },
							precio: 50
						},
						{
							nombre: "Honda",
							daño: { ndados: 1, tdado: 3, modificador: 0 },
							precio: 80
						}
		]
	}
	
	arma(nombre) {
		var iarma=0;
		for ( iarma = 0; iarma < this.armas.length; iarma++ ) {
			if ( this.armas[iarma].nombre == nombre ) {
				return new Arma(this.armas[iarma]);
			}
		}
		return new Arma(this.armas[ Comun.random(this.armas.length, 0)]);
	}
}

class Pertrecho {
	constructor(pertrecho) {
		this.nombre = pertrecho.nombre;
		this.du = pertrecho.du;
		this.precio = pertrecho.precio;
	}
}

class Pertrechos
{
	
	constructor() {
		this.pertrechos = [
							{
								nombre: "Agua bendita",
								du: "d4",
								precio: 150
							},
							{
								nombre: "Antorchas (6)",
								du: "d6",
								precio: 10
							},
							{
								nombre: "Aceite",
								du: "d6",
								precio: 20
							},
							{
								nombre: "Cuerda",
								du: "d10",
								precio: 40
							},
							{
								nombre: "Cantimplora",
								du: "d8",
								precio: 30
							},
							{
								nombre: "Espejo",
								du: "d6",
								precio: 120
							},
							{
								nombre: "Estacas",
								du: "d4",
								precio: 20
							},
							{
								nombre: "Material de escalada",
								du: "d6",
								precio: 50
							},
							{
								nombre: "Hierbas medicinales",
								du: "-",
								precio: 90
							},
							{
								nombre: "Mochila",
								du: "d8",
								precio: 250
							},
							{
								nombre: "Odre de vino",
								du: "d4",
								precio: 40
							},
							{
								nombre: "Pértiga",
								du: "d10",
								precio: 10
							},
							{
								nombre: "Raciones de viaje",
								du: "d8",
								precio: 150
							},
							{
								nombre: "Saco",
								du: "d6",
								precio: 30
							},
							{
								nombre: "Vendas",
								du: "-",
								precio: 50
							},
							{
								nombre: "Yesca y pedernal",
								du: "d8",
								precio: 60
							}
		]
	}
	
	pertrecho(nombre) {
		var ipertrecho=0;
		for ( ipertrecho = 0; ipertrecho < this.pertrechos.length; ipertrecho++ ) {
			if ( this.pertrechos[ipertrecho].nombre == nombre ) {
				return new Pertrecho(this.pertrechos[ipertrecho]);
			}
		}
		return new Pertrecho(this.pertrechos[ Comun.random(this.pertrechos.length, 0)]);
	}
}

let armaduras = new Armaduras();
let armas = new Armas();
let pertrechos = new Pertrechos();
