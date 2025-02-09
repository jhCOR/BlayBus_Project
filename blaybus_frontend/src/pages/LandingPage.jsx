// ...existing code...
import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import "../styles/LandingPage.css";
import Menu from "../components/Menu";

import maleImg from "/src/assets/img/male.png";
import femaleImg from "/src/assets/img/female.png";
import datingGif from "/src/assets/clip/dating.gif";

// 로그인 모달
function LoginModal({ onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 처리
    onClose();
  };
  return (
    <div className="login-modal">
      <div className="login-content">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="아이디" required />
          <input type="password" placeholder="비밀번호" required />
          <button type="submit">로그인</button>
        </form>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="landing-page">
      <Header />

      {/* 메뉴 컴포넌트 사용 */}
      <Menu />

      <main className="main-content">
        {/* 배경 GIF */}
        <div className="video-container">
          <img
            src={datingGif}
            alt="Dating animation"
            className="background-video"
          />
          <div className="overlay">
            <h1>BlayBus</h1>
            <p>Quick Development Template</p>
            <SearchBar />
          </div>
        </div>

        {/* 리뷰 섹션 */}
        <section className="review-section">
          <h3>리뷰&gt;</h3>
          <Slider {...sliderSettings}>
            {[
              {
                img: maleImg,
                age: "요양사 1",
                date: "2025.01.14",
                review: "어쩌고",
              },
              {
                img: femaleImg,
                age: "요양사 2",
                date: "2025.01.13",
                review: "저쩌고",
              },
              {
                img: maleImg,
                age: "요양사 3",
                date: "2025.01.12",
                review: "멋져요!",
              },
            ].map(({ img, age, date, review }, index) => (
              <div className="review-card" key={index}>
                <img src={img} alt="User" />
                <div>
                  <p>{age}</p>
                  <span>{date}</span>
                </div>
                <p>{review}</p>
              </div>
            ))}
          </Slider>
        </section>
      </main>

      <Footer />

      {/* 로그인 모달 */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </div>
  );
};

export default LandingPage;
// ...existing code...
