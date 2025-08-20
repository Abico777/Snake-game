let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let scale = 20;
let row = canvas.height / scale;
let column = canvas.width / scale;

let snake = [
    {
        x: Math.floor(Math.random() * column) * scale,
        y: Math.floor(Math.random() * row) * scale,
    },
]; 
let food = [
    {
        x: Math.floor(Math.random() * column) * scale,
        y: Math.floor(Math.random() * row) * scale
    },
]; 

let drx = "right";
document.onkeydown = direction;

function direction(event) {
  let key = event.key; // Use event.key for better readability and reliability

  // Check for the specific key and prevent reversing direction
    if (key === "ArrowLeft" && drx !== "right") {
        drx = "left";
    } else if (key === "ArrowUp" && drx !== "down") {
        drx = "up";
    } else if (key === "ArrowRight" && drx !== "left") {
        drx = "right";
    } else if (key === "ArrowDown" && drx !== "up") {
        drx = "down";
    }
}

let playGame = setInterval(draw, 100)

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for( let i = 0; i < snake.length; i++){
        ctx.fillStyle = "#fff";
        ctx.strokeStyle = "red";
        ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
        ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }


    ctx.fillStyle = "#0edb64ff";
    ctx.strokeStyle = "green";
    ctx.fillRect(food[0].x, food[0].y, scale, scale);
    ctx.strokeRect(food[0].x, food[0].y, scale, scale);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(drx == "left") snakeX -= scale;
    if(drx == "up") snakeY -= scale;
    if(drx == "right") snakeX += scale;
    if(drx == "down") snakeY += scale;


    if (snakeX > canvas.width) {
        snakeX = 0;
    }
    if (snakeY > canvas.height) {
        snakeY = 0;
    }
    if (snakeX < 0) {
        snakeX = canvas.width;
    }
    if (snakeY < 0) {
        snakeY = canvas.height;
    }

if (snakeX == food[0].x && snakeY == food[0].y){
    food[0] = {
      x: Math.floor(Math.random() * column) * scale,
      y: Math.floor(Math.random() * row) * scale
    };
}else {
    snake.pop();
    
}
    let newhead = {
        x: snakeX, 
        y: snakeY
    }
    snake.unshift(newhead);
}