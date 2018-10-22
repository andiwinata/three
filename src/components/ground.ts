import * as THREE from 'three';

export const createGround = () => {
  var groundGeo = new THREE.PlaneBufferGeometry(100, 100);
  var groundMat = new THREE.MeshPhongMaterial({ color: 0xffffff, specular: 0x050505 });
  groundMat.color.set('#48f442');

  var ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -10;

  return ground;
};
