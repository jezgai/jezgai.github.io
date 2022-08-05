class Mascaras {

	static cargapersonaje(pjs) {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
		var pjsaux="";
		
		//document.getElementById("dados").innerHTML = "<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6)' alt='Dado d6' class='mano'/>";
		
		pjsaux += "<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpj-1) + ",1)'"  + " alt='Dado d6' class='mano'/>"+
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  personaje[numpj-1].nombre + '"' + ")' alt='" + personaje[numpj-1].nombre + " habla' class='mano'/>" +
		"<img src='imagenes/Papelera.jpg' onclick='RolSolo.elimina(" + (numpj-1)  + ',"PJ"' + ")' alt='Borra " + personaje[numpj-1].nombre + "' class='mano'/>";
		for (indiceatr=0; indiceatr< personaje[numpj-1].atributos.length; indiceatr++) {
			seccion = "<div class='w3-container w3-blue w3-center'><p class='mano' onclick='Mascaras.tiradaatr(" + (numpj-1) + ", " + indiceatr + ', "PJ"' + ")'><strong>" + personaje[numpj-1].atributos[indiceatr].nombre + "</strong> " + personaje[numpj-1].atributos[indiceatr].valor + "</p></div>"
			seccion += "<table class='w3-table  w3-striped w3-border'>";
			
			
			for (indice=0; indice< personaje[numpj-1].atributos[indiceatr].pericias.length; indice++) {
				var funcion="Mascaras.tiradapericia(" + (numpj-1) + ", " + indiceatr + ", " + indice + ', "PJ"' + ")";
				/*if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre == "Combate cuerpo a cuerpo")
					funcion="Mascaras.tiradaCombate(1)";
				else if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre == "Combate sin armas")
					funcion="Mascaras.tiradaCombate(2)";
				else if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre == "Combate a distancia" )
					funcion="Mascaras.tiradaCombate(3)";
				*/
				seccion += "<tr><td><span class='mano' onclick='" + funcion + "' >" + personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre + "</span></td><td>";
				if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].valor == true ) {
					seccion += "<input type='checkbox' checked disabled>";
				}
				else {
					seccion += "<input type='checkbox' disabled>";
				}
				seccion += "</td></tr>";
				
			}
			seccion += "</table>";
			//document.getElementById("seccion" + (indiceatr+1)).innerHTML = seccion + "</ul>";
			pjsaux += seccion;
		}
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>"
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<personaje[numpj-1].caracteristicas.length; indice++) {
			seccion += "<tr><td>" + personaje[numpj-1].caracteristicas[indice].nombre + "</td><td><span class='mano' onclick='Mascaras.cambiacaracteristica(" + indice + "," + (numpj-1) + ")' >" + personaje[numpj-1].caracteristicas[indice].valor + "</span></td><tr>";
		}
		seccion += "</table>";
		pjsaux += seccion;
		//document.getElementById("seccion5").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Tipo</th><th>Daño</th></tr>";
		seccion += "<tr><td>" + personaje[numpj-1].armaCaC.nombre + "</td><td>(CaC)</td><td>" + personaje[numpj-1].armaCaC.daño + "</td></tr>";
		seccion += "<tr><td>" + personaje[numpj-1].armaAD.nombre + "</td><td>(AD)</td><td>" + personaje[numpj-1].armaAD.daño + "</td></tr>";
		
		
		seccion +="</table>";
		pjsaux += seccion;
		//document.getElementById("seccion6").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Talentos</strong></p></div>"
		for (indice=0; indice<personaje[numpj-1].talentos.length; indice++) {
			seccion += "<b>" + personaje[numpj-1].talentos[indice].nombre + "</b>: " + personaje[numpj-1].talentos[indice].descripcion + "<br/>";
		}
		pjsaux += seccion;
		
		if ( personaje[numpj-1].hasOwnProperty('equipo') == false ) {
			personaje[numpj-1].equipo = ".";
		}
		seccion = "<div onclick=" + '"' + "RolSolo.acordeon('pjequipo" + (numpj-1) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Equipo</strong></p></div>";
		seccion += "<div id='pjequipo" + (numpj-1) + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + (numpj-1) + ', "PJ")' + "' >";
		seccion += personaje[numpj-1].equipo;
		seccion += "</div>";
		pjsaux += seccion;
		
		if ( personaje[numpj-1].hasOwnProperty('notas') == false ) {
			personaje[numpj-1].equipo = ".";
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
		var pjsaux="";
		
		//document.getElementById("dados").innerHTML = "<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6)' alt='Dado d6' class='mano'/>";
		
		pjsaux += "<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpnj-1) + ",0)'"  + " alt='Dado d6' class='mano'/>" +
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  pnjs[numpnj-1].nombre + '"' + ")' alt='" + personaje[numpnj-1].nombre + " habla' class='mano'/>" +
		"<img src='imagenes/Papelera.jpg' onclick='RolSolo.elimina(" + (numpj-1)  + ',"PNJ"' + ")' alt='Borra " + pnjs[numpj-1].nombre + "' class='mano'/>";
		
		for (indiceatr=0; indiceatr< pnjs[numpnj-1].atributos.length; indiceatr++) {
			seccion = "<div class='w3-container w3-blue w3-center'><p class='mano' onclick='Mascaras.tiradaatr(" + (numpnj-1) + ", " + indiceatr + ', "PNJ"' + ")'><strong>" + pnjs[numpnj-1].atributos[indiceatr].nombre + "</strong> " + pnjs[numpnj-1].atributos[indiceatr].valor + "</p></div>"
			seccion += "<table class='w3-table  w3-striped w3-border'>";
			
			
			for (indice=0; indice< pnjs[numpnj-1].atributos[indiceatr].pericias.length; indice++) {
				var funcion="Mascaras.tiradapericia(" + (numpnj-1) + ", " + indiceatr + ", " + indice + ', "PNJ"' + ")";
				/*if ( pnjs[numpnj-1].atributos[indiceatr].pericias[indice].nombre == "Combate cuerpo a cuerpo")
					funcion="Mascaras.tiradaCombate(1)";
				else if ( pnjs[numpnj-1].atributos[indiceatr].pericias[indice].nombre == "Combate sin armas")
					funcion="Mascaras.tiradaCombate(2)";
				else if ( pnjs[numpnj-1].atributos[indiceatr].pericias[indice].nombre == "Combate a distancia" )
					funcion="Mascaras.tiradaCombate(3)";
				*/
				seccion += "<tr><td><span class='mano' onclick='" + funcion + "' >" + pnjs[numpnj-1].atributos[indiceatr].pericias[indice].nombre + "</span></td><td>";
				if ( pnjs[numpnj-1].atributos[indiceatr].pericias[indice].valor == true ) {
					seccion += "<input type='checkbox' checked disabled>";
				}
				else {
					seccion += "<input type='checkbox' disabled>";
				}
				seccion += "</td></tr>";
				
			}
			seccion += "</table>";
			//document.getElementById("seccion" + (indiceatr+1)).innerHTML = seccion + "</ul>";
			pjsaux += seccion;
		}
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>"
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<pnjs[numpnj-1].caracteristicas.length; indice++) {
			seccion += "<tr><td>" + pnjs[numpnj-1].caracteristicas[indice].nombre + "</td><td><span class='mano' onclick='Mascaras.cambiacaracteristica(" + indice + "," + (numpnj-1) + ")' >" + pnjs[numpnj-1].caracteristicas[indice].valor + "</span></td><tr>";
		}
		seccion += "</table>";
		pjsaux += seccion;
		//document.getElementById("seccion5").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Tipo</th><th>Daño</th></tr>";
		seccion += "<tr><td>" + pnjs[numpnj-1].armaCaC.nombre + "</td><td>(CaC)</td><td>" + pnjs[numpnj-1].armaCaC.daño + "</td></tr>";
		seccion += "<tr><td>" + pnjs[numpnj-1].armaAD.nombre + "</td><td>(AD)</td><td>" + pnjs[numpnj-1].armaAD.daño + "</td></tr>";
		
		
		seccion +="</table>";
		pjsaux += seccion;
		//document.getElementById("seccion6").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Talentos</strong></p></div>"
		for (indice=0; indice<pnjs[numpnj-1].talentos.length; indice++) {
			seccion += "<b>" + pnjs[numpnj-1].talentos[indice].nombre + "</b>: " + pnjs[numpnj-1].talentos[indice].descripcion + "<br/>";
		}
		pjsaux += seccion;
		
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
		
		//document.getElementById("seccion7").innerHTML = seccion;
		return pjs;
	}
	
	static modificacaracteristica(indice, npj) {
		personaje[npj].caracteristicas[indice].valor = document.getElementById('vcaracteristica').value;
		document.getElementById('ccaracteristica').style.display='none';
		Mascaras.cargapersonaje();
	}
	
	static cancelamodifcaracteristica() {
		document.getElementById('ccaracteristica').style.display='none';
	}

	static cambiacaracteristica(indice, npj) {
		document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>Característica " + personaje[npj].caracteristicas[indice].nombre + "</label>";
		document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='Mascaras.modificacaracteristica(" + indice + "," + npj + ")'>Modifica</button>";
		document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='Mascaras.cancelamodifcaracteristica()'>Cancela</button>";
		document.getElementById('vcaracteristica').value = personaje[npj].caracteristicas[indice].valor;
		document.getElementById('ccaracteristica').style.display='block';
	}
	
	
  static tirada() {
	  var valor = RolSolo.random(6,1);
	  if ( valor == 6 ) {
		  valor = 5 + Mascaras.tirada();
	  }
	  return valor;
  }
  
  static tiradaatr(npj, indiceatr, tipo) {
	  var valor = Mascaras.tirada();
	  if ( tipo == "PNJ" )
		valor += pnjs[npj].atributos[indiceatr].valor;
	  else
		valor += personaje[npj].atributos[indiceatr].valor;
	  var valor2 = Mascaras.tirada();
	  if ( tipo == "PNJ" )
		valor2 += pnjs[npj].atributos[indiceatr].valor;
	  else
		valor2 += personaje[npj].atributos[indiceatr].valor;
		
	  var mensaje = "<b>";
	  if ( tipo == "PNJ" )
		mensaje += pnjs[npj].nombre + "</b> " + pnjs[npj].atributos[indiceatr].nombre;
	  else
		mensaje += personaje[npj].nombre + "</b> " + personaje[npj].atributos[indiceatr].nombre;
	  mensaje += "<br/><b>Resultado: </b>" + valor + " (<b>Ventaja/Desventaja: </b>" + valor2 + ")";
	  RolSolo.escribemensaje(mensaje);
  }
  
  static valortiradapericia(npj, indiceatr, indicepericia, tipo) {
	  var valorpj = 0;
	  
	  if ( tipo == "PNJ" ) {
		valorpj = pnjs[npj].atributos[indiceatr].valor;
		if ( pnjs[npj].atributos[indiceatr].pericias[indicepericia].valor == true ) {
		  valorpj += 2;
		}
	  }
	  else {
		valorpj = personaje[npj].atributos[indiceatr].valor;
		if ( personaje[npj].atributos[indiceatr].pericias[indicepericia].valor == true ) {
		  valorpj += 2;
		}
	  }
	  return Mascaras.tirada() + valorpj;
  }
  
  
  static tiradapericia(npj, indiceatr, indicepericia, tipo) {
	  
	  var valor = Mascaras.valortiradapericia(npj, indiceatr, indicepericia, tipo);
	  var valor2 = Mascaras.valortiradapericia(npj, indiceatr, indicepericia, tipo);
	  
	  var nombre = "";
	  var nombrepericia = "";
	  if ( tipo == "PNJ" ) {
		nombre = pnjs[npj].nombre;
		nombrepericia = pnjs[npj].atributos[indiceatr].pericias[indicepericia].nombre;
	  }
	  else {
		nombre = personaje[npj].nombre;
		nombrepericia = personaje[npj].atributos[indiceatr].pericias[indicepericia].nombre;
	  }
	  
	  var mensaje = "<b>" + nombre + "</b> " + nombrepericia + "<br/><b>Resultado: </b>" + valor + " (<b>Ventaja/Desventaja: </b>" + valor2 + ")";
	  RolSolo.escribemensaje(mensaje);
	  
  }
  
  static buscaAtributo(nombre) {
	  var indiceatr=0;
	  for (indiceatr=0; indiceatr< personaje.atributos.length; indiceatr++) {
		  if ( personaje.atributos[indiceatr].nombre == nombre )
				break;
	  }
	  return indiceatr;
  }
  
	static buscaPericia(atributo, nombre) {
	  var indice=0;
	  for (indice=0; indice< personaje.atributos[atributo].pericias.length; indice++) {
		  if ( personaje.atributos[atributo].pericias[indice].nombre == nombre )
				break;
	  }
	  return indice;
	}
  
	static tiradaCombate(c) { // c = 1 Combate cuerpo a cuerpo, c = 2 Combate sin armas, c = 3 Combate a distancia	  
	  combate = c;
	  document.getElementById('vdefensa').style.display='block';
	}
  
	static tiradaConDanyo() {
	  var daño = 1;
	  var indiceatr = 0;
	  var indicepericia = 0;
	  var arma="";
	  if ( combate == 1 ) {
		  daño = parseInt(personaje.armaCaC.daño);
		  indiceatr = Mascaras.buscaAtributo("Brio");
		  indicepericia = Mascaras.buscaPericia(indiceatr, "Combate cuerpo a cuerpo");
		  arma = " (" + personaje.armaCaC.nombre + ")";
	  }
	  else if ( combate == 3 ) {
		  daño = parseInt(personaje.armaAD.daño);
		  indiceatr = Mascaras.buscaAtributo("Picaresca");
		  indicepericia = Mascaras.buscaPericia(indiceatr, "Combate a distancia");
		  arma = " (" + personaje.armaAD.nombre + ")";
	  }	  
	  else {
		  indiceatr = Mascaras.buscaAtributo("Brio");
		  indicepericia = Mascaras.buscaPericia(indiceatr, "Combate sin armas");
	  }
	  var vdefensa = document.getElementById("defensa").value;
	  
	  document.getElementById('vdefensa').style.display='none';
	  	  
	  var valorpj = personaje.atributos[indiceatr].valor;
	  if ( personaje.atributos[indiceatr].pericias[indicepericia].valor == true ) {
		  valorpj += 2;
	  }
	  
	  var valor = Mascaras.tirada() + valorpj;
	  var valor2 = Mascaras.tirada() + valorpj;
	  var adicional1 = "";
	  var adicional2 = "";
	  if ( valor >= parseInt(vdefensa) ) {
		  adicional1 = "<b>Daño: </b>" + ( valor + daño - parseInt(vdefensa) ) + ". " ;
	  }
	  if ( valor2 >= parseInt(vdefensa) ) {
		  adicional2 = "<b>Daño (V/D): </b>" + ( valor2 + daño - parseInt(vdefensa) ) + ".";
	  }
	  if ( adicional1 != "" || adicional2 != "" ) {
		  adicional1 = "[SL]" + adicional1;
	  }
	  
	  
	  var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.atributos[indiceatr].pericias[indicepericia].nombre + arma + " (" + daño + ")[SL]<b>Resultado: </b>" + valor + " <b>V/D: </b>" + valor2 + "[SL]<b>Defensa: </b>" + vdefensa + adicional1 + adicional2;
	  
	  RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	  
	  
	}
}
