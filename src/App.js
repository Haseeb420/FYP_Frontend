import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './App.css';
import React, { Component } from 'react'
import HomePage from './components/mainPage/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/shared/About';
import Packages from './components/packages/Packages';
import LoginPage from './components/Login/LoginPage';
import Contact from './components/contact/Contact';

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>

      </>
    )
  }
}