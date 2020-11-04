class Bioforma extends Especie {
	constructor(bioforma) {
		super(bioforma.nombre, bioforma.talentos, bioforma.movimiento);
		/*this._nombre = bioforma.nombre;
		this._talentos = bioforma.talentos;
		this._movimiento = bioforma.movimiento;*/
		this._descripcion = bioforma.descripcion;
	}
	/*
	get nombre() {
		return this._nombre;
	}	
	set nombre(value) {
		this._nombre = value;
	}
			
	get talentos() {
		return this._talentos;
	}	
	set talentos(value) {
		this._talentos = value;
	}*/
	
	get movimiento() {
		return this._mov;
	}	
	set movimiento(value) {
		this._mov = value;
	}	
	
	get descripcion() {
		return this._descripcion;
	}	
	set descripcion(value) {
		this._descripcion = value;
	}	

	nombrepj() {
		return this._nombre;
	}
}


class Bioformas {
	
	constructor() {
		this._bioformas =
		[
			{
			  nombre : "Humano",
			  talentos : [ "Ímpetu Emprendedor",  "Adaptable" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Androide",
			  talentos : [ "Afinidad mecánica", "Arma integrada", "Arma natural", "Armadura natural", "Escurridizo/a", "Forma alternativa", "Lingüista natural", "Nano-reparadores", "Sensores", "Tamaño descomunal" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Alienígena",
			  talentos : [ "Alas", "Anfibio/a", "Arma tribal", "Armadura natural", "Arma natural", "Extremidad extra", "Empático/a", "Escurridizo/a", "Especie guerrera", "Infravisión", "Lógica", "Mimetismo", "Superviviente", "Rata de alcantarilla", "Resistente", "Sentido agudo", "Tamaño descomunal", "Telepatía", "Tenaz" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Androide técnico",
			  talentos : [ "Afinididad mecánica",  "Sensores" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Androide de protocolo",
			  talentos : [ "Escurridizo/a",  "Lingüista natural" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Androide de seguridad",
			  talentos : [ "Armadura natural",  "Tamaño descomunal" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Androide de infiltración",
			  talentos : [ "Arma natural",  "Forma alternativa" ] ,
			  movimiento : 12,
			  descripcion : "", 
			},
			{
			  nombre : "Dwalpo",
			  talentos : [ "Infravisión",  "Tenaz" ] ,
			  movimiento : 12,
			  descripcion : "Hombres topo muy dados al comercio", 
			},
			{
			  nombre : "Manfi",
			  talentos : [ "Alas",  "Telepatía" ] ,
			  movimiento : 12,
			  descripcion : "Insectoides voladores con mente colmena", 
			},
			{
			  nombre : "Varan",
			  talentos : [ "Armadura natural",  "Especie guerrera" ] ,
			  movimiento : 12,
			  descripcion : "Reptiloides guerreros muy agresivos", 
			},
			{
			  nombre : "Murdo",
			  talentos : [ "Escurridizo/a",  "Rata de alcantarilla" ] ,
			  movimiento : 12,
			  descripcion : "Pequeños humanoides con forma de roedor", 
			},
			{
			  nombre : "Cephan",
			  talentos : [ "Anfibio/a",  "Extremidad extra" ] ,
			  movimiento : 12,
			  descripcion : "Especie tentacular originaria de planeta acuoso", 
			},
			{
			  nombre : "Corniano",
			  talentos : [ "Empático/a",  "Lógica" ] ,
			  movimiento : 12,
			  descripcion : "Estudiosos de un solo ojo y piel blanquecina", 
			},
		]
	}
	
	get razas() {
		return this._bioformas;
	}

	set razas(value) {
		this._bioformas = value;
	}
	
	raza(nombre) {
		var ibioformas=0;
		for (ibioformas=0; ibioformas<this._bioformas.length; ibioformas++) {
			if ( this._bioformas[ibioformas].nombre == nombre ) {
				return new Bioforma(this._bioformas[ibioformas]);
			}
		}
		return new Bioforma(this._bioformas[Comun.random(this._bioformas.length, 0)]);
	}
}



let bioformas = new Bioformas();


