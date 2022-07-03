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
		pjsdet += "<button onclick=" + '"' + "RolSolo.acordeon('pj" + numpj + "')" + '"' + " class='w3-button w3-block w3-left-align w3-blue'><h2>" + personaje[numpj-1].nombre + "</h2></button>"
		pjsdet += "<div id='pj" + numpj + "' class='w3-hide w3-container' >";
		//pjs += "<h2><strong>" + personaje.nombre + "</strong></h2>";
		
		if ( document.getElementById("cabecerasistema").innerHTML == "" )
			document.getElementById("cabecerasistema").innerHTML = "<h1><strong>" + partida.nombre + " (" + personaje[numpj-1].sistema + ")</strong></h1>";
		//document.getElementById("cabeceranombre").innerHTML = "<h1><strong>Nombre:</strong> " + personaje[numpj-1].nombre + "</h1>";
		if ( personaje[numpj-1].sistema == "Máscaras del Imperio" ) 
		{ 
			dj = "Valido";
			pjsdet = Mascaras.cargapersonaje(pjsdet);
			//document.getElementById("botonjson").style.visibility="visible";	
		}
		else if ( personaje[numpj-1].sistema == "Axis Mundi" ) 
		{ 
			dj = "Amo del Calabozo";
			pjsdet = AxisMundi.cargapersonaje(pjsdet);		
			//document.getElementById("botonjson").style.visibility="visible";	
		}
		pjsdet += "</div>";
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
		pjsdet += "<button onclick=" + '"' + "RolSolo.acordeon('pnj" + numpnj + "')" + '"' + " class='w3-button w3-block w3-left-align w3-blue'><h2>" + pnjs[numpnj-1].nombre + "</h2></button>"
		pjsdet += "<div id='pnj" + numpnj + "' class='w3-hide w3-container' >";
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
		pjsdet += "</div>";
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

  
	static muestraventanamensajes(hablante) {
		
		quien = hablante;
		//document.getElementById("botonmensaje").innerHTML = "<input type='button' id='btnEnviaMsg' value='Envia' onclick='RolSolo.enviamensaje(" + '"' + quien + '"' + ");'> <input type='button' id='btnCancelMsg' value='Cancelar' onclick='RolSolo.cancelarCarga(" + '"' + "mensajes" + '"' + ")'>";
		document.getElementById("mensajes").style.display='block';
		
	}

	
	static cancelarCarga(id) {
		document.getElementById(id).style.display='none';
	}
	
	static consultaOraculo() {
		var pregunta = document.getElementById('preguntaOra');
		var resultado = RolSolo.random(6,1);
		if ( resultado == 1 )
			respuesta = "No y además... (complicación mayor)";
		else if ( resultado == 2 )
			respuesta = "No";
		else if ( resultado == 3 )
			respuesta = "No pero... (ventaja menor)";
		else if ( resultado == 4 )
			respuesta = "Sí pero... (complicación menor)";
		else if ( resultado == 5 )
			respuesta = "Sí";
		else
			respuesta = "Sí y además... (ventaja mayor)";
		
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
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		}
	}
	
	
	static oculta(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") != -1) {
			x.className = x.className.replace(" w3-show", "");
		}
	}
	
	static acordeon(id) {
		var x = document.getElementById(id);
		if (x.className.indexOf("w3-show") == -1) {
			x.className += " w3-show";
		} else { 
			x.className = x.className.replace(" w3-show", "");
		}
	}

}
