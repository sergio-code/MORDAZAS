const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Express!');
});

// Ruta para servir el archivo logueo.html
app.get('/inicio', (req, res) => {
  res.sendFile(path.join(__dirname,'public/formulario.html'));  // Asegúrate de que 'logueo.html' esté dentro de 'public'
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});