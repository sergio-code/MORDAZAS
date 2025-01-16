const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para analizar cuerpos de solicitudes en formato JSON
app.use(express.json());


const { busquedaRepuesto } = require('./action');

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));


// Ruta para servir el archivo logueo.html
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/formulario.html'));  // Asegúrate de que 'logueo.html' esté dentro de 'public'
});


// Manejar la solicitud POST para /logueo
app.post('/busquedaRepuesto', async (req, res) => {
  const { maquina, operacion, modelo } = req.body;

  try {
    // Llamar a la función de action.js para verificar las credenciales
    const leyenda = await busquedaRepuesto(maquina, operacion, modelo);

   // Responder con la leyenda (puede ser null) y un mensaje de éxito
   res.json({ message: '¡Bienvenido!', leyenda: leyenda });
  } catch (error) {
    // Si hubo algún error al leer la base de datos
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});



// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});