let amigos = []; //lista de amigos vazia 

function limparCampo() { //função para limpar o campo de input e de resultado
    let campoInput = document.getElementById("amigo");
    campoInput.value = "";
    let campoResultado = document.getElementById("resultado")
    campoResultado.innerHTML = "";
}

function listaAmigos(){ //Função para adicionar na <ul> os elementos da lista amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
   for(let i = 0; i < amigos.length; i++){
        let elemento = document.createElement("li")
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
        }
}

function adicionarAmigo() { //Função para adicionar amigos
    let escrita = document.getElementById("amigo");
    let nome = escrita.value.trim();

    if (nome === "") { 
        alert("Por favor, insira um nome.");
        limparCampo(); 
    } else {
        amigos.push(nome);
        limparCampo();
        listaAmigos();
    }
}

function sortearAmigo(){ //Função para sortear amigos aleatórios
    
    let sorteado = Math.floor(Math.random() * amigos.length);

    if (amigos.length != 0){
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `O amigo sorteado foi: ${amigos[sorteado]}.`;
    } else {
        alert("A lista de amigos está vazia.")
    }
}

