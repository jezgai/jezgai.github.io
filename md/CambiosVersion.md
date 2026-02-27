## Cambios de versión

### Versión 1.0.1

- Se utiliza [marked.js](https://marked.js.org/ "_blank") para el formateo de los markdown
- Se añade codificación no existente en los ficheros markdown para resaltar texto (detalle al final).
- Se modifica el parseo de los enlaces internos a páginas "indexadas" en el json para que se haga mediante expresiones regulares.


__Codificación añadida__
- Un texto enmarcado entre 2 + por delante y otros 2 por detrás lo traduce a la etiqueta big (para sacarlo más grande).
- Un texto enmarcado entre 2 ^ por delante y otros 2 por detrás lo traduce a la etiqueta small (para sacarlo más pequeño).
- Se incluye en el js propio (en lugar de tocar el js que parseaba el markdown) el cambio para que los enlaces externos los habra en nueva pestaña (lo que se hace es aprovechar que marked.js sí admite títulos para los link, para si se pone como título _blank, es decir se añade entre comillas dobles a continuación de la url, modifique el link html para que el enlace se habra en nueva pestaña).


