import { Engine } from "@babylonjs/core";
import {createStartScene} from './createStartScene';
import {createRunScene } from "./createRunScene";
import { gui } from "./gui";
import { setupCollisions } from "./collisions";

export function start(engine: Engine) {
let startScene = createStartScene(engine);
setupCollisions(startScene);
gui(startScene);
createRunScene(startScene);
}