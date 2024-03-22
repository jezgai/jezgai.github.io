
class AxM extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de hechizos";
        this.hechizos.Tipos = {
                    "Arcana": { "Numero": 4, "PDF": "pdf/TH_AxM_Hechizos.pdf" },
                    "Divina": { "Numero": 4, "PDF": "pdf/TH_AxM_Hechizos.pdf" }
                };
        this.hechizos.Arcana = [ ];
        this.hechizos.Divina = [ ];
        
        Comun.cargatablas("TH-Axis-Mundi.json", this);
    }
    
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Arcana = tablas.Arcana;
        this.hechizos.Divina = tablas.Divina;
    }
    

	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};		
		for (i=0;i<lHechizos.length;i++) {
            fields["Nombre" + (i+1)] = [ lHechizos[i] ];
            fields["Categoria" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].Categoria ];
            fields["Resistencia" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].Resistencia ];
            fields["Descripcion" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].Descripción ];
			fields["Alcance" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Alcance ];
			fields["Duracion" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]]["Duración"] ];
			fields["Nivel" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Nivel ];
		}
		return fields;
	}
}
