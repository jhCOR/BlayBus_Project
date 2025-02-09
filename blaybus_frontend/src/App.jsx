import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Router 제거
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import Profile from "./pages/Profile"; // 프로필 컴포넌트 추가

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default App;
