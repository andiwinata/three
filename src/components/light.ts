import * as THREE from 'three';

export const createHemiLight = () => {
  const hemiLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
  hemiLight.color.setHSL(0.6, 1, 0.6);
  hemiLight.groundColor.setHSL(0.095, 1, 0.75);
  hemiLight.position.set(0, 50, 0);
  return hemiLight;
};

export const createDirLight = () => {
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.color.setHSL(0.1, 1, 0.95);
  dirLight.position.set(-1, 1.75, 1);
  dirLight.position.multiplyScalar(30);
  return dirLight;
};
