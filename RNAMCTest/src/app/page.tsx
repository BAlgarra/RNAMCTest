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
        <div className=" justify-center">
          {/* <button className="bg-blue-500 text-white px-0 py-1 rounded hover:bg-blue-600"> */}
          {/* <input type="file" className="mt-1 mb-1 text-center" /> */}
          {/* </button> */}
          <input className="block w-64 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files" type="file" aria-describedby="file_input_help" multiple>
          </input>

        </div>
        <div>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">.txt (MAX. 10MB).</p>
        </div>
      </main>
      <div className="flex justify-center items-center h-screen">
        {/* <BabylonCanvas/> */}
        <RNARenderer />
      </div>
    </div>
  )
}
