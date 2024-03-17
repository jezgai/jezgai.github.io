
class CdLM extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Mago": { "Numero": 4, "PDF": "pdf/TM_CdLM_Hechizos.pdf" },
                    "Clerigo": { "Numero": 4, "PDF": "pdf/TM_CdLM_Hechizos.pdf" },
                    "Ilusionista": { "Numero": 4, "PDF": "pdf/TM_CdLM_Hechizos.pdf" },
                    "Druida": { "Numero": 4, "PDF": "pdf/TM_CdLM_Hechizos.pdf" }
                };
        this.hechizos.Mago = [ ];
        this.hechizos.Clerigo = [ ];
        this.hechizos.Ilusionista = [ ];
        this.hechizos.Druida = [ ];
        
        /*var tablas = [ {} ];
        Comun.cargatablas("TH-Cronicas-de-La-Marca.json", this);*/
    }
        
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Mago = tablas.Mago;
        this.hechizos.Clerigo = tablas.Clerigo;
        this.hechizos.Ilusionista = tablas.Ilusionista;
        this.hechizos.Druida = tablas.Druida;
    }
    
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};
		return fields;
	}
}
