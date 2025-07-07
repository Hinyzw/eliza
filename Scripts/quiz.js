const quizzes = {
  queimaduras: {
    titulo: "Quiz - Queimaduras",
    perguntas: [
      {
        texto: "Qual a primeira coisa a se fazer ao ver uma queimadura?",
        opcoes: ["Aplicar gelo", "Lavar com água corrente", "Passar pomada", "Cobrir com pano seco"],
        correta: 1
      },
      {
        texto: "Em caso de queimadura de 3º grau, o que fazer?",
        opcoes: ["Resfriar com água", "Cobrir com pano úmido", "Remover roupas grudadas", "Procurar atendimento médico"],
        correta: 3
      }
    ]
  },
  parada: {
    titulo: "Quiz - Parada Cardiorrespiratória",
    perguntas: [
      {
        texto: "Qual é o primeiro passo na RCP?",
        opcoes: ["Verificar respiração", "Fazer compressões", "Usar o desfibrilador", "Chamar ajuda"],
        correta: 0
      },
      {
        texto: "Quantas compressões por minuto devem ser feitas?",
        opcoes: ["60 a 80", "80 a 100", "100 a 120", "120 a 140"],
        correta: 2
      }
    ]
  },
  hemorragias: {
    titulo: "Quiz - Hemorragias",
    perguntas: [
      {
        texto: "O que fazer em caso de sangramento intenso?",
        opcoes: ["Elevar o membro afetado", "Fazer torniquete", "Aplicar pressão direta", "Lavar com água"],
        correta: 2
      }
    ]
  }
};

const urlParams = new URLSearchParams(window.location.search);
const tema = urlParams.get('tema');
const quiz = quizzes[tema];

let perguntaAtual = 0;
let acertos = 0;
const totalPerguntas = quiz ? quiz.perguntas.length : 0;

function mostrarPergunta() {
  const container = document.getElementById('quiz-container');
  container.innerHTML = '';

  if (perguntaAtual >= totalPerguntas) {
    mostrarResultado();
    return;
  }

  const pergunta = quiz.perguntas[perguntaAtual];
  const div = document.createElement('div');
  div.className = 'pergunta';
  div.innerHTML = `
    <p><strong>${perguntaAtual + 1}/${totalPerguntas}:</strong> ${pergunta.texto}</p>
    <div class="opcoes">
      ${pergunta.opcoes.map((op, i) => `
        <button class="opcao" onclick="verificarResposta(${i}, ${pergunta.correta})">
          ${op}
        </button>
      `).join('')}
    </div>
  `;

  container.appendChild(div);
}

function verificarResposta(resposta, correta) {
  const opcoes = document.querySelectorAll('.opcao');
  
  // Desabilita os botões
  opcoes.forEach(btn => btn.disabled = true);
  
  // Marca a resposta correta
  opcoes[correta].classList.add('correta');
  
  if (resposta === correta) {
    acertos++;
    opcoes[resposta].classList.add('acertou');
  } else {
    opcoes[resposta].classList.add('errou');
  }

  // Avança para a próxima pergunta após 1 segundo
  setTimeout(() => {
    perguntaAtual++;
    mostrarPergunta();
  }, 1000);
}

function mostrarResultado() {
  const container = document.getElementById('quiz-container');
  container.style.display = 'none';
  
  const resultado = document.getElementById('resultado');
  resultado.style.display = 'block';
  
  document.getElementById('acertos').textContent = acertos;
  document.getElementById('total').textContent = totalPerguntas;
  
  document.getElementById('refazer').onclick = () => {
    perguntaAtual = 0;
    acertos = 0;
    container.style.display = 'block';
    resultado.style.display = 'none';
    mostrarPergunta();
  };
}

if (quiz) {
  document.getElementById('titulo').innerText = quiz.titulo;
  mostrarPergunta();
} else {
  document.getElementById('quiz-container').innerText = "Quiz não encontrado.";
}
