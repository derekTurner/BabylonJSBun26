import {
  Scene,
  Mesh,
  HemisphericLight,
  ArcRotateCamera,
} from "@babylonjs/core";

import {
  AdvancedDynamicTexture,
  Button
} from "@babylonjs/gui"


export interface SceneData {
      scene: Scene;
      light?: HemisphericLight;
      ground?: Mesh;
      camera?: ArcRotateCamera;
}

export interface GuiData {
      scene: Scene;
      advancedTexture: AdvancedDynamicTexture;
      button1:Button;
      button2:Button;
      button3:Button;
      button4:Button;
      camera: ArcRotateCamera;
}