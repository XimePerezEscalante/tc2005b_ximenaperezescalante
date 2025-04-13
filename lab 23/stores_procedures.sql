/* Los siguientes procedimientos son para PostgreSql */

/* Consultar todos los usuarios*/
CREATE OR REPLACE PROCEDURE consulta_usuarios()
LANGUAGE plpgsql
AS $$
BEGIN
  SELECT * FROM "Usuario";
END;
$$;

/* Consultar todos los administradores */
CREATE OR REPLACE PROCEDURE consulta_administradores()
LANGUAGE plpgsql
AS $$
BEGIN
   SELECT * FROM "Usuario" WHERE "Usuario".rol = 'admin';
END;
$$;

/* Consultar todos los alumnos */
CREATE OR REPLACE PROCEDURE consulta_alumnos()
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT "Usuario".*, "Alumno".semestre, 
    "Alumno".regular FROM "Usuario", 
    "Alumno" WHERE ("Usuario".rol = 'student') && 
    ("Usuario"."idIVD" = "Alumno".matricula);
END;
$$;

/* Consultar todos los profesores */
CREATE OR REPLACE PROCEDURE consulta_profesores()
LANGUAGE plpgsql
AS $$
BEGIN
  SELECT * FROM "Profesor" WHERE "Profesor".estatus = 'active';
END;
$$;