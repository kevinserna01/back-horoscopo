const express = require('express');
const { urlencoded, json } = require('express');
const router = require('./routes/signos.routes.js');
const cors = require('cors');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Ruta para la raíz que responde con un mensaje
app.get('/', (req, res) => {
    res.send("Hola soy el horóscopo de Kevin");
});

// Usar el router para la ruta /v1/signos
app.use('/v1/signos', router);

app.listen(4000, () => {
    console.log('Listening at port 4000');
});
