// funcion para escuchar un evento
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
    const maquina = document.getElementById('ingrese numero de maquina').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const Operacion = document.getElementById('ingrese numero de operacion').value;
    const modelo = document.getElementById('ingrese modelo').value;

    // objeto con los datos
    const data = { maquina, operacion, modelo };
    console.log(data);  // Mostrar los datos en la consola

    // respuesta exitosa
    console.log('Datos enviados correctamente'); // imprime en consola, se ve apretando f12 en el navegador y yendo a consola
  

    }

 //DOCUMENTO JAVSCRIPT #2
function enviarDatos2(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    const maquina = document.getElementById('ingrese numero de maquina').value; //importante naturalizar sintaxis, se usa asi siempre para tomar elementos
    const Operacion = document.getElementById('ingrese numero de operacion').value;
    const modelo = document.getElementById('ingrese modelo').value;

    // Crear un objeto con los datos
    const data = { maquina, operacion, modelo };
    console.log(data);

    // Enviar los datos al servidor
    fetch('/logueo', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        console.log('Éxito:', data);
        alert(data.message); // Mostrar mensaje de éxito
    })
    .catch(() => {
        alert('Error al instanciar los datos');
    });
}