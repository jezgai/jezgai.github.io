class PJPP extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._objClase = null;
		this._clase = 'random';
		this._din = 0;
        this._pep = 0;
        this._trasfondo = "";
	}
	
	get clase() {
		return this._clase;
	}
	set clase(value) {
		this._clase = value;
	}
				
	get din() {
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/VEPeplum.pdf";
	}
	
	calculaDefensa() {
		this._defn = 10 + this._objClase._objRama.def(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
        this._pv = this._objClase.pv(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("CON")]));
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>DA:</strong> d" + this._daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + this._atq +
													  " </td></tr><tr><td><strong>Ins:</strong> " + this._ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + this._defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + this._pv + 
													  " </td></tr><tr><td><strong>Mov:</strong> " + this._mov + 
													  " </td></tr><tr><td><strong>P. Peplum:</strong> " + this._pep + 
													  " </td></tr><tr><td><strong>Trasfondo:</strong> " + this._trasfondo + "</td></tr></table";
	}
	
	
	tablaTalentos() {
		var itals = 0;
		var stals = "<table class='w3-table  w3-striped w3-border'><tr><th>Talentos</th></tr>";
		for (itals = 0; itals < this._talentos.length; itals++) {
			stals += "<tr><td>" + this._talentos[itals] + "</td></tr>";
		}
		stals += "</table>";
		
		
		return stals;
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifmas(valorAtributo);
	}
	
    calculaTalentos() {
		this._talentos = [];
        var ital=0;
        if ( this._objClase._talentos.nfijos < this._objClase._talentos.fijos.length) {
            var talf = Comun.shuffle(this._objClase._talentos.fijos.clone());
            for (ital=0; ital<this._objClase._talentos.nfijos; ital++) {
                this._talentos.push(talf[ital]);
            }
        }
        else {
            for (ital=0; ital<this._objClase._talentos.fijos.length; ital++) {
                this._talentos.push(this._objClase._talentos.fijos[ital]);
            }
        }
        if ( this._objClase._ntalentos[this._nivel-1] > this._talentos.length ) {
            var ntal = this._objClase._ntalentos[this._nivel-1] - this._talentos.length;
            var tale = Comun.shuffle(this._objClase._talentos.elegibles.clone());
            for(ital=0; ital < ntal; ital++) {
                this._talentos.push(tale[ital]);
            }
        }
    }

    calculaPuntosPeplum() {
        this._pep = this._objClase.pep(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("INT")]));
    }
	
	calculaMov() {
		this._mov = 12 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 1 || atributo == 2) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(this.atributos[atributo+1]) ) {
			this.calculaMov();
		}
		if ( (atributo == 2 || atributo == 3) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(this.atributos[atributo+1]) ) {
			this.calculaPuntosPeplum();
		}
	}

	
	
	genera() {
		habilidades.habilidadesGen();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 1;
		this._objClase = clasesVPP.clase(this._clase);
		
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		
		this._habilidades = habilidades.puntuaciones(this._nivel);
		this._atributos = atributos.valores(this._objClase._objRama.atrs);
		
		this._atq = this._objClase._objRama.atq(this._nivel);
		this._ins = this._objClase._objRama.ins(this._nivel);
		this._mov = this.calculaMov();
		
		this.calculaDefensa();
		this.calculaPV();
		
		this._din = Comun.random(6,1) * 100;
		
		this._nombre = this._clase;
		this.calculaTalentos();
		this.calculaMov();
        this.calculaPuntosPeplum();
		
		this._trasfondo = trasfondosPP.trasfondo();
	}
	
	rellenaCamposPDF() {
		
		var fields = {
					'Nombre' : [ this._nombre ],
					'Clase' : [ this._clase ],
					'Rana' : [ this._objClase._rama ],
					'Nivel' : [ this._nivel ],
					'FUE' : [ this._atributos[0] ],
					'DES' : [ this._atributos[1] ],
					'CON' : [ this._atributos[2] ],
					'INT' : [ this._atributos[3] ],
					'SAB' : [ this._atributos[4] ],
					'CAR' : [ this._atributos[5] ],
					'Mod_FUE' : [ this.modifAtributo(this.atributos[0]) ],
					'Mod_DES' : [ this.modifAtributo(this.atributos[1]) ],
					'Mod_CON' : [ this.modifAtributo(this.atributos[2]) ],
					'Mod_INT' : [ this.modifAtributo(this.atributos[3]) ],
					'Mod_SAB' : [ this.modifAtributo(this.atributos[4]) ],
					'Mod_CAR' : [ this.modifAtributo(this.atributos[5]) ],
					'PV' : [ this._pv ],
					'PV_MAX' : [ this._pv ],
					'ATQ' : [ this._atq ],
					'DEF' : [ this._defn ],
					'INS' : [ this._ins ],
					'PEP_MAX' : [ this._pep ],
					'PEP' : [ this._pep ],
					'MOV' : [ this._mov ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Manipulacion' : [ this.habilidades[2] ],
					'Erudicion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Trasfondo1' : [ this._trasfondo ],
		};
		var itals=0;
		for (itals = 0; itals< this._talentos.length; itals++) {
			fields['Talentos'+(itals+1)] = [ this._talentos[itals] ];
		}
		return fields;
	}
}
