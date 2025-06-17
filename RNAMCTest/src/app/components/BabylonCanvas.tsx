'use client';
// This file is a React component that uses Babylon.js to render a 3D scene.

import React, {useEffect, useRef} from "react";
import * as BABYLON from "babylonjs";
import {BasicScene} from "./BabylonExamples/BasicScene";
import Script from "next/script";


export default function BabylonCanvas() {


const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
      // Set width and height
      canvas.width = window.innerWidth * 0.7;
      canvas.height = window.innerHeight * 0.7;
      // Initialize the Babylon.js scene after setting dimensions
      if (!canvas.getContext('webgl')) {
      console.error('WebGL context not available');
      return;
    }

    try {
      new BasicScene(canvas);
    } catch (err) {
      console.error('Error initializing BasicScene:', err);
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

