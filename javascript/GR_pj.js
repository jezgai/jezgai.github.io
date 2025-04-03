
class PJ {
	
	constructor() {
		this.nombre = '';
		this.genero = "";
		this.nivel = 1;
		this.atributos = [
			{ nombre: "FUE", defensa: 11 },
			{ nombre: "DES", defensa: 11 },
			{ nombre: "CON", defensa: 11 },
			{ nombre: "INT", defensa: 11 },
			{ nombre: "SAB", defensa: 11 },
			{ nombre: "CAR", defensa: 11 },
		];
		this.armadura = {};
		this.arma = {};
		this.yelmo = {};
		this.escudo = {};
		this.pg = 0;
		this.equipo = [];
		this.da = 11;
		this.plantillaPDF = "pdf/GranujasPJ.pdf"; // "pdf/KnavePJ.pdf";
		this.plantillaPDFAlt = "pdf/GranujasPJHerugor.pdf";
		this.rasgos = [];
		this.monedas = 0;
		this.habilidad = "";
		this.raza = {};
	}
	
	plantilla(alt) {
		if (alt == true) {
			return this.plantillaPDFAlt;
		}
		return this.plantillaPDF;
	}
	
	bonificador(defensa) {
		return defensa - 10;
	}
	
	bonificadorAtributo(atributo) {
		var i=0;
		for (i=0; i<this.atributos.length; i++) {
			if ( this.atributos[i].nombre == atributo ) {
				return this.bonificador(this.atributos[i].defensa);
			}
		}
		return 0;
	}
	
	calcula_da() {
		this.da = this.armadura.da + this.yelmo.da + this.escudo.da;
	}
	
	
	
	tablaAtributos() {
		var iatrb = 0;
		var satrs = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Defensa</th><th>Modificador</th></tr>";
		for (iatrb = 0; iatrb < this.atributos.length; iatrb++) {
			satrs += "<tr><td>" + this.atributos[iatrb].nombre + "</td><td align='center'>" + this.atributos[iatrb].defensa + "</td><td align='center'>" + this.bonificador(this.atributos[iatrb].defensa) + "</td></tr>";
		}
		
		satrs += "</table>";
		satrs += "<strong>PG:</strong> " + this.pg + "<br/>";
		satrs += "<strong>DA:</strong> " + this.da;
		
		var ihab=0;
		satrs += "<hr/><h3>Habilidades</h3>" + "<span onclick=" + '"' + "descripcionhabilidad('" + this.raza.habilidades[0] + "');" + '"' + ">" + this.raza.habilidades[0] + "</span>";
		for (ihab=1; ihab<this.raza.habilidades.length; ihab++) {
			satrs += "<br/>" + "<span onclick=" + '"' + "descripcionhabilidad('" + this.raza.habilidades[ihab] + "');" + '"' + ">" + this.raza.habilidades[ihab] + "</span>";
		}
		if ( this.habilidad != "" ) {
			satrs += "<br/>" + "<span onclick=" + '"' + "descripcionhabilidad('" + this.habilidad + "');" + '"' + ">" + this.habilidad + "</span>";
		}
		return satrs;
	}
	
	tablaArmaduras() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Armadura</th><th>DA</th><th>Huecos</th></tr>";
		stabla += "<tr><td>" + this.armadura.armadura + "</td><td>" + this.armadura.da + "</td><td>" + this.armadura.huecos + "</td></tr>";
		if ( this.yelmo.armadura != "" ) {
			stabla += "<tr><td>" + this.yelmo.armadura + "</td><td>+" + this.yelmo.da + "</td><td>" + this.yelmo.huecos + "</td></tr>";
		}
		if ( this.escudo.armadura != "" ) {
			stabla += "<tr><td>" + this.escudo.armadura + "</td><td>+" + this.escudo.da + "</td><td>" + this.escudo.huecos + "</td></tr>";
		}
		stabla += "</table>";
		return stabla;
	}
	
	tablaArma() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Huecos</th></tr>";
		
		var daño = "";
		if ( this.arma.dañoCaC != null ) {
			daño += "d" + this.arma.dañoCaC + " (CaC) ";
		}
		if ( this.arma.dañoAD != null ) {
			daño += "d" + this.arma.dañoAD + " (AD)";
		}
		
		stabla += "<tr><td>" + this.arma.arma + "</td><td>" + daño + "</td><td>" + this.arma.huecos + "</td></tr>";
		stabla += "</table>";
		return stabla;
	}
	
	tablaEquipo() {
		var i = 0;
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Objeto</th></tr>"; //<th>Huecos</th></tr>";
		for (i = 0; i < this.equipo.length; i++) {
			stabla += "<tr><td>" + this.equipo[i] + "</td></tr>"; //<td align='center'></td></tr>";
		}
		
		stabla += "</table>";
		return stabla;
	}
	
	tablaRasgos() {
		var i=0;
		
		var srasgos = "<strong>Raza:</strong> " + this.raza.nombre + "<br/><strong>Nombre:</strong> " + this.nombre + " (" + this.genero + ")";
		srasgos += "<ul>";
		var rasgospj = rasgos.rasgospj(this);
		for (i=0; i< rasgospj.length; i++) {
			srasgos += "<li>" + rasgospj[i] + "</li>";
		}
		srasgos += "</ul>";
		return srasgos;
	}
	
	
	genera(nivelcero) {
		var i=0;
		var attrs = Comun.shuffle( [ 0, 1, 2, 3, 4, 5 ] );
		var dadopg = 8;
		var maxarmas = equipos.maximoarmas();
		var multipmonedas = 20;
		var tipoarmadura = "Sin armadura";
		var yelmoescudo = "Ninguno";
		if ( nivelcero ) {
			this.nivel = 0;
			this.atributos[attrs[0]].defensa = 12;
			dadopg = 4;
			maxarmas = 5;
			multipmonedas = 1;
		}
		else {
			this.atributos[attrs[0]].defensa = 13;
			this.atributos[attrs[1]].defensa = 12;
			this.atributos[attrs[2]].defensa = 12;
			
			this.habilidad = habilidades.habilidad();
			this.equipo = equipos.equipomazmorreo();
			tipoarmadura = equipos.armadura();
			yelmoescudo = equipos.yelmos()
		}
		
		this.raza = razas.raza();
		for (i=0; i<this.raza.modificadores.length; i++) {
			this.atributos[attrs[i]].defensa += this.raza.modificadores[i];
		}
		
		for (i=0; i<6; i++) {
			this.atributos[i].bono = this.atributos[i].defensa - 10;
		}
		
		this.pg = Comun.random(dadopg,1);
		
		this.arma = armas.recuperaarma(equipos.arma(maxarmas));
		this.armadura = armas.recuperaarmadura(tipoarmadura);
		
		if ( yelmoescudo == "Yelmo" || yelmoescudo == "Yelmo y escudo" ) {
			this.yelmo = armas.recuperaarmadura("Casco");
		}
		else {
			this.yelmo = { armadura: "", da: 0, huecos: 0, calidad: 0 };
		}
		if ( yelmoescudo == "Escudo" || yelmoescudo == "Yelmo y escudo" ) {
			this.escudo = armas.recuperaarmadura("Escudo");
		}
		else {
			this.escudo = { armadura: "", da: 0, huecos: 0, calidad: 0 };
		}
		
		var eqgeneral = equipos.equipogeneral();
		for (i=0; i<eqgeneral.length; i++) {
			this.equipo.push(eqgeneral[i]);
		}
		this.calcula_da();
		this.rasgos = rasgos.rasgos();
		
		this.monedas = (Comun.random(6,1) + Comun.random(6,1) + Comun.random(6,1))*multipmonedas;
		
		if (Comun.random(2,1) == 1 )
			this.genero = "M"; // Masculino;
		else
			this.genero = "F"; // Femenino;
		this.nombre = nombres.nombre(this.raza.nombre, this.genero);
		
	}
	
	static rellenaPDFPJ(fields, pj, sufijo, plantillaalt) {
		fields['Nombre' + sufijo] = [ pj.nombre + " (" + pj.genero + ")" ];
		fields['Nivel' + sufijo] = [ pj.nivel ];
		fields['PGMax' + sufijo] = [ pj.pg ];
		fields['PGActuales' + sufijo] = [ pj.pg ];
		fields['Armadura' + sufijo] = [ pj.armadura.armadura ];
		fields['dArmadura' + sufijo] = [ pj.da ];
		if ( pj.armadura.calidad > 0 ) {
			fields['cArmadura' + sufijo] = [ pj.armadura.calidad ];
		}
		//fields['bArmadura' + sufijo] = [ pj.bonificador(pj.da) ];
		fields['FUE' + sufijo] = [ pj.atributos[0].defensa ];
		fields['bFUE' + sufijo] = [ pj.bonificador(pj.atributos[0].defensa) ];
		fields['DES' + sufijo] = [ pj.atributos[1].defensa ];
		fields['bDES' + sufijo] = [ pj.bonificador(pj.atributos[1].defensa) ];
		fields['CON' + sufijo] = [ pj.atributos[2].defensa ];
		fields['bCON' + sufijo] = [ pj.bonificador(pj.atributos[2].defensa) ];
		fields['INT' + sufijo] = [ pj.atributos[3].defensa ];
		fields['bINT' + sufijo] = [ pj.bonificador(pj.atributos[3].defensa) ];
		fields['SAB' + sufijo] = [ pj.atributos[4].defensa ];
		fields['bSAB' + sufijo] = [ pj.bonificador(pj.atributos[4].defensa) ];
		fields['CAR' + sufijo] = [ pj.atributos[5].defensa ];
		fields['bCAR' + sufijo] = [ pj.bonificador(pj.atributos[5].defensa) ];
		
				
		var i=0;
		
		var inota = 1;		
		var srasgo = pj.raza.nombre;
		var listaCamposRasgos = rasgos.lcamposrasgos();
		for (i=0; i<listaCamposRasgos.length; i++) {
			if ( listaCamposRasgos[i] != "" ) {
				fields[ listaCamposRasgos[i] + sufijo ] = [ pj.rasgos[i] ];
			}
		}
		var rasgospj = rasgos.rasgospj(pj);
		var j=0;
		for (i=0; i< rasgospj.length; i++) {
			if ( listaCamposRasgos[i] == "" ) {
				srasgo += "\n" + rasgospj[i];
				j++;
			}
		}
		if ( plantillaalt == true ) {
			fields['Raza' + sufijo] = [ pj.raza.nombre ];
			fields['EspaciosEquipo' + sufijo ] = [ pj.atributos[2].defensa ];
		}
		else {
			fields[ 'Notas' + sufijo ] = [ srasgo ];
		}

		var iarmadura=1;
		i=0;
		if ( pj.armadura.armadura != "Sin armadura" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ "Armadura " + pj.armadura.armadura ];
			iarmadura++;
			for (i=1; i<pj.armadura.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
		}
		if ( pj.escudo.armadura != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.escudo.armadura ];
			iarmadura++;
			for (i=1; i<pj.escudo.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
			fields[ 'cEscudo' + sufijo ] = [ true ];
		}				
		
		if ( pj.yelmo.armadura != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.yelmo.armadura ];
			iarmadura++;
			for (i=1; i<pj.yelmo.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
			fields[ 'cCasco' + sufijo ] = [ true ];
		}
				
		
		if ( pj.arma.arma != "" ) {
			var armaequipo = pj.arma.arma;
			if ( pj.arma.huecos < 1 ) {
				armaequipo += "*";
			}
			fields[ 'Equipo' + iarmadura + sufijo ] = [ armaequipo ];
			
			var daño = "";
			if ( pj.arma.dañoCaC != null ) {
				daño = "d" + pj.arma.dañoCaC;
			}
			if ( pj.arma.dañoAD != null ) {
				if ( pj.arma.dañoCaC != null && pj.arma.dañoCaC != pj.arma.dañoAD ) {
					daño += " (d" + pj.arma.dañoAD + " AD)";
				}
				else if ( pj.arma.dañoCaC == null ) {
					daño = "d" + pj.arma.dañoAD;
				}
			}
			fields[ 'Arma1' + sufijo ] = [ pj.arma.arma ];
			fields[ 'dArma1' + sufijo ] = [ daño  ];
			fields[ 'cArma1' + sufijo ] = [ pj.arma.calidad ];
			
			var srasgosarma = pj.arma.rasgos[0];
			if ( pj.arma.rasgos.length > 1 ) {
				for (i=1; i< pj.arma.rasgos.length; i++) {
					srasgosarma += "," + pj.arma.rasgos[i];
				}
			}
			fields [ 'rArma1' + sufijo ] = [ srasgosarma ];
			
			iarmadura++;
			for (i=1; i<pj.arma.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
		}
		
		for (i = 0; i < pj.equipo.length; i++, iarmadura++) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.equipo[i] ];
		}
		
		var habilidades = pj.raza.habilidades[0];
		for (i = 1; i< pj.raza.habilidades.length; i++) {
			habilidades += ". " + pj.raza.habilidades[i];
		}
		
		if ( pj.habilidad != "" ) {
			habilidades += "\n" + pj.habilidad;
		}
		fields[ 'Habilidades' + sufijo ] = [ habilidades ];
		//fields[ 'Dinero' + sufijo ] = [ pj.monedas ];
		
		fields[ 'vExploracion' + sufijo ] = [ pj.raza.movimiento * 3 ];
		fields[ 'vCombate' + sufijo ] = [ pj.raza.movimiento ];
		
		return fields;
	}
	
	
	rellenaPDF(nivelcero, plantillaalt) {
		
		var fields = {};
		fields = PJ.rellenaPDFPJ(fields, this, "", plantillaalt);
		
		if ( plantillaalt == false ) {
			var pj2 = new PJ();
			pj2.genera(nivelcero);
			
			fields = PJ.rellenaPDFPJ(fields, pj2, "_1", false);
		}
		return fields;
				
	}
	
}
