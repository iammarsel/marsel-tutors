//import Navbar from './components/Navbar'
import { DarkModeProvider  } from './DarkModeContext';
import MainContent from './components/MainContent';
function App() {
  return (
    <DarkModeProvider>
    <MainContent />
    </DarkModeProvider>
  )
}

export default App
