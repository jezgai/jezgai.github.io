class EDyT_PJ {
	
	calculaPV() {
		this._pv = 10 + this._pvadicional + (2 * this._atributos[0]); // Tocho
	}
	calculaRasgos() {
		var rasgos = Comun.shuffle([ "Agresivo", "Pacífico", "Líder", "Seguidor", "Alegre", "Amargado", "Locuaz", "Callado", "Astuto", "Obtuso", "Lujurioso", "Casto",
						"Atento", "Despistado", "Nervioso", "Tranquilo", "Intrépido", "Cauto", "Optimista", "Pesimista", "Cabezota", "Transigente", "Prudente", "Impetuoso",
						"Compasivo", "Cruel", "Rebelde", "Sumiso", "Curioso", "Discreto", "Sacrificado", "Ególatra", "Estoico", "Quejica", "Simpático", "Antipático",
						"Generoso", "Egoísta", "Sincero", "Mentiroso", "Inocente", "Desconfiado", "Sociable", "Tímido", "Inquisitivo", "Crédulo", "Trabajador", "Vago",
						"Iracundo", "Sereno", "Valiente", "Cobarde" ]);
						
		this._rasgos = [ rasgos[0], rasgos[1], rasgos[2] ];
						
	}
	
	
	construyeBotonesAtributo(idesde) {
		var isiguiente = (idesde+1)%3;
		var ianterior = idesde-1;
		if ( ianterior<0) 
			ianterior = 2;
		return "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"transfiereAtributos(" + idesde + "," + isiguiente + ")\">&#9660;</button> " +
			   "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"transfiereAtributos(" + idesde + "," + ianterior + ")\">&#9650;</button>";
	}
	
	construyeBotonHabilidad(idesde) {
		var isiguiente = (idesde+1)%(habilidades._habilidades.length);
		return "<button class=\"w3-button w3-circle w3-green w3-padding-small w3-tiny\" onclick=\"abajohabilidades(" + idesde + "," + isiguiente + ")\">&#9660;</button>";
	}

	
	pintaAtributos() {
		var atribs = "<table class='w3-table  w3-striped  w3-border'>";
		var indice = 0;
		for (indice=0; indice<3;indice++) {
			atribs+= "<tr><td>" + atributos._atributos[indice].nombre + "</td><td>" + this._atributos[indice] + "</td><td>" + this.construyeBotonesAtributo(indice) + "</td></tr>";
		}
		atribs += "</table>";
		return atribs;
	}
	
	pintaPV() {
		var tPV = "<table class='w3-table  w3-striped  w3-border'>";
		tPV+= "<tr><td>Puntos de vida</td><td>" + this._pv + "</td></tr>";
		tPV+= "<tr><td>Puntos de caracter</td><td>" + this._PC + "</td></tr>";
		tPV+= "<tr><td>Karma</td><td>" + this._karma + "</td></tr></table>";
		return tPV;
	}
	
	pintaRasgos() {
		var rasgos = "<h2>Rasgos de caracter</h2>";
		for ( var indice=0; indice<3; indice++ ) {
			rasgos += this._rasgos[indice] + "<br/>";
		}
		return rasgos;
	}
	
	pintaProezas() {
		var tals = "<table class='w3-table  w3-striped  w3-border'>";
		var indice = 0;
		for (indice=0; indice<this._proezas.length;indice++) {
			tals+= "<tr><td><strong>" + proezas._proezas[this._proezas[indice]].nombre + "</strong>: " + proezas._proezas[this._proezas[indice]].descripcion + "</td></tr>";
		}
		tals += "</table>";
		return tals;
	}
	
	pintaArmas() {
		return "";
		/*
		var arms = "<table class='w3-table  w3-striped  w3-border'>";
		arms+= "<tr><td><strong>" + this._armaCaC.nombre + "</strong>: (daño " + this._armaCaC.dano + ")</td></tr>";
		arms+= "<tr><td><strong>" + this._armaAD.nombre + "</strong>: (daño " + this._armaAD.dano + ")</td></tr>";
		arms += "</table>";
		return arms;*/
	}
		
	pintaHabilidades() {
		var habs = "<table class='w3-table  w3-striped  w3-border'>";
		var indice = 0;
		for (indice=0; indice<habilidades._habilidades.length;indice++) {
			habs+= "<tr><td>" + habilidades._habilidades[indice].nombre + (this._habilidades[indice] == 2 ? "+" : "")+ " (" + habilidades._habilidades[indice].atributo + ")</td><td>" + (this._habilidades[indice] >= 1 ? "X" : "_") + "</td><td>" 
				+ this.construyeBotonHabilidad(indice) + "</td></tr>";
		}
		habs += "</table>";
		return habs;
	}
	
	calculaArmas() {
		return;
		/*
		this._armaCaC = armas.armaCaC();
		this._armaAD = armas.armaAD();
		this._dinero = 150 - this._armaCaC.precio - this._armaAD.precio;
		*/
	}
	
	calculaProezas() {
		var tals = [];
		var indice=0;
		for (indice=0; indice<proezas._proezas.length; indice++)
			tals[indice] = indice;
		tals = Comun.shuffle(tals);
		this._proezas = [];
		for (indice = 0; indice<this._numeroproezas; indice++) {
			this._proezas[indice] = tals[indice];
		}
	}
	
	calculaAdicionales(numero) {
		if ( numero == 1 ) {
			this._numerohabilidades++;
		} else if ( numero == 2 ) {
			this._karma++;
		} else {
			this._pvadicional = 4;
		}
	}

	genera() {
		this._puntosatributos = 9;
		this._numeroproezas = 1;
		this._pvadicional = 0;
		this._numerohabilidades = 5;
		this._karma = 1;
		var personalizacion = Comun.random(3,0);
		if ( personalizacion == 1 ) { // Suma 1 a un atributo
			this._puntosatributos = 10;
		} else if ( personalizacion == 2 ) { // Otra proeza
			this._numeroproezas = 2;
		} else {
			// 1: otra habilidad
			// 2: suma 1 a karma
			// 3: suma 4 a pv
			var adicionales = Comun.shuffle( [1, 2, 3] );
			this.calculaAdicionales(adicionales[0]);
			this.calculaAdicionales(adicionales[1]);
		}
		
		this._atributos = [ 1, 1, 1 ];
		var indice=0;
		for (indice=3; indice <this._puntosatributos; indice++) {
			var imod = Comun.random(3,0);
			if ( this._atributos[imod] < 5 )
				this._atributos[imod]++;
			else
				indice--;
		}
		this._pc = 3;
		
		this._habilidades = [];
		for (indice = 0; indice<habilidades._habilidades.length; indice++)
			this._habilidades[indice] = 0;
		var _hab = Comun.shuffle(habilidades._habilidades.clone());
		for (indice = 0; indice<this._numerohabilidades; indice++) {
			this._habilidades[ habilidades.habilidad(_hab[indice]) ] = 1;
		}
				
		this.calculaProezas();
		
		//this.calculaArmas();
		
	}
	
	
}
