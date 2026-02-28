## Cambios de versión

### Versión 1.1

- Cambio en las páginas de lanzadores de dados (iniciativa, moral, ...) para que ahora sean como ventanas emergentes sobre la de Combate
- Por el motivo anterior la página de Combate ya no es markdown y ha tenido que pasar a ser html.

### Versión 1.0.2

- Arreglo de bugs por cambio de librería de formateo de markdown: página {{Daño}}
- Reorganización de la página de {{Combate}}
- Se incluye scroll en algunas partes de las páginas: {{CreacionPJ}} y {{Pericias}} (puede ser útil para el uso con móvil, que es para lo que está hecha la app, pero queda molesto al usarlo en ordenador)

### Versión 1.0.1

- Se utiliza [marked.js](https://marked.js.org/ "_blank") para el formateo de los markdown
- Se añade codificación no existente en los ficheros markdown para resaltar texto (detalle al final).
- Se modifica el parseo de los enlaces internos a páginas "indexadas" en el json para que se haga mediante expresiones regulares.


__Codificación añadida__
- Un texto enmarcado entre 2 + por delante y otros 2 por detrás lo traduce a la etiqueta big (para sacarlo más grande).
- Un texto enmarcado entre 2 ^ por delante y otros 2 por detrás lo traduce a la etiqueta small (para sacarlo más pequeño).
- Se incluye en el js propio (en lugar de tocar el js que parseaba el markdown) el cambio para que los enlaces externos los habra en nueva pestaña (lo que se hace es aprovechar que marked.js sí admite títulos para los link, para si se pone como título _blank, es decir se añade entre comillas dobles a continuación de la url, modifique el link html para que el enlace se habra en nueva pestaña).


