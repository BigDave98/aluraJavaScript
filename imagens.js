let imgEstrada;
let imgAtor;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarros

//Sons do jogo:
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imgEstrada = loadImage("Imagens/estrada.png");
  imgAtor = loadImage("Imagens/galinnhaDeTenis.jpg");
  imgCarro1 = loadImage("Imagens/carro-1.png");
  imgCarro2 = loadImage("Imagens/carro-2.png");
  imgCarro3 = loadImage("Imagens/carro-3.png");
  imgCarro12 = loadImage("Imagens/carro-12.png");
  imgCarro22 = loadImage("Imagens/carro-22.jpg");
  imgCarro32 = loadImage("Imagens/carro-32.jpg");
  imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro12, imgCarro22, imgCarro32]
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}