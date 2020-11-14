class Origen {
	constructor(clase) {
		this._origen = clase.origen;
		this._nombres = clase.nombres;
		this._apellidos = clase.apellidos;
		this._numero = clase.numero;
	}
	
	get origen() {
		return this._origen;
	}
	get nombres() {
		return this._nombres;
	}
	get apellidos() {
		return this._apellidos;
	}
	get numero() {
		return this._numero;
	}
	
}

class Origenes {
	constructor() {
		this._origenes = [
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
	}
	
	
	desplegableOrigenes(nbFuncSel) {
		
		var sorigenes="<strong>Origen:</strong> <select class='w3-select'  name='raza' onChange='" + nbFuncSel + "(this)'><option>--Aleatorio--</option>";
		var indice=0;
		for (indice=0; indice< this._origenes.length; indice++) {
			sorigenes += "<option>" + this._origenes[indice].origen + "</option>";
		}
		sorigenes += "</select>";
		return sorigenes;
	}
	
	origenaleatorio() {
		
		var num = Comun.random(100,1);
		var origen = null;
		var iorigen = 0;
		for (iorigen = 0; iorigen<this._origenes.length; iorigen++) {
			if ( num >= this._origenes[iorigen].numero.inferior && num<= this._origenes[iorigen].numero.superior ) {
				origen = new Origen(this._origenes[iorigen]);
				break;
			}
		}
		if ( origen == null ) {
			origen = new Origen(this._origenes[Comun.random(this._origenes.length, 0)]);
		}
		return origen;
	}
	
	origen(nombre) {
		var indice=0;
		for (indice=0; indice<this._origenes.length; indice++) {
			if ( this._origenes[indice].origen == nombre ) {
				return new Origen(this._origenes[indice]);
			}
		}
		return this.origenaleatorio();;
	}
	
}

let origenes = new Origenes();
