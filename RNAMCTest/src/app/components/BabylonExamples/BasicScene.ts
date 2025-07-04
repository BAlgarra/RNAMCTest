import { FreeCamera, HemisphericLight, MeshBuilder, Vector3, Scene, Engine, Mesh, VertexData } from "@babylonjs/core";
// import motifData from 'public\json\1Y26.json'
// import { getMotif, Motif, MotifProps, Quat, Vec3 } from '@judah-silva/rnacanvas'


 export type MotifMesh =Record<string, any>
//  export type MotifMesh =Record<string, any>
export class BasicScene {

    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        // this.scene = this.CreateScene();
        this.init();
    }

    private async init() {
  this.scene = await this.CreateScene();
  this.engine.runRenderLoop(() => {
    this.scene.render();
  });
}

// Check if async is necessary
    async CreateScene(): Promise<Scene> {
        const scene = new Scene(this.engine);
        const camera = new FreeCamera("camera", new Vector3(0,1,-5), scene);
        camera.attachControl(this.canvas, true);

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0,1,0), scene);
        hemiLight.intensity = 0.6;

        const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, scene);

        const ball = MeshBuilder.CreateSphere("ball", {diameter: 1}, scene);
        ball.position = new Vector3(0,1,0);

        // MotifMesh mm = fetch('/1Y26.json');
    //     const mm: MotifMesh = await fetch('/2OZB.json').then(res => res.json());

    //     const motif1: Motif = await getMotif(
    //         '2OZB.json',
    //          mm,
    //          '#FF0000', // color
    //    );
    //    console.log(motif1);

    //    export type MotifMesh =Record<string, any>

        // const motif1 = new Motif({
        //     id: '1Y26',
        //     mesh: mm,
        //     color: '#FF0000',
        //     position: new Vec3(0, 1, 0),
        //     rotation: new Quat(0, 0, 0, 1),
        // });

        // console.log(motif1);
        // scene.addMesh(motif1.mesh);
        // motif1.mesh.position = new Vector3(0, 1, 0);
      
    //    scene.addMesh(motif1);
    //    motif1.mesh.position = new Vector3(0, 1, 0);

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
