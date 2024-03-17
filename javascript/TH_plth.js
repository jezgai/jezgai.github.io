
class PlTH extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Tipos de hechizos";
        this.hechizos.Tipos = {
                    "Trucos": { "Numero": 4, "PDF": "pdf/TH_PLTH_Trucos.pdf" },
                    "Conjuros": { "Numero": 4, "PDF": "pdf/TH_PLTH_Conjuros.pdf" },
                    "Rituales": { "Numero": 2, "PDF": "pdf/TH_PLTH_Rituales.pdf" }
                };
        this.hechizos.Trucos = [ ];
        this.hechizos.Conjuros = [ ];
        this.hechizos.Rituales = [ ];
        
        Comun.cargatablas("TH-Por-las-Tierras-Hundidas.json", this);
    }
    
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.hechizos.Trucos = tablas.Trucos;
        this.hechizos.Conjuros = tablas.Conjuros;
        this.hechizos.Rituales = tablas.Rituales;
    }
    
    
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};
		for (i=0;i<lHechizos.length;i++) {
            fields["Nombre" + (i+1)] = [ lHechizos[i] ];
            fields["Descripcion" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].Descripción ];
            if ( this.hechizos.Trucos.includes(lHechizos[i]) || this.hechizos.Rituales.includes(lHechizos[i]) ) {
				fields["Caracteristica" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Caracteristica ];
			}
            if ( this.hechizos.Conjuros.includes(lHechizos[i]) || this.hechizos.Rituales.includes(lHechizos[i]) ) {	
				fields["Alcance" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Alcance ];
				fields["Duracion" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]]["Duración"] ];
				fields["Salvacion" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]]["Salvación"] ];
			}
            if ( this.hechizos.Rituales.includes(lHechizos[i]) ) {
				fields["Nivel" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Nivel ];
			}
		}
		return fields;
	}
}
