import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';
import Home from './Home';
import Chess from './Chess';
import WebDev from './WebDev';
import Internship from './Internship';
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
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainContent;