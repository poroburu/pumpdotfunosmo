import './App.css';
import WormholeConnect from "@wormhole-foundation/wormhole-connect";
import theme from "./theme/theme";
import config from "./config/config";
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" Component={Home} />
      </Routes >
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="App">
      <WormholeConnect config={config} theme={theme} />
    </div>
  );
}

export default App;
