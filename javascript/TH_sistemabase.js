
class SistemaBase {
    constructor() {
        this.hechizos = { 
                "EtiquetaTipos": "",
                "Tipos": { },
                "Hechizos": {
                }
            }
    }
    listaTipos() {
        return Object.keys(this.hechizos.Tipos);
    }
    construyeSelectTipos(tipossistema) {
		var i=0;
		var tiposhtml = "<label class='w3-text-blue'><strong>" + this.etiquetaTipos() + "</strong></label><select class='w3-select' name='tipossistema' onChange='seleccionatipo(this)'><option>--Selecciona--</option>";
		for (i=0; i<tipossistema.length; i++) {
			tiposhtml += '<option>' + tipossistema[i] + '</option>';
		}
		tiposhtml += '</select>';
		return tiposhtml;
	}
    
    etiquetaTipos() {
        return this.hechizos.EtiquetaTipos;
    }
    numeroHechizos(tipo) {
        return this.hechizos.Tipos[tipo].Numero;
    }
	nombrePDF(tipo) {
		return this.hechizos.Tipos[tipo].PDF;
	}
    listaHechizos(tipo) {
		var i=0;
		var lHechizos = [];
		for (i=0; i<this.hechizos[tipo].length;i++) {
			var hechizo = {};
			hechizo.nombre = this.hechizos[tipo][i];
			if ( this.hechizos.Hechizos[hechizo.nombre].hasOwnProperty('Nivel') )
				hechizo.nivel = this.hechizos.Hechizos[hechizo.nombre].Nivel;
			else
				hechizo.nivel = null;
			lHechizos.push(hechizo);
		}
		return lHechizos;
		//return this.hechizos[tipo];
	}
	
}
