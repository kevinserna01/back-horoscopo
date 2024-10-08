const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/signos.routes.js');
const cors = require('cors');
const favicon = require('serve-favicon');
const path = require('path');

const app = express();

// Middleware para servir favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Manejador para la ruta raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al backend de Kevin!'); // O cualquier otro mensaje que prefieras
});

// Manejador para la ruta GET que imprime el mensaje
app.get('/v1/signos', (req, res, next) => {
    console.log('Estás en el backend de Kevin');
    next(); // Llama al siguiente middleware o controlador de la ruta
});

// Usar el router para otras rutas
app.use('/v1/signos', router);

app.listen(4000, () => {
    console.log('Listening at port 4000');
});
