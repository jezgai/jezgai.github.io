class Mascaras {

	static cargapersonaje(pjs) {

		var atributo = "";
		var seccion = "";
		var indiceatr=0;
		var indice=0;
		
		//document.getElementById("dados").innerHTML = "<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6)' alt='Dado d6' class='mano'/>";
		
		pjs += "<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (numpj-1) + ")' alt='Dado d6' class='mano'/>";
		for (indiceatr=0; indiceatr< personaje[numpj-1].atributos.length; indiceatr++) {
			seccion = "<div class='w3-container w3-blue w3-center'><p class='mano' onclick='Mascaras.tiradaatr(" + indiceatr +")'><strong>" + personaje[numpj-1].atributos[indiceatr].nombre + "</strong> " + personaje[numpj-1].atributos[indiceatr].valor + "</p></div>"
			seccion += "<table class='w3-table  w3-striped w3-border'>";
			
			
			for (indice=0; indice< personaje[numpj-1].atributos[indiceatr].pericias.length; indice++) {
				var funcion="Mascaras.tiradapericia(" + indiceatr + ", " + indice + ")";
				if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre == "Combate cuerpo a cuerpo")
					funcion="Mascaras.tiradaCombate(1)";
				else if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre == "Combate sin armas")
					funcion="Mascaras.tiradaCombate(2)";
				else if ( personaje[numpj-1].atributos[indiceatr].pericias[indice].nombre == "Combate a distancia" )
					funcion="Mascaras.tiradaCombate(3)";
				
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
			pjs += seccion;
		}
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>"
		seccion += "<table class='w3-table  w3-striped w3-border'>";
		for (indice=0; indice<personaje[numpj-1].caracteristicas.length; indice++) {
			seccion += "<tr><td>" + personaje[numpj-1].caracteristicas[indice].nombre + "</td><td><span class='mano' onclick='Mascaras.cambiacaracteristica(" + indice + "," + (numpj-1) + ")' >" + personaje[numpj-1].caracteristicas[indice].valor + "</span></td><tr>";
		}
		seccion += "</table>";
		pjs += seccion;
		//document.getElementById("seccion5").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Tipo</th><th>Daño</th></tr>";
		seccion += "<tr><td>" + personaje[numpj-1].armaCaC.nombre + "</td><td>(CaC)</td><td>" + personaje[numpj-1].armaCaC.daño + "</td></tr>";
		seccion += "<tr><td>" + personaje[numpj-1].armaAD.nombre + "</td><td>(AD)</td><td>" + personaje[numpj-1].armaAD.daño + "</td></tr>";
		
		
		seccion +="</table>";
		pjs += seccion;
		//document.getElementById("seccion6").innerHTML = seccion;
		
		seccion = "<div class='w3-container w3-blue w3-center'><p><strong>Talentos</strong></p></div>"
		for (indice=0; indice<personaje[numpj-1].talentos.length; indice++) {
			seccion += "<b>" + personaje[numpj-1].talentos[indice].nombre + "</b>: " + personaje[numpj-1].talentos[indice].descripcion + "<br/>";
		}
		pjs += seccion;
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
	  var valor = RolTelegram.random(6,1);
	  if ( valor == 6 ) {
		  valor = 5 + Mascaras.tirada();
	  }
	  return valor;
  }
  
  static tiradaatr(indiceatr) {
	  var valor = Mascaras.tirada() + personaje.atributos[indiceatr].valor;
	  var valor2 = Mascaras.tirada() + personaje.atributos[indiceatr].valor;
	  var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.atributos[indiceatr].nombre + "[SL]<b>Resultado: </b>" + valor + " <b>V/D: </b>" + valor2;
	  RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
  }
  
  
  static tiradapericia(indiceatr, indicepericia) {
	  
	  var valorpj = personaje.atributos[indiceatr].valor;
	  if ( personaje.atributos[indiceatr].pericias[indicepericia].valor == true ) {
		  valorpj += 2;
	  }
	  
	  var valor = Mascaras.tirada() + valorpj;
	  var valor2 = Mascaras.tirada() + valorpj;
	  var mensaje = "<b>" + personaje.nombre + "</b> " + personaje.atributos[indiceatr].pericias[indicepericia].nombre + "[SL]<b>Resultado: </b>" + valor + " <b>V/D: </b>" + valor2;
	  RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	  
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
