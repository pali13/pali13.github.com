function apertura() {
    var apertura = document.getElementById("TApertura");
    var anual = document.getElementById("TAnual");
    var descenso = document.getElementById("TDescenso");
    if (apertura.style.display === "none") {
        apertura.style.display = "block";
        anual.style.display = "none";
        descenso.style.display = "none";
    }
}
function anual() {
    var apertura = document.getElementById("TApertura");
    var anual = document.getElementById("TAnual");
    var descenso = document.getElementById("TDescenso");
    if (anual.style.display === "none") {
        anual.style.display = "block";
        apertura.style.display = "none";
        descenso.style.display = "none";
    }
}
function descenso() {
    var apertura = document.getElementById("TApertura");
    var anual = document.getElementById("TAnual");
    var descenso = document.getElementById("TDescenso");
    if (descenso.style.display === "none") {
        descenso.style.display = "block";
        anual.style.display = "none";
        apertura.style.display = "none";
    }
}

/* 
 Philips ambilight tv
 Üzerine gleince duruyor slide
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


