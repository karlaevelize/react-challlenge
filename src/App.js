import './App.css';
import { Routes, Route } from "react-router-dom"
import Characters from './pages/Characters';
import CharDetails from './pages/CharDetails';
import HouseDetails from './pages/HouseDetails';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/house/:houseId" element={<HouseDetails/>}/>
        <Route path="/character/:characterId" element={<CharDetails/>}/>
        <Route exact path="/" element={<Characters/>}/>
      </Routes>
    </div>
  );
}

export default App;
