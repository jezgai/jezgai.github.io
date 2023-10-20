
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
		this.monedas = new Moneda();
		this.arma = null;
		this.armadura = null;
		this.pertrechos = [];
	}
	
	static asignanombre() {
		var nombres = [ "Andrea", "Asder", "Barrek", "Brilda", "Desmond", "Dis", "Drix", "Ellisar", "Farändulin", "Finace", "Garnin", 
						"Gathar", "Gomin", "Gurglia", "Nedri", "Quintan", "Saeir", "Thali", "Tomann", "Vadan", "Vaola", "Ylin" ];
		return nombres[Comun.random(nombres.length, 0)];
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
	
	tablaResto() {
		var resto = "<table class='w3-table  w3-striped w3-border'>";
		resto += "<tr><td><strong>PV</strong></td><td>" + this.pv + "</td></tr>";
		resto += "<tr><td><strong>PD</strong></td><td>" + this.pd + "</td></tr>";
		resto += "<tr><td><strong>Nivel</strong></td><td>" + this.nivel + "</td></tr>";
		if ( this.arma != null )
			resto += "<tr><td><strong>Arma</strong></td><td>" + this.arma.nombre + " (daño " + this.daño + ")</td></tr>";
		if ( this.armadura != null)
			resto += "<tr><td><strong>Armadura</strong></td><td>" + this.armadura.nombre + " (du: " + this.armadura.du + ") (abs: " + this.armadura.abs + ")</td></tr>";
		resto += "<tr><td><strong>Monedas</strong></td><td>" + this.monedas.po + " PO, " + this.monedas.pp + " PP, " + this.monedas.pc + " PC</td></tr></table>";
		resto += this.apartadoEquipo();
		resto += this.apartadoProdigios();
		return resto;
	}
	
	apartadoEquipo() {
		if ( this.pertrechos == null || this.pertrechos.length <= 0)
			return "";
		var sequipo = "<h2>Pertrechos</h2>";
		sequipo += "<table class='w3-table  w3-striped w3-border'><tr><th>Pertrecho</strong></th><th>du</th></tr>";
		var i=0;
		for (i=0; i<pj.pertrechos.length; i++) {
			sequipo += "<tr><td>" + pj.pertrechos[i].nombre + "</td><td>" + pj.pertrechos[i].du + "</td></tr>";
		}
		return sequipo;
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
		
		this.nombre = CR_PJ.asignanombre();
		this.nivel = Math.trunc(nivelpj);
		
		this.objVia = vias.via(nombrevia);
		this.FUE = CR_PJ.calculaatributo(0);
		this.DES = CR_PJ.calculaatributo(this.FUE);
		this.CON = CR_PJ.calculaatributo(this.DES);
		this.INT = CR_PJ.calculaatributo(this.CON);
		this.SAB = CR_PJ.calculaatributo(this.INT);
		this.CAR = CR_PJ.calculaatributo(this.SAB);
		
		this.monedas.carga(Comun.dados(3,6,0,1), 0, 0);
		
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
		
		var precio=this.monedas.conviertepc() + 1;
		i=0;
		var tmpobj=null;
		while (precio > this.monedas.conviertepc() && i<5) {
			
			if ( this.objVia.armas.length > 0 ) {
				tmpobj = armas.arma(this.objVia.armas[Comun.random(this.objVia.armas.length, 0)]);
			}
			else {
				tmpobj = armas.arma("random");
			}
			precio = tmpobj.precio;
			i++;
		}
		
		if ( precio > this.monedas.conviertepc() )
		{
			this.arma = null;
			this.daño = "";
		}	
		else 
		{
			this.arma = tmpobj;
			this.daño = pj.arma.daño.ndados + "d" + pj.arma.daño.tdado;
			if ( pj.arma.daño.modificador > 0 )
				this.daño += "+" + pj.arma.daño.modificador;
			else if ( pj.arma.daño.modificador < 0 )
				this.daño += pj.arma.daño.modificador;
			
			this.monedas.gasta(this.arma.precio);
		}
		
		tmpobj = null;
		precio=this.monedas.conviertepc() + 1;
		i=0;
		while (precio > this.monedas.conviertepc() && i<5) {
			
			if ( this.objVia.armaduras.length > 0 ) {
				tmpobj = armaduras.armadura(this.objVia.armaduras[Comun.random(this.objVia.armaduras.length, 0)]);
			}
			else {
				tmpobj = armaduras.armadura("random");
			}
			precio = tmpobj.precio;
			i++;
		}
		
		
		if ( precio > this.monedas.conviertepc() )
		{
			this.armadura = null;
		}	
		else 
		{
			this.armadura = tmpobj;			
			this.monedas.gasta(this.armadura.precio);
		}
				
		var equipo = Comun.shuffle(pertrechos.pertrechos.clone());
		i=0;
		var indice=0;
		while (this.monedas.conviertepc() > 300 && i < 3 && indice < equipo.length) {
			if ( equipo[indice].precio + 300 < this.monedas.conviertepc() ) {
				this.pertrechos.push(equipo[indice]);
				this.monedas.gasta(equipo[indice].precio);
				i++;
			}
			indice++;
		}
		
	}
	
	static rellenaPDFPJ(fields, pj ) {
		fields['Nombre'] = [ pj.nombre ];
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
		var prodigiosypertrechos = "";
		if ( pj.circulos.length > 0 ){
			prodigiosypertrechos = "Número de prodigios por círculo que puede hacer.";
			for (i=0; i<pj.circulos.length; i++) {
				prodigiosypertrechos += "\n- Circulo " + (i+1) + ": " + pj.circulos[i];
			}
		}
		if (pj.pertrechos.length>0) {
			if (prodigiosypertrechos != "")
				prodigiosypertrechos+="\n\n";
			prodigiosypertrechos+="Pertrechos";
			for (i=0; i<pj.pertrechos.length; i++) {
				prodigiosypertrechos += "\n- " + pj.pertrechos[i].nombre + " (du: " + pj.pertrechos[i].du + ")";
			}
		}
		
		fields[ 'ProdigiosPertrechos' ] = [ prodigiosypertrechos ];
		fields[ 'PO' ] = [ pj.monedas.po ];
		fields[ 'PP' ] = [ pj.monedas.pp ];
		fields[ 'PC' ] = [ pj.monedas.pc ];
		
		i=1;
		if ( pj.arma != null ) {
			fields[ 'Arma1' ] = [ pj.arma.nombre ];
			fields[ 'Dg1' ] = [ pj.daño ];
			i++
		}
		
		if ( pj.armadura != null ) {
			fields[ 'Arma' + i ] = [ pj.armadura.nombre ];
			fields[ 'Du' + i ] = [ pj.armadura.du ];
			fields[ 'Abs' + i ] = [ pj.armadura.abs ];
		}
		
		return fields;
	}
	
	
	rellenaPDF() {
		
		var fields = {};
		fields = CR_PJ.rellenaPDFPJ(fields, this, "");
		
		return fields;
				
	}
	
}
