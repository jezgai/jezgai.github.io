
class SistemaBase {
    constructor() {
		this.tiposconjuros = [ "", "" ];
        this.hechizos = { 
                "EtiquetaTipos": "",
                "Tipos": { },
                "Hechizos": {
                }
            }
        this.numeroHechizosDefault = 4;
    }
    setTipo(valor, indice) {
		this.tiposconjuros[indice] = valor;
	}
    listaTipos() {
        return [ Object.keys(this.hechizos.Tipos) , [ ] ];
    }
    construyeSelectTipos(tipossistema) {
		var i=0;
		var tiposhtml = "<label class='w3-text-blue'><strong>" + this.etiquetaTipos() + "</strong></label><select class='w3-select' name='tipossistema' onChange='seleccionatipo(this, 0)'><option>--Selecciona--</option>";
		for (i=0; i<tipossistema[0].length; i++) {
			tiposhtml += '<option>' + tipossistema[0][i] + '</option>';
		}
		tiposhtml += '</select>';
		return tiposhtml;
	}
    
    etiquetaTipos() {
        return this.hechizos.EtiquetaTipos;
    }
    numeroHechizos() {
		if ( this.tiposconjuros[0] != "" )
			return this.hechizos.Tipos[this.tiposconjuros[0]].Numero;
		else
			return this.numeroHechizosDefault;
    }
	nombrePDF() {
		if ( this.tiposconjuros[0] != "" )
			return this.hechizos.Tipos[this.tiposconjuros[0]].PDF;
		return "";
	}
	
	nombretarjetaPDF() {
		return objsistema.tiposconjuros[0];
	}
	
	getNivelHechizo(nombre, tipo) {
		if ( this.hechizos.Hechizos[nombre].hasOwnProperty('Nivel') )
				return this.hechizos.Hechizos[nombre].Nivel;
		return null;
	}
	
    listaHechizos(tipo) {
		var i=0;
		var lHechizos = [];
		if ( tipo == "" )
			return lHechizos;
			
		var lHechizosOrdenada = Object.keys(this.hechizos[tipo].sort());
		for (i=0; i< lHechizosOrdenada.length; i++) {
		    if ( this.hechizos.Hechizos[this.hechizos[tipo][lHechizosOrdenada[i]]].hasOwnProperty('Descripción') ) {
		        if ( this.hechizos.Hechizos[this.hechizos[tipo][lHechizosOrdenada[i]]]["Descripción"] == "-PENDIENTE-" )
		            continue;
		    }
			var hechizo = {};
			hechizo.nombre = this.hechizos[tipo][lHechizosOrdenada[i]];
			hechizo.nivel = this.getNivelHechizo(hechizo.nombre, tipo);
			lHechizos.push(hechizo);
		}
		/*
		for (i=0; i<this.hechizos[tipo].length;i++) {
			var hechizo = {};
			hechizo.nombre = this.hechizos[tipo][i];
			hechizo.nivel = this.getNivelHechizo(hechizo.nombre, tipo);
			//if ( this.hechizos.Hechizos[hechizo.nombre].hasOwnProperty('Nivel') )
			//	hechizo.nivel = this.hechizos.Hechizos[hechizo.nombre].Nivel;
			//else
			//	hechizo.nivel = null;
			lHechizos.push(hechizo);
		}*/
		return lHechizos;
		//return this.hechizos[tipo];
	}
	
	nivelHechizo(nivel) {
		if (nivel.hasOwnProperty(this.tiposconjuros[0]) )
			return nivel[this.tiposconjuros[0]];
		return nivel;
	}
	
    
	pintaHechizos(lHechizos) {
	        var i=0;
	        var hechizoshtml = [ "<ul>", "<ul>", "<ul>" ];
	        for (i=0; i<lHechizos.length; i++) {
	            var indicehechizo = math.mod(i,3);
			    hechizoshtml[indicehechizo] += "<li><label><input type='checkbox' id='chechizos"+i+"' /> " + lHechizos[i].nombre;
				if ( lHechizos[i].nivel != null) 
					hechizoshtml[indicehechizo] += " (nivel " + this.nivelHechizo(lHechizos[i].nivel) + ")";
				hechizoshtml[indicehechizo] += "</label></li>";
	        }
	        hechizoshtml[0] += "</ul>";
	        hechizoshtml[1] += "</ul>";
	        hechizoshtml[2] += "</ul>";
	        document.getElementById("hechizos1").innerHTML = hechizoshtml[0];
	        document.getElementById("hechizos2").innerHTML = hechizoshtml[1];
	        document.getElementById("hechizos3").innerHTML = hechizoshtml[2];
	        document.getElementById("listahechizos").style.visibility="visible";
    	    document.getElementById("botonpdf").style.visibility="visible";
	}
	

	cargaHechizos() {
	        lHechizos = this.listaHechizos(this.tiposconjuros[0]);
	        this.pintaHechizos(lHechizos);
    	    return lHechizos;
	}
	
	// Para llamadas desde generador de PJ
	cargaPDF(lHechizos, nombrePlantillaPDF, nombrePDF, sistema) {		
		var xhr = new XMLHttpRequest();
		var contenido;
		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			  contenido = this.response;
			  var fields = sistema.rellenaPDF(lHechizos);
			  var out_buf = pdfform().transform(contenido, fields);
			  var blob = new Blob([out_buf], {type: 'application/pdf'});
			  saveAs(blob, 'Tarjeta ' + nombrePDF + '.pdf'); 
			}
		};
		xhr.open('GET', nombrePlantillaPDF, true);
		xhr.responseType = 'arraybuffer';
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();	
	}
	
}
