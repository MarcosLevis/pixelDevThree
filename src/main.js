import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

//creamos la escena
const scene = new THREE.Scene();

const light = new THREE.AmbientLight( 0x404040 ); // soft white light

//la camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

//el render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//cubo
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x99AD2D } );
const cube = new THREE.Mesh( geometry, material);

scene.add( cube, light);

camera.position.z = 5;

//Loop de animacion (obviamente s epueden llamar funciones desde aca)
function animate() {
	requestAnimationFrame( animate );
	
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}


// SE RECOMIENDO COMPROBAR QUE SOPORTE WEBGL 

if ( WebGL.isWebGLAvailable() ) {
	// Initiate function or other initializations here
	animate();
} else {
	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}

