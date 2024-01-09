import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';
import Home from './Home';
import Chess from './Chess';
import Register from './Register';
import WebDev from './WebDev';
import GameDev from './GameDev';
import CompSci from './CompSci';
const MainContent = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/python" element={<CompSci />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/game-dev" element={<GameDev />} />
          <Route path="/register" element={<Register />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default MainContent;