const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const galaxyImg = new Image()
galaxyImg.src = "/images/sky.jpg"

const shipImg = new Image()
shipImg.src = "/images/uss-enterprise-png-view-original.png"


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let galaxy = {
    x:0,
    y:0,
    w:canvas.width,
    h:canvas.height
}

let obstacle = {
    x: Math.floor(Math.random() * canvas.width),
    y: 0,
    w: 50,
    h: 5,
  }

  function drawObstacle() {
    ctx.fillStyle = "red"
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.w, obstacle.h);
  }
  
  

galaxyImg.onload = function () {
 ctx.drawImage(galaxyImg, galaxy.x, galaxy.y, galaxy.w, galaxy.h )
}

class Ship {
    constructor(x,y,w,h){
        this.x =x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.bullets =[]
    }
    shootBullets = () => {
        console.log('shoot')
    let bullet = {
            x:this.x+(this.w/2),
            y:this.y, w:2, h:15
        }
        this.bullets.push(bullet)
    }
}

/* class Bullet {

}
 */
let ship = new Ship(0,400,shipImg.width-500,shipImg.height-190)

shipImg.onload = function (){
    ctx.drawImage(shipImg, ship.x, ship.y, ship.w, ship.h)
}


function drawBullets (){
    for (let bullet of ship.bullets){
        bullet.x += 10
        ctx.fillStyle = 'red'
        ctx.fillRect(bullet.x,bullet.y,bullet.w, bullet.h)
    }
}

window.onkeydown = function (e) {
    if (e.key === "ArrowUp") {
     ship.y -= 10;
    } else if (e.key === "ArrowDown") {
      ship.y += 10;
    } else if (e.key === " ") 
    { console.log("pew pew")
        ship.shootBullets()
    }
  
  }

  function animate() {
    animationId = requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(galaxyImg, galaxy.x, galaxy.y, galaxy.w, galaxy.h)
    ctx.drawImage(shipImg, ship.x, ship.y, ship.w, ship.h)
    drawBullets()   
     drawObstacle()
    obstacle.y += 1
}


  animate()