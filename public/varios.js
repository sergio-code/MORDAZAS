// funcion para escuchar un evento
document.addEventListener('DOMContentLoaded', iniciarFormulario);
function iniciarFormulario() {
    const form = document.getElementById('mordazas'); // toma el formulario por id
    if (form) {
        form.addEventListener('submit', enviarDatos); // asocia el evento 'submit' al formulario
    }
}

//funcion para enviar datos

function enviarDatos(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const maquina = document.getElementById('maquina').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const operacion = document.getElementById('operacion').value;
    const modelo = document.getElementById('modelo').value;

    // objeto con los datos
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
    .then(response => {
        if (!response.ok) {
            throw new Error('Credenciales incorrectas');
        }
        return response.text();
    })
    .then(data => {
        window.location.href = '/bienvenido';
    })
    .catch(error => {
        mostrarErrorModal(error.message);
    });
}

// Función para mostrar el modal con el error
function mostrarErrorModal(mensaje) {
    const modal = document.getElementById('miModal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = mensaje;
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

 