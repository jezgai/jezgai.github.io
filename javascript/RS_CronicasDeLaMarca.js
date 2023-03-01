class CronicasDeLaMarca {
	
	static ntipo2stipo(ntipo) {
		var stipo = "PJ";
		if (ntipo == 2) {
			stipo = "PNJ";
		}
		return stipo;
	}
	
	static seccionDados(npj, pj, ntipo) {
		var stipo = CronicasDeLaMarca.ntipo2stipo(ntipo);
		var seccion = "<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4," + (npj) + "," + ntipo + ")' alt='Dado d4' class='mano'/>" +
		"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6," + (npj) + "," + ntipo + ")' alt='Dado d6' class='mano'/>" + 
		"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8," + (npj) + "," + ntipo + ")' alt='Dado d8' class='mano'/>" + 
		"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10," + (npj) + "," + ntipo + ")' alt='Dado d10' class='mano'/>" + 
		"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12," + (npj) + "," + ntipo + ")' alt='Dado d12' class='mano'/>" + 
		"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20," + (npj) + "," + ntipo + ")' alt='Dado d20' class='mano'/>" +
		"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"' +  pj.nombre + '"' + ")' alt='" + pj.nombre + " habla' class='mano'/>" +
		"<img src='imagenes/Papelera.jpg' onclick='RolSolo.elimina(" + (npj)  + ',"' + stipo + '"' + ")' alt='Borra " + pj.nombre + "' class='mano'/>";
		return seccion;
	}
	
	static prefijoseccion(ntipo) {
		var prefijo = "pj";
		if (ntipo == 2)
			prefijo = "pnj";
		return prefijo;
	}
	
	static seccionAtributos(npj, pj, ntipo) {
		var indiceatr=0;
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + CronicasDeLaMarca.prefijoseccion(ntipo) + "atributos" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Atributos</strong></p></div>";
		seccion += "<div id='" + CronicasDeLaMarca.prefijoseccion(ntipo) + "atributos" + (npj) + "' class='w3-hide w3-container' >"
		seccion += "<table  class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indiceatr=0; indiceatr< pj.atributos.length; indiceatr++) {
			var primaria="";
			if (pj.atributos[indiceatr].primaria == "S") {
				primaria=" [*]";
			}
			seccion += "<tr><td><span class='mano' onclick='CronicasDeLaMarca.tiradaatr(" + indiceatr + "," + (npj) + "," + ntipo + ")'>" + pj.atributos[indiceatr].nombre + primaria + "</span></td><td>" + pj.atributos[indiceatr].valor + " (" + pj.atributos[indiceatr].modif + ")</td></tr>";
		}
		seccion += "</table></div>";
		return seccion;
	}
	
	static seccionAtaques(npj, pj) {
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + CronicasDeLaMarca.prefijoseccion(2) + "ataques" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Ataques</strong></p></div>";
		seccion += "<div id='" + CronicasDeLaMarca.prefijoseccion(2) + "ataques" + (npj) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Ataque</th><th>Daño</th></tr>";
		var funcion = "";
		var daño = "";
		
		var indice=0;
		for (indice=0;indice<pj.ataques.length; indice++) {
			funcion = "CronicasDeLaMarca.tiradaarma("+(npj) + "," + indice + ",1,2)";
			seccion += "<tr><td class='mano' onclick='" + funcion + "'>" + pj.ataques[indice].nombre + "</td><td>";
			
			var indicedaño=0;
			var secciondaño = ""; 
			for (indicedaño=0;indicedaño<pj.ataques[indice].daño.length; indicedaño++) {
				daño = pj.ataques[indice].daño[indicedaño].ndados + "d" + pj.ataques[indice].daño[indicedaño].tdado;
				if ( parseInt(pj.ataques[indice].daño[indicedaño].modif) > 0 ) {
					daño += "+" + pj.ataques[indice].daño[indicedaño].modif;
				}
				secciondaño += "<tr><td>" + daño + "</td><td>" + pj.ataques[indice].daño[indicedaño].tipo + "</td></tr>";
			}
			if ( secciondaño != "" ) {
				secciondaño = "<table class='w3-table  w3-striped '>" + secciondaño + "</table>";
			}
			seccion += secciondaño + "</td></tr>";
			
		}
		
		seccion += "</table></div>";
		return seccion;
	}
	
	static seccionArma(npj, pj, ntipo) {
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + CronicasDeLaMarca.prefijoseccion(ntipo) + "armas" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<div id='" + CronicasDeLaMarca.prefijoseccion(ntipo) + "armas" + (npj) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		var funcion = "";
		var usoalternativo = "";
		var daño = "";
		
		var indice=0;
		for (indice=0;indice<pj.armas.length; indice++) {
			if ( pj.armas[indice].tipo == "CaC" ) {
				funcion = "CronicasDeLaMarca.tiradaarma("+(npj) + "," + indice + ",1," + ntipo + ")";
				daño = pj.armas[indice].dañoCaC.ndados + "d" + pj.armas[indice].dañoCaC.tdado;
				if ( parseInt(pj.armas[indice].dañoCaC.modif) > 0 ) {
					daño += "+" + pj.armas[indice].dañoCaC.modif;
				}
				if( pj.armas[indice].hasOwnProperty('dañoAD') == true && pj.armas[indice].dañoAD != null && parseInt(pj.armas[indice].dañoAD.ndados) > 0 && parseInt(pj.armas[indice].dañoAD.tdado) > 0) {
					daño += " (" + pj.armas[indice].dañoAD.ndados + "d" + pj.armas[indice].dañoAD.tdado;
					if ( parseInt(pj.armas[indice].dañoAD.modif) > 0 ) {
						daño += "+" + pj.armas[indice].dañoAD.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='CronicasDeLaMarca.tiradaarma("+ (npj) + "," + indice + ",2," + ntipo + ")'>(A distancia)</span>";
				}
			}
			else if ( pj.arma.tipo == "AD" ) {
				
				funcion += indice + ",2," + ntipo + ")";
				daño = pj.armas[indice].dañoAD.ndados + "d" + pj.armas[indice].dañoAD.tdado;
				if ( parseInt(pj.armas[indice].dañoAD.modif) > 0 ) {
					daño += "+" + pj.armas[indice].dañoAD.modif;
				}
				if( pj.armas[indice].hasOwnProperty('dañoCaC') == true && pj.armas[indice].dañoCaC != null && parseInt(pj.armas[indice].dañoCaC.ndados) > 0 && parseInt(pj.armas[indice].dañoCaC.tdado) > 0) {
					daño += " (" + pj.armas[indice].dañoCaC.ndados + "d" + pj.armas[indice].dañoCaC.tdado;
					if ( parseInt(pj.armas[indice].dañoCaC.modif) > 0 ) {
						daño += "+" + pj.armas[indice].dañoCaC.modif;
					}
					daño += ")";
					usoalternativo = " <span class='mano' onclick='CronicasDeLaMarca.tiradaarma("+ (npj) + "," + indice + ",1," + ntipo + ")'>(Cuerpo a cuerpo)</span>";
				}
				
			}
			seccion += "<tr><td><span class='mano' onclick='" + funcion + "'>" + pj.armas[indice].nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + pj.armas[indice].tipo  + "</td></tr>";
		}
		
		seccion += "</table></div>";
		return seccion;
	}
	
	static seccionEquipo(npj, pj, ntipo) {
		var stipo = CronicasDeLaMarca.ntipo2stipo(ntipo);
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + CronicasDeLaMarca.prefijoseccion(ntipo) + "equipo" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Equipo</strong></p></div>";
		seccion += "<div id='" + CronicasDeLaMarca.prefijoseccion(ntipo) + "equipo" + (npj) + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + (npj) + ', "' + stipo + '")' + "' >";
		seccion += pj.equipo;
		seccion += "</div>";
		return seccion;
	}
	
	static seccionNotas(npj, pj, ntipo) {
		var stipo = CronicasDeLaMarca.ntipo2stipo(ntipo);
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + CronicasDeLaMarca.prefijoseccion(ntipo) + "notas" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Notas</strong></p></div>";
		seccion += "<div id='" + CronicasDeLaMarca.prefijoseccion(ntipo) + "notas" + (npj) + "' class='w3-hide w3-container' onclick='RolSolo.ventananotas(" + (npj) + ', "' + stipo + '")' + "' >";
		seccion += pj.notas;
		seccion += "</div>";
		return seccion;
	}

	static cargapersonaje(pjs) {
		
		var pjsaux = "";
				
		pjsaux+= CronicasDeLaMarca.seccionDados((numpj-1), personaje[numpj-1], 1);
		
		pjsaux+= CronicasDeLaMarca.seccionAtributos((numpj-1), personaje[numpj-1], 1);
		
		
				
		if( personaje[numpj-1].hasOwnProperty('pginicial') == false ){
			personaje[numpj-1].pginicial = personaje[numpj-1].pg;
		}
		
		if( personaje[numpj-1].hasOwnProperty('px') == false ){
			personaje[numpj-1].px = 0;
		}
				
		pjsaux+= CronicasDeLaMarca.seccionCaracteristicas((numpj-1), personaje[numpj-1], 1);
		
		pjsaux+= CronicasDeLaMarca.seccionArma((numpj-1), personaje[numpj-1], 1);
		
		
		if ( personaje[numpj-1].hasOwnProperty('equipo') == false ) {
			personaje[numpj-1].equipo = ".";
		}
		pjsaux += CronicasDeLaMarca.seccionEquipo((numpj-1), personaje[numpj-1], 1);
		
		if ( personaje[numpj-1].hasOwnProperty('notas') == false ) {
			personaje[numpj-1].notas = ".";
		}
		pjsaux += CronicasDeLaMarca.seccionNotas((numpj-1), personaje[numpj-1], 1);
				
		if( personaje[numpj-1].hasOwnProperty('estado') == false || (personaje[numpj-1].hasOwnProperty('estado') == true && personaje[numpj-1].estado != "Eliminado") ){
			pjs+=pjsaux;
		}
		return pjs;	
	}
	
	
	static cargapnj(pjs) {
		var pjsaux = "";
				
		pjsaux+= CronicasDeLaMarca.seccionDados((numpnj-1), pnjs[numpnj-1], 2);
		
				
		if( pnjs[numpnj-1].hasOwnProperty('pginicial') == false ){
			pnjs[numpnj-1].pginicial = pnjs[numpnj-1].pg;
		}
		
		if( pnjs[numpnj-1].hasOwnProperty('px') == false ){
			pnjs[numpnj-1].px = 0;
		}
				
		pjsaux+= CronicasDeLaMarca.seccionCaracteristicas((numpnj-1), pnjs[numpnj-1], 2);
		
		pjsaux+= CronicasDeLaMarca.seccionAtaques((numpnj-1), pnjs[numpnj-1]);
		
		
		if ( pnjs[numpnj-1].hasOwnProperty('equipo') == false ) {
			pnjs[numpnj-1].equipo = ".";
		}
		pjsaux += CronicasDeLaMarca.seccionEquipo((numpnj-1), pnjs[numpnj-1], 2);
		
		if ( pnjs[numpnj-1].hasOwnProperty('notas') == false ) {
			pnjs[numpnj-1].notas = ".";
		}
		pjsaux += CronicasDeLaMarca.seccionNotas((numpnj-1), pnjs[numpnj-1], 2);
				
		if( pnjs[numpnj-1].hasOwnProperty('estado') == false || (pnjs[numpnj-1].hasOwnProperty('estado') == true && pnjs[numpnj-1].estado != "Eliminado") ){
			pjs+=pjsaux;
		}
		return pjs;	
	}
	
	static seccionCaracteristicas(npj, pj, ntipo) {
		var stipo = CronicasDeLaMarca.ntipo2stipo(ntipo);
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + CronicasDeLaMarca.prefijoseccion(ntipo) + "caracteristicas" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<div id='" + CronicasDeLaMarca.prefijoseccion(ntipo) + "caracteristicas" + (npj) + "' class='w3-hide w3-container' >"
		seccion += CronicasDeLaMarca.contenidoSeccionCaracteristicas(npj, pj, stipo);
		seccion += "</div>";
		return seccion;
	}
	
	static contenidoSeccionCaracteristicas(npj, pj, stipo) {
		var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		if (stipo == "PNJ" ) {
			seccion += "<tr><td>Puntos de Golpe</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"pg",' + (npj) + ',"' + stipo + '")' + "' >" + pj.pg + " (" + pj.pginicial + ")" + "</td></tr>";
			seccion += "<tr><td>Clase de Armadura</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"ca",' + (npj) + ',"' + stipo + '")' + "' >" + pj.ca + "</td></tr>";
			seccion += "<tr><td class='mano' onclick='CronicasDeLaMarca.tiradaatr(2," + (npj) + ",2)'>Moral</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"ml",' + (npj) + ',"' + stipo + '")' + "' >" + pj.ml + "</td></tr>";
			seccion += "<tr><td>Dados de Golpe</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"dg",' + (npj) + ',"' + stipo + '")' + "' >" + pj.dg.numero + " (" + pj.dg.tipo + ")</td></tr>";
			seccion += "<tr><td>Puntos de eXperiencia</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"px",' + (npj) + ',"' + stipo + '")' + "' >" + pj.px + "</td></tr>";
			seccion += "<tr><td class='mano' onclick='CronicasDeLaMarca.tiradaatr(0," + (npj) + ",2)'>Salvación física</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"SFisica",' + (npj) + ',"' + stipo + '")' + "' >" + pj.SFisica + "</td></tr>";
			seccion += "<tr><td class='mano' onclick='CronicasDeLaMarca.tiradaatr(1," + (npj) + ",2)'>Salvación mental</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"SMental",' + (npj) + ',"' + stipo + '")' + "' >" + pj.SMental + "</td></tr>";
		}
		else {
			seccion += "<tr><td>Nivel</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"nivel",' + (npj) + ',"' + stipo + '")' + "' >" + pj.nivel + "</td></tr>";
			seccion += "<tr><td>Puntos de Golpe</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"pg",' + (npj) + ',"' + stipo + '")' + "' >" + pj.pg + " (" + pj.pginicial + ")" + "</td></tr>";
			seccion += "<tr><td>Clase de Armadura</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"ca",' + (npj) + ',"' + stipo + '")' + "' >" + pj.ca + "</td></tr>";
			seccion += "<tr><td>Bonificación de Ataque</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"ba",' + (npj) + ',"' + stipo + '")' + "' >" + pj.ba + "</td></tr>";
			seccion += "<tr><td>Puntos de eXperiencia</td><td class='mano' onclick='CronicasDeLaMarca.cambiacaracteristica(" + '"px",' + (npj) + ',"' + stipo + '")' + "' >" + pj.px + "</td></tr>";
			
		}
		seccion += "</table>";
		return seccion;
	}
	
	
	static modificacaracteristica(caracteristica, npj, tipo) {
		var valor = document.getElementById('vcaracteristica').value;
		var pj = null;
		if ( tipo == "PNJ" )
			pj = pnjs[npj];
		else
			pj = personaje[npj];
			
		if ( caracteristica == "pg" ) {
			pj.pg = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "ca" ) {
			pj.ca = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "ba" ) {
			pj.ba = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "px" ) {
			pj.px = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "nivel" ) {
			pj.nivel = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "dg" ) {
			pj.dg.numero = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "ml" ) {
			pj.ml = parseInt(document.getElementById('vcaracteristica').value);
		}
		else if ( caracteristica == "SFisica" ) {
			pj.SFisica = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "SMental" ) {
			pj.SMental = document.getElementById('vcaracteristica').value;
		}
		
		
		if ( tipo == "PNJ" ) {
			var seccion = CronicasDeLaMarca.contenidoSeccionCaracteristicas(npj, pnjs[npj], tipo);
			document.getElementById('pnjcaracteristicas'+npj).innerHTML = seccion;
			RolSolo.muestra('pnjcaracteristicas'+npj);
		}
		else  {
			var seccion = CronicasDeLaMarca.contenidoSeccionCaracteristicas(npj, personaje[npj], tipo);
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
		var pj = null;
		if ( tipo == "PNJ" )
			pj = pnjs[npj];
		else
			pj = personaje[npj];
		if ( caracteristica == "pg" ) {
			literal = "Puntos de Golpe";
			valor = pj.pg;
		}
		else if ( caracteristica == "ca" ) {
			literal = "Clase de armadura";
			valor = pj.ca;
		}
		else if ( caracteristica == "ba" ) {
			literal = "Bonificador de ataque";
			valor = pj.ba;
		}
		else if ( caracteristica == "px" ) {
			literal = "PX";
			valor = pj.px;
		}
		else if ( caracteristica == "nivel" ) {
			literal = "Nivel";
			valor = pj.nivel;
		}
		else if ( caracteristica == "dg" ) {
			literal = "Dados de golpe";
			valor = pj.dg.numero;
		}
		else if ( caracteristica == "ml" ) {
			literal = "Moral";
			valor = pj.ml;
		}
		else if ( caracteristica == "SFisica" ) {
			literal = "Salvacion Física";
			valor = pj.SFisica;
		}
		else if ( caracteristica == "SMental" ) {
			literal = "Salvacion Mental";
			valor = pj.SMental;
		}
		
		if ( literal != "" ){
			document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>" + literal + "</label>";
			document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='CronicasDeLaMarca.modificacaracteristica(" + '"' + caracteristica + '"' + "," + npj + ',"' + tipo + '"' + ")'>Modifica</button>";
			document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='CronicasDeLaMarca.cancelamodifcaracteristica()'>Cancela</button>";
			document.getElementById('vcaracteristica').value = valor;
			document.getElementById('ccaracteristica').style.display='block';
		}
	}
		
	static tiradaatr(indice, npj, tipo) {
		// ND Nivel de desafío = 12 ó 18 + GD Grado de dificultad
		var pj = null;
		var dbase = 18;
		var dificultad = 1;
		var nombremensaje = "";
		var desglosetirada = "";
		var tirada = RolSolo.random(20, 1);
		var literalventana = "Grado de dificultad";
		var tipotirada = "CronicasDeLaMarca";
		
		if ( tipo == 1 ) // PJ 
		{
			pj = personaje[npj];
			if ( pj.atributos[indice].primaria == "S" ) {
				dbase = 12;
			}
			nombremensaje = pj.atributos[indice].nombre;
			
			CM_tirada = tirada + parseInt(pj.atributos[indice].modif) + parseInt(pj.nivel);
			desglosetirada = " (" + tirada + "+" + pj.atributos[indice].modif + "+" + pj.nivel + ")";
		}
		else {
			pj = pnjs[npj];
			if ( indice == 2 ) {
				tirada = RolSolo.random(6,1) + RolSolo.random(6,1);
				nombremensaje = "Moral";
				CM_tirada = tirada;
				desglosetirada = "";
				literalventana = "Moral";
				dbase = 0;
				dificultad = pj.ml;
				tipotirada = "Moral";
			}
			else {
				if ( indice == 0 ) {
					if ( pj.SFisica == "S" ) {
						dbase = 12;
					}
					nombremensaje = "Salvación Física";
				}
				else if ( indice == 1 ) {
					if ( pj.SMental == "S" ) {
						dbase = 12;
					}
					nombremensaje = "Salvación Mental";
				}
				CM_tirada = tirada + parseInt(pj.dg.numero);
				desglosetirada = " (" + tirada + "+" + pj.dg.numero + ")";
			}
		}
		CM_mensaje = "<b>";
		CM_mensaje += pj.nombre + "</b> " + nombremensaje + "<br/><b>Resultado: " + CM_tirada + desglosetirada + "</b>";

		document.getElementById('lbldificultad').innerHTML = "<label id='lbldificultad'>" + literalventana + "</label>";
		
		document.getElementById("dificultad").value = dificultad;
		document.getElementById("dbase").value = dbase;
		document.getElementById("ttirada").value = tipotirada;
		document.getElementById('vtirada').style.display='block';
	}
	
	
	static tiradaarma(npj, numarma, tipoarma, tipo) {
		
		var pj = null;
		var desglosetirada = "";
		var stipo = "";
		var resdaño = 0;
		var tirada = RolSolo.random(20,1);
		var sdaño = "";
		var nombre;
		if ( tipo == 1 ) // PJ 
		{
			pj = personaje[npj];
			
			var ndados = 0;
			var tdado = 0;
			var modif = 0;
			var modifatributo = 0;
			
			if ( tipoarma == 2 ) {
				stipo = "AD";
				ndados = pj.armas[numarma].dañoAD.ndados;
				tdado = pj.armas[numarma].dañoAD.tdado;
				modif = pj.armas[numarma].dañoAD.modif;
				modifatributo = parseInt(pj.atributos[5].modif);
			}
			else {
				stipo = "CaC";
				ndados = pj.armas[numarma].dañoCaC.ndados;
				tdado = pj.armas[numarma].dañoCaC.tdado;
				modif = pj.armas[numarma].dañoCaC.modif;
				modifatributo = parseInt(pj.atributos[0].modif);
			}
			desglosetirada = " (" + tirada + "+" + modifatributo + "+" + pj.nivel + ")";
			modifatributo += parseInt(pj.ba);
			CM_tirada = tirada + modifatributo + parseInt(pj.nivel);
			var indice = 0;
			for (indice = 0; indice < ndados; indice++) {
				resdaño += RolSolo.random(tdado, 1);
			}
			resdaño += modif;
			sdaño = " " + resdaño;
			nombre = pj.armas[numarma].nombre + " (" + stipo + ")";
		}
		else {
			pj = pnjs[npj];
			modifatributo = parseInt(pj.dg.numero);
			desglosetirada = " (" + tirada + "+" + modifatributo + ")";
			CM_tirada = tirada + modifatributo;
			var indicedaño=0;
			for (indicedaño=0;indicedaño<pj.ataques[numarma].daño.length;indicedaño++) {
				var indice=0;
				resdaño = 0;
				for (indice = 0; indice < pj.ataques[numarma].daño[indicedaño].ndados; indice++) {
					resdaño += RolSolo.random(pj.ataques[numarma].daño[indicedaño].tdado,1);
				}
				resdaño += pj.ataques[numarma].daño[indicedaño].modif;
				if ( sdaño != "" ) {
					sdaño += " -";
				}
				if ( pj.ataques[numarma].daño[indicedaño].tipo != "" ) {
					sdaño += " (" + pj.ataques[numarma].daño[indicedaño].tipo + ")";
				}
				sdaño += " " + resdaño ;
				
			}
			nombre = pj.ataques[numarma].nombre;
		}
		 
		CM_mensaje = "<b>";
		CM_mensaje += pj.nombre + "</b> " + nombre + " <b>Daño:</b>" + sdaño + "<br/><b>Resultado: " + CM_tirada + desglosetirada + "</b>";

		document.getElementById('lbldificultad').innerHTML = "<label id='lbldificultad'>Clase de armadura del rival</label>";
		document.getElementById("dificultad").value = 10;
		document.getElementById("dbase").value = 0;
		document.getElementById("ttirada").value = "CronicasDeLaMarca";
		document.getElementById('vtirada').style.display='block';
	}
	
	
	static tirada() {
		document.getElementById('vtirada').style.display='none';
		var gd = parseInt(document.getElementById("dificultad").value);
		var dbase = parseInt(document.getElementById("dbase").value);
		var dificultad = gd + dbase;
		var resultado = " <strong>fallo</strong>";
		if ( CM_tirada > dificultad ) {
			resultado = " <strong>éxito</strong>";
		}
		CM_mensaje += " -> ND: " + dificultad + " " + resultado;
		RolSolo.escribemensaje(CM_mensaje);
	}
	  
}

