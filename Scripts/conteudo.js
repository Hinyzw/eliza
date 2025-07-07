const informacoes = {
  hemorragias: {
    secao: "Primeiros Socorros",
    titulo: "Hemorragias",
    texto: "Hemorragias são sangramentos que precisam ser controlados rapidamente para evitar a perda excessiva de sangue.",
    explicacaoclara: ["IMGs/ex1.jpg", "IMGs/ex2.jpg", "IMGs/ex3.jpg"],
    imagemVisual: {
      src: "IMGs/visual1.jpg",
      descricao: "Imagem demonstrando a forma correta de estancar sangramentos."
    },
    video: {
      src: "https://www.youtube.com/embed/abcd1234",
      descricao: "Tutorial em vídeo sobre contenção de hemorragias."
    },
    quizURL: "quiz.html?tema=hemorragias" // Adicionado
  },

  queimaduras: {
    secao: "Primeiros Socorros",
    titulo: "Queimaduras",
    texto: "As queimaduras devem ser resfriadas com água corrente por pelo menos 10 minutos.",
    explicacaoclara: ["IMGs/q1.jpg", "IMGs/q2.jpg", "IMGs/q3.jpg"],
    imagemVisual: {
      src: "IMGs/qvisual.jpg",
      descricao: "Imagem sobre cuidados com queimaduras de 1º grau."
    },
    video: {
      src: "https://www.youtube.com/embed/efgh5678",
      descricao: "Vídeo mostrando o que fazer em caso de queimaduras."
    },
    quizURL: "https://hinyzw.github.io/eliza/quiz.html?tema=queimaduras" // Adicionado
  },

  parada: {
    secao: "Primeiros Socorros",
    titulo: "Parada Cardiorrespiratória",
    texto: "As queimaduras devem ser resfriadas com água corrente por pelo menos 10 minutos.",
    explicacaoclara: ["IMGs/q1.jpg", "IMGs/q2.jpg", "IMGs/q3.jpg"],
    imagemVisual: {
      src: "IMGs/qvisual.jpg",
      descricao: "Imagem sobre cuidados com queimaduras de 1º grau."
    },
    video: {
      src: "https://www.youtube.com/embed/efgh5678",
      descricao: "Vídeo mostrando o que fazer em caso de queimaduras."
    },
    quizURL: "https://hinyzw.github.io/eliza/quiz.html?tema=parada" // Adicionado
  }
};

const urlParams = new URLSearchParams(window.location.search);
const tema = urlParams.get("tema")?.toLowerCase();
const conteudo = informacoes[tema];

if (conteudo) {
  document.getElementById("secao").innerText = conteudo.secao;
  document.getElementById("titulo").innerText = conteudo.titulo;
  document.getElementById("descricao").innerText = conteudo.texto;

  const quadrados = document.querySelectorAll(".explicacao .quadrado");
  conteudo.explicacaoclara.forEach((src, i) => {
    if (quadrados[i]) {
      quadrados[i].innerHTML = `
        <img src="${src}" class="explicacao-img" alt="Passo ${i + 1}">
      `;
    }
  });

  const imagem = document.querySelector(".conteudo-visual .imagem");
  imagem.querySelector("img").src = conteudo.imagemVisual.src;
  imagem.querySelector("p").innerText = conteudo.imagemVisual.descricao;

  const video = document.querySelector(".conteudo-visual .video");
  video.querySelector("iframe").src = conteudo.video.src;
  video.querySelector("p").innerText = conteudo.video.descricao;

  // Configurando o botão do quiz
  const quizLink = document.getElementById("quiz-link");
  quizLink.href = conteudo.quizURL;
  quizLink.textContent = `Quiz sobre ${conteudo.titulo}`;

} else {
  document.querySelector("main").innerHTML = "<h2>Conteúdo não encontrado.</h2>";
}