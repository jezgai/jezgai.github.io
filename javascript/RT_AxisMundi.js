class AxisMundi {

	static cargapersonaje() {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
		document.getElementById("dados").innerHTML = "<img src='imagenes/d4.png' onclick='RolTelegram.tiradado(4)' alt='Dado d4' class='mano'/>" +
		"<img src='imagenes/d6.png' onclick='RolTelegram.tiradado(6)' alt='Dado d6' class='mano'/>" + 
		"<img src='imagenes/d8.png' onclick='RolTelegram.tiradado(8)' alt='Dado d8' class='mano'/>" + 
		"<img src='imagenes/d10.png' onclick='RolTelegram.tiradado(10)' alt='Dado d10' class='mano'/>" + 
		"<img src='imagenes/d12.png' onclick='RolTelegram.tiradado(12)' alt='Dado d12' class='mano'/>" + 
		"<img src='imagenes/d20.png' onclick='RolTelegram.tiradado(20)' alt='Dado d20' class='mano'/>";
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Atributos</strong></p></div>";
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indiceatr=0; indiceatr< personaje.atributos.length; indiceatr++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradaatr(" + indiceatr +")'>" + personaje.atributos[indiceatr].nbatr + "</span></td><td>" + personaje.atributos[indiceatr].valor + " (" + personaje.atributos[indiceatr].modif + ")</td></tr>";
		}
		seccion += "</table>";
		document.getElementById("seccion1").innerHTML = seccion;
		
		
		//seccion = "<h2>Atributos</h2>";
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv")' + "' >" + personaje.pv + "</td></tr>";
		seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc")' + "' >" + personaje.cacc + "</td></tr>";
		seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad")' + "' >" + personaje.caad + "</td></tr>";
		seccion += "<tr><td>Ataque (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquecc")' + "' >" + personaje.ataquecc + "</td></tr>";
		seccion += "<tr><td>Ataque (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquead")' + "' >" + personaje.ataquead + "</td></tr>";
		seccion += "<tr><td>Barridos</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"barridos")' + "' >" + personaje.barridos + "</td></tr>";
		
		seccion += "</table>";
		document.getElementById("seccion2").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje.salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradasalv(" + indice +")'>" + personaje.salvaciones[indice].nombre + "</span></td><td>" + personaje.salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table>";
		document.getElementById("seccion3").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Pericias</strong></p></div>";
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje.pericias.length; indice++) {
			if (personaje.pericias[indice].tipo == "Básica")
				seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice +")'>" + personaje.pericias[indice].pericia + "</span></td><td>" + personaje.pericias[indice].puntos  + "</td></tr>";
		}
		seccion += "</table>";
		
		var seccionbis = "";
		for (indice=0; indice<personaje.pericias.length; indice++) {
			if (personaje.pericias[indice].tipo == "Avanzada")
				seccionbis += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice +")'>" + personaje.pericias[indice].pericia + "</span></td><td>" + personaje.pericias[indice].puntos  + "</td></tr>";
		}
		if ( seccionbis != "" ) {
			seccion += "<div class='w3-container w3-blue w3-center'><p class='mano' onclick='AxisMundi.tiradapericia(0)'><strong>Pericias avanzadas</strong></p></div>" + "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
			seccion += seccionbis;
			seccion += "</table>";
		}
		document.getElementById("seccion4").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		for (indice=0; indice<personaje.armas.length; indice++) {
			var daño="";
			var funcion="";
			var usoalternativo = "";
			if ( personaje.armas[indice].tipo == "CaC" ) {
				daño = "d" + personaje.armas[indice].danoCaC;
				funcion = "AxisMundi.tiradaarmaCaC";
				if ( personaje.armas[indice].danoAD != 0 ) {
					daño += " (d" + personaje.armas[indice].danoAD + ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaAD("+ indice + ")'>(A distancia)</span>"
				}
			}
			else {
				daño = "d" + personaje.armas[indice].danoAD;
				funcion = "AxisMundi.tiradaarmaAD";
				if ( personaje.armas[indice].danoCaC != 0 ) {
					daño += " (d" + personaje.armas[indice].danoCaC + ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaCaC("+ indice + ")'>(Cuerpo a cuerpo)</span>"
				}
			}
			
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "(" + indice +")'>" + personaje.armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + personaje.armas[indice].tipo  + "</td></tr>";
		}
		seccion += "</table>";
		var numeroseccion = 5;
		if ( seccionbis != "" )
			document.getElementById("seccion1").innerHTML += seccion;
		else {
			document.getElementById("seccion5").innerHTML = seccion;
			numeroseccion++;
		}
		
		seccion = "";
		for (indice=0; indice<personaje.conjuros.length; indice++) {
			seccion += "<tr><td>" + personaje.conjuros[indice] + "</td></tr>";
		}
		if ( seccion != "" ) {
			seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Conjuros</strong></p></div>" + "<table class='w3-table  w3-striped w3-border'>" + seccion + "</table>";
			document.getElementById("seccion" + numeroseccion).innerHTML = seccion;
			numeroseccion ++;
		}
		
			
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Características especiales</strong></p></div>";
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<personaje.caracteristicas.length; indice++) {
			seccion += "<tr><td>" + personaje.caracteristicas[indice] + "</td></tr>";
		}
		seccion += "</table>";
		document.getElementById("seccion7").innerHTML = seccion;
					
	}
	
	static modificacaracteristica(caracteristica) {
		var valor = document.getElementById('vcaracteristica').value;
		if ( caracteristica == "pv" ) {
			personaje.pv = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "cacc" ) {
			personaje.cacc = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "caad" ) {
			personaje.caad = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "ataquecc" ) {
			personaje.ataquecc = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "ataquead" ) {
			personaje.ataquead = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "barridos" ) {
			personaje.barridos = document.getElementById('vcaracteristica').value;
		}
		document.getElementById('ccaracteristica').style.display='none';
		AxisMundi.cargapersonaje();
	}
	
	static cancelamodifcaracteristica() {
		document.getElementById('ccaracteristica').style.display='none';
	}

	static cambiacaracteristica(caracteristica) {
		var literal = "";
		var valor = "";
		if ( caracteristica == "pv" ) {
			literal = "PV";
			valor = personaje.pv;
		}
		else if ( caracteristica == "cacc" ) {
			literal = "CA CC";
			valor = personaje.cacc;
		}
		else if ( caracteristica == "caad" ) {
			literal = "CA AD";
			valor = personaje.caad;
		}
		else if ( caracteristica == "ataquecc" ) {
			literal = "Ataque CC";
			valor = personaje.ataquecc;
		}
		else if ( caracteristica == "ataquead" ) {
			literal = "Ataque AD";
			valor = personaje.ataquead;
		}
		else if ( caracteristica == "barridos" ) {
			literal = "Barridos";
			valor = personaje.barridos;
		}
		if ( literal != "" ){
			document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>" + literal + "</label>";
			document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='AxisMundi.modificacaracteristica(" + '"' + caracteristica + '"' + ")'>Modifica</button>";
			document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='AxisMundi.cancelamodifcaracteristica()'>Cancela</button>";
			document.getElementById('vcaracteristica').value = valor;
			document.getElementById('ccaracteristica').style.display='block';
		}
	}
	
	static tiradaatr(indice) {
		var valor = RolTelegram.random(20, 1);
		var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.atributos[indice].nbatr + " (" +  personaje.atributos[indice].valor + ")[SL]<b>Resultado: </b>" + valor;
		RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	}
	
	static tiradasalv(indice) {
		var valor = RolTelegram.random(20, 1);
		var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.salvaciones[indice].nombre + " (" +  personaje.salvaciones[indice].valor + ")[SL]<b>Resultado: </b>" + valor;
		RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	}
	
	static tiradapericia(indice) {
		var valor = RolTelegram.random(6, 1);
		var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.pericias[indice].pericia + " (" +  personaje.pericias[indice].puntos + ")[SL]<b>Resultado: </b>" + valor;
		RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	}
	  
	
	static tiradaarmaCaC(indice) {
		var valor = RolTelegram.random(20, 1);
		var daño = RolTelegram.random(personaje.armas[indice].danoCaC,1);
		if ( personaje.tipobonifdaño == "CC" || personaje.tipobonifdaño == "CC y AD" )
			daño += personaje.daño;
		var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.armas[indice].nombre + " (CaC)[SL]<b>Resultado: </b>" + (valor + personaje.ataquecc) + " (" + valor + ")[SL]<b>Daño: </b>" + daño;
		RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	}
	
	static tiradaarmaAD(indice) {
		var valor = RolTelegram.random(20, 1);
		var daño = RolTelegram.random(personaje.armas[indice].danoAD,1);
		if ( personaje.tipobonifdaño == "AD" || personaje.tipobonifdaño == "CC y AD" )
			daño += personaje.daño;
		var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.armas[indice].nombre + " (AD)[SL]<b>Resultado: </b>" + (valor + personaje.ataquead) + " (" + valor + ")[SL]<b>Daño: </b>" + daño;
		RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	}
}
