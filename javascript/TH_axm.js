
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
		return [ Object.keys(this.hechizos.Tipos), [ "1", "2", "3", "4", "5", "6" ] ];
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
