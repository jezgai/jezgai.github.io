class AxisMundi {

	static cargapersonaje(pjs) {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
		
		var pjsaux = "";
				
		seccion = "<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4," + (numpj-1) + ",1)' alt='Dado d4' class='mano'/>" +
		"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpj-1) + ",1)' alt='Dado d6' class='mano'/>" + 
		"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8," + (numpj-1) + ",1)' alt='Dado d8' class='mano'/>" + 
		"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10," + (numpj-1) + ",1)' alt='Dado d10' class='mano'/>" + 
		"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12," + (numpj-1) + ",1)' alt='Dado d12' class='mano'/>" + 
		"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20," + (numpj-1) + ",1)' alt='Dado d20' class='mano'/>" +
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  personaje[numpj-1].nombre + '"' + ")' alt='" + personaje[numpj-1].nombre + " habla' class='mano'/>" +
		"<img src='imagenes/Papelera.jpg' onclick='RolSolo.elimina(" + (numpj-1)  + ',"PJ"' + ")' alt='Borra " + personaje[numpj-1].nombre + "' class='mano'/>";
		//"<p><button class='w3-button w3-block w3-blue' onclick='RolSolo.muestraventanamensajes(" + '"' +  personaje[numpj-1].nombre + '"' + ")'>Habla</button></p></div>";
		
		
		seccion += "<div onclick=" + '"' + "RolSolo.acordeon('pjatributos" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Atributos</strong></p></div>";
		seccion += "<div id='pjatributos" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table  class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indiceatr=0; indiceatr< personaje[numpj-1].atributos.length; indiceatr++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradaatr(" + indiceatr + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].atributos[indiceatr].nbatr + "</span></td><td>" + personaje[numpj-1].atributos[indiceatr].valor + " (" + personaje[numpj-1].atributos[indiceatr].modif + ")</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
		//document.getElementById("seccion1").innerHTML = seccion;
		
		if( personaje[numpj-1].hasOwnProperty('pvinicial') == false ){
			personaje[numpj-1].pvinicial = personaje[numpj-1].pv;
		}
		
		if( personaje[numpj-1].hasOwnProperty('px') == false ){
			personaje[numpj-1].px = 0;
		}
		
		//seccion = "<h2>Atributos</h2>";
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjcaracteristicas" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<div id='pjcaracteristicas" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].pv + " (" + personaje[numpj-1].pvinicial + ")" + "</td></tr>";
		seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].cacc + "</td></tr>";
		seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].caad + "</td></tr>";
		seccion += "<tr><td>Ataque</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataque",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].ataque + "</td></tr>";
		seccion += "<tr><td>Barridos</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"barridos",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].barridos + "</td></tr>";
		seccion += "<tr><td>PX</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"px",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].px + "</td></tr>";
		
		if ( personaje[numpj-1].hasOwnProperty('virtud') == true ) {
			seccion += "<tr><td class='mano' onclick='AxisMundi.tiradavirtud(" + (numpj-1)  +")'>Virtud</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"virtud",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].virtud + "</td></tr>";
			
			if ( personaje[numpj-1].hasOwnProperty('degeneraciontemp') == false ) {
				personaje[numpj-1].degeneraciontemp = 0;
			}
			seccion += "<tr><td>Degeneración temporal</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"degeneraciontemp",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].degeneraciontemp + "</td></tr>";
			
			
			if ( personaje[numpj-1].hasOwnProperty('degeneracionperm') == false ) {
				personaje[numpj-1].degeneracionperm = 0;
			}
			seccion += "<tr><td>Degeneración permanente</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"degeneracionperm",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].degeneracionperm + "</td></tr>";
		}
		
		
		seccion += "</table></div>";
		pjsaux+= seccion;
		//document.getElementById("seccion2").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjsalvaciones" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<div id='pjsalvaciones" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje[numpj-1].salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradasalv(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].salvaciones[indice].nombre + "</span></td><td>" + personaje[numpj-1].salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
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
		pjsaux+= seccion + "</div>";
		//document.getElementById("seccion4").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjarmas" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<div id='pjarmas" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		for (indice=0; indice<personaje[numpj-1].armas.length; indice++) {
			var daño="";
			var funcion="";
			var usoalternativo = "";
			if ( personaje[numpj-1].armas[indice].tipo == "CaC" ) {
				daño = personaje[numpj-1].armas[indice].danoCaC.ndados + "d" + personaje[numpj-1].armas[indice].danoCaC.dado;
				if ( parseInt(personaje[numpj-1].armas[indice].danoCaC.modif) > 0 ) {
					daño += "+" + personaje[numpj-1].armas[indice].danoCaC.modif;
				}
				else if ( parseInt(personaje[numpj-1].armas[indice].danoCaC.modif) < 0 ) {
					daño += personaje[numpj-1].armas[indice].danoCaC.modif;
				}
				funcion = "AxisMundi.tiradaarmaCaC";
				if ( personaje[numpj-1].armas[indice].hasOwnProperty('danoAD') == true && personaje[numpj-1].armas[indice].danoAD.dado != 0 ) {
					daño += " (" + personaje[numpj-1].armas[indice].danoAD.ndados +"d" + personaje[numpj-1].armas[indice].danoAD.dado;
					if ( parseInt(personaje[numpj-1].armas[indice].danoAD.modif) > 0 ) {
						daño += "+" + personaje[numpj-1].armas[indice].danoAD.modif;
					}
					else if ( parseInt(personaje[numpj-1].armas[indice].danoAD.modif) < 0 ) {
						daño += personaje[numpj-1].armas[indice].danoAD.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaAD("+ indice + "," + (numpj-1) + ",1)'>(A distancia)</span>";
				}
			}
			else {
				daño = personaje[numpj-1].armas[indice].danoAD.ndados + "d" + personaje[numpj-1].armas[indice].danoAD.dado;
				if ( parseInt(personaje[numpj-1].armas[indice].danoAD.modif) > 0 ) {
					daño += "+" + personaje[numpj-1].armas[indice].danoAD.modif;
				}
				else if ( parseInt(personaje[numpj-1].armas[indice].danoAD.modif) < 0 ) {
					daño += personaje[numpj-1].armas[indice].danoAD.modif;
				}
				funcion = "AxisMundi.tiradaarmaAD";
				if ( personaje[numpj-1].armas[indice].hasOwnProperty('danoCaC') == true && personaje[numpj-1].armas[indice].danoCaC.dado != 0 ) {
					daño += " (" + personaje[numpj-1].armas[indice].danoCaC.ndados + "d" + personaje[numpj-1].armas[indice].danoCaC.dado;
					if ( parseInt(personaje[numpj-1].armas[indice].danoCaC.modif) > 0 ) {
						daño += "+" + personaje[numpj-1].armas[indice].danoCaC.modif;
					}
					else if ( parseInt(personaje[numpj-1].armas[indice].danoCaC.modif) < 0 ) {
						daño += personaje[numpj-1].armas[indice].danoCaC.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaCaC("+ indice + "," + (numpj-1) + ",1)'>(Cuerpo a cuerpo)</span>";
				}
			}
			
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + personaje[numpj-1].armas[indice].tipo  + "</td></tr>";
		}
		seccion += "</table></div>";
		var numeroseccion = 5;
		if ( seccionbis != "" ) {
			pjsaux+= seccion;
		//document.getElementById("seccion1").innerHTML += seccion;
		}
		else {
			pjsaux+= seccion;
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
			pjsaux+= seccionc;
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
		pjsaux+= seccion;
		
		if ( personaje[numpj-1].hasOwnProperty('equipo') == false ) {
			personaje[numpj-1].equipo = ".";
		}
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjequipo" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Equipo</strong></p></div>";
		seccion += "<div id='pjequipo" + (numpj-1) + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + (numpj-1) + ', "PJ")' + "' >";
		seccion += personaje[numpj-1].equipo;
		seccion += "</div>";
		pjsaux += seccion;
		
		if ( personaje[numpj-1].hasOwnProperty('notas') == false ) {
			personaje[numpj-1].notas = ".";
		}
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjnotas" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Notas</strong></p></div>";
		seccion += "<div id='pjnotas" + (numpj-1) + "' class='w3-hide w3-container' onclick='RolSolo.ventananotas(" + (numpj-1) + ', "PJ")' + "' >";
		seccion += personaje[numpj-1].notas;
		seccion += "</div>";
		pjsaux += seccion;
				
		if( personaje[numpj-1].hasOwnProperty('estado') == false || (personaje[numpj-1].hasOwnProperty('estado') == true && personaje[numpj-1].estado != "Eliminado") ){
			pjs+=pjsaux;
		}
		//document.getElementById("seccion7").innerHTML = seccion;
		return pjs;	
	}
	
	
	static cargapnj(pjs) {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
			
		var pjsaux = "";
			
		seccion = "<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4," + (numpnj-1) + ",0)' alt='Dado d4' class='mano'/>" +
		"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpnj-1) + ",0)' alt='Dado d6' class='mano'/>" + 
		"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8," + (numpnj-1) + ",0)' alt='Dado d8' class='mano'/>" + 
		"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10," + (numpnj-1) + ",0)' alt='Dado d10' class='mano'/>" + 
		"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12," + (numpnj-1) + ",0)' alt='Dado d12' class='mano'/>" + 
		"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20," + (numpnj-1) + ",0)' alt='Dado d20' class='mano'/>" +
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  pnjs[numpnj-1].nombre + '"' + ")' alt='" + pnjs[numpnj-1].nombre + " habla' class='mano'/>" +
		"<img src='imagenes/Papelera.jpg' onclick='RolSolo.elimina(" + (numpnj-1)  + ',"PNJ"' + ")' alt='Borra " + pnjs[numpnj-1].nombre + "' class='mano'/>";
		
		if( pnjs[numpnj-1].hasOwnProperty('pvinicial') == false ){
			pnjs[numpnj-1].pvinicial = pnjs[numpnj-1].pv;
		}		
				
		seccion += "<div onclick=" + '"' + "RolSolo.acordeon('pnjcaracteristicas" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<div id='pnjcaracteristicas" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th></th><th>Valor</th></tr>";
		seccion += "<tr><td>PV</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].pv  + " (" + pnjs[numpnj-1].pvinicial + ")" + "</td></tr>";
		seccion += "<tr><td>CA (CC)</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].cacc + "</td></tr>";
		seccion += "<tr><td>CA (AD)</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].caad + "</td></tr>";
		seccion += "<tr><td>Ataque</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataque",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].ataque + "</td></tr>";
		seccion += "<tr><td class='mano' onclick='AxisMundi.tiradamoral(" + (numpnj-1) + ")'>Moral</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"moral",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].moral + "</td></tr>";
		seccion += "<tr><td class='mano' onclick='AxisMundi.tiradareaccion(" + (numpnj-1) + ")'>Reacción</td><td><input type='text' size='6' value='0' id='modreaccion" + (numpnj-1) + "'></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"reaccion",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].reaccion + "</td></tr>";
		
		seccion += "</table></div>";
		pjsaux+= seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjsalvaciones" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<div id='pnjsalvaciones" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<pnjs[numpnj-1].salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradasalv(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].salvaciones[indice].nombre + "</span></td><td>" + pnjs[numpnj-1].salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
		
		if( pnjs[numpnj-1].hasOwnProperty('pericias') == true ){
			
			seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjpericias" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Pericias</strong></p></div>";
			seccion += "<div id='pnjpericias" + (numpnj-1) + "' class='w3-hide w3-container' >"
			seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Pericia</th><th>Valor</th></tr>";
			for (indice=0; indice<pnjs[numpnj-1].pericias.length; indice++) {
				seccion += "<tr><td><span class='mano' onclick='AxisMundi.tiradapericia(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].pericias[indice].pericia + "</span></td><td>" + pnjs[numpnj-1].pericias[indice].puntos  + "</td></tr>";
			}
			seccion += "</table>";
			
			pjsaux+= seccion + "</div>";
		}
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjarmas" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<div id='pnjarmas" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		for (indice=0; indice<pnjs[numpnj-1].armas.length; indice++) {
			var daño="";
			var funcion="";
			var usoalternativo = "";
			if ( pnjs[numpnj-1].armas[indice].tipo == "CaC" ) {
				daño = pnjs[numpnj-1].armas[indice].danoCaC.ndados + "d" + pnjs[numpnj-1].armas[indice].danoCaC.dado;
				if ( parseInt(pnjs[numpnj-1].armas[indice].danoCaC.modif) > 0 ) {
					daño += "+" + pnjs[numpnj-1].armas[indice].danoCaC.modif;
				}
				else if ( parseInt(pnjs[numpnj-1].armas[indice].danoCaC.modif) < 0 ) {
					daño += pnjs[numpnj-1].armas[indice].danoCaC.modif;
				}
				funcion = "AxisMundi.tiradaarmaCaC";
				if ( pnjs[numpnj-1].armas[indice].hasOwnProperty('danoAD') == true && pnjs[numpnj-1].armas[indice].danoAD.dado != 0 ) {
					daño += " (" + pnjs[numpnj-1].armas[indice].danoAD.ndados +"d" + pnjs[numpnj-1].armas[indice].danoAD.dado;
					if ( parseInt(pnjs[numpnj-1].armas[indice].danoAD.modif) > 0 ) {
						daño += "+" + pnjs[numpnj-1].armas[indice].danoAD.modif;
					}
					else if ( parseInt(pnjs[numpnj-1].armas[indice].danoAD.modif) < 0 ) {
						daño += pnjs[numpnj-1].armas[indice].danoAD.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaAD("+ indice + "," + (numpnj-1) + ",0)'>(A distancia)</span>";
				}
			}
			else {				
				daño = pnjs[numpnj-1].armas[indice].danoAD.ndados + "d" + pnjs[numpnj-1].armas[indice].danoAD.dado;
				if ( parseInt(pnjs[numpnj-1].armas[indice].danoAD.modif) > 0 ) {
					daño += "+" + pnjs[numpnj-1].armas[indice].danoAD.modif;
				}
				else if ( parseInt(pnjs[numpnj-1].armas[indice].danoAD.modif) < 0 ) {
					daño += pnjs[numpnj-1].armas[indice].danoAD.modif;
				}
				funcion = "AxisMundi.tiradaarmaAD";
				if ( pnjs[numpnj-1].armas[indice].hasOwnProperty('danoCaC') == true && pnjs[numpnj-1].armas[indice].danoCaC.dado != 0 ) {
					daño += " (" + pnjs[numpnj-1].armas[indice].danoCaC.ndados + "d" + pnjs[numpnj-1].armas[indice].danoCaC.dado;
					if ( parseInt(pnjs[numpnj-1].armas[indice].danoCaC.modif) > 0 ) {
						daño += "+" + pnjs[numpnj-1].armas[indice].danoCaC.modif;
					}
					else if ( parseInt(pnjs[numpnj-1].armas[indice].danoCaC.modif) < 0 ) {
						daño += pnjs[numpnj-1].armas[indice].danoCaC.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='AxisMundi.tiradaarmaCaC("+ indice + "," + (numpnj-1) + ",1)'>(Cuerpo a cuerpo)</span>";
				}
			}
			
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + pnjs[numpnj-1].armas[indice].tipo  + "</td></tr>";
		}
		seccion += "</table></div>";
		var numeroseccion = 5;
		
			pjsaux+= seccion;
			numeroseccion++;
		
		seccion = "";
		for (indice=0; indice<pnjs[numpnj-1].conjuros.length; indice++) {
			seccion += "<tr><td>" + pnjs[numpnj-1].conjuros[indice] + "</td></tr>";
		}
		if ( seccion != "" ) {
			var seccionc = "<div onclick=" + '"' + "RolSolo.acordeon('pnjconjuros" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Conjuros</strong></p></div>";
			seccionc += "<div id='pnjconjuros" + (numpnj-1) + "' class='w3-hide w3-container' >"
			seccionc += "<table class='w3-table  w3-striped w3-border'>" + seccion + "</table></div>";
			pjsaux+= seccionc;
			numeroseccion ++;
		}
		
		
		if ( pnjs[numpnj-1].hasOwnProperty('caracteristicas') == true && pnjs[numpnj-1].caracteristicas.length > 1){
			seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjcarespeciales" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características especiales</strong></p></div>";
			seccion += "<div id='pnjcarespeciales" + (numpnj-1) + "' class='w3-hide w3-container' >"
			seccion += "<table class='w3-table  w3-striped w3-border'>";
			for (indice=0; indice<pnjs[numpnj-1].caracteristicas.length; indice++) {
				seccion += "<tr><td>" + pnjs[numpnj-1].caracteristicas[indice] + "</td></tr>";
			}
			seccion += "</table></div>";
			pjsaux+= seccion;
		}
		
		if ( pnjs[numpnj-1].hasOwnProperty('equipo') == false ) {
			pnjs[numpnj-1].equipo = ".";
		}
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjequipo" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Equipo</strong></p></div>";
		seccion += "<div id='pnjequipo" + (numpnj-1) + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + (numpnj-1) + ', "PNJ")' + "' >";
		seccion += pnjs[numpnj-1].equipo;
		seccion += "</div>";
		pjsaux += seccion;
		
		if ( pnjs[numpnj-1].hasOwnProperty('notas') == false ) {
			pnjs[numpnj-1].notas = ".";
		}
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjnotas" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Notas</strong></p></div>";
		seccion += "<div id='pnjnotas" + (numpnj-1) + "' class='w3-hide w3-container' onclick='RolSolo.ventananotas(" + (numpnj-1) + ', "PNJ")' + "' >";
		seccion += pnjs[numpnj-1].notas;
		seccion += "</div>";
		pjsaux += seccion;
		
		if( pnjs[numpnj-1].hasOwnProperty('estado') == false || (pnjs[numpnj-1].hasOwnProperty('estado') == true && pnjs[numpnj-1].estado != "Eliminado") ){
			pjs+=pjsaux;
		}
		
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
		else if ( caracteristica == "px" ) {
			if ( tipo != "PNJ" ) 
				personaje[npj].px = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "virtud" ) {
			if ( tipo != "PNJ" ) 
				personaje[npj].virtud = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "degeneraciontemp" ) {
			if ( tipo != "PNJ" ) {
				var valor = document.getElementById('vcaracteristica').value;
				if ( valor > 3 ) {
					valor = 3;
				}
				if ( personaje[npj].degeneraciontemp < valor ) {
					personaje[npj].virtud = personaje[npj].virtud - 10 * (valor - personaje[npj].degeneraciontemp);
				}
				if ( valor == 3 ) {
					valor = 0;
					personaje[npj].degeneracionperm = personaje[npj].degeneracionperm + 1;
				}
				personaje[npj].degeneraciontemp = valor;
			}
		}
		else if ( caracteristica == "degeneracionperm" ) {
			if ( tipo != "PNJ" ) 
				personaje[npj].degeneracionperm = document.getElementById('vcaracteristica').value;
		}
		
		if ( tipo == "PNJ" ) {
			//var seccion = "<div id='pnjcaracteristicas" + npj + "' class='w3-hide w3-container' >"
			var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th></th><th>Valor</th></tr>";
			seccion += "<tr><td>PV</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + npj+ ',"PNJ")' + "' >" + pnjs[npj].pv + " (" + pnjs[npj].pvinicial + ")" + "</td></tr>";
			seccion += "<tr><td>CA (CC)</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + npj + ',"PNJ")' + "' >" + pnjs[npj].cacc + "</td></tr>";
			seccion += "<tr><td>CA (AD)</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + npj + ',"PNJ")' + "' >" + pnjs[npj].caad + "</td></tr>";
			seccion += "<tr><td>Ataque</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataque",' + npj + ',"PNJ")' + "' >" + pnjs[npj].ataque + "</td></tr>";
		    seccion += "<tr><td class='mano' onclick='AxisMundi.tiradamoral(" + npj + ")'>Moral</td><td></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"moral",' + npj + ',"PNJ")' + "' >" + pnjs[numpnj-1].moral + "</td></tr>";
		    seccion += "<tr><td class='mano' onclick='AxisMundi.tiradareaccion(" + npj + ")'>Reacción</td><td><input type='text' size='6' value='0' id='modreaccion" + (numpnj-1) + "'></td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"reaccion",' + npj + ',"PNJ")' + "' >" + pnjs[numpnj-1].reaccion + "</td></tr>";
					
			seccion += "</table>";
			document.getElementById('pnjcaracteristicas'+npj).innerHTML = seccion;
			RolSolo.muestra('pnjcaracteristicas'+npj);
		}
		else  {
			//var seccion = "<div id='pjcaracteristicas" + npj + "' class='w3-hide w3-container' >"
			var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
			seccion += "<tr><td>PV</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"pv",' + npj+ ',"PJ")' + "' >" + personaje[npj].pv + " (" + personaje[npj].pvinicial + ")" + "</td></tr>";
			seccion += "<tr><td>CA (CC)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"cacc",' + npj + ',"PJ")' + "' >" + personaje[npj].cacc + "</td></tr>";
			seccion += "<tr><td>CA (AD)</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"caad",' + npj + ',"PJ")' + "' >" + personaje[npj].caad + "</td></tr>";
			seccion += "<tr><td>Ataque</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"ataque",' + npj + ',"PJ")' + "' >" + personaje[npj].ataque + "</td></tr>";
			seccion += "<tr><td>Barridos</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"barridos",' + npj + ',"PJ")' + "' >" + personaje[npj].barridos + "</td></tr>";
			seccion += "<tr><td>PX</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"px",' + npj + ',"PJ")' + "' >" + personaje[npj].px + "</td></tr>";
			
			
			if ( personaje[npj].hasOwnProperty('virtud') == true ) {
				seccion += "<tr><td>Virtud</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"virtud",' + (npj) + ',"PJ")' + "' >" + personaje[npj].virtud + "</td></tr>";
				
				if ( personaje[npj].hasOwnProperty('degeneraciontemp') == false ) {
					personaje[npj].degeneraciontemp = 0;
				}
				seccion += "<tr><td>Degeneración temporal</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"degeneraciontemp",' + (npj) + ',"PJ")' + "' >" + personaje[npj].degeneraciontemp + "</td></tr>";
				
				
				if ( personaje[npj].hasOwnProperty('degeneracionperm') == false ) {
					personaje[npj].degeneracionperm = 0;
				}
				seccion += "<tr><td>Degeneración permanente</td><td class='mano' onclick='AxisMundi.cambiacaracteristica(" + '"degeneracionperm",' + (npj) + ',"PJ")' + "' >" + personaje[npj].degeneracionperm + "</td></tr>";
			}
			
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
		else if ( caracteristica == "ataque" ) {
			literal = "Ataque";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].ataque;
			else
				valor = personaje[npj].ataque;
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
		else if ( caracteristica == "px" ) {
			literal = "PX";
			if ( tipo != "PNJ" )
				valor = personaje[npj].px;
		}
		else if ( caracteristica == "virtud" ) {
			literal = "Virtud";
			if ( tipo != "PNJ" ) {
				valor = personaje[npj].virtud;
			}
		}
		else if ( caracteristica == "degeneraciontemp" ) {
			literal = "Degeneración temporal";
			if ( tipo != "PNJ" ) {
				valor = personaje[npj].degeneraciontemp;
			}
		}
		else if ( caracteristica == "degeneracionperm" ) {
			literal = "Degeneración permanente";
			if ( tipo != "PNJ" ) {
				valor = personaje[npj].degeneracionperm;
			}
		}
		
		if ( literal != "" ){
			document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>" + literal + "</label>";
			document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='AxisMundi.modificacaracteristica(" + '"' + caracteristica + '"' + "," + npj + ',"' + tipo + '"' + ")'>Modifica</button>";
			document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='AxisMundi.cancelamodifcaracteristica()'>Cancela</button>";
			document.getElementById('vcaracteristica').value = valor;
			document.getElementById('ccaracteristica').style.display='block';
		}
	}
	
	static tiradavirtud(npj) {
		var valor = RolSolo.random(100,1);
		var mensaje = "<b>";
		mensaje += personaje[npj].nombre + "</b> Virtud(" + personaje[npj].virtud + ")<br/><b>Resultado: </b>" + valor;
		RolSolo.escribemensaje(mensaje);
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
		else {
			var valorSalvacion = personaje[npj].salvaciones[indice].valor;
			var modifSAB = 0;
			if ( personaje[npj].salvaciones[indice].nombre == "Artefactos mágicos" || personaje[npj].salvaciones[indice].nombre == "Conjuros" ) {
				var iatr=0;
				for (iatr=0; iatr<personaje[npj].atributos.length; iatr++) {
					if ( personaje[npj].atributos[iatr].nbatr = "Sabiduría" ) {
						modifSAB = parseInt(personaje[npj].atributos[iatr].modif);
						break;
					}
				}
			}
			valorSalvacion -= modifSAB;
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].salvaciones[indice].nombre + " (" +  valorSalvacion + ")<br/><b>Resultado: </b>" + valor;
		}
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
			//var daño = RolSolo.random(parseInt(pnjs[npj].armas[indice].danoCaC),1);
			var ndados=0;
			var daño = 0;
			for(ndados=0; ndados < parseInt(pnjs[npj].armas[indice].danoCaC.ndados); ndados++) {
				daño += RolSolo.random(parseInt(pnjs[npj].armas[indice].danoCaC.dado),1);
			}
			daño += parseInt(pnjs[npj].armas[indice].danoCaC.modif);
			
			if ( pnjs[npj].tipobonifdaño == "CC" || pnjs.tipobonifdaño == "CC y AD" )
				daño += parseInt(pnjs[npj].daño);
			
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].armas[indice].nombre + " (CaC)<br/><b>Resultado: </b>" + (valor + parseInt(pnjs[npj].ataque)) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		else {
			var modifFUE = 0;
			var iatr=0;
			for (iatr=0; iatr<personaje[npj].atributos.length; iatr++) {
				if ( personaje[npj].atributos[iatr].nbatr == "Fuerza" ) {
					modifFUE = parseInt(personaje[npj].atributos[iatr].modif);
					break;
				}
			}
			
			//var daño = RolSolo.random(parseInt(personaje[npj].armas[indice].danoCaC),1);
			
			var ndados=0;
			var daño = 0;
			for(ndados=0; ndados < parseInt(personaje[npj].armas[indice].danoCaC.ndados); ndados++) {
				daño += RolSolo.random(parseInt(personaje[npj].armas[indice].danoCaC.dado),1);
			}
			daño += parseInt(personaje[npj].armas[indice].danoCaC.modif);
			
			if ( personaje[npj].tipobonifdaño == "CC" || personaje.tipobonifdaño == "CC y AD" )
				daño += parseInt(personaje[npj].daño);
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].armas[indice].nombre + " (CaC)<br/><b>Resultado: </b>" + (valor + parseInt(personaje[npj].ataque) + modifFUE) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
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
			//var daño = RolSolo.random(parseInt(pnjs[npj].armas[indice].danoAD),1);
			
			var ndados=0;
			var daño = 0;
			for(ndados=0; ndados < parseInt(pnjs[npj].armas[indice].danoAD.ndados); ndados++) {
				daño += RolSolo.random(parseInt(pnjs[npj].armas[indice].danoAD.dado),1);
			}
			daño += parseInt(pnjs[npj].armas[indice].danoAD.modif);
						
			if ( pnjs[npj].tipobonifdaño == "AD" || pnjs[npj].tipobonifdaño == "CC y AD" )
				daño += parseInt(pnjs[npj].daño);
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].armas[indice].nombre + " (AD)<br/><b>Resultado: </b>" + (valor + parseInt(pnjs[npj].ataque)) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		else {
			var modifDES = 0;
			var iatr=0;
			for (iatr=0; iatr<personaje[npj].atributos.length; iatr++) {
				if ( personaje[npj].atributos[iatr].nbatr == "Destreza" ) {
					modifDES = parseInt(personaje[npj].atributos[iatr].modif);
					break;
				}
			}
			//var daño = RolSolo.random(parseInt(personaje[npj].armas[indice].danoAD),1);
			
			var ndados=0;
			var daño = 0;
			for(ndados=0; ndados < parseInt(personaje[npj].armas[indice].danoAD.ndados); ndados++) {
				daño += RolSolo.random(parseInt(personaje[npj].armas[indice].danoAD.dado),1);
			}
			daño += parseInt(personaje[npj].armas[indice].danoAD.modif);
						
			if ( personaje[npj].tipobonifdaño == "AD" || personaje[npj].tipobonifdaño == "CC y AD" )
				daño += parseInt(personaje[npj].daño);
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].armas[indice].nombre + " (AD)<br/><b>Resultado: </b>" + (valor + parseInt(personaje[npj].ataque) + modifDES) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
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
	    
	    var modreaccion = document.getElementById('modreaccion' + npj);
	    
	    var tirada = RolSolo.random(6,1) + RolSolo.random(6,1) + reaccion + parseInt(modreaccion.value);
	    
	    var actitud = "Amistoso";
	    if ( tirada <= 2 )
	        actitud = "Hostil";
	    else if ( tirada <= 5 )
	        actitud = "Antipático";
	    else if ( tirada <= 8 )
	        actitud = "Indeciso";
	    else if ( tirada <= 11 )
	        actitud = "Indiferente";
	    
	    var mensaje = "<b>" + pnjs[npj].nombre + "</b> Reacción: " + reaccion + " Modificador: " + parseInt(modreaccion.value) + "<br/>Resultado: " + tirada + " -> " + actitud; 
	    RolSolo.escribemensaje(mensaje);
	}
}
