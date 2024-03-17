
class SistemaBase {
    constructor() {
        this.hechizos = { 
                "EtiquetaTipos": "",
                "Tipos": { },
                "Hechizos": {
                }
            }
    }
    listaTipos() {
        return Object.keys(this.hechizos.Tipos);
    }
    etiquetaTipos() {
        return this.hechizos.EtiquetaTipos;
    }
    numeroHechizos(tipo) {
        return this.hechizos.Tipos[tipo].Numero;
    }
	nombrePDF(tipo) {
		return this.hechizos.Tipos[tipo].PDF;
	}
    listaHechizos(tipo) {
		var i=0;
		var lHechizos = [];
		for (i=0; i<this.hechizos[tipo].length;i++) {
			var hechizo = {};
			hechizo.nombre = this.hechizos[tipo][i];
			if ( this.hechizos.Hechizos[hechizo.nombre].hasOwnProperty('Nivel') )
				hechizo.nivel = this.hechizos.Hechizos[hechizo.nombre].Nivel;
			else
				hechizo.nivel = null;
			lHechizos.push(hechizo);
		}
		return lHechizos;
		//return this.hechizos[tipo];
	}
	
}
