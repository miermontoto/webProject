function mayorEdad(fecha) {
    var hoy = new Date();
    return hoy.setFullYear(hoy.getFullYear() - 18) >= fecha;
}

function checkMayorEdad(idFecha, idSpan) {
    var booleanCheck = mayorEdad(document.getElementById(idFecha).valueAsDate);
    document.getElementById(idSpan).innerHTML = 
        booleanCheck ? '' : 'โ Debes de ser mayor de edad para enviar este formulario.'; // ReqF20
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

function actualizarPosRatรณn(e, idSpan) { // ReqJ26
    document.getElementById(idSpan).innerHTML = 'x: ' + e.clientX + ', y: ' + e.clientY; 
}

function cambiarBandera(e, idSpan) { // ReqJ28
    var banderas = ['๐ช๐ธ', '๐จ๐ฐ', '๐ฌ๐ง', '๐ฉ๐ช', '๐ซ๐ท', '๐ฎ๐น', '๐บ๐ธ', '๐ช๐บ', '๐ฆ๐บ', '๐ง๐ช', '๐จ๐ฆ', '๐ฉ๐ฐ', '๐ซ๐ท', '๐ฌ๐ง', '๐ฎ๐ช', '๐ฏ๐ต', '๐ฐ๐ท', '๐ท๐บ', '๐ธ๐ช', '๐ธ๐ฌ', '๐ธ๐พ', '๐น๐ท', '๐บ๐ฆ', '๐บ๐ธ', '๐บ๐ฟ', '๐ป๐ณ', '๐ผ๐ธ', '๐พ๐ช', '๐ฟ๐ฆ', '๐ฟ๐ฒ'];
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

function actualizarColorTabla(idColor, idHead) {
    var tempDom = document.getElementsByName(idHead);
    for(var i = 0; i < tempDom.length; i++) tempDom[i].style.backgroundColor = document.getElementById(idColor).value;
}

function checkTel(idTel) { // ReqF19
    var tempDom = document.getElementById(idTel);
    var temp = tempDom.value;
    if(temp.length == 9) tempDom.style = 'border: 1px solid green;';
    else tempDom.style = 'border: 0px;';
}