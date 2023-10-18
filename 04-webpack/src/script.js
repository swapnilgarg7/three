import './style.css'
import * as THREE from 'three';

const pi = Math.PI;

//scene
const scene = new THREE.Scene();

//axes helper
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

//sizes
const sizes = {
    width: 800,
    height: 600
}

//red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube1 = new THREE.Mesh(geometry, material);
// cube1.position.y = 1;
cube1.position.set(0, 1, 0);
cube1.scale.set(2, 0.5, 0.5);
cube1.rotation.reorder('YXZ');
cube1.rotation.y = 1;
cube1.rotation.x = 0.5;
//console.log(mesh.position.length());

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
const group = new THREE.Group();
group.add(cube1);
group.add(cube2);
scene.add(group);

group.position.y = 0.5;
group.scale.x = 0.5;


//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// camera.lookAt(mesh.position);

//console.log(camera.position.length());

//renderer
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

//render
renderer.render(scene, camera);


