function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  
}


function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  posInicial();
  verificaColisao();
  incPontos();
  marcaPonto();
  daVolta ()
}