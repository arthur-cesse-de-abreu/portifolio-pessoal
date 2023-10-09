// passo 1 - pega a lista de abas
const abas = document.querySelectorAll(".aba");

abas.forEach((aba) => {
  // passo 2 - monitorando o click de cada aba
  aba.addEventListener("click", () => {
    // verifica se a aba está selecionada se ela estiver selecionada
    //as próximas linhas não serão executadas
    if (aba.classList.contains("selecionado")) {
      return;
    }
    // passo 3 - ao click, desmarcar aba selecionada

    //buscando o elemento que contém a classe "aba" e a "classe" selecionado
    const abaSelecionada = document.querySelector(".aba.selecionado");

    // removendo do elemento que contém a classe selecionado
    // a classe "selecionado"
    abaSelecionada.classList.remove("selecionado");

    // pesso 4 = marcar a aba clicada como selecionado

    // adicionando a classe "selecionado" na aba foi clicada
    aba.classList.add("selecionado");

    // pesso 5 = Esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(
      ".informacao.selecionado"
    );
    informacaoSelecionada.classList.remove("selecionado");

    // passo 6 = Mostrar o conteúdo da aba selecionada
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const elementoInformacaoDaAba = document.getElementById(idDoElementoDeInformacoesDaAba);  
    elementoInformacaoDaAba.classList.add("selecionado")
  });
});