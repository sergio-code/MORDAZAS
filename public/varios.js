// funcion para escuchar un evento
document.addEventListener('DOMContentLoaded', iniciarFormulario);
function iniciarFormulario() {
    const form = document.getElementById('formConsulta'); // toma el formulario por id
    if (form) {
        form.addEventListener('submit', enviarDatos); // asocia el evento 'submit' al formulario
    }
}

//funcion para enviar datos

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const maquina = document.getElementById('maquina').value;
    const operacion = document.getElementById('operacion').value;
    const modelo = document.getElementById('modelo').value;

    // Objeto con los datos
    const data = { maquina, operacion, modelo };
    console.log(data);  // Mostrar los datos en la consola

    // Enviar los datos al servidor
    fetch('/busquedaRepuesto', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Asegúrate de que es JSON
        },
        body: JSON.stringify(data), // Convertir el objeto en una cadena JSON
    })
    .then(response => response.json())  // Obtener la respuesta como JSON
    .then(data => {
        if (data.leyenda !== null) {
            // Mostrar leyenda en el modal
            mostrarLeyendaModal(data.leyenda);
        } 
    })
    .catch(error => {
        // Mostrar un error en caso de fallo en la conexión o en la respuesta
        mostrarErrorModal(error.message);
    });
}

// Función para mostrar el modal con la leyenda
function mostrarLeyendaModal(leyenda) {
    const modal = document.getElementById('miModal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = leyenda;  // Mostrar la leyenda en el modal
    modal.style.display = 'block'; // Mostrar el modal
}

// Función para mostrar el modal con el error
function mostrarErrorModal(mensaje) {
    const modal = document.getElementById('miModal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = mensaje; // Mostrar el mensaje de error
    modal.style.display = 'block'; // Mostrar el modal
}

// Función para cerrar el modal
function cerrarModal() {
    const modal = document.getElementById('miModal');
    modal.style.display = 'none'; // Ocultar el modal
}



function volver() {
    window.history.back();
}

