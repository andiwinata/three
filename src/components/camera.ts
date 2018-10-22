import * as THREE from 'three';
import { CreateFn } from '../types';

export const createCamera = () => {
  const cameraGroup = new THREE.Group();

  // Create a basic perspective camera
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.rotateOnAxis(new THREE.Vector3(1, 0, 0), THREE.Math.degToRad(-20));
  cameraGroup.add(camera);
  cameraGroup.position.y = 4; 
  cameraGroup.rotateOnAxis(new THREE.Vector3(0, 1, 0), THREE.Math.degToRad(45));

  return {
    camera,
    cameraGroup,
  };
}
