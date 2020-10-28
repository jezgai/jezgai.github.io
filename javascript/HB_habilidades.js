class Habilidades {
	constructor() {
		this._habilidades = [ "Ciencia Natural", "Conducir", "Conocimiento Académico", "Disfraz", "Disparar", "Explosivos", "Humanidades", 
							  "Hurtar", "Infiltración", "Juego", "Liderazgo", "Mantenimiento", "Montar", "Negociar", "Ocultar", "Pelear", 
							  "Percepción", "Persuasión", "Pilotar", "Preparación", "Presencia", "Primeros Auxilios", "Supervivencia", "Vigilancia" ];
		this._pdfhabilidades = [ "CNatural", "Conducir", "CAcademico", "Disfraz", "Disparar", "Explosivos", "Humanidades", 
							  "Hurtar", "Infiltracion", "Juego", "Liderazgo", "Mantenimiento", "Montar", "Negociar", "Ocultar", "Pelear", 
							  "Percepcion", "Persuasion", "Pilotar", "Preparacion", "Presencia", "PrimAuxilios", "Supervivencia", "Vigilancia" ];
	}
	
	get habilidades() {
		return this._habilidades;
	}
	
	get pdfhabilidades() {
		return this._pdfhabilidades;
	}
	
	existehabilidad(habilidad) {
		var ihab = 0;
		for (ihab = 0; ihab<this._habilidades.length; ihab++) {
			if ( this._habilidades[ihab] == habilidad ) {
				return true;
			}
		}
		return false;
	}
	
	campopdf(habilidad) {
		var ihab = 0;
		for (ihab = 0; ihab<this._habilidades.length; ihab++) {
			if ( this._habilidades[ihab] == habilidad ) {
				return this._pdfhabilidades[ihab];
			}
		}
		return "";
	}
	
}
