import { createGround } from './components/ground';
import { createGrid } from './components/grid';
import { createRenderer } from './components/renderer';
import * as THREE from 'three';
import './reset.css';
import { createCamera } from './components/camera';
import { createHemiLight, createDirLight } from './components/light';

// Create an empty scene
const scene = new THREE.Scene();

//create cam
const { camera, cameraGroup } = createCamera();
scene.add(cameraGroup);

scene.add(createGround());
scene.add(createDirLight());
scene.add(createHemiLight());

const grid = createGrid(-15, 0, -15);
scene.add(grid);

const renderer = createRenderer();
document.body.appendChild(renderer.domElement);

// Render Loop
const render = function() {
  requestAnimationFrame(render);

  grid.rotation.x += 0.01;
  grid.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
