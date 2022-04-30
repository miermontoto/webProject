function checkLang() {
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang.indexOf("es") == -1) window.location.href = "index_en.html";
}

function updateDateHint(idDate, idHint) {
    var dateHint = document.getElementById(idHint);
    var date = document.getElementById(idDate);

    dateHint.innerHTML = dateFullFormat.format(date.valueAsDate); // ReqF18
}