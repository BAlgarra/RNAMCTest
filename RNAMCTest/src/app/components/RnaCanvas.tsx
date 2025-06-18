import React, { useEffect, useState } from 'react';
import { Canvas, getMotif, Motif, MotifProps } from '@judah-silva/rnacanvas';

export default function RNARenderer() {
  const [motifProps, setMotifProps] = useState<MotifProps[] | null>(null);

  useEffect(() => {
    const loadMotif = async () => {
      try {
        const motif: Motif = await getMotif('/json/1Y26.json', '#FF0000');
        const props: MotifProps = {
          motif,
          locked: false,
        //   position: { x: 0, y: 0, z: 0 }, // optional
        //   rotation: { x: 0, y: 0, z: 0, w: 1 }, // optional
        };
        setMotifProps([props]);
      } catch (error) {
        console.error('Failed to load motif:', error);
      }
    };

    loadMotif();
  }, []);

  return (
    <>
      {motifProps && (
        <Canvas
          title="RNA Viewer"
          rendererWidth={800}
          rendererHeight={600}
          rendererBackgroundColor="#111111"
          cameraPositionZ={50}
          motifProps={motifProps}
        />
      )}
    </>
  );
}
