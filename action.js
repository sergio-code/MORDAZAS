const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ruta completa a la base de datos SQLite
const dbPath = 'C:\\Desarrollo\\MORDAZAS\\BD\\tablaModelo.db';  // Ruta absoluta a la base de datos SQLite

//C:\Desarrollo\MORDAZAS\BD

function busquedaRepuesto(maquina, operacion, modelo) {
    return new Promise((resolve, reject) => {
        // Conectar a la base de datos SQLite
        const db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                return reject('Error al conectar a la base de datos: ' + err.message);
            }
        });

        db.get('SELECT LEYENDA FROM tablaModelo WHERE NUM_MAQUINA =? and OPERACION = ? and MODELO = ?', [maquina, operacion, modelo], (err, row) => {
            if (err) {
                db.close();
                return reject('Error al consultar la base de datos: ' + err.message);
            }
        
            if (row) {
                // Si se encuentra el valor de LEYENDA, lo devolvemos en la promesa
                resolve(row.LEYENDA);
            } else {
                // Si no se encuentra, devolvemos un valor por defecto o false
                resolve("No hay datos para lo seleccionado");
            }
        
            // Cerrar la base de datos después de la consulta
            db.close();
        });
        
    });
}

module.exports = { busquedaRepuesto };