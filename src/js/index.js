// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
// passo 3 - desmarcar a aba selecionada
// passo 4 - marcar a aba clicada como selecionado
// passo 5 - esconder o conteúdo anterior
// passo 6 - mostrar o conteúdo da aba selecionada

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
    let elementoInformacaoDaAba = document.getElementById(idDoElementoDeInformacoesDaAba);  
    elementoInformacaoDaAba.classList.add("selecionado")
  });
});

// passo 2 - dar um jeito de identificar o clique no elemento da aba
// passo 3 - desmarcar a aba selecionada
// passo 4 - marcar a aba clicada como selecionado
// passo 5 - esconder o conteúdo anterior
// passo 6 - mostrar o conteúdo da aba selecionada

// const abas = document.querySelectorAll(".aba");

// abas.forEach((aba) => {
//   aba.addEventListener("click", function () {
//     if (aba.classList.contains("selecionado")) return;

//     selecionarAba(aba);
//     mostrarInformacoesDaAba(aba);
//   });
// });

// function selecionarAba(aba) {
//   const abaSelecionada = document.querySelector(".aba.selecionado");
//   abaSelecionada.classList.remove("selecionado");

//   aba.classList.add("selecionado");
// }

// function mostrarInformacoesDaAba(aba) {
//   const idDoElementoDeInformacoesDaAba = aba.id;
//   const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);

//   const informacaoSelecionada = document.querySelector(".informacao.selecionado");
//   informacaoSelecionada.classList.remove("selecionado");

//   informacaoASerMostrada.classList.add("selecionado");
// }
