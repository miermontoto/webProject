function mayorEdad(fecha) {
    var hoy = new Date();
    return hoy.setFullYear(hoy.getFullYear() - 18) >= fecha;
}

function checkMayorEdad(idFecha, idSpan) {
    var booleanCheck = mayorEdad(document.getElementById(idFecha).valueAsDate);
    document.getElementById(idSpan).innerHTML = 
        booleanCheck ? '' : '❌ Debes de ser mayor de edad para enviar este formulario.'; // ReqF20
    return booleanCheck;
}

function comprobar() {
    formDom = document.getElementById('idSugerencias');
    var check = false;
    check |= checkMayorEdad('fechaNacimiento', 'checkDate');

    if(check) formDom.submit();
}

function actualizarCadena(e, idSpan) { // ReqJ24
    if(e.keyCode) keycode = e.keyCode;
    else keycode = e.which;

    document.getElementById(idSpan).innerHTML += String.fromCharCode(keycode);
}

function limpiarCadena(id) {
    document.getElementById(id).innerHTML = '';
}

function actualizarPosRatón(e, idSpan) { // ReqJ26
    document.getElementById(idSpan).innerHTML = 'x: ' + e.clientX + ', y: ' + e.clientY; 
}

function cambiarBandera(e, idSpan) { // ReqJ28
    var banderas = ['🇪🇸', '🇨🇰', '🇬🇧', '🇩🇪', '🇫🇷', '🇮🇹', '🇺🇸', '🇪🇺', '🇦🇺', '🇧🇪', '🇨🇦', '🇩🇰', '🇫🇷', '🇬🇧', '🇮🇪', '🇯🇵', '🇰🇷', '🇷🇺', '🇸🇪', '🇸🇬', '🇸🇾', '🇹🇷', '🇺🇦', '🇺🇸', '🇺🇿', '🇻🇳', '🇼🇸', '🇾🇪', '🇿🇦', '🇿🇲'];
    document.getElementById(idSpan).innerHTML = banderas[Math.random() * banderas.length | 0];
}

function changeFooterColor(idFooter, bool) {
    document.getElementById(idFooter).style.backgroundColor = bool ? '#ff0000' : 'lightgrey';
    document.getElementById(idFooter).style.color = bool ? '#ffffff' : 'black';
}

function coloresBotones(btn1, btn2) { // ReqJ21
    document.getElementById(btn1).style.color = 'blue';
    document.getElementById(btn2).style.color = 'green';
}