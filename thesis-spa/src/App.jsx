// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DataVis from './components/DataVis';
import GreenTool from './components/GreenTool';
import Resources from './components/Resources';
/*import About from './pages/About';
import Resources from './pages/Resources';*/
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datavis" element={<DataVis />} />
          <Route path="/greentool" element={<GreenTool />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
