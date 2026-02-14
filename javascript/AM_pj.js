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
													  " </td></tr><tr><td><strong>Dinero:</strong> " + this._dinero + " " + this._objClase.monedabase() +
													  "</td></tr></table";
	}
	
	recalculaPericiasBasicas() {
		 
		this._pericias[0].puntosbase = Atributos.modificador(this._atributos._atributos[4].valor + this._objClase.modifadicional[4]) < -1 ? 1 : 2 + Atributos.modificador(this._atributos._atributos[4].valor + this._objClase.modifadicional[4]) + this._objClase.ptosbasepericia(this._pericias[0].pericia);
		this._pericias[2].puntosbase = Atributos.modificador(this._atributos._atributos[2].valor + this._objClase.modifadicional[2]) < 0 ? 1 : 1 + Atributos.modificador(this._atributos._atributos[2].valor + this._objClase.modifadicional[2]) + this._objClase.ptosbasepericia(this._pericias[2].pericia);
		this._pericias[4].puntosbase = Atributos.modificador(this._atributos._atributos[0].valor + this._objClase.modifadicional[0]) < 0 ? 1 : 1 + Atributos.modificador(this._atributos._atributos[0].valor + this._objClase.modifadicional[0]) + this._objClase.ptosbasepericia(this._pericias[4].pericia);
		this._pericias[5].puntosbase = Atributos.modificador(this._atributos._atributos[3].valor + this._objClase.modifadicional[3]) < 0 ? 0 : Atributos.modificador(this._atributos._atributos[3].valor + this._objClase.modifadicional[3]) + this._objClase.ptosbasepericia(this._pericias[5].pericia);
		this._pericias[6].puntosbase = Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) < -1 ? 1 : 2 + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) + this._objClase.ptosbasepericia(this._pericias[6].pericia);

	}
	
	
	tablaAtributos() {
		var iatrb = 0;
		var satrs = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Valor (mod)</th></tr>";
		for (iatrb = 0; iatrb < this._atributos._atributos.length; iatrb++) {
			/*satrs += "<tr><td>" + this._atributos._atributos[iatrb].nbatr + " (" + this._atributos._atributos[iatrb].nbmod + ")</td><td align='center'>" + this._atributos._atributos[iatrb].valor + " (" + this._atributos._atributos[iatrb].modif + ") " + Comun.construyeBotonAbajo(iatrb, "abajoatr");
			if ( this._objClase.modifadicional[iatrb] > 0 ) {
				satrs += " (+" + this._objClase.modifadicional[iatrb] + ")";
			}*/
			satrs += "<tr><td>" + this._atributos._atributos[iatrb].nbatr + " (" + this._atributos._atributos[iatrb].nbmod + ")</td><td align='center'>";
			 
			if ( this._objClase.modifadicional[iatrb] > 0 ) {
				satrs += (this._atributos._atributos[iatrb].valor+this._objClase.modifadicional[iatrb]) + " (" + Atributos.modificador(this._atributos._atributos[iatrb].valor+this._objClase.modifadicional[iatrb]);
			}
			else {
				satrs += this._atributos._atributos[iatrb].valor + " (" + this._atributos._atributos[iatrb].modif;
			}
			satrs += ") " + Comun.construyeBotonAbajo(iatrb, "abajoatr") + "</td></tr>";
		}
		
		satrs += "</table>";
		return satrs;
	}
	
	danoArma(dano) {
		if ( dano.hasOwnProperty("tipo") ) {
			var aux = "d" + dano.tipo;
			if ( dano.hasOwnProperty("dados") && dano.dados > 1 ) {
				aux = dano.dados + aux;
			}
			if ( dano.hasOwnProperty("modif")) {
				if ( dado.modif > 0 ) {
					aux = aux + "+";
				}
				aux = aux + dano.modif;
			}
			return aux;
			
		}
		
		return "d" + dano;
	}
	
	tieneArma(dano) {
		if ( dano.hasOwnProperty("tipo") ) {
			if ( dano.tipo > 0 ) {
				return true;
			}
		}
		else if ( dano > 0 ) {
			return true;
		}
		return false;
	}
		
	
	tablaArmas() {
		var iarma = 0;
		var sarma = "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</strong></th><th>Tipo</th><th>Daño</th></tr>";
		for (iarma = 0; iarma < this.armas.length; iarma++) {
			sarma += "<tr><td>" + this.armas[iarma].nombre + "</td><td align='center'>" + this.armas[iarma].tipo;
			//if ( this.armas[iarma].tipo == "CaC" && this.armas[iarma].danoAD > 0)
			if ( this.armas[iarma].tipo == "CaC" && this.tieneArma(this.armas[iarma].danoAD))
				sarma += " (AD)";
			//else if ( this.armas[iarma].tipo == "AD" && this.armas[iarma].danoCaC > 0)
			else if ( this.armas[iarma].tipo == "CaC" && this.tieneArma(this.armas[iarma].danoCaC))
				sarma += " (CaC)";
			sarma += "</td><td align='center'>";
			if ( this.armas[iarma].tipo == "CaC" ) 
			{
				//sarma += "d" + this.armas[iarma].danoCaC;
				sarma += this.danoArma(this.armas[iarma].danoCaC);
				//if ( this.armas[iarma].danoAD != "" ) 
				if ( this.tieneArma(this.armas[iarma].danoAD) )
					sarma += " (" + this.danoArma(this.armas[iarma].danoAD) + ")";
					//sarma += " (d" + this.armas[iarma].danoAD + ")";
			}
			else 
			{
				//sarma += "d"+ this.armas[iarma].danoAD ;
				sarma += this.danoArma(this.armas[iarma].danoAD);
				//if ( this.armas[iarma].danoCaC != "" ) 
				if ( this.tieneArma(this.armas[iarma].danoCaC) )
					sarma += " (" + this.danoArma(this.armas[iarma].danoCaC) + ")";
					//sarma += " (d" + this.armas[iarma].danoCaC + ")";
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
		var bonif = this._objClase.boniftipoarmas + Atributos.modificador(this._atributos._atributos[0].valor + this._objClase.modifadicional[0]);
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
			this._cacc = 10 + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) + this._objClase.ca;
			this._caad = 10 + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) + this._objClase.ca;
		}
		if ( (atributo == 1 || atributo == 2) && this._atributos._atributos[atributo].modif != this._atributos._atributos[atributo+1].modif ) {
			this._pv = this._pvclase + Atributos.modificador(this._atributos._atributos[2].valor + this._objClase.modifadicional[2]);
		}
		this.calculaTipoArmas();
		this.calculaArmas();
		this._atqcc = this._objClase.ataque + Atributos.modificador(this._atributos._atributos[0].valor + this._objClase.modifadicional[0]);
		this._atqad = this._objClase.ataque + this._objClase.ataquead + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]);
		this.recalculaPericiasBasicas();
		this.calculaSalvaciones();
	}
	
	calculaArmas() {
		this.armas = this._objClase.sorteaarmas(this._tipoarmas);
	}
	
	calculaDatosPJ() {
		this._clase = this._objClase.nombre;
		this._pv = this._pvclase + Atributos.modificador(this._atributos._atributos[2].valor + this._objClase.modifadicional[2]);
		this.calculaConjuros();
				
		this._objClase.calculapericias(this._atributos._atributos);
		this._pericias = this._objClase.ptospericia;
		this._atqcc = this._objClase.ataque + Atributos.modificador(this._atributos._atributos[0].valor + this._objClase.modifadicional[0]);
		this._atqad = this._objClase.ataque + this._objClase.ataquead + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]);
		this._cacc = 10 + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) + this._objClase.ca;
		this._caad = 10 + Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) + this._objClase.ca;
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
		
			  var movimientoBase = this._objClase.movimiento ;
			  var movimientoCLigera = Math.trunc(movimientoBase*3/4);
			  var movimientoCMedia = Math.trunc(movimientoBase/2);
			  var movimientoCPesada = Math.trunc(movimientoBase/4);
			  var fields = {
					'Nivel' : [ 1 ],
					'Clase' : [ this._clase ],
					'PG' : [ this._pv ],
					'CACC' : [ this._cacc ],
					'CAAD' : [ this._caad ],
					'AtqCC' : [ this._atqcc ],
					'AtqAD' : [ this._atqad ],
					'FUE' : [ (this._atributos._atributos[0].valor + this._objClase.modifadicional[0]) ],
					'DES' : [ (this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) ],
					'CON' : [ (this._atributos._atributos[2].valor + this._objClase.modifadicional[2]) ],
					'INT' : [ (this._atributos._atributos[3].valor + this._objClase.modifadicional[3]) ],
					'SAB' : [ (this._atributos._atributos[4].valor + this._objClase.modifadicional[4]) ],
					'CAR' : [ (this._atributos._atributos[5].valor + this._objClase.modifadicional[5]) ],
					'mFUE' : [ Atributos.modificador(this._atributos._atributos[0].valor + this._objClase.modifadicional[0]) ],
					'mDES' : [ Atributos.modificador(this._atributos._atributos[1].valor + this._objClase.modifadicional[1]) ],
					'mCON' : [ Atributos.modificador(this._atributos._atributos[2].valor + this._objClase.modifadicional[2]) ],
					'mINT' : [ Atributos.modificador(this._atributos._atributos[3].valor + this._objClase.modifadicional[3]) ],
					'mSAB' : [ Atributos.modificador(this._atributos._atributos[4].valor + this._objClase.modifadicional[4]) ],
					'mCAR' : [ Atributos.modificador(this._atributos._atributos[5].valor + this._objClase.modifadicional[5]) ],
					'TSCaptura' : [ this.salvaciones[0].valor ],
					'TSAflicciones' : [ this.salvaciones[1].valor ],
					'TSAtqArea' : [ this.salvaciones[2].valor ],
					'TSArtMagicos' : [ this.salvaciones[3].valor ],
					'TSConjuros' : [ this.salvaciones[4].valor ],
					'Requisito' : [ this._objClase.reqprimario ],
					'Barridos' : [ this._objClase.barridos ],
					'DineroOro' : [ this._dinero ],
					'KilosSC' : [ 0 ],
					'KilosL' : [ "(0," + (this._atributos._atributos[0].valor+this._objClase.modifadicional[0]) + "]" ],
					'KilosM' : [ "(" + (this._atributos._atributos[0].valor+this._objClase.modifadicional[0]) + "," + ((this._atributos._atributos[0].valor+this._objClase.modifadicional[0])*4) + "]" ],
					'KilosP' : [ "(" + ((this._atributos._atributos[0].valor+this._objClase.modifadicional[0])*4) + "," + ((this._atributos._atributos[0].valor+this._objClase.modifadicional[0])*5) + "]" ],
					'ViajeSC' : [ movimientoBase ],
					'ViajeL' : [ movimientoCLigera ],
					'ViajeM' : [ movimientoCMedia ],
					'ViajeP' : [ movimientoCPesada ],
					'ExploraAndSC' : [ movimientoBase ],
					'ExploraAndL' : [ movimientoCLigera ],
					'ExploraAndM' : [ movimientoCMedia ],
					'ExploraAndP' : [ movimientoCPesada ],
					'ExploraCorSC' : [ movimientoBase*3 ],
					'ExploraCorL' : [ movimientoCLigera*3 ],
					'ExploraCorM' : [ movimientoCMedia*3 ],
					'ExploraCorP' : [ movimientoCPesada*3 ],
					'EncuentroAndSC' : [ Math.trunc(movimientoBase*3/10) ],
					'EncuentroAndL' : [ Math.trunc(movimientoCLigera*3/10) ],
					'EncuentroAndM' : [ Math.trunc(movimientoCMedia*3/10) ],
					'EncuentroAndP' : [ Math.trunc(movimientoCPesada*3/10) ],
					'EncuentroCorSC' : [ Math.trunc(movimientoBase*3/10)*3 ],
					'EncuentroCorL' : [ Math.trunc(movimientoCLigera*3/10)*3 ],
					'EncuentroCorM' : [ Math.trunc(movimientoCMedia*3/10)*3 ],
					'EncuentroCorP' : [ Math.trunc(movimientoCPesada*3/10)*3 ],
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
				if ( this._objClase.dano > 0 && this._objClase.tipobonifdano == "CC y AD" ) {
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
					var nombrearma = this.armas[iarma].nombre;
					var danoarma = "";
					if ( this.armas[iarma].tipo == "CaC" ) {
						//danoarma = "d" + this.armas[iarma].danoCaC;
						danoarma = this.danoArma(this.armas[iarma].danoCaC);
						
						//if ( this.armas[iarma].danoAD > 0) {
						if ( this.tieneArma(this.armas[iarma].danoAD) ) {
							//danoarma += " (d" + this.armas[iarma].danoAD + ")";
							danoarma += " (" + this.danoArma(this.armas[iarma].danoAD) + ")";
							nombrearma += " (CaC)";
						}
					}
					else {
						//danoarma = "d" + this.armas[iarma].danoAD;
						danoarma = this.danoArma(this.armas[iarma].danoAD);
						//if ( this.armas[iarma].danoCaC > 0) {
						if ( this.tieneArma(this.armas[iarma].danoCaC) ) {
							//danoarma += " (d" + this.armas[iarma].danoCaC + ")";
							danoarma += " (" + this.danoArma(this.armas[iarma].danoCaC) + ")";
							nombrearma += " (AD)";
						}
					}
					if ( this.armas[iarma].alcance > 0 )
						fields[ "Alcance" + (iarma+1) ] = [ this.armas[iarma].alcance ];
					
					fields[ "NArma" + (iarma+1) ] = [ nombrearma ];
					fields[ "Dano" + (iarma+1) ] = [ danoarma ];
					fields[ "Peso" + (iarma+1) ] = [ this.armas[iarma].peso/1000 ];
				}
				
				
				return fields;
	}
	
}
