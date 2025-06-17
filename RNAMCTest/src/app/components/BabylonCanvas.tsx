'use client';
// This file is a React component that uses Babylon.js to render a 3D scene.

import React, {useEffect, useRef} from "react";
import * as BABYLON from "babylonjs";
import {BasicScene} from "./BabylonExamples/BasicScene";
import Script from "next/script";


export default function BabylonCanvas() {
//   return (
//     <div> 
//       mounted(){
//         const canvas = document.querySelector("canvas");
//         new BasicScene(canvas);
//       }
//         <canvas></canvas>
//     </div>
//   )
// }

const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      // Set width and height
      canvas.width = 800;
      canvas.height = 600;
      // Initialize the Babylon.js scene after setting dimensions
      new BasicScene(canvas);
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

