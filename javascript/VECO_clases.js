/*
class TalentosComunesCP {
	static talentos() {
		return [ "Afortunado","Ataque certero","Buena reputación","Coraje","Elegante","Empatía mecánica","Ímpetu emprendedor","Red de contactos","Sentido agudo" ];
	}
}
*/

class ClaseCO extends ClaseBase {

	constructor(clase) {
		super(clase);
		this._equipoinicial = clase.equipoinicial;
	}
		
	
	talentos() {
		var talaux = Comun.shuffle(this._talentos);
		var taln = [];
		taln.push(talaux[0]);
		taln.push(talaux[1]);
		return taln;
	}

		
	equipo() {
		return this._equipoinicial[Comun.random(this._equipoinicial.length,0)];
	}

}

class ClasesCO {
	
	constructor() {
		this._clases =
		[
			{
			  nombre : "Científico",
			  talentos : [ "Académico", "Analista", "Autocontrol", "Médico" ],
			  daguante : 4,
			  atrs : [ "INT" , "SAB" ],
			  atq : [ 0, 0, 0, 1, 1, 1, 2, 2, 3, 3 ],
			  ins : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 1, dado: 6 }, equipo : []} ],
			},
			{
			  nombre : "Colono",
			  talentos : [ "Mula de carga", "Paranoia", "Salud de hierro", "Tipo duro" ],
			  daguante : 6,
			  atrs : [ "CON" , "FUE" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 1, dado: 6 }, equipo : []} ],
			},
			{
			  nombre : "Corporativo",
			  talentos : [ "Conexiones corporativa", "Labia", "Recursos financieros", "Sin escrúpulos" ],
			  daguante : 4,
			  atrs : [ "CAR" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 0, 0, 1, 1, 1, 2, 2, 3, 3 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 3, dado: 6 }, equipo : []} ],
			},
			{
			  nombre : "Marine",
			  talentos : [ "Especialista en arma", "Intimidante", "Letal", "Ventaja táctica" ],
			  daguante : 8,
			  atrs : [ "FUE" , "DES" ],
			  atq : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  ins : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 1, dado: 6 }, equipo : []} ],
			},
			{
			  nombre : "Oficial de seguridad",
			  talentos : [ "Autoridad", "Confidentes", "Perceptivo", "Técnica de reducción" ],
			  daguante : 6,
			  atrs : [ "CAR" , "FUE" ],
			  atq : [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
			  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 1, dado: 6 }, equipo : []} ],
			},
			{
			  nombre : "Sintético",
			  talentos : [ "Capacidad sobrehumana", "Chasis sintético", "Más humano que los humano", "Programación subvertida" ],
			  daguante : 8,
			  atrs : [ "INT" , "FUE" ],
			  atq : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  ins : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 1, dado: 3 }, equipo : []} ],
			},
			{
			  nombre : "Tripulante",
			  talentos : [ "Capitán", "Especialista en actividad extravehicular", "Oficial", "Relájate, colega" ],
			  daguante : 6,
			  atrs : [ "DES" , "SAB" ],
			  atq : [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 5 ],
			  ins : [ 0, 1, 1, 2, 2, 3, 4, 5, 6, 7 ],
			  equipoinicial : [ { dinero : { inicial : 0, ndados: 1, dado: 6 }, equipo : []} ],
			},
		]
	}
	
	get clases() {
		return this._clases;
	}

	set clases(value) {
		this._clases = value;
	}
	
	clase(nombre) {
		var iclases=0;
		for (iclases=0; iclases<this._clases.length; iclases++) {
			if ( this._clases[iclases].nombre == nombre ) {
				return new ClaseCO(this._clases[iclases]);
			}
		}
		return new ClaseCO(this._clases[Comun.random(this._clases.length, 0)]);
	}
}

let clasesCO = new ClasesCO();
