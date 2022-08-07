class LaMarcaDelEste {

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
			seccion += "<tr><td><span class='mano' onclick='LaMarcaDelEste.tiradaatr(" + indiceatr + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].atributos[indiceatr].nbatr + "</span></td><td>" + personaje[numpj-1].atributos[indiceatr].valor + " (" + personaje[numpj-1].atributos[indiceatr].modif + ")</td></tr>";
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
		seccion += "<tr><td>PV</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"pv",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].pv + " (" + personaje[numpj-1].pvinicial + ")" + "</td></tr>";
		seccion += "<tr><td>CA</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ca",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].ca + "</td></tr>";
		seccion += "<tr><td>Iniciativa</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ini",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].ini + "</td></tr>";
		seccion += "<tr><td>Ataque</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ataque",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].ataque + "</td></tr>";
		seccion += "<tr><td>PX</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"px",' + (numpj-1) + ',"PJ")' + "' >" + personaje[numpj-1].px + "</td></tr>";
		
		seccion += "</table></div>";
		pjsaux+= seccion;
		//document.getElementById("seccion2").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjsalvaciones" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<div id='pjsalvaciones" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje[numpj-1].salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='LaMarcaDelEste.tiradasalv(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].salvaciones[indice].nombre + "</span></td><td>" + personaje[numpj-1].salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
		//document.getElementById("seccion3").innerHTML = seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjhabilidades" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Habilidades</strong></p></div>";
		seccion += "<div id='pjhabilidades" + (numpj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Habilidad</th><th>Valor</th></tr>";
		for (indice=0; indice<personaje[numpj-1].habilidades.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='LaMarcaDelEste.tiradahabilidad(" + indice + "," + (numpj-1) + "," + personaje[numpj-1].habilidades[indice].dado + ",1)'>" + personaje[numpj-1].habilidades[indice].nombre + "</span></td><td>" + personaje[numpj-1].habilidades[indice].valor + " (" + personaje[numpj-1].habilidades[indice].dado + ")</td></tr>";
		}
		seccion += "</table>";
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
				funcion = "LaMarcaDelEste.tiradaarmaCaC";
				if ( personaje[numpj-1].armas[indice].danoAD.dado != 0 ) {
					daño += " (" + personaje[numpj-1].armas[indice].danoAD.ndados +"d" + personaje[numpj-1].armas[indice].danoAD.dado;
					if ( parseInt(personaje[numpj-1].armas[indice].danoAD.modif) > 0 ) {
						daño += "+" + personaje[numpj-1].armas[indice].danoAD.modif;
					}
					else if ( parseInt(personaje[numpj-1].armas[indice].danoAD.modif) < 0 ) {
						daño += personaje[numpj-1].armas[indice].danoAD.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='LaMarcaDelEste.tiradaarmaAD("+ indice + "," + (numpj-1) + ",1)'>(A distancia)</span>";
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
				funcion = "LaMarcaDelEste.tiradaarmaAD";
				if ( personaje[numpj-1].armas[indice].danoCaC.dado != 0 ) {
					daño += " (" + personaje[numpj-1].armas[indice].danoCaC.ndados + "d" + personaje[numpj-1].armas[indice].danoCaC.dado;
					if ( parseInt(personaje[numpj-1].armas[indice].danoCaC.modif) > 0 ) {
						daño += "+" + personaje[numpj-1].armas[indice].danoCaC.modif;
					}
					else if ( parseInt(personaje[numpj-1].armas[indice].danoCaC.modif) < 0 ) {
						daño += personaje[numpj-1].armas[indice].danoCaC.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='LaMarcaDelEste.tiradaarmaCaC("+ indice + "," + (numpj-1) + ",1)'>(Cuerpo a cuerpo)</span>";
				}
			}
			
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "(" + indice + "," + (numpj-1) + ",1)'>" + personaje[numpj-1].armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + personaje[numpj-1].armas[indice].tipo  + "</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
		
		var numeroseccion = 5;
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
		seccion += "<tr><td>PV</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"pv",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].pv + " (" + pnjs[numpnj-1].pvinicial + ")" + "</td></tr>";
		seccion += "<tr><td>CA</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ca",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].ca + "</td></tr>";
		seccion += "<tr><td>Iniciativa</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ini",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].ini + "</td></tr>";
		seccion += "<tr><td>Ataque</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ataque",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].ataque + "</td></tr>";
		seccion += "<tr><td class='mano' onclick='LaMarcaDelEste.tiradamoral(" + (numpnj-1) + ")'>Moral</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"moral",' + (numpnj-1) + ',"PNJ")' + "' >" + pnjs[numpnj-1].moral + "</td></tr>";
		
		seccion += "</table></div>";
		pjsaux+= seccion;
		
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjsalvaciones" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Salvaciones</strong></p></div>";
		seccion += "<div id='pnjsalvaciones" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Salvación</th><th>Valor</th></tr>";
		for (indice=0; indice<pnjs[numpnj-1].salvaciones.length; indice++) {
			seccion += "<tr><td><span class='mano' onclick='LaMarcaDelEste.tiradasalv(" + indice + "," + (numpnj-1) + ",0)'>" + pnjs[numpnj-1].salvaciones[indice].nombre + "</span></td><td>" + pnjs[numpnj-1].salvaciones[indice].valor + "</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
				
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
				funcion = "LaMarcaDelEste.tiradaarmaCaC";
				if ( pnjs[numpnj-1].armas[indice].danoAD.dado != 0 ) {
					daño += " (" + pnjs[numpnj-1].armas[indice].danoAD.ndados +"d" + pnjs[numpnj-1].armas[indice].danoAD.dado;
					if ( parseInt(pnjs[numpnj-1].armas[indice].danoAD.modif) > 0 ) {
						daño += "+" + pnjs[numpnj-1].armas[indice].danoAD.modif;
					}
					else if ( parseInt(pnjs[numpnj-1].armas[indice].danoAD.modif) < 0 ) {
						daño += pnjs[numpnj-1].armas[indice].danoAD.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='LaMarcaDelEste.tiradaarmaAD("+ indice + "," + (numpnj-1) + ",0)'>(A distancia)</span>";
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
				funcion = "LaMarcaDelEste.tiradaarmaAD";
				if ( pnjs[numpnj-1].armas[indice].danoCaC.dado != 0 ) {
					daño += " (" + pnjs[numpnj-1].armas[indice].danoCaC.ndados + "d" + pnjs[numpnj-1].armas[indice].danoCaC.dado;
					if ( parseInt(pnjs[numpnj-1].armas[indice].danoCaC.modif) > 0 ) {
						daño += "+" + pnjs[numpnj-1].armas[indice].danoCaC.modif;
					}
					else if ( parseInt(pnjs[numpnj-1].armas[indice].danoCaC.modif) < 0 ) {
						daño += pnjs[numpnj-1].armas[indice].danoCaC.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='LaMarcaDelEste.tiradaarmaCaC("+ indice + "," + (numpnj-1) + ",1)'>(Cuerpo a cuerpo)</span>";
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
		
			
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pnjcarespeciales" + (numpnj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características especiales</strong></p></div>";
		seccion += "<div id='pnjcarespeciales" + (numpnj-1) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<pnjs[numpnj-1].caracteristicas.length; indice++) {
			seccion += "<tr><td>" + pnjs[numpnj-1].caracteristicas[indice] + "</td></tr>";
		}
		seccion += "</table></div>";
		pjsaux+= seccion;
		
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
		if ( tipo == "PNJ" ) {
			//var seccion = "<div id='pnjcaracteristicas" + npj + "' class='w3-hide w3-container' >"
			var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th></th><th>Valor</th></tr>";
			seccion += "<tr><td>PV</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"pv",' + npj+ ',"PNJ")' + "' >" + pnjs[npj].pv + " (" + pnjs[npj].pvinicial + ")" + "</td></tr>";
			seccion += "<tr><td>CA</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ca",' + npj + ',"PNJ")' + "' >" + pnjs[npj].ca + "</td></tr>";
			seccion += "<tr><td>Iniciativa</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ini",' + npj + ',"PNJ")' + "' >" + pnjs[npj].ini + "</td></tr>";
			seccion += "<tr><td>Ataque</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ataque",' + npj + ',"PNJ")' + "' >" + pnjs[npj].ataque + "</td></tr>";
			seccion += "<tr><td class='mano' onclick='LaMarcaDelEste.tiradamoral(" + npj + ")'>Moral</td><td></td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"moral",' + npj + ',"PNJ")' + "' >" + pnjs[npj].moral + "</td></tr>";
		
			
			seccion += "</table>";
			document.getElementById('pnjcaracteristicas'+npj).innerHTML = seccion;
			RolSolo.muestra('pnjcaracteristicas'+npj);
		}
		else  {
			//var seccion = "<div id='pjcaracteristicas" + npj + "' class='w3-hide w3-container' >"
			var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
			seccion += "<tr><td>PV</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"pv",' + npj+ ',"PJ")' + "' >" + personaje[npj].pv + " (" + personaje[npj].pvinicial + ")" + "</td></tr>";
			seccion += "<tr><td>CA</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ca",' + (npj) + ',"PJ")' + "' >" + personaje[npj].ca + "</td></tr>";
			seccion += "<tr><td>Iniciativa</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ini",' + (npj) + ',"PJ")' + "' >" + personaje[npj].ini + "</td></tr>";
			seccion += "<tr><td>Ataque</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"ataque",' + (npj) + ',"PJ")' + "' >" + personaje[npj].ataque + "</td></tr>";
			seccion += "<tr><td>PX</td><td class='mano' onclick='LaMarcaDelEste.cambiacaracteristica(" + '"px",' + (npj) + ',"PJ")' + "' >" + personaje[npj].px + "</td></tr>";
			
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
		else if ( caracteristica == "px" ) {
			literal = "PX";
			if ( tipo != "PNJ" )
				valor = personaje[npj].px;
		}
		if ( literal != "" ){
			document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>" + literal + "</label>";
			document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='LaMarcaDelEste.modificacaracteristica(" + '"' + caracteristica + '"' + "," + npj + ',"' + tipo + '"' + ")'>Modifica</button>";
			document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='LaMarcaDelEste.cancelamodifcaracteristica()'>Cancela</button>";
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
	
	static tiradahabilidad(indice, npj, dado, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(dado, 1);
		var mensaje = "<b>";
		if ( tipo == "PNJ" ) 
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].habilidades[indice].nombre + " (" +  pnjs[npj].habilidades[indice].valor + ")<br/><b>Resultado: </b>" + valor;
		else
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].habilidades[indice].nombre + " (" +  personaje[npj].habilidades[indice].valor + ")<br/><b>Resultado: </b>" + valor;
		RolSolo.escribemensaje(mensaje);
	}
	  
	
	static tiradaarmaCaC(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(20, 1);
		var mensaje = "<b>";
		var modificador = 0;
		if ( tipo == "PNJ" ) {
			var ndados=0;
			var daño = 0;
			if ( pnjs[npj].hasOwnProperty('ataquecac') == true ) {
				modificador = parseInt(pnjs[npj].ataquecac);
			}
			for(ndados=0; ndados < parseInt(pnjs[npj].armas[indice].danoCaC.ndados); ndados++) {
				daño += RolSolo.random(parseInt(pnjs[npj].armas[indice].danoCaC.dado),1);
			}
			daño += parseInt(pnjs[npj].armas[indice].danoCaC.modif);
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].armas[indice].nombre + " (CaC)<br/><b>Resultado: </b>" + (valor + parseInt(pnjs[npj].ataque) + modificador) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		else {
			var ndados=0;
			var daño = 0;
			if ( personaje[npj].hasOwnProperty('ataquecac') == true ) {
				modificador = parseInt(personaje[npj].ataquecac);
			}
			for(ndados=0; ndados < parseInt(personaje[npj].armas[indice].danoCaC.ndados); ndados++) {
				daño += RolSolo.random(parseInt(personaje[npj].armas[indice].danoCaC.dado),1);
			}
			daño += parseInt(personaje[npj].armas[indice].danoCaC.modif) + parseInt(personaje[npj].atributos[0].modif);
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].armas[indice].nombre + " (CaC)<br/><b>Resultado: </b>" + (valor + parseInt(personaje[npj].ataque) + parseInt(personaje[npj].atributos[0].modif) + modificador) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		RolSolo.escribemensaje(mensaje);
	}
	
	static tiradaarmaAD(indice, npj, pj) {
		var tipo = "PJ";
		if (pj == 0 ) 
			tipo = "PNJ";
		var valor = RolSolo.random(20, 1);
		var mensaje = "<b>";
		var modificador = 0;
		if ( tipo == "PNJ" ) {
			var ndados=0;
			var daño = 0;
			if ( pnjs[npj].hasOwnProperty('ataquead') == true ) {
				modificador = parseInt(pnjs[npj].ataquead);
			}
			for(ndados=0; ndados < parseInt(pnjs[npj].armas[indice].danoAD.ndados); ndados++) {
				daño += RolSolo.random(parseInt(pnjs[npj].armas[indice].danoAD.dado),1);
			}
			daño += parseInt(pnjs[npj].armas[indice].danoAD.modif);
			mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].armas[indice].nombre + " (AD)<br/><b>Resultado: </b>" + (valor + parseInt(pnjs[npj].ataque) + modificador) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
		}
		else {
			var ndados=0;
			var daño = 0;
			if ( personaje[npj].hasOwnProperty('ataquead') == true ) {
				modificador = parseInt(personaje[npj].ataquead);
			}
			for(ndados=0; ndados < parseInt(personaje[npj].armas[indice].danoAD.ndados); ndados++) {
				daño += RolSolo.random(parseInt(personaje[npj].armas[indice].danoAD.dado),1);
			}
			daño += parseInt(personaje[npj].armas[indice].danoAD.modif);
			mensaje += personaje[npj].nombre + "</b> " + personaje[npj].armas[indice].nombre + " (AD)<br/><b>Resultado: </b>" + (valor + parseInt(personaje[npj].ataque) + parseInt(personaje[npj].atributos[1].modif) + modificador) + " (" + valor + ")<br/><b>Daño: </b>" + daño;
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
