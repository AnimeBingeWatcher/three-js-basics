// Import CSS and Three.js library
import './style.css'
import * as THREE from 'three';

// Create a new 3D scene
const scene = new THREE.Scene();

// Create a perspective camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Initialize a WebGL renderer and attach it to the 'bg' canvas element
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

// Set the renderer's pixel ratio and size to match the window
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

// Set the camera's initial position
camera.position.setZ(30);

// Render the initial scene
renderer.render(scene, camera);

// Create a sphere (or torus) geometry
const geometry = new THREE.SphereGeometry(10, 32, 32);

// Create a material for the sphere
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });

// Create a mesh (the 3D object) with the geometry and material
const torus = new THREE.Mesh(geometry, material);

// Add the torus to the scene
scene.add(torus);

// Create a point light and position it
const pointLight = new THREE.PointLight(0xffffff, 100, 1000);
pointLight.position.set(5, 5, 20);

// Create an ambient light
const ambientLight = new THREE.AmbientLight(0xffffff);

// Add lights to the scene
scene.add(pointLight, ambientLight);

// Create a light helper for visualization
const lightHelper = new THREE.PointLightHelper(pointLight);

// Create a grid helper for visualization
const gridHelper = new THREE.GridHelper(100, 10);

// Add the light helper to the scene
scene.add(lightHelper);

// Animation function
function animate() {
    // Request the next animation frame
    requestAnimationFrame(animate);

    // Rotate the torus for animation
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    // Render the scene with the updated camera and objects
    renderer.render(scene, camera);
}

// Start the animation loop
animate();
