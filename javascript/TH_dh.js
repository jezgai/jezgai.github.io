
class DH extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Mago": { "Numero": 4, "PDF": "pdf/TM_DH_Hechizos.pdf" },
                    "Clerigo": { "Numero": 4, "PDF": "pdf/TM_DH_Hechizos.pdf" }
                };
        this.hechizos.Mago = [ ];
        this.hechizos.Clerigo = [ ];
        
        /*var tablas = [ {} ];
        Comun.cargatablas("TH-Dungeon-Hack.json", this);*/
    }
        
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Mago = tablas.Mago;
        this.hechizos.Clerigo = tablas.Clerigo;
    }
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};
		return fields;
	}
}
