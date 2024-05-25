import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './modules/homePage';
import { AboutPage } from './modules/aboutPage';
import ContactForm from './modules/contactForm';

function App() {
  return (
    <Router>
   
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='contact' element={<ContactForm/>}/>
        </Routes>
    </Router>
  );
}

export default App;
