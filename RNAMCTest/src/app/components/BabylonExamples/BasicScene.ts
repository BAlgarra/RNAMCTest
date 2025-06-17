import { FreeCamera, HemisphericLight, MeshBuilder, Vector3, Scene, Engine, Mesh, VertexData } from "@babylonjs/core";
// import motifData from 'public\json\1Y26.json'
export class BasicScene {

    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();

        this.engine.runRenderLoop(() =>{
            this.scene.render();
        })
    }


    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        const camera = new FreeCamera("camera", new Vector3(0,1,-5), scene);
        camera.attachControl(this.canvas, true);

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), scene);
        hemiLight.intensity = 0.6;

        const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

        const ball = MeshBuilder.CreateSphere("ball", {diameter: 1}, scene);
        ball.position = new Vector3(0,1,0);

        // const motifData = JSON.parse('1Y26.json');
        // const response = await fetch('/json/1Y26.json');
        // const motifData = await response.json();
    //      const key = Object.keys(motifData)[0];
    //      const [positions, indices] = motifData[key];

    //       const vertexData = new VertexData();
    //      vertexData.positions = positions;
    //      vertexData.indices = indices;

    //      const mesh = new Mesh('motifMesh', scene);
    //      vertexData.applyToMesh(mesh);

        return scene;
    }

}
