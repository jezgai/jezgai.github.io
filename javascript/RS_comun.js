class RolSolo {

	static enviaTelegram(mensaje, chatid, telegrambotid) {
		if ( telegrambotid == "SUSTITUIR_POR_TOKEN_BOT" || chatid == "SUSTITUIR_POR_ID_DEL_CHAT" ) {
			return;
		}
		mensaje = "<b>" + personaje.sistema + "</b>[SL]" + mensaje;
		var urlsendtlg = "http://en-getafe.org/stelg.php?token=" + telegrambotid + "&chatid=" + chatid + "&message=" + mensaje;
        //var urlsendtlg = "http://roltelg.byethost7.com/stelg.php?token=" + telegrambotid + "&chatid=" + chatid + "&message=" + mensaje;
        
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", urlsendtlg, false ); 
		xmlHttp.send( null );
		//document.getElementById("respuesta").innerHTML = "Enviado " + xmlHttp.responseText;
	}

  
	static loadFile(tipo) {
		var input, file, fr;

		if (typeof window.FileReader !== 'function') {
			alert("The file API isn't supported on this browser yet.");
			return;
		}

		input = document.getElementById('fileinput'+tipo);
		if (!input) {
			alert("Um, couldn't find the fileinput element.");
		}
		else if (!input.files) {
			alert("This browser doesn't seem to support the `files` property of file inputs.");
		}
		else if (!input.files[0]) {
			alert("Por favor seleccione un fichero antes de cargarlo");
		}
		else {
			file = input.files[0];
			fr = new FileReader();
			fr.onload = receivedText;
			fr.readAsText(file);
		}

		function receivedText(e) {
			let lines = e.target.result;
			if ( tipo == "PNJ" ) {
				pnjs.push(JSON.parse(lines));
				RolSolo.cargapnj();
			}
			else if ( tipo == "PJ" ){
				personaje.push(JSON.parse(lines));
				RolSolo.cargapersonaje();
			}
			else {
				partida = JSON.parse(lines);
				personaje = [];
				pnjs = [];
				tiradas = [];
				numpj = 0;
				numpnj = 0;
				
				document.getElementById("PJs").innerHTML = "";
				document.getElementById("PNJs").innerHTML = "";
				document.getElementById("chat").innerHTML = "";
				
				RolSolo.cargapartida();
			}
			cargado();
		}
	}
	
	
	static tiradado(numero, npj, pj) {
		var tirada = RolSolo.random(numero,1);
		var mensaje = "<b>";
		if (pj == -1)
			mensaje += dj + "</b> (d" + numero + "): " + tirada;
		else if (pj == 0 )
			mensaje += pnjs[npj].nombre + "</b> (d" + numero + "): " + tirada;
		else
			mensaje += personaje[npj].nombre + "</b> (d" + numero + "): " + tirada;
		RolSolo.escribemensaje(mensaje);
	}
	
	static escribemensaje(mensaje) {
		var ahora = new Date();
		var sAhora =
                ("00" + (ahora.getMonth() + 1)).slice(-2)
                + "/" + ("00" + ahora.getDate()).slice(-2)
                + "/" + ahora.getFullYear() + " "
                + ("00" + ahora.getHours()).slice(-2) + ":"
                + ("00" + ahora.getMinutes()).slice(-2)
                + ":" + ("00" + ahora.getSeconds()).slice(-2);
        var msg =  "<div  onclick=" + '"' + "RolSolo.acordeon('mensaje" + (tiradas.length + 1) + "')" + '"' + "><font color='red'><strong><u>" + sAhora + "</u></strong></font></div><div id='mensaje" + (tiradas.length + 1) + "' class='w3-hide'>" + mensaje + "</div>"       
        
		document.getElementById("chat").innerHTML = msg + document.getElementById("chat").innerHTML;
		RolSolo.muestra('mensaje' + (tiradas.length + 1));
		tiradas.push(msg);
	}

	static random(numero, desde) {
		return Math.floor(Math.random() * numero) + desde;
	}
	
	
	static cargapartida() {
		var indice=0;
		personaje = [];
		pnjs = [];
		tiradas = [];
		numpj = 0;
		numpnj = 0;
		document.getElementById("cabecerasistema").innerHTML = "";
		for (indice=0; indice<partida.pjs.length; indice++) {
			personaje.push(partida.pjs[indice]);
			RolSolo.cargapersonaje();
		}
		for (indice=0; indice<partida.pnjs.length; indice++) {
			pnjs.push(partida.pnjs[indice]);
			RolSolo.cargapnj();
		}
		for (indice=0; indice<partida.tiradas.length; indice++) {
			tiradas.push(partida.tiradas[indice]);
			document.getElementById("chat").innerHTML = partida.tiradas[indice] + document.getElementById("chat").innerHTML;
		}
		
		document.getElementById("botonjson").style.visibility="visible";
		RolSolo.cancelarCarga('cargapartida');

		
	}
	
	
	static cargapersonaje() {
		
		var pjs = document.getElementById("PJs").innerHTML;
		
		if ( partida.nombre == "" ) {
			partida.nombre = document.getElementById("partidacargapj").value;
			document.getElementById("botonjson").style.visibility="visible";
		}
		
		if ( pjs == "" ) {
			pjs = "<div class='w3-container w3-blue' onclick=" + '"' + "RolSolo.acordeon('pjsdet')" + '"' + "><h1><strong>PJs</strong></h1></div><div id='pjsdet' class='w3-hide' ></div>";
			document.getElementById("PJs").innerHTML = pjs;
		}
		
		var pjsdet = document.getElementById("pjsdet").innerHTML;
		
		numpj++;
		if( personaje[numpj-1].hasOwnProperty('estado') == false || (personaje[numpj-1].hasOwnProperty('estado') == true && personaje[numpj-1].estado != "Eliminado") ) {
			pjsdet += "<button onclick=" + '"' + "RolSolo.acordeon('pj" + numpj + "')" + '"' + " class='w3-button w3-block w3-left-align w3-blue'><h2>" + personaje[numpj-1].nombre;
			if ( personaje[numpj-1].hasOwnProperty('clase') == true ) 
				pjsdet += " (" + personaje[numpj-1].clase + ")";
			pjsdet += "</h2></button>"
			pjsdet += "<div id='pj" + numpj + "' class='w3-hide w3-container' >";
		}
		
		//pjs += "<h2><strong>" + personaje.nombre + "</strong></h2>";
		
		if ( document.getElementById("cabecerasistema").innerHTML == "" )
			document.getElementById("cabecerasistema").innerHTML = "<h1><strong>" + partida.nombre + " (" + personaje[numpj-1].sistema + ")</strong></h1>";
		//document.getElementById("cabeceranombre").innerHTML = "<h1><strong>Nombre:</strong> " + personaje[numpj-1].nombre + "</h1>";
		if ( personaje[numpj-1].sistema == "Máscaras del Imperio" ) 
		{ 
			dj = "Valido";
			pjsdet = Mascaras.cargapersonaje(pjsdet);
			document.getElementById("dadosdj").innerHTML = 
				"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6,0,-1)' alt='Dado d6' class='mano'/>" + 
				"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"Valido"' + ")' alt='Valido habla' class='mano'/>";
			//document.getElementById("botonjson").style.visibility="visible";	
		}
		else if ( personaje[numpj-1].sistema == "Axis Mundi" ) 
		{ 
			dj = "Amo del Calabozo";
			pjsdet = AxisMundi.cargapersonaje(pjsdet);		
			document.getElementById("dadosdj").innerHTML = 
				"<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4,0,-1)' alt='Dado d4' class='mano'/>" +
				"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6,0,-1)' alt='Dado d6' class='mano'/>" + 
				"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8,0,-1)' alt='Dado d8' class='mano'/>" + 
				"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10,0,-1)' alt='Dado d10' class='mano'/>" + 
				"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12,0,-1)' alt='Dado d12' class='mano'/>" + 
				"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20,0,-1)' alt='Dado d20' class='mano'/>" +
				"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"Amo del Calabozo"' + ")' alt='Amo del Calabozo habla' class='mano'/>";
			//document.getElementById("botonjson").style.visibility="visible";	
		}
		else if ( personaje[numpj-1].sistema == "La Marca del Este" ) 
		{
			dj = "Narrador";
			pjsdet = LaMarcaDelEste.cargapersonaje(pjsdet);
			
			document.getElementById("dadosdj").innerHTML = 
				"<img src='imagenes/d4.png' onclick='RolSolo.tiradado(4,0,-1)' alt='Dado d4' class='mano'/>" +
				"<img src='imagenes/d6.png' onclick='RolSolo.tiradado(6,0,-1)' alt='Dado d6' class='mano'/>" + 
				"<img src='imagenes/d8.png' onclick='RolSolo.tiradado(8,0,-1)' alt='Dado d8' class='mano'/>" + 
				"<img src='imagenes/d10.png' onclick='RolSolo.tiradado(10,0,-1)' alt='Dado d10' class='mano'/>" + 
				"<img src='imagenes/d12.png' onclick='RolSolo.tiradado(12,0,-1)' alt='Dado d12' class='mano'/>" + 
				"<img src='imagenes/d20.png' onclick='RolSolo.tiradado(20,0,-1)' alt='Dado d20' class='mano'/>" +
				"<img src='imagenes/Bocadillo.jpg' onclick='RolSolo.muestraventanamensajes(" + '"Narrador"' + ")' alt='Narrador habla' class='mano'/>";
			
			
		}
		if( personaje[numpj-1].hasOwnProperty('estado') == false || (personaje[numpj-1].hasOwnProperty('estado') == true && personaje[numpj-1].estado != "Eliminado") ) {
			pjsdet += "</div>";
		}
		document.getElementById("pjsdet").innerHTML = pjsdet;
		
		RolSolo.muestra("pjsdet");
		RolSolo.muestra("pj"+numpj);
		RolSolo.cancelarCarga('cargapj');

	}
	
	
	static cargapnj() {
		
		var pjs = document.getElementById("PNJs").innerHTML;
		
		if ( partida.nombre == "" ) {
			partida.nombre = document.getElementById("partidacargapnj").value;
			document.getElementById("botonjson").style.visibility="visible";
		}
		
		if ( pjs == "" ) {
			pjs = "<div class='w3-container w3-blue' onclick=" + '"' + "RolSolo.acordeon('pnjsdet')" + '"' + "><h1><strong>PNJs</strong></h1></div><div id='pnjsdet' class='w3-hide' ></div>";
			document.getElementById("PNJs").innerHTML = pjs;
		}
		
		var pjsdet = document.getElementById("pnjsdet").innerHTML;
		
		numpnj++;
		if( pnjs[numpnj-1].hasOwnProperty('estado') == false || (pnjs[numpnj-1].hasOwnProperty('estado') == true && pnjs[numpnj-1].estado != "Eliminado") ) {
			pjsdet += "<button onclick=" + '"' + "RolSolo.acordeon('pnj" + numpnj + "')" + '"' + " class='w3-button w3-block w3-left-align w3-blue'><h2>" + pnjs[numpnj-1].nombre + "</h2></button>"
			pjsdet += "<div id='pnj" + numpnj + "' class='w3-hide w3-container' >";
		}
		//pjs += "<h2><strong>" + personaje.nombre + "</strong></h2>";
		
		if ( document.getElementById("cabecerasistema").innerHTML == "" )
			document.getElementById("cabecerasistema").innerHTML = "<h1><strong>" + partida.nombre + " (" + pnjs[numpnj-1].sistema + ")</strong></h1>";
		
		if ( pnjs[numpnj-1].sistema == "Máscaras del Imperio" ) 
		{ 
			pjsdet = Mascaras.cargapnj(pjsdet);
			//document.getElementById("botonjson").style.visibility="visible";	
		}
		else if ( pnjs[numpnj-1].sistema == "Axis Mundi" ) 
		{ 
			pjsdet = AxisMundi.cargapnj(pjsdet);		
			//document.getElementById("botonjson").style.visibility="visible";	
		}
		else if ( personaje[numpj-1].sistema == "La Marca del Este" ) 
		{
			pjsdet = LaMarcaDelEste.cargapnj(pjsdet);
		}
		if( pnjs[numpnj-1].hasOwnProperty('estado') == false || (pnjs[numpnj-1].hasOwnProperty('estado') == true && pnjs[numpnj-1].estado != "Eliminado") ) {
			pjsdet += "</div>";
		}
		document.getElementById("pnjsdet").innerHTML = pjsdet;
		
		RolSolo.muestra("pnjsdet");
		RolSolo.muestra("pnj"+numpnj);
		
		RolSolo.cancelarCarga('cargapnj');

	}
	
  
	static muestraventanacarga(id) {
		if ( partida.nombre == "" && id != "cargapartida" ) {
			var label = "<label for='partida" + id + "'>Nombre de partida</label>";
			var text = "<input type='text' size='64' id='partida" + id + "'>";
			if ( id == "cargapnj" ) {
				document.getElementById("partidaPNJ").innerHTML = label + text;
				RolSolo.muestra("partidaPNJ");
			}
			else {
				document.getElementById("partidaPJ").innerHTML = label + text;
				RolSolo.muestra("partidaPJ");
			}
		}
		else {
			if ( id == "cargapnj" ) {
				document.getElementById("partidaPNJ").innerHTML = "";
				RolSolo.oculta("partidaPNJ");
			}
			else {
				document.getElementById("partidaPJ").innerHTML = "";
				RolSolo.oculta("partidaPJ");
			}
		}
		document.getElementById(id).style.display='block';
	}
	
	static elimina(npj, tipo) {
		if ( tipo == "PNJ" ) {
			pnjs[npj].estado = "Eliminado";
			//partida.pnjs = pnjs;
			// Cargar otra vez todo
		}
		else {
			personaje[npj].estado = "Eliminado";
			//partida.pjs = personaje;
			// Cargar otra vez todo
		}
		partida.pnjs = pnjs;
		partida.pjs = personaje;
		partida.tiradas = tiradas;
		document.getElementById("PJs").innerHTML = "";
		document.getElementById("PNJs").innerHTML = "";
		document.getElementById("chat").innerHTML = "";
		RolSolo.cargapartida();
	}

  
	static muestraventanamensajes(hablante) {
		
		quien = hablante;
		//document.getElementById("botonmensaje").innerHTML = "<input type='button' id='btnEnviaMsg' value='Envia' onclick='RolSolo.enviamensaje(" + '"' + quien + '"' + ");'> <input type='button' id='btnCancelMsg' value='Cancelar' onclick='RolSolo.cancelarCarga(" + '"' + "mensajes" + '"' + ")'>";
		document.getElementById("mensajes").style.display='block';
		
	}
	
	static ventanaequipo(npj, tipo) {
		indicepersonaje = npj;
		tipopersonaje = tipo;
		if ( tipopersonaje == "PNJ" ) {
			document.getElementById('equipo').value = pnjs[indicepersonaje].equipo;
		}
		else if ( tipopersonaje == "PJ" ) {
			document.getElementById('equipo').value = personaje[indicepersonaje].equipo;
		}
		document.getElementById("ventanaequipo").style.display='block';
	}
	
	static cambiaequipo() {
		if ( indicepersonaje != -1 ) {
			if ( tipopersonaje == "PNJ" ) {
				pnjs[indicepersonaje].equipo = document.getElementById('equipo').value;
				/*
				var seccion = "<div id='pnjequipo" + indicepersonaje + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + indicepersonaje + ', "PNJ")' + "' >";
				seccion += pnjs[indicepersonaje].equipo;
				seccion += "</div>";*/
				
				document.getElementById('pnjequipo'+indicepersonaje).innerHTML = pnjs[indicepersonaje].equipo;
				RolSolo.muestra('pnjequipo'+indicepersonaje);
			}
			else if ( tipopersonaje == "PJ" ) {
				personaje[indicepersonaje].equipo = document.getElementById('equipo').value;
				/*var seccion = "<div id='pjequipo" + indicepersonaje + "' class='w3-hide w3-container' onclick='RolSolo.ventanaequipo(" + indicepersonaje + ', "PJ")' + "' >";
				seccion += personaje[indicepersonaje].equipo;
				seccion += "</div>";*/
				document.getElementById('pjequipo'+indicepersonaje).innerHTML = personaje[indicepersonaje].equipo;
				RolSolo.muestra('pjequipo'+indicepersonaje);
			}
		}
		RolSolo.cancelarCarga('ventanaequipo')
	}

	
	static ventananotas(npj, tipo) {
		indicepersonaje = npj;
		tipopersonaje = tipo;
		if ( tipopersonaje == "PNJ" ) {
			document.getElementById('notas').value = pnjs[indicepersonaje].notas;
		}
		else if ( tipopersonaje == "PJ" ) {
			document.getElementById('notas').value = personaje[indicepersonaje].notas;
		}
		document.getElementById("ventananotas").style.display='block';
	}
	
	static cambianotas() {
		if ( indicepersonaje != -1 ) {
			if ( tipopersonaje == "PNJ" ) {
				pnjs[indicepersonaje].notas = document.getElementById('notas').value;
				
				document.getElementById('pnjnotas'+indicepersonaje).innerHTML = pnjs[indicepersonaje].notas;
				RolSolo.muestra('pnjnotas'+indicepersonaje);
			}
			else if ( tipopersonaje == "PJ" ) {
				personaje[indicepersonaje].notas = document.getElementById('notas').value;
				document.getElementById('pjnotas'+indicepersonaje).innerHTML = personaje[indicepersonaje].notas;
				RolSolo.muestra('pjnotas'+indicepersonaje);
			}
		}
		RolSolo.cancelarCarga('ventananotas')
	}

	
	static cancelarCarga(id) {
		document.getElementById(id).style.display='none';
	}
	
	static consultaAugurRespuesta() {
		// De Reglas para partidas en solitario. Sombrías y peligrosas. De Zweihander - Grim & Perilous RPG
		var tabla1 = [ "Exagerado", "Aplazamiento", "Adversidad", "Asesinato", "Interrupción", "Usurpación", "Creación", "Traición", "Acuerdo", "Abuso", 
					"Opresivo", "Inspeccionar", "Emboscada", "Espionaje", "Añadir", "Transportar", "Apertura", "Despreocupado", "Arruinar", "Extravagancia", 
					"Engañar", "Llegada", "Propuesta", "División", "Rechazo", "Desconfiado", "Engaño", "Crueldad", "Intolerancia", "Confianza", "Emocionante", 
					"Activo", "Ayuda", "Cuidados", "Negligencia", "Apasionado", "Trabajo duro", "Control", "Atracción", "Defecto", "Persecución", "Vengativo", 
					"Procedimiento", "Dicusión", "Castigo", "Guía", "Transformación", "Derrocamiento", "Opresivo", "Cambio", "Procrastinación", "Elogios", 
					"Separación", "Posesión", "Rompedor", "Curación", "Retraso", "Parar", "Mentira", "Regreso", "Imitación", "En apuros", "Información", 
					"Concesión", "Retrasar", "Revelar", "Regateo", "Encarcelamiento", "Liberación", "Celebración", "Evolución", "Viaje", "Bloqueo", 
					"Dañino", "Corromper", "Conseguir", "Comienzo", "Descuido", "Pelea", "Reclutamiento", "Triunfante", "Violación", "Oposición", 
					"Malicia", "Comunicativo", "Persecución", "Incremento", "Reducción", "Abandono", "Gratificante", "Investigación", "Antagonista", 
					"Movimiento", "Desperdicio", "Tregua", "Liberación", "Hacer amistad", "Juzgar", "Desertar", "Dominante" ];
		// De Reglas para partidas en solitario. Sombrías y peligrosas. De Zweihander - Grim & Perilous RPG
		var tabla2 = [ "Objetivos", "Sueños", "Exterior", "Interior", "Aliados", "Enemigos", 
						"Emociones", "Oposición", "Guerra", "Paz", "Amor", "Nuevas ideas", 
						"Mensajes", "Tensión", "Amistad", "Lo físico", "Un proyecto", 
						"Placeres", "Dolor", "Posesiones", "Planes", "Mentiras", 
						"Expectativas", "Una senda", "Noticias", "Consejo" ];
		
		var resultado1=RolSolo.random(tabla1.length, 0);
		var resultado2=RolSolo.random(tabla2.length, 0);
		
		return tabla1[resultado1] + " - " + tabla2[resultado2];
		
	}
	
	static consultaAugur() {
		var mensaje = RolSolo.consultaAugurRespuesta();
		RolSolo.escribemensaje(mensaje);
	}
	
	static consultaOraculo() {
		// De Reglas para partidas en solitario. Sombrías y peligrosas. De Zweihander - Grim & Perilous RPG
		var pregunta = document.getElementById('preguntaOra');
		var modificador = parseInt(document.getElementById('modificadorOra').value);
		var resultado=RolSolo.random(100, 1) + modificador;
		
		if ( resultado <= 5 ) {
			respuesta = "Sí y además...";
			respuesta += " <em>(" + RolSolo.consultaAugurRespuesta() + ")</em>";
		}
		else if ( resultado <= 30 ) {
			respuesta = "Sí";
		}
		else if ( resultado <= 50 ) {
			respuesta = "Sí, pero...";
			respuesta += " <em>(" + RolSolo.consultaAugurRespuesta() + ")</em>";
		}
		else if ( resultado <= 70 ) {
			respuesta = "No, pero...";
			respuesta += " <em>(" + RolSolo.consultaAugurRespuesta() + ")</em>";
		}
		else if ( resultado <= 95 ) {
			respuesta = "No";
		}
		else  {
			respuesta = "No y además...";
			respuesta += " <em>(" + RolSolo.consultaAugurRespuesta() + ")</em>";
		}
		
		var mensaje = "<strong>" + pregunta.value + "</strong><br/>" + respuesta;
		RolSolo.escribemensaje(mensaje);
		RolSolo.cancelarCarga('oraculo');
	}
	
	static enviamensaje() {
		var texto = document.getElementById('mensaje');
		var mensaje = "<strong>" + quien + "</strong><br/>" + texto.value;
		RolSolo.escribemensaje(mensaje);
		RolSolo.cancelarCarga('mensajes');
	}
	
  
	
	static exportaJSON() {
		
		var partidajson = partida;
		partidajson.pjs = personaje;
		partidajson.pnjs = pnjs;
		partidajson.tiradas = tiradas;
		
		var jsonpj = JSON.stringify(partidajson);
		
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonpj));
		element.setAttribute('download', partida.nombre + ".json");

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}
	
	static muestra(id) {
		var x = document.getElementById(id);
		if (x != null && x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		}
	}
	
	
	static oculta(id) {
		var x = document.getElementById(id);
		if (x != null && x.className.indexOf("w3-show") != -1) {
			x.className = x.className.replace(" w3-show", "");
		}
	}
	
	static acordeon(id) {
		var x = document.getElementById(id);
		if (x != null && x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else if ( x != null) { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

}
