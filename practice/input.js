const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let vx = 15;
let vy = 15;
let gravity = 1;
function animate(){
    //first clear the screen
    ctx.clearRect(0,0,800,800);

    //decide where the rectangle goes


    //draw the rectancgle
    ctx.fillRect(x,y,50,50);
    requestAnimationFrame(animate);
}


animate();

//event handler
function handleKeyDown(e){
    e.preventDefault();
    if (e.key == "ArrowDown"){
        y = y + vy;
    }
    if (e.key == "ArrowUp"){
        y = y - vy;
    }
    if (e.key == "ArrowLeft"){
        x = x - vx;
    }
    if (e.key == "ArrowRight"){
        x = x + vx;
    }
}

//event listener
document.addEventListener('keydown',handleKeyDown);




