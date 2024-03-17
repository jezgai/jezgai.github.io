
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
		return this.hechizos[tipo];
	}
	
}
