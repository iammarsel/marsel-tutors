import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';
import Home from './Home';
import Chess from './Chess';
import Register from './Register';

const MainContent = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/register" element={<Register />} />
          {/* Other routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default MainContent;