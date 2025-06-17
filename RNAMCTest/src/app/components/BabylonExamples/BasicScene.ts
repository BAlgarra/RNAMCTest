import {Scene, Engine} from "@babylonjs/core";

export class BasicScene {

    scene: BABYLON.Scene;
    engine: BABYLON.Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();

        this.engine.runRenderLoop(() =>{
            this.scene.render();
        })
    }


    CreateScene(): BABYLON.Scene {
        const scene = new Scene(this.engine);

        return scene;
    }

}
