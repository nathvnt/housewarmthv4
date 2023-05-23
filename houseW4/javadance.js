let canvas1 = document.getElementById("can1");
let ctx1 = canvas1.getContext('2d');
ctx1.canvas.width = window.innerWidth;
ctx1.canvas.height = window.innerHeight;

let particlesArray;

let mouse =  {
    x: null,
    y: null,
    radius: (canvas1.height/110) * (canvas1.width/110),
}

window.addEventListener('mousemove',
    function(event){ 
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

class Particle {
    constructor(x, y, directX, directY, size, color) {
        this.x = x;
        this.y = y;
        this.directX = directX;
        this.directY = directY;
        this.size = size;
        this.color = color;
    }
    
    draw() {
        ctx1.beginPath();
        ctx1.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx1.fillstyle = '#ffffff';
        ctx1.fill();
    }
    update() {
        if (this.x > canvas1.width || this.x < 0) {
            this.directX = -this.directX;
        }
        if (this.y > canvas1.height || this.y < 0) {
            this.directY = -this.directY;
        }
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if(mouse.x < this.x && this.x < canvas1.width - this.size * 10){
                this.x += 10;
            }
            if(mouse.x > this.x && this.x > this.size * 10){
                this.x -=10;
            }
            if(mouse.y < this.y && this.y < canvas1.height - this.size * 10){
                this.y +=10;
            }
            if(mouse.y > this.y && this.y > this.size * 10){
                this.y -= 10;
            }
        }
        this.x += this.directX;
        this.y += this.directY;
        this.draw()
    }
}

function init() {
    particlesArray = [];
    let particleNum = (canvas1.height * canvas1.width) / 18000;
    for (let i = 0; i < particleNum*2; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directX = (Math.random() * 4) - 2;
        let directY = (Math.random() * 4) - 2;
        let color = '#ffffff';

        particlesArray.push(new Particle(x, y, directX, directY, size, color));
    }
}

function connect(){
    if(!darkthemeis){
    let opacVal = 1;
    for(let a = 0; a < particlesArray.length; a++) {
        for(let b = a; b < particlesArray.length; b++) {
            let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            if (distance < (canvas1.width/7) * (canvas1.height/7)) {
                opacVal = 1 - (distance/20000);
                    ctx1.strokeStyle = 'rgba(0, 0, 0,' + opacVal + ')';
                    ctx1.lineWidth = 1.5;
                    ctx1.beginPath();
                    ctx1.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx1.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx1.stroke();
                }
            }
        }
    } else {
        let opacVal = 1;
        for(let a = 0; a < particlesArray.length; a++) {
            for(let b = a; b < particlesArray.length; b++) {
                let distance = (( particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas1.width/7) * (canvas1.height/7)) {
                    opacVal = 1 - (distance/20000);
                        ctx1.strokeStyle = 'rgba(32, 178, 170,' + opacVal + ')';
                        ctx1.lineWidth = 1.5;
                        ctx1.beginPath();
                        ctx1.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx1.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx1.stroke();
                    }
                }
            }

    }
    
}

let fps2, fpsInterval2, startTime2, now2, then2, elapsed2;

function startParticles(fps2){
    fpsInterval2 = 1000/fps2;
    then2 = Date.now();
    startTime2 = then2;
    animateParticles();
}

function animateParticles(){
    requestAnimationFrame(animateParticles);
    now2 = Date.now();
    elapsed2 = now2 - then2;
    if(elapsed2 > fpsInterval2){
        then2 = now2 - (elapsed2 % fpsInterval2);
        ctx1.clearRect(0, 0, innerWidth,innerHeight);

        for (let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update();
        }
        connect();
    }
}

window.addEventListener('resize',
    function(){
        canvas1.width = this.innerWidth;
        canvas1.height = this.innerHeight;
        mouse.radius = ((canvas1.height/120) * (canvas1.height/120));
        init();
    }
);

window.addEventListener('mouseout', 
    function(){
        mouse.x = undefined;
        mouse.x = undefined;
    }
)

init();
startParticles(30);
