
class TQuebradas extends SistemaBase {
    constructor() {
        super();
        this.hechizos.EtiquetaTipos = "Listas de conjuros";
        this.hechizos.Verbos = { };
        this.hechizos.Esferas = { };
        this.hechizos.Tipos = { };        
        
        Comun.cargatablas("TH-Tierras-Quebradas.json", this);
    }
    
    numeroHechizos(tipo) {
        return 4;
    }
	nombrePDF(tipo) {
		return "pdf/TH_TQuebradas_Hechizos.pdf";
	}
    
    listaTipos() {
		return [ Object.keys(this.hechizos.Verbos), Object.keys(this.hechizos.Esferas) ];
    }
    construyeSelectTipos(tipossistema) {
		var i=0;
		var verbos = tipossistema[0];
		var esferas = tipossistema[1];
		var tiposhtml = "<div class='mitad'>	<label class='w3-text-blue'><strong>Verbos</strong></label><select class='w3-select' name='verbos' onChange='seleccionatipoTQ(this, 0)'><option>--Selecciona--</option>";
		for (i=0; i<verbos.length; i++) {
			tiposhtml += '<option>' + verbos[i] + '</option>';
		}
		tiposhtml += '</select></div>';
		
		
		tiposhtml += "<div class='mitad'>	<label class='w3-text-blue'><strong>Esferas</strong></label><select class='w3-select' name='esferas' onChange='seleccionatipoTQ(this, 1)'><option>--Selecciona--</option>";
		for (i=0; i<esferas.length; i++) {
			tiposhtml += '<option>' + esferas[i] + '</option>';
		}
		tiposhtml += '</select></div>';
		return tiposhtml;
	}
	
	listaHechizosTotal() {
        var i=0;
        var lHechizosKey = Object.keys(this.hechizos.Hechizos);
		var lHechizos = [];
        for (i=0;i<lHechizosKey.length; i++) {
			var hechizo = {};
			hechizo.nombre = lHechizosKey[i];
			hechizo.nivel = null;
			lHechizos.push(hechizo);
		}
		return lHechizos;
	}
	
	listaHechizosVerbo(verbo) {
		var i=0;
		var lHechizos = [];
		
		if ( verbo == "" ) {
			return lHechizos;
		}
		for (i=0; i<this.hechizos.Verbos[verbo].length; i++) {
			var hechizo = {};
			hechizo.nombre = this.hechizos.Verbos[verbo][i];
			hechizo.nivel = null;
			lHechizos.push(hechizo);
		}
		return lHechizos;
	}
    
	listaHechizosEsfera(esfera) {
		var i=0;
		var lHechizos = [];
		
		if ( esfera == "" ) {
			return lHechizos;
		}
		for (i=0; i<this.hechizos.Esferas[esfera].length; i++) {
			var hechizo = {};
			hechizo.nombre = this.hechizos.Esferas[esfera][i];
			hechizo.nivel = null;
			lHechizos.push(hechizo);
		}
		return lHechizos;
	}
	
    listaHechizos(verbo, esfera) {
		var i=0;
		var lHechizos = [];
		
		if ( verbo == "" && esfera == "" ) {
			return this.listaHechizosTotal();
		}
		if ( esfera == "" ) {
			return this.listaHechizosVerbo(verbo);
		}
		if ( verbo == "" ) {
			return this.listaHechizosEsfera(esfera);
		}
		for (i=0; i<this.hechizos.Verbos[verbo].length; i++) {
			var j=0;
			for (j=0; j<this.hechizos.Esferas[esfera].length; j++) {
				if ( this.hechizos.Verbos[verbo][i] == this.hechizos.Esferas[esfera][j] ) {
					var hechizo = {};
					hechizo.nombre = this.hechizos.Verbos[verbo][i];
					hechizo.nivel = null;
					lHechizos.push(hechizo);
					break;
				}
			}
		}
		return lHechizos;
	}
        
    init(tablas) {
        this.hechizos.Hechizos = tablas.Hechizos;
        
        var i=0;
        var lHechizos = Object.keys(this.hechizos.Hechizos);
        for (i=0;i<lHechizos.length; i++) {
			var j=0; 
			var lVerbos = this.hechizos.Hechizos[lHechizos[i]].verbos;
			for (j=0; j<lVerbos.length; j++) {
				if ( this.hechizos.Verbos.hasOwnProperty(lVerbos[j]) ) {
					this.hechizos.Verbos[lVerbos[j]].push(lHechizos[i]);
				}
				else {
					this.hechizos.Verbos[lVerbos[j]] = [ lHechizos[i] ];
				}
			}
			var lEsferas = this.hechizos.Hechizos[lHechizos[i]].esferas;
			for (j=0; j<lEsferas.length; j++) {
				if ( this.hechizos.Esferas.hasOwnProperty(lEsferas[j]) ) {
					this.hechizos.Esferas[lEsferas[j]].push(lHechizos[i]);
				}
				else {
					this.hechizos.Esferas[lEsferas[j]] = [ lHechizos[i] ];
				}
			}
		}
        
    }
    
	rellenaPDF(lHechizos) {
		var i=0;
		var fields = {};		
		for (i=0;i<lHechizos.length;i++) {
			var j=0;
			var verbos = this.hechizos.Hechizos[lHechizos[i]].verbos[0];
			for (j=1; j< this.hechizos.Hechizos[lHechizos[i]].verbos.length; j++) {
				verbos += ", " + this.hechizos.Hechizos[lHechizos[i]].verbos[j];
			}
			var esferas = this.hechizos.Hechizos[lHechizos[i]].esferas[0];
			for (j=1; j< this.hechizos.Hechizos[lHechizos[i]].esferas.length; j++) {
				esferas += ", " + this.hechizos.Hechizos[lHechizos[i]].esferas[j];
			}
			
            fields["Nombre" + (i+1)] = [ lHechizos[i] ];
            fields["Descripcion" + (i+1) ] =  [ this.hechizos.Hechizos[lHechizos[i]].descripcion ];
			fields["Verbos" + (i+1) ] = [ verbos ];
			fields["Esferas" + (i+1) ] = [ esferas ];			
			fields["Dificultad" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].dificultad ];			
			fields["PM" + (i+1) ] = [ this.hechizos.Hechizos[lHechizos[i]].PM ];
		}
		return fields;
	}
}
