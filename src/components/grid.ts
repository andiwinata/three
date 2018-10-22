import * as THREE from 'three';

export const createGrid = (x: number, y: number, z: number) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  // @ts-ignore
  const material = new THREE.MeshToonMaterial({
    color: '#433F81',
    specular: '#fff',
  });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(x, y, z);

  return cube;
};
