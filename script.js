// Cursor Customizado de Elite
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Adicione este CSS para o cursor:
/*
.custom-cursor {
    width: 20px; height: 20px;
    background: var(--blue-main);
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    mix-blend-mode: difference;
    z-index: 9999;
    transition: transform 0.1s;
}
*/

// Inicializar Partículas com cores da Logos
particlesJS('particles-js', {
  "particles": {
    "number": { "value": 80 },
    "color": { "value": "#1E4D8C" },
    "line_linked": { "enable": true, "distance": 150, "color": "#1E4D8C", "opacity": 0.2, "width": 1 },
    "move": { "speed": 2 }
  }
});