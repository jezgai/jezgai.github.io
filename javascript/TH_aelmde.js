class AeLMdE extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Mago": { "Numero": 4, "PDF": "pdf/TH_AeLMdE_Hechizos.pdf" },
                    "Clérigo": { "Numero": 4, "PDF": "pdf/TH_AeLMdE_Hechizos.pdf" },
                    "Elfo": { "Numero": 4, "PDF": "pdf/TH_AeLMdE_Hechizos.pdf" },
                    "Elfo oscuro": { "Numero": 4, "PDF": "pdf/TH_AeLMdE_Hechizos.pdf" },
                    "Paladín": { "Numero": 4, "PDF": "pdf/TH_AeLMdE_Hechizos.pdf" },
                    "Druida": { "Numero": 4, "PDF": "pdf/TH_AeLMdE_Hechizos.pdf" }
                };
        this.hechizos.Mago = [ ];
        this.hechizos["Clérigo"] = [ ];
        this.hechizos.Elfo = [ ];
        this.hechizos.Druida = [ ];
        this.hechizos["Elfo oscuro"] = [ ];
        this.hechizos["Paladín"] = [ ];
        
        Comun.cargatablas("TH-Aventuras-en-LMdE.json", this);
    }
    
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Mago = tablas.Mago;
        this.hechizos["Clérigo"] = tablas["Clérigo"];
        this.hechizos.Elfo = tablas.Elfo;
        this.hechizos.Druida = tablas.Druida;
        this.hechizos["Elfo oscuro"] = tablas["Elfo oscuro"];
        this.hechizos["Paladín"] = tablas["Paladín"];
    }
    
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};		
		for (i=0;i<lHechizos.length;i++) {
            fields["Nombre" + (i+1)] = [ lHechizos[i] ];
            fields["Descripcion" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].Descripción ];
			fields["Alcance" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Alcance ];
			fields["Duracion" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]]["Duración"] ];
			fields["Nivel" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Nivel ];
		}
		return fields;
	}
}
