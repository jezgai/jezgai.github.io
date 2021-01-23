
class Habilidades {
	constructor() {
		this._habilidades = 
		[
			{ nombre : "Burocracia", base : { fijo: 10, atributos : [ ] }, vpdf : "VBurocracia", dpdf : "", dgen : "" },
			{ nombre : "Astronomía", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento" },
			{ nombre : "Biología", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento" },
			{ nombre : "Botánica", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento" },
			{ nombre : "Farmacología", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento", },
			{ nombre : "Física", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento", },
			{ nombre : "Geología", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento" },
			{ nombre : "Química", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CNaturales", dgen : "Conocimiento" },
			{ nombre : "Ciencias ocultas", base : { fijo: 5, atributos : [ ] }, vpdf : "VCOcultas", dpdf : "", dgen : "" },
			{ nombre : "Antropología", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Arqueología", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Ciencias políticas", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Criminología", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Derecho", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Geografía", base : { fijo: 10, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Historia", base : { fijo: 10, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Sociología", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "CSociales", dgen : "Conocimiento" },
			{ nombre : "Idioma 2", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "Idioma", dgen : "Conocimiento" },
			{ nombre : "Latín", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "Idioma", dgen : "Conocimiento" },
			{ nombre : "Manejo de archivos", base : { fijo: 25, atributos : [ ] },	vpdf : "VManejoArchivos", dpdf : "", dgen : "" },
			{ nombre : "Medicina", base : { fijo: 0, atributos : [ ] },	vpdf : "VMedicina", dpdf : "", dgen : "" },
			{ nombre : "Mitos de Cthulhu", base : { fijo: 0, atributos : [ ] },	vpdf : "VMitosCthulhu", dpdf : "", dgen : "" },
			{ nombre : "Primeros auxilios", base : { fijo: 15, atributos : [ ] },	vpdf : "VPrimerosAuxilios", dpdf : "", dgen : "" },
			{ nombre : "Psicoanálisis", base : { fijo: 0, atributos : [ ] },	vpdf : "VPsicoanalisis", dpdf : "", dgen : "" },
			{ nombre : "Psicología", base : { fijo: 5, atributos : [ ] },	vpdf : "VPsicologia", dpdf : "", dgen : "" },
			{ nombre : "Canto", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Danza", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Escritura", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Escultura", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Interpretación", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Música", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Pintura", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Arte", dgen : "Sensorial" },
			{ nombre : "Bricolaje", base : { fijo: 20, atributos : [ ] },	vpdf : "VBricolaje", dpdf : "", dgen : "" },
			{ nombre : "Armería", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "Maestria", dgen : "Sensorial" },
			{ nombre : "Cerrajería", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "Maestria", dgen : "Sensorial" },
			{ nombre : "Electricidad", base : { fijo: 5, atributos : [ ] },	vpdf : "", dpdf : "Maestria", dgen : "Sensorial" },
			{ nombre : "Electrónica", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "Maestria", dgen : "Sensorial" },
			{ nombre : "Falsificación", base : { fijo: 0, atributos : [ ] },	vpdf : "", dpdf : "Maestria", dgen : "Sensorial" },
			{ nombre : "Mecánica", base : { fijo: 20, atributos : [ ] },	vpdf : "", dpdf : "Maestria", dgen : "Sensorial" },
			{ nombre : "Discreción", base : { fijo: 10, atributos : [ ] },	vpdf : "VDiscrecion", dpdf : "", dgen : "" },
			{ nombre : "Esconder/se", base : { fijo: 15, atributos : [ ] },	vpdf : "VEsconderse", dpdf : "", dgen : "" },
			{ nombre : "Escuchar", base : { fijo: 25, atributos : [ ] },	vpdf : "VEscuchar", dpdf : "", dgen : "" },
			{ nombre : "Orientación", base : { fijo: 15, atributos : [ ] },	vpdf : "VOrientacion", dpdf : "", dgen : "" },
			{ nombre : "Percibir", base : { fijo: 25, atributos : [ ] },	vpdf : "VPercibir", dpdf : "", dgen : "" },
			{ nombre : "Seguir rastros", base : { fijo: 10, atributos : [ ] },	vpdf : "VSeguirRastros", dpdf : "", dgen : "" },
			{ nombre : "Supervivencia", base : { fijo: 15, atributos : [ ] },	vpdf : "VSupervivencia", dpdf : "", dgen : "" },
			{ nombre : "Autoridad", base : { fijo: 0, atributos : [ [ "EST", "CAR" ] ] },	vpdf : "VAutoridad", dpdf : "", dgen : "" },
			{ nombre : "Bajos fondos", base : { fijo: 10, atributos : [ ] },	vpdf : "VBajosFondos", dpdf : "", dgen : "" },
			{ nombre : "Embaucar", base : { fijo: 10, atributos : [ ] },	vpdf : "VEmbaucar", dpdf : "", dgen : "" },
			{ nombre : "Intimidar", base : { fijo: 0, atributos : [ [ "TAM", "TAM" ], [ "INT", "INT" ] ] },	vpdf : "VIntimidar", dpdf : "", dgen : "" },
			{ nombre : "Oratoria", base : { fijo: 10, atributos : [ ] },	vpdf : "VOratoria", dpdf : "", dgen : "" },
			{ nombre : "Protocolo", base : { fijo: 0, atributos : [ [ "EST", "EST" ] ] },	vpdf : "VProtocolo", dpdf : "", dgen : "" },
			{ nombre : "Armas cortas", base : { fijo: 20, atributos : [ ] },	vpdf : "", dpdf : "ArmaCaC", dgen : "Accion" },
			{ nombre : "Armas largas", base : { fijo: 15, atributos : [ ] },	vpdf : "", dpdf : "ArmaCaC", dgen : "Accion" },
			{ nombre : "Armas de proyectil", base : { fijo: 10, atributos : [ ] },	vpdf : "", dpdf : "ArmaCaC", dgen : "Accion" },
			{ nombre : "Armas arrojadizas", base : { fijo: 10, atributos : [ ] },	vpdf : "", dpdf : "ArmaCaC", dgen : "Accion" },
			{ nombre : "Armas de fuego cortas", base : { fijo: 20, atributos : [ ] },	vpdf : "VArmaFC", dpdf : "", dgen : "" },
			{ nombre : "Armas de fuego largas", base : { fijo: 25, atributos : [ ] },	vpdf : "VArmaFC", dpdf : "", dgen : "" },
			{ nombre : "Armas automáticas", base : { fijo: 10, atributos : [ ] },	vpdf : "", dpdf : "ArmaF", dgen : "Accion" },
			{ nombre : "Conducir", base : { fijo: 25, atributos : [ ] },	vpdf : "VConducir", dpdf : "", dgen : "" },
			{ nombre : "Esquivar", base : { fijo: 0, atributos : [ [ "DES", "DES" ] ] },	vpdf : "VEsquivar", dpdf : "", dgen : "" },
			{ nombre : "Forma física", base : { fijo: 0, atributos : [ [ "FUE", "DES" ] ] },	vpdf : "VFormaFisica", dpdf : "", dgen : "" },
			{ nombre : "Lucha", base : { fijo: 0, atributos : [ [ "DES", "DES" ] ] },	vpdf : "VLucha", dpdf : "", dgen : "" }, 
		]; 
	}
	
	
	habilidad(nombre) {
		var indice=0;
		for (indice=0; indice<this._habilidades.length; indice++) {
			if ( this._habilidades[indice].nombre == nombre ) {
				return this._habilidades[indice];
			}
		}
		return null;
	}
}
