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