function mayorEdad(fecha) {
    var hoy = new Date();
    return hoy.setFullYear(hoy.getFullYear() - 18) >= fecha;
}

function checkMayorEdad(idFecha, idSpan, idSubmit) {
    var spanValue;
    if(mayorEdad(document.getElementById(idFecha).valueAsDate)) {
        spanValue = '✅';
        document.getElementById(idSubmit).disabled = false;
    } else {
        spanValue = '❌';
        document.getElementById(idSubmit).disabled = true;
    }
    document.getElementById(idSpan).innerHTML = spanValue;
}

