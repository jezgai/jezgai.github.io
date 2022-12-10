class PJ {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._atributos = { _atributos: [] };
		this._talentos = [];
		this._pv = 0;
		this._pvclase = 0;
		this._cacc = 0;
		this._caad = 0;
		this._atqcc = 0;
		this._atqad = 0;
		this._dinero = 0;
		this._tipoarmas = "d4";
		this.armas = [];
		this.salvaciones = [];
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
		for (indice = 0; indice < this.salvaciones.length; indice++) {
			stabla += "<tr><td>" + this.salvaciones[indice].nombre + "</td><td align='center'>" + this.salvaciones[indice].valor + "</td></tr>";
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
		this._pericias[0].puntosbase = (this._atributos._atributos[4].modif + this._objClase.modifadicional[4]) < -1 ? 1 : 2 + this._atributos._atributos[4].modif + this._objClase.modifadicional[4] + this._objClase.ptosbasepericia(this._pericias[0].pericia);
		this._pericias[2].puntosbase = (this._atributos._atributos[2].modif + this._objClase.modifadicional[2]) < 0 ? 1 : 1 + this._atributos._atributos[2].modif + this._objClase.modifadicional[2] + this._objClase.ptosbasepericia(this._pericias[2].pericia);
		this._pericias[4].puntosbase = (this._atributos._atributos[0].modif + this._objClase.modifadicional[0]) < 0 ? 1 : 1 + this._atributos._atributos[0].modif + this._objClase.modifadicional[0] + this._objClase.ptosbasepericia(this._pericias[4].pericia);
		this._pericias[5].puntosbase = (this._atributos._atributos[3].modif + this._objClase.modifadicional[3]) < 0 ? 0 : this._atributos._atributos[3].modif + this._objClase.modifadicional[3] + this._objClase.ptosbasepericia(this._pericias[5].pericia);
		this._pericias[6].puntosbase = (this._atributos._atributos[1].modif + this._objClase.modifadicional[1]) < -1 ? 1 : 2 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ptosbasepericia(this._pericias[6].pericia);

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
	
	
	tablaArmas() {
		var iarma = 0;
		var sarma = "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</strong></th><th>Tipo</th><th>Daño</th></tr>";
		for (iarma = 0; iarma < this.armas.length; iarma++) {
			sarma += "<tr><td>" + this.armas[iarma].nombre + "</td><td align='center'>" + this.armas[iarma].tipo;
			if ( this.armas[iarma].tipo == "CaC" && this.armas[iarma].danoAD > 0)
				sarma += " (AD)";
			else if ( this.armas[iarma].tipo == "AD" && this.armas[iarma].danoCaC > 0)
				sarma += " (CaC)";
			sarma += "</td><td align='center'>";
			if ( this.armas[iarma].tipo == "CaC" ) 
			{
				sarma += "d" + this.armas[iarma].danoCaC;
				if ( this.armas[iarma].danoAD != "" ) 
					sarma += " (d" + this.armas[iarma].danoAD + ")";
			}
			else 
			{
				sarma += "d"+ this.armas[iarma].danoAD ;
				if ( this.armas[iarma].danoCaC != "" ) 
					sarma += " (d" + this.armas[iarma].danoCaC + ")";
			}
			sarma += "</td></tr>";
		}
		
		sarma += "</table>";
		return sarma;
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
					if ( this._objClase.periciasespeciales.puntos != this._objClase.periciasespeciales.pericias.length ) {
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
						if ( this._objClase.periciasespeciales.puntos != this._objClase.periciasespeciales.pericias.length ) {
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
	
	calculaSalvaciones() {
		this.salvaciones = [];
		var indice = 0;
		for (indice = 0; indice < this._objClase.tsalvacion.length; indice++) {
			
			var salvacion = { nombre: this._objClase.tsalvacion[indice].nombre, valor: parseInt(this._objClase.tsalvacion[indice].valor) };
			
			if ( salvacion.nombre == "Artefactos magicos" || salvacion.nombre == "Conjuros" ) {
				salvacion.valor -= this._atributos._atributos[4].modif;
			}
			this.salvaciones.push(salvacion);
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
		this.calculaArmas();
		this._atqcc = this._objClase.ataque + this._atributos._atributos[0].modif + this._objClase.modifadicional[0];
		this._atqad = this._objClase.ataque + this._objClase.ataquead + this._atributos._atributos[1].modif + this._objClase.modifadicional[1];
		this.recalculaPericiasBasicas();
		this.calculaSalvaciones();
	}
	
	calculaArmas() {
		this.armas = this._objClase.sorteaarmas(this._tipoarmas);
	}
	
	calculaDatosPJ() {
		this._clase = this._objClase.nombre;
		this._pv = this._pvclase + this._atributos._atributos[2].modif;
		this.calculaConjuros();
		this._objClase.calculapericias(this._atributos._atributos);
		this._pericias = this._objClase.ptospericia;
		this._atqcc = this._objClase.ataque + this._atributos._atributos[0].modif + this._objClase.modifadicional[0];
		this._atqad = this._objClase.ataque + this._objClase.ataquead + this._atributos._atributos[1].modif + this._objClase.modifadicional[1];
		this._cacc = 10 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ca;
		this._caad = 10 + this._atributos._atributos[1].modif + this._objClase.modifadicional[1] + this._objClase.ca;
		this.calculaTipoArmas();
		this.calculaArmas();
		this._dinero = 6 * (Comun.random(8,1) + Comun.random(8,1) + Comun.random(8,1));
		this.calculaSalvaciones();
	}
	
	
	cambiaclase() {
		if ( this._atributos._atributos.length > 0 && nombreclase != this._clase) {
			var nuevaclase = clases.clase(nombreclase);
			if ( nuevaclase.dg != this._objClase.dg ) {
				this._pvclase = nuevaclase.pv();				
			}
			this._objClase = nuevaclase;
			this.calculaDatosPJ();
			
		}
	}
	
	genera() {
		this._atributos = new Atributos();
		this._atributos._ntiradasextras = 1;
		this._atributos._excesoatributos = 1;
		this._atributos.calculaValores();
		
		this._objClase = clases.clase(nombreclase);
		this._pvclase = this._objClase.pv();
		this.calculaDatosPJ();
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
		if ( this._objClase.plantilla === undefined ) {
			if ( this._conjuros.length > 0 ) {
				return "pdf/AxisMundiC.pdf";
			}
			else {
				return "pdf/AxisMundi.pdf";
			}
		}
		else {
			return "pdf/" + this._objClase.plantilla;
		}
		
		/*if ( this._objClase.plantilla != "" ) {
			return "pdf/" + this._objClase.plantilla;
		}
		else if ( this._conjuros.length > 0 ) {
			return "pdf/AxisMundiC.pdf";
		}
		else {
			return "pdf/AxisMundi.pdf";
		}*/
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
					'TSCaptura' : [ this.salvaciones[0].valor ],
					'TSAflicciones' : [ this.salvaciones[1].valor ],
					'TSAtqArea' : [ this.salvaciones[2].valor ],
					'TSArtMagicos' : [ this.salvaciones[3].valor ],
					'TSConjuros' : [ this.salvaciones[4].valor ],
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
					var indice;
					var nnivel1 = this._objClase.conjuros.fijos.length + this._objClase.conjuros.numeroN1;
					if ( this._objClase.conjuros.numeroN1 == -1 ) {
						nnivel1 = this._conjuros.length;
					}
					var nivel = 1;
					for (indice = 0; indice<this._conjuros.length; indice++) {
						fields[ "NConjuro_" + (indice) ] = [ this._conjuros[indice] ];
						if ( indice >= nnivel1 )
							nivel = 2;
						fields[ "NvConjuro_"+ (indice) ] = [ nivel ];
					}
				}
				
				/*if ( this._conjuros.length > 0 ) {
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
				*/
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
				
				
				var iarma = 0;
				for (iarma = 0; iarma < this.armas.length; iarma++) {
					fields[ "NArma" + (iarma+1) ] = [ this.armas[iarma].nombre ];
					if ( this.armas[iarma].tipo == "CaC" )
						fields[ "Dano" + (iarma+1) ] = [ "d" + this.armas[iarma].danoCaC ];
					else
						fields[ "Dano" + (iarma+1) ] = [ "d" + this.armas[iarma].danoAD ];
					if ( this.armas[iarma].alcance > 0 )
						fields[ "Alcance" + (iarma+1) ] = [ this.armas[iarma].alcance ];
					
					fields[ "Peso" + (iarma+1) ] = [ this.armas[iarma].peso/1000 ];
				}
				
				
				return fields;
	}
	
}
