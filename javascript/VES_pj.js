class PJVES extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._raza = 'random';
		this._pod = 0;
		this._din = 0;
		this._trasfondo = "";
		this._objClase = null;
		this._objBioforma = null;
		this._paquete = null;
		this._armas = null;
	}

	
	get raza() {
		return this._raza;
	}
	set raza(value) {
		this._raza = value;
	}
	
	get pod() {
		return this._pod;
	}	
	set pod(value) {
		this._pod = value;
	}
	
	
	get trasfondo() {
		return this._trasfondo;
	}
	set trasfondo(value) {
		this._trasfondo = value;
	}
	
	get din() {
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/ViejaEstrellaExt.pdf";
	}
	
	calculaPOD() {
		this._pod = this._objClase.pod(this._nivel);
	}
	
	calculaDefensa() {
		this._def = 10 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("CON")]));
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>DA:</strong> d" + pj.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + pj.atq +
            		                                  " </td></tr><tr><td><strong>Pod:</strong> " + pj.pod + 
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + 
													  " </td></tr><tr><td><strong>Mov:</strong> " + pj.mov + "</td></tr></table";
	}
	
	
	descripcionTalentos() {
		var itals = 0;
		var stals = "";
		for (itals = 0; itals < this.talentos.length; itals++) {
			stals += "<strong>" + this.talentos[itals] + "</strong><br>";
			stals += talentosVES.descripcion(this.talentos[itals]) + "<br/><br/>";
		}
		return stals;
	}
	
	descripcionPoderes() {
		var ipoderes = 0;
		var spoderes = "";
		for (ipoderes = 0; ipoderes < this._poderes.length; ipoderes++) {
			spoderes += "<strong>" + this._poderes[ipoderes].nombre + "</strong><br>";
			spoderes += this._poderes[ipoderes].descripcion + "<br/><br/>";
		}
		return spoderes;
	}
	
	
	tablaPoderes() {
		var ipoderes = 0;
		if ( this._poderes.length == "" ) {
			return "";
		}
		var spoderes = "<table class='w3-table  w3-striped w3-border'><tr><th>Poderes</th></tr>";
		for (ipoderes = 0; ipoderes < this._poderes.length; ipoderes++) {
			spoderes += "<tr><td>" + this._poderes[ipoderes].nombre + " </td></tr>";
		}
		spoderes += "</table>";
		return spoderes;
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modif(valorAtributo);
	}
	
	calculaHabilidades() {
		this._habilidades = habilidades.puntuaciones1(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("INT")]));
	}
	
	
	calculaRasgosDerivados() {
		this.calculaPV();
		this.calculaDefensa();
		this.calculaHabilidades();
	}
	
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 2 || atributo == 3) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(this.atributos[atributo+1]) ) {
			this.calculaHabilidades();
		}
	}
	
	
	calculaArmasCaC() {
		if ( this._objClase._equipo.narmasCaC > 0 ) {
			var armasclase = Comun.shuffle(this._objClase._equipo.armasCaC.clone());
			var indice=0;
			var armaelegida = null;
			var numarmas = 0;
			for (indice=0;indice<armasclase.length;indice++) {
				armaelegida = armasVES.arma(armasclase[indice]);
				if ( armaelegida != null ) {
					if ( armaelegida.precio < this._din ) {
						this._armas.push(armaelegida);
						this._din -= armaelegida.precio;
						numarmas++;
						if ( numarmas >= this._objClase._equipo.narmasCaC )
							break;
						break;
					}
				}
			}
		}
	}
	
	
	
	calculaArmasAD() {
		if ( this._objClase._equipo.narmasAD > 0 ) {
			var armasclase = Comun.shuffle(this._objClase._equipo.armasAD.clone());
			var indice=0;
			var armaelegida = null;
			var numarmas = 0;
			for (indice=0;indice<armasclase.length;indice++) {
				armaelegida = armasVES.arma(armasclase[indice]);
				if ( armaelegida != null ) {
					if ( armaelegida.precio < this._din ) {
						this._armas.push(armaelegida);
						this._din -= armaelegida.precio;
						numarmas++;
						if ( numarmas >= this._objClase._equipo.narmasAD )
							break;
						break;
					}
				}
			}
		}
	}
	
	
	calculaEquipo() {
		this._paquete = null;
		this._armas = [ ];
		if ( this._objClase._equipo.paquete != "" ) {
			this._paquete = paquetesVES.paquete(this._objClase._equipo.paquete);
			if ( this._paquete.precio < this._din ) {
				this._din -= this._paquete.precio;
				var armapaquete = armasVES.arma(this._paquete.arma);
				this._armas.push(armapaquete);
			}
			else {
				this._equipo = null;
			}
		}
	}
	
	
	
	genera() {
		habilidades.habilidadesVES();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 0;
		atributos.excesoatributos = 1;
		this._objBioforma = bioformas.raza(this._raza);
		this._objClase = clasesVES.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._raza = this._objBioforma.nombre;
		this._clase = this._objClase.nombre;
		this._atributos = atributos.valores(this._objClase.atrs);
		this.calculaHabilidades();
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this._din = (3 + Comun.random(6,1) + Comun.random(6,1) + Comun.random(6,1)) * 10;
		
		this.calculaPOD();
		//this._pod = clase.pod(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("INT")]);
		
		this.calculaDefensa();
		//this._def = 10 + Atributos.modif(this._atributos[atributos.atributoMod("DES")]);
		
		this.calculaPV();
		//this._pv = clase.pv(this._nivel) + Atributos.modif(this._atributos[atributos.atributoMod("CON")]);
		
		this._nombre = this._objBioforma.nombrepj();
		this._mov = this._objBioforma.mov;
		this._trasfondo = trasfondos.trasfondo();
		
		var ital = 0;
		this._talentos = [];
		
		var talentosBioforma = this._objBioforma.talentos.clone();
		if ( talentosBioforma.length > 2 ) {
			talentosBioforma = Comun.shuffle(talentosBioforma);
		}
		
		for (ital = 0; ital < 2 && ital < talentosBioforma.length; ital++) {
			this._talentos.push(talentosBioforma[ital]);
		}
		
		var talentosclase = this._objClase.talentos(this._nivel);
		for (ital = 0; ital < talentosclase.length; ital++) {
			this._talentos.push(talentosclase[ital]);
		}
		
		this._poderes = [];
		if (this._objClase._poderes > 0) {
			this._poderes = poderesVES.poderes(this._objClase._poderes);
		}
		
		this._trasfondo = this._objClase.trasfondo();
		
		this.calculaEquipo();
		this.calculaArmasAD();
		this.calculaArmasCaC();
		
	}
	
	componentesPaquete() {
		var componentes ="";
		if ( this._paquete != null ) {
			componentes = ". " + this._paquete.componentes[0];
			var indiceequipo=1;
			for (indiceequipo = 1; indiceequipo < pj._paquete.componentes.length; indiceequipo++) {
				componentes += ", " + pj._paquete.componentes[indiceequipo];
			}
			
		}
		return componentes;
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
		var componentes ="";
		if ( this._paquete != null ) {
			componentes = ". " + this._paquete.componentes[0];
			var indiceequipo=1;
			for (indiceequipo = 1; indiceequipo < pj._paquete.componentes.length; indiceequipo++) {
				componentes += ", " + pj._paquete.componentes[indiceequipo];
			}
		}
		
		var spoderes = "";
		if ( this._poderes.length > 0 ) {
			spoderes = this._poderes[0].nombre;
			var ipoderes = 0;
			for (ipoderes = 1; ipoderes < this._poderes.length; ipoderes++) {
				spoderes += ", " + this._poderes[ipoderes].nombre;
			}
		}

		var fields = {
					'Nombre' : [ this._nombre ],
					'Clase' : [ this._objClase.nombre ],
					'Bioforma' : [ this._objBioforma.nombre ],
					'DAguante' : [ this._objClase.daguante ],
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'FUE_mod' : [ Atributos.modif(this.atributos[0]) ],
					'DES_mod' : [ Atributos.modif(this.atributos[1]) ],
					'CON_mod' : [ Atributos.modif(this.atributos[2]) ],
					'INT_mod' : [ Atributos.modif(this.atributos[3]) ],
					'SAB_mod' : [ Atributos.modif(this.atributos[4]) ],
					'CAR_mod' : [ Atributos.modif(this.atributos[5]) ],
					'Nivel' : [ this._nivel ],
					'ATQ' : [ this.atq ],
					'INS' : [ this.ins ],
					'MOV' : [ this.mov ],
					'DEF' : [ this.defn ],
					'POD' : [ this.pod ],
				    'PV' : [ this.pv ],
				    'PV_total' : [ this.pv ],
					'ALERTA' : [ this.habilidades[0] ],
					'COMUNICACION' : [ this.habilidades[1] ],
					'ERUDICION' : [ this.habilidades[2] ],
					'SUBTERFUGIO' : [ this.habilidades[3] ],
					'SUPERVIVENCIA' : [ this.habilidades[4]],
					'TECNOLOGIA' : [ this.habilidades[5] ],
					'TRASFONDOS' : [ this._trasfondo ],
					'PODERES' : [ spoderes ],
					'TALENTOS' : [ stalentos ],
					'DTalentos' : [ document.getElementById("dtalentos").innerText ],
					'DPoderes' : [ document.getElementById("dpoderes").innerText ],
					'EQUIPO' : [ this._din + " créditos" + componentes ],
		};
		
		if ( this._armas != null ) {
			var indice=0;
			for (indice = 0; indice<this._armas.length; indice++) {
				fields["ARMAS" + (indice+1) ] = [ this._armas[indice].nombre ];
				fields["DANO" + (indice+1) ] = [ this._armas[indice].dano ];
			}
		}
		
		return fields;
	}
}
