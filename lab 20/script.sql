/* Consulta de una tabla completa */

SELECT * FROM materiales

/* Seleccion */

SELECT * FROM materiales
WHERE clave = 1000;

/* Proyección */

SELECT clave, proyeccion, fecha 
FROM entregan;