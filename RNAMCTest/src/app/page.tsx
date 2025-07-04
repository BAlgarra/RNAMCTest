'use client';
// This file is the main entry point for the RNAMotifContrast application.

// import BabylonCanvas from "./components/BabylonCanvas";
// import { BasicScene } from "./components/BabylonExamples/BasicScene";
import RNARenderer from "./components/RnaCanvas";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="w-full py-8 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-center text-gray-900">RNAMotifContrast</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600">
          <p>Welcome to RNAMotifContrast</p>
        </div>
      </main>
      <div className="flex justify-center items-center h-screen">
      {/* <BabylonCanvas/> */}
      <RNARenderer/>
      </div>
    </div>
  )
}
