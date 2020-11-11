import Routes from './routes';

import "./styles.css";

import Header from "./components/Header";
import CapsLock from "./components/CapsLock";
import Contador from "./components/Contador";

//<CapsLock texto="Massinha"/>

function App() {
  return (
    <div className="App">
      <Header />
      <Routes /> 
    </div>
  );
}

export default App;
