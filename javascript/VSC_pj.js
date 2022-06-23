class PJ {
	constructor() {
		this.nombre = "";
		this.linaje = null;
		this.clase = null;
		this.ptoshabilidades = [];
		this.ptoshabilidadesesp = [];
		this.atributos = atributos.atributos.slice(0);
		this.ptosatributos = [];
		this.ptosvida = 0;
		this.defensa = 10;
		this.instintos = 0;
		this.poder = 0;
		this.pabellon = "";
		this.ventajas = [];
	}
	
	
	calculaRasgos() {
		this.ptosvida = (3 * this.clase.daguante) + (5 * Atributos.modif(this.ptosatributos[2]));
		this.defensa = this.clase.defensa + Atributos.modif(this.ptosatributos[1]) + this.ptoshabilidades[1] + this.ptoshabilidadesesp[1].valor; // Duelo mágico y Pelea
		this.ataquecc = this.clase.ataquecc + Atributos.modif(this.ptosatributos[0]) + this.ptoshabilidades[1] + this.ptoshabilidadesesp[1].valor; // Duelo mágico y Pelea
		this.ataquead = this.clase.ataquead + Atributos.modif(this.ptosatributos[1]) + this.ptoshabilidades[1] + this.ptoshabilidadesesp[1].valor; // Duelo mágico y Pelea
		this.instintos = this.clase.instintos + Atributos.modif(this.ptosatributos[4]) + this.ptoshabilidades[7] + this.ptoshabilidadesesp[7].valor; //  Vuelo y Alerta
		this.poder = this.clase.poder + this.linaje.poder;
	}
	
	tablaAtributos() {
		var iatrb = 0;
		var satrs = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Valor (mod)</th></tr>";
		for (iatrb = 0; iatrb < this.ptosatributos.length; iatrb++) {
			satrs += "<tr><td>" + this.atributos[iatrb].nbatr + " (" + this.atributos[iatrb].nbmod + ")</td><td align='center'>" + this.ptosatributos[iatrb] + " (" + Atributos.modif(this.ptosatributos[iatrb]) + ") " + Comun.construyeBotonAbajo(iatrb, "abajoatr");
			satrs += "</td></tr>";
		}
		
		satrs += "</table>";
		return satrs;
	}
	
	tablaRasgos() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Rasgo</strong></th><th>Valor</th></tr>";
		stabla += "<tr><td>Linaje</td><td>" + this.linaje.nombre + "</td></tr>";
		stabla += "<tr><td>Pabellon</td><td>" + this.pabellon + "</td></tr>";
		stabla += "<tr><td>Nivel envejecimiento</td><td>" + this.linaje.nivel + "</td></tr>";
		stabla += "<tr><td>Movimiento</td><td>" + (6 - this.linaje.nivel) + "</td></tr>";
		stabla += "<tr><td>Puntos de vida</td><td>" + this.ptosvida + "</td></tr>";
		stabla += "<tr><td>Defensa</td><td>" + this.defensa + "</td></tr>";
		stabla += "<tr><td>Ataque CC</td><td>" + this.ataquecc + "</td></tr>";
		stabla += "<tr><td>Ataque AD</td><td>" + this.ataquead + "</td></tr>";
		stabla += "<tr><td>Instintos</td><td>" + this.instintos + "</td></tr>";
		stabla += "<tr><td>Poder</td><td>" + this.poder + "</td></tr>";
		stabla += "</table>";
		return stabla;
	}
	
	tablaVentajas() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Ventaja</strong></th><th></th></tr>";
		stabla += "<tr><td>" + this.ventajas[0] + "</td><td></td></tr>";
		stabla += "<tr><td>" + this.ventajas[1] + "</td><td></td></tr>";
		stabla += "</table>";
		return stabla;
	}
	
	siguientehabilidadesp(habilidad) {
		var indice=0;
		for (indice=parseInt(habilidad)+1; indice<this.ptoshabilidadesesp.length; indice++) {
			if ( this.ptoshabilidadesesp[indice].maximo > 0 )
				return indice;
		}
		return this.siguientehabilidadesp(-1);
	}
	
	
	tablaHabilidades() {
		var indice = 0;
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Valor (mod)</th>";
		if ( this.clase.ptoshab > 0 ) {
			stabla += "<th>Adicional</th>";
		}
		stabla += "</tr>";
		for (indice = 0; indice < this.ptoshabilidades.length; indice++) {
			stabla += "<tr><td>" + habilidades.habilidades[indice] + "</td><td align='center'>" + this.ptoshabilidades[indice] + Comun.construyeBotonAbajo(indice, "abajohabilidad") + "</td>";
			if ( this.clase.ptoshab > 0 ) {
				stabla += "<td align='center'>" + this.ptoshabilidadesesp[indice].valor;
				if ( this.ptoshabilidadesesp[indice].maximo > 0 ) {
					stabla += Comun.construyeBotonAbajo(indice, "abajohabilidadesp");
				}
				stabla += "</td>";
			}
			stabla += "</tr>";
		}
		
		stabla += "</table>";
		return stabla;
	}
	
	calcula(nombreclase) {
		this.clase = clases.clase(nombreclase);
		
		if ( this.clase.linajes.length > 0 ) {
			this.linaje = linajes.linaje(this.clase.linajes[Comun.random(this.clase.linajes.length, 0)]);
		}
		else {
			this.linaje = linajes.linajes[Comun.random(linajes.linajes.length,0)];
		}
		
		this.ptoshabilidades = habilidades.puntuaciones(this.linaje.ptos,this.linaje.maxptos);
		this.ptosatributos = atributos.valoresatr();
		
		if ( this.clase.ptoshab > 0 ) {
			if ( this.clase.habilidades.length == this.clase.ptoshab ) {
				var indice=0;
				for (indice=0; indice<habilidades.habilidades.length; indice++) {
					var existe = this.clase.habilidades.findIndex((element) => element == habilidades.habilidades[indice]);
					if ( existe == -1 ){
						this.ptoshabilidadesesp.push({ valor: 0, maximo: 0, minimo: 0 });
					}
					else {
						this.ptoshabilidadesesp.push({ valor: 1, maximo: this.clase.ptoshab, minimo: 1 });
					}
				}
			}
			else {
				var indice=0;
				var ptosasignados = 0;
				for (indice=0; indice<habilidades.habilidades.length; indice++) {
					var existe = this.clase.habilidades.findIndex((element) => element == habilidades.habilidades[indice]);
					if ( existe == -1 ){
						this.ptoshabilidadesesp.push({ valor: 0, maximo: this.clase.ptoshab, minimo: 0});
					}
					else {
						this.ptoshabilidadesesp.push({ valor: 1, maximo: this.clase.ptoshab, minimo: 1 });
						ptosasignados++;
					}
				}
				for (indice=0; indice<habilidades.habilidades.length && ptosasignados < this.clase.ptoshab; indice++) {
					if ( this.ptoshabilidadesesp[indice].valor == 0 ) {
						this.ptoshabilidadesesp[indice].valor = 1;
						ptosasignados++;
					}
				}
				
				
			}
		} else {
			var indice=0;
			for (indice=0; indice<habilidades.habilidades.length; indice++) {
				this.ptoshabilidadesesp.push({ valor: 0, maximo: 0, minimo: 0 });
			}
		}
		
		this.calculaRasgos();
		
		var pabellones = [ "Snorkelclop", "Flutterwits","Slobbermud", "Ribbitfrown" ];
		this.pabellon = pabellones[Comun.random(pabellones.length,0)];
		
		var ventajas = Comun.shuffle(this.clase.ventajas.slice(0));
		
		if ( ventajas[0] == "Objeto mágico" ) {
			var objs = Comun.shuffle(objetosMagicos);
			ventajas[0] = objs[0];
		} 
		if ( ventajas[1] == "Objeto mágico" ) {
			var objs = Comun.shuffle(objetosMagicos);
			ventajas[1] = objs[0];
		} 
		
		this.ventajas.push(ventajas[0]);
		this.ventajas.push(ventajas[1]);
		
	}
	
	rellenaPDF() {
		
			  var fields = {
					'Nivel' : [ this.linaje.nivel ],
					'Clase' : [ this.clase.nombre ],
					'PVAct' : [ this.ptosvida ],
					'PVMax' : [ this.ptosvida ],
					'DA' : [ this.clase.daguante ],
					'Ventajas1' : [ this.ventajas[0] ],
					'Ventajas2' : [ this.ventajas[1] ],
					'Linaje' : [ this.linaje.nombre ],
					'MOV' : [ (6 - this.linaje.nivel) ],
					'MOVCarr' : [ 2*(6 - this.linaje.nivel) ],
					'Defensa' : [ this.defensa ],
					'AtaqueCC' : [ this.ataquecc ],
					'BonoDanoCC' : [ Atributos.modif(this.ptosatributos[0]) ],
					'AtaqueAD' : [ this.ataquead ],
					'Instintos' : [ this.instintos ],
					'Poder' : [ this.poder ],
					'PtosConducta' : [ this.ptosatributos[5] ],
					'FUE' : [ this.ptosatributos[0] ],
					'DES' : [ this.ptosatributos[1] ],
					'CON' : [ this.ptosatributos[2] ],
					'INT' : [ this.ptosatributos[3] ],
					'SAB' : [ this.ptosatributos[4] ],
					'CAR' : [ this.ptosatributos[5] ],
					'mFUE' : [ Atributos.modif(this.ptosatributos[0]) ],
					'mDES' : [ Atributos.modif(this.ptosatributos[1]) ],
					'mCON' : [ Atributos.modif(this.ptosatributos[2]) ],
					'mINT' : [ Atributos.modif(this.ptosatributos[3]) ],
					'mSAB' : [ Atributos.modif(this.ptosatributos[4]) ],
					'mCAR' : [ Atributos.modif(this.ptosatributos[5]) ],
				};
				
				var ihabilidades = 0;
				var indice=0;
				for (ihabilidades = 0; ihabilidades <9; ihabilidades++) {
					for (indice=0;indice<this.ptoshabilidades[ihabilidades] + this.ptoshabilidadesesp[ihabilidades].valor; indice ++) {
						fields [ habilidades.pdfhabilidades[ihabilidades] + (indice+1) ] = [ true ];
					}
				}
				
				
				return fields;
	}
	
}
