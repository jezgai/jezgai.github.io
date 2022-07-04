class AxisMundi {

	static cargapersonaje(pjs) {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
				
		seccion = "<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4," + (numpj-1) + ",1)' alt='Dado d4' class='mano'/>" +
		"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpj-1) + ",1)' alt='Dado d6' class='mano'/>" + 
		"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8," + (numpj-1) + ",1)' alt='Dado d8' class='mano'/>" + 
		"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10," + (numpj-1) + ",1)' alt='Dado d10' class='mano'/>" + 
		"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12," + (numpj-1) + ",1)' alt='Dado d12' class='mano'/>" + 
		"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20," + (numpj-1) + ",1)' alt='Dado d20' class='mano'/>" +
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  personaje[numpj-1].nombre + '"' + ")' alt='" + personaje[numpj-1].nombre + " habla' class='mano'/>";
		//"<p><button class='w3-button w3-block w3-blue' onclick='RolSolo.muestraventanamensajes(" + '"' +  personaje[numpj-1].nombre + '"' + ")'>Habla</button></p></div>";
		
		
		seccion += "<div onclick=" + '"' + "RolSolo.acordeon('pjatributos" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Atributos</strong></p></div>";
		seccion += "<div id='pjatributos" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table  class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indiceatr=0; indiceatr< personaje[numpj-1].atributos.length; indiceatr++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradaatr(" + indiceatr + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].atributos[indiceatr].nbatr + "</span></td><td>" + personaje[numpj-1].atributos[indiceatr].valor + " (" + personaje[numpj-1].atributos[indiceatr].modif + ")</td></tr>";
		}
		seccion += "</table></div>";
		pjs+= seccion;
		//document.getElementById("seccion1").innerHTML = seccion;
		
		
		//seccion = "<h2>Atributos</h2>";
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjcaracteristicas" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<div id='pjcaracteristicas" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].pv + "</td></tr>";
		seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].cacc + "</td></tr>";
		seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].caad + "</td></tr>";
		seccion += "<tr><td>Ataque (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquecc",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].ataquecc + "</td></tr>";
		seccion += "<tr><td>Ataque (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquead",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].ataquead + "</td></tr>";
		seccion += "<tr><td>Barridos</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"barridos",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].barridos + "</td></tr>";
		
		seccion += "</table></div>";
		pjs+= seccion;
		//document.getElementById("seccion2").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjsalvaciones" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<div id='pjsalvaciones" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje[numpj-1].salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradasalv(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].salvaciones[indice].nombre + "</span></td><td>" + personaje[numpj-1].salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table></div>";
		pjs+= seccion;
		//document.getElementById("seccion3").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjpericias" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Pericias</strong></p></div>";
		seccion += "<div id='pjpericias" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje[numpj-1].pericias.length; indice++) {
			if (personaje[numpj-1].pericias[indice].tipo == "Básica")
				seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].pericias[indice].pericia + "</span></td><td>" + personaje[numpj-1].pericias[indice].puntos  + "</td></tr>";
		}
		seccion += "</table>";
		
		var seccionbis = "";
		for (indice=0; indice<personaje[numpj-1].pericias.length; indice++) {
			if (personaje[numpj-1].pericias[indice].tipo == "Avanzada")
				seccionbis += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].pericias[indice].pericia + "</span></td><td>" + personaje[numpj-1].pericias[indice].puntos  + "</td></tr>";
		}
		if ( seccionbis != "" ) {
		    seccion += "<div onclick=" + '"' + "RolSolo.acordeon('pjpericiasav" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Pericias avanzadas</strong></p></div>";
			seccion += "<div id='pjpericiasav" + (numpj-1) + "' class='w3-hide w3-container' >"
			//seccion += "<div class='w3-container w3-blue w3-center'><p class='mano' onclick='AxisMundi.tiradapericia(0" + "," + (numpj-1) + ",1)'><strong>Pericias avanzadas</strong></p></div>" + "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
			seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
			seccion += seccionbis;
			seccion += "</table></div>";
		}
		pjs+= seccion + "</div>";
		//document.getElementById("seccion4").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjarmas" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<div id='pjarmas" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		for (indice=0; indice<personaje[numpj-1].armas.length; indice++) {
			var daño="";
			var funcion="";
			var usoalternativo = "";
			if ( personaje[numpj-1].armas[indice].tipo == "CaC" ) {
				daño = "d" + personaje[numpj-1].armas[indice].danoCaC;
				funcion = "AxisMundi.tiradaarmaCaC";
				if ( personaje[numpj-1].armas[indice].danoAD != 0 ) {
					daño += " (d" + personaje[numpj-1].armas[indice].danoAD + ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaAD("+ indice + "," + (numpj-1) + ",1)'>(A distancia)</span>"
				}
			}
			else {
				daño = "d" + personaje[numpj-1].armas[indice].danoAD;
				funcion = "AxisMundi.tiradaarmaAD";
				if ( personaje[numpj-1].armas[indice].danoCaC != 0 ) {
					daño += " (d" + personaje[numpj-1].armas[indice].danoCaC + ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaCaC("+ indice + "," + (numpj-1) + ",1)'>(Cuerpo a cuerpo)</span>"
				}
			}
			
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + personaje[numpj-1].armas[indice].tipo  + "</td></tr>";
		}
		seccion += "</table></div>";
		var numeroseccion = 5;
		if ( seccionbis != "" ) {
			pjs+= seccion;
		//document.getElementById("seccion1").innerHTML += seccion;
		}
		else {
			pjs+= seccion;
		//document.getElementById("seccion5").innerHTML = seccion;
			numeroseccion++;
		}
		
		seccion = "";
		for (indice=0; indice<personaje[numpj-1].conjuros.length; indice++) {
			seccion += "<tr><td>" + personaje[numpj-1].conjuros[indice] + "</td></tr>";
		}
		if ( seccion != "" ) {
			var seccionc = "<div onclick=" + '"' + "RolSolo.acordeon('pjconjuros" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Conjuros</strong></p></div>";
			seccionc += "<div id='pjconjuros" + (numpj-1) + "' class='w3-hide w3-container' >"
			seccionc += "<table class='w3-table  w3-striped w3-border'>" + seccion + "</table></div>";
			pjs+= seccionc;
		//document.getElementById("seccion" + numeroseccion).innerHTML = seccion;
			numeroseccion ++;
		}
		
			
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjcarespeciales" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características especiales</strong></p></div>";
		seccion += "<div id='pjcarespeciales" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<personaje[numpj-1].caracteristicas.length; indice++) {
			seccion += "<tr><td>" + personaje[numpj-1].caracteristicas[indice] + "</td></tr>";
		}
		seccion += "</table></div>";
		pjs+= seccion;
		//document.getElementById("seccion7").innerHTML = seccion;
		return pjs;	
	}
	
	
	static cargapnj(pjs) {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
				
		seccion = "<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4," + (numpnj-1) + ",0)' alt='Dado d4' class='mano'/>" +
		"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpnj-1) + ",0)' alt='Dado d6' class='mano'/>" + 
		"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8," + (numpnj-1) + ",0)' alt='Dado d8' class='mano'/>" + 
		"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10," + (numpnj-1) + ",0)' alt='Dado d10' class='mano'/>" + 
		"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12," + (numpnj-1) + ",0)' alt='Dado d12' class='mano'/>" + 
		"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20," + (numpnj-1) + ",0)' alt='Dado d20' class='mano'/>" +
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  pnjs[numpnj-1].nombre + '"' + ")' alt='" + pnjs[numpnj-1].nombre + " habla' class='mano'/>";
		//"<p><button class='w3-button w3-block w3-blue' onclick='RolSolo.muestraventanamensajes(" + '"' +  pnjs[numpnj-1].nombre + '"' + ")'>Habla</button></p></div>";
		
		
		/*seccion += "<div onclick=" + '"' + "RolSolo.acordeon('pnjatributos" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Atributos</strong></p></div>";
		
		seccion += "<div id='pnjatributos" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indiceatr=0; indiceatr< pnjs[numpnj-1].atributos.length; indiceatr++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradaatr(" + indiceatr + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].atributos[indiceatr].nbatr + "</span></td><td>" + pnjs[numpnj-1].atributos[indiceatr].valor + " (" + pnjs[numpnj-1].atributos[indiceatr].modif + ")</td></tr>";
		}
		seccion += "</table></div>";
		pjs+= seccion;*/
		
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjcaracteristicas" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<div id='pnjcaracteristicas" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].pv + "</td></tr>";
		seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].cacc + "</td></tr>";
		seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].caad + "</td></tr>";
		seccion += "<tr><td>Ataque (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquecc",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].ataquecc + "</td></tr>";
		seccion += "<tr><td>Ataque (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquead",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].ataquead + "</td></tr>";
		seccion += "<tr><td class='mano' onclick='AxisMundi.tiradamoral(" + (numpnj-1) + ")'>Moral</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"moral",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].moral + "</td></tr>";
		seccion += "<tr><td class='mano' onclick='AxisMundi.tiradareaccion(" + (numpnj-1) + ")'>Reacción</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"reaccion",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].reaccion + "</td></tr>";
		
		seccion += "</table></div>";
		pjs+= seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjsalvaciones" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<div id='pnjsalvaciones" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<pnjs[numpnj-1].salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradasalv(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].salvaciones[indice].nombre + "</span></td><td>" + pnjs[numpnj-1].salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table></div>";
		pjs+= seccion;
		
		/*
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjpericias" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Pericias</strong></p></div>";
		seccion += "<div id='pnjpericias" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
		for (indice=0; indice<pnjs[numpnj-1].pericias.length; indice++) {
			if (pnjs[numpnj-1].pericias[indice].tipo == "Básica")
				seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].pericias[indice].pericia + "</span></td><td>" + pnjs[numpnj-1].pericias[indice].puntos  + "</td></tr>";
		}
		seccion += "</table>";
		
		var seccionbis = "";
		for (indice=0; indice<pnjs[numpnj-1].pericias.length; indice++) {
			if (pnjs[numpnj-1].pericias[indice].tipo == "Avanzada")
				seccionbis += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].pericias[indice].pericia + "</span></td><td>" + pnjs[numpnj-1].pericias[indice].puntos  + "</td></tr>";
		}
		if ( seccionbis != "" ) {
			seccion += "<div class='w3-container w3-blue w3-center'><p class='mano' onclick='AxisMundi.tiradapericia(0" + "," + (numpnj-1) + ",0)'><strong>Pericias avanzadas</strong></p></div>" + "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
			seccion += seccionbis;
			seccion += "</table>";
		}
		pjs+= seccion + "</div>";
		*/
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjarmas" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<div id='pnjarmas" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		for (indice=0; indice<pnjs[numpnj-1].armas.length; indice++) {
			var daño="";
			var funcion="";
			var usoalternativo = "";
			if ( pnjs[numpnj-1].armas[indice].tipo == "CaC" ) {
				daño = "d" + pnjs[numpnj-1].armas[indice].danoCaC;
				funcion = "AxisMundi.tiradaarmaCaC";
				if ( pnjs[numpnj-1].armas[indice].danoAD != 0 ) {
					daño += " (d" + pnjs[numpnj-1].armas[indice].danoAD + ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaAD("+ indice + "," + (numpnj-1) + ",0)'>(A distancia)</span>"
				}
			}
			else {
				daño = "d" + pnjs[numpnj-1].armas[indice].danoAD;
				funcion = "AxisMundi.tiradaarmaAD";
				if ( pnjs[numpnj-1].armas[indice].danoCaC != 0 ) {
					daño += " (d" + pnjs[numpnj-1].armas[indice].danoCaC + ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaCaC("+ indice + "," + (numpnj-1) + ",0)'>(Cuerpo a cuerpo)</span>"
				}
			}
			
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + pnjs[numpnj-1].armas[indice].tipo  + "</td></tr>";
		}
		seccion += "</table></div>";
		var numeroseccion = 5;
		/*if ( seccionbis != "" ) {
			pjs+= seccion;
		}
		else { */
			pjs+= seccion;
			numeroseccion++;
		//}
		
		seccion = "";
		for (indice=0; indice<pnjs[numpnj-1].conjuros.length; indice++) {
			seccion += "<tr><td>" + pnjs[numpnj-1].conjuros[indice] + "</td></tr>";
		}
		if ( seccion != "" ) {
			var seccionc = "<div onclick=" + '"' + "RolSolo.acordeon('pnjconjuros" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Conjuros</strong></p></div>";
			seccionc += "<div id='pnjconjuros" + (numpnj-1) + "' class='w3-hide w3-container' >"
			seccionc += "<table class='w3-table  w3-striped w3-border'>" + seccion + "</table></div>";
			pjs+= seccionc;
			numeroseccion ++;
		}
		
			
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjcarespeciales" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características especiales</strong></p></div>";
		seccion += "<div id='pnjcarespeciales" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<pnjs[numpnj-1].caracteristicas.length; indice++) {
			seccion += "<tr><td>" + pnjs[numpnj-1].caracteristicas[indice] + "</td></tr>";
		}
		seccion += "</table></div>";
		pjs+= seccion;
		return pjs;	
	}
	
	
	static modificacaracteristica(caracteristica, npj, tipo) {
		var valor = document.getElementById('vcaracteristica').value;
		if ( caracteristica == "pv" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].pv = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].pv = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "cacc" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].cacc = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].cacc = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "caad" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].caad = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].caad = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "ataquecc" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].ataquecc = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].ataquecc = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "ataquead" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].ataquead = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].ataquead = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "barridos" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].barridos = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].barridos = document.getElementById('vcaracteristica').value;
		}
		if ( tipo == "PNJ" ) {
			//var seccion = "<div id='pnjcaracteristicas" + npj + "' class='w3-hide w3-container' >"
			var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
			seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + npj+ ',"PNJ")' + "' >" + pnjs[npj].pv + "</td></tr>";
			seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + npj + ',"PNJ")' + "' >" + pnjs[npj].cacc + "</td></tr>";
			seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + npj + ',"PNJ")' + "' >" + pnjs[npj].caad + "</td></tr>";
			seccion += "<tr><td>Ataque (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquecc",' + npj + ',"PNJ")' + "' >" + pnjs[npj].ataquecc + "</td></tr>";
			seccion += "<tr><td>Ataque (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquead",' + npj + ',"PNJ")' + "' >" + pnjs[npj].ataquead + "</td></tr>";
		    seccion += "<tr><td class='mano' onclick='AxisMundi.tiradamoral(" + npj + ")'>Moral</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"moral",' + npj + ',"PNJ")' + "' >" + pnjs[numpnj-1].moral + "</td></tr>";
		    seccion += "<tr><td class='mano' onclick='AxisMundi.tiradareaccion(" + npj + ")'>Reacción</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"reaccion",' + npj + ',"PNJ")' + "' >" + pnjs[numpnj-1].reaccion + "</td></tr>";
					
			seccion += "</table>";
			document.getElementById('pnjcaracteristicas'+npj).innerHTML = seccion;
			RolSolo.muestra('pnjcaracteristicas'+npj);
		}
		else  {
			//var seccion = "<div id='pjcaracteristicas" + npj + "' class='w3-hide w3-container' >"
			var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
			seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + npj+ ',"PJ")' + "' >" + personaje[npj].pv + "</td></tr>";
			seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + npj + ',"PJ")' + "' >" + personaje[npj].cacc + "</td></tr>";
			seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + npj + ',"PJ")' + "' >" + personaje[npj].caad + "</td></tr>";
			seccion += "<tr><td>Ataque (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquecc",' + npj + ',"PJ")' + "' >" + personaje[npj].ataquecc + "</td></tr>";
			seccion += "<tr><td>Ataque (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataquead",' + npj + ',"PJ")' + "' >" + personaje[npj].ataquead + "</td></tr>";
			seccion += "<tr><td>Barridos</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"barridos",' + npj + ',"PJ")' + "' >" + personaje[npj].barridos + "</td></tr>";
			seccion += "</table>";
			document.getElementById('pjcaracteristicas'+npj).innerHTML = seccion;
			RolSolo.muestra('pjcaracteristicas'+npj);
		}
				
		document.getElementById('ccaracteristica').style.display='none';
	}
	
	static cancelamodifcaracteristica() {
		document.getElementById('ccaracteristica').style.display='none';
	}

	static cambiacaracteristica(caracteristica, npj, tipo) {
		var literal = "";
		var valor = "";
		if ( caracteristica == "pv" ) {
			literal = "PV";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].pv;
			else
				valor = personaje[npj].pv;
		}
		else if ( caracteristica == "cacc" ) {
			literal = "CA CC";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].cacc;
			else
				valor = personaje[npj].cacc;
		}
		else if ( caracteristica == "caad" ) {
			literal = "CA AD";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].caad;
			else
				valor = personaje[npj].caad;
		}
		else if ( caracteristica == "ataquecc" ) {
			literal = "Ataque CC";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].ataquecc;
			else
				valor = personaje[npj].ataquecc;
		}
		else if ( caracteristica == "ataquead" ) {
			literal = "Ataque AD";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].ataquead;
			else
				valor = personaje[npj].ataquead;
		}
		else if ( caracteristica == "barridos" ) {
			literal = "Barridos";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].barridos;
			else
				valor = personaje[npj].barridos;
		}
		else if ( caracteristica == "moral" ) {
			literal = "Moral";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].moral;
			else
				valor = personaje[npj].moral;
		}
		else if ( caracteristica == "reaccion" ) {
			literal = "Reacción";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].reaccion;
			else
				valor = personaje[npj].reaccion;
		}
		if ( literal != "" ){
			document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>" + literal + "</label>";
			document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='AxisMundi.modificacaracteristica(" + '"' + caracteristica + '"' + "," + npj + ',"' + tipo + '"' + ")'>Modifica</button>";
			document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='AxisMundi.cancelamodifcaracteristica()'>Cancela</button>";
			document.getElementById('vcaracteristica').value = valor;
			document.getElementById('ccaracteristica').style.display='block';
		}
	}
	
	static tiradaatr(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(20, 1);
		var mensaje = "<b>";
		if ( tipo == "PNJ" ) 
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].atributos[indice].nbatr + " (" +  pnjs[npj].atributos[indice].valor + ")<br/><b>Resultado: </b>" + valor;
		else
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].atributos[indice].nbatr + " (" +  personaje[npj].atributos[indice].valor + ")<br/><b>Resultado: </b>" + valor;
		RolSolo.escribemensaje(mensaje);
	}
	
	static tiradasalv(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(20, 1);
		var mensaje = "<b>";
		if ( tipo == "PNJ" ) 
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].salvaciones[indice].nombre + " (" +  pnjs[npj].salvaciones[indice].valor + ")<br/><b>Resultado: </b>" + valor;
		else
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].salvaciones[indice].nombre + " (" +  personaje[npj].salvaciones[indice].valor + ")<br/><b>Resultado: </b>" + valor;
		RolSolo.escribemensaje(mensaje);
	}
	
	static tiradapericia(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(6, 1);
		var mensaje = "<b>";
		if ( tipo == "PNJ" ) 
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].pericias[indice].pericia + " (" +  pnjs[npj].pericias[indice].puntos + ")<br/><b>Resultado: </b>" + valor;
		else
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].pericias[indice].pericia + " (" +  personaje[npj].pericias[indice].puntos + ")<br/><b>Resultado: </b>" + valor;
		RolSolo.escribemensaje(mensaje);
	}
	  
	
	static tiradaarmaCaC(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(20, 1);
		var mensaje = "<b>";
		if ( tipo == "PNJ" ) {
			var daño = RolSolo.random(parseInt(pnjs[npj].armas[indice].danoCaC),1);
			if ( pnjs[npj].tipobonifdaño == "CC" || pnjs.tipobonifdaño == "CC y AD" )
				daño += parseInt(pnjs[npj].daño);
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].armas[indice].nombre + " (CaC)<br/><b>Resultado: </b>" + (valor + parseInt(pnjs[npj].ataquecc)) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		else {
			var daño = RolSolo.random(parseInt(personaje[npj].armas[indice].danoCaC),1);
			if ( personaje[npj].tipobonifdaño == "CC" || personaje.tipobonifdaño == "CC y AD" )
				daño += parseInt(personaje[npj].daño);
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].armas[indice].nombre + " (CaC)<br/><b>Resultado: </b>" + (valor + parseInt(personaje[npj].ataquecc)) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		RolSolo.escribemensaje(mensaje);
	}
	
	static tiradaarmaAD(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(20, 1);
		var mensaje = "<b>";
		if ( tipo == "PNJ" ) {
			var daño = RolSolo.random(parseInt(pnjs[npj].armas[indice].danoAD),1);
			if ( pnjs[npj].tipobonifdaño == "AD" || pnjs[npj].tipobonifdaño == "CC y AD" )
				daño += parseInt(pnjs[npj].daño);
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].armas[indice].nombre + " (AD)<br/><b>Resultado: </b>" + (valor + parseInt(pnjs[npj].ataquead)) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		else {
			var daño = RolSolo.random(parseInt(personaje[npj].armas[indice].danoAD),1);
			if ( personaje[npj].tipobonifdaño == "AD" || personaje[npj].tipobonifdaño == "CC y AD" )
				daño += parseInt(personaje[npj].daño);
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].armas[indice].nombre + " (AD)<br/><b>Resultado: </b>" + (valor + parseInt(personaje[npj].ataquead)) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		RolSolo.escribemensaje(mensaje);
	}
	
	static tiradamoral(npj) {
	    var moral = parseInt(pnjs[npj].moral);
	    var tirada = RolSolo.random(6,1) + RolSolo.random(6,1);
	    var mensaje = "<b>" + pnjs[npj].nombre + "</b> Moral: " + moral + "<br/>Resultado: " + tirada; 
	    RolSolo.escribemensaje(mensaje);
	}
	
	static tiradareaccion(npj) {
	    var reaccion = parseInt(pnjs[npj].reaccion);
	    var tirada = RolSolo.random(6,1) + RolSolo.random(6,1) + reaccion;
	    
	    var actitud = "Amistoso";
	    if ( tirada <= 2 )
	        actitud = "Hostil";
	    else if ( tirada <= 5 )
	        actitud = "Antipático";
	    else if ( tirada <= 8 )
	        actitud = "Indeciso";
	    else if ( tirada <= 11 )
	        actitud = "Indiferente";
	    
	    var mensaje = "<b>" + pnjs[npj].nombre + "</b> Reacción: " + tirada + "<br/>Resultado: " + actitud; 
	    RolSolo.escribemensaje(mensaje);
	}
}
