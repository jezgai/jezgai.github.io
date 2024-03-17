
class AxM extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Mago": { "Numero": 4, "PDF": "pdf/TM_AxM_Hechizos.pdf" },
                    "Clerigo": { "Numero": 4, "PDF": "pdf/TM_AxM_Hechizos.pdf" },
                    "Sacerdote": { "Numero": 4, "PDF": "pdf/TM_AxM_Hechizos.pdf" }
                };
        this.hechizos.Mago = [ ];
        this.hechizos.Clerigo = [ ];
        this.hechizos.Sacerdote = [ ];
        
        /*var tablas = [ {} ];
        Comun.cargatablas("TH-Axis-Mundi.json", this);*/
    }
    
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Mago = tablas.Mago;
        this.hechizos.Clerigo = tablas.Clerigo;
        this.hechizos.Sacerdote = tablas.Sacerdote;
    }
    
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};
		return fields;
	}
}
