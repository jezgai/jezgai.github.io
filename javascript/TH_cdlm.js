
class CdLM extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Mago": { "Numero": 4, "PDF": "pdf/TH_CdLM_Hechizos.pdf" },
                    "Clerigo": { "Numero": 4, "PDF": "pdf/TH_CdLM_Hechizos.pdf" },
                    "Ilusionista": { "Numero": 4, "PDF": "pdf/TH_CdLM_Hechizos.pdf" },
                    "Druida": { "Numero": 4, "PDF": "pdf/TH_CdLM_Hechizos.pdf" }
                };
        this.hechizos.Mago = [ ];
        this.hechizos.Clerigo = [ ];
        this.hechizos.Ilusionista = [ ];
        this.hechizos.Druida = [ ];
        
        
        Comun.cargatablas("TH-Cronicas-de-La-Marca.json", this);
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
		for (i=0;i<lHechizos.length;i++) {
            fields["Nombre" + (i+1)] = [ lHechizos[i] ];
            fields["Descripcion" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].Descripción ];
			fields["Alcance" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Alcance ];
			fields["Duracion" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]]["Duración"] ];			
			fields["TS" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].TS ];			
			fields["TL" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].TL ];
			fields["Componentes" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Componentes ];			
			fields["RC" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].RC ];
			fields["Nivel" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Nivel ];
		}
		return fields;
	}
}
