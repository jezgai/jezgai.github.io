class DH_Seguidor {

	constructor(nivel) {
		this._Ataque = 0;
		this._Defensa = 0;
		this._Moral = 0;
		this._Salud = 0;
		this._Precio = 0;
		this._Aventura = "No";
		this._habilidad = "";
		this._habilidad_d = "";
		this._nivel = 1;
				
		this._Profesion = null;
		this._nombrepj = "";
	}
		
	genera() {
		
		this._Profesion = profesiones.profesion(nombreprofesion);
		
		this._Ataque = Comun.atributo() + this._Profesion._ataque;
		this._Defensa = Comun.atributo() + this._Profesion._defensa;
		this._Moral = this._Profesion._moral;
		this._Precio = this._Profesion._precio;
		this._Aventura = this._Profesion._aventura;
		this._Salud = Comun.random(this._Profesion._salud, 1);
		var objhabilidad = this._Profesion.habilidad;
		if ( objhabilidad != null ) {
			this._habilidad = objhabilidad.nombre;
			this._habilidad_d = objhabilidad.descripcion;
		}
	}
	
}
