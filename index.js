const express = require('express');
require('dotenv').config()
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear servicdor de express
const app = express();

//base de datos
dbConnection();

// CORS
app.use(cors())

// Directorio Publico
app.use(express.static('public'))

//lectura y parseo del body 
app.use(express.json())

// Rutas 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))


// Escuchar peticiones 
app.listen(process.env.PORT, () => {
    console.log('servidor en puerto a te piñe es secreto de estado')
}) 