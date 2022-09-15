import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import CSS
import './App.css';

// Import Components
import Nav from './Components/Nav';

// Import Pages
import Home from './Pages/Home';
import DetailCar from './Pages/DetailCar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Super Carlist</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<DetailCar />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
