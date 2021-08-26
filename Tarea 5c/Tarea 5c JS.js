//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."


//Acordarse que si queremos llamar a un elemento con el querySelector y el mismo tiene una clase o id, tenemos que usar los
// simbolos correspondientes para llamarlos.


const $botonCalcularPromedio = document.querySelector('#calcularPromedio');

$botonCalcularPromedio.onclick = function() {
    const $numerosArray = document.querySelectorAll('.numerosArray');
    const $calculoPromedioArray = document.querySelector('#calculoPromedioArray');
    let sumaTotalNumerosArray = 0;

    for (i = 0; i < $numerosArray.length; i++) {
        sumaTotalNumerosArray = sumaTotalNumerosArray + Number($numerosArray[i].innerText);
        
    }

    let promedioTotal = sumaTotalNumerosArray / $numerosArray.length;
    $calculoPromedioArray.innerText = promedioTotal;
    return false
}

