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


-- DML - lenguaje de manipulación de datos


-- insertar datos
insert into public.gastos (id_usuario, id_categoria, descripcion_gasto, valor_gasto, fecha_gasto)
values ('1','2','empanadas','3000', '2023-11-15 00:00:00');

-- ingresar varios datos

INSERT INTO public.gastos (id_usuario, id_categoria, descripcion_gasto, valor_gasto, fecha_gasto) VALUES
  (1, 1, 'Pago de electricidad', 150, '2023-11-01'),
  (1, 2, 'Almuerzo', 20, '2023-11-02'),
  (2, 3, 'Gasolina', 40, '2023-11-03'),
  (2, 4, 'Cena', 30, '2023-11-04'),
  (1, 1, 'Internet', 80, '2023-11-05'),
  (1, 2, 'Café', 5, '2023-11-06'),
  (2, 3, 'Uber', 25, '2023-11-07'),
  (2, 4, 'Almuerzo con amigos', 50, '2023-11-08'),
  (1, 1, 'Pago de teléfono', 30, '2023-11-09'),
  (1, 2, 'Cena familiar', 60, '2023-11-10'),
  (2, 3, 'Gasolina', 35, '2023-11-11'),
  (2, 4, 'Café con colegas', 10, '2023-11-12'),
  (1, 1, 'Compra en línea', 100, '2023-11-13'),
  (1, 2, 'Desayuno', 15, '2023-11-14'),
  (2, 3, 'Uber', 20, '2023-11-15'),
  (2, 4, 'Cena de aniversario', 80, '2023-11-16'),
  (1, 1, 'Pago de agua', 40, '2023-11-17'),
  (1, 2, 'Merienda', 8, '2023-11-18'),
  (2, 3, 'Gasolina', 30, '2023-11-19'),
  (2, 4, 'Almuerzo de trabajo', 35, '2023-11-20');

-- eliminar datos
-- eliminar un registro

delete from public.gastos
where id_gasto = 19;

delete from public.gastos
where gastos.fecha_gasto < '2022-01-01';

-- Actualizar datos
-- actualizar un registro
update public.gastos
set valor_gasto = 1
where gastos.id_gasto = 1;

-- DQL - lenguaje de consulta de datos

-- seleccionar todos los datos
select * from gastos;

-- seleccionar columnas
select descripcion_gasto, valor_gasto from gastos;

-- filtrar datos
select * from gastos
where valor_gasto > 10
and id_categoria = 3;

-- ordenar los datos
select * from gastos
where valor_gasto > 10
and id_categoria = 3
order by valor_gasto desc;

-- limitar la cantidad de registros
select * from gastos
where valor_gasto > 10
and id_categoria = 3
order by valor_gasto desc
limit 2;

-- DQL - joins
-- join básico

select * from gastos g
join categorias c
on c.id_categoria = g.id_categoria ;

-- join tres tablas
select * from gastos g
join categorias c
on c.id_categoria = g.id_categoria
join usuarios u
on u.id_usuario = g.id_usuario ;

-- campos específicos
select  g.id_gasto , g.descripcion_gasto, g.valor_gasto, g.fecha_gasto, c.nombre_categoria, u.nombre_usuario  from gastos g
join categorias c
on c.id_categoria = g.id_categoria
join usuarios u
on u.id_usuario = g.id_usuario
order by g.id_gasto asc;

-- left join
select * from gastos g
left join categorias c
on c.id_categoria = g.id_categoria ;

-- right join
select * from gastos g
right join categorias c
on c.id_categoria = g.id_categoria ;