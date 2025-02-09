import React from "react";
import "../styles/SearchBar.css";

const Footer = () => {
    return (
        <footer style={{
            width: "100%",
            padding: "20px 0",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            marginTop: "30px",
            borderTop: "1px solid #ddd",
            position: "relative",
            left: 0,
            right: 0
        }}>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#666" }}>© 2025 서강팅. All rights reserved.</p>
        </footer>
    );
};

export default Footer;