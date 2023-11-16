-- DDL - lenguaje de definición de datos

-- DROP TABLE public.usuarios;

CREATE TABLE public.usuarios (
	id_usuario serial4 NOT NULL,
	nombre_usuario varchar NULL,
	password_usuario varchar NOT NULL,
	CONSTRAINT usuarios_pkey PRIMARY KEY (id_usuario)
);

-- DROP TABLE public.categorias;

CREATE TABLE public.categorias (
	id_categoria serial4 NOT NULL,
	nombre_categoria varchar NULL,
	CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria)
);

-- DROP TABLE public.gastos;
create table public.gastos(
id_gasto serial primary key,
id_usuario int references usuarios(id_usuario),
id_categoria int references categorias(id_categoria),
descripcion_gasto varchar(255) not null,
valor_gasto int not null,
fecha_gasto date
)

-- crear una tabla, si no existe
create table if not exists borrame();
-- borrar una tabla
drop table borrame;

-- cambiar el nombre
alter table borrame rename to borrar;

-- agregar y eliminar columnas
alter table borrar add column id_borrado int;
alter table borrar drop column id_borrado;

-- vaciar tabla
truncate table borrar ;