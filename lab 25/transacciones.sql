/* Las siguientes transacciones son para PostgreSql*/

/* Registrar alumno, comparandolo con los triggers, 
prefiero las transacciones especialmente para los
alumnos porque asi puedo mandar los parametros 
que necesita su tabla desde que ejecuto la 
transaccion */

CREATE OR REPLACE PROCEDURE registrar_alumno(
    id_usr VARCHAR,
    nombre_usr VARCHAR,
    correo_usr VARCHAR,
    pwd_usr VARCHAR,
    rol_usr VARCHAR,
    carrera_usr VARCHAR,
    regular_usr BOOLEAN,
    semestre_usr VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    BEGIN

        INSERT INTO "Usuario" ("idIVD", "nombreUsuario", "correoInstitucional", "password", rol, carrera)
        VALUES (id_usr, nombre_usr, correo_usr, pwd_usr, rol_usr, carrera_usr);

        IF rol_usr = 'student' THEN
            INSERT INTO "Alumno" (matricula, semestre, regular, carrera)
            VALUES (id_usr, semestre_usr, regular_usr, carrera_usr);
        END IF;
    COMMIT;
    END;
END;
$$;

/* Registrar administrador */

CREATE OR REPLACE PROCEDURE registrar_administrador(
    id_usr VARCHAR,
    nombre_usr VARCHAR,
    correo_usr VARCHAR,
    pwd_usr VARCHAR,
    rol_usr VARCHAR,
    carrera_usr VARCHAR
)
LANGUAGE plpgsql
AS $$
BEGIN
    BEGIN

        INSERT INTO "Usuario" ("idIVD", "nombreUsuario", "correoInstitucional", "password", rol, carrera)
        VALUES (id_usr, nombre_usr, correo_usr, pwd_usr, rol_usr, carrera_usr);

        IF rol_usr = 'admin' THEN
            INSERT INTO "Administrador" ("idIVD", carrera)
            VALUES (id_usr, carrera_usr);
        END IF;
    COMMIT;
    END;
END;
$$;