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

