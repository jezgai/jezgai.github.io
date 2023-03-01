class Knave {
	
	static ntipo2stipo(ntipo) {
		var stipo = "PJ";
		if (ntipo == 2) {
			stipo = "PNJ";
		}
		return stipo;
	}
	
	static seccionDados(npj, pj, ntipo) {
		var stipo = Knave.ntipo2stipo(ntipo);
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
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + Knave.prefijoseccion(ntipo) + "atributos" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Atributos</strong></p></div>";
		seccion += "<div id='" + Knave.prefijoseccion(ntipo) + "atributos" + (npj) + "' class='w3-hide w3-container' >"
		seccion += "<table  class='w3-table  w3-striped w3-border'><tr><th>Atributo</th><th>Valor (mod)</th></tr>";
		for (indiceatr=0; indiceatr< pj.atributos.length; indiceatr++) {
			seccion += "<tr><td><span class='mano' onclick='Knave.tiradaatr(" + indiceatr + "," + (npj) + "," + ntipo + ")'>" + pj.atributos[indiceatr].nombre + "</span></td><td>" + pj.atributos[indiceatr].defensa + " (" + pj.atributos[indiceatr].bono + ")</td></tr>";
		}
		seccion += "</table></div>";
		return seccion;
	}
	
	static seccionArma(npj, pj, ntipo) {
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + Knave.prefijoseccion(ntipo) + "armas" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Armas</strong></p></div>";
		seccion += "<div id='" + Knave.prefijoseccion(ntipo) + "armas" + (npj) + "' class='w3-hide w3-container' >"
		seccion += "<table class='w3-table  w3-striped w3-border'><tr><th>Arma</th><th>Daño</th><th>Tipo</th></tr>";
		var funcion = "Knave.tiradaarma("+(npj) + ",";
		var usoalternativo = "";
		var daño = "";
		if ( pj.arma.tipo == "CaC" ) {
			funcion += pj.arma.dañoCaC + ",1," + ntipo + ")";
			daño = "d" + pj.arma.dañoCaC;
			if ( pj.arma.dañoAD != null ) {
				daño += " (d" + pj.arma.dañoAD + ")";
				usoalternativo = " <span class='mano' onclick='Knave.tiradaarma("+ (npj) + "," + pj.arma.dañoAD + ",2," + ntipo + ")'>(A distancia)</span>";
			}
		}
		else if ( pj.arma.tipo == "AD" ) {
			funcion += pj.arma.dañoAD + ",2," + ntipo + ")";
			daño = "d" + pj.arma.dañoAD;
			if ( pj.arma.dañoCaC != null ) {
				daño += " (d" + pj.arma.dañoCaC + ")";
				usoalternativo = " <span class='mano' onclick='Knave.tiradaarma("+ (npj) + "," + pj.arma.dañoCaC + ",1," + ntipo + ")'>(Cuerpo a cuerpo)</span>";
			}
		}
		seccion += "<tr><td><span class='mano' onclick='" + funcion + "'>" + pj.arma.nombre + "</span>" + usoalternativo + "</td><td>" + daño + "</td><td>" + pj.arma.tipo  + "</td></tr>";
		seccion += "</table></div>";
		return seccion;
	}
	
	static seccionEquipo(npj, pj, ntipo) {
		var stipo = Knave.ntipo2stipo(ntipo);
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + Knave.prefijoseccion(ntipo) + "equipo" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Equipo</strong></p></div>";
		seccion += "<div id='" + Knave.prefijoseccion(ntipo) + "equipo" + (npj) + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + (npj) + ', "' + stipo + '")' + "' >";
		seccion += pj.equipo;
		seccion += "</div>";
		return seccion;
	}
	
	static seccionNotas(npj, pj, ntipo) {
		var stipo = Knave.ntipo2stipo(ntipo);
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + Knave.prefijoseccion(ntipo) + "notas" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Notas</strong></p></div>";
		seccion += "<div id='" + Knave.prefijoseccion(ntipo) + "notas" + (npj) + "' class='w3-hide w3-container' onclick='RolSolo.ventananotas(" + (npj) + ', "' + stipo + '")' + "' >";
		seccion += pj.notas;
		seccion += "</div>";
		return seccion;
	}

	static cargapersonaje(pjs) {
		
		var pjsaux = "";
				
		pjsaux+= Knave.seccionDados((numpj-1), personaje[numpj-1], 1);
		
		pjsaux+= Knave.seccionAtributos((numpj-1), personaje[numpj-1], 1);
		
		
				
		if( personaje[numpj-1].hasOwnProperty('pginicial') == false ){
			personaje[numpj-1].pginicial = personaje[numpj-1].pg;
		}
		
		if( personaje[numpj-1].hasOwnProperty('px') == false ){
			personaje[numpj-1].px = 0;
		}
				
		pjsaux+= Knave.seccionCaracteristicas((numpj-1), personaje[numpj-1], 1);
		
		pjsaux+= Knave.seccionArma((numpj-1), personaje[numpj-1], 1);
		
		
		if ( personaje[numpj-1].hasOwnProperty('equipo') == false ) {
			personaje[numpj-1].equipo = ".";
		}
		pjsaux += Knave.seccionEquipo((numpj-1), personaje[numpj-1], 1);
		
		if ( personaje[numpj-1].hasOwnProperty('notas') == false ) {
			personaje[numpj-1].notas = ".";
		}
		pjsaux += Knave.seccionNotas((numpj-1), personaje[numpj-1], 1);
				
		if( personaje[numpj-1].hasOwnProperty('estado') == false || (personaje[numpj-1].hasOwnProperty('estado') == true && personaje[numpj-1].estado != "Eliminado") ){
			pjs+=pjsaux;
		}
		return pjs;	
	}
	
	
	static cargapnj(pjs) {
		var pjsaux = "";
				
		pjsaux+= Knave.seccionDados((numpnj-1), pnjs[numpnj-1], 2);
		
		pjsaux+= Knave.seccionAtributos((numpnj-1), pnjs[numpnj-1], 2);
		
		
				
		if( pnjs[numpnj-1].hasOwnProperty('pginicial') == false ){
			pnjs[numpnj-1].pginicial = pnjs[numpnj-1].pg;
		}
		
		if( pnjs[numpnj-1].hasOwnProperty('px') == false ){
			pnjs[numpnj-1].px = 0;
		}
				
		pjsaux+= Knave.seccionCaracteristicas((numpnj-1), pnjs[numpnj-1], 2);
		
		pjsaux+= Knave.seccionArma((numpnj-1), pnjs[numpnj-1], 2);
		
		
		if ( pnjs[numpnj-1].hasOwnProperty('equipo') == false ) {
			pnjs[numpnj-1].equipo = ".";
		}
		pjsaux += Knave.seccionEquipo((numpnj-1), pnjs[numpnj-1], 2);
		
		if ( pnjs[numpnj-1].hasOwnProperty('notas') == false ) {
			pnjs[numpnj-1].notas = ".";
		}
		pjsaux += Knave.seccionNotas((numpnj-1), pnjs[numpnj-1], 2);
				
		if( pnjs[numpnj-1].hasOwnProperty('estado') == false || (pnjs[numpnj-1].hasOwnProperty('estado') == true && pnjs[numpnj-1].estado != "Eliminado") ){
			pjs+=pjsaux;
		}
		return pjs;	
	}
	
	static seccionCaracteristicas(npj, pj, ntipo) {
		var stipo = Knave.ntipo2stipo(ntipo);
		var seccion = "<div onclick=" + '"' + "RolSolo.acordeon('" + Knave.prefijoseccion(ntipo) + "caracteristicas" + (npj) + "')" + '"' + "class='w3-container w3-blue w3-center'><p><strong>Características</strong></p></div>";
		seccion += "<div id='" + Knave.prefijoseccion(ntipo) + "caracteristicas" + (npj) + "' class='w3-hide w3-container' >"
		seccion += Knave.contenidoSeccionCaracteristicas(npj, pj, stipo);
		seccion += "</div>";
		return seccion;
	}
	
	static contenidoSeccionCaracteristicas(npj, pj, stipo) {
		var seccion = "<table class='w3-table  w3-striped w3-border'><tr><th>Característica</th><th>Valor</th></tr>";
		var da = parseInt(pj.defensa.da) + parseInt(pj.defensa.escudo) + parseInt(pj.defensa.yelmo);
		var bono= da - 10;
		seccion += "<tr><td>PV</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"pg",' + (npj) + ',"' + stipo + '")' + "' >" + pj.pg + " (" + pj.pginicial + ")" + "</td></tr>";
		seccion += "<tr><td>Defensa de armadura</td><td>" + da + " (" + bono + ")</td></tr>";		
		
		seccion += "<tr><td class='mano' onclick='Knave.cambiacaracteristica(" + '"tipoda",' + (npj) + ',"' + stipo + '")' + "' > - " + pj.defensa.tipo + "</td>";
		seccion += "<td class='mano' onclick='Knave.cambiacaracteristica(" + '"da",' + (npj) + ',"' + stipo + '")' + "' >" + pj.defensa.da + "</td></tr>";
		
		seccion += "<tr><td> - Escudo</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"escudo",' + (npj) + ',"' + stipo + '")' + "' >" + pj.defensa.escudo + "</td></tr>";
		seccion += "<tr><td> - Yelmo</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"yelmo",' + (npj) + ',"' + stipo + '")' + "' >" + pj.defensa.yelmo + "</td></tr>";
		
		seccion += "<tr><td>PX</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"px",' + (npj) + ',"' + stipo + '")' + "' >" + pj.px + "</td></tr>";
		seccion += "<tr><td>Alineamiento</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"alineamiento",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Alineamiento + "</td></tr>";
		seccion += "<tr><td>Origen</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"origen",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Origen + "</td></tr>";
		seccion += "<tr><td>Trasfondo</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"trasfondo",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Trasfondo + "</td></tr>";
		seccion += "<tr><td>Infortunio</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"infortunio",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Infortunio + "</td></tr>";
		seccion += "<tr><td>Vestimenta</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"vestimenta",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Vestimenta + "</td></tr>";
		seccion += "<tr><td>Habla</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"habla",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Habla + "</td></tr>";
		seccion += "<tr><td>Físico</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"fisico",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Físico + "</td></tr>";
		seccion += "<tr><td>Piel</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"piel",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Piel + "</td></tr>";
		seccion += "<tr><td>Rostro</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"rostro",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Rostro + "</td></tr>";
		seccion += "<tr><td>Pelo</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"pelo",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Pelo + "</td></tr>";
		seccion += "<tr><td>Virtud</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"virtud",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Virtud + "</td></tr>";
		seccion += "<tr><td>Vicio</td><td class='mano' onclick='Knave.cambiacaracteristica(" + '"vicio",' + (npj) + ',"' + stipo + '")' + "' >" + pj.rasgos.Vicio + "</td></tr>";
		seccion += "</table>";
		return seccion;
	}
	
	
	static modificacaracteristica(caracteristica, npj, tipo) {
		var valor = document.getElementById('vcaracteristica').value;
		if ( caracteristica == "pg" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].pg = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].pg = document.getElementById('vcaracteristica').value;
		}
		else if ( caracteristica == "da" ) {
			if ( tipo == "PNJ" ) {
				pnjs[npj].defensa.da = parseInt(document.getElementById('vcaracteristica').value);
			}
			else {
				personaje[npj].defensa.da = parseInt(document.getElementById('vcaracteristica').value);
			}
		}
		else if ( caracteristica == "tipoda" ) {
			if ( tipo == "PNJ" ) {
				pnjs[npj].defensa.tipo = document.getElementById('vcaracteristica').value;
			}
			else {
				personaje[npj].defensa.tipo = document.getElementById('vcaracteristica').value;
			}
		}
		else if ( caracteristica == "escudo" ) {
			if ( tipo == "PNJ" ) {
				pnjs[npj].defensa.escudo = parseInt(document.getElementById('vcaracteristica').value);
			}
			else {
				personaje[npj].defensa.escudo = parseInt(document.getElementById('vcaracteristica').value);
			}
		}
		else if ( caracteristica == "yelmo" ) {
			if ( tipo == "PNJ" ) {
				pnjs[npj].defensa.yelmo = parseInt(document.getElementById('vcaracteristica').value);
			}
			else {
				personaje[npj].defensa.yelmo = parseInt(document.getElementById('vcaracteristica').value);
			}
		}
		else if ( caracteristica == "px" ) {
			if ( tipo == "PNJ" ) 
				pnjs[npj].px = document.getElementById('vcaracteristica').value;
			else
				personaje[npj].px = document.getElementById('vcaracteristica').value;
		}
		
		if ( tipo == "PNJ" ) {
			var seccion = Knave.contenidoSeccionCaracteristicas(npj, pnjs[npj], tipo);
			document.getElementById('pnjcaracteristicas'+npj).innerHTML = seccion;
			RolSolo.muestra('pnjcaracteristicas'+npj);
		}
		else  {
			var seccion = Knave.contenidoSeccionCaracteristicas(npj, personaje[npj], tipo);
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
		else if ( caracteristica == "da" ) {
			literal = "Defensa de armadura";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].defensa.da;
			else
				valor = personaje[npj].defensa.da;
		}
		else if ( caracteristica == "tipoda" ) {
			literal = "Tipo de armadura";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].defensa.tipo;
			else
				valor = personaje[npj].defensa.tipo;
		}
		else if ( caracteristica == "escudo" ) {
			literal = "Escudo";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].defensa.escudo;
			else
				valor = personaje[npj].defensa.escudo;
		}
		else if ( caracteristica == "yelmo" ) {
			literal = "Yelmo";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].defensa.yelmo;
			else
				valor = personaje[npj].defensa.yelmo;
		}
		else if ( caracteristica == "px" ) {
			literal = "PX";
			if ( tipo == "PNJ" )
				valor = pnjs[npj].px;
			else
				valor = personaje[npj].px;
		}
		
		if ( literal != "" ){
			document.getElementById('nbcaracteristica').innerHTML = "<label id='nbcaracteristica'>" + literal + "</label>";
			document.getElementById('btncaracteristica').innerHTML = "<button class='w3-btn w3-blue' id='btncaracteristica' onclick='Knave.modificacaracteristica(" + '"' + caracteristica + '"' + "," + npj + ',"' + tipo + '"' + ")'>Modifica</button>";
			document.getElementById('btncancela').innerHTML = "<button class='w3-btn w3-blue' id='btncancela' onclick='AxisMundi.cancelamodifcaracteristica()'>Cancela</button>";
			document.getElementById('vcaracteristica').value = valor;
			document.getElementById('ccaracteristica').style.display='block';
		}
	}
		
	static tiradaatr(indice, npj, tipo) {
		var pj = null;
		if ( tipo == 1 ) // PJ 
		{
			pj = personaje[npj];
		}
		else {
			pj = pnjs[npj];
		}
		CM_tirada = RolSolo.random(20, 1);
		CM_mensaje = "<b>";
		CM_tirada += parseInt(pj.atributos[indice].bono);
		CM_mensaje += pj.nombre + "</b> " + pj.atributos[indice].nombre + " (" +  pj.atributos[indice].defensa + ")<br/><b>Resultado: " + CM_tirada + "</b>";
		document.getElementById('vtirada').style.display='block';
		document.getElementById("dificultad").value = "15";
	}
	
	
	static tiradaarma(npj, daño, tipoarma, tipo) {
		
		var pj = null;
		if ( tipo == 1 ) // PJ 
		{
			pj = personaje[npj];
		}
		else {
			pj = pnjs[npj];
		}
		var stipo = "";
		if ( tipoarma == 2 ) {
			stipo = "AD";
		}
		else {
			stipo = "CaC";
		}
		
		CM_tirada = RolSolo.random(20, 1);
		if ( stipo == "CaC" ) {
			CM_tirada += parseInt(pj.atributos[0].bono);
			
		}
		else {
			CM_tirada += parseInt(pj.atributos[5].bono);
		}
		var resdaño = RolSolo.random(daño, 1);
		CM_mensaje = "<b>";
		CM_mensaje += pj.nombre + "</b> " + pj.arma.nombre + " (" + stipo + ") <b>Daño:</b> " + resdaño + "<br/><b>Resultado: " + CM_tirada + "</b>";
		document.getElementById('vtirada').style.display='block';
		document.getElementById("dificultad").value = "15";
	}
	
	
	static tirada() {
		document.getElementById('vtirada').style.display='none';
		var dificultad = parseInt(document.getElementById("dificultad").value);
		var resultado = " <strong>fallo</strong>";
		if ( CM_tirada > dificultad ) {
			resultado = " <strong>éxito</strong>";
		}
		CM_mensaje += " -> " + dificultad + " " + resultado;
		RolSolo.escribemensaje(CM_mensaje);
	}
	  
}
