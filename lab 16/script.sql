/* Consultas, no estoy segura de cuáles se tenían que hacer :o */

/* Obtener la descripción de los materiales que no han sido entregados */

SELECT Descripcion
FROM Materiales
WHERE Clave NOT IN (SELECT Clave FROM Entregan);

/* Obtener los materiales que han sido entregados */

SELECT m.Descripcion 
FROM materiales m , entregan 
WHERE materiales.clave = entregan.clave;

/* Obtener los materiales entregados en el 2000 */

SELECT m.descripcion, e.fecha
FROM materiales m, entregan e
WHERE m.clave = e.clave 
AND e.fecha LIKE '2000%';