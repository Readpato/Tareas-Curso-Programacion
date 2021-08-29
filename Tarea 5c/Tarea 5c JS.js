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
    $calculoPromedioArray.innerText = `${promedioTotal}.`;
    return false
}

const $botonCalcularNumeroPequeno = document.querySelector('#calcularNumeroPequeno');

$botonCalcularNumeroPequeno.onclick = function () { 
    const $numerosArray = document.querySelectorAll('.numerosArray');
    const $numeroPequenoArray = document.querySelector('#numeroPequenoArray')
    const listaCompletaNumeros = [];
   
    for ( n = 0 ; n < $numerosArray.length ; n++) {
        listaCompletaNumeros.push(Number($numerosArray[n].innerText));
    }   

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    $numeroPequenoArray.innerText = `${Math.min(...listaCompletaNumeros)}.`;
    
    return false;
}

const $botonCalcularNumeroGrande = document.querySelector('#calcularNumeroGrande');

$botonCalcularNumeroGrande.onclick = function () {
    const $numerosArray = document.querySelectorAll('.numerosArray');
    const $numeroGrandeArray = document.querySelector('#numeroGrandeArray');
    const listaCompletaNumeros = [];

    for ( j = 0 ; j < $numerosArray.length ; j++) {
        listaCompletaNumeros.push(Number($numerosArray[j].innerText));
    }
    $numeroGrandeArray.innerText = `${Math.max(...listaCompletaNumeros)}.`;
    return false;
}

const $botonCalcularNumeroRepetido = document.querySelector('#calcularNumeroRepetido');

$botonCalcularNumeroRepetido.onclick = function () {
    const $numerosArray = document.querySelectorAll('.numerosArray');
    const $numeroRepetidoArray = document.querySelector('#numeroRepetidoArray');
    let NUMERO_REPETIDO;
    let FRECUENCIA_NUMERO = 0;
    let MAXIMA_FRECUENCIA = 1;


    for ( m = 0 ; m < $numerosArray.length ; m++ ) {
        for ( k = m + 1 ; k < $numerosArray.length ; k++) {
            if (Number($numerosArray[m].innerText) === Number($numerosArray[k].innerText)){
               FRECUENCIA_NUMERO++;
            }

            if (FRECUENCIA_NUMERO > MAXIMA_FRECUENCIA)
            MAXIMA_FRECUENCIA = FRECUENCIA_NUMERO;
            NUMERO_REPETIDO = Number($numerosArray[m].innerText);
        }
        FRECUENCIA_NUMERO = 0;
    }

    $numeroRepetidoArray.innerText = `${NUMERO_REPETIDO}.`;
    return false;
} 
