let xCarros = [600, 600, 600, -10, -10, -10];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidades = [4.5, 3, 3.7, -3.7, -3.3, -4.5];
let compCarro = 50
let altCarro = 40

//Carrega img dos carros 
function mostraCarro() {
  for (let i = 0; i < imgCarros.length/2; i++){
    image(imgCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
  }
  for (let i = 3; i < imgCarros.length; i++) {
    image(imgCarros[i], xCarros[i], yCarros[i], compCarro, altCarro);
  }
}



//Velocidade dos carros:
function movimentaCarro() {
  for (let i = 0; i < velocidades.length; i++){
    xCarros[i] -= velocidades[i];
  }
}


//Retorna para o inicio:
function posInicial() {
  //Carros da esquerda pra direita:
  for (let i = 0; i < imgCarros.length/2; i++){
    if (passouTela1(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
  for (let i = 3; i < imgCarros.length; i++) {
    if (passouTela2(xCarros[i])) {
      xCarros[i] = -20
    }
  }
}


function passouTela1(xCarro){
  return xCarro < -50;
}

function passouTela2(xCarro) {
  return xCarro > 600
}