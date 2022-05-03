/*
 * Solución Tarea UF1306 Ud 1.1
 * Solución a la Actividad UF1306. UD3. Actividad 2_ Caso práctico
 */

/*
    Ejemplo de función anónima (sin nombre)
    1.- Ejecuta el código cuando la página se haya cargado completamente
*/

window.onload = function() {

    // 1.c.- Muestre con JavaScript en qué modo de funcionamiento se está ejecutando la página web.

    document.getElementById("p1c").innerHTML = document.compatMode;
    document.getElementById("p1c2").innerHTML = document.compatMode;

    // 1.d.- Usando alguna herramienta de depuración, mostrar la hora actual en la consola del navegador, mostrando horas, minutos y segundos.

    console.log( dameHora() );

    // 1.e.- Mostrar la hora actual en la página web y refrescar la página automáticamente cada 10 segundos.

    document.getElementById("p1d").innerHTML = dameHora();
}

function dameHora() {
    //Mostrar hora actual
    var d = new Date();
    var hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    return hora;
}
