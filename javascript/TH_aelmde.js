
class AeLMdE extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Mago": { "Numero": 4, "PDF": "pdf/TM_AeLMdE_Hechizos.pdf" },
                    "Clerigo": { "Numero": 4, "PDF": "pdf/TM_AeLMdE_Hechizos.pdf" },
                    "Elfo": { "Numero": 4, "PDF": "pdf/TM_AeLMdE_Hechizos.pdf" },
                    "Druida": { "Numero": 4, "PDF": "pdf/TM_AeLMdE_Hechizos.pdf" }
                };
        this.hechizos.Mago = [ ];
        this.hechizos.Clerigo = [ ];
        this.hechizos.Elfo = [ ];
        this.hechizos.Druida = [ ];
        
        /*var tablas = [ {} ];
        Comun.cargatablas("TH-Aventuras-en-La-Marca-del-Este.json", this);*/
    }
    
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Mago = tablas.Mago;
        this.hechizos.Clerigo = tablas.Clerigo;
        this.hechizos.Elfo = tablas.Elfo;
        this.hechizos.Druida = tablas.Druida;
    }
    
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};
		return fields;
	}
}
