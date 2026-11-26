import { Engine } from "@babylonjs/core";
import {createStartScene} from './createStartScene';
import {createRunScene } from "./createRunScene";

export function start(engine: Engine) {
let startScene = createStartScene(engine);
createRunScene(startScene);
return startScene;
}