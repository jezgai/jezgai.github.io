
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
    
    initTiposHechizos() {
        var i=0;
        var lhechizos = Object.keys(this.hechizos.Hechizos);
        for (i=0;i<lhechizos.length; i++) {
            var tipos = Object.keys(this.hechizos.Hechizos[lhechizos[i]].Nivel);
            var j=0;
            for (j=0; j<tipos.length; j++) {
                this.hechizos[tipos[j]].push(lhechizos[i]);
            }
        } 
    }
        
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        this.initTiposHechizos();
        /*this.hechizos.Mago = tablas.Mago;
        this.hechizos.Clerigo = tablas.Clerigo;
        this.hechizos.Ilusionista = tablas.Ilusionista;
        this.hechizos.Druida = tablas.Druida;*/
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
			if ( listaHechizosAux[i].nivel[tipo] == nivelint )
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
		return [ Object.keys(this.hechizos.Tipos), [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ] ];
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
			fields["TS" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].TS ];			
			fields["TL" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].TL ];
			fields["Componentes" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].Componentes ];			
			fields["RC" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].RC ];
			fields["Nivel" + (i+1) ] = [ this.nivelHechizo(this.hechizos.Hechizos[lHechizos[i]].Nivel) ];
		}
		return fields;
	}
}
