let sound = new Audio('./cancion/tomp3.cc - Floricienta  Flores Amarillas Official Video.mp3')
function draw() {
  const canvas = document.getElementById("canvas");


  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    
    //circle

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.ellipse(250, 250, 50, 50, Math.PI , 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    //petals
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.ellipse(250, 125, 50, 75, Math.PI , 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.ellipse(350, 175, 50, 75, Math.PI/4 , 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.ellipse(365, 300, 50, 75, Math.PI/1.7, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    //petal down
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.ellipse(250, 375, 50, 75, Math.PI , 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.ellipse(135, 300, 50, 75, Math.PI/3 , 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.ellipse(147, 180, 50, 75, Math.PI/1.4 , 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}

function begin(element){
  const text = document.getElementById("texto");
  element.style.display = 'none';
  text.textContent = 'HOLA te regalo una flor amarilla:3';
  draw();
  sound.play();
}

function refresh(){
  location.reload();
  sound.pause();
}

