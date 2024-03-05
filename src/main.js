//Esto se hace para modularizar la aplicacion. 
//Dentro de WORLD tenemos el componente hecho en three js y vamos a poder importarlo en cualquier proyecto 
import { World } from './world/World.js';

function main() {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');
  // 1. Create an instance of the World app
  const world = new World(container);
  // 2. Render the scene
  world.render();
}

// call main to start the app
main();