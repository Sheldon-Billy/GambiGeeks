import Home from "./Components/Home";
import TrustedClients from "./Components/TrustedClients";
import { useState } from "react";
import LoadingScreen from "./Components/LoadingScreen";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Home />
        <TrustedClients />
      </div>
    </div>
  );
}

export default App;
