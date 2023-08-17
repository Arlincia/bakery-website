import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import HomePage from './Homepage'
import AboutPage from './AboutPage'
import MenuPage from './MenuPage';
import Header from './Header';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App
ReactDOM.render(<App />, document.getElementById('root'));