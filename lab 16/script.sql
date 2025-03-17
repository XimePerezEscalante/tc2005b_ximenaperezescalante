/* Consultas, no estoy segura de cuáles se tenían que hacer :o */

/* Obtener la descripción de los materiales que no han sido entregados */

SELECT Descripcion
FROM Materiales M
WHERE Clave NOT IN (SELECT Clave FROM Entregan);

/* Obtener los materiales que han sido entregados */

SELECT * 
FROM materiales, entregan 
WHERE materiales.clave = entregan.clave;