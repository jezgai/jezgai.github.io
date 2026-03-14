
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
       this.puntosfortuna = { };
       this.combate = { };
       this.conceptos = { };
       this.pericias = { };
       this.talentos = { };
    }
    
    
    enlaceSeccion(nbseccion, titulo) {
        return "<a href='javascript:void(0)' onclick='muestraTexto(" + '"' + nbseccion + '"' + ")'>" + titulo + "</a>";
    }
    
    descripcion(nombre, clave) {
        if (this.hasOwnProperty(clave) && this[clave].hasOwnProperty(nombre) )
            return this[clave][nombre];
        return nombre;
    }
    
    talento(nombre) {
        return this.descripcion(nombre, "talentos");
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
        
        //if ( partesPagina.length >1 && partesPagina[1] == "Conjuro" ) {
        //    return Conjuro(partesPagina[0]);
        //    //sistemaAxC.detalleconjuro=true;
        //    //return sistemaAxC.nombreHechizo(partesPagina[0]);
        //}
        
        if ( partesPagina.length > 1 && funciones.existe(partesPagina[1])) {
            return funciones.pinta(partesPagina[1], pagina);
        }
        else {
            var nombrepagina = pagina;
            var titulopagina = "";
            if (partesPagina.length > 1) {
                nombrepagina = partesPagina[0];
                titulopagina = partesPagina[1];
            }
            if ( this.paginas.hasOwnProperty(nombrepagina) ) {
                if ( titulopagina == "" )
                    titulopagina = this.paginas[nombrepagina].titulo;
                return this.enlaceSeccion(nombrepagina, titulopagina);
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

class Funcion {
    constructor() {
    }
    pinta(strparametros) {
        var parametros = strparametros.split("|");
        if ( parametros != null && parametros.length >= 1 )
            return parametros[0];
        return "Sin definir";
    }
    ejecuta(strparametros) {
        var parametros = strparametros.split("|");
        if ( parametros != null && parametros.length >= 1 )
            return parametros[0];
        return "Sin definir";
    }
}


class TiradaMdI extends Funcion {
    constructor() {
        super();
    }
    pinta(strparametros) {
        var parametros = strparametros.split("|");
        return "<a href='javascript:void(0)' onclick='funciones.funcion(" + '"TiradaMdI").ejecuta("' + strparametros + '")' + "'>" + parametros[2] + '</a>';    
    }
    ejecuta(strparametros) {        
        var resultado = this.tiraDadod6();
        document.getElementById("detalleEmergente").innerHTML = "<strong>Resultado</strong>: " + resultado.valor + " (dados:" + resultado.dados + ")<br/>";
        document.getElementById("Emergente").style.display = "block";
    }
    
    tiraDadod6() {
        var resultado = {};
        var d6 = Math.trunc((Math.random() * 6) + 1);
        if ( d6 == 6 ) {
            resultado = { valor: 5, dados: " 6" };
            var explosion = this.tiraDadod6();
            resultado.valor += explosion.valor;
            resultado.dados += explosion.dados;
        }
        else {
            resultado = { valor: d6, dados: " " + d6 };
        }
        return resultado;
    }
}


class Descripcion extends Funcion {
    constructor() {
        super();
    }
    pinta(strparametros) {
        var parametros = strparametros.split("|");
        return "<a href='javascript:void(0)' onclick='funciones.funcion(" + '"Descripcion").ejecuta("' + strparametros + '")' + "'>" + parametros[0] + '</a>';    
    }
    ejecuta(strparametros) {
        var parametros = strparametros.split("|");
        var descripcion = parametros[0];
        if (paginas.hasOwnProperty(parametros[2])) {
            
            descripcion = paginas.descripcion(parametros[0],parametros[2]);
        }
        
        document.getElementById("detalleDescripcion").innerHTML = "<strong>" + parametros[0] + "</strong>: " + paginas.enlaceinterno(descripcion) + "<br/>";
        muestraElemento("Descripciones");
    }
}

class Funciones {
    constructor() {
        this.funciones = { "Default": new Funcion(), "TiradaMdI": new TiradaMdI(), "Descripcion": new Descripcion() };
    }
    existe(nombre) {
        if ( this.funciones.hasOwnProperty(nombre) )
            return true
        return false;
    }
    funcion(nombre) {
        if ( this.funciones.hasOwnProperty(nombre) )
            return this.funciones[nombre];
        return this.funciones["Default"];
    }
    pinta(nombre, parametros) {
        return this.funcion(nombre).pinta(parametros);
    }
    ejecuta(nombre, parametros) {
        return this.funcion(nombre).ejecuta(parametros);
    }
    
}


let funciones = new Funciones();
let pagina=new Pagina();
let paginas=new Paginas();
cargaPaginas("AcercaDe");
	
//let clases = new Clases();
//let conjurosAxM = new AxM();


