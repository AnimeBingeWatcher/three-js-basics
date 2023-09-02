// Libraries 
import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// the scene/ camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// the renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
// the controls
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);
// The object to be rendered
const geometry = new THREE.SphereGeometry( 10, 32, 32 );
const material = new THREE.MeshStandardMaterial( { color: 0xff6347 } );
const torus = new THREE.Mesh( geometry, material ); 

scene.add( torus );

//Lights

const pointLight = new THREE.PointLight(0xffffff, 100, 1000);
pointLight.position.set(5,5,20)

const ambientLight = new THREE.AmbientLight( 0xffffff );
scene.add( pointLight, ambientLight   );

const lightHelper = new THREE.PointLightHelper( pointLight, 1 );
const gridhelper = new THREE.GridHelper(200, 50);
scene.add( lightHelper, gridhelper );

//Animation

function animate() {
    requestAnimationFrame( animate );
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;
    renderer.render(scene, camera);
}

animate();