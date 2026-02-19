
function openNav() {
  document.getElementById("barraAxM").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("barraAxM").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function enlaceSeccion(nbseccion, titulo) {
    return "<a href='javascript:void(0)' onclick='textos.muestraTexto(" + '"' + nbseccion + '"' + ")'>" + titulo + "</a>";
}
    

class Textos {
    constructor() {
       this.textos = {
            AcercaDe: { titulo: "", texto: "", referencias: [] },
            Glosario: { titulo: "", texto: "", referencias: [] },
            CreacionPJ: { titulo: "", texto: "", referencias: [] },
            Sistema: { titulo: "", texto: "", referencias: [] },
            Velocidad: { titulo: "", texto: "", referencias: [] },
            Descansos: { titulo: "", texto: "", referencias: [] },
            Combate: { titulo: "", texto: "", referencias: [] },
            Daño: { titulo: "", texto: "", referencias: [] },
            Curacion: { titulo: "", texto: "", referencias: [] },
            Persecuciones: { titulo: "", texto: "", referencias: [] },
            Tiempo: { titulo: "", texto: "", referencias: [] },
            Trampas: { titulo: "", texto: "", referencias: [] },
            Luz: { titulo: "", texto: "", referencias: [] }
       };
    }
    
    referencias(texto) {
        if ( this.textos[texto].referencias.length > 0 ) {
            var i=0;
            var aux="";
            for (i=0;i<this.textos[texto].referencias.length;i++) {
                aux += " " + enlaceSeccion(this.textos[texto].referencias[i], this.textos[this.textos[texto].referencias[i]].titulo);
            }
            if (aux != "") {
                aux = "<br/><br/><u>Referido por</u>:" + aux;
                return aux;
            }
        }
        return "";
    }
    
    muestraTexto(texto) {
       document.getElementById("seccion").innerHTML="<h2>" + this.textos[texto].titulo + "</h2>";
       document.getElementById("contenido").innerHTML=this.textos[texto].texto + this.referencias(texto);
       closeNav();
    }
        
    parsea(textoclave) {
        var texto = this.textos[textoclave].texto;
        var iniciomarca = this.textos[textoclave].texto.indexOf("[[");
        while (iniciomarca != -1) {
            var finmarca = this.textos[textoclave].texto.indexOf("]]",iniciomarca);
            if (finmarca != -1 ) {
                var marca = this.textos[textoclave].texto.substring(iniciomarca+2,finmarca);
                if ( this.textos.hasOwnProperty(marca) ) {
                    texto = texto.replace(this.textos[textoclave].texto.substring(iniciomarca,finmarca+2), enlaceSeccion(marca, this.textos[marca].titulo));
                }
            }
            iniciomarca =  this.textos[textoclave].texto.indexOf("[[", iniciomarca+2);
        }
        this.textos[textoclave].texto = texto;
    }
}


function cargaTextos(textoInicial) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "json/Ayudante-AdC.json", true);
    
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
	        var allText = rawFile.responseText;
	        textos.textos = JSON.parse(allText);
	        
	        var textoskeys = Object.keys(textos.textos);
	        var i=0;
		    for (i=0; i< textoskeys.length; i++) {
		        textos.parsea(textoskeys[i]);
		    }
	        
	        textos.muestraTexto(textoInicial);
        }
    }
    rawFile.send();

}

let textos=new Textos();
cargaTextos("AcercaDe");

