
import PictureZooming from "./Components/PictureZooming"
import TrustedClients from "./Components/TrustedClients"
import { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>

      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <PictureZooming />
        <TrustedClients />

      </div>

    </div>
  )
}

export default App
