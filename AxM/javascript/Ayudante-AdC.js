
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
       this.bestiario = { };
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



class Conjuros extends Funcion {
    constructor() {
        super();
    }
    pinta(strparametros) {
        var parametros = strparametros.split("|");
        return "<a href='javascript:void(0)' onclick='funciones.funcion(" + '"Conjuro").ejecuta("' + strparametros + '")' + "'>" + parametros[0] + '</a>';
    }
    ejecuta(strparametros) {
        var parametros = strparametros.split("|");
        var nombre = parametros[0];
        var hechizo = sistemaAxC.hechizos.Hechizos[nombre];
        var texto = "<h2>Conjuro: " + nombre + "</h2>";
        var i=0;
        var aNiveles = Object.keys(hechizo.Nivel);
        var niveles = "";
        for (i=0;i<aNiveles.length;i++) {
            niveles += aNiveles[i] + " (" + hechizo.Nivel[aNiveles[i]] + "). ";
        }
        texto += "<ul><li><b>Nivel</b>: " + niveles + "</li>";
        texto += "<li><b>Categoría</b>: " + hechizo.Categoria + "</li>";
        texto += "<li><b>Efectos</b>: "+ hechizo.Descripción + "</li>";
        texto += "<li><b>Alcance</b>: " + hechizo.Alcance + "</li>";
        texto += "<li><b>Duración</b>: " + hechizo.Duración + "</li>";
        texto += "<li><b>Resistencia</b>: " + hechizo.Resistencia + "</li></ul>";
        
        document.getElementById("detalleEmergente").innerHTML = texto;
        muestraElemento("Emergente");
    }    
}


class DadoGolpe extends Funcion {
    constructor() {
        super();
    }
    pinta(strparametros) {
        var parametros = strparametros.split("|");
        return "<a href='javascript:void(0)' onclick='funciones.funcion(" + '"DadoGolpe").ejecuta("' + strparametros + '")' + "'>" + parametros[0] + '</a>';    
    }
    ejecuta(strparametros) {
        var parametros = strparametros.split("|");
        var dado = parseInt(parametros[2], 10)
        var pg = Math.trunc( (Math.random() * dado) + 1);
        
        document.getElementById("detalleDescripcion").innerHTML = "<strong>" + parametros[0] + "</strong>:<br/>PG " + pg + "<br/>";
        muestraElemento("Descripciones");
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
        this.funciones = { "Default": new Funcion(), "DadoGolpe": new DadoGolpe(), "Descripcion": new Descripcion(), "Conjuro": new Conjuros() };
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
	
let clases = new Clases();
let conjurosAxM = new AxM();


