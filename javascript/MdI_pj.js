class ATZ_PJ {
	
	
	calculaVoluntad() {
		var minimo = Math.trunc(this._atributos[0]);
		var maximo = Math.trunc(minimo);
		
		if (Math.trunc(this._atributos[1]) < minimo)
			minimo = Math.trunc(this._atributos[1]);
		if (Math.trunc(this._atributos[1]) > maximo)
			maximo = Math.trunc(this._atributos[1]);
			
		if (Math.trunc(this._atributos[2]) < minimo)
			minimo = Math.trunc(this._atributos[2]);
		if (Math.trunc(this._atributos[2]) > maximo)
			maximo = Math.trunc(this._atributos[2]);
						
		if (Math.trunc(this._atributos[3]) < minimo)
			minimo = Math.trunc(this._atributos[3]);
		if (Math.trunc(this._atributos[3]) > maximo)
			maximo = Math.trunc(this._atributos[3]);
			
		this._voluntad = Math.trunc( (minimo + maximo) / 2 );
			
	}
	
	calculaRasgos() {
		this._pv = 6 + this._atributos[0]; // Vigor
		this._suerte = Math.trunc( (this._atributos[2] + this._atributos[3]) / 2);
		this._iniciativa = Math.trunc( (this._atributos[1] + this._atributos[3]) / 2);
		this._defensa = 4 + Math.trunc( (this._atributos[0] + this._atributos[1]) / 2);
		this.calculaVoluntad();
	}
	
	
	construyeBotonesAtributo(idesde) {
		var isiguiente = (idesde+1)%4;
		var ianterior = idesde-1;
		if ( ianterior<0) 
			ianterior = 3;
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
		for (indice=0; indice<4;indice++) {
			atribs+= "<tr><td>" + atributos._atributos[indice].nombre + "</td><td>" + this._atributos[indice] + "</td><td>" + this.construyeBotonesAtributo(indice) + "</td></tr>";
		}
		atribs += "</table>";
		return atribs;
	}
	
	pintaRasgos() {
		this.calculaRasgos();
		var rasgos = "<table class='w3-table  w3-striped  w3-border'>";
		rasgos+= "<tr><td>Puntos de vida</td><td>" + this._pv + "</td></tr>";
		rasgos+= "<tr><td>Fortuna</td><td>" + this._suerte + "</td></tr>";
		rasgos+= "<tr><td>Iniciativa</td><td>" + this._iniciativa + "</td></tr>";
		rasgos+= "<tr><td>Defensa</td><td>" + this._defensa + "</td></tr>";
		rasgos+= "<tr><td>Voluntad</td><td>" + this._voluntad + "</td></tr>";
		rasgos += "</table>";
		return rasgos;
	}
	
	pintaTalentos() {
		var tals = "<table class='w3-table  w3-striped  w3-border'>";
		var indice = 0;
		for (indice=0; indice<this._talentos.length;indice++) {
			tals+= "<tr><td><strong>" + talentos._talentos[this._talentos[indice]].nombre + "</strong>: " + talentos._talentos[this._talentos[indice]].descripcion + "</td></tr>";
		}
		tals += "</table>";
		return tals;
	}
	
	pintaArmas() {
		var arms = "<table class='w3-table  w3-striped  w3-border'>";
		arms+= "<tr><td><strong>" + this._armaCaC.nombre + "</strong>: (Brío. Daño " + this._armaCaC.dano + ")</td></tr>";
		arms+= "<tr><td><strong>" + this._armaAD.nombre + "</strong>: (Picaresca. Daño " + this._armaAD.dano + ")</td></tr>";
		arms += "</table>";
		return arms;
	}
		
	pintaHabilidades() {
		var habs = "<table class='w3-table  w3-striped  w3-border'>";
		var indice = 0;
		for (indice=0; indice<habilidades._habilidades.length;indice++) {
			habs+= "<tr><td>" + habilidades._habilidades[indice].nombre + " (" + habilidades._habilidades[indice].atributo + ")</td><td>" + (this._habilidades[indice] == true ? "X" : "_") + "</td><td>" 
				+ this.construyeBotonHabilidad(indice) + "</td></tr>";
		}
		habs += "</table>";
		return habs;
	}
	
	calculaArmas() {
		this._armaCaC = armas.armaCaC();
		this._armaAD = armas.armaAD();
		this._dinero = 150 - this._armaCaC.precio - this._armaAD.precio;
	}
	
	calculaTalentos() {
		var tals = [];
		var indice=0;
		for (indice=0; indice<talentos._talentos.length; indice++)
			tals[indice] = indice;
		tals = Comun.shuffle(tals);
		this._talentos = [];
		for (indice=0; indice<2; indice++) {
			this._talentos[indice] = tals[indice];
		}
	}

	genera() {
		this._atributos = [ 1, 1, 1, 1 ];
		var indice=0;
		for (indice=4; indice <12; indice++) {
			var imod = Comun.random(4,0);
			if ( this._atributos[imod] < 6 )
				this._atributos[imod]++;
			else
				indice--;
		}
		
		this._habilidades = [];
		for (indice = 0; indice<habilidades._habilidades.length; indice++)
			this._habilidades[indice] = false;
		var _hab = Comun.shuffle(habilidades._habilidades.clone());
		for (indice = 0; indice<4; indice++) {
			this._habilidades[ habilidades.habilidad(_hab[indice]) ] = true;
		}
		this.calculaTalentos();
		
		this.calculaArmas();
		
	}
	
	
}
