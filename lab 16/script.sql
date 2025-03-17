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

/* Obtener a qué proyectos han sido entregados los materiales */

SELECT m.descripcion, e.fecha, p.denominacion
FROM materiales m, entregan e, proyectos p
WHERE m.clave = e.clave
AND p.numero = e.numero;

/* Obtener el número de entregas por proveedores */

SELECT p.razonsocial, COUNT(*) as numEntregas
FROM entregan e, proveedores p
WHERE e.rfc = p.rfc
GROUP BY razonsocial;

/* Obtener la razón social de los proveedores con una cantidad mayor a 1000 */

SELECT p.razonsocial, SUM(e.cantidad) AS cantidad_total
FROM entregan e, proveedores p
WHERE e.rfc = p.rfc
GROUP BY p.razonsocial
HAVING SUM(e.cantidad) > 1000;