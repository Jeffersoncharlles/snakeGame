let canvas = document.getElementById("snake");
let context = cavas.getContext("2d");
let box = 32;

let snake = [];
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";


let food = {
    
}


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16 *box, 16* box);
    //fillreact vai desnhar o rentagolo do jogo 
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
        //o tamanho do x e y e o tamanho da variavel box e o tamanho de box tamanho do quadrado
    }
}


function drawFood(){
    context.fillStyle = "red";
    context.fillRect()
}


document.addEventListener('keydown', update);
function update(event){
    if (event.keyCode == 37 && direction != "right") direction = "left"; //codigo 37 do teclado e a direcao nao pode ser a oposta
    if (event.keyCode == 38 && direction != "down") direction = "up"; //
    if (event.keyCode == 39 && direction != "left") direction = "right"; //
    if (event.keyCode == 40 && direction != "up") direction = "down"; //
    //ao apertar a tecla o eventlist chama o update que declara oque fazer
}

function iniciarJogo(){

    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;//se o snake da posicao 0 for maior que 15 ela vai receber valor de 0 e resetar
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    

    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100):

