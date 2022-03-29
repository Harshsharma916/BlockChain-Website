import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { AlphaFormat } from "three";

const textureLoader = new THREE.TextureLoader();

const normalTexture = textureLoader.load("/NormalMap.png");

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects

const geometry = new THREE.BoxGeometry(2, 2, 2);
var cubeMaterials = [ 
    new THREE.MeshBasicMaterial({color:0x8126fb, transparent:true, opacity:0.8, side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:0x8126fb, transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
    new THREE.MeshBasicMaterial({color:0xdc27fc, transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
    new THREE.MeshStandardMaterial({transparent:true, opacity:0.9,side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:0xdc50fc, transparent:true, opacity:0.8, side: THREE.DoubleSide}),
    new THREE.MeshBasicMaterial({color:0x8126fb, transparent:true, opacity:0.8, side: THREE.DoubleSide}), 
]; 

cubeMaterials.roughness = 1;
cubeMaterials.metalness = 1;
cubeMaterials.normalMap = normalTexture;
const cube = new THREE.Mesh(geometry, cubeMaterials);

cube.position.z = -7;
cube.rotation.x = 4;
scene.add(cube);


// Lights

const pointLight1 = new THREE.PointLight(0x8125fb);
pointLight1.position.x = 3
pointLight1.position.y = 1
pointLight1.position.z = 7
pointLight1.intensity = 10
scene.add(pointLight1)

const pointLight2 = new THREE.PointLight(0xdc27fc);
pointLight2.position.x = 0
pointLight2.position.y = -3
pointLight2.position.z = 0
pointLight2.intensity = -10 
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0xdc27fc);
pointLight3.position.x = -7
pointLight3.position.y = 3
pointLight3.position.z = -8
pointLight3.intensity = -7
scene.add(pointLight3)


const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 0
camera.position.y = 0
// camera.position.z = 2
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



/**
 * Animate
 */

window.addEventListener('scroll',onScroll)

function onScroll(event){
  let minVal = 0;
  let maxVal = 400;
  let diff = maxVal - minVal
  let scrollVal = window.scrollY/diff;
  cube.position.z = -7 + scrollVal ;
  pointLight1.position.z = 7 + scrollVal;
  pointLight2.position.z = scrollVal;
  console.log(window.scrollY);
}

const clock = new THREE.Clock();
 
const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update objects
  cube.rotation.y = 0.9 * elapsedTime;

  // Update Orbital Controls
  // controls.update()

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

