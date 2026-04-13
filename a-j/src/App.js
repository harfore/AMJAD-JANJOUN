import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
