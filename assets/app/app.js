const logos = [
    { el: document.getElementById('logoHtml'), offset: 0 },
    { el: document.getElementById('logoCss'), offset: 72 },
    { el: document.getElementById('logoTailwind'), offset: 144 },
    { el: document.getElementById('logoJs'), offset: 216 },
    { el: document.getElementById('logoReact'), offset: 288 },
];

const container = document.querySelector('.relative.w-\\[400px\\].h-\\[400px\\]');
let angle = 0;

function animate() {
angle = (angle + 0.2) % 360;
const rect = container.getBoundingClientRect();
const centerX = rect.width / 2;
const centerY = rect.height / 2;
const radius = rect.width * 0.4;

logos.forEach(({ el, offset }) => {
    const currentAngle = (angle + offset) % 360;
    const x = centerX + radius * Math.cos(currentAngle * Math.PI / 180) - (el.clientWidth / 2);
    const y = centerY + radius * Math.sin(currentAngle * Math.PI / 180) - (el.clientHeight / 2);

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.zIndex = currentAngle >= 0 && currentAngle <= 180 ? 15 : 5;
});

requestAnimationFrame(animate);
}

animate();