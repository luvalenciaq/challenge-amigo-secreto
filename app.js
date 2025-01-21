// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;

    if(amigo == ''){
        alert('Por favor, inserte un nombre');
    } else {
        listaAmigos.push(amigo);
        limpiarCaja();
        actualizarLista(listaAmigos);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista(listaAmigos){
    let listaActualizada = document.getElementById('listaAmigos');
    listaActualizada.innerHTML = '';

    for(let i = 0; i < listaAmigos.length; i++){
        const li = document.createElement('li');
        li.textContent = listaAmigos[i];
        listaActualizada.appendChild(li);
    }
}

function sortearAmigo(lista){
    //validar que el array no esté vacío
    if(lista.length == 0){
       alert('Debe ingresar el nombre de sus amigos');
       return;
    }
    //generar el aleatorio
    let aleatorio = Math.floor(Math.random()*lista.length);

    //obtener el nombre sorteado y mostrarlo
    let amigoSorteado = lista[aleatorio];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    
    
}

