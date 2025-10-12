const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

  // Resize canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  // Star constructor
  class Star {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.alpha = Math.random() * 0.5 + 0.5;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Wrap around edges
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  // Create stars
  const numStars = 300;
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(new Star());
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
      star.update();
      star.draw();
    }
    requestAnimationFrame(animate);
  }

  animate();