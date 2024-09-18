--https://www.sqlines.com/online
--https://zzzcode.ai/sql/query-generator
--para formaterar el sql y un generador Zzz Romeo estubo aqui..!
CREATE TABLE Users (
    id INT PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    email VARCHAR(50),
    contrasena VARCHAR(50),
    fecha_nacimiento DATE,
    telefono VARCHAR(15),
    rol int,
    especialidad int
);

-- ejemplo
--INSERT INTO Users (id, nombre, apellido, email, contrasena, fecha_nacimiento, telefono, rol, especialidad)
--VALUES (2, 'Juan', 'Pérez', 'juanperez@example.com', 'contraseña123', '1990-01-01', '5551234567', 1, 2);