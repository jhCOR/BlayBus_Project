import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import ProfileTabs from "../components/ProfileTabs";
import PhotoGallery from "../components/PhotoGallery";
import ProfileEditForm from "../components/ProfileEditForm";
import "../styles/Profile.css";
import mainPhoto from "../assets/profile/profile_female.png";
import photo1 from "../assets/profile/profile_female.png";
import photo2 from "../assets/profile/profile_female_2.png";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [isEditing, setIsEditing] = useState(false);
  const [photos, setPhotos] = useState([photo1, photo2]);
  const navigate = useNavigate();

  // 기본 프로필 정보
  const [profileInfo, setProfileInfo] = useState({
    intro: "안녕하세요! 저는 활발하고 긍정적인 사람입니다.!",
    age: "만 24세 (1999년생)",
    location: "서울특별시",
  });

  const handleProfileEdit = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfileInfo(updatedProfile);
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setPhotos([...photos, ...newFiles]);
  };

  return (
    <div className="profile-container">
      {/* 홈으로 가기 아이콘 버튼 */}
      <button className="home-icon-button" onClick={() => navigate("/")}>
        <FaHome />
      </button>

      {/* 프로필 이미지와 이름 */}
      <div className="profile-header">
        <img src={mainPhoto} alt="프로필 사진" className="profile-photo" />
        <h2>나의 프로필</h2>
      </div>
      <div className="button-group">
        <button className="request-button" onClick={handleProfileEdit}>
          프로필 수정하기
        </button>
        <label className="request-button" htmlFor="photo-upload" >
          사진 업로드
        </label>
        <input
          id="photo-upload"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          multiple
          style={{ display: "none" }}
        />
      </div>
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="profile-content">
        {activeTab === "info" && (
          <div className="profile-info">
            <p>
              <strong>소개:</strong> {profileInfo.intro}
            </p>
            <p>
              <strong>나이:</strong> {profileInfo.age}
            </p>
            <p>
              <strong>위치:</strong> {profileInfo.location}
            </p>
          </div>
        )}
        {activeTab === "photos" && <PhotoGallery photos={photos} />}
      </div>
      
      {isEditing && (
        <ProfileEditForm
          defaultProfile={profileInfo}
          onSave={handleSaveProfile}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default Profile;
