import React from 'react';
import './App.css';
import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import theme from "./theme/theme";
import config from "./config/config";

function App() {
  return (
    <div className="App">
      <WormholeConnect config={config} theme={theme} />
    </div>
  );
}

export default App;
