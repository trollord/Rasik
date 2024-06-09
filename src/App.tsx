import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { HomePage } from './modules/homePage';
import { theme } from './theme';
// import { ServicePage } from './modules/servicePage';
import "./global.css";
import { ServicePageWrapper } from './modules/servicePage/servicesWrapper';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* The services page will open with a single service displayed. We will determine the method by which the service is selected and displayed on the page*/}
          <Route path="/services/*" element={<ServicePageWrapper />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
