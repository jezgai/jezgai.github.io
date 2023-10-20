
class CR_PJ {
	
	constructor() {
		this.nombre = '';
		this.genero = "";
		this.nivel = 1;
		
		this.FUE = 0;
		this.DES = 0;
		this.CON = 0;
		this.INT = 0;
		this.SAB = 0;
		this.CAR = 0;
		
		this.pv = 0;
		this.pd = 1;
		
		this.objVia = null;
		this.rasgospj = [];
		this.atributo = "";
		this.circulos = [];
	}
	
	static calculaatributo(valorant) {
		var ndados = 3;
		var modificador = 0;
		if (valorant >= 14) {
			ndados = 2;
			modificador = 2;
		}
		var valor = Comun.dados(ndados,6,modificador,1);
		return valor;
	}
	
	atributoprincipal(atr) {
		if ( atr == this.atributo ) {
			return " (*) ";
		}
		return "";
	}
	
	tablaAtributos() {
		var iatrb = 0;
		var satrs = "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</strong></th><th>Valor</th></tr>";
		satrs += "<tr><td>FUE</td><td align='center'>" + this.FUE + this.atributoprincipal("FUE") + "</td></tr>";
		satrs += "<tr><td>DES</td><td align='center'>" + this.DES + this.atributoprincipal("DES") + "</td></tr>";
		satrs += "<tr><td>CON</td><td align='center'>" + this.CON + this.atributoprincipal("CON") + "</td></tr>";
		satrs += "<tr><td>INT</td><td align='center'>" + this.INT + this.atributoprincipal("INT") + "</td></tr>";
		satrs += "<tr><td>SAB</td><td align='center'>" + this.SAB + this.atributoprincipal("SAB") + "</td></tr>";
		satrs += "<tr><td>CAR</td><td align='center'>" + this.CAR + this.atributoprincipal("CAR") + "</td></tr>";
		satrs += "</table>";
		return satrs;
	}
	
	apartadoRasgos() {
		if ( this.rasgospj == null || this.rasgospj.length <= 0) 
			return "";
		var srasgos = "<strong>" + this.rasgospj[0] + "</strong>: " + lrasgos.rasgo(this.rasgospj[0]).descripcion;
		var i=0;
		for (i=1;i<this.rasgospj.length; i++) {
			srasgos += "<br/><strong>" + this.rasgospj[i] + "</strong>: " + lrasgos.rasgo(this.rasgospj[i]).descripcion;
		}
		return srasgos;
		
	}
	
	apartadoProdigios() {
		var prodigios="";
		if ( pj.circulos.length > 0 ){
			prodigios = "<h2>Prodigios</h2>";			
			prodigios += "<table class='w3-table  w3-striped w3-border'><tr><th>Círculo</strong></th><th>Número</th></tr>";
			
			var i=0;
			for (i=0; i<pj.circulos.length; i++) {
				prodigios += "<tr><td>" + (i+1) + "</td><td>" + pj.circulos[i] + "</td></tr>";
			}
			prodigios += "</table>";
		}
		return prodigios;
	}
	
	
	cambiavia() {
		if ( this.objVia != null && nombrevia != this.objVia.nombre ) {
			this.genera();
		}
	}
	
	progresionatributo(valor, atr) {
		var tirada = Comun.random(20,1);
		if ( tirada > valor )
			return 1;
		if ( atr == this.atributo ) {
			tirada = Comun.random(20,1);
			if ( tirada > valor )
				return 1;
		}
		return 0;
	}
	
	genera() {
		
		this.nivel = Math.trunc(nivelpj);
		
		this.objVia = vias.via(nombrevia);
		this.FUE = CR_PJ.calculaatributo(0);
		this.DES = CR_PJ.calculaatributo(this.FUE);
		this.CON = CR_PJ.calculaatributo(this.DES);
		this.INT = CR_PJ.calculaatributo(this.CON);
		this.SAB = CR_PJ.calculaatributo(this.INT);
		this.CAR = CR_PJ.calculaatributo(this.SAB);
		
		this.pv = this.objVia.ptosvida(this.nivel);
		
		var rasgoini = Comun.random(this.objVia.rasgos.length,0);
		this.rasgospj = [];
		this.rasgospj.push(this.objVia.rasgos[rasgoini]);
		this.atributo = lrasgos.rasgo(this.objVia.rasgos[rasgoini]).atributo;
		//this.rasgospj = this.objVia.rasgos.clone();
		var rasgosadicionales = Math.trunc(this.nivel/3);
		var i=0;
		var rasgosgenericos = Comun.shuffle(lrasgos.genericos().clone());
		for (i=0;i<rasgosadicionales;i++) {
			this.rasgospj.push(rasgosgenericos[i].nombre);
		}
		if ( this.objVia.circulos.length > 0 ) {
			this.circulos = this.objVia.circulos[this.nivel-1];
		}
		//this.atributo = this.objVia.atributo[Comun.random( this.objVia.atributo.length, 0)];
		
		for (i=1;i<this.nivel; i++) {
			this.FUE += this.progresionatributo(this.FUE, "FUE");
			this.DES += this.progresionatributo(this.DES, "DES");
			this.CON += this.progresionatributo(this.CON, "CON");
			this.INT += this.progresionatributo(this.INT, "INT");
			this.SAB += this.progresionatributo(this.SAB, "SAB");
			this.CAR += this.progresionatributo(this.CAR, "CAR");
		}
		
	}
	
	static rellenaPDFPJ(fields, pj ) {
		fields['Nombre'] = [ "" ];
		fields['Nivel' ] = [ pj.nivel ];
		fields['Via' ] = [ pj.objVia.nombre ];
		fields['Pv' ] = [ pj.pv ];
		fields['Pd' ] = [ 1 ];
		fields['FUE' ] = [ pj.FUE ];
		fields['DES' ] = [ pj.DES ];
		fields['CON' ] = [ pj.CON ];
		fields['INT' ] = [ pj.INT ];
		fields['SAB' ] = [ pj.SAB ];
		fields['CAR' ] = [ pj.CAR ];
		
		fields[ pj.atributo + "ck" ] = [ true ];
		
		var i=0;
		fields[ 'Rasgo' ] = [ pj.rasgospj[0] ];
		var srasgos = "Rasgos\n- " + pj.rasgospj[0] + ": " + lrasgos.rasgo(pj.rasgospj[0]).descripcion;
		for (i=1;i<pj.rasgospj.length; i++) {
			fields[ 'RasgoAdicional' + i ] = [ pj.rasgospj[i] ];
			srasgos += "\n- " + pj.rasgospj[i] + ": " + lrasgos.rasgo(pj.rasgospj[i]).descripcion;
		}
		fields[ 'DescripcionNotas' ] = [ srasgos ];
		if ( pj.circulos.length > 0 ){
			var prodigios = "Número de prodigios por círculo que puede hacer.";
			for (i=0; i<pj.circulos.length; i++) {
				prodigios += "\n- Circulo " + (i+1) + ": " + pj.circulos[i];
			}
			fields[ 'ProdigiosPertrechos' ] = [ prodigios ];
		}
		
		return fields;
	}
	
	
	rellenaPDF() {
		
		var fields = {};
		fields = CR_PJ.rellenaPDFPJ(fields, this, "");
		
		return fields;
				
	}
	
}
