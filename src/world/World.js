
import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

// These variables are module-scoped: we cannot access them
// from outside the module 
// (igual deberia chekear si js no tiene atributos privados ya)
let camera;
let renderer;
let scene;

class World {
    // 1. Create an instance of the World app
    constructor(container) {
        
        this.camera = createCamera();
        this.scene = createScene();
        this.renderer = createRenderer();

        container.append(this.renderer.domElement)

        const cube = createCube();
    
        this.scene.add(cube);

        const resizer = new Resizer(container, this.camera, this.renderer);
    }

    // 2. Render the scene 
    render() {
       this.renderer.render(this.scene, this.camera);
    }
}

export { World };