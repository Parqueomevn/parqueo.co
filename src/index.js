const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost/mevn-parqueadero')
        .then(db => console.log('db is connected'))
        .catch(err => console.error(err));
// settings de express
// app.set('port',3000); //set lo creamos
app.set('port', process.env.PORT || 3000); // CONECTAR A UN PUERTO QUE OFRESCA EL SISTEMA OPERATIVO SI NO TIENE COENCTESE A 3000

// minddlewares funciones que se ejecute antes de que se entren en las rutas
app.use(morgan('dev'));
app.use(express.json()); // manipular json en el servidor

// routes
app.use('/tasks', require('./routes/tasks'));
//STATIC files 
// console.log(__dirname + '/public' ); //ruta de src
app.use(express.static(__dirname + '/public'));


//server is listening
app.listen(app.get('port'), ()=> { //get lo optenemos
    console.log('server on port 3000', app.get('port'));
});

