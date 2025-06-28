import React, { useEffect, useState } from 'react';
import { Canvas, getMotif, Motif, MotifProps } from '@judah-silva/rnacanvas';


export type MotifMesh =Record<string, any>

export default function RNARenderer() {
  const [motifProps, setMotifProps] = useState<MotifProps[] | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadMotif = async () => {
      try {
         const mm: MotifMesh = await fetch('/2OZB.json').then(res => res.json());
         const motif1: Motif = await getMotif(
            '/2OZB.json',
             mm,
             'FF0000', // color can't have #
           );
          console.log('Motif1:', motif1);
      

         const mm2: MotifMesh = await fetch('/2OZB.json').then(res => res.json());
         const motif2: Motif = await getMotif(
          '/2OZB2.json',
           mm2,
           '0000FF', // color
         );


      const props: MotifProps[] = [
        { motif: motif1, locked: false
          // position: { x: 0, y: 0, z: 0 }, // optional
          // rotation: { x: 0, y: 0, z: 0, w: 1 }, // optional
        },
        { motif: motif2, locked: false }
      ];
      setMotifProps(props);
      } catch (error) {
        console.error('Failed to load motif:', error);
      }
    };
  
    loadMotif().then(() => {
      setIsLoaded(true);
    }
    );
  }, []);

  return (
    <>
      {motifProps && motifProps.length > 0 && isLoaded &&(
        <Canvas
          title="RNA Viewer"
          rendererWidth={800}
          rendererHeight={600}
          rendererBackgroundColor="FFFFFF"
          cameraPositionZ={100}
          motifProps={motifProps}
        />
      )}
    </>
  );
}
