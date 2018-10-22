import * as THREE from 'three';

export const createRenderer = () => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setClearColor('#ddd');
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
};
