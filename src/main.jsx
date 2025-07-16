
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Admin from './components/Admin.jsx';
import { LanguageProvider } from './contexts/LanguageContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LanguageProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </LanguageProvider>
    </React.StrictMode>
);
