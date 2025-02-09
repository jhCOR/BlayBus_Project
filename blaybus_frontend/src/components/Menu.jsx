import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/Menu.css";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOutsideClick = (e) => {
    if (isMobileMenuOpen && !e.target.closest(".menu-bar")) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="menu-bar">
      {/* 모바일용 햄버거 메뉴 아이콘 */}
      <button
        className="hamburger-btn"
        onClick={handleMenuToggle}
        aria-label="Toggle Menu"
      >
        <FaBars />
      </button>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu">
            <button
              className="close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>
            <Link to="/profile" onClick={() => setIsMobileMenuOpen(false)}>프로필</Link>
            <Link to="/messages" onClick={() => setIsMobileMenuOpen(false)}>메세지함</Link>
            <Link to="/settings" onClick={() => setIsMobileMenuOpen(false)}>설정</Link>
          </div>
        </div>
      )}

      {/* 메뉴 링크 - 데스크톱 */}
      <div className="menu-links">
        <Link to="/profile">프로필</Link>
        <Link to="/messages">메세지함</Link>
        <Link to="/settings">설정</Link>
      </div>
    </nav>
  );
};

export default Menu;
