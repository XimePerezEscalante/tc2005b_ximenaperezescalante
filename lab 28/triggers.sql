/* Los siguientes triggers son para PostgreSql*/

/* Insertar usuario en la tabla Administrador */

CREATE OR REPLACE FUNCTION insertar_administrador()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.rol = 'admin' THEN
        INSERT INTO "Administrador" ("idIVD", "carrera")
        VALUES (NEW."idIVD", NEW."carrera");
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

/* Trigger */

CREATE TRIGGER "nuevoAdministrador"
AFTER INSERT ON "Usuario"
EXECUTE FUNCTION insertar_administrador();


/* Insertar usuario en la tabla Alumno*/

CREATE OR REPLACE FUNCTION insertar_alumno()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.rol = 'student' THEN
        INSERT INTO "Alumno" ("matricula", "semestre", "regular", "carrera")
        VALUES (NEW."idIVD", NULL, NULL, NEW."carrera");
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

/* Trigger */

CREATE TRIGGER "nuevoAlumno"
AFTER INSERT ON "Usuario"
EXECUTE FUNCTION insertar_alumno();