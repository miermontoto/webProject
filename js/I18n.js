function checkLang() {
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang.indexOf("es") == -1) window.location.href = "index_en.html";
}

function updateDateHint(idDate, idHint) {
    var dateHint = document.getElementById(idHint);
    var date = document.getElementById(idDate);

    dateHint.innerHTML = dateFullFormat.format(date.valueAsDate); // ReqF18
}

function updateCálculo(idNum1, idOp, idNum2, idSpan, idResultado, idMoneda) {
    var num1 = document.getElementById(idNum1);
    var num2 = document.getElementById(idNum2);
    var op = document.getElementById(idOp);
    var span = document.getElementById(idSpan);
    var moneda = document.getElementById(idMoneda);

    span.innerHTML = numberFormat.format(num1.valueAsNumber) + " " + op.value + " " + numberFormat.format(num2.valueAsNumber);
    var resultado = eval(num1.valueAsNumber + op.value + num2.valueAsNumber)
    document.getElementById(idResultado).innerHTML = numberFormat.format(resultado); // ReqI8
    moneda.innerHTML = currencyFormat.format(resultado); // ReqI9
}