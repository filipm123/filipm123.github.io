import * as THREE from 'three';

const sphereContainer = document.querySelector(".sphere")
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 400 / 300, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 300)
renderer.setClearColor(0xffffff, 0)
sphereContainer.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(3, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2);
const texture = new THREE.TextureLoader().load(' texture.jpg ')
const material = new THREE.MeshBasicMaterial({
    map: texture
});
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 8;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01;
    sphere.rotation.x += 0.01;
    renderer.render(scene, camera);
}
animate();



////////////////////////////////////////////////////////////////////////////////////////




const showSocialsBtn = document.querySelector('.showSocials')
const hideSocialsBtn = document.querySelector('.hideSocials')
const socials = document.querySelector('.socialsContainer')
const scrollBtn = document.querySelector('.scroll');
const navScroll = document.querySelectorAll('.navScroll')
const navBar = document.querySelector('.navBar')
const mediaQuery = window.matchMedia("(max-width:980px)")




hideSocialsBtn.addEventListener('click', () => {
    socials.style.animation = "fade-out 750ms forwards"

        setTimeout(() => {
            socials.style.display = 'none'
        }, 500)
    hideSocialsBtn.style.display = 'none';
    showSocialsBtn.style.display = 'inline-block'
})

showSocialsBtn.addEventListener('click', () => {

    
        socials.style.display = 'inline';
        socials.style.animation = "fade-in 500ms forwards";
        showSocialsBtn.style.display='none';
        hideSocialsBtn.style.display='inline-block'
    
})










scrollBtn.addEventListener('click', () => {

    const skillsElement = document.querySelector('.skillContainer')
    skillsElement.scrollIntoView();

})

navScroll.forEach((item) => {
    item.addEventListener("click", () => {
        if (item.innerText === "Skills") {
            const skillsElement = document.querySelector('.skillContainer')
            skillsElement.scrollIntoView();

        } else if (item.innerText === "Projects") {
            const projectsElement = document.querySelector('.projects')
            projectsElement.scrollIntoView();

        } else if (item.innerText === 'Contact') {
            const contactElement = document.querySelector('.contact')
            contactElement.scrollIntoView();
        } else {
            return false;
        }

    })
})

const scrollToTopBtn = document.querySelector('.scrollToTopContainer');

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})

window.addEventListener("scroll", () => {
    scrollToTopBtn.style.display = window.scrollY > 50 ? 'block' : 'none';
})