
function abreMenu() {
  document.getElementById("barraMenu").style.width = "250px";
  document.getElementById("principal").style.marginLeft = "250px";
}

function cierraMenu() {
  document.getElementById("barraMenu").style.width = "0";
  document.getElementById("principal").style.marginLeft= "0";
}

function cargaPaginas(paginaInicial) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "json/Ayudante-AdC.json", true);
    
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
	        var allText = rawFile.responseText;
	        var ficherojson = JSON.parse(allText);
	        paginas.paginas = ficherojson.Paginas;
	        pagina.menu = ficherojson.Menu;
	        pagina.titulo = ficherojson.Titulo;
	        pagina.muestraMenu();
	        muestraTexto(paginaInicial);
        }
    }
    rawFile.send();

}

function muestraTexto(clave) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "md/" + clave + ".md", true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            var allText = rawFile.responseText;
             
            document.getElementById("contenido").innerHTML = paginas.parsea(markdown(allText)) + paginas.referencias(clave);
        }
    }
    rawFile.send();
    cierraMenu();
}

class Pagina {
    constructor() {
        this.menu = [ "AcercaDe" ];
        this.titulo = "Ayudante";
    }
    
    enlacemenu(pagina, clase) {
        return '<a href="javascript:void(0)" onclick="muestraTexto(' + "'" + pagina + "')" + '">' + paginas.paginas[pagina].titulo + '</a>';
    }
    
    enlacemenu(pagina, texto, adicional) {
        return '<a href="javascript:void(0)" onclick="muestraTexto(' + "'" + pagina + "')" + '"' + adicional + '>' + texto + '</a>';
    }
    
    muestraMenu() {
        
        var i=0;
        var barramenu='<a href="javascript:void(0)" class="closebtn" onclick="cierraMenu()">×</a>'
        for (i=0;i<this.menu.length;i++) {
            barramenu += " " + this.enlacemenu(this.menu[i], paginas.paginas[this.menu[i]].titulo, "");
        }
        document.getElementById("Ayudante").innerHTML = this.enlacemenu(this.menu[0], this.titulo, " class='active'");
        document.getElementById("barraMenu").innerHTML = barramenu;
    }
}

class Paginas {
    constructor() {
       this.paginas = {
            AcercaDe: { titulo: "", referencias: [] },
            Glosario: { titulo: "", referencias: [] },
            CreacionPJ: { titulo: "", referencias: [] },
            Sistema: { titulo: "", referencias: [] },
            Velocidad: { titulo: "", referencias: [] },
            Descansos: { titulo: "", referencias: [] },
            Combate: { titulo: "", referencias: [] },
            Daño: { titulo: "", referencias: [] },
            Curacion: { titulo: "", referencias: [] },
            Persecuciones: { titulo: "", referencias: [] },
            Tiempo: { titulo: "", referencias: [] },
            Trampas: { titulo: "", referencias: [] },
            Luz: { titulo: "", referencias: [] }
       };
       this.menu = [ "AcercaDe", "Glosario", "CracionPJ", "Sistema", "Combate", "Exploracion", "Curacion", "Persecuciones" ]
    }
    
    
    enlaceSeccion(nbseccion, titulo) {
        return "<a href='javascript:void(0)' onclick='muestraTexto(" + '"' + nbseccion + '"' + ")'>" + titulo + "</a>";
    }
    
    referencias(pagina) {
        if ( this.paginas[pagina].referencias.length > 0 ) {
            var i=0;
            var aux="";
            for (i=0;i<this.paginas[pagina].referencias.length;i++) {
                aux += " " + this.enlaceSeccion(this.paginas[pagina].referencias[i], this.paginas[this.paginas[pagina].referencias[i]].titulo);
            }
            if (aux != "") {
                aux = "<br/><br/><u><strong>Referido por</strong></u>:" + aux;
                return aux;
            }
        }
        return "";
    }
    
    parsea(textomd) {
        var texto = textomd;
        var iniciomarca = textomd.indexOf("{{");
        while (iniciomarca != -1) {
            var finmarca = textomd.indexOf("}}",iniciomarca);
            if (finmarca != -1 ) {
                var marca = textomd.substring(iniciomarca+2,finmarca);
                if ( this.paginas.hasOwnProperty(marca) ) {
                    texto = texto.replace(textomd.substring(iniciomarca,finmarca+2), this.enlaceSeccion(marca, this.paginas[marca].titulo));
                }
            }
            iniciomarca =  textomd.indexOf("{{", iniciomarca+2);
        }
        return texto;
    }
        
        
}


let pagina=new Pagina();
let paginas=new Paginas();
cargaPaginas("AcercaDe");


