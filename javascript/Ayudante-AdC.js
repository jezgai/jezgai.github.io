
function abreMenu() {
  document.getElementById("barraMenu").style.width = "250px";
  document.getElementById("principal").style.marginLeft = "250px";
}

function cierraMenu() {
  document.getElementById("barraMenu").style.width = "0";
  document.getElementById("principal").style.marginLeft= "0";
}


function calculaencuentro() {
    var visibilidad = document.querySelector('input[name="visibilidad"]:checked').value;
    var entorno = document.getElementsByName("entorno")[0];
    
    var ndados = 3;
    switch (visibilidad) {
        case 'Normal': ndados = 3;
                        break;
        case 'Baja': ndados = 2;
                        break;
        case 'MBaja': ndados = 1;
                        break;
        default:
                        break;
    }
    var mult=3;
    if ( entorno.checked == true ) {
        mult=100;
    }
    
    var valor=0;
    var i=0;
    for(i=0;i<ndados;i++) {
        valor += Math.floor(Math.random() * 6) + 1;
    }
    valor = Math.trunc(valor*mult);
    document.getElementById("resultadoencuentro").innerHTML = "<br/><br><strong>Distancia de encuentro</strong>: " + valor + " metros.";
}

function tiradademoral() {
    var moral=document.getElementById("moral").value;
    moral = Math.trunc(moral);
    var valor = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    if ( valor <= moral ) {
        document.getElementById("resultadomoral").innerHTML = "<br/><br>Deciden <strong>seguir luchando</strong>";
    }
    else {
        document.getElementById("resultadomoral").innerHTML = "<br/><br>Se <strong>rinden</strong> o si pueden <strong>huyen</strong>";
    }
}

function lanzad6(mensajeprevio, mensajepost, idresultado) {
    var valor = Math.floor(Math.random() * 6) + 1;
    document.getElementById(idresultado).innerHTML = mensajeprevio + valor + mensajepost;
}

function lanzapericia(pericia, haybonificacion, haypenalizacion, idresultado, mensajetrue, mensajefalse) {
    var valorpericia=document.getElementById(pericia).value;
    valorpericia = Math.abs(Math.trunc(valorpericia));
    var bonificacion = 0;
    var penalizacion = 0;
    if ( haybonificacion == true ) {
        bonificacion=document.getElementById("bonificador").value;
        bonificacion = Math.abs(Math.trunc(bonificacion));
    }
    if ( haypenalizacion == true ) {
        penalizacion=document.getElementById("penalizador").value;
        penalizacion = Math.abs(Math.trunc(penalizacion));
    }
    valorpericia = valorpericia + bonificacion - penalizacion;
    var valor = Math.floor(Math.random() * 6) + 1;
    var conseguido = false;
    if ( valor <= valorpericia ) {
        if ( valor == 6 ) {
            valor = Math.abs(Math.trunc(valorpericia));
            if ( valor != 6 )
                conseguido = true;
        }
        else
            conseguido = true;
    }
    
    if ( conseguido == true ) {
        document.getElementById(idresultado).innerHTML = mensajetrue;
    }
    else {
        document.getElementById(idresultado).innerHTML = mensajefalse;
    }
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
    var tipofichero="md";
    if ( paginas.paginas[clave].hasOwnProperty("html") && paginas.paginas[clave].html == true ) {
        tipofichero="html";
    }
    var rawFile = new XMLHttpRequest();
    
    
    rawFile.open("GET", tipofichero + "/" + clave + "." + tipofichero, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            var allText = rawFile.responseText;
            if ( tipofichero == "html" ) {
                document.getElementById("contenido").innerHTML = allText + paginas.referencias(clave);
            }
            else {
                document.getElementById("contenido").innerHTML = paginas.parsea(markdown(allText)) + paginas.referencias(clave);
            }
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


