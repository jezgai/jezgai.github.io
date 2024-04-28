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
    
    
    listaHechizosTipoNivel(tipo, nivel) {
		var i=0;
		var lHechizos = [];
		
		if ( tipo == "" ) {
			return lHechizos;
		}
		var listaHechizosAux = this.listaHechizos(tipo);
		if ( nivel == "" ) {
			return listaHechizosAux;
		}
		var nivelint = parseInt(nivel);
		
		for (i=0; i<listaHechizosAux.length; i++) {
			if ( listaHechizosAux[i].nivel == nivelint )
			{
				var hechizo = {};
				hechizo.nombre = listaHechizosAux[i].nombre;
				hechizo.nivel = nivelint;
				lHechizos.push(hechizo);
			}
		}
		return lHechizos;
	}
	
	cargaHechizos() {
	        lHechizos = this.listaHechizosTipoNivel(this.tiposconjuros[0], this.tiposconjuros[1]);
	        this.pintaHechizos(lHechizos);
    	    return lHechizos;
	}
	
	
    
    listaTipos() {
		return [ Object.keys(this.hechizos.Tipos), [ "1", "2", "3", "4", "5", "6", "7", "8", "9" ] ];
    }
    
    
    construyeSelectTipos(tipossistema) {
		var i=0;
		var tipos = tipossistema[0];
		var niveles = tipossistema[1];
		var tiposhtml = "<div class='mitad'>	<label class='w3-text-blue'><strong>" + this.etiquetaTipos() + "</strong></label><select class='w3-select' name='tipossistema' onChange='seleccionatipo(this, 0)'><option>--Selecciona--</option>";
		for (i=0; i<tipos.length; i++) {
			tiposhtml += '<option>' + tipos[i] + '</option>';
		}
		tiposhtml += '</select></div>';
		
		
		tiposhtml += "<div class='mitad'>	<label class='w3-text-blue'><strong>Nivel</strong></label><select class='w3-select' name='niveles' onChange='seleccionatipo(this, 1)'><option>--Selecciona--</option>";
		for (i=0; i<niveles.length; i++) {
			tiposhtml += '<option>' + niveles[i] + '</option>';
		}
		tiposhtml += '</select></div>';
		return tiposhtml;
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
