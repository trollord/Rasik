import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './modules/homePage';
import { ContactUsPage } from './modules/contactUsPage';
import { AboutPage } from './modules/aboutPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
    </Router>
  );
}

export default App;
