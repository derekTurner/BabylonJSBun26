import { Engine } from "@babylonjs/core";
import createStartScene from './createStartScene';
import createRunScene from "./createRunScene";
import { gui } from "./gui";
import { setupCollisions } from "./collisions";
import { createCharacterController } from "./createCharacterController"

export function start(engine: Engine) {
return createStartScene(engine).then((startScene) => {
setupCollisions(startScene);
createCharacterController(startScene)
gui(startScene);
createRunScene(startScene);
return startScene;
});
}