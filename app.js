// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;

    if(amigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        listaAmigos.push(amigo);
        console.log(listaAmigos);
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

