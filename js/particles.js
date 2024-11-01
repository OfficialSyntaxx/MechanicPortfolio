const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1; // Random size
    this.speedX = Math.random() * 3 - 1.5; // Random speed
    this.speedY = Math.random() * 3 - 1.5; // Random speed
}

Particle.prototype.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
};

Particle.prototype.draw = function() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)'; // White color with transparency
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

function init() {
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();
