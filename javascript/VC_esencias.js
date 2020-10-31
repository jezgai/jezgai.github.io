class Esencia {

	constructor(esencia) {
		this._nombre = esencia.nombre;
		this._talentos = esencia.talentos;
		this._daguante = esencia.daguante;
		this._debilidad = esencia.debilidad;
		this._pod = esencia.pod;
		this._fmagica = esencia.fmagica;
		this._poderes = esencia.poderes;
	}
	
	get poderes() {
		return this._poderes;
	}
	set poderes(value) {
		this._poderes = value;
	}
	
	poderes(nivel) {
		var tpoderes = [];
		var lpoderes = Comun.shuffle(this._poderes.clone());
		tpoderes.push(lpoderes[0]);
		if ( nivel >= 4)
			tpoderes.push(lpoderes[1]);
		if ( nivel >= 8)
			tpoderes.push(lpoderes[2]);
		return tpoderes;
	}
	
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
	}
	
	get daguante() {
		return this._daguante;
	}
	set daguante(value) {
		this._daguante = value;
	}
		
	get debilidad() {
		return this._debilidad;
	}
	set debilidad(value) {
		this._debilidad = value;
	}

	get pod() {
		return this._pod;
	}
	set pod(value) {
		this._pod = value;
	}

	get fmagica() {
		return this._fmagica;
	}
	set fmagica(value) {
		this._fmagica = value;
	}

	pod(nivel) {
		var ipod = nivel - 1;
		if ( nivel > this._pod.length ) {
			ipod = this._pod.length - 1;
		}
		return this._pod[ipod];
	}
	
	fmagica(nivel) {
		var indfmagica = nivel - 1;
		if ( nivel > this._fmagica.length ) {
			indfmagica = this._fmagica.length - 1;
		}
		return this._fmagica[indfmagica];
	}


}

class Esencias {
	
	constructor() {
		this._esencias =
		[
			{
			  nombre : "Hada",
			  talentos : [ "Pactos", "Glamour" ],
			  daguante : 4,
			  debilidad : "No puede mentir",
			  pod : [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
			  fmagica : [ "d4+1", "d6", "d6+1", "d6+1", "d8", "d8+1", "d8+1", "d10", "d10+1", "d10+1" ],
			  poderes: [ "Adivinación", "Biomancia", "Celeridad", "Entropomancia", "Hidromancia", "Ilusionismo", "Invocación", "Magia ignota", 
						 "Magia rúnica", "Potencia", "Psicomancia", "Taumaturgia" ],
			},
			{
			  nombre : "Hombre lobo",
			  talentos : [ "Transformación", "Tótem" ],
			  daguante : 10,
			  debilidad : "Balas de plata",
			  pod : [ 1, 1, 2, 3, 4, 5, 7, 9, 10, 11],
			  fmagica : [ "d4", "d4", "d4+1", "d4+1", "d6", "d6", "d6+1", "d6+1", "d8", "d8+1" ],
			  poderes: [ "Adivinación", "Biomancia", "Celeridad", "Chamanismo", "Conjuración", "Ectomancia", "Invocación", "Litomancia", "Magia ignota", 
						 "Magia rúnica", "Potencia", "Psicomancia", "Taumaturgia", "Translocacion" ],
			},
			{
			  nombre : "Mago",
			  talentos : [ "Canalización", "Kinetomancia" ],
			  daguante : 6,
			  debilidad : "Adicto a la magia",
			  pod : [ 2, 3, 5, 7, 9, 11, 13, 15, 18, 21],
			  fmagica : [ "d6", "d6+1", "d6+1", "d8", "d8+1", "d8+1", "d10", "d10+1", "d12", "d12+1" ],
			  poderes: [ "Adivinación", "Aeromancia", "Biomancia", "Conjuración", "Ectomancia", "Hidromancia", "Ilusionismo", "Invocación", 
						 "Litomancia", "Magia ignota", "Magia rúnica", "Necromancia", "Piromancia", "Psicomancia", "Taumaturgia", "Translocacion" ],
			},
			{
			  nombre : "Vampiro",
			  talentos : [ "Alimento", "Mordisco" ],
			  daguante : 8,
			  debilidad : "Luz solar",
			  pod : [ 1, 2, 3, 5, 7, 8, 10, 11, 12, 15],
			  fmagica : [ "d4", "d4", "d4+1", "d6", "d6", "d6+1", "d8", "d8", "d8+1", "d10" ],
			  poderes: [ "Adivinación", "Aeromancia", "Celeridad", "Entropomancia", "Invocación", "Magia ignota", "Magia rúnica", 
						"Necromancia", "Potencia", "Psicomancia", "Taumaturgia" ],
			},
		]
	}
	
	get esencias() {
		return this._esencias;
	}

	set esencias(value) {
		this._esencias = value;
	}
	
	esencia(nombre) {
		var iesencias=0;
		for (iesencias=0; iesencias<this._esencias.length; iesencias++) {
			if ( this._esencias[iesencias].nombre == nombre ) {
				return new Esencia(this._esencias[iesencias]);
			}
		}
		return new Esencia(this._esencias[Comun.random(this._esencias.length, 0)]);
	}
	
	desplegableEsencias(nbFuncSel) {
		
		var sesencias="<strong>Esencia:</strong> <select class='w3-select'  name='raza' onChange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var iesencia=0;
		for (iesencia=0; iesencia< this._esencias.length; iesencia++) {
			sesencias += "<option>" + this._esencias[iesencia].nombre + "</option>";
		}
		sesencias += "</select>";
		return sesencias;
	}
	
}

let esencias = new Esencias();
