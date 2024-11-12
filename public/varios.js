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

    // valores del formulario
    const maquina = document.getElementById('maquina').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const operacion = document.getElementById('operacion').value;
    const modelo = document.getElementById('modelo').value;

    // objeto con los datos
    const data = { maquina, operacion, modelo };
    console.log(data);  // Mostrar los datos en la consola

    // respuesta exitosa
    console.log('Datos enviados correctamente'); // imprime en consola, se ve apretando f12 en el navegador y yendo a consola
    alert ('datos correctos. Maquina: '+ maquina + ',' + 'operacion: '+ operacion +', '+' modelo: '+ modelo);
    window.location.href = 'bienvenido.html';

    }

 