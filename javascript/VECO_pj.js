class PJCO extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._pc = 0;;
		this._din = 0;
		this._nombres = [ "Mary", "Arina", "Jarek", "Andrey", "Natacha", "Dimitri", "Kumiko", "Konrad", "Duncan", "Lyudmila", "Sally", "Gerek", "Alka", "Steve", "Yuri", "Marcus", "John", "Xia", "Arnold", "Tom" ];
		this._apellidos = [ "Fedorov", "Vasiliev", "Volkov", "Gomolka", "Slick", "Izumi", "Jackson", "Petrov", "Bukowski", "Moore", "McMardiggan", "Li", "Whitman", "Flushing", "Zhao", "Kovaks" ];
		this._objClase = null;
	}
	
	get din() {
		return this._din + " ₳";
	}
	
	get PC() {
		return this._pc;
	}
	
	get plantillaPDF() {
		return "pdf/VECosmo.pdf";
	}
	
	equipo() {
		var eq = "<strong>Equipo: </strong>" + this.strEquipo();
		return eq;
	}
	
	strEquipo() {
		var ieq = 0;
		var eq = "";
		for (ieq = 0; ieq < this._equipo.equipo.length; ieq++) {
				if ( ieq > 0 ) {
					eq += ", ";
				}
				eq += this._equipo.equipo[ieq];
		}
		return eq;
	}
	
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("CON")]);
	}
	
	calculaPC() {
		this._pc = this.daguante + this.modifAtributo(this._atributos[atributos.atributoMod("SAB")]);
	}
	
	tablaRasgos() {
		return "<table  class='w3-table  w3-striped w3-border'><tr><td><strong>DA:</strong> d" + this.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + this.atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + this.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + this.defn + 
													  " </td></tr><tr><td><strong>PC:</strong> " + this.PC + 
													  " </td></tr><tr><td><strong>PV:</strong> " + this.pv + "</td></tr></table";

	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	

	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 3 || atributo == 4) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(this.atributos[atributo+1]) ) {
			this.calculaPC();
		}
	}
	
	genera() {
		habilidades.habilidadesCO();
		var ptos_inidefault = habilidades._ptos_ini;
		habilidades._ptos_ini = 3;
		habilidades.ptos_niv = 1;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		
		this._objClase = clasesCO.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._habilidades = habilidades.puntuaciones(this._nivel);
		
		// Restauramos los puntos iniciales por defecto
		habilidades._ptos_ini = ptos_inidefault;
		
		this._atributos = atributos.valores(this._objClase.atrs);
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		
		this.calculaDefensa();
		//this._def = 10 + Atributos.modifmas(this._atributos[atributos.atributoMod("DES")]);
		this.calculaPV();
		//tthis._pv = clase.pv(this._nivel) + Atributos.modifmas(this._atributos[atributos.atributoMod("CON")]);
		
		this.calculaPC();
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this._talentos = this._objClase.talentos(this._nivel);
		this._equipo = this._objClase.equipo();
		this._din = (Comun.dadosMultiples(this._equipo.dinero.ndados, this._equipo.dinero.dado, 1) * 100) + this._equipo.dinero.inicial;
	}
	
	rellenaCamposPDF() {
		var stalentos = "";
		if ( this.talentos.length > 0 ) {
			stalentos = this.talentos[0];
			var itals = 0;
			for (itals = 1; itals < this.talentos.length; itals++) {
				stalentos += ", " + this.talentos[itals];
			}
		}

		var fields = {
			'Nombre' : [ this.nombre ],
			'Clase' : [ this.clase ],
			'Nivel' : [ this._nivel ],
			'vFUE' : [ this.atributos[0] ],
			'vDES' : [ this.atributos[1] ],
			'vCON' : [ this.atributos[2] ],
			'vINT' : [ this.atributos[3] ],
			'vSAB' : [ this.atributos[4] ],
			'vCAR' : [ this.atributos[5] ],
			'bFUE' : [ Atributos.modifmas(this.atributos[0]) ],
			'bDES' : [ Atributos.modifmas(this.atributos[1]) ],
			'bCON' : [ Atributos.modifmas(this.atributos[2]) ],
			'bINT' : [ Atributos.modifmas(this.atributos[3]) ],
			'bSAB' : [ Atributos.modifmas(this.atributos[4]) ],
			'bCAR' : [ Atributos.modifmas(this.atributos[5]) ],
			'PVTot' : [ this.pv ],
			'PV' : [ this.pv ],
			'ATQ' : [ this.atq ],
			'DEF' : [ this.defn ],
			'INS' : [ this.ins ],
			'MOV' : [ 10 ],
			'PCTot' : [ this.PC ],
			'PC' : [ this.PC ],
			'Alerta' : [ this.habilidades[0] ],
			'Atletismo' : [ this.habilidades[1] ],
			'Conocimientos' : [ this.habilidades[2] ],
			'Precision' : [ this.habilidades[3] ],
			'Relaciones' : [ this.habilidades[4] ],
			'Tecnologia' : [ this.habilidades[5] ],
			'Talentos' : [ stalentos ],
			'Notas' : [ "Dinero: " + this.din + "\n" + this.strEquipo() ],
		};
		return fields;
	}
}
