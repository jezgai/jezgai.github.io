
class Poblacion {
	constructor(poblacion) {
		this._tipo = poblacion.tipo;
		this._dadoinf = poblacion.dadoinf;
		this._dadosup = poblacion.dadosup;
		this._pobinf = poblacion.pobinf;
		this._pobsup = poblacion.pobsup;
		this._limitemo = poblacion.limitemo;
		this._modif = poblacion.modif;
		this._nveces = poblacion.nveces;
		
		this._habitantes = this._pobinf;
		this._guardias = 1;
		this._milicianos = 1;
		this._gobernador = "";
		this._sobrenatural = "";
		this._alineamiento = "Legal";
		this._habitantesP = [];
		this._habitantesR = [];
	}
	
	calcula() {
		this._habitantes = Comun.random(this._pobsup - this._pobinf + 1, this._pobinf);
		this._guardias = Math.ceil(this._habitantes / 100);
		this._milicianos = Math.ceil(this._habitantes / 20);
		var tipogobierno = "random";
		tipogobierno = tiposGobierno.gobierno(tipogobierno);
		tipogobierno.calcula();
		this._gobernador = tipogobierno._gobernador;
		this._sobrenatural = tipogobierno._sobrenatural;
		this._alineamiento = alineamientos.alineamiento();
		
		var iaux = 0;
		this._habitantesP = [];
		for (iaux=0; iaux<this._nveces; iaux++) {
			var habaux = habitantespj.calculahabitantes(this._modif);
			Array.prototype.push.apply(this._habitantesP, habaux);
		}
		for (iaux=0; iaux<this._nveces; iaux++) {
			var habaux = habitantespnj.calculahabitantes(this._modif);
			Array.prototype.push.apply(this._habitantesP, habaux);
		}
		
		var total=0;
		for (iaux=0; iaux<this._habitantesP.length; iaux++) {
			total+=this._habitantesP[iaux].numero;
		}
		var resto = this._habitantes - total;
		total=0;
		this._habitantesR = [];
		for(iaux=0; iaux<habitantespnj._habitantes.length && total < resto; iaux++) {
			var num = Math.round(resto * habitantespnj._habitantes[iaux].porcentaje / 100);
			if ( (total + num) > resto ) {
				num = resto - total;
			}
			total+=num;
			if ( num > 0 ) {
				var hab = new Object();
				hab.nombre = habitantespnj._habitantes[iaux].nombre;
				hab.numero = num;
				hab.nivel = 1;
				this._habitantesR.push(hab);
			}
		}
		
		if ( total < resto) {
			for(iaux=0; iaux<this._habitantesR.length; iaux++) {
				if ( this._habitantesR[iaux].nombre == "Ciudadano" ) {
					this._habitantesR[iaux].numero += (resto - total);
					break;
				}
			}
		}
		
	}
}

class Poblaciones {
	
	constructor() {
		this._poblaciones =
		[
			{
				tipo : "Poblado",
				dadoinf : 1,
				dadosup : 3,
				pobinf : 20,
				pobsup : 80,
				limitemo : 40,
				modif : -3,
				nveces : 1,
			},
			{
				tipo : "Aldea",
				dadoinf : 4,
				dadosup : 7,
				pobinf : 81,
				pobsup : 400,
				limitemo : 100,
				modif : -2,
				nveces : 1,
			},
			{
				tipo : "Villa",
				dadoinf : 8,
				dadosup : 12,
				pobinf : 401,
				pobsup : 900,
				limitemo : 200,
				modif : -1,
				nveces : 1,
			},
			{
				tipo : "Pueblo pequeño",
				dadoinf : 13,
				dadosup : 14,
				pobinf : 901,
				pobsup : 2000,
				limitemo : 800,
				modif : 0,
				nveces : 1,
			},
			{
				tipo : "Pueblo grande",
				dadoinf : 15,
				dadosup : 16,
				pobinf : 2001,
				pobsup : 5000,
				limitemo : 1500,
				modif : 3,
				nveces : 1,
			},
			{
				tipo : "Ciudad pequeña",
				dadoinf : 17,
				dadosup : 18,
				pobinf : 5001,
				pobsup : 12000,
				limitemo : 2500,
				modif : 6,
				nveces : 2,
			},
			{
				tipo : "Ciudad grande",
				dadoinf : 19,
				dadosup : 19,
				pobinf : 12001,
				pobsup : 25000,
				limitemo : 3500,
				modif : 9,
				nveces : 3,
			},
			{
				tipo : "Metrópolis",
				dadoinf : 20,
				dadosup : 20,
				pobinf : 25001,
				pobsup : 1000000,
				limitemo : 5000,
				modif : 12,
				nveces : 4,
			},
		]
	}
	
	poblacion(tipo) {
		var ipoblaciones=0;
		for (ipoblaciones=0; ipoblaciones<this._poblaciones.length; ipoblaciones++) {
			if ( this._poblaciones[ipoblaciones].tipo == tipo ) {
				return new Poblacion(this._poblaciones[ipoblaciones]);
			}
		}
		
		var numero = Comun.random(20,1);
		for (ipoblaciones=0; ipoblaciones<this._poblaciones.length; ipoblaciones++) {
			if ( this._poblaciones[ipoblaciones].dadoinf >= numero && this._poblaciones[ipoblaciones].dadosup <= numero ) {
				return new Poblacion(this._poblaciones[ipoblaciones]);
			}
		}
		
		return new Poblacion(this._poblaciones[Comun.random(this._poblaciones.length, 0)]);
	} 
	
	desplegablePoblaciones(nbFuncSel) {
		
		var spoblaciones=" <strong>Poblacion:</strong> <select class='w3-select'  name='poblacion' onchange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var ipoblacion=0;
		for (ipoblacion=0; ipoblacion< this._poblaciones.length; ipoblacion++) {
			spoblaciones += "<option>" + this._poblaciones[ipoblacion].tipo + "</option>";
		}
		spoblaciones += "</select>";
		return spoblaciones;
	}
}

class TipoGobierno {
	constructor(tipogobierno, sobrenatural) {
		this._nombre = tipogobierno.nombre;
		this._gobernadores = tipogobierno.gobernador;
		this._gobernador = this._gobernadores[0];
		this._sobrenatural = sobrenatural;
	}
	calcula() {
		this._gobernador = this._gobernadores[Comun.random(this._gobernadores.length,0)];
	}
}

class TiposGobierno {
	constructor() {
		this._tiposgobierno = [ 
			{
				nombre: "Convencional",
				gobernador: [ "Alcalde", "Burgomaestre", "Asamblea ciudadana", "Consejo ciudadano", "Consejo de ancianos", "Noble", "Gobernador" ],
				valorinf: 1,
				valorsup: 13,
			},
			{
				nombre: "Inusual",
				gobernador: [ "Gremio de mercaderes", "Gremio de artesanos", "Gremio de ladrones", "Gremio de asesinos", "Gremio de guerreros" ],
				valorinf: 14,
				valorsup: 18,
			},
			{
				nombre: "Religioso",
				gobernador: [ "Diácono", "Inquisidor", "Abad", "Obispo", "Prior" ],
				valorinf: 19,
				valorsup: 19,
			},
			{
				nombre: "Esotérico",
				gobernador: [ "Mago", "Nigromante", "Hechicero", "Archimago", "Brujo" ],
				valorinf: 20,
				valorsup: 20,
			},
		];
		this._sobrenatural = [ "Dios", "Dragón", "Vampiro", "Liche" ];
	}
	
	gobierno(nombre) {
		var sobrenatural = "";
		var essobrenatural = Comun.random(20,1);
		if ( essobrenatural >= 19 ) {
			sobrenatural = this._sobrenatural[ Comun.random(this._sobrenatural.length,0)];
		}
		
		var itiposgobierno=0;
		if ( nombre == "random" ) {
			nombre = this._tiposgobierno[0].nombre;
			var d20 = Comun.random(20,1);
			for (itiposgobierno=0; itiposgobierno<this._tiposgobierno.length; itiposgobierno++) {
				if ( this._tiposgobierno[itiposgobierno].valorinf >= d20 && this._tiposgobierno[itiposgobierno].valorsup <= d20) {
					nombre = this._tiposgobierno[itiposgobierno].nombre;
					break;
				}
			}
		}
		
		for (itiposgobierno=0; itiposgobierno<this._tiposgobierno.length; itiposgobierno++) {
			if ( this._tiposgobierno[itiposgobierno].nombre == nombre ) {
				return new TipoGobierno(this._tiposgobierno[itiposgobierno], sobrenatural);
			}
		}
		// Por aquí no debería pasar nunca
		return new TipoGobierno(this._tiposgobierno[0], sobrenatural);
		
		
	}
}

class Alineamientos {
	constructor() {
		this._alineamientos = [
			{ 
				nombre : "Legal",
				valorinf : 1,
				valorsup : 10,
			},
			{ 
				nombre : "Neutral",
				valorinf : 11,
				valorsup : 15,
			},
			{ 
				nombre : "Caótico",
				valorinf : 16,
				valorsup : 20,
			}
		]
	}
	alineamiento() {
		var valor = Comun.random(20,1);
		var ialineamiento = 0;
		for(ialineamiento = 0; ialineamiento < this._alineamientos.length; ialineamiento++) {
			if ( this._alineamientos[ialineamiento].valorinf >= valor && this._alineamientos[ialineamiento].valorsup <= valor ) {
				return this._alineamientos[ialineamiento].nombre;
			}
		}
		return this._alineamientos[0].nombre;
	}
}


class Habitantes {
	constructor(habitantes, pj) {
		this._pj = pj;
		this._habitantes = [];
		Array.prototype.push.apply(this._habitantes, habitantes);
	}
	/*
	constructor() {
		this._habitantes = [];
		this._pj = false;
	} */
	calculanivel(indice, modificador) {
		var inumdados=0;
		var nivel = modificador;
		for(inumdados=0;inumdados<this._habitantes[indice].nivel.num;inumdados++) {
			nivel += Comun.random(this._habitantes[indice].nivel.dado, 1);
		}
		return nivel;
	}
	calculahabitantes(modificador) {
		var ihabitante = 0;
		var habitantes = [];
		for(ihabitante = 0; ihabitante<this._habitantes.length; ihabitante++) {
			var nivel = this.calculanivel(ihabitante, modificador);
			
			var inivel = nivel;
			
			var numero = 1;
			for (inivel=nivel; inivel> 0; inivel = Math.trunc(inivel/2), numero*=2) {
				
				var iaux = 0;
				for (iaux = 0; iaux < habitantes.length; iaux++) {
					if ( habitantes[iaux].nombre == this._habitantes[ihabitante].nombre && habitantes[iaux].nivel == inivel) {
						habitantes[iaux].numero += numero;
						break;
					}
				}
				if ( iaux >= habitantes.length ) {
					var hab = new Object();
					hab.nombre = this._habitantes[ihabitante].nombre;
					hab.numero = numero;
					hab.nivel = inivel;
					habitantes.push(hab);
				}
				if (this._pj == false && inivel < 4 ) {
					inivel = 0;
				}
			}
			
		}
		return habitantes;
	}
}


let ARhabitantespj = [
			{
				nombre: "Clérigo",
				nivel: { num: 1, dado: 6},
			},
			{
				nombre: "Guerrero",
				nivel: { num: 1, dado: 8}, 
			},
			{
				nombre: "Ladrón",
				nivel: { num: 1, dado: 8},
			},
			{
				nombre: "Mago",
				nivel: { num: 1, dado: 4},
			},
			{
				nombre: "Druida",
				nivel: { num: 1, dado: 6},
			},
			{
				nombre: "Monje",
				nivel: { num: 1, dado: 4},
			},
			{
				nombre: "Elfo",
				nivel: { num: 1, dado: 3},
			},
			{
				nombre: "Enano",
				nivel: { num: 1, dado: 6},
			},
			{
				nombre: "Mediano",
				nivel: { num: 1, dado: 4},
			},
		];

let ARhabitantespnj = [
			{
				nombre: "Acólito",
				nivel: { num: 1, dado: 6},
				porcentaje: 3,
			},
			{
				nombre: "Noble",
				nivel: { num: 1, dado: 4},
				porcentaje: 3,
			},
			{
				nombre: "Guardia",
				nivel: { num: 2, dado: 4},
				porcentaje: 6,
			},
			{
				nombre: "Artesano",
				nivel: { num: 3, dado: 4},
				porcentaje: 2,
			},
			{
				nombre: "Ciudadano",
				nivel: { num: 4, dado: 4},
				porcentaje: 80,
			},
			{
				nombre: "Bandido",
				nivel: { num: 1, dado: 8},
				porcentaje: 3,
			},
			{
				nombre: "Guardabosques",
				nivel: { num: 1, dado: 3},
				porcentaje: 2,
			},
			{
				nombre: "Escudero",
				nivel: { num: 1, dado: 3},
				porcentaje: 1,
			},
		];
		
