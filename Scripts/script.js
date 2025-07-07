const imagens = ['IMGs/img1.jpg', 'IMGs/img2.jpg', 'IMGs/img3.jpg'];
let index = 0;
setInterval(() => {
  index = (index + 1) % imagens.length;
  document.getElementById('imagem-carrossel').src = imagens[index];
}, 3000); // troca a cada 3 segundos

