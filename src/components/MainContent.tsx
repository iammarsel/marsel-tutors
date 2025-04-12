import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext';
import Home from './Home';
import Chess from './Chess';
import Software from './Software';
import Internship from './Internship';
import ScrollToTop from './ScrollToTop';
import Resume from './Resume';
const MainContent = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chess" element={<Chess />} />
          <Route path="/software" element={<Software />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
};

export default MainContent;