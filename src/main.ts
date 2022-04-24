import {
	PerspectiveCamera,
	WebGLRenderer,
	Scene,
	BoxGeometry,
	Mesh,
	MeshBasicMaterial,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { debugPane, fpsGraph } from './lib/debug-pane';

export const scene = new Scene();

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

export const camera = new PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.z = 2;

debugPane.addInput(camera.position, 'z', {
	min: 0,
	max: 10,
});

new OrbitControls(camera, renderer.domElement);

const geometry = new BoxGeometry();
const material = new MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true,
});

export const cube = new Mesh(geometry, material);
scene.add(cube);

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	render();
}

window.addEventListener('resize', onWindowResize, false);

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	render();
}

function render() {
	fpsGraph.begin();
	renderer.render(scene, camera);
	fpsGraph.end();
}

animate();
