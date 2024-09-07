function pesquisar() {

    
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    // O elemento com o ID "resultados-pesquisa" será utilizado para
    // inserir os resultados dinamicamente.
    let section = document.getElementById
    ("resultados-pesquisa");
 
    let  campoPesquisa = document.getElementById
    ("campo-pesquisa").value.trim();
    console.log(campoPesquisa)


    if (campoPesquisa == ""){
        section.innerHTML = " <p> nada foi encontrado digite o nome de um jogo ou genero de jogo </p>";
        return
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados.
    // A cada iteração do loop, o HTML de cada resultado será concatenado
    // a essa string, formando o HTML final que será inserido na seção.
    let resultados = "";
    let titulo = "";
    let genero = "";
    // Itera sobre cada item de dados (assumindo que 'dados' é um array).
    // Para cada item, cria uma nova div com as informações do item
    // (título, descrição, gênero e link) e adiciona ao HTML dos resultados.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        genero = dado.genero.toLowerCase()
        if (titulo.includes(campoPesquisa)
        || genero.includes(campoPesquisa)){

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
    // Substitui todo o conteúdo anterior da seção pelos novos resultados.
    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado.</p>";
    } else {
        section.innerHTML = resultados;
    }
}