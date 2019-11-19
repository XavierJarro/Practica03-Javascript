var galeria = ['imagen1', 'imagen2', 'imagen3', 'imagen4', 'imagen5', 'imagen6', 'imagen7', 'imagen8', 'imagen9', 'imagen10']
var alet = []
var posicion = 0

function init() {
    posicion = 0
    iniciar()
    mostrar()
    puesto()
}

function puesto() {
    if (posicion == 0) {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = true;
    } else if (posicion == 4) {
        document.getElementById("siguiente").disabled = true;
        document.getElementById("anterior").disabled = false;
    } else {
        document.getElementById("siguiente").disabled = false;
        document.getElementById("anterior").disabled = false;
    }
}

function anterior() {
    posicion--
    puesto()
    mostrar()
}

function iniciar() {
    posicion = 0
    puesto()
    for (var i = 0; i < 5; i++) {
        var al = Math.round(Math.random() * 9)
        while (alet.includes(galeria[al])) {
            var al = Math.round(Math.random() * 9)
        }
        alet[i] = galeria[al]
    }
    mostrar()
}

function mostrar() {
    var mostrarIma = 'images/' + alet[posicion] + '.jpg'
    document.getElementById('imagen').src = mostrarIma
}

function siguiente() {
    posicion++
    puesto()
    mostrar()
}