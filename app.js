function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
 
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();
    console.log(campoPesquisa);

    if (campoPesquisa === "") {
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome de um jogo ou gênero de jogo.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    let resultados = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array).
    for (let dado of dados) {
        // Converte 'dado.titulo' e 'dado.genero' para minúsculas antes de usar 'includes'.
        let tituloLower = dado.titulo.toLowerCase();
        let generoLower = dado.genero.toLowerCase();

        if (tituloLower.includes(campoPesquisa) || generoLower.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="#" target="_blank">${dado.titulo}</a></h2>  
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.genero}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;
        }
    }

    // Atualiza o conteúdo HTML da seção com os resultados construídos.
    if (resultados === "") {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    }
    section.innerHTML = resultados;
}
