// mostrar bases de datos
show dbs

//crear base de datos
use biblioteca

//mostrar colecciones
show collections

// crear base de datos en mongo
use biblioteca
db.createCollection("libros")

// insertar un registro
db.futbolistas.insert({
nombre: 'Cristiano',
apellido: 'Ronaldo',
edad: 38,
direccion: {
	ciudad: 'Riad',
	pais: 'Arabia saudita' },
casado: true
})


// insertar varios registros
db.futbolistas.insertMany([
  {
		nombre: 'Lionel Andrés',
		apellido: 'Messi',
		edad: 36,
		direccion: {
			ciudad: 'miami',
			pais: 'USA'
			},
		casado: true
	},
  {
		nombre: 'James David',
		apellido: 'Rodriguez',
		edad: 32,
		direccion: {
			ciudad: 'Sao paulo',
			pais: 'Brasil'
			},
		casado: false
	},
  {
		nombre: 'Erling Javier',
		apellido: 'Halaand',
		edad: 23,
		direccion: {
			ciudad: 'manchester',
			pais: 'Reino Unido'
			},
		casado: false}
])

// buscar todos los registros
db.futbolistas.find()

// buscar todos los registros con formato
db.futbolistas.find().pretty()

//actualizar un registro
db.futbolistas.updateOne({ apellido: 'Halaand' }, { $set: { casado: true} })

//actualizar varios registros
db.futbolistas.updateMany({ }, { $set: { enActividad: true } })

db.futbolistas.updateMany({ pais: 'Colombia' }, { $set: { edad: 34 } })

//eliminar un registro
db.futbolistas.deleteOne({ apellido: 'Ronaldo'})

db.futbolistas.deleteMany({ apellido: 'Ronaldo'})

// eliminar una colección
db.futbolistas.drop()

// vaciar una colección
db.futbolistas.deleteMany({ })


// contar registros
db.futbolistas.find().count()

// búsquedas básicas 
db.futbolistas.find({ casado: false})
db.futbolistas.find({ edad: 38})
db.futbolistas.find({ pais: 'Colombia'})

// búsquedas con varios términos
db.futbolistas.find({$or:[{ casado: true}, { apellido: 'Ronaldo'} ] })

// búsqueda con doble condición
db.futbolistas.find({$and:[{ casado: true}, { apellido: 'Ronaldo'} ] })

//búsqueda ordenada de mayor a menor
db.futbolistas.find().sort({ edad: -1 })

//búsqueda ordenada de menor a mayor
db.futbolistas.find().sort({ edad: 1 })

// limitar la cantidad de registros
db.futbolistas.find().limit(2)

// búsqueda con métodos combinados
db.futbolistas.find().limit(3).sort({ nombre: 1 }).pretty()

// búsqueda con operadores de comparación, mayor que
db.futbolistas.find({ edad: {$gt: 30} })

// búsqueda con operadores de comparación, menor que
db.futbolistas.find({ edad: {$lt: 30} })

// búsqueda con operadores de comparación, mayor o igual que
db.futbolistas.find({ edad: {$gte: 36} })

// búsqueda con operadores de comparación, menor o igual que
db.futbolistas.find({ edad: {$lte: 36} })

// búsqueda con operadores de comparación, diferente que
db.futbolistas.find({ edad: {$ne: 36} })

// búsqueda con operadores de comparación, igual que
db.futbolistas.find({ edad: {$eq: 36} })

// buscar un registro cuyo nombre empiece por Mess
db.futbolistas.find({ nombre: /^Mess/ })

// buscar un registro cuyo nombre termine por ssi
db.futbolistas.find({ nombre: /ssi$/ })

// buscar un registro cuyo nombre contenga la palabra Messi
db.futbolistas.find({ nombre: /Messi/ })

db.futbolistas.find({ pais: /olombia/ })