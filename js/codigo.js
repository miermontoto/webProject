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

function changeFooterColor(idFooter, bool, idColor) {
    document.getElementById(idFooter).style.backgroundColor = bool ?  'lightgrey' : document.getElementById(idColor).value;
    document.getElementById(idFooter).style.color = bool ? '#ffffff' : 'black';
}

function coloresBotones(btn1, btn2) { // ReqJ21
    document.getElementById(btn1).style.color = 'blue';
    document.getElementById(btn2).style.color = 'green';
}

function actualizarColorTabla(idColor, nameHeads, idSpan) {
    var genSpan = document.getElementById(idSpan);
    var tempDom = document.getElementsByName(nameHeads);
    var color = document.getElementById(idColor).value;
    for(var i = 0; i < tempDom.length; i++) tempDom[i].style.backgroundColor = color;
    genSpan.style.color = color; // DefJS5
}

function checkTel(idTel) { // ReqF19
    var tempDom = document.getElementById(idTel);
    var temp = tempDom.value;
    if(temp.length == 9) tempDom.style = 'border: 1px solid green;';
    else tempDom.style = 'border: 0px;';
}

// ---------- ELEMENTOS DE LA DEFENSA

function verificar(idText, nameRadios, idSpan) { // DefJS2
    var text = document.getElementById(idText).value;
    var radios = document.getElementsByName(nameRadios);
    var span = document.getElementById(idSpan);

    for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            if(radios[i].value == text) {
                span.innerHTML = '✅';
                return true;
            } else {
                span.innerHTML = '❌';
                return false;
            }
        }
    }
}

function checkChecks(nameChecks, idSpan) { // DefJS3
    var checks = document.getElementsByName(nameChecks);
    var span = document.getElementById(idSpan);

    let numberChecked = 0;

    for(var i = 0; i < checks.length; i++) {
        if(checks[i].checked) {
            numberChecked++;
        }
    }

    span.innerHTML = numberChecked;
}

function genTit(idText, idNum, nameDecors, idSpan, idColor) { // DefJS4
    var text = document.getElementById(idText).value;
    var num = document.getElementById(idNum).valueAsNumber;
    var decors = document.getElementsByName(nameDecors);
    var span = document.getElementById(idSpan);
    var color = document.getElementById(idColor).value;

    span.innerHTML = text;
    span.style.fontSize = num + 'px';
    span.style.fontWeight = 'normal';
    span.style.fontStyle = 'normal';
    if(decors[1].checked) {
        span.style.fontWeight = 'bold';
    } else if(decors[0].checked) {
        span.style.fontStyle = 'italic';
    }
    span.style.color = color;
}