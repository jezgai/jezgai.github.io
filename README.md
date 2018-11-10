# jezgai.github.io

Aprovechando los generadores de pj que tengo en Google Drive y copiando sin pudor alguno el generador para Tesoro y Gloria publicado en Un paladín en el infierno [1], he preparado en github un generador online para los distintos sabores de Vieja Escuela. Lo único que genera son los datos "en bruto", es decir no genera un pdf con la hoja del personaje ya rellena para imprimirlo. Estuve dudando en implementar esa función pero entre que me requería más esfuerzo del que estaba dispuesto a dar y que no le veía mucho sentido a imprimir la hoja ya rellena con unos datos que irán cambiando con el tiempo, decidí sacarlo así de feo para copiar a mano en la hoja los datos.

La definición de clases, razas, y demás atributos está hecha sobre clases javascript (facilmente modificables) en las que he intentado incluir todo lo que viene en cada manual. Unicamente he añadido por mi cuenta, una lista de atributos "prioritarios" a cada clase, de forma que cuando calcule los valores, le de los números mayores obtenidos a los atributos que vienen en esa lista. Esto lo he puesto porque según la clase del personaje parece obvio que sea más fuerte en algunos atributos, por ejemplo yo veo a un Tipo duro de VE Pulp como alguien que debería tener sus mejores valores en FUE y CON.

En principio están más o menos listos todos los Vieja Escuela de los que tengo noticia: Clásico, Pulp, Cyberpunk, Salvaje Oeste, Japón Feudal y Zombies.

En [2] se puede probar online, aunque siempre se puede descargar [3] al ordenador y abrir con el navegador el html (si se quiere modificar el código esta última es la opción adecuada). 

Si se quieren cambiar los nombres propuestos, hay que modificar los javascript  VE*_pj.js (VE_pj.js para el Clásico, VEP_pj.js para el Pulp, SO para el Salvaje Oeste, CP para Cyberpunk, J para Japón Feudal y Z para el Zombies)
Los apodos de los personajes de Cyberpunk van en el javascript VECP_clases.js (dentro de cada una de las clases).

Los atributos *principales* van en los distintos javascript VE*_clases.js


* [1] http://paladinenelinfierno.blogspot.com/2018/10/generador-de-personajes-de-tyg-basico.html?m=1
* [2] https://jezgai.github.io/ve.html
* [3] https://github.com/jezgai/jezgai.github.io
