//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonIngreso = document.querySelector('#botonIngreso');
const $informacionCompilada = document.querySelector('#informacionCompilada');
const $nuestraCabecera = document.querySelector('h1');
const $imagenBar = document.querySelector('#fotito');
const $botonReset = document.querySelector('#reset');
const TEXTO_INGRESO_EQUIVOCADO = 'Tu ingreso es invalido';

//To erase the space between the names let's use splice.

$botonIngreso.onclick = function () {
    const $primerNombre = document.querySelector('#primerNombre').value;
    const $segundoNombre = document.querySelector('#segundoNombre').value;
    const $apellido = document.querySelector('#apellido').value;
    const $edadUsuario = (document.querySelector('#edadUsuario').value);

    if ($edadUsuario != null) {
        if ($edadUsuario < 18) {
            $nuestraCabecera.innerText = `Sos menor de edad, tomate el palo`;
            $imagenBar.src = 'denied.webp';
            $informacionCompilada.value = 'Acceso denegado';
            return false;
        } else {
            $informacionCompilada.value = `${$primerNombre} ${$segundoNombre} ${$apellido} ${$edadUsuario}`;
            $nuestraCabecera.innerText = `Bienvenid@, ${$primerNombre} ${$segundoNombre} ${$apellido}! `;
            $imagenBar.src = 'drunkGuy.webp';
            return false;
        }
    } else {
        $informacionCompilada.value = `${TEXTO_INGRESO_EQUIVOCADO}`;
        return false;
    }
}

// Cosas para arreglar
// -Boton de recompilacion no cambia cuando se apreta el boton reset
// -Boton de reseteo no resetea al tocar el boton de reset, cuando se activa la funcion $botonReset


/*$botonReset.onclick = function () {
    $imagenBar.src = 'bouncer.webp';
    $nuestraCabecera.innerText = 'Bienvenido!';
    return false;
}
*/
