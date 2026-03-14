
function muestraElemento(nombre) {
    document.getElementById(nombre).style.display = "block";
}

function ocultaElemento(nombre) {
    document.getElementById(nombre).style.display = "none";
}

function ocultaEmergente() {
    ocultaElemento("Emergente");
}

function abreMenu() {
  document.getElementById("barraMenu").style.width = "250px";
  document.getElementById("principal").style.marginLeft = "250px";
}

function cierraMenu() {
  document.getElementById("barraMenu").style.width = "0";
  document.getElementById("principal").style.marginLeft= "0";
}

function muestraForm(idElemento) {
    muestraElemento(idElemento);
}

function cierraForm(idElemento) {
    ocultaElemento(idElemento);
}

function calculareaccion() {
    var carisma=document.getElementById("carisma").value;
    carisma = Math.trunc(carisma);
    var modif=document.getElementById("modificador").value;
    modif = Math.trunc(modif);
    //var valor = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + carisma + modif;
    var valor = Comun.random(6,0) + Comun.random(6,0) + carisma + modif;    
    
    var reaccion = "Amistoso";
    if ( valor <= 2 ) {
        reaccion = "Hostil";
    }
    else if ( valor <= 5 ) {
        reaccion = "Antipático";
    }
    else if ( valor <= 8 ) {
        reaccion = "Indeciso";
    }
    else if ( valor <= 11) {
        reaccion = "Indiferente";
    }
    document.getElementById("resultadoreaccion").innerHTML = "<br/>La reacción de los PNJ es: <strong>" + reaccion + "</strong>";
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
        //valor += Math.floor(Math.random() * 6) + 1;        
        valor += Comun.random(6,1);
    }
    valor = Math.trunc(valor*mult);
    document.getElementById("resultadoencuentro").innerHTML = "<br/><br><strong>Distancia de encuentro</strong>: " + valor + " metros.";
}

function tiradademoral() {
    var moral=document.getElementById("moral").value;
    moral = Math.trunc(moral);
    //var valor = Math.floor(Math.random() * 6) + 1 + Math.floor(Math.random() * 6) + 1;
    var valor = Comun.random(6,1) + Comun.random(6,1);
    if ( valor <= moral ) {
        document.getElementById("resultadomoral").innerHTML = "<br/><br>Deciden <strong>seguir luchando</strong>";
    }
    else {
        document.getElementById("resultadomoral").innerHTML = "<br/><br>Se <strong>rinden</strong> o si pueden <strong>huyen</strong>";
    }
}

function lanzadado(dado, mensajeprevio, mensajepost) {
    var valor = Comun.random(Math.trunc(dado),1);
    
    return mensajeprevio + valor + mensajepost;
}

function lanzad6(mensajeprevio, mensajepost, idresultado) {
    document.getElementById(idresultado).innerHTML = lanzadado(6, mensajeprevio, mensajepost);
}

function tiradainiciativa() {
    lanzad6('La <strong>iniciativa</strong> de los <strong>PNJ</strong> es: ','','iniciativapnj');
    lanzad6('La <strong>iniciativa</strong> de los <strong>PJ</strong> es: ','. Cada <strong>PJ</strong> debe <strong>añadir</strong> su <strong>DES</strong>', 'iniciativapj');
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
    //var valor = Math.floor(Math.random() * 6) + 1;
    var valor = Comun.random(6,1);
    
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
    rawFile.open("GET", "json/Paje-Valido.json", true);
    
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
	        var allText = rawFile.responseText;
	        var ficherojson = JSON.parse(allText);
	        paginas.paginas = ficherojson.Paginas;
	        pagina.menu = ficherojson.Menu;
	        pagina.titulo = ficherojson.Titulo;
	        pagina.muestraMenu();
	        paginas.puntosfortuna = ficherojson.PuntosFortuna;
	        paginas.combate = ficherojson.Combate;
	        paginas.pericias = ficherojson.Pericias;
	        paginas.talentos = ficherojson.Talentos;
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
                document.getElementById("contenido").innerHTML = paginas.enlaceinterno(allText) + paginas.referencias(clave);
            }
            else {
                document.getElementById("contenido").innerHTML = paginas.parsea(marked.parse(allText)) + paginas.referencias(clave);
            }
        }
    }
    rawFile.send();
    cierraMenu();
}

function Conjuro(nombreConjuro) {
    sistemaAxC.detalleconjuro=true;
    return sistemaAxC.nombreHechizo(nombreConjuro);
}
