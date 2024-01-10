
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
		this.plantillaPDF = "pdf/AROS.pdf"; // "pdf/KnavePJ.pdf";
		this.rasgos = [];
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
		satrs += "<strong>DA:</strong> " + this.da+ "<br/>";
		satrs += "<strong>Moral:</strong> " + this.moral;
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
	
	pintaArma(pArma) {
		var daño = "";
		if ( pArma.dañoCaC != null ) {
			daño += "d" + pArma.dañoCaC + " (" + pArma.rasgo + ") ";
		}
		if ( this.arma.dañoAD != null ) {
			daño += "d" + pArma.dañoAD + " (" + pArma.rasgo + ")";
		}
		
		return "<tr><td>" + pArma.arma + "</td><td>" + daño + "</td><td>" + pArma.huecos + "</td></tr>";
	}
	
	
	tablaArma() {
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Huecos</th></tr>";
		
		stabla += this.pintaArma(this.arma);
		if ( this.arma2 != null ){
			stabla += this.pintaArma(this.arma2);
		}
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
		
		var srasgos = "<strong>Nombre:</strong> " + this.nombre + " (" + this.genero + ")";
		
		srasgos += "<br/><strong>Oficio</strong>: " + this.oficio.nombre + "<br/><strong> - Rasgo</strong>: " + this.oficio.rasgo.nombre + "<br/>";
		srasgos += "<ul>";
		var rasgospj = rasgos.rasgospj(this);
		for (i=0; i< rasgospj.length; i++) {
			srasgos += "<li>" + rasgospj[i] + "</li>";
		}
		srasgos += "</ul>";
		
		if ( this.deidad != null ) {
			srasgos += "<br/><strong>Deidad</strong>: " + this.deidad;
		}
		return srasgos;
	}
	
	
	genera() {
		var i=0;
		for (i=0; i<6; i++) {
			this.atributos[i].bono = Comun.atributo();
			this.atributos[i].defensa = this.atributos[i].bono + 10;
		}
		
		this.pg = Comun.random(8,1);
		
		this.arma = armas.recuperaarma(equipos.arma());
		this.armadura = armas.recuperaarmadura(equipos.armadura());
		var yelmoescudo = equipos.yelmos();
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
		this.arma2 = null;
		this.deidad = null;
		var armadura2 = null;
		
		this.equipo = [ "2 raciones", "1 antorcha" ];
		
		this.oficio = oficios.oficio();
		if ( this.oficio.nombre == "Sacerdote" )
			var nombreoficio = "Sacerdote";
		for (i=0;i<this.oficio.equipo.length;i++) {
			var armaaux = armas.recuperaarma(this.oficio.equipo[i]);
			if ( armaaux != null && this.arma2 == null ) {
				this.arma2 = armaaux;
			}
			else {
				armadura2 = armas.recuperaarmadura(this.oficio.equipo[i]);
				if ( armadura2.armadura == "Sin armadura" ) {
					var posARMA = this.oficio.equipo[i].indexOf(" ARMA:");
					if ( posARMA != -1 ) {
						var armaaux = armas.recuperaarma(this.oficio.equipo[i].substring(posARMA+6))
						if ( armaaux != null && this.arma2 == null ) {
							this.arma2 = armaaux;
						}
						
						this.deidad = this.oficio.equipo[i].substring(0,posARMA);
					}
					else {
						this.equipo.push(this.oficio.equipo[i]);
					}
				}
			}
			
		}
		if ( armadura2 != null && Math.trunc(armadura2.da) > Math.trunc(this.armadura.da) ) {
			this.armadura = armadura2;
		}
		
		
		var equipomazmorreo = equipos.equipomazmorreo();
		for (i=0; i<equipomazmorreo.length; i++) {
			this.equipo.push(equipomazmorreo[i]);
		}
		var eqgeneral = equipos.equipogeneral();
		for (i=0; i<eqgeneral.length; i++) {
			if ( eqgeneral[i] == "Arma" ) {
				if ( this.arma2 == null ) {
					this.arma2 = armas.recuperaarma(equipos.arma());
				}
				else {
					i--;
				}
			}
			else {				
				this.equipo.push(eqgeneral[i]);
			}
		}
		this.calcula_da();
		this.rasgos = rasgos.rasgos();
		
				
		if (Comun.random(2,1) == 1 )
			this.genero = "M"; // Masculino;
		else
			this.genero = "F"; // Femenino;
		this.nombre = nombres.nombre(this.genero);
		
		this.moral = 5 + Math.trunc(pj.bonificador(pj.atributos[2].defensa)) + Math.trunc(pj.bonificador(pj.atributos[4].defensa));
		
	}
	
	static rellenaPDFPJ(fields, pj, sufijo) {
		fields['Nombre' + sufijo] = [ pj.nombre + " (" + pj.genero + ")" ];
		fields['Nivel' + sufijo] = [ 1 ];
		fields['PGMax' + sufijo] = [ pj.pg ];
		fields['PGActual' + sufijo] = [ pj.pg ];
		fields['TipoArmadura' + sufijo] = [ pj.armadura.armadura ];
		fields['Armadura' + sufijo] = [ pj.da ];
		fields['bArmadura' + sufijo] = [ pj.bonificador(pj.da) ];
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
		
		fields['Moral' + sufijo] = [ pj.moral ];
		
		fields['Oficio' + sufijo] = [ pj.oficio.nombre ];
		fields['Rango' + sufijo] = [ 1 ];
		
		var trasfondos = pj.oficio.nombre + ": " + pj.oficio.descripcion + "\n\n" + pj.oficio.rasgo.nombre + ": " + pj.oficio.rasgo.descripcion;
		if ( pj.deidad != null ) {
			trasfondos += "\n\nDeidad: " + pj.deidad;
		}
		fields['Trasfondos' + sufijo] = [ trasfondos ];
				
		var i=0;
		var inota = 1;		
		var srasgo = "";
		var rasgospj = rasgos.rasgospj(pj);
		for (i=0; i< rasgospj.length; i++) {
			if ( i%2 == 0 ) {
				srasgo = rasgospj[i];
			}
			else {
				srasgo += ". " + rasgospj[i];
				fields[ 'Notas' + (inota) + sufijo ] = [ srasgo ];
				inota++;
				srasgo = "";
			}
		}
		if (srasgo != "" ) {
			fields[ 'Notas' + (inota) + sufijo ] = [ srasgo ];
		}

		var iarmadura=1;
		i=0;
		var calidad=null;
		var defensa=11;
		if ( pj.armadura.armadura != "Sin armadura" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ "Armadura " + pj.armadura.armadura ];
			iarmadura++;
			for (i=1; i<pj.armadura.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
			defensa = Math.trunc(pj.armadura.da);
			calidad = pj.armadura.calidad;
			
		}
		if ( pj.escudo.armadura != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.escudo.armadura ];
			iarmadura++;
			for (i=1; i<pj.escudo.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
			defensa += Math.trunc(pj.escudo.da);
		}				
		
		if ( pj.yelmo.armadura != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.yelmo.armadura ];
			iarmadura++;
			for (i=1; i<pj.yelmo.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
			defensa += Math.trunc(pj.yelmo.da);
		}
				
		fields[ 'Defensa' + sufijo ] = [ defensa ];
		if ( calidad != null) {
			fields[ 'Calidad' + sufijo ] = [ calidad ];
		}
		
		if ( pj.arma.arma != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.arma.arma ];
			
			var daño = "";
			if ( pj.arma.dañoCaC != null ) {
				daño += " (d" + pj.arma.dañoCaC + " " + pj.arma.rasgo + ")";
			}
			if ( pj.arma.dañoAD != null ) {
				daño += " (d" + pj.arma.dañoAD + " " + pj.arma.rasgo + ")";
			}
			
			fields[ 'Arma1' + sufijo ] = [ pj.arma.arma + daño  ];
			iarmadura++;
			for (i=1; i<pj.arma.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
		}
		
		if ( pj.arma2 != null ) {
			
			if ( pj.arma2.arma != "" ) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.arma2.arma ];
				
				var daño = "";
				if ( pj.arma2.dañoCaC != null ) {
					daño += " (d" + pj.arma2.dañoCaC + " " + pj.arma2.rasgo + ")";
				}
				if ( pj.arma2.dañoAD != null ) {
					daño += " (d" + pj.arma2.dañoAD + " " + pj.arma2.rasgo + ")";
				}
				
				fields[ 'Arma2' + sufijo ] = [ pj.arma2.arma + daño  ];
				iarmadura++;
				for (i=1; i<pj.arma2.huecos; i++) {
					fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
					iarmadura++;
				}
			}
		}
		
		for (i = 0; i < pj.equipo.length; i++, iarmadura++) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.equipo[i] ];
		}
		
		
		return fields;
	}
	
	
	rellenaPDF() {
		
		var fields = {};
		fields = PJ.rellenaPDFPJ(fields, this, "");
		
		var pj2 = new PJ();
		pj2.genera();
		
		fields = PJ.rellenaPDFPJ(fields, pj2, "_1");
		return fields;
				
	}
}
