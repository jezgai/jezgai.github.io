class PJ {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._atributos = [];
		this._talentos = [];
		this._pv = 0;
		this._pvclase = 0;
		this._cacc = 0;
		this._caad = 0;
		this._atqcc = 0;
		this._atqad = 0;
		this._dinero = 0;
		this._tipoarmas = "d4";
	}
	
	tablaRequisitos() {
		
		var indice = 0;
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><center><strong>Atributo</strong></center></th><th><center><strong>Valor</strong></center></th></tr>";
		for (indice = 0; indice < this._objClase.requisitos.length; indice++) {
			stabla += "<tr><td><center>" + this._objClase.requisitos[indice].atributo + "</center></td><td><center>" + this._objClase.requisitos[indice].valor + "</center></td></tr>";
		}
		stabla += "</table>";
		stabla += "<center><strong><u>Primario:</u></strong> " + this._objClase.reqprimario + "</center>";
		
		return stabla;
	}


	tablaSalvaciones() {
		
		var indice = 0;
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Salvación</strong></th><th><strong>Valor</strong></th></tr>";
		for (indice = 0; indice < this._objClase.tsalvacion.length; indice++) {
			stabla += "<tr><td>" + this._objClase.tsalvacion[indice].nombre + "</td><td align='center'>" + this._objClase.tsalvacion[indice].valor + "</td></tr>";
		}
		
		stabla += "</table>";
		return stabla;
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>PV:</strong> " + this._pv + 
													  " </td></tr><tr><td><strong>CACC:</strong> " + this._cacc + 
													  " </td></tr><tr><td><strong>CAAD:</strong> " + this._caad + 
													  " </td></tr><tr><td><strong>AtqCC:</strong> " + this._atqcc + 
													  " </td></tr><tr><td><strong>AtqAD:</strong> " + this._atqad + 
													  " </td></tr><tr><td><strong>Dinero:</strong> " + this._dinero + 
													  " monedas de oro</td></tr></table";
	}
	
	recalculaPericiasBasicas() {
		this._pericias[0].puntosbase = (this._atributos._atributos[4].modif + this._objClase.modifadicional[4]) < -1 ? 1 : 2 + this._atributos._atributos[4].modif + this._objClase.modifadicional[4];
		this._pericias[2].puntosbase = (this._atributos._atributos[2].modif + this._objClase.modifadicional[2]) < 0 ? 1 : 1 + this._atributos._atributos[2].modif + this._objClase.modifadicional[2];
		this._pericias[4].puntosbase = (this._atributos._atributos[0].modif + this._objClase.modifadicional[0]) < 0 ? 1 : 1 + this._atributos._atributos[0].modif + this._objClase.modifadicional[0];
		this._pericias[5].puntosbase = (this._atributos._atributos[3].modif + this._objClase.modifadicional[3]) < 0 ? 0 : this._atributos._atributos[3].modif + this._objClase.modifadicional[3];
		this._pericias[6].puntosbase = (this._atributos._atributos[1].modif + this._objClase.modifadicional[1]) < -1 ? 1 : 2 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1];

	}
	
	
	tablaAtributos() {
		var iatrb = 0;
		var satrs = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Valor (mod)</th></tr>";
		for (iatrb = 0; iatrb < this._atributos._atributos.length; iatrb++) {
			satrs += "<tr><td>" + this._atributos._atributos[iatrb].nbatr + " (" + this._atributos._atributos[iatrb].nbmod + ")</td><td align='center'>" + this._atributos._atributos[iatrb].valor + " (" + this._atributos._atributos[iatrb].modif + ") " + Comun.construyeBotonAbajo(iatrb, "abajoatr");
			if ( this._objClase.modifadicional[iatrb] > 0 ) {
				satrs += " (+" + this._objClase.modifadicional[iatrb] + ")";
			}
			satrs += "</td></tr>";
		}
		
		satrs += "</table>";
		return satrs;
	}
	

	tablaPericias() {
		
		var indice = 0;
		
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th><strong>Habilidad</strong></th><th><strong>Tipo</strong></th><th><strong>Base</strong></th>";
		if ( this._objClase.pericias.puntos > 0 ) {
			stabla+="<th><strong>Adicional</strong></th>";
		}
		
		if ( this._objClase.periciasespeciales.puntos > 0 ) {
			stabla+="<th><strong>Especial</strong></th>";
		}
		stabla += "</tr>";
		
		for (indice=0; indice<7; indice++) {
			stabla += "<tr><td>" + this._pericias[indice].pericia + "</td><td>" + this._pericias[indice].tipo + "</td><td>" + this._pericias[indice].puntosbase + "</td>";
			
			if ( this._objClase.pericias.puntos > 0 ) {
				stabla += "<td>" + this._pericias[indice].puntos;
				if ( this._objClase.pericias.puntos > 0 ) {
					stabla += " " + Comun.construyeBotonAbajo(indice, "abajopericia");
				}
				stabla += "</td>";
			}
			if ( this._objClase.periciasespeciales.puntos > 0 ) {
				stabla += "<td>";
				if ( this._pericias[indice].especial == true ) {
					stabla += this._pericias[indice].puntosespecial;
					if ( this._objClase.periciasespeciales.puntos < this._objClase.periciasespeciales.pericias.length ) {
						stabla += " " + Comun.construyeBotonAbajo(indice, "abajopericiaespecial");
					}
				}
				stabla += "</td>";
			}
			stabla += "</tr>";
		}
		
		if ( this._pericias.length > 7 ) {
			for (indice = 7; indice < this._pericias.length; indice++) {
				stabla += "<tr><td>" + this._pericias[indice].pericia + "</td><td>" + this._pericias[indice].tipo + "</td><td>" + this._pericias[indice].puntosbase + "</td>";
				
				if ( this._objClase.pericias.puntos > 0 ) {
					stabla += "<td>" + this._pericias[indice].puntos;
					if ( this._objClase.pericias.puntos > 0 ) {
						stabla += " " + Comun.construyeBotonAbajo(indice, "abajopericia");
					}
					stabla += "</td>";
				}
				
				if ( this._objClase.periciasespeciales.puntos > 0 ) {
					stabla += "<td>";
					if ( this._pericias[indice].especial == true ) {
						stabla += this._pericias[indice].puntosespecial;
						if ( this._objClase.periciasespeciales.puntos < this._objClase.periciasespeciales.pericias.length ) {
							stabla += " " + Comun.construyeBotonAbajo(indice, "abajopericiaespecial");
						}
					}
					stabla += "</td>";
				}
				stabla += "</tr>";
			}
		}
		stabla += "</table>";
		return stabla;
	}
	
	calculaTipoArmas() {
		var bonif = this._objClase.boniftipoarmas + this._atributos._atributos[0].modif + this._objClase.modifadicional[0];
		this._tipoarmas = "d4";
		if ( bonif == 1 ) {
			this._tipoarmas = "d6";
		}
		else if ( bonif == 2 ) {
			this._tipoarmas = "d8";
		}
		else if ( bonif >= 3 ) {
			this._tipoarmas = "d10";
		}
	}
	
	calculaRasgosDerivadosBase(atributo) {
		atributo = Math.trunc(atributo);
		if ( atributo <= 1 && this._atributos._atributos[atributo].modif != this._atributos._atributos[atributo+1].modif) {
			this._cacc = 10 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ca;
			this._caad = 10 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ca;
		}
		if ( (atributo == 1 || atributo == 2) && this._atributos._atributos[atributo].modif != this._atributos._atributos[atributo+1].modif ) {
			this._pv = this._pvclase + this._atributos._atributos[2].modif + this._objClase.modifadicional[2];
		}
		this.calculaTipoArmas();
		this._atqcc = this._objClase.ataque + this._atributos._atributos[0].modif + this._objClase.modifadicional[0];
		this._atqad = this._objClase.ataque + this._objClase.ataquead + this._atributos._atributos[1].modif + this._objClase.modifadicional[1];
		this.recalculaPericiasBasicas();
	}
	
	
	genera() {
		this._atributos = new Atributos();
		
		this._objClase = clases.clase(nombreclase);
		this._clase = this._objClase.nombre;
		this._pvclase = this._objClase.pv();
		this._pv = this._pvclase + this._atributos._atributos[2].modif;
		this.calculaConjuros();
		this._objClase.calculapericias(this._atributos._atributos);
		this._pericias = this._objClase.ptospericia;
		this._atqcc = this._objClase.ataque + this._atributos._atributos[0].modif + this._objClase.modifadicional[0];
		this._atqad = this._objClase.ataque + this._objClase.ataquead + this._atributos._atributos[1].modif + this._objClase.modifadicional[1];
		this._cacc = 10 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ca;
		this._caad = 10 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ca;
		this.calculaTipoArmas();
		this._dinero = 6 * (Comun.random(8,1) + Comun.random(8,1) + Comun.random(8,1));
	}
	
	calculaConjuros() {
		this._conjuros = this._objClase.magia();
	}
	
	tablaMagia() {
		var sMagia = "";
		var i=0;
		if ( this._conjuros.length > 0 ) {
			sMagia += "<strong>Conjuros:</strong> " + this._conjuros[0];
			for (i=1; i<this._conjuros.length;i++) {
				sMagia += ", " + this._conjuros[i];
			}
		}
		return sMagia;
	}
	
	get plantillaPDF() {
		return "pdf/AxisMundi.pdf";
	}
		
	rellenaPDF() {
		
			  var fields = {
					'Nivel' : [ 1 ],
					'Clase' : [ this._clase ],
					'PG' : [ this._pv ],
					'CACC' : [ this._cacc ],
					'CAAD' : [ this._caad ],
					'AtqCC' : [ this._atqcc ],
					'AtqAD' : [ this._atqad ],
					'FUE' : [ this._atributos._atributos[0].valor ],
					'DES' : [ this._atributos._atributos[1].valor ],
					'CON' : [ this._atributos._atributos[2].valor ],
					'INT' : [ this._atributos._atributos[3].valor ],
					'SAB' : [ this._atributos._atributos[4].valor ],
					'CAR' : [ this._atributos._atributos[5].valor ],
					'mFUE' : [ this._atributos._atributos[0].modif + this._objClase.modifadicional[0] ],
					'mDES' : [ this._atributos._atributos[1].modif + this._objClase.modifadicional[1] ],
					'mCON' : [ this._atributos._atributos[2].modif + this._objClase.modifadicional[2] ],
					'mINT' : [ this._atributos._atributos[3].modif + this._objClase.modifadicional[3] ],
					'mSAB' : [ this._atributos._atributos[4].modif + this._objClase.modifadicional[4] ],
					'mCAR' : [ this._atributos._atributos[5].modif + this._objClase.modifadicional[5] ],
					'TSCaptura' : [ this._objClase.tsalvacion[0].valor ],
					'TSAflicciones' : [ this._objClase.tsalvacion[1].valor ],
					'TSAtqArea' : [ this._objClase.tsalvacion[2].valor ],
					'TSArtMagicos' : [ this._objClase.tsalvacion[3].valor ],
					'TSConjuros' : [ this._objClase.tsalvacion[4].valor ],
					'Requisito' : [ this._objClase.reqprimario ],
					'Barridos' : [ this._objClase.barridos ],
					'DineroOro' : [ this._dinero ],
					'KilosSC' : [ 0 ],
					'KilosL' : [ "<" + this._atributos._atributos[0].valor ],
					'KilosM' : [ "<" + (this._atributos._atributos[0].valor*4) ],
					'KilosP' : [ ">" + (this._atributos._atributos[0].valor*4) ],
					'ViajeSC' : [ this._objClase.movimiento ],
					'ViajeL' : [ Math.trunc(this._objClase.movimiento*3/4) ],
					'ViajeM' : [ Math.trunc(this._objClase.movimiento/2) ],
					'ViajeP' : [ Math.trunc(this._objClase.movimiento/4) ],
					'ExploraAndSC' : [ this._objClase.movimiento ],
					'ExploraAndL' : [ Math.trunc(this._objClase.movimiento*3/4) ],
					'ExploraAndM' : [ Math.trunc(this._objClase.movimiento/2) ],
					'ExploraAndP' : [ Math.trunc(this._objClase.movimiento/4) ],
					'ExploraCorSC' : [ (this._objClase.movimiento*3) ],
					'ExploraCorL' : [ Math.trunc(this._objClase.movimiento*9/4) ],
					'ExploraCorM' : [ Math.trunc(this._objClase.movimiento*3/2) ],
					'ExploraCorP' : [ Math.trunc(this._objClase.movimiento*3/4) ],
					'EncuentroAndSC' : [ Math.trunc(this._objClase.movimiento*3/10) ],
					'EncuentroAndL' : [ Math.trunc(this._objClase.movimiento*4/20) ],
					'EncuentroAndM' : [ Math.trunc(this._objClase.movimiento*3/20) ],
					'EncuentroAndP' : [ Math.trunc(this._objClase.movimiento*2/20) ],
					'EncuentroCorSC' : [ Math.trunc(this._objClase.movimiento*9/10) ],
					'EncuentroCorL' : [ Math.trunc(this._objClase.movimiento*12/20) ],
					'EncuentroCorM' : [ Math.trunc(this._objClase.movimiento*9/20) ],
					'EncuentroCorP' : [ Math.trunc(this._objClase.movimiento*6/20) ],
					'Alerta' : [ (this._pericias[0].puntosbase + this._pericias[0].puntos + this._pericias[0].puntosespecial) ],
					'Arquitectura' : [ (this._pericias[1].puntosbase + this._pericias[1].puntos + this._pericias[1].puntosespecial) ],
					'Escalada' : [ (this._pericias[2].puntosbase + this._pericias[2].puntos + this._pericias[2].puntosespecial) ],
					'Detectar' : [ (this._pericias[3].puntosbase + this._pericias[3].puntos + this._pericias[3].puntosespecial) ],
					'FPuertas' : [ (this._pericias[4].puntosbase + this._pericias[4].puntos + this._pericias[4].puntosespecial) ],
					'Idiomas' : [ (this._pericias[5].puntosbase + this._pericias[5].puntos + this._pericias[5].puntosespecial) ],
					'Sigilo' : [ (this._pericias[6].puntosbase + this._pericias[6].puntos + this._pericias[6].puntosespecial) ],
					'PX' : [ "0 / " + this._objClase.experiencia ],
					'Lengua1' : [ 'Comun' ],
					'TArmas' : [ this._tipoarmas ],
				};
				
				if ( this._pericias.length > 7 ) {
					var indice;
					for (indice = 7; indice < this._pericias.length; indice++) {
						fields[ "NPAvanzada" + (indice-6) ] = [ (this._pericias[indice].pericia) ];
						fields[ "PAvanzada" + (indice-6) ] = [ (this._pericias[indice].puntosbase + this._pericias[indice].puntos + this._pericias[indice].puntosespecial) ];
					}
				}
				
				if ( this._objClase.idiomas.length > 0 ) {
					var indiceIdiomas = 2;
					var indice=0;
					for (indice=0; indice<this._objClase.idiomas.length;indice++) {
						fields[ "Lengua" + (indiceIdiomas) ] = [ this._objClase.idiomas[indice] ];
						indiceIdiomas++;
					}
				}
				
				
				var indiceCE = 1;
				if ( this._objClase.caracteristicas.length > 0 ) {
					var indice;
					for (indice=0; indice<this._objClase.caracteristicas.length;indice++) {
						fields[ "CarEspeciales" + (indiceCE) ] = [ this._objClase.caracteristicas[indice] ];
						indiceCE++;
					}
				}
				
				if ( this._conjuros.length > 0 ) {
					var sMagia = "Conjuros: " + this._conjuros[0];
					var indice;
					if ( this._conjuros.length<=5 ) {
						for (indice=1; indice<this._conjuros.length;indice++) {
							sMagia += ", " + this._conjuros[indice];
						}
						fields[ "CarEspeciales" + (indiceCE) ] = [ sMagia ];
						indiceCE++;
					}
					else {
						for (indice=1; indice<5;indice++) {
							sMagia += ", " + this._conjuros[indice];
						}
						fields[ "CarEspeciales" + (indiceCE) ] = [ sMagia ];
						indiceCE++;
						sMagia = this._conjuros[5];
						for (indice=6; indice<this._conjuros.length;indice++) {
							sMagia += ", " + this._conjuros[indice];
						}
						fields[ "CarEspeciales" + (indiceCE) ] = [ sMagia ];
						indiceCE++;
					}
				}
				if ( this._objClase.dano > 0 && this._objClase.tipobonifdano == "CC y AC" ) {
					fields[ "CarEspeciales" + (indiceCE) ] = [ "Bono al daño " + this._objClase.dano ];
					indiceCE++;
				}
				else if ( this._objClase.dano > 0 && this._objClase.tipobonifdano == "CC" ) {
					fields[ "CarEspeciales" + (indiceCE) ] = [ "Bono al daño CC " + this._objClase.dano ];
					indiceCE++;
				}
				else if ( this._objClase.dano > 0 && this._objClase.tipobonifdano == "AD" ) {
					fields[ "CarEspeciales" + (indiceCE) ] = [ "Bono al daño AD " + this._objClase.dano ];
					indiceCE++;
				}
				
				
				
				return fields;
	}
	
}
