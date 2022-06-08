
class PJ {
	
	constructor() {
		this.nombre = '';
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
		this.plantillaPDF = "pdf/KnavePJ.pdf";
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
		var stabla = "<table class='w3-table  w3-striped w3-border'><tr><th>Objeto</th><th>Huecos</th></tr>";
		for (i = 0; i < this.equipo.length; i++) {
			stabla += "<tr><td>" + this.equipo[i] + "</td><td align='center'></td></tr>";
		}
		
		stabla += "</table>";
		return stabla;
	}
	
	tablaRasgos() {
		var i=0;
		var srasgos = "<ul>";
		for (i=0; i< this.rasgos.length; i++) {
			srasgos += "<li>" + this.rasgos[i] + "</li>";
		}
		srasgos += "</ul>";
		return srasgos;
	}
	
	
	genera() {
		var i=0;
		for (i=0; i<6; i++) {
			this.atributos[i].defensa = Comun.atributo() + 10;
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
		
	}
	
	rellenaPDF() {
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
