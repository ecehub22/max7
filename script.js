/* Scroll Reveal */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

/* Background particles (gentle) */
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let w, h, particles=[];

function resize() {
  w=canvas.width = innerWidth;
  h=canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

class P {
  constructor(){
    this.x=Math.random()*w;
    this.y=Math.random()*h;
    this.vx=Math.random()*0.4-0.2;
    this.vy=Math.random()*0.4-0.2;
  }
  update(){
    this.x+=this.vx; this.y+=this.vy;
    if(this.x<0||this.x>w) this.vx *= -1;
    if(this.y<0||this.y>h) this.vy *= -1;
  }
}

for(let i=0;i<90;i++) particles.push(new P());

function animate() {
  ctx.clearRect(0,0,w,h);
  particles.forEach(a => {
    a.update();
    particles.forEach(b => {
      const d = Math.hypot(a.x-b.x, a.y-b.y);
      if(d < 130) {
        ctx.strokeStyle = "rgba(34,211,238,0.06)";
        ctx.beginPath();
        ctx.moveTo(a.x,a.y);
        ctx.lineTo(b.x,b.y);
        ctx.stroke();
      }
    })
  });
  requestAnimationFrame(animate);
}
animate();