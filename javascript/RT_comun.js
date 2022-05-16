class RolTelegram {

	static enviaTelegram(mensaje, chatid, telegrambotid) {
		if ( telegrambotid == "SUSTITUIR_POR_TOKEN_BOT" || chatid == "SUSTITUIR_POR_ID_DEL_CHAT" ) {
			return;
		}
		mensaje = "<b>" + personaje.sistema + "</b>[SL]" + mensaje;
		var urlsendtlg = "http://en-getafe.org/stelg.php?token=" + telegrambotid + "&chatid=" + chatid + "&message=" + mensaje;
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open( "GET", urlsendtlg, false ); 
		xmlHttp.send( null );
		//document.getElementById("respuesta").innerHTML = "Enviado " + xmlHttp.responseText;
	}

  
	static loadFile() {
		var input, file, fr;

		if (typeof window.FileReader !== 'function') {
			alert("The file API isn't supported on this browser yet.");
			return;
		}

		input = document.getElementById('fileinput');
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
			personaje = JSON.parse(lines); 
			RolTelegram.cargapersonaje();
			cargado();
		}
	}
	
	static tiradado(numero) {
		var tirada = RolTelegram.random(numero,1);
		var mensaje = "<b>" + personaje.nombre + "</b> (d" + numero + "): " + tirada;
		RolTelegram.enviaTelegram(mensaje, personaje.chatid, personaje.botid);
	}

	static random(numero, desde) {
		return Math.floor(Math.random() * numero) + desde;
	}
	
	static cargapersonaje() {
		document.getElementById("cabecerasistema").innerHTML = "<h1><strong>" + personaje.sistema + "</strong></h1>";
		document.getElementById("cabeceranombre").innerHTML = "<h1><strong>Nombre:</strong> " + personaje.nombre + "</h1>";
		if ( personaje.sistema == "Máscaras del Imperio" ) 
		{ 
			Mascaras.cargapersonaje();		
			document.getElementById("botonjson").style.visibility="visible";	
		}
		else if ( personaje.sistema == "Axis Mundi" ) 
		{ 
			AxisMundi.cargapersonaje();		
			document.getElementById("botonjson").style.visibility="visible";	
		}

	}
	
	static exportaJSON() {
		var jsonpj = JSON.stringify(personaje);
		
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonpj));
		element.setAttribute('download', personaje.nombre + ".json");

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	}

}
