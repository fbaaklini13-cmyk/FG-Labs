
// Mobile menu
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:.12});
revealEls.forEach(el=>io.observe(el));

// Simple parallax canvas grid in hero
const canvas = document.getElementById('heroGrid');
if (canvas){
  const ctx = canvas.getContext('2d');
  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = Math.max(400, window.innerHeight*0.6);
  }
  function draw(t=0){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const gap = 40;
    for(let x=0;x<canvas.width;x+=gap){
      for(let y=0;y<canvas.height;y+=gap){
        const n = Math.sin((x+y+t*0.001))*0.5+0.5;
        ctx.fillStyle = `rgba(204,90,52,${0.06 + n*0.08})`;
        ctx.fillRect(x+1,y+1,2,2);
      }
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', resize);
  resize(); draw();
}

// Fake form submit demo
function fakeSubmit(e){
  e.preventDefault();
  const status = e.target.querySelector('#formStatus');
  if (status){
    status.textContent = 'Thanks! We will contact you shortly.';
    setTimeout(()=> status.textContent = '', 4000);
  }
  // TODO: replace action with Web3Forms/Formspree or a serverless function
  return false;
}

// Highlight active nav link
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('.menu a');
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
})();
