
function openNav() {
  document.getElementById("barraAxM").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("barraAxM").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

class Textos {
    constructor() {
       this.textos = {
            AcercaDe: { titulo: "", texto: "" },
            Glosario: { titulo: "", texto: "" },
            CreacionPJ: { titulo: "", texto: "" },
            Sistema: { titulo: "", texto: "" },
            Velocidad: { titulo: "", texto: "" },
            Descansos: { titulo: "", texto: "" },
            Combate: { titulo: "", texto: "" },
            Daño: { titulo: "", texto: "" },
            Curacion: { titulo: "", texto: "" },
            Persecuciones: { titulo: "", texto: "" },
            Tiempo: { titulo: "", texto: "" },
            Trampas: { titulo: "", texto: "" },
            Luz: { titulo: "", texto: "" }
       };
    }
    
    
    muestraTexto(texto) {
       document.getElementById("seccion").innerHTML=this.textos[texto].titulo;
       document.getElementById("contenido").innerHTML=this.textos[texto].texto;
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
                    texto = texto.replace(this.textos[textoclave].texto.substring(iniciomarca,finmarca+2), "<a href='javascript:void(0)' onclick='textos.muestraTexto(" + '"' + marca + '"' + ")'>" + this.textos[marca].titulo + "</a>");
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

