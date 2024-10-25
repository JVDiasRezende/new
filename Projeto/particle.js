// Initialize particles.js
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 251, "density": { "enable": true, "value_area": 710.2328774690454 } },
        "color": { "value": "#000000" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 1, "color": "#000000" },
            "polygon": { "nb_sides": 3 },
            "image": { "src": "", "width": 100, "height": 100 }
        },
        "opacity": { "value": 1, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } },
        "size": { "value": 11.83721462448409, "random": true, "anim": { "enable": false, "speed": 300, "size_min": 71.92807192807193, "sync": false } },
        "line_linked": { "enable": true, "distance": 110.48066982851817, "color": "#000000", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": false, "mode": "bubble" },
            "onclick": { "enable": false, "mode": "repulse" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
            "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 },
            "repulse": { "distance": 400, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": false
});

// Stats.js initialization
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
