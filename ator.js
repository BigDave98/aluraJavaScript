let yAtor = 372;
let xAtor = 90;
let colisao = false;
let pontos = 0;

//Não deixa ator descer da linha inferior do mapa:
function podeMover(){
  return yAtor < 366;
  
}

//Retorna para posição inicial:
function posiçaoInicial(){
  yAtor = 372;
}

//Carrega imagem do Ator:
function mostraAtor() {
  image(imgAtor, xAtor, yAtor, 40, 40)
}

//Movimento ator:
function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if(podeMover()){
    yAtor += 3;
    }  
  }
  if(keyIsDown(LEFT_ARROW)) {
    xAtor -= 2;
  }
  if(keyIsDown(RIGHT_ARROW)) {
    xAtor += 2;
  }
}

//Fecha circuito ator:
function daVolta () {
  if (xAtor < -50){
    xAtor = 500
  }
  if (xAtor > 500){
    xAtor = -50
  }
}

//Colisão:
function verificaColisao() {
  for (let i = 0; i < imgCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], compCarro, altCarro, xAtor, yAtor, 15)
    
    if(colisao) {
      posiçaoInicial();
      somDaColisao.play()
      if (pontosMaiorQueZero()){
        pontos -= 1;
      }  
    }
  }
}

//Formato placar:
function incPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(pontos, width/5, 27);
}

//Soma pontos no placar:
function marcaPonto() {
  if(yAtor < 15) {
    pontos += 1;
    somDoPonto.play()
    posiçaoInicial()
  }
}

//Verifica se placar positivo e subtrai pontos:
function pontosMaiorQueZero(){
  if (pontos > 0){
    return pontos > 0;
  } 
}
  

