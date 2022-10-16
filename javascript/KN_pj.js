
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
		this.plantillaPDF = "pdf/KnaveOutremerPJ.pdf"; // "pdf/KnavePJ.pdf";
		this.rasgos = [];
		this.monedas = 0;
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
		stabla += "<tr><td>" + this.arma.arma + "</td><td>d" + this.arma.daño + "</td><td>" + this.arma.huecos + "</td></tr>";
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
		srasgos += "<ul>";
		var rasgospj = rasgos.rasgospj(this);
		for (i=0; i< rasgospj.length; i++) {
			srasgos += "<li>" + rasgospj[i] + "</li>";
		}
		srasgos += "</ul>";
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
		this.equipo = equipos.equipomazmorreo();
		var eqgeneral = equipos.equipogeneral();
		for (i=0; i<eqgeneral.length; i++) {
			this.equipo.push(eqgeneral[i]);
		}
		this.calcula_da();
		this.rasgos = rasgos.rasgos();
		
		
		this.monedas = (Comun.random(6,1) + Comun.random(6,1) + Comun.random(6,1))*20;
		
		if (Comun.random(2,1) == 1 )
			this.genero = "M"; // Masculino;
		else
			this.genero = "F"; // Femenino;
		this.nombre = nombres.nombre(this.genero);
		
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
		}				
		
		if ( pj.yelmo.armadura != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.yelmo.armadura ];
			iarmadura++;
			for (i=1; i<pj.yelmo.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
		}
				
		
		if ( pj.arma.arma != "" ) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.arma.arma ];
			fields[ 'Arma1' + sufijo ] = [ pj.arma.arma + " (d" + pj.arma.daño + ")"  ];
			iarmadura++;
			for (i=1; i<pj.arma.huecos; i++) {
				fields[ 'Equipo' + iarmadura + sufijo ] = [ "X" ];
				iarmadura++;
			}
		}
		
		for (i = 0; i < pj.equipo.length; i++, iarmadura++) {
			fields[ 'Equipo' + iarmadura + sufijo ] = [ pj.equipo[i] ];
		}
		
		fields[ 'Peniques' + sufijo ] = [ pj.monedas ];
		
		return fields;
	}
	
	
	rellenaPDF() {
		
		var fields = {};
		fields = PJ.rellenaPDFPJ(fields, this, "");
		
		var pj2 = new PJ();
		pj2.genera();
		
		fields = PJ.rellenaPDFPJ(fields, pj2, "_2");
		return fields;
				
	}
	
	rellenaPDFOld() {
			  var fields = {
					'Nivel' : [ 1 ],
					'PGMax' : [ this.pg ],
					'PGActual' : [ this.pg ],
					'Armadura' : [ this.da ],
					'bArmadura' : [ this.bonificador(this.da) ],
					'FUE' : [ this.atributos[0].defensa ],
					'bFUE' : [ this.bonificador(this.atributos[0].defensa) ],
					'DES' : [ this.atributos[1].defensa ],
					'bDES' : [ this.bonificador(this.atributos[1].defensa) ],
					'CON' : [ this.atributos[2].defensa ],
					'bCON' : [ this.bonificador(this.atributos[2].defensa) ],
					'INT' : [ this.atributos[3].defensa ],
					'bINT' : [ this.bonificador(this.atributos[3].defensa) ],
					'SAB' : [ this.atributos[4].defensa ],
					'bSAB' : [ this.bonificador(this.atributos[4].defensa) ],
					'CAR' : [ this.atributos[5].defensa ],
					'bCAR' : [ this.bonificador(this.atributos[5].defensa) ],
					'Notas' : [ document.getElementById("rasgos").innerText ],
				};
				
				var iarmadura=1;
				var i=0;
				if ( this.armadura.armadura != "Sin armadura" ) {
					fields[ 'Inventario' + iarmadura ] = [ "Armadura " + this.armadura.armadura ];
					iarmadura++;
					for (i=1; i<this.armadura.huecos; i++) {
						fields[ 'Inventario' + iarmadura ] = [ "X" ];
						iarmadura++;
					}
				}
				if ( this.escudo.armadura != "" ) {
					fields[ 'Inventario' + iarmadura ] = [ this.escudo.armadura ];
					iarmadura++;
					for (i=1; i<this.escudo.huecos; i++) {
						fields[ 'Inventario' + iarmadura ] = [ "X" ];
						iarmadura++;
					}
				}				
				
				if ( this.yelmo.armadura != "" ) {
					fields[ 'Inventario' + iarmadura ] = [ this.yelmo.armadura ];
					iarmadura++;
					for (i=1; i<this.yelmo.huecos; i++) {
						fields[ 'Inventario' + iarmadura ] = [ "X" ];
						iarmadura++;
					}
				}
						
				
				if ( this.arma.arma != "" ) {
					fields[ 'Inventario' + iarmadura ] = [ this.arma.arma + " (d" + this.arma.daño + ")"  ];
					iarmadura++;
					for (i=1; i<this.arma.huecos; i++) {
						fields[ 'Inventario' + iarmadura ] = [ "X" ];
						iarmadura++;
					}
				}
				
				for (i = 0; i < this.equipo.length; i++, iarmadura++) {
					fields[ 'Inventario' + iarmadura ] = [ this.equipo[i] ];
				}
				
				return fields;
				
	}
}
