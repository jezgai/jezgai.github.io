class PJ {

	constructor(nivel) {
		this._nombre = '';
		this._nivel = nivel;
		this._clase = 'random';
		this._especie = 'random';
		this._atributos = [];
		this._talentos = [];
		this._pv = 0;
		this._ca = 0;
		this._mov = 12;
		this._pod = 0;
		this._objClase = null;
		this._objEspecie = null;
		this._esfuerzo = 0;
		this._competencia = 2;
		this._cordura = 0;
		this._mcordura = 0;
		this._conjuros = [];
		this._trucos = [];
		this._armas = [];
		this._def = 10;
		this._caARM = 10;
		this._caESC = 0;
		this._ataquecc = 0;
		this._ataquead = 0;
		this._ataquesutil = 0;
	}

	get nombre() {
		return this._nombre;
	}
	set nombre(value) {
		this._nombre = value;
	}
		
	get clase() {
		return this._clase;
	}
	set clase(value) {
		this._clase = value;
	}
	
	get especie() {
		return this._especie;
	}
	set especie(value) {
		this._especie = value;
	}
	
	get atributos() {
		return this._atributos;
	}
	set atributos(value) {
		this._atributos = value;
	}
			
	get atq() {
		return this._atq;
	}
	set atq(value) {
		this._atq = value;
	}
	
	get ins() {
		return this._ins;
	}
	set ins(value) {
		this._ins = value;
	}
		
	get ca() {
		return this._ca;
	}
	set ca(value) {
		this._ca = value;
	}
		
	get pv() {
		return this._pv;
	}
	set pv(value) {
		this._pv = value;
	}
	
	
	get mov() {
		return this._mov;
	}
	set mov(value) {
		this._mov = value;
	}
	
	get pod() {
		return this._pod;
	}	
	set pod(value) {
		this._pod = value;
	}
			
	atributoMod(nbatributo) {
		return Atributos.modif(this._atributos[atributos.atributoMod(nbatributo)]);
	}
	
	
	calculaRasgosDerivadosBase(atributo) {
		
		if ( atributo <= 1 && Atributos.modif(this._atributos[atributo]) != Atributos.modif(this._atributos[atributo+1])) {
			this.calculaCA();
		}
		if ( (atributo == 1 || atributo == 2) && Atributos.modif(this._atributos[atributo]) != Atributos.modif(this._atributos[atributo+1]) ) {
			this.calculaPV();
			this.calculaEsfuerzo();
		}
		/*if ( (atributo == 2 || atributo == 3) && Atributos.modif(this.atributos[atributo]) != Atributos.modif(this.atributos[atributo+1]) ) {
			this.calculaPOD();
		}*/
		
		this._ataquecc = Atributos.modif(this._atributos[0]);
		this._ataquead = Atributos.modif(this._atributos[1]);
		this._ataquesutil = this._ataquecc;
		if ( this._ataquead > this._ataquecc ) {
			this._ataquesutil = this._ataquead;
		}
	}
	
	genera() {
		this._atributos = [];
		var i=0;
		for (i=0; i< 6; i++) {
			this._atributos[i] = atributos.valoratr();
		}
		this._objClase = clases.clase(nombreclase);
		this._clase = this._objClase._nombre;
		
		this._objEspecie = especies.especie(nombreespecie);
		this._especie = this._objEspecie._nombre;
		this._mov = this._objEspecie._movimiento;
		
		this.calculaEsfuerzo();
		this.calculaPV();
		this.calculaPOD();
		
		this._cordura = Comun.random(6,1) + Comun.random(6,1) + 8;
		this._mcordura = Atributos.modif(this._cordura);
		this.calculaConjuros();
		
		this._armas = [];
		var iarmas = 0;
		if ( this._objClase._armas.length > 1 ) {
			iarmas = Comun.random(this._objClase._armas.length,0);
		}
		if ( this._objClase._armas.length > 0 ) {
			for (i=0; i<this._objClase._armas[iarmas].length; i++) {
				this._armas.push(this._objClase._armas[iarmas][i]);
			}
		}
		
		this._caARM = 10;
		if ( this._objClase._armadura != "" ) {
			var arm = armaduras.armadura(this._objClase._armadura);
			if ( arm != null ) {
				this._caARM = arm.ca;
			}
		}
		
		this._caESC = 0;
		if ( this._objClase._escudo != "" ) {
			var esc = escudos.escudo(this._objClase._escudo);
			if ( esc != null ) {
				this._caESC = esc.ca;
			}
		}
		this.calculaCA();
		this._ataquecc = Atributos.modif(this._atributos[0]);
		this._ataquead = Atributos.modif(this._atributos[1]);
		this._ataquesutil = this._ataquecc;
		if ( this._ataquead > this._ataquecc ) {
			this._ataquesutil = this._ataquead;
		}
	}
		
	
	get plantillaPDF() {
		return "pdf/Eirendor.pdf";
	}
	
	calculaPOD() {
		if ( this._objClase._trucos.numero > 0 || this._objClase._conjuros.numero != 0) {
			this._pod = 2 ;
		}
		else 
		{
			this._pod = 0;
		}
	}
		
	calculaEsfuerzo() {
		this._esfuerzo = 1 + Atributos.modif(this._atributos[2]);
		if ( this._esfuerzo < 1 ) {
			this._esfuerzo = 1;
		}
	}
	
	calculaPV() {
		this._pv = this._objClase._pg + Atributos.modif(this._atributos[2]);
	}
	
	calculaConjuros() {
		this._conjuros = [];
		this._trucos = [];
		if ( this._objClase._trucos.numero > 0 ) {
			var trucosaux = [];
			trucosaux = Comun.shuffle(this._objClase._trucos.trucos.clone());
			var t = 0;
			for (t = 0; t<this._objClase._trucos.numero && t<this._objClase._trucos.trucos.length; t++) {
				this._trucos.push(trucosaux[t]);
			}
		}
		if ( this._objClase._conjuros.numero != 0 ) {
			var conjurosaux = [];
			conjurosaux = Comun.shuffle(this._objClase._conjuros.conjuros.clone());
			var c = 0;
			var max = this._objClase._conjuros.conjuros.length;
			if ( this._objClase._conjuros.numero > 0 && this._objClase._conjuros.numero < max) {
				max = this._objClase._conjuros.numero;
			}
			for (c = 0; c<max; c++) {
				this._conjuros.push(conjurosaux[c]);
			}
		}
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>CA:</strong> " + this._def + 
													  " </td></tr><tr><td><strong>PV:</strong> " + this._pv + 
													  " </td></tr><tr><td><strong>PE:</strong> " + this._esfuerzo + 
													  " </td></tr><tr><td><strong>POD:</strong> " + this._pod + 
													  " </td></tr><tr><td><strong>Mov:</strong> " + this._mov + 
													  " </td></tr><tr><td><strong>INI:</strong> " + Atributos.modif(this._atributos[1]) + 
													  " </td></tr><tr><td><strong>Cordura:</strong> " + this._cordura + " (" + this._mcordura + ")</td></tr></table";
	}
	
	calculaSalvacion(atributo1, atributo2) {
		if ( Atributos.modif(this._atributos[atributo1]) >= Atributos.modif(this.atributos[atributo2])){
			return Atributos.modif(this._atributos[atributo1]);
		}
		return Atributos.modif(this._atributos[atributo2]);
	}
	
	competenciaSalvacion(salvacion) {
		if ( this._objClase._salvacion == salvacion ) {
			return " <strong>(Competente)</strong>";
		}
		return "";
	}
	
	tablaSalvaciones() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>Fortaleza:</strong> " + this.calculaSalvacion(0,2) + this.competenciaSalvacion("Fortaleza") +
													  " </td></tr><tr><td><strong>Reflejos:</strong> " + this.calculaSalvacion(1,3) + this.competenciaSalvacion("Reflejos") + 
													  " </td></tr><tr><td><strong>Voluntad:</strong> " + this.calculaSalvacion(4,5) + this.competenciaSalvacion("Voluntad") + "</td></tr></table";
	}
	
	tablaClaves() {
		
		var sClaves="";
		var i=0;
		if ( this._objEspecie._claves.length > 0 ) {
			sClaves = this._objEspecie._claves[0];
			for (i=1; i<this._objEspecie._claves.length;i++) {
				sClaves += ", " + this._objEspecie._claves[i];
			}
		}
		if ( this._objClase._claves.length > 0 ) {
			if ( sClaves != "" ) {
				sClaves += ", ";
			}
			sClaves += this._objClase._claves[0];
			for (i=1; i<this._objClase._claves.length;i++) {
				sClaves += ", " + this._objClase._claves[i];
			}
		}
		return sClaves;
	}
	
	talentos() {
		var sTalentos = "";
		var i=0;
		if ( this._objEspecie._talentos.length > 0 ) {
			sTalentos = this._objEspecie._talentos[0];
			for (i=1; i<this._objEspecie._talentos.length;i++) {
				sTalentos += "<br/>" + this._objEspecie._talentos[i];
			}
		}
		if ( this._objClase._claves.length > 0 ) {
			if ( sTalentos != "" ) {
				sTalentos += "<br/>";
			}
			sTalentos += this._objClase._talentos[0];
			for (i=1; i<this._objClase._talentos.length;i++) {
				sTalentos += "<br/>" + this._objClase._talentos[i];
			}
		}
		return sTalentos;
	}
	
	tablaMagia() {
		var sMagia = "";
		var i=0;
		if ( this._trucos.length > 0 ) {
			
			sMagia = "<strong>Trucos:</strong> " + this._trucos[0];
			for (i=1; i<this._trucos.length;i++) {
				sMagia += ", " + this._trucos[i];
			}
		}
		if ( this._conjuros.length > 0 ) {
			if ( sMagia != "" ) {
				sMagia += "<br/>";
			}
			sMagia += "<strong>Conjuros:</strong> " + this._conjuros[0];
			for (i=1; i<this._conjuros.length;i++) {
				sMagia += ", " + this._conjuros[i];
			}
		}
		return sMagia;
	}
	
	tablaEquipo() {
		var sEquipo = "";
		var i=0;
		if ( this._objClase._armadura != "" ) {
			sEquipo = "<strong>Armadura:</strong> " + this._objClase._armadura + " (" + this._caARM + ")";
		}
		if ( this._objClase._escudo != "" ) {
			if ( sEquipo != "" ) {
				sEquipo += "<br/>";
			}
			sEquipo += "<strong>Escudo:</strong> " + this._objClase._escudo + " (" + this._caESC + ")";
		}
		if ( this._armas.length > 0 ) {
			if ( sEquipo != "" ) {
				sEquipo += "<br/>";
			}
			sEquipo += "<strong>Armas:</strong> " + this._armas[0];
			for (i=1; i<this._armas.length; i++) {
				sEquipo += ", " + this._armas[i];
			}
		}
		if ( this._objClase._equipo.length > 0 ) {
			if ( sEquipo != "" ) {
				sEquipo += "<br/>";
			}
			sEquipo += "<strong>Equipo:</strong> " + this._objClase._equipo[0];
			for (i=1; i<this._objClase._equipo.length; i++) {
				sEquipo += ", " + this._objClase._equipo[i];
			}
		}
		return sEquipo;
	}
	
	calculaCA() {
		this._def = Math.round(this._caARM) + Math.round(this._caESC) + Atributos.modif(this._atributos[1]);
	}
	
	rellenaPDF() {
		
			  var fields = {
					'Nivel' : [ 1 ],
					'Bono' : [ 2 ],
					'Clase' : [ this._clase ],
					'Fuerza' : [ this._atributos[0] ],
					'Destreza' : [ this._atributos[1] ],
					'Constitucion' : [ this._atributos[2] ],
					'Inteligencia' : [ this._atributos[3] ],
					'Sabiduria' : [ this._atributos[4] ],
					'Carisma' : [ this._atributos[5] ],
					'FUE' : [ Atributos.modif(this._atributos[0]) ],
					'DES' : [ Atributos.modif(this._atributos[1]) ],
					'CON' : [ Atributos.modif(this._atributos[2]) ],
					'INT' : [ Atributos.modif(this._atributos[3]) ],
					'SAB' : [ Atributos.modif(this._atributos[4]) ],
					'CAR' : [ Atributos.modif(this._atributos[5]) ],
					'FOR' : [ this.calculaSalvacion(0,2) ],
					'REF' : [ this.calculaSalvacion(1,3) ],
					'VOL' : [ this.calculaSalvacion(4,5) ],
					'cFOR' : [ this.competenciaSalvacion("Fortaleza") != "" ? true : false],
					'cREF' : [ this.competenciaSalvacion("Reflejos") != "" ? true : false],
					'cVOL' : [ this.competenciaSalvacion("Voluntad") != "" ? true : false],
					'PG' : [ this._pv ],
					'PGTotal' : [ this._pv ],
					'POD' : [ this._pod ],
					'PODTotal' : [ this._pod ],
					'PE' : [ this._esfuerzo ],
					'PETotal' : [ this._esfuerzo ],
					'Cordura' : [ this._cordura ],
					'COR' : [ this._mcordura ],
					'Claves' : [ document.getElementById("claves").innerText ],
					'Talentos' : [ document.getElementById("talentos").innerText ],
					'Conjuros' : [ document.getElementById("lconjuros").innerText ],
					'CA' : [ this._def ],
					'MOV' : [ this._mov ],
					'INI' : [ Atributos.modif(this._atributos[1]) ],
				};
				
				var indice=0;
				var i=0;
				for (i=0; i< this._armas.length; i++) {
					fields["Arma" + (i+1) ] = [ this._armas[i] ];
					fields["Equipo" + (indice+1) ]  =  [ this._armas[i] ];
					indice++;
					var objarma = armas.arma( this._armas[i] );
					if ( objarma != null ) {
						var ieqarma = 0;
						for (ieqarma=0; ieqarma < objarma.equipo.length; ieqarma++) {
							fields["Equipo" + (indice+1) ]  =  [ objarma.equipo[ieqarma] ];
							indice++;
						}
						
						fields["ADano" + (i+1) ] = [ objarma.dano ];
						var sclaves = "";
						var iclaves = 0;
						if ( objarma.claves.length > 0 ) {
							sclaves = objarma.claves[iclaves];
						}
						for (iclaves = 1; iclaves < objarma.claves.length; iclaves++) {
							sclaves += ", " + objarma.claves[iclaves];
						}
						fields["AEtiqueta" + (i+1) ] = [ sclaves ];
						
						var ataque = 2 + this._ataquecc;
						if ( objarma.tipo == "CaC" ) {
							if ( this._ataquesutil > this._ataquecc ) {
								if ( sclaves.indexOf("Sutil") !== -1 ) {
									ataque = 2 + this._ataquesutil;
								}
								else if ( sclaves.indexOf("Arrojadiza") !== -1  ) {
									ataque = ataque + " (cc) / " + (2 + this._ataquesutil) + " (ad)";
								}
							}
						} 
						else {
							ataque = 2 + this._ataquead;
						}
						fields["AImpacto" + (i+1) ] = [ ataque ];
						
						
					}
					
				}
				if ( this._objClase._armadura != "" ) {
					fields["Equipo" + (indice+1) ] = [ "Armadura (" + this._objClase._armadura + ")" ];
					indice++;
				}
				if ( this._objClase._escudo != "" ) {
					fields["Equipo" + (indice+1) ] = [ this._objClase._escudo ];
					indice++;
				}
				var indice2=0;
				for (indice2=0; indice2<this._objClase._equipo.length; indice2++) {
					fields["Equipo" + (indice2+indice) ]  =  [ this._objClase._equipo[indice2] ];
				}
				
				return fields;
	}
	
}
