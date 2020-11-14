class PJAr extends PJBase {

	constructor(nivel) {
		super(nivel);
		this._pod = 0;
		this._nombres = [ "Mary", "Jack", "Francis", "Sally", "Bartholomew", "Roger", "John", "Arnold", "Charlotte", "Elizabeth", "Grace", "Jules", "Anne", "Edward", "Kathy", "Jerry", "Henry" ];
		this._apellidos = [ "Kidd", "Tew", "Silver", "Jackson", "Vane", "Roberts", "Sparrow", "Parker", "Bonnet", "Bonny", "England", "Turner", "Rackham", "Morgan", "LeChuck", "Read", "De Graff" ];
		this._objClase = null;
		this._niveleseconomicos = [ "Vagabundo", "Pobre", "Propietario", "Acomodado", "Pudiente", "Rico" ];
		this._doblones = 0;
	}
	
	
	origen() {
		var num = Comun.random(100,1);
		var origenes = [
					{ 
						origen: "Español/a", 
						nombres: [ "Iñigo", "María", "Francisco", "Leonor", "Sancho", "Urraca", "Rodrigo", "Sol", "Lope", "Teresa", "Tello", "Jimena", "Alonso", "Blanca", "Fernando", "Elvira" ], 
						apellidos: [ "Montoya", "Balboa", "Hoz", "Martínez", "Pizarro", "Cortés", "Trujillo", "Lara", "Haro", "Rivas", "Salcedo", "Zamudio", "Zurbano", "Castro", "Mondragón" ],
						numero: { inferior: 1, superior: 20 },
					},
					{ 
						origen: "Inglés/a", 
						nombres: [ "Mary", "Jack", "Francis", "Sally", "Bartholomew", "Roger", "John", "Arnold", "Charlotte", "Elizabeth", "Grace", "Jules", "Anne", "Edward", "Kathy", "Jerry", "Henry" ], 
						apellidos: [ "Kidd", "Tew", "Silver", "Jackson", "Vane", "Roberts", "Sparrow", "Parker", "Bonnet", "Bonny", "England", "Turner", "Rackham", "Morgan", "LeChuck", "Read", "Lancaster", "Teach", "Silver" ],
						numero: { inferior: 21, superior: 48 },
					},
					{ 
						origen: "Francés/a", 
						nombres: [ "Jean", "Babette", "François", "Colette", "Henry", "Camile", "Robert", "Giselle", "Hippolyte", "Isabelle", "Olivier", "Ivette", "Marcel", "Jeanette", "Bernard", "Juliette", "Antoine", "Paulette", "Jerome", "Yvonne" ], 
						apellidos: [ "Belleville", "Bouchard", "Blanchet", "Beluche", "Bart", "Fleury", "Surcouf", "Olonnais", "Lecleck", "Lafitte" ],
						numero: { inferior: 49, superior: 65 },
					},
					{ 
						origen: "Holandes/a", 
						nombres: [ "Piet", "Ria", "Manfred", "Anki", "Ruud", "Drika", "Gerrit", "Antje", "Laurens", "Jetta", "Jenkin", "Lieke", "Ludger", "Annelien" ], 
						apellidos: [ "Heyn", "De la Marck", "De Graff", "Holz", "Van Noort", "Verney" ], 
						numero: { inferior: 66, superior: 70 },
					},
					{ 
						origen: "Portugués/a", 
						nombres: [ "Bartolomeu", "Manuela", "António", "Renata", "Nuno", "Lianor", "Rui", "Andiara", "Joao", "Xuxa", "Guilherme", "Aldonça", "Agostinho", "Zeita", "Americo", "Margaida", "André", "Costança", "Leão", "Graçea", "Vasco", "Jenevra", "Maureo", "Meçia" ], 
						apellidos: [ "Galvao", "Salazar", "Oliveira", "Rodriguês", "Ferreira", "Pereira", "Sántos", "Carvalho", "Nogueira", "Baptista", "Pinheiro", "Afonso", "Mendes", "Almeida" ], 
						numero: { inferior: 71, superior: 80 },
					},
					{ 
						origen: "Africana/o", 
						nombres: [ "Anua", "Delu", "Moroni", "Kande", "Tafari", "Nasha", "Daren", "Ashanti", "Mamadou", "Begum", "Keita", "Musoke", "Shaka", "Chayna", "Ayo", "Akanke", "Akin", "Lewa", "Kibo", "Ayana" ], 
						apellidos: [ "Abara", "Abebe", "Abioye", "Abiodun", "Adisa", "Bankole", "Banmeke", "Chuke", "Dogo", "Falade", "Gowon", "Ladipo", "Ndiaye", "Okoro", "Uduike" ], 
						numero: { inferior: 81, superior: 85 },
					},
					{ 
						origen: "Indígena", 
						nombres: [ "Sayri", "Illari", "Samin", "Sami", "Sayani", "Killari", "Kusi", "Yanai", "Antay", "Killa", "Wari", "Asiri", "Tupac", "Sulay", "Yaku", "Yuriana", "Katari", "Nuna", "Rumi", "Maywa" ], 
						apellidos: [], 
						numero: { inferior: 86, superior: 90 },
					},
					{ 
						origen: "China/o", 
						nombres: [ "Zhōu", "Wú", "Zhào", "Huáng", "Yáng", "Chén", "Liú", "Zhāng", "Yáng", "Wáng", "Cāo", "Gān", "Shì", "Biàn", "Chǒu", "Guō" ], 
						apellidos: [ "Chao", "Bo", "Cong", "Chang", "Dewei", "Fang yin", "Fo", "Fei", "Hao", "Huang", "Huo", "Jia", "Jian", "Jin", "Joon", "Ju", "Kang", "Jun", "Kuo", "Lan", "Loq", "Lei", "Qiang", "Li", "Shaiming", "Liang", "Shun", "Lin", "Ya", "Ling", "Yen", "Lixue", "Yong", "Mingue" ],
						numero: { inferior: 91, superior: 100 },
					},
			];
			var iorigen = 0;
			for (iorigen = 0; iorigen<origenes.length; iorigen++) {
				if ( num >= origenes[iorigen].numero.inferior && num<= origenes[iorigen].numero.superior ) {
					this._origen = origenes[iorigen].origen;
					var tabla = [];
					if ( origenes[iorigen].nombres.length > 0 ) {
						tabla = Comun.shuffle(origenes[iorigen].nombres.clone());
						this._nombre = tabla[0];
					}
					if ( origenes[iorigen].apellidos.length > 0 ) {
						tabla = Comun.shuffle(origenes[iorigen].apellidos.clone());
						this._nombre += " " + tabla[0];
					}
					break;
				}
			}
	}
	
	
	equipo(numero) {
		var equipo = Comun.shuffle([ "Catalejo", "Pipa y tabaco", "Maletín de médico", "Instrumento musical", "Biblia",
									 "Botella de ron", "Cuerno de pólvora y balas", "Pellejo de agua", "Cuerda", 
									 "Farol de aceite", "Perfume", "Petate con manta", "Bastón con puño de plata", "Sombrero emplumado", "Espejo" ]);
		if ( numero > equipo.length ) {
			numero = equipo.length;
		}
		var ieq = 0;
		this._equipo = [];
		for (ieq = 0; ieq < numero; ieq++) {
			this._equipo.push(equipo[ieq]);
		}
	}
	
	supersticiones() {
		var tsuper = Comun.shuffle( [ "Quien silba levanta tempestadas", "Llevar flores a bordo da mala suerte", 
						"No llevar ataudes a bordo", "Nunca embarcar en martes", 
						"No se debe embarcar en viernes", "Algo terrible ocurre si un pelirrojo te habla antes que tú le  dirijas la palabra", 
						"No hay que hablar con quien haya sobrevivido a una caída al mar", "Da mala suerte rescatar a quien caiga al mar", 
						"Los pelirrojos traen mal fario", "Una mujer a bordo atrae las desgracias", 
						"Si tiras piedras al mar te devolverá una galerna", "Los gatos pueden invocar tormentas", 
						"Un sacerdote a bordo presagia muertes", "Nunca hagas daño a una gaviota o albatros, esas aves llevan almas de marinos muertos", 
						"Hay que dormir siempre con los pies hacia popa" ]);
		this._supersticiones = [];
		if ( this._atributos[4] <= 8 ) {
			this._supersticiones.push(tsuper[0]);
			if ( this._atributos[4] <= 5 )
				this._supersticiones.push(tsuper[1]);
		}
	}
	
	debilidades(numero) {
		var tdeb = Comun.shuffle( [ "Maldecido", "Código de Honor" , "Fe Ciega", "Endeudado", "Bocazas", "Esclavo marcado", "Perseguido", "Enemigo Jurado", "Pasado Oculto" ] );
		this._debilidades = [];
		if (numero > 0) {
			if ( numero > tdeb.length )
				numero = tdeb.length;
			var ideb = 0;
			for (ideb = 0; ideb < numero; ideb++) {
				this._debilidades.push(tdeb[ideb]);
			}
		}
	}
	
	get pod() {
		return this._pod;
	}	
	set pod(value) {
		this._pod = value;
	}
		
	get din() {
		return this._din;
	}
	
	get plantillaPDF() {
		return "pdf/VEArrr.pdf";
	}
		
	calculaDefensa() {
		this._def = 14 + this.modifAtributo(this._atributos[atributos.atributoMod("DES")]);
	}
	
	calculaPV() {
		this._pv = this._objClase.pv(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("CON")]));
	}
	
	tablaRasgos() {
		return "<table class='w3-table  w3-striped  w3-border'><tr><td><strong>Origen:</strong> " + pj._origen +
													  " </td></tr><tr><td><strong>DA:</strong> d" + pj.daguante +
													  " </td></tr><tr><td><strong>Atq:</strong> " + pj.atq +
            		                                  " </td></tr><tr><td><strong>Pod:</strong> " + pj.pod + 
													  " </td></tr><tr><td><strong>Ins:</strong> " + pj.ins + 
													  " </td></tr><tr><td><strong>Def:</strong> " + pj.defn + 
													  " </td></tr><tr><td><strong>PV:</strong> " + pj.pv + 
													  " </td></tr><tr><td><strong>Nivel adquisitivo:</strong> " + pj._niveladq + 
													  " </td></tr><tr><td><strong>Doblones:</strong> " + pj._doblones + "</td></tr></table";
	}
	
	modifAtributo(valorAtributo) {
		return Atributos.modifArr(valorAtributo);
	}
	
	tablaTalentos() {
		
		var itals = 0;
		var stals = "<table class='w3-table  w3-striped w3-border'><tr><th>Talentos</th></tr>";
		for (itals = 0; itals < this._talentos.length; itals++) {
			stals += "<tr><td>" + this._talentos[itals] + " </td><td>" + clasesArr.dTalentos(this._talentos[itals]) + "</td></tr>";
		}
		stals += "</table>";
		
		return stals;
	}
	
	
	tablaSupersticiones() {
		if ( this._supersticiones.length == 0 )
			return "";
		var isuper = 0;
		var ssuper = "<table class='w3-table  w3-striped w3-border'><tr><th>Supersticiones</th></tr>";
		for (isuper = 0; isuper < this._supersticiones.length; isuper++) {
			ssuper += "<tr><td>" + this._supersticiones[isuper] + "</td></tr>";
		}
		ssuper += "</table>";
		
		return ssuper;
	}
	
	calculaHabilidades() {
		this._habilidades = habilidades.puntuaciones1(this._nivel, this.modifAtributo(this._atributos[atributos.atributoMod("INT")]));
	}
	
	calculaPOD() {
		this._pod = this._objClase.pod(this._nivel) + this.modifAtributo(this._atributos[atributos.atributoMod("INT")]);
	}
	
	calculaDoblones() {
		this._doblones = 3 + this._debilidades.length + this.modifAtributo(this._atributos[atributos.atributoMod("CAR")]);
	}
	
	calculaRasgosDerivados(atributo) {
		this.calculaRasgosDerivadosBase(atributo);
		if ( (atributo == 2 || atributo == 3) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo(atributo+1) ) {
			this.calculaPOD();
			this.calculaHabilidades();
		}
		if ( atributo == 3 || atributo == 4 ) {
			this.supersticiones();
			this.muestraSupersticiones();
		}
		if ( (atributo == 4 || atributo == 5) && this.modifAtributo(this.atributos[atributo]) != this.modifAtributo( (atributo+1)%6 ) ) {
			this.calculaDoblones();
		}
	}
	
	calculaEquipo() {
		var num = this._objClase._armas.num;
		if ( num > 1) {
			num = Comun.random(this._objClase._armas.num, 1);
		}
		var iarms = 0;
		this._armas = [];
		var arms = Comun.shuffle(this._objClase._armas.arms.clone());
		for (iarms = 0; iarms < num; iarms++) {
			this._armas.push(arms[iarms]);
		}
		
		var numequipo = 5 - num;
		this.equipo(numequipo);
		
	}
	
	muestraSupersticiones() {
		
		document.getElementById("dtalentos").innerHTML = this.tablaSupersticiones();
		if ( this._supersticiones.length > 0 )
			document.getElementById("dtalentos").style.visibility="visible";
		else
			document.getElementById("dtalentos").style.visibility="hidden";
		
	}
	
	tablaEquipo() {
		var indice = 0;
		var sequipo = "<br/><strong>Armas</strong><br/>";
		for (indice = 0; indice < this._armas.length; indice++) {
			sequipo += this._armas[indice] + "<br/>";
		}
		sequipo += "<br/><strong>Equipo</strong><br/>";
		for (indice = 0; indice < this._equipo.length; indice++) {
			sequipo += this._equipo[indice] + "<br/>";
		}
		
		return sequipo;
	}
	
	tablaDebilidades() {
		var sdebs = "";
		if ( this._debilidades.length > 0 ) {
			sdebs = "<br/><strong>Debilidades</strong>: " + this._debilidades[0];
			var ideb = 0;
			for (ideb = 1; ideb < this._debilidades.length; ideb++) {
				sdebs += ", " + this._debilidades[ideb];
			}
			sdebs += "<br/>";
		}
		return sdebs;
	}
	
	
	calculaDebilidades() {
		this.debilidades(Comun.random(2,0));
	}
	
	genera() {
		this._origen = "";
		habilidades.habilidadesGen();
		habilidades.ptos_niv = 2;
		atributos.ntiradasextras = 1;
		atributos.excesoatributos = 0;
		this._objClase = clasesArr.clase(this._clase);
		this._daguante = this._objClase.daguante;
		this._clase = this._objClase.nombre;
		this._atributos = atributos.valores(this._objClase.atrs);
		this.calculaHabilidades();
		this._atq = this._objClase.atq(this._nivel);
		this._ins = this._objClase.ins(this._nivel);
		this.calculaPOD(); 
		this.calculaDefensa();
		
		this.calculaPV();
		
		this._nombre = this._nombres[Comun.random( this._nombres.length ,0)] + " " + this._apellidos[Comun.random( this._apellidos.length ,0)];
		this.origen();
		this._talentos = this._objClase.talentos(this._nivel);
		
		this._niveladq = this._niveleseconomicos[Comun.random(6,0)];
		
		this.calculaDebilidades();
		this.calculaDoblones();
		this.supersticiones();
		this.calculaEquipo();

	}
	
	rellenaCamposPDF() {
		var stalentos = "";
		if ( this.talentos.length > 0 ) {
			stalentos = this.talentos[0];
			var itals = 0;
			for (itals = 1; itals < this.talentos.length; itals++) {
				stalentos += ", " + this.talentos[itals];
			}
		}
		
		var sdebilidades = "";
		if ( this._debilidades.length > 0 ) {
			sdebilidades = this._debilidades[0];
			var idebs = 0;
			for (idebs = 1; idebs < this._debilidades.length; idebs++) {
				sdebilidades += ", " + this._debilidades[idebs];
			}
		}
		
		var ssupersticiones = "";
		if ( this._supersticiones.length > 0 ) {
			ssupersticiones = this._supersticiones[0];
			var isuper = 0;
			for (isuper = 1; isuper < this._supersticiones.length; isuper++) {
				ssupersticiones += ", " + this._supersticiones[isuper];
			}
		}
		
		var fields = {
					'Nombre' : [ this.nombre ],
					'Origen' : [ this._origen ],
					'Clase' : [ this.clase ],
					'Nivel' : [ this._nivel ],
					'FUE' : [ this.atributos[0] ],
					'DES' : [ this.atributos[1] ],
					'CON' : [ this.atributos[2] ],
					'INT' : [ this.atributos[3] ],
					'SAB' : [ this.atributos[4] ],
					'CAR' : [ this.atributos[5] ],
					'mFUE' : [ Atributos.modif(this.atributos[0]) ],
					'mDES' : [ Atributos.modif(this.atributos[1]) ],
					'mCON' : [ Atributos.modif(this.atributos[2]) ],
					'mINT' : [ Atributos.modif(this.atributos[3]) ],
					'mSAB' : [ Atributos.modif(this.atributos[4]) ],
					'mCAR' : [ Atributos.modif(this.atributos[5]) ],
					'PV' : [ this.pv ],
					'ATQ' : [ this.atq ],
					'DEF' : [ this.defn ],
					'INS' : [ this.ins ],
					'MOV' : [ 10 ],
					'POD' : [ this.pod ],
					'Alerta' : [ this.habilidades[0] ],
					'Comunicacion' : [ this.habilidades[1] ],
					'Erudicion' : [ this.habilidades[2] ],
					'Manipulacion' : [ this.habilidades[3] ],
					'Subterfugio' : [ this.habilidades[4] ],
					'Supervivencia' : [ this.habilidades[5] ],
					'Talentos' : [ stalentos ],
					'Debilidades' : [ sdebilidades ],
					'Supersticiones' : [ ssupersticiones ],
					'Equipo' : [ stalentos ],
					'Armas' : [ stalentos ],
					'NivelAdquisitivo' : [ this._niveladq ],
					'Doblones' : [ this._doblones ],
		};
		
		if ( this._armas.length > 0 ) {
			var iarms = 0;
			for (iarms = 0; iarms < this._armas.length; iarms++) {
				fields["Armas" + (iarms+1)] = [ this._armas[iarms] ];
			}
		}
		
		if ( this._equipo.length > 0 ) {
			var ieqp = 0;
			for (ieqp = 0; ieqp < this._equipo.length; ieqp++) {
				fields["Equipo" + (ieqp+1)] = [ this._equipo[ieqp] ];
			}
		}
		
		
		return fields;
	}
}
