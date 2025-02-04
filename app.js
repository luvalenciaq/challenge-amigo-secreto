let listaAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    let regex = /^[A-Za-z]+( [A-Za-z]+)*$/;

    if(!regex.test(amigo)){
        alert('Por favor, inserte un nombre válido');
        return;
    } 
    if (listaAmigos.map(a => a.toLowerCase()).includes(amigo.toLowerCase())){
        alert(`El amigo '${amigo}' ya está en la lista.`);
        limpiarCaja();
        return;
    }else{
        listaAmigos.push(amigo);
        limpiarCaja();
        actualizarLista(listaAmigos);
    }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let listaActualizada = document.getElementById('listaAmigos');
    listaActualizada.innerHTML = '';

    listaAmigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'X';
        btnEliminar.classList.add('btn-eliminar');
        btnEliminar.onclick = () => eliminarAmigo(index);
        li.appendChild(btnEliminar);

        listaActualizada.appendChild(li);
    });
    if (document.getElementById("resultado").innerHTML !== "") {
        const botonesEliminar = document.querySelectorAll('.btn-eliminar');
        botonesEliminar.forEach(btn => {
            btn.setAttribute('disabled', 'true');
        });
    }
}

function eliminarAmigo(index) {
    listaAmigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo(){
    if(listaAmigos.length == 0){
       alert('Debe ingresar al menos un amigo');
       return;
    }

    let aleatorio = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[aleatorio];

    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;

    document.querySelector('.button-draw').setAttribute('disabled','true');
    document.querySelector('.button-add').setAttribute('disabled','true');

    actualizarLista();
}

