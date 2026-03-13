class Emergente {
    constructor(idEm, idCo) {
        this.idEmergente = idEm;
        this.idContenido = idCo;
    }
    inicio() {
        return "";
    }
    creaenlace(partesPagina) {
        return "";
    } 
}

class EmergentePagina extends Emergente {
    constructor() {
        super("Emergente", "contenidoEmergente");
    }
    creaenlace(partesPagina) {
        return '<a href="javascript:void(0)" onclick="muestraTextoElemento(' + "'" + partesPagina[0] + "','" + this.idContenido + "','" + this.idEmergente + "')" + '">' + partesPagina[1] + '</a>';
    }
}


class Emergentes {
    constructor() {
        this.emergentes = { Pericias: new EmergentePagina(),
                            Talentos: new EmergentePagina() }
    }
     
    inicio(pagina) {
        if ( this.emergentes.hasOwnProperty(pagina) ) {
            this.emergentes[pagina].inicio();
        }
    }
    creaenlace(partesPaginas) {
        if ( this.emergentes.hasOwnProperty(partesPaginas[0]) ) {
            return this.emergentes[partesPaginas[0]].creaenlace(partesPaginas);
        }
        return partesPaginas[0];
    }
    
}

class Tablas {
    constructor() {
        this.tablas = { nombres: { 
                            nombreF: [ "Agune", "Beatriz", "Breagan", "Bronwyn", "Cannora",
                                "Drelil", "Elgile", "Esme", "Griya", "Henaine",
                                "Lirann", "Lirathil", "Lisabeth", "Moralil", "Morgwen",
                                "Sybil", "Theune", "Wenain", "Ygwal", "Yslen" ],
                            nombreM: [ "Arwel", "Bevan", "Boroth", "Borrid", "Breagle",
                                "Breglor", "Canhoreal", "Emrys", "Ethex", "Gringle",
                                "Grinwit", "Gruwid", "Gruwth", "Gwestin", "Mannog",
                                "Melnax", "Orthax", "Triunein", "Wenlan", "Yirmeor" ],
                            apellidos: [ "Abernathy", "Addercap", "Burl", "Candlewick", "Cormick",
                                "Crumwaller", "Dunswallow", "Getri", "Glass", "Harkness",
                                "Harper", "Loomer", "Malksmilk", "Smythe", "Sunderman",
                                "Swinney", "Thatcher", "Tolmen", "Weaver", "Wolder" ]
                           },
                        trasfondos: [ "Alquimista", "Jugador", "Artista", "Carnicero", "Carpintero", "Carterista", "Cazador",
                                    "Clérigo", "Criado", "Criminal", "Enterrador", "Explorador", "Herbolario", "Herrero",
                                    "Ladrón", "Mago", "Mercader", "Mercenario", "Minero", "Contrabandista" ],
                        rasgos: { 
                                    fisico: [ "Atlético", "Flácido", "Bajo", "Gordo", "Enorme", "Larguirucho", "Escuálido", "Musculoso", "Escultural", "Robusto" ],
                                    vestimenta: [ "Antigua", "Ensangrentada", "Con barro", "Elegante", "De otro lugar", "Maloliente", "Desaliñada", "Sucia", "Deshilachada", "Uniforme" ],
                                    piel: [ "Bronceada", "Pigmentada", "Fofa", "Ronchas", "Marca de nacimiento", "Rosácea", "Marcas de viruela", "Tatuada", "Oscura", "Tirante" ],
                                    virtud: [ "Ambicioso", "Precavido", "Disciplinado", "Sereno", "Honorable", "Sociable", "Humilde", "Tolerante", "Misericordioso", "Valiente" ],
                                    cabello: [ "Abundante", "Largo", "Calvo", "Ondulado", "Encrespado", "Rizado", "Escaso", "Sucio", "Grasiento", "Trenzado" ],
                                    defecto: [ "Agresivo", "Mentiroso", "Amargado", "Nervioso", "Avaricioso", "Perezoso", "Codicioso", "Rudo", "Engreído", "Vengativo" ]
                                 }
                    };
    }
    elige(lista) {
        return lista[Math.floor(Math.random() * lista.length)];
    }
    apellido() {
        return this.elige(this.tablas.nombres.apellidos);
    }
    nombre() {
        var ret = "";    
        var d2 = Math.floor(Math.random()*2)+1;
        if ( d2 == 1 )
            ret = this.elige(this.tablas.nombres.nombreF);
        else
            ret = this.elige(this.tablas.nombres.nombreM); 
        return ret;
    }
    nombreF() {
        return this.elige(this.tablas.nombres.nombreF) + " " + this.apellido();
    }
    nombreM() {
        return this.elige(this.tablas.nombres.nombreM) + " " + this.apellido();
    }
    nombrecompleto() {
        return this.nombre() + " " + this.apellido();
    }
    trasfondos() {
        return this.elige(this.tablas.trasfondos);
    }
    rasgos(nombrerasgo) {
        if ( this.tablas.rasgos.hasOwnProperty(nombrerasgo) ) {
            return this.elige(this.tablas.rasgos[nombrerasgo]);
        }
        return "";
    }
}


function nombreF() {
    document.getElementById("resultado").innerHTML = tablas.nombreF();
}

function nombreM() {
    document.getElementById("resultado").innerHTML = tablas.nombreM();
}

function nombre() {
    document.getElementById("resultado").innerHTML = tablas.nombrecompleto();
}

function trasfondo() {
    document.getElementById("trasfondo").innerHTML = tablas.trasfondos();
                    
}

function rasgo(prefijo, nombrerasgo) {
    document.getElementById(nombrerasgo).innerHTML = prefijo + tablas.rasgos(nombrerasgo);
}

function rasgos() {
        rasgo("<strong><u>Físico</u></strong>: ", "fisico");
        rasgo("<strong><u>Vestimenta</u></strong>: ", "vestimenta");
        rasgo("<strong><u>Piel</u></strong>: ", "piel");
        rasgo("<strong><u>Virtud</u></strong>: ", "virtud");
        rasgo("<strong><u>Cabello</u></strong>: ", "cabello");
        rasgo("<strong><u>Defecto</u></strong>: ", "defecto");
}


function abreMenu() {
  document.getElementById("barraMenu").style.width = "250px";
  document.getElementById("principal").style.marginLeft = "250px";
}

function cierraMenu() {
  document.getElementById("barraMenu").style.width = "0";
  document.getElementById("principal").style.marginLeft= "0";
}

function cierraVentana(nombre) {
    document.getElementById(nombre).style.display = "none";
}

function cierraEmergente() {
    cierraVentana("Emergente");
}

function ocultaconjuro() {
    cierraVentana("Conjuro");
}

function muestraForm(idElemento) {
    document.getElementById(idElemento).style.display = "block";
}

function cierraForm(idElemento) {
    document.getElementById(idElemento).style.display = "none";
}

function calculareaccion() {
    var carisma=document.getElementById("carisma").value;
    carisma = Math.trunc(carisma);
    var modif=document.getElementById("modificador").value;
    modif = Math.trunc(modif);
    var valor = Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6) + carisma + modif;
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
    rawFile.open("GET", "json/Paje-Valido.json", true);
    
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


function muestraTextoElemento(clave, idContenido, idElemento) {
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
                document.getElementById(idContenido).innerHTML = paginas.enlaceinterno(allText) + paginas.referencias(clave);
            }
            else {
                document.getElementById(idContenido).innerHTML = paginas.parsea(marked.parse(allText)) + paginas.referencias(clave);
            }
            if ( idElemento != null) {
                document.getElementById(idElemento).style.display = "block";
                emergentes.inicio(clave);
            }
        }
    }
    rawFile.send();
    if ( idElemento == null ) {
        cierraMenu();
    }
}


function muestraTexto(clave) {
    muestraTextoElemento(clave, "contenido", null);
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
       this.menu = [ "AcercaDe", "Glosario", "CreacionPJ", "Sistema", "Combate", "Exploracion", "Curacion", "Persecuciones" ]
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
    
    creaenlace(pagina) {
        var partesPagina = pagina.split("|");
        if ( partesPagina.length >1 && partesPagina[1] == "Conjuro" ) {
            sistemaAxC.detalleconjuro=true;
            return sistemaAxC.nombreHechizo(partesPagina[0]);
        }
        else if ( partesPagina.length >1 && this.paginas.hasOwnProperty(partesPagina[0]) ) {
            return emergentes.creaenlace(partesPagina);
            //return '<a href="javascript:void(0)" onclick="muestraTextoElemento(' + "'" + partesPagina[0] + "','contenidoEmergente','Emergente')" + '">' + partesPagina[1] + '</a>';
        }
        else {
            if ( this.paginas.hasOwnProperty(pagina) ) {
                return this.enlaceSeccion(pagina, this.paginas[pagina].titulo);
            }
            else {
                return "<b>" + pagina + "</b>";
            }
        }
    }
    
    enlaceinterno(texto) {
        return texto.replace(/\{\{(.*?)\}\}/g, (_, p1) => this.creaenlace(p1));
    }
    
    parsea(textomd) {
        var texto = textomd.replace(/title="_blank"/gim,'target="_blank"');
        texto = texto.replace(/\+\+(.*?)\+\+/g, (_, p1) => "<big>" + p1 + "</big>");
        texto = texto.replace(/\^\^(.*?)\^\^/g, (_, p1) => "<small>" + p1 + "</small>");
        texto = this.enlaceinterno(texto);
        return texto;
    }
        
        
}

let tablas = new Tablas();
let emergentes=new Emergentes();
let pagina=new Pagina();
let paginas=new Paginas();
cargaPaginas("AcercaDe");

